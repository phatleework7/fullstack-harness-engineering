const translations = {
  vi: {
    metaTitle: "FunFam Projects Hub",
    metaDescription: "Trang tổng hợp các project ý nghĩa cho gia đình, người yêu, và công việc cá nhân.",
    nav: {
      projects: "Projects",
      collections: "Bộ sưu tập",
      timeline: "Timeline",
      workflow: "Hướng học",
      menu: "Mở menu",
    },
    hero: {
      eyebrow: "FunFam Collection",
      title: "Nơi gom tất cả project ý nghĩa cho gia đình, người yêu, và hành trình xây dựng thương hiệu cá nhân.",
      body: "Trang này giúp bạn lưu trữ, giới thiệu, và xem nhanh các website cá nhân trong một giao diện gọn gàng hơn. Rê chuột vào card để thử mở preview ngay trên trang khi website cho phép nhúng iframe.",
      primaryCta: "Xem project",
      secondaryCta: "Chế độ trình chiếu",
      panelLabel: "Vì sao hub này hữu ích",
      panelOneTitle: "Showcase",
      panelOneBody: "Gộp các side project đầy cảm xúc thành một portfolio cá nhân gọn gàng và có chủ ý.",
      panelTwoTitle: "Preview",
      panelTwoBody: "Xem nhanh từng website ngay trong hub thay vì mở từng tab riêng.",
      panelThreeTitle: "Reflect",
      panelThreeBody: "Gắn mỗi project với một mục học kỹ thuật để portfolio cũng trở thành phòng lab cá nhân.",
    },
    stats: {
      total: "tổng project",
      family: "dành cho gia đình",
      girlfriend: "dành cho người yêu",
      personal: "personal and work",
      familyLinkAria: "Xem tất cả project dành cho gia đình",
      girlfriendLinkAria: "Xem tất cả project dành cho người yêu và đồng hồ yêu nhau",
      personalLinkAria: "Xem tất cả project cá nhân và công việc",
    },
    collections: {
      label: "Bộ sưu tập",
      title: "Ba mạch ý nghĩa, một kho lưu trữ cá nhân.",
      familyTag: "Nhánh gia đình",
      familyTitle: "Những project tôn vinh sinh nhật, kỷ niệm, và sự gần gũi.",
      familyBody: "Đây là những website ấm áp, trân trọng, thiên về kỷ niệm và phù hợp để trở thành món quà lâu dài cho người thân.",
      girlfriendTag: "Nhánh người yêu",
      girlfriendTitle: "Những project biến tình cảm thành trải nghiệm lãng mạn và vui chơi.",
      girlfriendBody: "Đây là những microsite và bất ngờ tương tác: hoa, game, dịp lễ, âm nhạc, và lời nhắn riêng.",
      personalTag: "Nhánh cá nhân và công việc",
      personalTitle: "Những project phục vụ kinh doanh, thương hiệu, và hình ảnh chuyên nghiệp.",
      personalBody: "Đây là các website portfolio, landing page kinh doanh, và những sản phẩm giúp bạn vừa học vừa tăng độ tin cậy nghề nghiệp.",
    },
    projects: {
      label: "Project Hub",
      title: "Lọc theo đối tượng và xem preview từng website ngay lập tức.",
      note: "Một số website deploy có thể chặn iframe. Khi đó card và nút mở website vẫn hoạt động bình thường.",
      searchLabel: "Tìm nhanh",
      searchPlaceholder: "Tìm theo tên, công nghệ, hoặc điểm nhấn",
      filterToggle: "Bộ lọc",
      filterToggleActive: "Ẩn bộ lọc",
      audienceFilterLabel: "Lọc đối tượng",
      stackFilterLabel: "Lọc công nghệ",
      statusFilterLabel: "Lọc trạng thái",
      copySummary: "Copy summary",
      copiedSummary: "Đã copy summary",
      clearFilters: "Đặt lại bộ lọc",
      resultsZero: "Không có project nào phù hợp với bộ lọc hiện tại.",
      resultsOne: "Đang hiện 1 project phù hợp.",
      resultsMany: "Đang hiện {count} project phù hợp.",
    },
    preview: {
      emptyLabel: "Hover Preview",
      emptyTitle: "Rê chuột vào một project để xem nhanh tại đây.",
      emptyBody: "Khung bên sẽ hiện mô tả, tag, mục tiêu và sau đó thử tải website thật.",
      audienceFamily: "Gia đình",
      audienceGirlfriend: "Người yêu",
      audiencePersonal: "Cá nhân / Work",
      goalLabel: "Mục tiêu",
      urlLabel: "Liên kết",
      openSite: "Mở website",
      copyLink: "Sao chép link",
      copied: "Đã sao chép",
      details: "Xem case study",
      source: "Source",
      highlightsLabel: "Điểm nhấn",
      stackLabel: "Công nghệ",
      fallbackLabel: "Preview fallback",
      fallbackTitle: "Website này có thể đang chặn iframe.",
      fallbackBody: "Bạn vẫn có thể mở trực tiếp trong tab mới để xem đầy đủ nội dung.",
      dedicatedPageLink: "Trang riêng (2 cửa sổ)",
    },
    detail: {
      problem: "Bài toán",
      outcome: "Kết quả",
      lesson: "Bài học",
      featuredSkill: "Kỹ năng chính",
      presentation: "Trình chiếu",
      previous: "Trước",
      next: "Sau",
    },
    timeline: {
      label: "Learning Timeline",
      title: "Mỗi project đã ship để lại một kỹ năng có thể tái sử dụng.",
    },
    workflow: {
      label: "Harness Your Learning",
      title: "Dùng project cá nhân như một sân tập engineering thật sự.",
      stepOneTitle: "1. Xây cho cảm xúc",
      stepOneBody: "Bắt đầu từ một mục đích thật: món quà sinh nhật, album kỷ niệm, bất ngờ cho người yêu, hay một trải nghiệm dịp lễ.",
      stepTwoTitle: "2. Mỗi project học 1 kỹ năng khó",
      stepTwoBody: "Gắn mỗi lần build với một bài học rõ ràng như animation, 3D, CI/CD, accessibility, testing, hoặc CMS.",
      stepThreeTitle: "3. Giữ vòng lặp engineering",
      stepThreeBody: "Sau khi ship, ghi lại điều gì hiệu quả, thứ gì có thể tái sử dụng, và bước tiếp theo cần nâng cấp. Mỗi món quà sẽ trở thành một lần tăng level.",
    },
    filters: {
      all: "Tất cả",
      family: "Gia đình",
      girlfriend: "Người yêu",
      personal: "Cá nhân / Work",
    },
    cards: {
      yearPrefix: "Năm",
      open: "Mở site",
      preview: "Xem preview",
      details: "Case study",
      emptyLabel: "Đang chờ dữ liệu",
      emptyTitle: "Chưa có project trong nhóm này.",
      emptyBody: "Bạn có thể thêm website mới trong file projects.js.",
    },
    status: {
      all: "Tất cả trạng thái",
      live: "Đang live",
      archived: "Lưu trữ",
      inProgress: "Đang làm",
      needsMetadata: "Cần metadata",
    },
  },
  en: {
    metaTitle: "FunFam Projects Hub",
    metaDescription: "A personal archive of meaningful projects built for family, girlfriend, and personal work.",
    nav: {
      projects: "Projects",
      collections: "Collections",
      timeline: "Timeline",
      workflow: "Workflow",
      menu: "Open menu",
    },
    hero: {
      eyebrow: "FunFam Collection",
      title: "A home for meaningful projects built for family, for her, and for your own personal brand.",
      body: "This website gathers your personal projects into one place so you can revisit, present, and preview them with ease. Hover a card to open a live preview right on the page whenever embedding is allowed.",
      primaryCta: "View projects",
      secondaryCta: "Presentation mode",
      panelLabel: "Why this hub works",
      panelOneTitle: "Showcase",
      panelOneBody: "Bring emotional side projects together into a polished personal portfolio.",
      panelTwoTitle: "Preview",
      panelTwoBody: "Inspect each deployed website quickly without opening a new tab every time.",
      panelThreeTitle: "Reflect",
      panelThreeBody: "Tie each build to one technical lesson so the portfolio also becomes your learning lab.",
    },
    stats: {
      total: "total projects",
      family: "for family",
      girlfriend: "for girlfriend",
      personal: "personal and work",
      familyLinkAria: "View all projects for family",
      girlfriendLinkAria: "View all girlfriend projects and the love timeline",
      personalLinkAria: "View all personal and work projects",
    },
    collections: {
      label: "Collections",
      title: "Three meaningful lanes, one personal archive.",
      familyTag: "Family side",
      familyTitle: "Projects that celebrate birthdays, memories, and closeness.",
      familyBody: "These are warm and thoughtful websites designed to preserve memories and become lasting gifts for relatives.",
      girlfriendTag: "Girlfriend side",
      girlfriendTitle: "Projects that turn feelings into playful, romantic experiences.",
      girlfriendBody: "These are emotional microsites and interactive surprises: flowers, games, holidays, music, and private notes.",
      personalTag: "Personal and work",
      personalTitle: "Projects for business, branding, and professional presentation.",
      personalBody: "These include portfolio websites, business landing pages, and projects that sharpen both craft and credibility.",
    },
    projects: {
      label: "Project Hub",
      title: "Filter by audience and preview each website instantly.",
      note: "Some deployed sites may block iframe embedding. When that happens, the card and direct-open flow still work.",
      searchLabel: "Quick search",
      searchPlaceholder: "Search by title, stack, or highlight",
      filterToggle: "Filters",
      filterToggleActive: "Hide filters",
      audienceFilterLabel: "Audience filter",
      stackFilterLabel: "Stack filter",
      statusFilterLabel: "Status filter",
      copySummary: "Copy summary",
      copiedSummary: "Summary copied",
      clearFilters: "Reset view",
      resultsZero: "No projects match the current filters.",
      resultsOne: "Showing 1 matching project.",
      resultsMany: "Showing {count} matching projects.",
    },
    preview: {
      emptyLabel: "Hover Preview",
      emptyTitle: "Move over a project to inspect it here.",
      emptyBody: "The panel will show description, tags, intention, and then try loading the live website.",
      audienceFamily: "Family",
      audienceGirlfriend: "Girlfriend",
      audiencePersonal: "Personal / Work",
      goalLabel: "Goal",
      urlLabel: "URL",
      openSite: "Open site",
      copyLink: "Copy link",
      copied: "Copied",
      details: "View case study",
      source: "Source",
      highlightsLabel: "Highlights",
      stackLabel: "Stack",
      fallbackLabel: "Preview fallback",
      fallbackTitle: "This site may be blocking iframe embedding.",
      fallbackBody: "You can still open it directly in a new tab to view the full experience.",
      dedicatedPageLink: "Dedicated page (split view)",
    },
    detail: {
      problem: "Problem",
      outcome: "Outcome",
      lesson: "Lesson",
      featuredSkill: "Featured skill",
      presentation: "Presentation",
      previous: "Previous",
      next: "Next",
    },
    timeline: {
      label: "Learning Timeline",
      title: "Every shipped gift leaves one reusable skill behind.",
    },
    workflow: {
      label: "Harness Your Learning",
      title: "Use personal projects as a serious engineering training ground.",
      stepOneTitle: "1. Build for emotion",
      stepOneBody: "Start with a real human purpose: a birthday gift, a memory wall, a romantic surprise, or a holiday experience.",
      stepTwoTitle: "2. Learn one hard skill per project",
      stepTwoBody: "Pair each build with one clear technical challenge such as animation, 3D, CI/CD, accessibility, testing, or CMS design.",
      stepThreeTitle: "3. Keep an engineering loop",
      stepThreeBody: "After shipping, write down what worked, what to reuse, and what you want to improve next. Each gift becomes real growth.",
    },
    filters: {
      all: "All",
      family: "Family",
      girlfriend: "Girlfriend",
      personal: "Personal / Work",
    },
    cards: {
      yearPrefix: "Year",
      open: "Open site",
      preview: "Preview",
      details: "Case study",
      emptyLabel: "Awaiting data",
      emptyTitle: "No projects in this group yet.",
      emptyBody: "You can add more websites in projects.js.",
    },
    status: {
      all: "All statuses",
      live: "Live",
      archived: "Archived",
      inProgress: "In progress",
      needsMetadata: "Needs metadata",
    },
  },
};

