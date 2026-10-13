import { useEffect } from "react";

/**
 * Subtle scroll reveal for below-the-fold sections.
 * Progressive enhancement: nothing is hidden until this effect runs
 * (post-hydration), so SSR/no-JS/crawlers always see full content.
 * Only sections that start below the viewport are animated.
 */
export function useReveal(selector = "#root > section:not(#hero)") {
  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const targets = Array.from(document.querySelectorAll(selector)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9
    );
    if (!targets.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => {
      el.setAttribute("data-reveal", "");
      io.observe(el);
    });
    document.documentElement.classList.add("js-reveal");

    return () => {
      io.disconnect();
      document.documentElement.classList.remove("js-reveal");
      targets.forEach((el) => {
        el.removeAttribute("data-reveal");
        el.classList.remove("is-revealed");
      });
    };
  }, [selector]);
}
