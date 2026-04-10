import { BASE_COMPANIES } from "./data.js";

const STORAGE_KEY = "insurance-company-hub:v1";
const CHRURCK_BASE = "http://www.chrurck.com";

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
  "chubb-nonlife": `${CHRURCK_BASE}/images/kor15r-18-0402/sub/fire_logo13.jpg`,
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
  tabs: Array.from(document.querySelectorAll(".tab")),
};

let state = {
  category: "all",
  query: "",
  companies: loadCompanies(),
  editingId: null,
};

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
    roles: {
      branchManager: {
        name: c?.roles?.branchManager?.name || "",
        phone: c?.roles?.branchManager?.phone || "",
      },
      manager: {
        name: c?.roles?.manager?.name || "",
        phone: c?.roles?.manager?.phone || "",
      },
      admin: {
        name: c?.roles?.admin?.name || "",
        phone: c?.roles?.admin?.phone || "",
      },
    },
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
  setFormValue(form, "roles.manager.name", company?.roles?.manager?.name || "");
  setFormValue(
    form,
    "roles.manager.phone",
    company?.roles?.manager?.phone || "",
  );
  setFormValue(form, "roles.admin.name", company?.roles?.admin?.name || "");
  setFormValue(form, "roles.admin.phone", company?.roles?.admin?.phone || "");

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
      roles: {
        branchManager: {
          name: getFormValue(form, "roles.branchManager.name"),
          phone: getFormValue(form, "roles.branchManager.phone"),
        },
        manager: {
          name: getFormValue(form, "roles.manager.name"),
          phone: getFormValue(form, "roles.manager.phone"),
        },
        admin: {
          name: getFormValue(form, "roles.admin.name"),
          phone: getFormValue(form, "roles.admin.phone"),
        },
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

function render() {
  const list = filteredCompanies();
  els.resultCount.textContent = `${list.length}개 표시`;

  els.grid.innerHTML = list
    .map((c) => {
      const logoUrl = safeHref(resolveLogoUrl(c));
      const subtitle = categoryLabel(c.categoryId);
      const companyName = escapeHtml(c.name);
      const fallback = escapeHtml(initials(c.name));

      return `
        <article class="card" data-id="${escapeHtml(c.id)}">
          <div class="card__head">
            <div class="identity">
              <div class="logoWrap" aria-label="${companyName} 로고">
                ${
                  logoUrl
                    ? `<img class="logoImg" src="${escapeHtml(logoUrl)}" alt="${companyName} 로고" loading="lazy" referrerpolicy="no-referrer" data-fallback="${fallback}" />`
                    : `<div class="fallbackLogo" aria-hidden="true">${fallback}</div>`
                }
              </div>
              <div class="nameBlock">
                <div class="name">${companyName}</div>
                <div class="subline">${escapeHtml(subtitle)}</div>
              </div>
            </div>
            <div class="btnRow">
              <button class="btn btn--primary" type="button" data-action="edit">수정</button>
            </div>
          </div>

          <div class="card__body">
            <div class="facts">
              <div class="fact">
                <div class="fact__k">고객센터</div>
                <div class="fact__v">${escapeHtml(safeText(c.callCenter))}</div>
              </div>
              <div class="fact">
                <div class="fact__k">인콜 모니터링</div>
                <div class="fact__v">${escapeHtml(
                  safeText(c.inCallMonitoring),
                )}</div>
              </div>
              <div class="fact">
                <div class="fact__k">전산 헬프데스크</div>
                <div class="fact__v">${escapeHtml(safeText(c.helpdesk))}</div>
              </div>
              <div class="fact">
                <div class="fact__k">청구팩스</div>
                <div class="fact__v">${escapeHtml(safeText(c.claimFax))}</div>
              </div>
            </div>

            <div class="links">
              ${chip("홈페이지", c.homepageUrl, "primary")}
              ${chip("전산링크", c.systemLinkUrl, "primary")}
              ${chip("약관확인", c.termsUrl)}
              ${chip("보험금청구양식", c.claimFormUrl)}
            </div>

            <div class="roles" aria-label="담당자 연락처">
              <div class="roleLine">
                <b>지점장</b>
                <span>${escapeHtml(
                  [c.roles.branchManager.name, c.roles.branchManager.phone]
                    .filter(Boolean)
                    .join(" / ") || "—",
                )}</span>
              </div>
              <div class="roleLine">
                <b>매니저</b>
                <span>${escapeHtml(
                  [c.roles.manager.name, c.roles.manager.phone]
                    .filter(Boolean)
                    .join(" / ") || "—",
                )}</span>
              </div>
              <div class="roleLine">
                <b>총무</b>
                <span>${escapeHtml(
                  [c.roles.admin.name, c.roles.admin.phone]
                    .filter(Boolean)
                    .join(" / ") || "—",
                )}</span>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  wireLogoFallbacks();
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
}

function deleteCompany(id) {
  state.companies = state.companies.filter((c) => c.id !== id);
  saveCompanies(state.companies);
  render();
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
    roles: {
      branchManager: { name: "", phone: "" },
      manager: { name: "", phone: "" },
      admin: { name: "", phone: "" },
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
  render();
});

els.closeDialogBtn.addEventListener("click", closeDialog);
els.cancelBtn.addEventListener("click", closeDialog);

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