const state = {
  activeFilter: "all",
  activeStack: "all",
  activeStatus: "all",
  activeProjectId: null,
  filtersOpen: false,
  language: localStorage.getItem("funfam-language") || "vi",
  navOpen: false,
  presentationIndex: 0,
  searchTerm: "",
};

const filtersRoot = document.getElementById("filters");
const filterPanel = document.getElementById("filter-panel");
const filterToggle = document.getElementById("filter-toggle");
const menuToggle = document.getElementById("menu-toggle");
const topbarActions = document.getElementById("topbar-actions");
const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const stackFiltersRoot = document.getElementById("stack-filters");
const statusFiltersRoot = document.getElementById("status-filters");
const projectsGrid = document.getElementById("projects-grid");
const previewContent = document.getElementById("preview-content");
const timelineList = document.getElementById("timeline-list");
const projectDialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");
const dialogClose = document.getElementById("dialog-close");
const presentationStart = document.getElementById("presentation-start");
const previewClose = document.getElementById("preview-close");
const previewMinimize = document.getElementById("preview-minimize");
const previewMaximize = document.getElementById("preview-maximize");
const previewWindowTitle = document.getElementById("preview-window-title");
const totalProjectsEl = document.getElementById("total-projects");
const familyProjectsEl = document.getElementById("family-projects");
const girlfriendProjectsEl = document.getElementById("girlfriend-projects");
const languageButtons = Array.from(document.querySelectorAll("[data-lang]"));
const metaDescription = document.querySelector('meta[name="description"]');
const searchInput = document.getElementById("project-search");
const resultsCopy = document.getElementById("results-copy");
const copySummaryButton = document.getElementById("copy-summary");
const clearFiltersButton = document.getElementById("clear-filters");

