
// "use client";
// /**
//  * ClientInit.js
//  * ─────────────────────────────────────────────────────────────────────────────
//  * All browser-only side-effects, deferred safely inside useEffect.
//  * Returns null → zero HTML, invisible to the page.
//  *
//  * Fixes in this version
//  * ─────────────────────
//  * 1. AOS  once:false + mirror:true  → animations replay on EVERY scroll
//  * 2. slide-track uses IntersectionObserver → re-adds "animate" each entry
//  * 3. revealObserver removes "reveal" on exit → re-fires on next scroll
//  * 4. fadedObserver resets animation style on exit → re-fires on next scroll
//  * 5. Sidebar accordion handlers tracked for proper cleanup
//  * ─────────────────────────────────────────────────────────────────────────────
//  */

// import { useEffect } from "react";

// export default function ClientInit({ onFaqBannerClick, onNotificationReady }) {
//   useEffect(() => {

//     // 1. Reveal notification bar after hydration (prevents SSR mismatch)
//     onNotificationReady?.();

//     // 2. AOS — every-scroll mode
//     //    once: false  → element can animate in more than once
//     //    mirror: true → animate-out when scrolling back up past it
//     const initAOS = async () => {
//       try {
//         const AOS = (await import("aos")).default;
//         AOS.init({
//           duration: 1000,
//           once:     false,
//           mirror:   true,
//           offset:   80,
//         });
//       } catch (_) {}
//     };
//     initAOS();

//     // 3. Testimonial slide-track — re-animates on every scroll entry
//     //    Old approach: classList.add("animate") once at mount → never fires again
//     //    New approach: IntersectionObserver adds on enter / removes on leave
//     const slideTrackObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const track = entry.target.querySelector(".slide-track");
//           if (!track) return;
//           if (entry.isIntersecting) {
//             track.classList.add("animate");
//           } else {
//             track.classList.remove("animate");
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );
//     document.querySelectorAll(".slider").forEach((el) => slideTrackObserver.observe(el));

//     // 4. About + Medical coverage — "reveal" class removed on exit → re-fires
//     const revealObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal");
//           } else {
//             entry.target.classList.remove("reveal"); // reset for next scroll
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );
//     const aboutEl   = document.querySelector(".about-content");
//     const medicalEl = document.querySelector(".medical-coverage");
//     if (aboutEl)   revealObserver.observe(aboutEl);
//     if (medicalEl) revealObserver.observe(medicalEl);

//     // 5. Switch-section faded text — animation resets on every scroll entry
//     const fadedWrapper = document.querySelector(".faded-wrapper");
//     let fadedObserver  = null;
//     if (fadedWrapper) {
//       const fadedText = fadedWrapper.querySelector(".faded-text");
//       fadedObserver = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (!fadedText) return;
//             if (entry.isIntersecting) {
//               fadedText.style.animation = "none";
//               void fadedText.offsetWidth; // force reflow so browser resets the keyframe
//               fadedText.style.animation  = "scrollText 1s linear forwards";
//             } else {
//               fadedText.style.animation = "none"; // ready for next entry
//             }
//           });
//         },
//         { threshold: 0.3 }
//       );
//       fadedObserver.observe(fadedWrapper);
//     }

//     // 6. Bootstrap offcanvas — matchMedia-based responsive positioning
//     const offcanvasEl  = document.getElementById("offcanvasExample");
//     const mqlOffcanvas = window.matchMedia("(min-width: 768px)");

//     const updateOffcanvasPosition = (e) => {
//       if (!offcanvasEl) return;
//       if (e.matches) {
//         offcanvasEl.classList.remove("offcanvas-start");
//         offcanvasEl.classList.add("offcanvas-top");
//       } else {
//         offcanvasEl.classList.remove("offcanvas-top");
//         offcanvasEl.classList.add("offcanvas-start");
//       }
//     };
//     updateOffcanvasPosition(mqlOffcanvas);
//     mqlOffcanvas.addEventListener("change", updateOffcanvasPosition);

//     // 7. Sidebar accordion
//     const sidebarHandlers = [];
//     document.querySelectorAll(".sidebar-accordion .accordion-header").forEach((btn) => {
//       const handler = () => {
//         const body = btn.nextElementSibling;
//         document.querySelectorAll(".sidebar-accordion .accordion-body").forEach((b) => {
//           if (b !== body) {
//             b.classList.remove("open");
//             b.previousElementSibling?.classList.remove("active");
//           }
//         });
//         btn.classList.toggle("active");
//         body?.classList.toggle("open");
//       };
//       btn.addEventListener("click", handler);
//       sidebarHandlers.push({ btn, handler });
//     });

