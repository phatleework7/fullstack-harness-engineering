(function () {
  function parseStartMs(isoDate) {
    return new Date(`${isoDate}T00:00:00`).getTime();
  }

  function splitDurationParts(ms) {
    const safeMs = Math.max(0, ms);
    const totalSeconds = Math.floor(safeMs / 1000);
    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  }

  function splitLiveHms(ms) {
    const parts = splitDurationParts(ms);
    return {
      hours: parts.hours,
      minutes: parts.minutes,
      seconds: parts.seconds,
    };
  }

  function createTicker(config) {
    const tickMs = config.tickMs || 1000;
    const animateClass = config.animateClass || "is-ticking";
    let tickerId = null;

    function stop() {
      if (tickerId) {
        window.clearInterval(tickerId);
        tickerId = null;
      }
    }

    function setNumber(el, value) {
      if (!el || el.textContent === value) {
        return;
      }
      el.textContent = value;
      el.classList.remove(animateClass);
      void el.offsetWidth;
      el.classList.add(animateClass);
    }

    function tick() {
      const parts = config.getParts();
      config.onTick(parts, setNumber);
    }

    function start() {
      stop();
      tick();
      tickerId = window.setInterval(tick, tickMs);
    }

    return {
      start,
      stop,
      tick,
    };
  }

  window.FunFamLoveTimer = {
    parseStartMs,
    splitDurationParts,
    splitLiveHms,
    createTicker,
  };
})();
