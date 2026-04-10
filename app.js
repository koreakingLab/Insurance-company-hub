import { BASE_COMPANIES, CATEGORIES } from "./data.js";

const STORAGE_KEY = "insurance-company-hub:v1";
const CHRURCK_BASE = "https://www.chrurck.com";
const SYNC_ENDPOINT = "/api/sync-data";
const SYNC_KEY_SESSION = "insurance-company-hub:sync-key";

// Original logo+name images from source page
const SOURCE_LOGOS = {
  // 손해보험 1~14
  "aig-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo01.jpg`,
  "db-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo02.jpg`,
  "kb-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo03.jpg`,
  "mg-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo04n.png`,
  "nh-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo05.jpg`,
  "lotte-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo06.jpg`,
  "meritz-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo07.jpg`,
  "samsung-fire": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo08.jpg`,
  "hana-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo09.jpg`,
  "hanwha-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo10.jpg`,
  "hyundai-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo11.jpg`,
  "heungkuk-fire": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo12.jpg`,
  "chubb-nonlife": "https://logo.clearbit.com/chubb.com",
  "axa-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo14.jpg`,

  // 생명보험 1~21
  "aia-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo01.jpg`,
  "abl-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo02.jpg`,
  "cardif-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo03.jpg`,
  "db-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo04.jpg`,
  "dgb-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo05.jpg`,
  "ibk-pension": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo06.jpg`,
  "kb-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo07.jpg`,
  "kdb-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo08.jpg`,
  "nh-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo09.jpg`,
  "kyobo-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo10.jpg`,
  "tongyang-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo11.jpg`,
  "lina-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo12.jpg`,
  "metlife-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo13.jpg`,
  "miraeasset-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo14.jpg`,
  "samsung-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo15.jpg`,
  "shinhan-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo16.jpg`,
  "chubb-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo17.jpg`,
  "fubonhyundai-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo18.jpg`,
  "heungkuk-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo19.jpg`,
  "hanwha-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo20.jpg`,
  "hana-life": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/life_logo21.png`,

  // 공제회사 1~5
  "kfcc-mutual": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/gong_logo01.jpg`,
  "ktcu-mutual": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/gong_logo02.jpg`,
  "epost-mutual": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/gong_logo03.jpg`,
  "suhyup-mutual": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/gong_logo04.jpg`,
  "cu-mutual": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/gong_logo05.jpg`,
};

const els = {
  grid: document.getElementById("grid"),
  resultCount: document.getElementById("resultCount"),
  searchInput: document.getElementById("searchInput"),
  resetBtn: document.getElementById("resetBtn"),
  addBtn: document.getElementById("addBtn"),
  editDialog: document.getElementById("editDialog"),
  editForm: document.getElementById("editForm"),
  dialogTitle: document.getElementById("dialogTitle"),
  closeDialogBtn: document.getElementById("closeDialogBtn"),
  cancelBtn: document.getElementById("cancelBtn"),
  deleteBtn: document.getElementById("deleteBtn"),
  textDialog: document.getElementById("textDialog"),
  textDialogTitle: document.getElementById("textDialogTitle"),
  textDialogBody: document.getElementById("textDialogBody"),
  closeTextDialogBtn: document.getElementById("closeTextDialogBtn"),
  syncToast: document.getElementById("syncToast"),
  tabs: Array.from(document.querySelectorAll(".tab")),
};

let state = {
  category: "nonlife",
  query: "",
  companies: loadCompanies(),
  editingId: null,
};

let syncInFlight = false;
let syncToastTimer = null;

function loadCompanies() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(BASE_COMPANIES);
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return structuredClone(BASE_COMPANIES);
    return normalizeCompanies(parsed);
  } catch {
    return structuredClone(BASE_COMPANIES);
  }
}

function saveCompanies(companies) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(companies));
}

function getCategoryList() {
  if (Array.isArray(CATEGORIES) && CATEGORIES.length) return CATEGORIES;
  return [
    { id: "nonlife", label: "손해보험" },
    { id: "life", label: "생명보험" },
    { id: "mutual", label: "공제회사" },
  ];
}

