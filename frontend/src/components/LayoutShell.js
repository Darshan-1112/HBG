"use client";

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
  
  const [notifVisible, setNotifVisible] = useState(false);
  const handleNotificationReady = useCallback(() => setNotifVisible(true), []);
  const handleCloseNotif = useCallback(() => setNotifVisible(false), []);

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
    
      <ClientInit
        onFaqBannerClick={handleFaqBannerClick}
        onNotificationReady={handleNotificationReady}
      />

      {/* Header — rendered on every page */}
      <Header
        sidebarOpen={sidebarOpen}
        handleToggleSidebar={handleToggleSidebar}
        notifVisible={notifVisible}
        onCloseNotif={handleCloseNotif}
      />

      {/* Page content */}
      <main style={{ paddingTop: notifVisible ? '90px' : '85px' }} className="transition-all">
        {children}
      </main>

      {/* Footer — rendered on every page */}
      <Footer />
    </>
  );
}