function interpolate(template, values) {
  return Object.entries(values).reduce((result, [key, value]) => {
    return result.replace(`{${key}}`, String(value));
  }, template);
}

function t(path) {
  return path.split(".").reduce((value, key) => value[key], translations[state.language]);
}

function localize(value) {
  if (typeof value === "string") {
    return value;
  }

  return value?.[state.language] || "";
}

function statusLabel(status) {
  const labels = {
    live: t("status.live"),
    archived: t("status.archived"),
    "in-progress": t("status.inProgress"),
    "needs-metadata": t("status.needsMetadata"),
  };

  return labels[status] || labels.live;
}

function setStats() {
  totalProjectsEl.textContent = String(projects.length).padStart(2, "0");
  familyProjectsEl.textContent = String(
    projects.filter((project) => project.audience === "family").length
  ).padStart(2, "0");
  girlfriendProjectsEl.textContent = String(
    projects.filter((project) => project.audience === "girlfriend").length
  ).padStart(2, "0");
  const personalProjectsEl = document.getElementById("personal-projects");
  personalProjectsEl.textContent = String(
    projects.filter((project) => project.audience === "personal").length
  ).padStart(2, "0");
}

function applyStaticTranslations() {
  document.documentElement.lang = state.language;
  document.title = t("metaTitle");
  metaDescription.setAttribute("content", t("metaDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.language);
  });

  updateFilterToggle();
}

