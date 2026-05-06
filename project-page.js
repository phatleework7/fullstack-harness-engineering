(function () {
  const STR = {
    vi: {
      back: "Về hub",
      notFound: "Không tìm thấy project với id này.",
      openSite: "Mở website",
      storyWindow: "Cửa sổ nội dung",
      liveWindow: "Cửa sổ live site",
      goal: "Mục tiêu",
      stack: "Công nghệ",
      loveTitle: "Thời gian yêu nhau",
      loveSinceFmt: "Từ {date}",
      days: "ngày",
      hours: "giờ",
      minutes: "phút",
      seconds: "giây",
    },
    en: {
      back: "Back to hub",
      notFound: "No project matches this id.",
      openSite: "Open site",
      storyWindow: "Story panel",
      liveWindow: "Live site panel",
      goal: "Goal",
      stack: "Stack",
      loveTitle: "Time together",
      loveSinceFmt: "Since {date}",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
    },
  };

  let language = localStorage.getItem("funfam-language") || "vi";

  function t(key) {
    return STR[language][key] || key;
  }

  function localize(value) {
    if (typeof value === "string") {
      return value;
    }
    return value?.[language] || "";
  }

  function getDomain(url) {
    try {
      return new URL(url).hostname;
    } catch {
      return "";
    }
  }

  function formatSinceDate(isoDate) {
    const d = new Date(`${isoDate}T00:00:00`);
    return new Intl.DateTimeFormat(language === "vi" ? "vi-VN" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
  }

  function computeLoveParts(isoDate) {
    const start = new Date(`${isoDate}T00:00:00`).getTime();
    let diff = Date.now() - start;
    if (diff < 0) {
      diff = 0;
    }
    const totalSec = Math.floor(diff / 1000);
    return {
      days: Math.floor(totalSec / 86400),
      hours: Math.floor((totalSec % 86400) / 3600),
      minutes: Math.floor((totalSec % 3600) / 60),
      seconds: totalSec % 60,
    };
  }

  function renderNotFound(root) {
    root.innerHTML = `
      <div class="single-not-found">
        <p class="section-label">404</p>
        <h1>${t("notFound")}</h1>
        <a class="primary-link" href="./index.html#projects">${t("back")}</a>
      </div>
    `;
  }

  function syncLangPills() {
    document.querySelectorAll(".single-project-topbar .lang-pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === language);
    });
  }

  function init() {
    const root = document.getElementById("single-root");
    const back = document.getElementById("single-back");
    if (!root || typeof projects === "undefined") {
      return;
    }

    document.documentElement.lang = language;
    back.textContent = t("back");
    syncLangPills();

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (!id) {
      renderNotFound(root);
      return;
    }

    const project = projects.find((p) => p.id === id);
    if (!project) {
      renderNotFound(root);
      return;
    }

    document.title = `${localize(project.title)} — FunFam Hub`;

    const loveBlock =
      project.loveSince != null
        ? `
      <section class="love-since-block" aria-live="polite">
        <p class="section-label">${t("loveTitle")}</p>
        <p class="love-since-line">${t("loveSinceFmt").replace("{date}", formatSinceDate(project.loveSince))}</p>
        <div class="love-counter-grid" id="love-counter">
          <div><span class="love-num" data-love="days">0</span><small>${t("days")}</small></div>
          <div><span class="love-num" data-love="hours">0</span><small>${t("hours")}</small></div>
          <div><span class="love-num" data-love="minutes">0</span><small>${t("minutes")}</small></div>
          <div><span class="love-num" data-love="seconds">0</span><small>${t("seconds")}</small></div>
        </div>
      </section>
    `
        : "";

    root.innerHTML = `
      <div class="single-workspace">
        <article class="preview-card single-meta-window">
          <div class="preview-browser-bar">
            <span class="window-dot close" aria-hidden="true"></span>
            <span class="window-dot minimize" aria-hidden="true"></span>
            <span class="window-dot maximize" aria-hidden="true"></span>
            <div class="preview-window-title">${t("storyWindow")}</div>
          </div>
          <div class="single-meta-inner">
            <p class="section-label">${getDomain(project.url)}</p>
            <h1 class="single-title">${localize(project.title)}</h1>
            <p class="single-lead">${localize(project.shortDescription)}</p>
            ${loveBlock}
            <div class="preview-tags">
              ${localize(project.highlights)
                .map((item) => `<span>${item}</span>`)
                .join("")}
            </div>
            <p class="single-goal"><strong>${t("goal")}:</strong> ${localize(project.goal)}</p>
            <p class="single-stack"><strong>${t("stack")}:</strong> ${project.stack.join(" · ")}</p>
            <div class="preview-actions">
              <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">${t("openSite")}</a>
            </div>
          </div>
        </article>
        <article class="preview-card single-live-window">
          <div class="preview-browser-bar">
            <span class="window-dot close" aria-hidden="true"></span>
            <span class="window-dot minimize" aria-hidden="true"></span>
            <span class="window-dot maximize" aria-hidden="true"></span>
            <div class="preview-window-title">${localize(project.title)} — ${t("liveWindow")}</div>
          </div>
          <div class="single-frame-wrap" id="single-frame-wrap">
            <iframe
              class="preview-frame single-preview-frame"
              src="${project.url}"
              title="Preview ${localize(project.title)}"
              loading="lazy"
              referrerpolicy="no-referrer"
            ></iframe>
          </div>
        </article>
      </div>
    `;

    const iframe = root.querySelector("iframe");
    const frameWrap = root.querySelector("#single-frame-wrap");
    if (iframe && frameWrap) {
      const fallbackTimeout = window.setTimeout(() => {
        if (!iframe.dataset.loaded) {
          frameWrap.innerHTML = `
            <div class="preview-fallback single-preview-fallback">
              <p class="section-label">Preview</p>
              <h3>${language === "vi" ? "Site có thể chặn iframe." : "This site may block iframes."}</h3>
              <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">${t("openSite")}</a>
            </div>
          `;
        }
      }, 4000);
      iframe.addEventListener("load", () => {
        iframe.dataset.loaded = "true";
        window.clearTimeout(fallbackTimeout);
      });
    }

    if (project.loveSince) {
      const tick = () => {
        const parts = computeLoveParts(project.loveSince);
        root.querySelector('[data-love="days"]').textContent = String(parts.days);
        root.querySelector('[data-love="hours"]').textContent = String(parts.hours).padStart(2, "0");
        root.querySelector('[data-love="minutes"]').textContent = String(parts.minutes).padStart(2, "0");
        root.querySelector('[data-love="seconds"]').textContent = String(parts.seconds).padStart(2, "0");
      };
      tick();
      window.setInterval(tick, 1000);
    }
  }

  const topbar = document.querySelector(".single-project-topbar");
  if (topbar) {
    topbar.addEventListener("click", (event) => {
      const pill = event.target.closest(".lang-pill[data-lang]");
      if (!pill) {
        return;
      }
      const next = pill.dataset.lang;
      if (!next || next === language) {
        return;
      }
      language = next;
      localStorage.setItem("funfam-language", language);
      init();
    });
  }

  init();
})();
