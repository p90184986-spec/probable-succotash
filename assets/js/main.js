(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector("[data-nav]");
  const mobileQuery = window.matchMedia("(max-width: 860px)");
  const currentPage = document.body.dataset.page;

  document.documentElement.classList.add("reveal-ready");

  document.querySelectorAll("[data-nav] .nav-link").forEach((link) => {
    const targetPage = link.getAttribute("href")?.replace(/\.html$/, "") || "";
    const normalizedPage = targetPage === "index" ? "home" : targetPage;
    if (normalizedPage === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const closeNavigation = () => {
    if (!navToggle || !navigation) return;
    navToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  if (navToggle && navigation) {
    navToggle.addEventListener("click", () => {
      const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(willOpen));
      navigation.classList.toggle("is-open", willOpen);
      document.body.classList.toggle("nav-open", willOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNavigation();
    });

    mobileQuery.addEventListener("change", closeNavigation);
  }

  const updateHeader = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const revealItems = document.querySelectorAll("[data-reveal]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px" }
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const status = form.querySelector("[data-form-status]");
      const recipient = form.dataset.email || "fututana8@gmail.com";
      const data = new FormData(form);
      const subject = `SEO inquiry from ${data.get("name") || "Website visitor"}`;
      const body = [
        `Name: ${data.get("name") || ""}`,
        `Email: ${data.get("email") || ""}`,
        `Website: ${data.get("website") || "Not provided"}`,
        `Service: ${data.get("service") || "Not selected"}`,
        "",
        "Project details:",
        data.get("message") || ""
      ].join("\n");

      if (status) {
        status.textContent = "Opening your email app. If it does not open, email fututana8@gmail.com directly.";
      }

      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
})();
