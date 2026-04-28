const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const year = document.getElementById("year");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (siteNav) {
  const toggleNavShadow = () => {
    siteNav.classList.toggle("nav-scrolled", window.scrollY > 8);
  };

  toggleNavShadow();
  window.addEventListener("scroll", toggleNavShadow, { passive: true });
}

const animatedTargets = document.querySelectorAll(
  ".page-header .container, .section, .section-head, .card, .feature, .bulletin-box, .contact-form, .map-wrap, .image-placeholder, .placeholder-img"
);

if (animatedTargets.length) {
  animatedTargets.forEach((el, index) => {
    el.classList.add("reveal");
    const staggerMs = (index % 8) * 60;
    el.style.setProperty("--reveal-delay", `${staggerMs}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
  );

  animatedTargets.forEach((el) => revealObserver.observe(el));
}