function getFilters() {
  return [
    { id: "all", label: t("filters.all") },
    { id: "family", label: t("filters.family") },
    { id: "girlfriend", label: t("filters.girlfriend") },
    { id: "personal", label: t("filters.personal") },
  ];
}

function renderFilters() {
  filtersRoot.innerHTML = "";

  getFilters().forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pill ${state.activeFilter === filter.id ? "active" : ""}`;
    button.textContent = filter.label;

    button.addEventListener("click", () => {
      state.activeFilter = filter.id;
      renderFilters();
      renderProjects();
    });

    filtersRoot.appendChild(button);
  });
}

function getStackFilters() {
  const stackItems = [...new Set(projects.flatMap((project) => project.stack))].sort();
  return [{ id: "all", label: t("filters.all") }, ...stackItems.map((item) => ({ id: item, label: item }))];
}

function getStatusFilters() {
  const statuses = [...new Set(projects.map((project) => project.status || "live"))];
  return [
    { id: "all", label: t("status.all") },
    ...statuses.map((status) => ({ id: status, label: statusLabel(status) })),
  ];
}

function renderButtonFilters(root, items, activeValue, onSelect) {
  root.innerHTML = "";

  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pill small ${activeValue === item.id ? "active" : ""}`;
    button.textContent = item.label;
    button.addEventListener("click", () => onSelect(item.id));
    root.appendChild(button);
  });
}

function renderAdvancedFilters() {
  renderButtonFilters(stackFiltersRoot, getStackFilters(), state.activeStack, (id) => {
    state.activeStack = id;
    renderAdvancedFilters();
    renderProjects();
  });

  renderButtonFilters(statusFiltersRoot, getStatusFilters(), state.activeStatus, (id) => {
    state.activeStatus = id;
    renderAdvancedFilters();
    renderProjects();
  });
}

function updateFilterToggle() {
  filterPanel.hidden = !state.filtersOpen;
  filterToggle.setAttribute("aria-expanded", String(state.filtersOpen));
  filterToggle.textContent = state.filtersOpen
    ? t("projects.filterToggleActive")
    : t("projects.filterToggle");
}