function askSyncKey() {
  const cached = sessionStorage.getItem(SYNC_KEY_SESSION);
  if (cached) return cached;
  const typed = prompt(
    "GitHub 자동 반영용 관리자 키를 입력하세요.\n(취소하면 이번 변경은 로컬에만 저장됩니다)",
  );
  const key = String(typed || "").trim();
  if (!key) return "";
  sessionStorage.setItem(SYNC_KEY_SESSION, key);
  return key;
}

function showSyncToast(type, message, keep = false) {
  if (!els.syncToast) return;
  if (syncToastTimer) {
    clearTimeout(syncToastTimer);
    syncToastTimer = null;
  }
  els.syncToast.className = `syncToast syncToast--${type}`;
  els.syncToast.textContent = message;
  if (!keep) {
    syncToastTimer = window.setTimeout(() => {
      els.syncToast.className = "syncToast is-hidden";
      els.syncToast.textContent = "";
    }, 2800);
  }
}

async function syncToGithub(reason) {
  if (syncInFlight) return;
  syncInFlight = true;
  showSyncToast("loading", "GitHub 자동 반영 중...", true);
  try {
    const payload = {
      companies: state.companies,
      categories: getCategoryList(),
      reason,
    };

    let res = await fetch(SYNC_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.status === 401) {
      showSyncToast("loading", "관리자 키를 입력하면 GitHub 반영을 계속합니다.", true);
      const key = askSyncKey();
      if (!key) {
        showSyncToast("error", "관리자 키 미입력: 로컬 저장만 완료되었습니다.");
        syncInFlight = false;
        return;
      }
      res = await fetch(SYNC_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-sync-key": key,
        },
        body: JSON.stringify(payload),
      });
    }

    if (!res.ok) {
      const msg = await res.text();
      throw new Error(msg || `sync failed: ${res.status}`);
    }
    showSyncToast("success", "GitHub 자동 반영이 완료되었습니다.");
  } catch (err) {
    console.error(err);
    showSyncToast("error", "GitHub 자동 반영 실패: 로컬 저장만 완료되었습니다.", true);
  } finally {
    syncInFlight = false;
  }
}

function normalizeCompanies(list) {
  return list.map((c, idx) => ({
    id: String(c?.id || `custom-${idx}-${Date.now()}`),
    categoryId: c?.categoryId || "nonlife",
    name: c?.name || "",
    logoUrl: c?.logoUrl || "",
    homepageUrl: c?.homepageUrl || "",
    systemLinkUrl: c?.systemLinkUrl || "",
    callCenter: c?.callCenter || "",
    inCallMonitoring: c?.inCallMonitoring || "",
    helpdesk: c?.helpdesk || "",
    claimFax: c?.claimFax || "",
    termsUrl: c?.termsUrl || "",
    claimFormUrl: c?.claimFormUrl || "",
    branchCode: c?.branchCode || "",
    assignee: c?.assignee || "",
    generalAffairsText:
      c?.generalAffairsText ||
      [c?.roles?.admin?.name, c?.roles?.admin?.phone].filter(Boolean).join(" / "),
    noteText: c?.noteText || "",
    roles: {
      branchManager: {
        name: c?.roles?.branchManager?.name || "",
        phone: c?.roles?.branchManager?.phone || "",
      },
      viceBranchManager: {
        name: c?.roles?.viceBranchManager?.name || "",
        phone: c?.roles?.viceBranchManager?.phone || "",
      },
      managers: normalizeManagers(c?.roles),
    },
  }));
}

function normalizeManagers(roles) {
  const fromArray = Array.isArray(roles?.managers) ? roles.managers : [];
  const fromLegacy = roles?.manager ? [roles.manager] : [];
  const source = [...fromArray, ...fromLegacy].slice(0, 3);
  while (source.length < 3) source.push({});
  return source.map((m) => ({
    name: m?.name || "",
    phone: m?.phone || "",
  }));
}

