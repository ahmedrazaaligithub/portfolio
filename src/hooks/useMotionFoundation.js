import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "../lib/motion";

/** One page-level scroll controller; native touch scrolling and static reduced motion. */
export default function useMotionFoundation() {
  useEffect(() => {
    let lenis;
    let refreshFrame;
    let disposed = false;
    let initialHashPending = Boolean(location.hash);
    const media = gsap.matchMedia();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const headerHeight = () =>
      document.querySelector(".navbar")?.getBoundingClientRect().height || 0;
    const destination = (target) =>
      target.id === "hero" || target.id === "main-content"
        ? 0
        : target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight() -
          16;
    const scrollToTarget = (target, immediate = false) => {
      const top = destination(target);
      if (lenis) lenis.scrollTo(top, { immediate, duration: 1.05 });
      else
        window.scrollTo({
          top,
          behavior: immediate || reducedMotion.matches ? "instant" : "smooth",
        });
    };

    media.add(
      {
        desktop: "(min-width: 701px)",
        mobile: "(max-width: 700px), (pointer: coarse)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions.reduced) return;
        const instance = new Lenis({
          autoRaf: false,
          smoothWheel:
            context.conditions.desktop &&
            window.matchMedia("(pointer: fine)").matches,
          syncTouch: false,
          anchors: false,
          lerp: 0.085,
          // Textareas and the mobile dropdown retain their own native scrolling.
          prevent: (element) =>
            element.tagName === "TEXTAREA" ||
            element.id === "mobile-navigation",
        });
        lenis = instance;
        const updateScroll = () => ScrollTrigger.update();
        // GSAP supplies seconds; Lenis expects milliseconds. No second RAF loop.
        const tick = (seconds) => instance.raf(seconds * 1000);
        instance.on("scroll", updateScroll);
        gsap.ticker.add(tick);
        return () => {
          gsap.ticker.remove(tick);
          instance.off("scroll", updateScroll);
          instance.destroy();
          if (lenis === instance) lenis = undefined;
        };
      },
    );

    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => {
        if (disposed) return;
        lenis?.resize();
        ScrollTrigger.refresh();
        // React mounts after the browser first attempts to resolve the fragment.
        if (initialHashPending) {
          initialHashPending = false;
          restoreHash();
        }
      });
    };
    const navigate = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const anchor = event.target.closest?.("a[href]");
      if (
        !anchor ||
        anchor.hasAttribute("download") ||
        (anchor.target && anchor.target !== "_self")
      )
        return;
      const url = new URL(anchor.href, location.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        url.search !== location.search ||
        !url.hash
      )
        return;
      let id;
      try {
        id = decodeURIComponent(url.hash.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      initialHashPending = false;
      // Preserve native fragment history and keyboard focus without an initial jump.
      if (location.hash !== url.hash) history.pushState(null, "", url.hash);
      target.focus({ preventScroll: true });
      scrollToTarget(target);
    };
    const restoreHash = () => {
      let target;
      try {
        target = document.getElementById(
          decodeURIComponent(location.hash.slice(1)),
        );
      } catch {
        return;
      }
      if (target) scrollToTarget(target, true);
    };
    const observer = new ResizeObserver(refresh);
    const main = document.querySelector("main");
    if (main) observer.observe(main);
    document.addEventListener("click", navigate);
    document.addEventListener("load", refresh, true);
    window.addEventListener("hashchange", restoreHash);
    document.fonts.ready.then(() => {
      if (!disposed) refresh();
    });
    refresh();

    return () => {
      disposed = true;
      cancelAnimationFrame(refreshFrame);
      observer.disconnect();
      document.removeEventListener("click", navigate);
      document.removeEventListener("load", refresh, true);
      window.removeEventListener("hashchange", restoreHash);
      media.revert();
    };
  }, []);
}
