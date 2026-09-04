document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;

  if (window.jQuery) {
    window.jQuery('a[href^="#"], #site-nav a[href*="#"]').off("click.smoothscroll");
  }

  function readStoredTheme() {
    try {
      return localStorage.getItem("siying-theme");
    } catch (error) {
      return null;
    }
  }

  function applyTheme(theme, persist) {
    var normalizedTheme = theme === "night" ? "night" : "day";
    var toggle = document.getElementById("theme-toggle");
    var themeMeta = document.querySelector('meta[name="theme-color"]');

    root.setAttribute("data-theme", normalizedTheme);

    if (toggle) {
      var label = toggle.querySelector(".theme-toggle__label");
      var isNight = normalizedTheme === "night";
      toggle.setAttribute("aria-pressed", String(isNight));
      toggle.setAttribute("aria-label", isNight ? "Enable daylight theme" : "Enable Night Drive theme");
      if (label) label.textContent = isNight ? "Day Mode" : "Night Drive";
    }

    if (themeMeta) {
      themeMeta.setAttribute("content", normalizedTheme === "night" ? "#0d0e15" : "#fbfaf7");
    }

    if (persist) {
      try {
        localStorage.setItem("siying-theme", normalizedTheme);
      } catch (error) {
        // The selected theme still applies for this page view.
      }
    }
  }

  var themeToggle = document.getElementById("theme-toggle");
  applyTheme(root.getAttribute("data-theme"), false);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "night" ? "day" : "night";
      applyTheme(nextTheme, true);
    });
  }

  window.addEventListener("storage", function (event) {
    if (event.key === "siying-theme" && (event.newValue === "day" || event.newValue === "night")) {
      applyTheme(event.newValue, false);
    }
  });

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('#site-nav a[href*="#"]')
  );

  if ("IntersectionObserver" in window && navLinks.length > 0) {
    var linksById = {};
    navLinks.forEach(function (link) {
      var hash = new URL(link.href, window.location.href).hash;
      if (hash) linksById[hash.slice(1)] = link;
    });

    function setActiveSection(id) {
      navLinks.forEach(function (link) {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });

      if (linksById[id]) {
        linksById[id].classList.add("is-active");
        linksById[id].setAttribute("aria-current", "location");
      }
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-18% 0px -72% 0px", threshold: 0 }
    );

    Object.keys(linksById).forEach(function (id) {
      var target = document.getElementById(id);
      if (target) observer.observe(target);
    });
  }

  Array.prototype.slice.call(document.querySelectorAll(".paper-toggle")).forEach(function (button) {
    button.addEventListener("click", function () {
      var details = document.getElementById(button.getAttribute("aria-controls"));
      if (!details) return;

      var willOpen = button.getAttribute("aria-expanded") !== "true";
      var icon = button.querySelector("span[aria-hidden]");
      var paper = button.closest(".paper-box");

      button.setAttribute("aria-expanded", String(willOpen));
      details.hidden = !willOpen;
      if (icon) icon.textContent = willOpen ? "−" : "＋";
      if (paper) paper.classList.toggle("is-expanded", willOpen);
    });
  });

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    var copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  }

  Array.prototype.slice.call(document.querySelectorAll(".copy-citation")).forEach(function (button) {
    button.addEventListener("click", function () {
      var source = document.getElementById(button.getAttribute("data-copy-target"));
      if (!source) return;
      var citation = source.textContent;

      function showResult(copied) {
        var originalLabel = button.textContent;
        button.textContent = copied ? "Copied!" : "Select text";
        window.setTimeout(function () {
          button.textContent = originalLabel;
        }, 1800);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(citation).then(
          function () { showResult(true); },
          function () { showResult(fallbackCopy(citation)); }
        );
      } else {
        showResult(fallbackCopy(citation));
      }
    });
  });

  var mapStage = document.querySelector("[data-map-stage]");
  if (mapStage) {
    var topicButtons = Array.prototype.slice.call(mapStage.querySelectorAll("[data-map-topic]"));
    var selectedTopic = "all";

    function applyMapTopic(topic) {
      mapStage.setAttribute("data-active", topic);
      topicButtons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.getAttribute("data-map-topic") === topic));
      });
    }

    topicButtons.forEach(function (button) {
      var topic = button.getAttribute("data-map-topic");

      button.addEventListener("mouseenter", function () { applyMapTopic(topic); });
      button.addEventListener("mouseleave", function () { applyMapTopic(selectedTopic); });
      button.addEventListener("focus", function () { applyMapTopic(topic); });
      button.addEventListener("blur", function () { applyMapTopic(selectedTopic); });
      button.addEventListener("click", function () {
        selectedTopic = selectedTopic === topic ? "all" : topic;
        applyMapTopic(selectedTopic);
      });
    });

    mapStage.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        selectedTopic = "all";
        applyMapTopic(selectedTopic);
      }
    });
  }

  Array.prototype.slice.call(document.querySelectorAll("[data-weather-demo]")).forEach(function (demo) {
    var tabs = Array.prototype.slice.call(demo.querySelectorAll("[data-weather-tab]"));
    var panels = Array.prototype.slice.call(demo.querySelectorAll("[data-weather-panel]"));

    function selectWeather(name, moveFocus) {
      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute("data-weather-tab") === name;
        tab.setAttribute("aria-selected", String(isActive));
        tab.setAttribute("tabindex", isActive ? "0" : "-1");
        if (isActive && moveFocus) tab.focus();
      });

      panels.forEach(function (panel) {
        var isActive = panel.getAttribute("data-weather-panel") === name;
        panel.hidden = !isActive;
        if (!isActive) {
          var video = panel.querySelector("video");
          if (video) video.pause();
        }
      });
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        selectWeather(tab.getAttribute("data-weather-tab"), false);
      });

      tab.addEventListener("keydown", function (event) {
        var nextIndex;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        if (typeof nextIndex === "number") {
          event.preventDefault();
          selectWeather(tabs[nextIndex].getAttribute("data-weather-tab"), true);
        }
      });
    });
  });

  var cialloTriggers = Array.prototype.slice.call(
    document.querySelectorAll("#ciallo-trigger, [data-ciallo-trigger]")
  );
  var cialloToast = document.getElementById("ciallo-toast");
  var cialloTimer;

  cialloTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      window.clearTimeout(cialloTimer);
      root.classList.add("ciallo-active");
      cialloTriggers.forEach(function (item) {
        item.setAttribute("aria-pressed", "true");
      });
      if (cialloToast) cialloToast.hidden = false;

      cialloTimer = window.setTimeout(function () {
        root.classList.remove("ciallo-active");
        cialloTriggers.forEach(function (item) {
          item.setAttribute("aria-pressed", "false");
        });
        if (cialloToast) cialloToast.hidden = true;
      }, 2600);
    });
  });

  if (!readStoredTheme() && window.matchMedia) {
    var colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    var syncWithSystem = function (event) {
      if (!readStoredTheme()) applyTheme(event.matches ? "night" : "day", false);
    };
    if (colorScheme.addEventListener) colorScheme.addEventListener("change", syncWithSystem);
  }
});