function categoryLabel(categoryId) {
  if (categoryId === "nonlife") return "손해보험";
  if (categoryId === "life") return "생명보험";
  if (categoryId === "mutual") return "공제회사";
  return categoryId;
}

function safeText(v, fallback = "—") {
  const s = String(v ?? "").trim();
  return s.length ? s : fallback;
}

function safeHref(v) {
  const s = String(v ?? "").trim();
  if (!s) return "";
  try {
    const url = new URL(s, window.location.href);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    return url.toString();
  } catch {
    return "";
  }
}

function resolveLogoUrl(company) {
  const raw = String(company?.logoUrl || "").trim();
  const isLegacyClearbit = raw.includes("logo.clearbit.com");
  const preferred = SOURCE_LOGOS[company.id];
  if (preferred && (!raw || isLegacyClearbit)) return preferred;
  return raw;
}

function initials(name) {
  const s = String(name || "").trim();
  if (!s) return "?";
  const cleaned = s.replace(/\(.*?\)/g, "").trim();
  const parts = cleaned.split(/\s+/g).filter(Boolean);
  const first = parts[0] || cleaned;
  const two = Array.from(first).slice(0, 2).join("");
  return two.toUpperCase();
}

function openDialog(company) {
  state.editingId = company?.id || null;
  els.dialogTitle.textContent = state.editingId
    ? "보험회사 정보 수정"
    : "보험회사 추가";
  els.deleteBtn.style.visibility = state.editingId ? "visible" : "hidden";

  const form = els.editForm;
  form.reset();
  setFormValue(form, "id", company?.id || "");
  setFormValue(form, "name", company?.name || "");
  setFormValue(form, "categoryId", company?.categoryId || "nonlife");
  setFormValue(form, "logoUrl", company?.logoUrl || "");
  setFormValue(form, "homepageUrl", company?.homepageUrl || "");
  setFormValue(form, "systemLinkUrl", company?.systemLinkUrl || "");
  setFormValue(form, "callCenter", company?.callCenter || "");
  setFormValue(form, "inCallMonitoring", company?.inCallMonitoring || "");
  setFormValue(form, "helpdesk", company?.helpdesk || "");
  setFormValue(form, "claimFax", company?.claimFax || "");
  setFormValue(form, "termsUrl", company?.termsUrl || "");
  setFormValue(form, "claimFormUrl", company?.claimFormUrl || "");
  setFormValue(form, "generalAffairsText", company?.generalAffairsText || "");
  setFormValue(form, "noteText", company?.noteText || "");

  setFormValue(
    form,
    "roles.branchManager.name",
    company?.roles?.branchManager?.name || "",
  );
  setFormValue(
    form,
    "roles.branchManager.phone",
    company?.roles?.branchManager?.phone || "",
  );
  setFormValue(
    form,
    "roles.viceBranchManager.name",
    company?.roles?.viceBranchManager?.name || "",
  );
  setFormValue(
    form,
    "roles.viceBranchManager.phone",
    company?.roles?.viceBranchManager?.phone || "",
  );
  setFormValue(
    form,
    "roles.managers.0.name",
    company?.roles?.managers?.[0]?.name || "",
  );
  setFormValue(
    form,
    "roles.managers.0.phone",
    company?.roles?.managers?.[0]?.phone || "",
  );
  setFormValue(
    form,
    "roles.managers.1.name",
    company?.roles?.managers?.[1]?.name || "",
  );
  setFormValue(
    form,
    "roles.managers.1.phone",
    company?.roles?.managers?.[1]?.phone || "",
  );
  setFormValue(
    form,
    "roles.managers.2.name",
    company?.roles?.managers?.[2]?.name || "",
  );
  setFormValue(
    form,
    "roles.managers.2.phone",
    company?.roles?.managers?.[2]?.phone || "",
  );

  els.editDialog.showModal();
}

function closeDialog() {
  state.editingId = null;
  if (els.editDialog.open) els.editDialog.close();
}

