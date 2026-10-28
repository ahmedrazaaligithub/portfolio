import { useRef } from "react";
import { gsap, useGSAP } from "../lib/motion";

const NATIVE_SURFACES =
  "form, input, textarea, select, option, label, [contenteditable]:not([contenteditable='false'])";

export default function PointerInteractions() {
  const cursor = useRef(null);
  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(
        "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)",
        () => {
          const overlay = cursor.current;
          const label = overlay.querySelector(".pointer-cursor-label");
          const records = new Map();
          overlay.dataset.state = "default";
          overlay.dataset.visible = "false";
          label.textContent = "";
          const xTo = gsap.quickTo(overlay, "x", {
            duration: 0.2,
            ease: "power3.out",
          });
          const yTo = gsap.quickTo(overlay, "y", {
            duration: 0.2,
            ease: "power3.out",
          });
          let magnetic;
          let depth;
          let pointer;
          let pressed = false;
          let visible = false;
          let state = "default";
          let scrollFrame;
          document.documentElement.classList.add("pointer-enhanced");

          // Each cached target owns a context; no pointer frame allocates new tweens.
          const getRecord = (element, type) => {
            let record = records.get(element);
            if (record) return record;
            record = {
              element,
              type,
              move: {},
              rest: {},
              initialStyle: element.getAttribute("style"),
            };
            record.context = gsap.context(() => {
              const properties =
                type === "magnet"
                  ? ["x", "y"]
                  : ["rotationX", "rotationY", "x", "y", "scaleX", "scaleY"];
              if (type === "depth")
                gsap.set(element, {
                  transformPerspective: 900,
                  transformOrigin: "50% 50%",
                });
              properties.forEach((property) => {
                record.move[property] = gsap.quickTo(element, property, {
                  duration: type === "magnet" ? 0.3 : 0.4,
                  ease: "power3.out",
                });
                record.rest[property] = gsap.quickTo(element, property, {
                  duration: type === "magnet" ? 0.8 : 0.55,
                  ease:
                    type === "magnet" ? "elastic.out(1, 0.45)" : "power3.out",
                });
              });
            }, element);
            records.set(element, record);
            return record;
          };
          const rest = (record) => {
            if (!record) return;
            Object.entries(record.move).forEach(([property, move]) => {
              move.tween.pause();
              record.rest[property](property.startsWith("scale") ? 1 : 0);
            });
          };
          const move = (record, values) => {
            Object.entries(values).forEach(([property, value]) => {
              record.rest[property].tween.pause();
              record.move[property](value);
            });
          };
          const resetTargets = () => {
            rest(magnetic);
            rest(depth);
            magnetic = undefined;
            depth = undefined;
          };
          const hide = () => {
            overlay.dataset.visible = "false";
            visible = false;
          };
          const setState = (next) => {
            if (state === next) return;
            state = next;
            overlay.dataset.state = next;
            label.textContent =
              next === "preview"
                ? "VIEW"
                : next === "link"
                  ? "↗"
                  : next === "button"
                    ? "+"
                    : "";
          };
          const selectionActive = () =>
            Boolean(window.getSelection()?.toString());
          const nativeSurface = (target) =>
            !target ||
            target.closest(NATIVE_SURFACES) ||
            target.closest("[inert], [aria-hidden='true']");
          const revertRecord = (record) => {
            record.context.revert();
            // Paused return tweens may have captured a later transform as their
            // start value. These dedicated layers must restore their real baseline.
            if (record.initialStyle === null)
              record.element.removeAttribute("style");
            else record.element.setAttribute("style", record.initialStyle);
          };
          const prune = () => {
            records.forEach((record, element) => {
              if (!element.isConnected) {
                revertRecord(record);
                records.delete(element);
              }
            });
          };
          const follow = (target, clientX, clientY, allowDepth) => {
            if (nativeSurface(target) || pressed || selectionActive()) {
              hide();
              resetTargets();
              return;
            }
            if (!visible) {
              // Avoid a sweep from the top-left on first entry or after keyboard use.
              xTo.tween.pause();
              yTo.tween.pause();
              gsap.set(overlay, { x: clientX, y: clientY });
              visible = true;
              overlay.dataset.visible = "true";
            } else {
              xTo(clientX);
              yTo(clientY);
            }
            const preview = target.closest("[data-project-preview]");
            const control = target.closest(
              "a[href], button:not(:disabled), [role='button']",
            );
            setState(
              preview
                ? "preview"
                : control?.matches("a[href]")
                  ? "link"
                  : control
                    ? "button"
                    : "default",
            );

            const magnetElement = allowDepth
              ? target.closest("[data-magnetic]")
              : null;
            if (magnetElement && !magnetElement.matches(":focus-visible")) {
              if (magnetic?.element !== magnetElement) {
                rest(magnetic);
                magnetic = getRecord(magnetElement, "magnet");
                magnetic.bounds = magnetElement.getBoundingClientRect();
              }
              const bounds = magnetic.bounds;
              move(magnetic, {
                x: gsap.utils.clamp(
                  -8,
                  8,
                  (clientX - bounds.left - bounds.width / 2) * 0.13,
                ),
                y: gsap.utils.clamp(
                  -5,
                  5,
                  (clientY - bounds.top - bounds.height / 2) * 0.18,
                ),
              });
            } else {
              rest(magnetic);
              magnetic = undefined;
            }
            const surface = allowDepth
              ? target.closest("[data-depth-surface]")
              : null;
            const layer = surface?.querySelector(".project-pointer-depth");
            if (layer) {
              if (depth?.element !== layer) {
                rest(depth);
                depth = getRecord(layer, "depth");
              }
              const bounds = surface.getBoundingClientRect();
              const px = gsap.utils.clamp(
                -1,
                1,
                ((clientX - bounds.left) / bounds.width) * 2 - 1,
              );
              const py = gsap.utils.clamp(
                -1,
                1,
                ((clientY - bounds.top) / bounds.height) * 2 - 1,
              );
              move(depth, {
                rotationX: -py * 2.5,
                rotationY: px * 3,
                x: px * 3,
                y: py * 2,
                scaleX: 1.025,
                scaleY: 1.025,
              });
            } else {
              rest(depth);
              depth = undefined;
            }
          };
          const onMove = (event) => {
            if (event.pointerType !== "mouse") {
              pointer = undefined;
              hide();
              resetTargets();
              return;
            }
            pointer = { x: event.clientX, y: event.clientY };
            prune();
            if (event.buttons) {
              hide();
              return;
            }
            pressed = false;
            follow(event.target, event.clientX, event.clientY, true);
          };
          const onLeave = () => {
            pressed = false;
            pointer = undefined;
            hide();
            resetTargets();
          };
          const onDown = () => {
            pressed = true;
            hide();
            // Freeze the hit target between pointerdown and the native click.
            [magnetic, depth].forEach((record) => {
              if (record)
                Object.values(record.move).forEach((quick) =>
                  quick.tween.pause(),
                );
            });
          };
          const onUp = () => {
            pressed = false;
            resetTargets();
          };
          const onKeyboard = (event) => {
            pointer = undefined;
            hide();
            if (pressed && event.type === "focusin") return;
            records.forEach((record) => {
              rest(record);
              Object.values(record.rest).forEach((quick) =>
                quick.tween.progress(1).pause(),
              );
            });
            magnetic = undefined;
            depth = undefined;
          };
          const onSelection = () => {
            if (selectionActive()) {
              hide();
              resetTargets();
            }
          };
          const onScroll = () => {
            if (scrollFrame) return;
            scrollFrame = requestAnimationFrame(() => {
              scrollFrame = undefined;
              resetTargets();
              // Pinned slides and expanded collections can change beneath a still pointer.
              if (pointer)
                follow(
                  document.elementFromPoint(pointer.x, pointer.y),
                  pointer.x,
                  pointer.y,
                  false,
                );
              prune();
            });
          };
          document.addEventListener("pointermove", onMove, { passive: true });
          document.documentElement.addEventListener("pointerleave", onLeave);
          document.addEventListener("pointerdown", onDown, { passive: true });
          window.addEventListener("pointerup", onUp, { passive: true });
          window.addEventListener("pointercancel", onUp, { passive: true });
          document.addEventListener("keydown", onKeyboard);
          document.addEventListener("focusin", onKeyboard);
          document.addEventListener("selectionchange", onSelection);
          window.addEventListener("scroll", onScroll, { passive: true });
          window.addEventListener("resize", onLeave);
          window.addEventListener("blur", onLeave);
          return () => {
            cancelAnimationFrame(scrollFrame);
            document.removeEventListener("pointermove", onMove);
            document.documentElement.removeEventListener(
              "pointerleave",
              onLeave,
            );
            document.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointerup", onUp);
            window.removeEventListener("pointercancel", onUp);
            document.removeEventListener("keydown", onKeyboard);
            document.removeEventListener("focusin", onKeyboard);
            document.removeEventListener("selectionchange", onSelection);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onLeave);
            window.removeEventListener("blur", onLeave);
            records.forEach(revertRecord);
            records.clear();
            hide();
            document.documentElement.classList.remove("pointer-enhanced");
          };
        },
      );
      return () => media.revert();
    },
    { scope: cursor },
  );

  return (
    <div className="pointer-overlay" aria-hidden="true">
      <div
        ref={cursor}
        className="pointer-cursor"
        data-state="default"
        data-visible="false"
      >
        <span className="pointer-cursor-body">
          <span className="pointer-cursor-label" />
        </span>
      </div>
    </div>
  );
}