function toggleFilters() {
  state.filtersOpen = !state.filtersOpen;
  updateFilterToggle();
}

function updateMenuToggle() {
  topbarActions.classList.toggle("is-open", state.navOpen);
  menuToggle.classList.toggle("is-open", state.navOpen);
  menuToggle.setAttribute("aria-expanded", String(state.navOpen));
}

function closeMobileMenu() {
  state.navOpen = false;
  updateMenuToggle();
}

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.dataset.navLink === sectionId;
    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function observeSections() {
  const sections = ["projects", "collections", "timeline", "workflow"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    const activeEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

    if (activeEntry) {
      setActiveNav(activeEntry.target.id);
    }
  }, {
    rootMargin: "-25% 0px -55% 0px",
    threshold: [0.15, 0.35, 0.6],
  });

  sections.forEach((section) => observer.observe(section));
}

function getVisibleProjects() {
  const normalizedSearch = state.searchTerm.trim().toLowerCase();

  let matchingFilter = state.activeFilter === "all"
    ? projects
    : projects.filter((project) => project.audience === state.activeFilter);

  if (state.activeStack !== "all") {
    matchingFilter = matchingFilter.filter((project) => project.stack.includes(state.activeStack));
  }

  if (state.activeStatus !== "all") {
    matchingFilter = matchingFilter.filter((project) => (project.status || "live") === state.activeStatus);
  }

  if (!normalizedSearch) {
    return matchingFilter;
  }

  return matchingFilter.filter((project) => {
    const fields = [
      localize(project.title),
      localize(project.shortDescription),
      localize(project.goal),
      localize(project.problem),
      localize(project.outcome),
      localize(project.lesson),
      ...project.stack,
      ...localize(project.highlights),
      project.featuredSkill,
      project.year,
    ];

    return fields.some((field) => field.toLowerCase().includes(normalizedSearch));
  });
}

function setResultsCopy(count) {
  if (!count) {
    resultsCopy.textContent = t("projects.resultsZero");
    return;
  }

  if (count === 1) {
    resultsCopy.textContent = t("projects.resultsOne");
    return;
  }

  resultsCopy.textContent = interpolate(t("projects.resultsMany"), { count });
}