//     // 8. Owl Carousel
//     const initOwl = () => {
//       if (typeof window.$ !== "undefined" && window.$.fn?.owlCarousel) {
//         window.$(".owl-theme").owlCarousel({
//           loop: true, center: false, margin: 20,
//           nav: false, dots: true, items: 1,
//           autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true,
//           stagePadding: 40,
//         });
//         window.$(".stats-owl").owlCarousel({
//           loop: true, margin: 16, nav: false, dots: true, items: 1,
//           autoplay: true, autoplayTimeout: 3000,
//           responsive: {
//             0:   { stagePadding: 35,  margin: 15 },
//             375: { stagePadding: 58,  margin: 15 },
//             425: { stagePadding: 80,  margin: 15 },
//             540: { stagePadding: 130, margin: 15 },
//             568: { stagePadding: 150, margin: 15 },
//             768: { stagePadding: 40,  margin: 10 },
//           },
//         });
//         window.$(document).on("click", "body a.homebutton", function () {
//           window.$(".header .offcanvas-header .btn-close").trigger("click");
//         });
//         window.$(document).on("click", ".menu-btn.btn-closes.text-reset", function () {
//           window.$(".header .offcanvas-header .btn-close").trigger("click");
//         });
//         window.$(document).on("click", ".menu-close.close_menu", function () {
//           window.$(".header .offcanvas-header .btn-close").trigger("click");
//         });
//       }
//     };
//     const owlTimer = setTimeout(initOwl, 800);

//     // 9. Fullscreen video modal
//     const openVideoBtn    = document.getElementById("openVideo");
//     const fullscreenVideo = document.getElementById("fullscreenVideo");
//     const closeVideoBtn   = document.getElementById("closeBtn");
//     const videoPlayer     = document.getElementById("fullscreenVideoPlayer");

//     const handleOpenVideo = () => {
//       if (!fullscreenVideo || !videoPlayer) return;
//       fullscreenVideo.style.display = "flex";
//       videoPlayer.currentTime = 0;
//       videoPlayer.setAttribute("playsinline", "");
//       videoPlayer.setAttribute("webkit-playsinline", "");
//       videoPlayer.play().catch(() => {});
//       document.body.style.overflow = "hidden";
//     };
//     const handleCloseVideo = () => {
//       if (!fullscreenVideo || !videoPlayer) return;
//       fullscreenVideo.style.display = "none";
//       videoPlayer.pause();
//       document.body.style.overflow = "auto";
//     };
//     openVideoBtn?.addEventListener("click", handleOpenVideo);
//     closeVideoBtn?.addEventListener("click", handleCloseVideo);

//     // 10. FAQ banner link — wired here so the DOM element exists
//     const bannerLink = document.querySelector(".solo-banner a");
//     if (bannerLink && onFaqBannerClick) {
//       bannerLink.addEventListener("click", onFaqBannerClick);
//     }

//     // 11. Impact click-id cookie capture
//     (() => {
//       const params  = new URLSearchParams(window.location.search);
//       const clickId = params.get("im_ref");
//       if (clickId) {
//         const exp = new Date();
//         exp.setDate(exp.getDate() + 2);
//         document.cookie =
//           "impact_click_id=" + clickId +
//           "; path=/; expires=" + exp.toUTCString();
//       }
//     })();

//     // Cleanup
//     return () => {
//       mqlOffcanvas.removeEventListener("change", updateOffcanvasPosition);
//       clearTimeout(owlTimer);
//       revealObserver.disconnect();
//       slideTrackObserver.disconnect();
//       fadedObserver?.disconnect();
//       sidebarHandlers.forEach(({ btn, handler }) =>
//         btn.removeEventListener("click", handler)
//       );
//       openVideoBtn?.removeEventListener("click", handleOpenVideo);
//       closeVideoBtn?.removeEventListener("click", handleCloseVideo);
//       if (bannerLink && onFaqBannerClick) {
//         bannerLink.removeEventListener("click", onFaqBannerClick);
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [onFaqBannerClick, onNotificationReady]);

//   return null;
// }

