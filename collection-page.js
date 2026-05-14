(function () {
  const AUDIENCE_CONFIG = {
    girlfriend: {
      key: "girlfriend",
      defaultTone: "rose",
      showLoveTimer: true,
      loveSince: "2023-03-02",
    },
    family: {
      key: "family",
      defaultTone: "warm",
      showLoveTimer: false,
      loveSince: null,
    },
    personal: {
      key: "personal",
      defaultTone: "mint",
      showLoveTimer: false,
      loveSince: null,
    },
  };

  const STR = {
    vi: {
      back: "Về hub",
      pageTitles: {
        girlfriend: "Project cho người yêu",
        family: "Project cho gia đình",
        personal: "Project cá nhân và công việc",
      },
      pageLeads: {
        girlfriend: "Tất cả microsite và trải nghiệm bạn đã làm cho cô ấy.",
        family: "Danh sách những website quà tặng, sinh nhật và kỷ niệm cho gia đình.",
        personal: "Các project phục vụ thương hiệu cá nhân, công việc và business.",
      },
      loveTitle: "Thời gian yêu nhau",
      loveSinceFmt: "Từ {date}",
      loveBadge: "đang chạy bằng thương nhớ",
      loveCaption: "Một chiếc đồng hồ nhỏ, nhưng chứa kha khá chương đáng yêu.",
      years: "năm",
      months: "tháng",
      days: "ngày",
      hours: "giờ",
      minutes: "phút",
      seconds: "giây",
      totalDays: "Tổng cộng khoảng {n} ngày",
      listHeading: "Danh sách project",
      openDedicated: "Trang riêng",
      openSite: "Mở website",
      empty: "Chưa có project nào trong nhóm này.",
    },
    en: {
      back: "Back to hub",
      pageTitles: {
        girlfriend: "Projects for her",
        family: "Projects for family",
        personal: "Personal and work projects",
      },
      pageLeads: {
        girlfriend: "Every microsite and experience you built for her.",
        family: "A list of birthday, memory, and gift websites for your family.",
        personal: "Projects built for personal brand, work, and business goals.",
      },
      loveTitle: "Time together",
      loveSinceFmt: "Since {date}",
      loveBadge: "powered by tiny memories",
      loveCaption: "A tiny clock, quietly carrying a lot of sweet chapters.",
      years: "years",
      months: "months",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
      totalDays: "About {n} days in total",
      listHeading: "Projects",
      openDedicated: "Dedicated page",
      openSite: "Open site",
      empty: "No projects in this group yet.",
    },
  };

  let language = localStorage.getItem("funfam-language") || "vi";
  let loveTicker = null;

  function t(key) {
    return STR[language][key] || key;
  }

  function localize(value) {
    if (typeof value === "string") {
      return value;
    }
    return value?.[language] || "";
  }

  function formatSinceDate(isoDate) {
    const d = new Date(`${isoDate}T00:00:00`);
    return new Intl.DateTimeFormat(language === "vi" ? "vi-VN" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
  }

  function calendarDiffYMD(startCal, endCal) {
    let y = endCal.getFullYear() - startCal.getFullYear();
    let m = endCal.getMonth() - startCal.getMonth();
    let d = endCal.getDate() - startCal.getDate();
    if (d < 0) {
      m -= 1;
      d += new Date(endCal.getFullYear(), endCal.getMonth(), 0).getDate();
    }
    if (m < 0) {
      y -= 1;
      m += 12;
    }
    return { years: y, months: m, days: d };
  }

  function totalDaysBetween(startMs, endMs) {
    return Math.floor((endMs - startMs) / 86400000);
  }

  function syncLangPills() {
    document.querySelectorAll(".single-project-topbar .lang-pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === language);
    });
  }

  function getAudienceFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const rawAudience = params.get("audience");
    if (rawAudience && AUDIENCE_CONFIG[rawAudience]) {
      return rawAudience;
    }
    return "girlfriend";
  }

  function renderLoveSection(config) {
    if (!config.showLoveTimer || !config.loveSince) {
      return "";
    }

    const start = new Date(config.loveSince + "T00:00:00");
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const ymd = calendarDiffYMD(start, today);
    const totalDays = Math.max(0, totalDaysBetween(start.getTime(), today.getTime()));

    return `
      <section class="love-since-block collection-gf-hero-love" aria-live="polite">
        <video class="love-bg-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="./assets/videos/love-bg.mp4" type="video/mp4" />
        </video>
        <div class="love-motion-overlay" aria-hidden="true"></div>
        <div class="love-orbit" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p class="section-label">${t("loveTitle")}</p>
        <p class="love-badge">${t("loveBadge")}</p>
        <p class="love-since-line">${t("loveSinceFmt").replace("{date}", formatSinceDate(config.loveSince))}</p>
        <div class="love-ymd-grid" id="love-ymd">
          <div>
            <span class="love-num" data-ymd="y">${ymd.years}</span>
            <small>${t("years")}</small>
          </div>
          <div>
            <span class="love-num" data-ymd="m">${ymd.months}</span>
            <small>${t("months")}</small>
          </div>
          <div>
            <span class="love-num" data-ymd="d">${ymd.days}</span>
            <small>${t("days")}</small>
          </div>
        </div>
        <div class="love-live-grid" id="love-live">
          <div>
            <span class="love-num love-num--live" data-live="h">00</span>
            <small>${t("hours")}</small>
          </div>
          <div>
            <span class="love-num love-num--live" data-live="m">00</span>
            <small>${t("minutes")}</small>
          </div>
          <div>
            <span class="love-num love-num--live" data-live="s">00</span>
            <small>${t("seconds")}</small>
          </div>
        </div>
        <p class="love-total-days">${t("totalDays").replace("{n}", String(totalDays))}</p>
        <p class="love-microcopy">${t("loveCaption")}</p>
      </section>
    `;
  }

  function startLoveTicker(root, config) {
    if (loveTicker) {
      loveTicker.stop();
      loveTicker = null;
    }

    if (!config.showLoveTimer || !config.loveSince) {
      return;
    }

    if (!window.FunFamLoveTimer) {
      return;
    }

    const startMs = window.FunFamLoveTimer.parseStartMs(config.loveSince);
    const hoursEl = root.querySelector('[data-live="h"]');
    const minutesEl = root.querySelector('[data-live="m"]');
    const secondsEl = root.querySelector('[data-live="s"]');
    if (!hoursEl || !minutesEl || !secondsEl) {
      return;
    }

    loveTicker = window.FunFamLoveTimer.createTicker({
      getParts: () => window.FunFamLoveTimer.splitLiveHms(Date.now() - startMs),
      onTick: (liveParts, setNumber) => {
        setNumber(hoursEl, String(liveParts.hours).padStart(2, "0"));
        setNumber(minutesEl, String(liveParts.minutes).padStart(2, "0"));
        setNumber(secondsEl, String(liveParts.seconds).padStart(2, "0"));
      },
    });
    loveTicker.start();
  }

  function render() {
    const root = document.getElementById("collection-root");
    const back = document.getElementById("collection-back");
    if (!root || typeof projects === "undefined") {
      return;
    }

    const audience = getAudienceFromUrl();
    const config = AUDIENCE_CONFIG[audience];

    document.documentElement.lang = language;
    document.title = `${t("pageTitles")[audience]} — FunFam Hub`;
    back.textContent = t("back");
    syncLangPills();

    const audienceProjects = projects.filter((p) => p.audience === config.key);
    const cards =
      audienceProjects.length === 0
        ? `<p class="collection-gf-empty">${t("empty")}</p>`
        : audienceProjects
            .map((p) => {
              const tone = p.thumbnailTone || config.defaultTone;
              return `
                <article class="collection-gf-card collection-gf-card--${tone}">
                  <div class="collection-gf-card-inner">
                    <h3>${localize(p.title)}</h3>
                    <p>${localize(p.shortDescription)}</p>
                    <div class="collection-gf-actions">
                      <a class="project-link" href="./project.html?id=${encodeURIComponent(p.id)}">${t("openDedicated")}</a>
                      <a class="project-link" href="${p.url}" target="_blank" rel="noreferrer">${t("openSite")}</a>
                    </div>
                  </div>
                </article>
              `;
            })
            .join("");

    root.innerHTML = `
      <header class="collection-gf-header">
        <h1 class="collection-gf-title">${t("pageTitles")[audience]}</h1>
        <p class="collection-gf-lead">${t("pageLeads")[audience]}</p>
        ${renderLoveSection(config)}
      </header>
      <section class="collection-gf-list-wrap">
        <h2 class="section-label collection-gf-list-label">${t("listHeading")}</h2>
        <div class="collection-gf-grid">${cards}</div>
      </section>
    `;

    startLoveTicker(root, config);
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
      render();
    });
  }

  render();
})();