function scrollPreviewIntoView() {
  if (window.matchMedia("(max-width: 960px)").matches) {
    document.querySelector(".preview-column")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function copyProjectUrl(url, button) {
  if (!navigator.clipboard) {
    window.open(url, "_blank", "noreferrer");
    return;
  }

  navigator.clipboard.writeText(url).then(() => {
    const originalText = button.textContent;
    button.textContent = t("preview.copied");
    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1500);
  });
}

function getProjectDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getPortfolioSummary() {
  return getVisibleProjects()
    .map((project, index) => {
      return [
        `${index + 1}. ${localize(project.title)} (${project.year})`,
        `Audience: ${audienceLabel(project.audience)}`,
        `Stack: ${project.stack.join(", ")}`,
        `Highlight: ${localize(project.highlights).join(", ")}`,
        `Lesson: ${localize(project.lesson)}`,
        `URL: ${project.url}`,
      ].join("\n");
    })
    .join("\n\n");
}

function copyPortfolioSummary() {
  const summary = getPortfolioSummary();

  if (!summary) {
    return;
  }

  if (!navigator.clipboard) {
    return;
  }

  navigator.clipboard.writeText(summary).then(() => {
    const originalText = copySummaryButton.textContent;
    copySummaryButton.textContent = t("projects.copiedSummary");
    window.setTimeout(() => {
      copySummaryButton.textContent = originalText;
    }, 1500);
  });
}

function resetFilters() {
  state.activeFilter = "all";
  state.activeStack = "all";
  state.activeStatus = "all";
  state.activeProjectId = null;
  state.searchTerm = "";
  searchInput.value = "";
  renderFilters();
  renderAdvancedFilters();
  renderProjects();
}

function audienceLabel(audience) {
  if (audience === "family") {
    return t("preview.audienceFamily");
  }

  if (audience === "girlfriend") {
    return t("preview.audienceGirlfriend");
  }

  return t("preview.audiencePersonal");
}

function getCompactStack(project) {
  const visibleStack = project.stack.slice(0, 3);

  if (project.stack.length <= 3) {
    return visibleStack;
  }

  return [...visibleStack, `+${project.stack.length - 3}`];
}

function activateProject(project) {
  state.activeProjectId = project.id;
  renderProjects();
  renderPreview(project);
  document.querySelector(".preview-column")?.classList.add("is-visible");
  previewWindowTitle.textContent = `${localize(project.title)} - ${getProjectDomain(project.url)}`;
}

function hidePreview() {
  state.activeProjectId = null;
  previewWindowTitle.textContent = "";
  previewContent.innerHTML = `
    <div class="preview-empty">
      <p class="section-label">${t("preview.emptyLabel")}</p>
      <h3>${t("preview.emptyTitle")}</h3>
      <p>${t("preview.emptyBody")}</p>
    </div>
  `;
  document.querySelector(".preview-column")?.classList.remove("is-visible");
  renderProjects();
}

function maximizePreview() {
  const activeProject = projects.find((project) => project.id === state.activeProjectId);

  if (activeProject) {
    openProjectDetail(activeProject);
  }
}

function getProjectIndex(projectId) {
  return projects.findIndex((project) => project.id === projectId);
}

function getThumbnailMarkup(project) {
  return `
    <div class="project-thumb ${project.thumbnailTone || "warm"}">
      <span>${project.platform || "web"}</span>
      <strong>${project.featuredSkill || project.stack[0] || "Web"}</strong>
    </div>
  `;
}

function renderProjects() {
  const visibleProjects = getVisibleProjects();
  projectsGrid.innerHTML = "";
  setResultsCopy(visibleProjects.length);
  clearFiltersButton.disabled =
    state.activeFilter === "all" &&
    state.activeStack === "all" &&
    state.activeStatus === "all" &&
    !state.searchTerm.trim();

  if (!visibleProjects.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <p class="section-label">${t("cards.emptyLabel")}</p>
      <h3>${t("cards.emptyTitle")}</h3>
      <p>${t("cards.emptyBody")}</p>
    `;
    projectsGrid.appendChild(emptyState);
    previewContent.innerHTML = `
      <div class="preview-empty">
        <p class="section-label">${t("preview.emptyLabel")}</p>
        <h3>${t("preview.emptyTitle")}</h3>
        <p>${t("preview.emptyBody")}</p>
      </div>
    `;
    document.querySelector(".preview-column")?.classList.remove("is-visible");
    return;
  }

  const activeProject = visibleProjects.find((project) => project.id === state.activeProjectId);

  visibleProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = `project-card ${activeProject?.id === project.id ? "is-active" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", String(activeProject?.id === project.id));
    card.innerHTML = `
      ${getThumbnailMarkup(project)}
      <div class="project-top">
        <div>
          <p class="project-tag">${audienceLabel(project.audience)}</p>
          <h3>${localize(project.title)}</h3>
        </div>
        <div class="project-badges">
          <span class="status-badge ${project.status || "live"}">${statusLabel(project.status || "live")}</span>
          <span class="project-year">${t("cards.yearPrefix")} ${project.year}</span>
        </div>
      </div>
      <div class="project-body">
        <p>${localize(project.shortDescription)}</p>
      </div>
      <div class="project-meta">
        ${getCompactStack(project).map((item) => `<span>${item}</span>`).join("")}
      </div>
    `;

    const handler = () => {
      activateProject(project);
      scrollPreviewIntoView();
    };
    card.addEventListener("click", handler);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handler();
      }
    });

    projectsGrid.appendChild(card);
  });

  if (activeProject) {
    renderPreview(activeProject);
    document.querySelector(".preview-column")?.classList.add("is-visible");
    return;
  }

  previewContent.innerHTML = `
    <div class="preview-empty">
      <p class="section-label">${t("preview.emptyLabel")}</p>
      <h3>${t("preview.emptyTitle")}</h3>
      <p>${t("preview.emptyBody")}</p>
    </div>
  `;
  document.querySelector(".preview-column")?.classList.remove("is-visible");
}