function setFormValue(form, name, value) {
  const el = form.elements.namedItem(name);
  if (!el) return;
  el.value = value;
}

function getFormValue(form, name) {
  const el = form.elements.namedItem(name);
  if (!el) return "";
  return String(el.value ?? "");
}

function buildCompanyFromForm(form, fallbackId) {
  const id =
    getFormValue(form, "id").trim() ||
    fallbackId ||
    `custom-${crypto.randomUUID()}`;
  const existing = state.companies.find((c) => c.id === id);
  return normalizeCompanies([
    {
      id,
      name: getFormValue(form, "name"),
      categoryId: getFormValue(form, "categoryId"),
      logoUrl: getFormValue(form, "logoUrl"),
      homepageUrl: getFormValue(form, "homepageUrl"),
      systemLinkUrl: getFormValue(form, "systemLinkUrl"),
      callCenter: getFormValue(form, "callCenter"),
      inCallMonitoring: getFormValue(form, "inCallMonitoring"),
      helpdesk: getFormValue(form, "helpdesk"),
      claimFax: getFormValue(form, "claimFax"),
      termsUrl: getFormValue(form, "termsUrl"),
      claimFormUrl: getFormValue(form, "claimFormUrl"),
      branchCode: existing?.branchCode || "",
      assignee: existing?.assignee || "",
      generalAffairsText: getFormValue(form, "generalAffairsText"),
      noteText: getFormValue(form, "noteText"),
      roles: {
        branchManager: {
          name: getFormValue(form, "roles.branchManager.name"),
          phone: getFormValue(form, "roles.branchManager.phone"),
        },
        viceBranchManager: {
          name: getFormValue(form, "roles.viceBranchManager.name"),
          phone: getFormValue(form, "roles.viceBranchManager.phone"),
        },
        managers: [
          {
            name: getFormValue(form, "roles.managers.0.name"),
            phone: getFormValue(form, "roles.managers.0.phone"),
          },
          {
            name: getFormValue(form, "roles.managers.1.name"),
            phone: getFormValue(form, "roles.managers.1.phone"),
          },
          {
            name: getFormValue(form, "roles.managers.2.name"),
            phone: getFormValue(form, "roles.managers.2.phone"),
          },
        ],
      },
    },
  ])[0];
}

function selectCategory(category) {
  state.category = category;
  for (const t of els.tabs) {
    const isActive = t.dataset.category === category;
    t.classList.toggle("is-active", isActive);
    if (isActive) t.setAttribute("aria-current", "true");
    else t.removeAttribute("aria-current");
  }
  render();
}

function filteredCompanies() {
  const q = state.query.trim().toLowerCase();
  return state.companies
    .filter((c) =>
      state.category === "all" ? true : c.categoryId === state.category,
    )
    .filter((c) => (q ? c.name.toLowerCase().includes(q) : true))
    .sort((a, b) => a.name.localeCompare(b.name, "ko"));
}

