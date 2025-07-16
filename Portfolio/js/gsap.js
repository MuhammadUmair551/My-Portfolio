document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    // ===== Hero Section Animation =====
    gsap.from(".hero-title", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out"
    });

    gsap.from(".hero-subtitle", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "power2.out"
    });

    gsap.from(".hero-buttons .btn", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });

    gsap.from(".hero-image img", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "back.out(1.7)"
    });

    // ===== Scroll Animations =====
    gsap.utils.toArray(".section-title").forEach((title) => {
      gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

  } else {
    console.warn("GSAP or ScrollTrigger not loaded!");
  }
});