function renderPreview(project) {
  previewWindowTitle.textContent = `${localize(project.title)} - ${getProjectDomain(project.url)}`;
  previewContent.innerHTML = `
    <div class="preview-pane">
      <div class="preview-meta">
        <p class="section-label">${audienceLabel(project.audience)}</p>
        <h3>${localize(project.title)}</h3>
        <span class="status-badge ${project.status || "live"}">${statusLabel(project.status || "live")}</span>
        <p>${localize(project.shortDescription)}</p>
        <div class="preview-tags">
          ${localize(project.highlights).map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="preview-detail-grid">
          <div>
            <p class="preview-label">${t("preview.highlightsLabel")}</p>
            <p>${localize(project.highlights).join(" • ")}</p>
          </div>
          <div>
            <p class="preview-label">${t("preview.stackLabel")}</p>
            <p>${project.stack.join(" • ")}</p>
          </div>
          <div>
            <p class="preview-label">${t("detail.featuredSkill")}</p>
            <p>${project.featuredSkill || project.stack[0]}</p>
          </div>
          <div>
            <p class="preview-label">${t("detail.lesson")}</p>
            <p>${localize(project.lesson)}</p>
          </div>
        </div>
        <p>
          <strong>${t("preview.goalLabel")}:</strong> ${localize(project.goal)}<br />
          <strong>${t("preview.urlLabel")}:</strong>
          <a href="${project.url}" target="_blank" rel="noreferrer">${project.url}</a>
        </p>
        <div class="preview-actions">
          <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">${t("preview.openSite")}</a>
          ${
            project.dedicatedPage
              ? `<a class="project-link" href="./project.html?id=${encodeURIComponent(project.id)}">${t("preview.dedicatedPageLink")}</a>`
              : ""
          }
          <button class="secondary-button" id="copy-link-button" type="button">${t("preview.copyLink")}</button>
          <button class="secondary-button" id="detail-button" type="button">${t("preview.details")}</button>
        </div>
      </div>
      <div class="preview-frame-wrap">
        <iframe
          class="preview-frame"
          src="${project.url}"
          title="Preview ${localize(project.title)}"
          loading="lazy"
          referrerpolicy="no-referrer"
          allow="camera; microphone; autoplay; fullscreen; clipboard-read; clipboard-write"
        ></iframe>
      </div>
    </div>
  `;

  const iframe = previewContent.querySelector("iframe");
  const frameWrap = previewContent.querySelector(".preview-frame-wrap");
  const copyButton = previewContent.querySelector("#copy-link-button");

  const fallbackTimeout = window.setTimeout(() => {
    if (!iframe.dataset.loaded) {
      frameWrap.innerHTML = `
        <div class="preview-fallback">
          <div>
            <p class="section-label">${t("preview.fallbackLabel")}</p>
            <h3>${t("preview.fallbackTitle")}</h3>
            <p>${t("preview.fallbackBody")}</p>
            <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">${t("preview.openSite")}</a>
          </div>
        </div>
      `;
    }
  }, 4000);

  iframe.addEventListener("load", () => {
    iframe.dataset.loaded = "true";
    window.clearTimeout(fallbackTimeout);
  });

  copyButton.addEventListener("click", () => {
    copyProjectUrl(project.url, copyButton);
  });

  previewContent.querySelector("#detail-button").addEventListener("click", () => {
    openProjectDetail(project);
  });
}

function getDetailMarkup(project, mode = "detail") {
  const hasSourceUrl = project.sourceUrl && String(project.sourceUrl).startsWith("http");
  const sourceMarkup = hasSourceUrl
    ? `<a class="project-link" href="${project.sourceUrl}" target="_blank" rel="noreferrer">${t("preview.source")}</a>`
    : "";

  return `
    <div class="detail-layout ${mode === "presentation" ? "is-presentation" : ""}">
      <div>
        <p class="section-label">${mode === "presentation" ? t("detail.presentation") : audienceLabel(project.audience)}</p>
        <h2>${localize(project.title)}</h2>
        <p>${localize(project.shortDescription)}</p>
        <div class="preview-tags">
          ${localize(project.highlights).map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
      <div class="detail-visual">
        ${getThumbnailMarkup(project)}
      </div>
      <div class="detail-grid">
        <article>
          <p class="preview-label">${t("detail.problem")}</p>
          <p>${localize(project.problem)}</p>
        </article>
        <article>
          <p class="preview-label">${t("detail.outcome")}</p>
          <p>${localize(project.outcome)}</p>
        </article>
        <article>
          <p class="preview-label">${t("detail.lesson")}</p>
          <p>${localize(project.lesson)}</p>
        </article>
        <article>
          <p class="preview-label">${t("preview.stackLabel")}</p>
          <p>${project.stack.join(" • ")}</p>
        </article>
      </div>
      <div class="preview-actions">
        <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">${t("preview.openSite")}</a>
        ${sourceMarkup}
      </div>
    </div>
  `;
}