function chip(label, href, variant = "") {
  const url = safeHref(href);
  if (!url) return "";
  const cls = variant ? `chip chip--${variant}` : "chip";
  return `<a class="${cls}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function roleContact(role) {
  if (!role) return "—";
  const name = normalizeRoleName(role.name);
  const phone = normalizeRolePhone(role.phone);
  return [name, phone].filter(Boolean).join(" / ") || "—";
}

function normalizeRoleName(v) {
  return String(v || "")
    .replace(/^[\s\-–—_*•]+/g, "")
    .replace(/[\s\-–—_*•]+$/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function normalizeRolePhone(v) {
  const s = String(v || "");
  const m = s.match(/(?:01[0-9]-?\d{3,4}-?\d{4})|(?:0\d{1,2}-?\d{3,4}-?\d{4})/);
  if (m) return m[0].replace(/\s+/g, "");
  return s.replace(/\s{2,}/g, " ").trim();
}

function extractFirstPhone(v) {
  const s = String(v || "");
  const m = s.match(
    /(?:01[0-9]-?\d{3,4}-?\d{4})|(?:0\d{1,2}-?\d{3,4}-?\d{4})|(?:1[568]\d{2}-?\d{4})/,
  );
  return m ? m[0].replace(/\s+/g, "") : "";
}

function digitsOnlyPhone(v) {
  return String(v || "").replace(/[^\d]/g, "");
}

function roleContactHtml(role) {
  const name = normalizeRoleName(role?.name || "");
  const phone = normalizeRolePhone(role?.phone || "");
  if (!name && !phone) return "—";
  if (!phone) return escapeHtml(name);
  return `${escapeHtml(name)} / <a class="phoneLink" href="tel:${digitsOnlyPhone(phone)}">${escapeHtml(phone)}</a>`;
}

function renderBranchRole(company) {
  const branch = company?.roles?.branchManager || {};
  const vice = company?.roles?.viceBranchManager || {};
  const hasBranch = Boolean((branch.name || "").trim() || (branch.phone || "").trim());
  const hasVice = Boolean((vice.name || "").trim() || (vice.phone || "").trim());

  if (hasBranch && hasVice) {
    const selectId = `branch-select-${escapeHtml(company.id)}`;
    return `
      <div class="roleLine roleLine--dropdown">
        <b>지점장</b>
        <div class="roleSelectWrap">
          <span class="roleSubIcon is-hidden" aria-hidden="true">부</span>
          <select id="${selectId}" class="roleSelect" aria-label="지점장 또는 부지점장 선택" data-sub-icon-target="1" data-call-on-change="1">
            <option value="${escapeHtml(roleContact(branch))}">${escapeHtml(roleContact(branch))}</option>
            <option value="${escapeHtml(roleContact(vice))}">${escapeHtml(roleContact(vice))}</option>
          </select>
        </div>
      </div>
    `;
  }

  return `
    <div class="roleLine">
      <b>지점장</b>
      <span>${hasVice && !hasBranch ? `<span class="roleSubIcon roleSubIcon--inline" aria-hidden="true">부</span> ` : ""}${hasBranch ? roleContactHtml(branch) : hasVice ? roleContactHtml(vice) : "—"}</span>
    </div>
  `;
}

function renderManagerRole(company) {
  const managers = (company?.roles?.managers || []).filter(
    (m) => (m?.name || "").trim() || (m?.phone || "").trim(),
  );
  if (managers.length >= 2) {
    const selectId = `manager-select-${escapeHtml(company.id)}`;
    return `
      <div class="roleLine roleLine--dropdown">
        <b>매니저</b>
        <div class="roleSelectWrap">
          <span class="roleSubIcon is-hidden" aria-hidden="true">부</span>
          <select id="${selectId}" class="roleSelect" aria-label="매니저 선택" data-sub-icon-target="1" data-call-on-change="1">
          ${managers
            .map(
              (m) =>
                `<option value="${escapeHtml(roleContact(m))}">${escapeHtml(roleContact(m))}</option>`,
            )
            .join("")}
          </select>
        </div>
      </div>
    `;
  }

  return `
    <div class="roleLine">
      <b>매니저</b>
      <span>${managers[0] ? roleContactHtml(managers[0]) : "—"}</span>
    </div>
  `;
}

function textChip(label, text) {
  const value = String(text ?? "").trim();
  if (!value) return "";
  return `<button class="chip" type="button" data-action="show-text" data-popup-title="${escapeHtml(label)}" data-popup-content="${encodeURIComponent(value)}">${escapeHtml(label)}</button>`;
}

function factBox(label, value, dialable = true) {
  const raw = safeText(value);
  const phone = dialable ? extractFirstPhone(raw) : "";
  return `
    <button
      class="fact fact--btn"
      type="button"
      data-action="show-text"
      data-popup-title="${escapeHtml(label)}"
      data-popup-content="${encodeURIComponent(raw)}"
      data-popup-phone="${escapeHtml(phone)}"
      data-popup-dialable="${dialable ? "1" : "0"}"
    >
      <div class="fact__k">${escapeHtml(label)}</div>
      <div class="fact__v" title="${escapeHtml(raw)}">${escapeHtml(raw)}</div>
    </button>
  `;
}

function openTextDialog(title, body) {
  els.textDialogTitle.textContent = `${title} 상세`;
  els.textDialogBody.innerHTML = `
    <div class="textDialog__content">${escapeHtml(body)}</div>
  `;
  els.textDialog.showModal();
}

function closeTextDialog() {
  if (els.textDialog.open) els.textDialog.close();
}

function render() {
  const list = filteredCompanies();
  els.resultCount.textContent = `${list.length}개 표시`;

  els.grid.innerHTML = list
    .map((c) => {
      const logoUrl = safeHref(resolveLogoUrl(c));
      const homepageUrl = safeHref(c.homepageUrl);
      const codeAndAssignee = [String(c.branchCode || "").trim(), String(c.assignee || "").trim()]
        .filter(Boolean)
        .join(" / ");
      const companyName = escapeHtml(c.name);
      const fallback = escapeHtml(initials(c.name));
      const logoInner = logoUrl
        ? `<img class="logoImg" src="${escapeHtml(logoUrl)}" alt="${companyName} 로고" loading="lazy" referrerpolicy="no-referrer" data-fallback="${fallback}" />`
        : `<div class="fallbackLogo" aria-hidden="true">${fallback}</div>`;
      const logoBlock = homepageUrl
        ? `<a class="logoLink" href="${escapeHtml(homepageUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${companyName} 홈페이지 바로가기">${logoInner}</a>`
        : logoInner;

      return `
        <article class="card" data-id="${escapeHtml(c.id)}">
          <div class="card__head">
            <div class="identity">
              <div class="logoWrap" aria-label="${companyName} 로고">
                ${logoBlock}
              </div>
              <div class="nameBlock">
                <div class="name">${companyName}</div>
                <div class="subline">${escapeHtml(codeAndAssignee || " ")}</div>
              </div>
            </div>
            <div class="btnRow">
              <button class="btn btn--primary" type="button" data-action="edit">수정</button>
            </div>
          </div>

          <div class="card__body">
            <div class="facts">
              ${factBox("고객센터", c.callCenter, true)}
              ${factBox("인콜 모니터링", c.inCallMonitoring, true)}
              ${factBox("전산 헬프데스크", c.helpdesk, true)}
              ${factBox("청구팩스", c.claimFax, false)}
            </div>

            <div class="links">
              ${chip("전산", c.systemLinkUrl, "primary")}
              ${chip("약관", c.termsUrl)}
              ${chip("보험금청구양식", c.claimFormUrl)}
              ${textChip("총무", c.generalAffairsText)}
              ${textChip("비고", c.noteText)}
            </div>

            <div class="roles" aria-label="담당자 연락처">
              ${renderBranchRole(c)}
              ${renderManagerRole(c)}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  wireLogoFallbacks();
  wireRoleSelectIcons();
  wireRoleSelectCalls();
}

