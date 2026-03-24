import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import "../styles/a1.css";
import "../styles/a2.css";
import "../styles/a3.css";
// import "../styles/a4.css";
// import "../styles/a5.css";
// import "../styles/a6.css";
// import "../styles/a7.css";
// import "../styles/a8.css";
// import "../styles/a9.css";
// import "../styles/a10.css";
import "../styles/a11.css";
// import "../styles/a12.css";
import "../styles/a13.css";

// ── Shell is a CLIENT component (handles state for Header/ClientInit) ────────
import LayoutShell from "@/components/LayoutShell";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Solo Health Collective",
  description: "Redefining healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cms-home cms-index-index page-layout-1column`}
      >
        {/* 1. jQuery — must load before Bootstrap + Owl */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        {/* 2. Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        {/* 3. Owl Carousel JS */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />

      
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}