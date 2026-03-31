"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Footer() {

  useEffect(() => {
    let retries = 0;
    const MAX_RETRIES = 20; // try for ~10 seconds

    const tryInitHubspot = () => {
      if (window.hbspt) {
        // Make sure the container is empty before creating (prevent double-embed)
        const container = document.getElementById("hubspot-form-container");
        if (container && container.children.length === 0) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "47159508",
            formId: "36e5cb29-2da5-47ed-b1ea-0471d9e3cfc9",
            target: "#hubspot-form-container",
          });
        }
        return; // done
      }
      // hbspt not ready yet — inject script if not already present
      if (!document.getElementById("hs-forms-script")) {
        const s = document.createElement("script");
        s.id = "hs-forms-script";
        s.src = "//js.hsforms.net/forms/embed/v2.js";
        s.charset = "utf-8";
        s.type = "text/javascript";
        document.body.appendChild(s);
      }
      // Retry after 500ms
      if (retries < MAX_RETRIES) {
        retries++;
        setTimeout(tryInitHubspot, 500);
      }
    };

    tryInitHubspot();
  }, []);

  return (
    <>
      <style>{`
        .footer-root, .footer-root * { box-sizing: border-box; }
        .footer-root { background-color: #1e2a6e; margin: 0; padding: 0; }
        .footer-inner { background-color: #1e2a6e; padding: 60px 0 48px; }
        .footer-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .footer-top-row { display: flex; flex-wrap: wrap; }
        .footer-col-company  { flex: 0 0 33.333%; max-width: 33.333%; padding-right: 24px; margin-bottom: 32px; }
        .footer-col-resources { flex: 0 0 33.333%; max-width: 33.333%; padding-right: 24px; }
        .footer-col-stripe   { flex: 0 0 33.333%; max-width: 33.333%; }
        .footer-bottom-row   { display: flex; flex-wrap: wrap; margin-top: 48px; }
        .footer-col-about    { flex: 0 0 50%; max-width: 50%; padding-right: 32px; }
        .footer-col-subscribe { flex: 0 0 50%; max-width: 50%; }

        .footer-heading { font-weight: 700; color: #ffffff !important; margin-bottom: 24px; }
        .footer-heading-sm { font-size: 16px; }
        .footer-heading-md { font-size: 18px; }

        .footer-links-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }

        .footer-root a.footer-link,
        .footer-root .footer-link {
          color: rgba(255, 255, 255, 0.85) !important;
          text-decoration: none !important;
          font-size: 14px;
          transition: color 0.2s;
        }
        .footer-root a.footer-link:hover,
        .footer-root .footer-link:hover {
          color: #ffffff !important;
          text-decoration: underline !important;
        }

        .footer-contact-item { display: flex; align-items: center; gap: 8px; }
        .footer-body-text { color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.65; margin: 0; }

        .stripe-heading { font-size: 48px; font-weight: 700; color: #fff; letter-spacing: -1px; margin-bottom: 8px; padding-bottom: 16px; line-height: 1; }
        .card-logos { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
        .stripe-note { color: #fff; font-size: 10px; margin: 0; }

        .social-row { display: flex; align-items: center; gap: 12px; margin-top: 12px; flex-wrap: wrap; }
        .social-row a { display: inline-flex; align-items: center; justify-content: center; transition: opacity 0.2s; }
        .social-row a:hover { opacity: 0.7; }

        .powered-by-row { display: flex; align-items: center; gap: 8px; margin-top: 16px; color: rgba(255,255,255,0.7); font-size: 13px; }
        .powered-by-row img { height: 28px; width: auto; }

        /* HubSpot form overrides — make it match dark footer background */
        #hubspot-form-container .hs-form-private,
        #hubspot-form-container form { background: transparent !important; }
        #hubspot-form-container .hs-input {
          background: rgba(255,255,255,0.1) !important;
          border: 1px solid rgba(255,255,255,0.35) !important;
          color: #fff !important;
          border-radius: 4px !important;
          padding: 10px 14px !important;
          width: 100% !important;
          font-size: 14px !important;
        }
        #hubspot-form-container .hs-input::placeholder { color: rgba(255,255,255,0.45) !important; }
        #hubspot-form-container label {
          color: rgba(255,255,255,0.85) !important;
          font-size: 13px !important;
          margin-bottom: 4px !important;
          display: block !important;
        }
        #hubspot-form-container .hs-button {
          background-color: #fff !important;
          color: #1e2a6e !important;
          border: none !important;
          border-radius: 4px !important;
          padding: 10px 28px !important;
          font-weight: 700 !important;
          font-size: 14px !important;
          cursor: pointer !important;
          margin-top: 8px !important;
        }
        #hubspot-form-container .hs-button:hover { background-color: #e8eaf6 !important; }
        #hubspot-form-container .hs_error_rollup li,
        #hubspot-form-container .hs-error-msgs li { color: #ff8a8a !important; font-size: 12px !important; }
        #hubspot-form-container > div { background: transparent !important; }

        /* Loading placeholder while HubSpot loads */
        #hubspot-form-container:empty::after {
          content: "Loading form…";
          color: rgba(255,255,255,0.4);
          font-size: 13px;
        }

        @media (max-width: 767px) {
          .footer-col-company,.footer-col-resources,.footer-col-stripe,
          .footer-col-about,.footer-col-subscribe {
            flex: 0 0 100%; max-width: 100%; padding-right: 0;
          }
          .footer-col-about { margin-bottom: 32px; }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .footer-col-company  { flex: 0 0 50%; max-width: 50%; }
          .footer-col-resources { flex: 0 0 50%; max-width: 50%; }
          .footer-col-stripe   { flex: 0 0 100%; max-width: 100%; }
        }
      `}</style>

      <div className="footer-root">
        <div className="footer-inner">
          <div className="footer-container">

            {/* ── TOP ROW ── */}
            <div className="footer-top-row">

              {/* Company */}
              <div className="footer-col-company">
                <h6 className="footer-heading footer-heading-sm">Company</h6>
                <ul className="footer-links-list">
                  <li><Link href="/about-us" className="footer-link">About Us</Link></li>
                  <li><Link href="/about-us#license" className="footer-link">Regulatory &amp; Licensing</Link></li>
                  <li><Link href="/disclosure-statement" className="footer-link">Disclosure Statement</Link></li>
                  <li><Link href="/privacy-policy-cookie-restriction-mode" className="footer-link">Privacy &amp; Cookie Policy</Link></li>
                  <li><Link href="/terms-and-conditions" className="footer-link">Terms &amp; Conditions</Link></li>
                  <li className="footer-contact-item">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.314 28.323" style={{ flexShrink: 0 }}>
                      <path fill="rgba(255,255,255,0.8)" d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
                    </svg>
                    <Link href="tel:646-328-6968" className="footer-link">+1 646-328-6968</Link>
                  </li>
                  <li className="footer-contact-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5 6H19C19.3862 6 19.7213 6.21897 19.8879 6.53954L12.5547 11.4283C12.2188 11.6523 11.7812 11.6523 11.4453 11.4283L4.11209 6.53953C4.27868 6.21896 4.61377 6 5 6ZM4 8.8685V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8.86852L13.6641 13.0924C12.6564 13.7642 11.3436 13.7642 10.3359 13.0924L4 8.8685ZM2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z" fill="rgba(255,255,255,0.8)" />
                    </svg>
                    <Link href="mailto:support@hbgnow.com" className="footer-link">support@hbgnow.com</Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="footer-col-resources">
                <h6 className="footer-heading footer-heading-sm">Resources</h6>
                <ul className="footer-links-list">
                  <li><Link href="/plan-summary" className="footer-link">Plan Summary</Link></li>
                  <li><Link href="/faq" className="footer-link">Policy FAQ</Link></li>
                  <li><Link href="/how-it-works" className="footer-link">How It Works</Link></li>
                  <li><Link href="/contact#partner" className="footer-link">Partner Program</Link></li>
                </ul>
              </div>

              {/* Stripe payment logos */}
              <div className="footer-col-stripe">
                <div style={{ paddingTop: "16px" }}>
                  <div className="stripe-heading">stripe</div>
                  <div className="card-logos">
                    {/* Visa */}
                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#fv1)">
                        <path opacity="0.07" d="M35.5 0.316406H3.5C1.8 0.316406 0.5 1.61641 0.5 3.31641V21.3164C0.5 23.0164 1.9 24.3164 3.5 24.3164H35.5C37.2 24.3164 38.5 23.0164 38.5 21.3164V3.31641C38.5 1.61641 37.1 0.316406 35.5 0.316406Z" fill="white"/>
                        <path d="M35.5 1.31641C36.6 1.31641 37.5 2.21641 37.5 3.31641V21.3164C37.5 22.4164 36.6 23.3164 35.5 23.3164H3.5C2.4 23.3164 1.5 22.4164 1.5 21.3164V3.31641C1.5 2.21641 2.4 1.31641 3.5 1.31641H35.5Z" fill="white"/>
                        <path d="M28.8 10.4164H28.5C28.1 11.4164 27.8 11.9164 27.5 13.4164H29.4C29.1 11.9164 29.1 11.2164 28.8 10.4164ZM31.7 16.3164H30C29.9 16.3164 29.9 16.3164 29.8 16.2164L29.6 15.3164L29.5 15.1164H27.1C27 15.1164 26.9 15.1164 26.9 15.3164L26.6 16.2164C26.6 16.3164 26.5 16.3164 26.5 16.3164H24.4L24.6 15.8164L27.5 9.01641C27.5 8.51641 27.8 8.31641 28.3 8.31641H29.8C29.9 8.31641 30 8.31641 30 8.51641L31.4 15.0164C31.5 15.4164 31.6 15.7164 31.6 16.1164C31.7 16.2164 31.7 16.2164 31.7 16.3164ZM18.3 16.0164L18.7 14.2164C18.8 14.2164 18.9 14.3164 18.9 14.3164C19.6 14.6164 20.3 14.8164 21 14.7164C21.2 14.7164 21.5 14.6164 21.7 14.5164C22.2 14.3164 22.2 13.8164 21.8 13.4164C21.6 13.2164 21.3 13.1164 21 12.9164C20.6 12.7164 20.2 12.5164 19.9 12.2164C18.7 11.2164 19.1 9.81641 19.8 9.11641C20.4 8.71641 20.7 8.31641 21.5 8.31641C22.7 8.31641 24 8.31641 24.6 8.51641H24.7C24.6 9.11641 24.5 9.61641 24.3 10.2164C23.8 10.0164 23.3 9.81641 22.8 9.81641C22.5 9.81641 22.2 9.81641 21.9 9.91641C21.7 9.91641 21.6 10.0164 21.5 10.1164C21.3 10.3164 21.3 10.6164 21.5 10.8164L22 11.2164C22.4 11.4164 22.8 11.6164 23.1 11.8164C23.6 12.1164 24.1 12.6164 24.2 13.2164C24.4 14.1164 24.1 14.9164 23.3 15.5164C22.8 15.9164 22.6 16.1164 21.9 16.1164C20.5 16.1164 19.4 16.2164 18.5 15.9164C18.4 16.1164 18.4 16.1164 18.3 16.0164ZM14.8 16.3164C14.9 15.6164 14.9 15.6164 15 15.3164C15.5 13.1164 16 10.8164 16.4 8.61641C16.5 8.41641 16.5 8.31641 16.7 8.31641H18.5C18.3 9.51641 18.1 10.4164 17.8 11.5164C17.5 13.0164 17.2 14.5164 16.8 16.0164C16.8 16.2164 16.7 16.2164 16.5 16.2164L14.8 16.3164ZM5.5 8.51641C5.5 8.41641 5.7 8.31641 5.8 8.31641H9.2C9.7 8.31641 10.1 8.61641 10.2 9.11641L11.1 13.5164C11.1 13.6164 11.1 13.6164 11.2 13.7164C11.2 13.6164 11.3 13.6164 11.3 13.6164L13.4 8.51641C13.3 8.41641 13.4 8.31641 13.5 8.31641H15.6C15.6 8.41641 15.6 8.41641 15.5 8.51641L12.4 15.8164C12.3 16.0164 12.3 16.1164 12.2 16.2164C12.1 16.3164 11.9 16.2164 11.7 16.2164H10.2C10.1 16.2164 10 16.2164 10 16.0164L8.4 9.81641C8.2 9.61641 7.9 9.31641 7.5 9.21641C6.9 8.91641 5.8 8.71641 5.6 8.71641L5.5 8.51641Z" fill="#262965"/>
                      </g>
                      <defs><clipPath id="fv1"><rect width="38" height="24" fill="white" transform="translate(0.5 0.316406)"/></clipPath></defs>
                    </svg>
                    {/* Mastercard */}
                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#fmc1)">
                        <path opacity="0.07" d="M35.5 0.316406H3.5C1.8 0.316406 0.5 1.61641 0.5 3.31641V21.3164C0.5 23.0164 1.9 24.3164 3.5 24.3164H35.5C37.2 24.3164 38.5 23.0164 38.5 21.3164V3.31641C38.5 1.61641 37.1 0.316406 35.5 0.316406Z" fill="white"/>
                        <path d="M35.5 1.31641C36.6 1.31641 37.5 2.21641 37.5 3.31641V21.3164C37.5 22.4164 36.6 23.3164 35.5 23.3164H3.5C2.4 23.3164 1.5 22.4164 1.5 21.3164V3.31641C1.5 2.21641 2.4 1.31641 3.5 1.31641H35.5Z" fill="white"/>
                        <path d="M15.5 19.3164C19.366 19.3164 22.5 16.1824 22.5 12.3164C22.5 8.45041 19.366 5.31641 15.5 5.31641C11.634 5.31641 8.5 8.45041 8.5 12.3164C8.5 16.1824 11.634 19.3164 15.5 19.3164Z" fill="#EB001B"/>
                        <path d="M23.5 19.3164C27.366 19.3164 30.5 16.1824 30.5 12.3164C30.5 8.45041 27.366 5.31641 23.5 5.31641C19.634 5.31641 16.5 8.45041 16.5 12.3164C16.5 16.1824 19.634 19.3164 23.5 19.3164Z" fill="#FFBF00"/>
                        <path d="M22.5 12.3162C22.5 9.91621 21.3 7.81621 19.5 6.61621C17.7 7.91621 16.5 10.0162 16.5 12.3162C16.5 14.6162 17.7 16.8162 19.5 18.0162C21.3 16.8162 22.5 14.7162 22.5 12.3162Z" fill="#FF5F00"/>
                      </g>
                      <defs><clipPath id="fmc1"><rect width="38" height="24" fill="white" transform="translate(0.5 0.316406)"/></clipPath></defs>
                    </svg>
                    {/* Amex */}
                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#famex1)">
                        <path opacity="0.07" d="M35.5 0.316406H3.5C1.8 0.316406 0.5 1.61641 0.5 3.31641V21.3164C0.5 23.0164 1.9 24.3164 3.5 24.3164H35.5C37.2 24.3164 38.5 23.0164 38.5 21.3164V3.31641C38.5 1.61641 37.1 0.316406 35.5 0.316406Z" fill="white"/>
                        <path d="M35.5 1.31641C36.6 1.31641 37.5 2.21641 37.5 3.31641V21.3164C37.5 22.4164 36.6 23.3164 35.5 23.3164H3.5C2.4 23.3164 1.5 22.4164 1.5 21.3164V3.31641C1.5 2.21641 2.4 1.31641 3.5 1.31641H35.5Z" fill="#2A85FF"/>
                        <path d="M9.471 10.5844L10.245 12.4604H8.703L9.471 10.5844ZM25.546 10.6624H22.569V11.4894H25.498V12.7284H22.575V13.6504H25.552V14.3894L27.629 12.1444L25.552 9.80441L25.546 10.6624ZM11.483 8.32241H15.478L16.365 10.2574L17.187 8.31641H27.557L28.635 9.50641L29.75 8.31641H34.513L30.994 12.1684L34.477 15.9964H29.643L28.565 14.8064L27.44 15.9964H10.53L10.036 14.8064H8.906L8.411 15.9964H4.5L7.786 8.31641H11.216L11.483 8.32241ZM20.146 9.40041H17.907L16.407 12.9364L14.782 9.40041H12.56V14.2104L10.5 9.40041H8.507L6.125 14.9124H7.68L8.174 13.7224H10.77L11.264 14.9124H13.984V10.9774L15.735 14.9184H16.925L18.665 10.9894V14.9194H20.123L20.147 9.39941L20.146 9.40041ZM29.486 12.1684L32.017 9.40041H30.195L28.594 11.1264L27.046 9.40041H21.152V14.9184H26.962L28.576 13.1804L30.124 14.9184H31.999L29.487 12.1684H29.486Z" fill="white"/>
                      </g>
                      <defs><clipPath id="famex1"><rect width="38" height="24" fill="white" transform="translate(0.5 0.316406)"/></clipPath></defs>
                    </svg>
                    {/* Google Pay */}
                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#fgp1)">
                        <path opacity="0.07" d="M35.5 0.316406H3.5C1.8 0.316406 0.5 1.61641 0.5 3.31641V21.3164C0.5 23.0164 1.9 24.3164 3.5 24.3164H35.5C37.2 24.3164 38.5 23.0164 38.5 21.3164V3.31641C38.5 1.61641 37.1 0.316406 35.5 0.316406Z" fill="white"/>
                        <path d="M35.5 1.31641C36.6 1.31641 37.5 2.21641 37.5 3.31641V21.3164C37.5 22.4164 36.6 23.3164 35.5 23.3164H3.5C2.4 23.3164 1.5 22.4164 1.5 21.3164V3.31641C1.5 2.21641 2.4 1.31641 3.5 1.31641H35.5Z" fill="white"/>
                        <path d="M18.593 12.2921V15.4921H17.575V7.59215H20.266C20.5884 7.58669 20.9088 7.64502 21.2086 7.76377C21.5084 7.88253 21.7818 8.05938 22.013 8.28415C22.232 8.48854 22.4087 8.7341 22.5327 9.00679C22.6568 9.27947 22.7259 9.57394 22.7362 9.87335C22.7464 10.1728 22.6975 10.4713 22.5923 10.7518C22.4871 11.0323 22.3276 11.2893 22.123 11.5081L22.013 11.6241C21.543 12.0711 20.915 12.3141 20.266 12.2981L18.593 12.2921ZM18.593 8.56015V11.3481H20.291C20.668 11.3601 21.032 11.2131 21.296 10.9441C21.4848 10.7473 21.6117 10.4993 21.6606 10.231C21.7096 9.96265 21.6787 9.68584 21.5716 9.43498C21.4645 9.18412 21.286 8.97028 21.0583 8.82007C20.8306 8.66986 20.5638 8.5899 20.291 8.59015L18.593 8.56015ZM25.077 9.90815C25.727 9.87815 26.363 10.0961 26.855 10.5211C27.3 10.9511 27.537 11.5511 27.505 12.1701V15.5041H26.536V14.7381H26.487C26.3132 15.0255 26.0675 15.2625 25.7741 15.4257C25.4807 15.589 25.1498 15.6729 24.814 15.6691C24.2659 15.6869 23.7314 15.4965 23.318 15.1361C23.1221 14.9764 22.9652 14.7742 22.859 14.5448C22.7528 14.3154 22.7001 14.0649 22.705 13.8121C22.6935 13.5567 22.7431 13.3023 22.8497 13.0699C22.9563 12.8375 23.1169 12.634 23.318 12.4761C23.8114 12.1213 24.4086 11.9402 25.016 11.9611C25.533 11.9411 26.046 12.0541 26.506 12.2921V12.0841C26.5094 11.9122 26.4736 11.7417 26.4014 11.5856C26.3291 11.4295 26.2223 11.2919 26.089 11.1831C25.8213 10.9398 25.4707 10.8081 25.109 10.8151C24.8463 10.8127 24.5874 10.8772 24.3566 11.0027C24.1258 11.1281 23.9308 11.3104 23.79 11.5321L22.895 10.9681C23.138 10.6199 23.4661 10.3397 23.8481 10.1542C24.23 9.96865 24.6531 9.88395 25.077 9.90815ZM23.79 13.8361C23.7876 13.9657 23.8171 14.0938 23.8758 14.2092C23.9346 14.3247 24.0209 14.4239 24.127 14.4981C24.35 14.6741 24.627 14.7671 24.912 14.7611C25.341 14.7601 25.752 14.5911 26.058 14.2891C26.363 14.0031 26.536 13.6041 26.536 13.1861C26.151 12.9125 25.6833 12.7803 25.212 12.8121C24.8461 12.7977 24.4852 12.9008 24.182 13.1061C24.0619 13.1865 23.9634 13.295 23.8951 13.4223C23.8267 13.5496 23.7907 13.6917 23.79 13.8361ZM33.076 10.0861L29.686 17.8761H28.638L29.919 15.1481L27.695 10.0861H28.798L30.41 13.9711L31.979 10.0861H33.076Z" fill="#5F6368"/>
                        <path d="M14.486 11.6007C14.486 11.2927 14.462 10.9847 14.413 10.6807H10.123V12.4277H12.574C12.5241 12.7053 12.4186 12.97 12.264 13.2059C12.1094 13.4419 11.9087 13.6441 11.674 13.8007V14.9347H13.138C13.5831 14.504 13.9331 13.9847 14.1652 13.4105C14.3974 12.8363 14.5067 12.2197 14.486 11.6007Z" fill="#2A85FF"/>
                        <path d="M10.129 16.0374C11.2353 16.0677 12.3117 15.6754 13.139 14.9404L11.673 13.8004C11.3208 14.0262 10.9217 14.1687 10.506 14.2172C10.0904 14.2656 9.66924 14.2186 9.27451 14.0797C8.87978 13.9409 8.52191 13.7139 8.22812 13.4159C7.93432 13.118 7.71233 12.757 7.57903 12.3604H6.07703V13.5304C6.45288 14.2834 7.03107 14.9168 7.74678 15.3596C8.46249 15.8025 9.28741 16.0371 10.129 16.0374Z" fill="#34A853"/>
                        <path d="M7.57899 12.3659C7.38879 11.8032 7.38879 11.1936 7.57899 10.6309V9.46094H6.07699C5.75678 10.0924 5.5899 10.7904 5.5899 11.4984C5.5899 12.2064 5.75678 12.9045 6.07699 13.5359L7.57899 12.3659Z" fill="#FFBF00"/>
                        <path d="M10.129 8.75659C10.776 8.74478 11.4015 8.9892 11.869 9.43659L13.169 8.14359C12.3401 7.36561 11.2407 6.94125 10.104 6.96059C9.26739 6.96479 8.44827 7.2006 7.73746 7.64187C7.02665 8.08315 6.45194 8.71265 6.07703 9.46059L7.57903 10.6316C7.75465 10.0917 8.09512 9.6204 8.55253 9.28407C9.00995 8.94773 9.5613 8.76325 10.129 8.75659Z" fill="#EA4335"/>
                      </g>
                      <defs><clipPath id="fgp1"><rect width="38" height="24" fill="white" transform="translate(0.5 0.316406)"/></clipPath></defs>
                    </svg>
                  </div>
                  <p className="stripe-note">
                    Your payments are protected with Stripe, a global leader in online payment security.
                  </p>
                </div>
              </div>
            </div>

            {/* ── BOTTOM ROW ── */}
            <div className="footer-bottom-row">

              {/* About Us */}
              <div className="footer-col-about">
                <h6 className="footer-heading footer-heading-md">About Us</h6>
                <p className="footer-body-text">
                  Solo Health Collective was built for entrepreneurs and the self-employed. We provide nationwide major medical coverage, personalized support, and the flexibility to design a plan around your business—not the other way around.
                </p>
                <div className="social-row">
                  <Link href="https://www.facebook.com/HealthyBusinessGroupHBG" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M16.3021 4.89954H14.0258C13.1546 4.89954 12.4098 5.20868 11.7916 5.82694C11.2014 6.44521 10.9063 7.18994 10.9063 8.06114V10.2953H9.09368V12.9932H10.9063V19.2743H13.6042V12.9932H16.3021V10.2953H13.6042V8.48268C13.6042 8.25786 13.6885 8.06114 13.8571 7.89252C14.0258 7.6958 14.2365 7.59744 14.4895 7.59744H16.3021V4.89954ZM1 2.31641C1 1.76412 1.44772 1.31641 2 1.31641H18C18.5523 1.31641 19 1.76412 19 2.31641V18.2743C19 18.8265 18.5523 19.2743 18 19.2743H2C1.44772 19.2743 1 18.8265 1 18.2743V2.31641Z" fill="white"/></svg>
                  </Link>
                  <Link href="http://instagram.com/solohealthcollective" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M10 2.938C12.403 2.938 12.688 2.947 13.637 2.99 14.514 3.031 14.991 3.177 15.308 3.3 15.728 3.464 16.028 3.659 16.343 3.974 16.658 4.289 16.853 4.588 17.016 5.008 17.139 5.326 17.286 5.802 17.326 6.68 17.369 7.629 17.378 7.913 17.378 10.316 17.378 12.72 17.369 13.004 17.326 13.953 17.286 14.831 17.139 15.307 17.016 15.624 16.853 16.044 16.658 16.344 16.343 16.659 16.028 16.974 15.728 17.169 15.308 17.332 14.991 17.456 14.514 17.602 13.637 17.642 12.688 17.686 12.403 17.695 10 17.695 7.597 17.695 7.312 17.686 6.363 17.642 5.486 17.602 5.009 17.456 4.692 17.332 4.272 17.169 3.972 16.974 3.657 16.659 3.342 16.344 3.147 16.044 2.984 15.624 2.861 15.307 2.714 14.831 2.674 13.953 2.631 13.004 2.622 12.72 2.622 10.316 2.622 7.913 2.631 7.629 2.674 6.68 2.714 5.802 2.861 5.326 2.984 5.008 3.147 4.588 3.342 4.289 3.657 3.974 3.972 3.659 4.272 3.464 4.692 3.3 5.009 3.177 5.486 3.031 6.363 2.99 7.312 2.947 7.597 2.938 10 2.938ZM10 1.316C7.556 1.316 7.249 1.327 6.289 1.371 5.331 1.414 4.677 1.566 4.105 1.789 3.513 2.019 3.011 2.327 2.511 2.827 2.01 3.327 1.702 3.829 1.472 4.421 1.25 4.994 1.098 5.648 1.054 6.606 1.01 7.566 1 7.872 1 10.316 1 12.761 1.01 13.067 1.054 14.027 1.098 14.985 1.25 15.639 1.472 16.212 1.702 16.804 2.01 17.306 2.511 17.806 3.011 18.306 3.513 18.614 4.105 18.844 4.677 19.066 5.331 19.219 6.289 19.262 7.249 19.306 7.556 19.316 10 19.316 12.444 19.316 12.751 19.306 13.711 19.262 14.669 19.219 15.323 19.066 15.895 18.844 16.487 18.614 16.989 18.306 17.489 17.806 17.99 17.306 18.298 16.804 18.528 16.212 18.75 15.639 18.902 14.985 18.946 14.027 18.99 13.067 19 12.761 19 10.316 19 7.872 18.99 7.566 18.946 6.606 18.902 5.648 18.75 4.994 18.528 4.421 18.298 3.829 17.99 3.327 17.489 2.827 16.989 2.327 16.487 2.019 15.895 1.789 15.323 1.566 14.669 1.414 13.711 1.371 12.751 1.327 12.444 1.316 10 1.316ZM10 5.695C7.448 5.695 5.378 7.764 5.378 10.316 5.378 12.869 7.448 14.938 10 14.938 12.552 14.938 14.622 12.869 14.622 10.316 14.622 7.764 12.552 5.695 10 5.695ZM10 13.316C8.343 13.316 7 11.973 7 10.316 7 8.66 8.343 7.316 10 7.316 11.657 7.316 13 8.66 13 10.316 13 11.973 11.657 13.316 10 13.316ZM15.884 5.512C15.884 6.109 15.401 6.592 14.804 6.592 14.208 6.592 13.724 6.109 13.724 5.512 13.724 4.916 14.208 4.432 14.804 4.432 15.401 4.432 15.884 4.916 15.884 5.512Z" fill="white"/></svg>
                  </Link>
                  <Link href="https://m.youtube.com/@healthybusinessgroup7973" target="_blank" rel="noreferrer" aria-label="YouTube">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M18.789 7.014C18.93 7.998 19 8.967 19 9.923V11.272L18.789 14.181C18.677 14.996 18.438 15.586 18.073 15.951 17.679 16.345 17.089 16.597 16.302 16.71 15.543 16.766 14.63 16.808 13.562 16.836 12.522 16.864 11.665 16.879 10.991 16.879H9.979C6.859 16.85 4.822 16.794 3.867 16.71L3.529 16.668C3.304 16.64 3.122 16.612 2.981 16.583 2.841 16.555 2.658 16.485 2.433 16.373 2.237 16.26 2.054 16.12 1.885 15.951 1.745 15.782 1.604 15.558 1.464 15.277 1.351 14.968 1.281 14.7 1.253 14.476L1.169 14.181C1.056 13.197 1 12.227 1 11.272V9.923L1.169 7.014C1.281 6.199 1.52 5.609 1.885 5.244 2.279 4.822 2.883 4.569 3.698 4.485 4.457 4.429 5.356 4.387 6.396 4.359 7.436 4.33 8.293 4.316 8.967 4.316H9.979C12.508 4.316 14.616 4.373 16.302 4.485 17.089 4.569 17.679 4.822 18.073 5.244 18.452 5.806 18.733 6.691 18.789 7.014ZM12.424 10.724L13.014 10.429 8.166 7.9V12.958L12.424 10.724Z" fill="white"/></svg>
                  </Link>
                  <Link href="https://www.linkedin.com/company/healthy-business-group-llc" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect width="20" height="20" rx="4" fill="white"/><path d="M7 8H5V15H7V8ZM6 7C6.55 7 7 6.55 7 6 7 5.45 6.55 5 6 5 5.45 5 5 5.45 5 6 5 6.55 5.45 7 6 7ZM15 15H13V11.5C13 10.67 12.33 10 11.5 10 10.67 10 10 10.67 10 11.5V15H8V8H10V9.1C10.45 8.42 11.2 8 12 8 13.66 8 15 9.34 15 11V15Z" fill="#1e2a6e"/></svg>
                  </Link>
                </div>
                <div className="powered-by-row">
                  <span>Powered by</span>
                  <Link href="https://hbgsolo.com/" target="_blank" rel="noreferrer">
                    <img src="/images/HBG_Logo_White.png" alt="HBG Logo" style={{ height: "28px", width: "auto" }} />
                  </Link>
                </div>
              </div>

              {/* Stay Connected — HubSpot form */}
              <div className="footer-col-subscribe">
                <h6 className="footer-heading footer-heading-sm">Stay Connected with Solo</h6>
                <p className="footer-body-text">
                  Get updates on benefits, health tips for solopreneurs, and important plan announcements—straight to your inbox.
                </p>
                <div className="newsletter_hubspot footer-form" style={{ marginTop: "16px" }}>
                  {/* HubSpot injects the form into this div via useEffect above */}
                  <div id="hubspot-form-container" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}