function wireLogoFallbacks() {
  const imgs = els.grid.querySelectorAll("img.logoImg[data-fallback]");
  for (const img of imgs) {
    if (img.dataset.wired === "1") continue;
    img.dataset.wired = "1";
    img.addEventListener(
      "error",
      () => {
        const fallback = img.dataset.fallback || "?";
        const el = document.createElement("div");
        el.className = "fallbackLogo";
        el.textContent = fallback;
        img.replaceWith(el);
      },
      { once: true },
    );
  }
}

function wireRoleSelectIcons() {
  const selects = els.grid.querySelectorAll("select.roleSelect[data-sub-icon-target]");
  for (const select of selects) {
    const wrap = select.closest(".roleSelectWrap");
    const icon = wrap?.querySelector(".roleSubIcon");
    if (!icon) continue;
    const target = Number(select.dataset.subIconTarget || "1");
    const refresh = () => {
      icon.classList.toggle("is-hidden", select.selectedIndex < target);
    };
    if (select.dataset.wired === "1") {
      refresh();
      continue;
    }
    select.dataset.wired = "1";
    select.addEventListener("change", refresh);
    refresh();
  }
}

function wireRoleSelectCalls() {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) return;
  const selects = els.grid.querySelectorAll(
    "select.roleSelect[data-call-on-change='1']",
  );
  for (const select of selects) {
    if (select.dataset.callWired === "1") continue;
    select.dataset.callWired = "1";
    select.addEventListener("change", () => {
      const phone = extractFirstPhone(select.value || "");
      if (!phone) return;
      window.location.href = `tel:${digitsOnlyPhone(phone)}`;
    });
  }
}