function openProjectDetail(project) {
  state.activeProjectId = project.id;
  dialogContent.innerHTML = getDetailMarkup(project);
  if (!projectDialog.open) {
    projectDialog.showModal();
  }
  history.replaceState(null, "", `#project/${project.id}`);
}

function closeProjectDetail() {
  if (projectDialog.open) {
    projectDialog.close();
  }

  if (location.hash.startsWith("#project/")) {
    history.replaceState(null, "", "#projects");
  }
}

function renderPresentation(project) {
  state.presentationIndex = getProjectIndex(project.id);
  dialogContent.innerHTML = `
    ${getDetailMarkup(project, "presentation")}
    <div class="presentation-controls">
      <button class="secondary-button" id="presentation-prev" type="button">${t("detail.previous")}</button>
      <span>${state.presentationIndex + 1} / ${projects.length}</span>
      <button class="secondary-button" id="presentation-next" type="button">${t("detail.next")}</button>
    </div>
  `;

  dialogContent.querySelector("#presentation-prev").addEventListener("click", () => {
    const nextIndex = (state.presentationIndex - 1 + projects.length) % projects.length;
    renderPresentation(projects[nextIndex]);
  });

  dialogContent.querySelector("#presentation-next").addEventListener("click", () => {
    const nextIndex = (state.presentationIndex + 1) % projects.length;
    renderPresentation(projects[nextIndex]);
  });
}

function openPresentation() {
  const project = projects[getProjectIndex(state.activeProjectId) >= 0 ? getProjectIndex(state.activeProjectId) : 0];
  renderPresentation(project);
  if (!projectDialog.open) {
    projectDialog.showModal();
  }
}

function renderTimeline() {
  const byYear = projects.reduce((groups, project) => {
    groups[project.year] = groups[project.year] || [];
    groups[project.year].push(project);
    return groups;
  }, {});

  timelineList.innerHTML = Object.entries(byYear)
    .sort(([left], [right]) => Number(right) - Number(left))
    .map(([year, yearProjects]) => `
      <article class="timeline-year">
        <span>${year}</span>
        <div>
          ${yearProjects.map((project) => `
            <button class="timeline-item" type="button" data-project-id="${project.id}">
              <strong>${localize(project.title)}</strong>
              <small>${project.featuredSkill || project.stack[0]} • ${statusLabel(project.status || "live")}</small>
              <p>${localize(project.lesson)}</p>
            </button>
          `).join("")}
        </div>
      </article>
    `)
    .join("");

  timelineList.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = projects.find((item) => item.id === button.dataset.projectId);
      openProjectDetail(project);
    });
  });
}

function setLanguage(language) {
  state.language = language;
  localStorage.setItem("funfam-language", language);
  applyStaticTranslations();
  renderFilters();
  renderAdvancedFilters();
  renderProjects();
  renderTimeline();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.lang !== state.language) {
      setLanguage(button.dataset.lang);
    }
  });
});

searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  renderProjects();
});

copySummaryButton.addEventListener("click", copyPortfolioSummary);
filterToggle.addEventListener("click", toggleFilters);
menuToggle.addEventListener("click", () => {
  state.navOpen = !state.navOpen;
  updateMenuToggle();
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveNav(link.dataset.navLink);
    closeMobileMenu();
  });
});
clearFiltersButton.addEventListener("click", resetFilters);
dialogClose.addEventListener("click", closeProjectDetail);
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    closeProjectDetail();
  }
});
presentationStart.addEventListener("click", openPresentation);
previewClose.addEventListener("click", hidePreview);
previewMinimize.addEventListener("click", hidePreview);
previewMaximize.addEventListener("click", maximizePreview);
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (projectDialog.open) {
    closeProjectDetail();
    return;
  }

  if (state.activeProjectId) {
    hidePreview();
  }
});
window.addEventListener("hashchange", () => {
  if (!location.hash.startsWith("#project/")) {
    return;
  }

  const project = projects.find((item) => item.id === location.hash.replace("#project/", ""));
  if (project) {
    openProjectDetail(project);
  }
});

setStats();
applyStaticTranslations();
updateMenuToggle();
renderFilters();
renderAdvancedFilters();
renderProjects();
renderTimeline();
setActiveNav(location.hash.replace("#", "") || "projects");
observeSections();

if (location.hash.startsWith("#project/")) {
  const project = projects.find((item) => item.id === location.hash.replace("#project/", ""));
  if (project) {
    openProjectDetail(project);
  }
}