"use client";
/**
 * ClientInit.js
 * ─────────────────────────────────────────────────────────────────────────────
 * All browser-only side-effects, deferred safely inside useEffect.
 * Returns null → zero HTML, invisible to the page.
 *
 * Fixes in this version
 * ─────────────────────
 * 1. AOS once:false + mirror:true → animations replay on EVERY scroll
 * 2. AOS refresh() called after mount so it picks up newly rendered elements
 * 3. slide-track uses IntersectionObserver → re-adds "animate" each entry
 * 4. revealObserver removes "reveal" on exit → re-fires on next scroll
 * 5. fadedObserver resets animation style on exit → re-fires on next scroll
 * 6. Sidebar accordion handlers tracked for proper cleanup
 * 7. Owl Carousel retries up to 10 times (500ms apart) if $ not ready yet
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useEffect } from "react";

export default function ClientInit({ onFaqBannerClick, onNotificationReady }) {
  useEffect(() => {

    // ── 1. Reveal notification bar after hydration (prevents SSR mismatch) ──
    onNotificationReady?.();

    // ── 2. AOS — every-scroll mode ───────────────────────────────────────────
    const initAOS = async () => {
      try {
        const AOS = (await import("aos")).default;
        // Also import AOS CSS once
        await import("aos/dist/aos.css").catch(() => {});
        AOS.init({
          duration: 1000,
          once:     false,  // animate on every scroll entry
          mirror:   true,   // animate-out when scrolling back up
          offset:   80,
        });
        // Refresh after a short delay so dynamically rendered elements register
        setTimeout(() => AOS.refresh(), 300);
      } catch (_) {}
    };
    initAOS();

    // ── 3. Testimonial slide-track ───────────────────────────────────────────
    const slideTrackObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const track = entry.target.querySelector(".slide-track");
          if (!track) return;
          if (entry.isIntersecting) {
            track.classList.add("animate");
          } else {
            track.classList.remove("animate");
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".slider").forEach((el) => slideTrackObserver.observe(el));

    // ── 4. About + Medical coverage reveal ──────────────────────────────────
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          } else {
            entry.target.classList.remove("reveal"); // reset for next scroll-in
          }
        });
      },
      { threshold: 0.15 }
    );
    const aboutEl   = document.querySelector(".about-content");
    const medicalEl = document.querySelector(".medical-coverage");
    if (aboutEl)   revealObserver.observe(aboutEl);
    if (medicalEl) revealObserver.observe(medicalEl);

    // ── 5. Switch-section faded text ─────────────────────────────────────────
    const fadedWrapper = document.querySelector(".faded-wrapper");
    let fadedObserver  = null;
    if (fadedWrapper) {
      const fadedText = fadedWrapper.querySelector(".faded-text");
      fadedObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!fadedText) return;
            if (entry.isIntersecting) {
              fadedText.style.animation = "none";
              void fadedText.offsetWidth; // force reflow → reset keyframe
              fadedText.style.animation = "scrollText 1s linear forwards";
            } else {
              fadedText.style.animation = "none";
            }
          });
        },
        { threshold: 0.3 }
      );
      fadedObserver.observe(fadedWrapper);
    }

    // ── 6. Bootstrap offcanvas responsive positioning ────────────────────────
    const offcanvasEl  = document.getElementById("offcanvasExample");
    const mqlOffcanvas = window.matchMedia("(min-width: 768px)");

    const updateOffcanvasPosition = (e) => {
      if (!offcanvasEl) return;
      if (e.matches) {
        offcanvasEl.classList.remove("offcanvas-start");
        offcanvasEl.classList.add("offcanvas-top");
      } else {
        offcanvasEl.classList.remove("offcanvas-top");
        offcanvasEl.classList.add("offcanvas-start");
      }
    };
    updateOffcanvasPosition(mqlOffcanvas);
    mqlOffcanvas.addEventListener("change", updateOffcanvasPosition);

    // ── 7. Sidebar accordion ─────────────────────────────────────────────────
    const sidebarHandlers = [];
    document.querySelectorAll(".sidebar-accordion .accordion-header").forEach((btn) => {
      const handler = () => {
        const body = btn.nextElementSibling;
        document.querySelectorAll(".sidebar-accordion .accordion-body").forEach((b) => {
          if (b !== body) {
            b.classList.remove("open");
            b.previousElementSibling?.classList.remove("active");
          }
        });
        btn.classList.toggle("active");
        body?.classList.toggle("open");
      };
      btn.addEventListener("click", handler);
      sidebarHandlers.push({ btn, handler });
    });

    // ── 8. Owl Carousel — retry until jQuery + owlCarousel are both loaded ───
    let owlAttempts = 0;
    let owlTimer    = null;

    const initOwl = () => {
      if (typeof window.$ !== "undefined" && window.$.fn?.owlCarousel) {
        // Destroy any existing instances first to avoid double-init
        try { window.$(".owl-theme").trigger("destroy.owl.carousel").removeClass("owl-loaded"); } catch (_) {}
        try { window.$(".stats-owl").trigger("destroy.owl.carousel").removeClass("owl-loaded"); } catch (_) {}

        window.$(".owl-theme").owlCarousel({
          loop: true, center: false, margin: 20,
          nav: false, dots: true, items: 1,
          autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true,
          stagePadding: 40,
        });
        window.$(".stats-owl").owlCarousel({
          loop: true, margin: 16, nav: false, dots: true, items: 1,
          autoplay: true, autoplayTimeout: 3000,
          responsive: {
            0:   { stagePadding: 35,  margin: 15 },
            375: { stagePadding: 58,  margin: 15 },
            425: { stagePadding: 80,  margin: 15 },
            540: { stagePadding: 130, margin: 15 },
            568: { stagePadding: 150, margin: 15 },
            768: { stagePadding: 40,  margin: 10 },
          },
        });

        // Close offcanvas when nav links are clicked
        window.$(document).off("click.soloNav").on("click.soloNav", "body a.homebutton", function () {
          window.$(".header .offcanvas-header .btn-close").trigger("click");
        });
        window.$(document).off("click.soloClose").on("click.soloClose", ".menu-btn.btn-closes.text-reset", function () {
          window.$(".header .offcanvas-header .btn-close").trigger("click");
        });
        window.$(document).off("click.soloMenu").on("click.soloMenu", ".menu-close.close_menu", function () {
          window.$(".header .offcanvas-header .btn-close").trigger("click");
        });
        return; // success
      }

      // Retry up to 10 times (every 500ms = 5 seconds total)
      if (owlAttempts < 10) {
        owlAttempts++;
        owlTimer = setTimeout(initOwl, 500);
      }
    };

    // Start first attempt after 800ms (scripts need time to load)
    owlTimer = setTimeout(initOwl, 800);

    // ── 9. Fullscreen video modal ─────────────────────────────────────────────
    const openVideoBtn    = document.getElementById("openVideo");
    const fullscreenVideo = document.getElementById("fullscreenVideo");
    const closeVideoBtn   = document.getElementById("closeBtn");
    const videoPlayer     = document.getElementById("fullscreenVideoPlayer");

    const handleOpenVideo = () => {
      if (!fullscreenVideo || !videoPlayer) return;
      fullscreenVideo.style.display = "flex";
      videoPlayer.currentTime = 0;
      videoPlayer.setAttribute("playsinline", "");
      videoPlayer.setAttribute("webkit-playsinline", "");
      videoPlayer.play().catch(() => {});
      document.body.style.overflow = "hidden";
    };
    const handleCloseVideo = () => {
      if (!fullscreenVideo || !videoPlayer) return;
      fullscreenVideo.style.display = "none";
      videoPlayer.pause();
      document.body.style.overflow = "auto";
    };
    openVideoBtn?.addEventListener("click", handleOpenVideo);
    closeVideoBtn?.addEventListener("click", handleCloseVideo);

    // ── 10. FAQ banner link ───────────────────────────────────────────────────
    const bannerLink = document.querySelector(".solo-banner a");
    if (bannerLink && onFaqBannerClick) {
      bannerLink.addEventListener("click", onFaqBannerClick);
    }

    // ── 11. Impact click-id cookie capture ────────────────────────────────────
    (() => {
      const params  = new URLSearchParams(window.location.search);
      const clickId = params.get("im_ref");
      if (clickId) {
        const exp = new Date();
        exp.setDate(exp.getDate() + 2);
        document.cookie =
          "impact_click_id=" + clickId +
          "; path=/; expires=" + exp.toUTCString();
      }
    })();

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      mqlOffcanvas.removeEventListener("change", updateOffcanvasPosition);
      clearTimeout(owlTimer);
      revealObserver.disconnect();
      slideTrackObserver.disconnect();
      fadedObserver?.disconnect();
      sidebarHandlers.forEach(({ btn, handler }) =>
        btn.removeEventListener("click", handler)
      );
      openVideoBtn?.removeEventListener("click", handleOpenVideo);
      closeVideoBtn?.removeEventListener("click", handleCloseVideo);
      if (bannerLink && onFaqBannerClick) {
        bannerLink.removeEventListener("click", onFaqBannerClick);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onFaqBannerClick, onNotificationReady]);

  return null;
}