function getCompanyById(id) {
  return state.companies.find((c) => c.id === id) || null;
}

function upsertCompany(updated) {
  const next = [...state.companies];
  const i = next.findIndex((c) => c.id === updated.id);
  if (i >= 0) next[i] = updated;
  else next.push(updated);
  state.companies = next;
  saveCompanies(state.companies);
  render();
  void syncToGithub("upsert");
}

function deleteCompany(id) {
  state.companies = state.companies.filter((c) => c.id !== id);
  saveCompanies(state.companies);
  render();
  void syncToGithub("delete");
}

els.tabs.forEach((t) => {
  t.addEventListener("click", () =>
    selectCategory(t.dataset.category || "all"),
  );
});

els.searchInput.addEventListener("input", () => {
  state.query = els.searchInput.value || "";
  render();
});

els.grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === "show-text") {
    const title = btn.dataset.popupTitle || "상세";
    const content = decodeURIComponent(btn.dataset.popupContent || "");
    const phone = btn.dataset.popupPhone || extractFirstPhone(content);
    const isFactButton = btn.classList.contains("fact--btn");
    const isDialableFact = isFactButton && btn.dataset.popupDialable === "1";
    if (phone && isDialableFact) {
      window.location.href = `tel:${digitsOnlyPhone(phone)}`;
      return;
    }
    openTextDialog(title, content);
    return;
  }
  const card = btn.closest(".card");
  const id = card?.dataset?.id;
  if (!id) return;

  if (action === "edit") {
    const company = getCompanyById(id);
    if (company) openDialog(company);
  }
});

els.addBtn.addEventListener("click", () => {
  openDialog({
    id: "",
    categoryId: state.category !== "all" ? state.category : "nonlife",
    name: "",
    logoUrl: "",
    homepageUrl: "",
    systemLinkUrl: "",
    callCenter: "",
    inCallMonitoring: "",
    helpdesk: "",
    claimFax: "",
    termsUrl: "",
    claimFormUrl: "",
    generalAffairsText: "",
    noteText: "",
    roles: {
      branchManager: { name: "", phone: "" },
      viceBranchManager: { name: "", phone: "" },
      managers: [
        { name: "", phone: "" },
        { name: "", phone: "" },
        { name: "", phone: "" },
      ],
    },
  });
});

els.resetBtn.addEventListener("click", () => {
  const ok = confirm(
    "기본 데이터로 초기화할까요? (수정 내용이 삭제됩니다)",
  );
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEY);
  state.companies = structuredClone(BASE_COMPANIES);
  saveCompanies(state.companies);
  render();
  void syncToGithub("reset");
});

els.closeDialogBtn.addEventListener("click", closeDialog);
els.cancelBtn.addEventListener("click", closeDialog);
els.closeTextDialogBtn.addEventListener("click", closeTextDialog);

els.deleteBtn.addEventListener("click", () => {
  const id = getFormValue(els.editForm, "id").trim();
  if (!id) return closeDialog();
  const ok = confirm("이 회사를 삭제할까요?");
  if (!ok) return;
  deleteCompany(id);
  closeDialog();
});

els.editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const existingId = getFormValue(els.editForm, "id").trim();
  const updated = buildCompanyFromForm(els.editForm, existingId);
  upsertCompany(updated);
  closeDialog();
});

render();

