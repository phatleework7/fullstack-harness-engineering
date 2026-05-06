(function () {
  /** Cùng ngày với loveSince trên project roseforvy trong data/projects-meta.json */
  const LOVE_SINCE_ISO = "2023-03-02";

  const STR = {
    vi: {
      back: "Về hub",
      pageTitle: "Project cho người yêu",
      pageLead: "Tất cả microsite và trải nghiệm bạn đã làm cho cô ấy.",
      loveTitle: "Thời gian yêu nhau",
      loveSinceFmt: "Từ {date}",
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
      empty: "Chưa có project nào gắn audience “người yêu”.",
    },
    en: {
      back: "Back to hub",
      pageTitle: "Projects for her",
      pageLead: "Every microsite and experience you built for her.",
      loveTitle: "Time together",
      loveSinceFmt: "Since {date}",
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
      empty: "No projects tagged for this audience yet.",
    },
  };

  let language = localStorage.getItem("funfam-language") || "vi";
  let loveTickerId = null;

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

  /** Khoảng lịch năm–tháng–ngày từ start đến end (chỉ so phần ngày, local). */
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

  function splitDuration(ms) {
    const safeMs = Math.max(0, ms);
    const totalSeconds = Math.floor(safeMs / 1000);
    return {
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  }

  function syncLangPills() {
    document.querySelectorAll(".single-project-topbar .lang-pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === language);
    });
  }

  function render() {
    const root = document.getElementById("gf-root");
    const back = document.getElementById("gf-back");
    if (!root || typeof projects === "undefined") {
      return;
    }

    document.documentElement.lang = language;
    document.title = `${t("pageTitle")} — FunFam Hub`;
    back.textContent = t("back");
    syncLangPills();

    const start = new Date(LOVE_SINCE_ISO + "T00:00:00");
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const ymd = calendarDiffYMD(start, today);
    const totalDays = Math.max(0, totalDaysBetween(start.getTime(), today.getTime()));

    const gfProjects = projects.filter((p) => p.audience === "girlfriend");

    const loveSection = `
      <section class="love-since-block collection-gf-hero-love" aria-live="polite">
        <video class="love-bg-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
          <source src="./assets/videos/love-bg.mp4" type="video/mp4" />
        </video>
        <div class="love-motion-overlay" aria-hidden="true"></div>
        <p class="section-label">${t("loveTitle")}</p>
        <p class="love-since-line">${t("loveSinceFmt").replace("{date}", formatSinceDate(LOVE_SINCE_ISO))}</p>
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
      </section>
    `;

    const cards =
      gfProjects.length === 0
        ? `<p class="collection-gf-empty">${t("empty")}</p>`
        : gfProjects
            .map(
              (p) => `
          <article class="collection-gf-card collection-gf-card--${p.thumbnailTone || "rose"}">
            <div class="collection-gf-card-inner">
              <h3>${localize(p.title)}</h3>
              <p>${localize(p.shortDescription)}</p>
              <div class="collection-gf-actions">
                ${
                  p.dedicatedPage
                    ? `<a class="project-link" href="./project.html?id=${encodeURIComponent(p.id)}">${t("openDedicated")}</a>`
                    : ""
                }
                <a class="project-link" href="${p.url}" target="_blank" rel="noreferrer">${t("openSite")}</a>
              </div>
            </div>
          </article>
        `
            )
            .join("");

    root.innerHTML = `
      <header class="collection-gf-header">
        <h1 class="collection-gf-title">${t("pageTitle")}</h1>
        <p class="collection-gf-lead">${t("pageLead")}</p>
        ${loveSection}
      </header>
      <section class="collection-gf-list-wrap">
        <h2 class="section-label collection-gf-list-label">${t("listHeading")}</h2>
        <div class="collection-gf-grid">${cards}</div>
      </section>
    `;

    if (loveTickerId) {
      window.clearInterval(loveTickerId);
      loveTickerId = null;
    }

    const hoursEl = root.querySelector('[data-live="h"]');
    const minutesEl = root.querySelector('[data-live="m"]');
    const secondsEl = root.querySelector('[data-live="s"]');
    if (hoursEl && minutesEl && secondsEl) {
      const tick = () => {
        const liveParts = splitDuration(Date.now() - start.getTime());
        hoursEl.textContent = String(liveParts.hours).padStart(2, "0");
        minutesEl.textContent = String(liveParts.minutes).padStart(2, "0");
        secondsEl.textContent = String(liveParts.seconds).padStart(2, "0");
      };
      tick();
      loveTickerId = window.setInterval(tick, 1000);
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
      render();
    });
  }

  render();
})();
