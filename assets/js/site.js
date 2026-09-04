document.addEventListener("DOMContentLoaded", function () {
  if (window.jQuery) {
    window.jQuery('#site-nav a[href*="#"]').off("click.smoothscroll");
  }

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('#site-nav a[href*="#"]')
  );

  if (!("IntersectionObserver" in window) || navLinks.length === 0) return;

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
});
