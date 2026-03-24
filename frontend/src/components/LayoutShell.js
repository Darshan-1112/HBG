"use client";
// src/components/LayoutShell.js
// ─────────────────────────────────────────────────────────────────────────────
// Wraps EVERY page. Owns Header + Footer + ClientInit.
// All effects (carousel, AOS, sidebar, video) work on every route.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientInit from "@/components/ClientInit";

export default function LayoutShell({ children }) {

  // ── Sidebar accordion (header offcanvas menu) ────────────────────────────
  const [sidebarOpen, setSidebarOpen] = useState({ 0: true });
  const handleToggleSidebar = useCallback((i) => {
    setSidebarOpen((prev) => {
      const next = {};
      Object.keys(prev).forEach((k) => { next[k] = false; });
      next[i] = !prev[i];
      return next;
    });
  }, []);

  // ── Notification bar ─────────────────────────────────────────────────────
  // ClientInit calls onNotificationReady() after hydration to prevent SSR flash
  const [notifVisible, setNotifVisible] = useState(false);
  const handleNotificationReady = useCallback(() => setNotifVisible(true), []);

  // ── FAQ banner click ──────────────────────────────────────────────────────
  // The .solo-banner link lives on the home page. It should scroll to #ques2
  // (the "When should I establish my plan?" FAQ item on the home page).
  // On other pages there is no .solo-banner, so this handler simply never fires.
  const handleFaqBannerClick = useCallback((e) => {
    e.preventDefault();
    // Try home-page specific anchor first, fall back to generic faq-section
    const target =
      document.getElementById("ques2") ||
      document.getElementById("faq-section") ||
      document.querySelector(".faq-section");
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 200,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      {/*
        ClientInit boots ALL browser-only effects once, site-wide:
        • AOS animations (every scroll, mirror mode)
        • Owl Carousel (header news cards + stats)
        • Bootstrap offcanvas responsive positioning
        • Sidebar accordion
        • Reveal / faded IntersectionObservers
        • Fullscreen video modal
        • Impact click-id cookie capture
      */}
      <ClientInit
        onFaqBannerClick={handleFaqBannerClick}
        onNotificationReady={handleNotificationReady}
      />

      {/* Header — rendered on every page */}
      <Header
        sidebarOpen={sidebarOpen}
        handleToggleSidebar={handleToggleSidebar}
        notifVisible={notifVisible}
      />

      {/* Page content */}
      <main>{children}</main>

      {/* Footer — rendered on every page */}
      <Footer />
    </>
  );
}