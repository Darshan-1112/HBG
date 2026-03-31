"use client";
import { useEffect } from "react";

export default function ClientInit({ onFaqBannerClick, onNotificationReady }) {
  useEffect(() => {

    // 1. Notification bar
    onNotificationReady?.();

    // 2. AOS
    const initAOS = async () => {
      try {
        const AOS = (await import("aos")).default;
        await import("aos/dist/aos.css").catch(() => {});
        AOS.init({ duration: 1000, once: false, mirror: true, offset: 80 });
        setTimeout(() => AOS.refresh(), 300);
      } catch (_) {}
    };
    initAOS();

    // 3. Slide-track
    const slideTrackObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const track = entry.target.querySelector(".slide-track");
          if (!track) return;
          if (entry.isIntersecting) track.classList.add("animate");
          else track.classList.remove("animate");
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".slider").forEach((el) => slideTrackObserver.observe(el));

    // 4. Reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal");
          else entry.target.classList.remove("reveal");
        });
      },
      { threshold: 0.15 }
    );
    const aboutEl   = document.querySelector(".about-content");
    const medicalEl = document.querySelector(".medical-coverage");
    if (aboutEl)   revealObserver.observe(aboutEl);
    if (medicalEl) revealObserver.observe(medicalEl);

    // 5. Faded text
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
              void fadedText.offsetWidth;
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

    // 6. Offcanvas responsive positioning
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

    // 7. Sidebar accordion
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

 
    let owlAttempts = 0;
    let owlTimer    = null;
    let owlReady    = false;

 
    const owlThemeDesktopOptions = {
      loop: true, center: false, nav: false, dots: true, items: 1,
      autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true,
      responsive: {
        0:   { stagePadding: 0,  margin: 10 },
        768: { stagePadding: 40, margin: 20 },
      },
    };

    const owlThemeMobileOptions = {
      loop: true, center: false, nav: false, dots: true, items: 1,
      autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true,
      stagePadding: 50,
      margin: 15,
    };

    const owlStatsOptions = {
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
    };

   
    const reinitOwlTheme = () => {
      const $all = window.$(".news-box .owl-carousel.owl-theme");

      try { $all.trigger("destroy.owl.carousel").removeClass("owl-loaded owl-drag"); } catch (_) {}

      // First .owl-theme in .news-box = desktop (stagePadding on md+)
      // Second .owl-theme in .news-box = mobile (no stagePadding)
      if ($all.length >= 2) {
        $all.eq(0).owlCarousel(owlThemeDesktopOptions);
        $all.eq(1).owlCarousel(owlThemeMobileOptions);
      } else if ($all.length === 1) {
        $all.eq(0).owlCarousel(owlThemeDesktopOptions);
      }
    };

    const initOwl = () => {
      if (owlReady) return;

      if (typeof window.$ !== "undefined" && window.$.fn?.owlCarousel) {
        owlReady = true;

        // ── stats-owl (mobile stats section below hero) ──────────────────
        try { window.$(".stats-owl").trigger("destroy.owl.carousel").removeClass("owl-loaded owl-drag"); } catch (_) {}
        window.$(".stats-owl").owlCarousel(owlStatsOptions);

        reinitOwlTheme();

   
        if (offcanvasEl) {
          offcanvasEl.addEventListener("shown.bs.offcanvas", reinitOwlTheme);
        }

        // ── Close offcanvas on nav link / button clicks ──────────────────
        const closeOffcanvas = () => {
          if (window.bootstrap?.Offcanvas && offcanvasEl) {
            const inst =
              window.bootstrap.Offcanvas.getInstance(offcanvasEl) ||
              new window.bootstrap.Offcanvas(offcanvasEl);
            inst.hide();
          } else {
            window.$(".header .offcanvas-header .btn-close").trigger("click");
          }
        };
        window.$(document).off("click.soloNav")
          .on("click.soloNav", "#offcanvasExample .offcanvas-body a", function () {
            setTimeout(closeOffcanvas, 50);
          });
        window.$(document).off("click.soloClose")
          .on("click.soloClose", ".menu-btn.btn-closes.text-reset", closeOffcanvas);
        window.$(document).off("click.soloMenu")
          .on("click.soloMenu", ".menu-close.close_menu", closeOffcanvas);
        window.$(document).off("click.soloHome")
          .on("click.soloHome", ".menu_home_section a", function () {
            setTimeout(closeOffcanvas, 50);
          });

        return; // success
      }

      // Not ready yet — retry up to 20 × 500 ms = 10 s
      if (owlAttempts < 20) {
        owlAttempts++;
        owlTimer = setTimeout(initOwl, 500);
      }
    };

    // Start earlier than before (300 ms) — mobile browsers hydrate fast enough
    owlTimer = setTimeout(initOwl, 300);

    // Fallback: try once more after every asset on the page has loaded
    window.addEventListener("load", initOwl, { once: true });

    // 9. Video modal
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

    // 10. FAQ banner
    const bannerLink = document.querySelector(".solo-banner a");
    if (bannerLink && onFaqBannerClick) {
      bannerLink.addEventListener("click", onFaqBannerClick);
    }

    // 11. Click-id cookie
    (() => {
      const params  = new URLSearchParams(window.location.search);
      const clickId = params.get("im_ref");
      if (clickId) {
        const exp = new Date();
        exp.setDate(exp.getDate() + 2);
        document.cookie = "impact_click_id=" + clickId + "; path=/; expires=" + exp.toUTCString();
      }
    })();

    // Cleanup
    return () => {
      mqlOffcanvas.removeEventListener("change", updateOffcanvasPosition);
      clearTimeout(owlTimer);
      window.removeEventListener("load", initOwl);
      if (offcanvasEl) {
        offcanvasEl.removeEventListener("shown.bs.offcanvas", reinitOwlTheme);
      }
      revealObserver.disconnect();
      slideTrackObserver.disconnect();
      fadedObserver?.disconnect();
      sidebarHandlers.forEach(({ btn, handler }) => btn.removeEventListener("click", handler));
      openVideoBtn?.removeEventListener("click", handleOpenVideo);
      closeVideoBtn?.removeEventListener("click", handleCloseVideo);
      if (bannerLink && onFaqBannerClick) bannerLink.removeEventListener("click", onFaqBannerClick);
      if (typeof window.$ !== "undefined") {
        window.$(document).off("click.soloNav click.soloClose click.soloMenu click.soloHome");
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onFaqBannerClick, onNotificationReady]);

  return null;
}