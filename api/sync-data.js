module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const requiredKey = process.env.SYNC_WRITE_KEY || "";
  const headerKey = String(req.headers["x-sync-key"] || "").trim();
  if (requiredKey && headerKey !== requiredKey) {
    return res.status(401).send("Unauthorized");
  }

  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO; // owner/repo
  const branch = process.env.GITHUB_BRANCH || "main";
  const filePath = process.env.GITHUB_DATA_PATH || "data.js";

  if (!token || !repo) {
    return res
      .status(500)
      .send("Missing env: GITHUB_TOKEN and GITHUB_REPO are required");
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const companies = Array.isArray(body?.companies) ? body.companies : null;
    const categories = Array.isArray(body?.categories) ? body.categories : null;
    const reason = String(body?.reason || "update");

    if (!companies) {
      return res.status(400).send("Invalid payload: companies is required");
    }

    const safeCategories =
      categories && categories.length
        ? categories
        : [
            { id: "nonlife", label: "손해보험" },
            { id: "life", label: "생명보험" },
            { id: "mutual", label: "공제회사" },
          ];

    const content = buildDataFile(safeCategories, companies);

    const encodedPath = filePath
      .split("/")
      .map((p) => encodeURIComponent(p))
      .join("/");
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${encodedPath}`;

    const current = await fetch(`${apiUrl}?ref=${encodeURIComponent(branch)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!current.ok) {
      const msg = await current.text();
      return res
        .status(500)
        .send(`Failed to read current file from GitHub: ${msg}`);
    }
    const currentJson = await current.json();
    const sha = currentJson.sha;

    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `chore: sync companies from web (${reason})`,
        content: Buffer.from(content, "utf8").toString("base64"),
        sha,
        branch,
      }),
    });

    if (!putRes.ok) {
      const msg = await putRes.text();
      return res.status(500).send(`Failed to commit data.js: ${msg}`);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).send(`Sync failed: ${err.message}`);
  }
};

function buildDataFile(categories, companies) {
  return `// Base dataset (can be overridden by localStorage in app.js)
// Source: http://www.chrurck.com/?act=info.page&pcode=sub1_3

export const CATEGORIES = ${JSON.stringify(categories, null, 2)};

function clearbitLogo(domain) {
  return domain ? \`https://logo.clearbit.com/\${domain}\` : "";
}

export const BASE_COMPANIES = ${JSON.stringify(companies, null, 2)};
`;
}
