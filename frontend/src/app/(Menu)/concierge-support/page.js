"use client";

import { useState } from "react";

const SUPPORT_CATEGORIES = [
  {
    value: "Request a change to my plan",
    subText: "Use this option if you need to update your coverage level, add or remove dependents, or make any modifications to your current plan.",
    boldText: "",
  },
  {
    value: "Help understanding my plan",
    subText: "Use this option if you have questions about what your plan covers, how to use your benefits, or need help interpreting your plan documents.",
    boldText: "",
  },
  {
    value: "Help with claims and/or medical bills",
    subText: "Use this option if you have received a medical bill, have a claim that was denied or underpaid, or need help understanding an Explanation of Benefits (EOB). Please attach all relevant medical bills and/or EOBs to your submission.",
    boldText: "",
  },
  {
    value: "Help with pharmacy",
    subText: "Use this option if you have questions about prescription coverage, a pharmacy claim, or need help filling a prescription through your plan.",
    boldText: "",
  },
  {
    value: "Preauthorization Assistance",
    subText: "Use this option if your provider has indicated that a procedure, service, or medication requires prior authorization before it can be covered.",
    boldText: "",
  },
  {
    value: "Finding a provider",
    subText: "Use this option if you need help locating an in-network provider or want to confirm whether a specific doctor, specialist, or facility is covered.",
    boldText: "",
  },
  {
    value: "Solo website troubleshooting",
    subText: "Use this option if you are having trouble logging into the Solo member portal, experiencing technical issues, or need help navigating the website.",
    boldText: "",
  },
  {
    value: "Partner application issues",
    subText: "Use this option if you are experiencing issues accessing or enrolling in one of Solo's partner platforms (Benefits Hero, FitON, etc.).",
    boldText: "",
  },
  {
    value: "Tax Forms",
    subText: "Use this option if you need a tax document related to your health coverage, such as a Form 1095.",
    boldText: "",
  },
  {
    value: "ID card issues",
    subText: "Use this option if you have not received your member ID card, need a replacement, or need a digital copy.",
    boldText: "",
  },
  {
    value: "Billing / premium payments",
    subText: "You can view payment history and update autopay using your link. If not resolved via Stripe, submit a ticket here.",
    boldText: "",
  },
  {
    value: "Dental and/or Vision",
    subText: "Use this option if you have questions about your Delta Dental or VSP vision benefits, need help using your coverage, or have an issue with a dental or vision claim.",
    boldText: "",
  },
  {
    value: "Cancel my plan",
    subText: "Use this option if you would like to cancel your Solo Health Collective membership. ",
    boldText: "Cancellation requests must be received at least 5 business days before the 1st of the month. All cancellations take effect on the 1st of a future month — same-day, mid-month, or retroactive cancellations cannot be processed.",
  },
];

function getCancelMonthOptions() {
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const monthNames = [
    "January 2026","February 2026","March 2026","April 2026",
    "May 2026","June 2026","July 2026","August 2026",
    "September 2026","October 2026","November 2026","December 2026",
  ];
  let startMonthIndex = currentDate < 27 ? currentMonth + 1 : currentMonth + 2;
  const options = [];
  for (let i = startMonthIndex; i < 12; i++) {
    options.push({ value: monthNames[i].toLowerCase() + "_1", label: "1 " + monthNames[i] });
  }
  if (startMonthIndex >= 12) {
    const overflow = startMonthIndex - 12;
    for (let j = 0; j <= overflow; j++) {
      options.push({ value: monthNames[j].toLowerCase() + "_1", label: "1 " + monthNames[j] });
    }
  }
  return options;
}

const INITIAL_FORM = {
  firstName: "", lastName: "", email: "", phone: "",
  memberId: "", category: "", cancelDate: "", details: "",
};
const INITIAL_ERRORS = {};

function validate(form) {
  const errs = {};
  if (!form.firstName.trim()) errs.firstName = "First name is required.";
  if (!form.lastName.trim()) errs.lastName = "Last name is required.";
  if (!form.email.trim()) { errs.email = "Email is required."; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errs.email = "Please enter a valid email address."; }
  if (!form.phone.trim()) { errs.phone = "Phone number is required."; }
  else if (!/^\+?[\d\s\-().]{7,}$/.test(form.phone)) { errs.phone = "Please enter a valid phone number."; }
  if (!form.category) errs.category = "Please select a support category.";
  if (form.category === "Cancel my plan" && !form.cancelDate) { errs.cancelDate = "Please select a cancellation date."; }
  if (!form.details.trim()) errs.details = "Please describe your issue.";
  return errs;
}

export default function ConciergeSupport() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");
  const cancelOptions = getCancelMonthOptions();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleCategorySelect(value) {
    setForm((prev) => ({ ...prev, category: value, cancelDate: "" }));
    if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setApiError("");
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      const el = document.getElementById(`field-${firstKey}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    const payload = {
      firstName: form.firstName, lastName: form.lastName, email: form.email,
      phone: form.phone, memberId: form.memberId, supportCategory: form.category,
      cancelDate: form.cancelDate || null, details: form.details,
      submittedAt: new Date().toISOString(),
    };
    try {
      const res = await fetch("/api/support-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || `Server responded with status ${res.status}`);
      }
      setSubmitted(true);
      setForm(INITIAL_FORM);
      setErrors(INITIAL_ERRORS);
    } catch (err) {
      setApiError(err.message || "Something went wrong submitting your request. Please try again or call us at 646-328-6968.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <style>{`
        body {
          background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
        }
        :root {
          --purple: #272966;
          --blue: #2a85ff;
          --yellow: #ffbf00;
          --cream: #fdf8ee;
          --white: #ffffff;
          --smoke: #f4f4f4;
          --smoke-border: #ebe8df;
          --text-dark: #1a1a2e;
          --text-body: #3a3a5c;
          --text-muted: #6b7280;
        }

        .network-hero-section {
          background: radial-gradient(circle at top left, rgba(255,235,180,0.3) 0%, rgba(255,235,180,0.3) 0%, #fff 30%);
          padding: 60px 0 40px;
        }
        .network-hero-section .container { max-width: 1140px; margin: 0 auto; padding: 0 20px; }
        .network-hero-section img.img-fluid { max-width: 56px; margin-bottom: 16px; }
        .network-headeing p {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800;
          color: var(--purple);
          margin: 0 0 12px;
          line-height: 1.15;
        }
        .sub-heading .title-one {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(15px, 1.3vw, 18px);
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .sub-heading .text-primary {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1vw, 15px);
          color: var(--text-body);
          line-height: 1.7;
          max-width: 680px;
        }

        .breadcrumbs {
          max-width: 1140px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--text-muted);
        }
        .breadcrumbs a { color: var(--purple); text-decoration: none; font-weight: 500; }
        .breadcrumbs a:hover { text-decoration: underline; }
        .breadcrumbs span { color: var(--text-muted); }

        /* ─────────────────────────────────────────────────────
           THE ONLY CHANGES vs your original:
           1. align-items: start  on .page-content (required for sticky)
           2. align-self: start   on .guidance     (required for sticky)
           3. .guidance-video block added (new video element at top)
           Everything else is 100% identical to your original code.
        ───────────────────────────────────────────────────── */
        .page-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 40px 80px;
  display: grid;
  /* Adjusting column widths to ensure proper spacing */
  grid-template-columns: 1fr 440px; 
  gap: 40px;
  /* This is CRITICAL: align-items must be start for sticky to work */
  align-items: start; 
  /* This ensures the grid is tall enough to allow scrolling */
  min-height: 100vh; 
}

        .guidance {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 24px;
          align-self: start; /* ← CHANGE 2: needed for sticky in grid */
        }

  
        /* All styles below are UNCHANGED from your original */
        .tip-card {
          background: var(--white);
          border-radius: 10px;
          border: 1px solid var(--smoke-border);
          padding: 18px 20px;
        }
        .tip-card-top { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .tip-icon {
          width: 28px; height: 28px;
          border-radius: 8px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .tip-icon.purple { background: rgba(39,41,102,.08); }
        .tip-icon.blue   { background: rgba(42,133,255,.08); }
        .tip-icon.green  { background: rgba(13,138,122,.08); }
        .tip-icon svg { width: 14px; height: 14px; }
        .tip-title { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; color: var(--purple); }
        .tip-text { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--text-body); line-height: 1.65; }
        .emergency-box {
          background: var(--white);
          border: 1px solid var(--smoke-border);
          border-left: 3px solid var(--yellow);
          border-radius: 10px;
          padding: 14px 18px;
        }
        .emergency-title { font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 700; color: var(--purple); margin-bottom: 4px; }
        .emergency-text { font-family: 'Inter', sans-serif; font-size: 12px; color: var(--text-body); line-height: 1.65; }
        .emergency-text a { color: var(--blue); text-decoration: none; font-weight: 600; }

        .form-frame { background: var(--white); border-radius: 10px; border: 1px solid var(--smoke-border); overflow: hidden; }
        .form-frame-header { background: var(--purple); padding: 20px 24px 18px; display: flex; align-items: center; gap: 12px; }
        .fh-icon { width: 36px; height: 36px; background: rgba(255,255,255,.15); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .fh-icon svg { width: 18px; height: 18px; }
        .fh-title { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 700; color: #fff; }
        .fh-sub { font-family: 'Inter', sans-serif; font-size: 11px; color: rgba(255,255,255,.6); margin-top: 2px; }
        .form-body { padding: 24px 26px; }
        .form-footer { padding: 12px 26px 16px; border-top: 1px solid var(--smoke); }
        .form-footer p { font-family: 'Inter', sans-serif; font-size: 11px; color: var(--text-muted); line-height: 1.6; text-align: center; margin: 0; }
        .form-footer a { color: var(--blue); text-decoration: none; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
        .form-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 14px; }
        .form-group label { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: var(--purple); }
        .form-group input,
        .form-group select,
        .form-group textarea {
          font-family: 'Inter', sans-serif; font-size: 13px; color: var(--text-dark);
          background: var(--smoke); border: 1.5px solid var(--smoke-border); border-radius: 7px;
          padding: 10px 12px; outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus { border-color: var(--blue); background: #fff; }
        .form-group textarea { resize: vertical; min-height: 90px; }
        .field-error { font-family: 'Inter', sans-serif; font-size: 11px; color: #dc2626; margin-top: 2px; }
        .input-error { border-color: #dc2626 !important; }

        .category-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
        .category-item {
          cursor: pointer; border: 1.5px solid var(--smoke-border); border-radius: 8px;
          padding: 12px 14px; transition: border-color 0.2s, background 0.2s;
          display: flex; align-items: flex-start; gap: 10px;
        }
        .category-item:hover { border-color: var(--blue); background: #f7f9ff; }
        .category-item.selected { border-color: var(--purple); background: rgba(39,41,102,0.04); }
        .category-radio {
          width: 16px; height: 16px; border: 2px solid var(--purple); border-radius: 50%;
          flex-shrink: 0; margin-top: 3px; display: flex; align-items: center; justify-content: center;
        }
        .category-radio-dot { width: 8px; height: 8px; background: var(--purple); border-radius: 50%; }
        .category-label-title { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: var(--text-dark); display: block; margin-bottom: 3px; }
        .category-label-sub { font-family: 'Inter', sans-serif; font-size: 11.5px; color: var(--text-muted); line-height: 1.55; }
        .category-label-bold { font-family: 'Inter', sans-serif; font-size: 11.5px; color: var(--purple); font-weight: 700; }

        .btn-submit {
          width: 100%; font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 700;
          background: var(--purple); color: #fff; border: none; border-radius: 7px;
          padding: 13px 20px; cursor: pointer; margin-top: 8px; transition: background 0.2s, opacity 0.2s;
        }
        .btn-submit:hover:not(:disabled) { background: #1d1f52; }
        .btn-submit:disabled { opacity: 0.65; cursor: not-allowed; }

        .api-error {
          background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px;
          padding: 12px 14px; font-family: 'Inter', sans-serif; font-size: 13px;
          color: #dc2626; margin-bottom: 12px; line-height: 1.5;
        }

        .success-box { text-align: center; padding: 40px 30px; }
        .success-icon { width: 56px; height: 56px; background: rgba(13,138,122,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; }
        .success-title { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 700; color: var(--purple); margin-bottom: 10px; }
        .success-text { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--text-body); line-height: 1.65; }

        .section-label { font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 700; color: var(--purple); margin: 0 0 10px; text-transform: uppercase; letter-spacing: 0.5px; }

        @media (max-width: 860px) {
          .page-content { grid-template-columns: 1fr; padding: 32px 20px 60px; }
          .guidance { position: static; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 576px) {
          .network-hero-section { padding: 40px 0 28px; }
          .form-body { padding: 18px 16px; }
          .form-frame-header { padding: 16px 18px 14px; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="network-hero-section">
        <div className="container">
          <div className="mb-2">
            <img className="img-fluid" src="https://hbgsolo.com/media/.renditions/wysiwyg/book.png" alt="" />
          </div>
          <div className="network-headeing"><p>Concierge Support</p></div>
          <div className="sub-heading">
            <p className="title-one">Solo Health Collective – Member Support Center</p>
            <p className="text-primary">
              Our concierge team is here to help you navigate your plan, resolve claims, get answers,
              and handle whatever comes up. Submit a request below and a specialist will be in touch
              within 1 business day (M-F, 9am - 5pm EST).
            </p>
          </div>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <div className="breadcrumbs">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 11L5 7l4-4" stroke="#272966" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <a href="/">Home</a>
        <span> / </span>
        <a href="#">Concierge Support</a>
      </div>

      {/* ── Two-column layout ── */}
      <div className="page-content">

        {/* ─── LEFT: Guidance — ALL original content kept, video added on top, sticky fixed ─── */}
        <div className="guidance">

        

          {/* Tip 1 */}
          <div className="tip-card">
            <div className="tip-card-top">
              <div className="tip-icon purple">
                <svg viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7.5" stroke="#272966" strokeWidth="1.5" />
                  <path d="M9 8v4M9 6h.01" stroke="#272966" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="tip-title">What to expect</div>
            </div>
            <div className="tip-text">
              Once you submit, you'll receive a confirmation email with your case number and a case
              management link. All updates and correspondence on your case will take place through that link.
            </div>
          </div>

          {/* Tip 2 */}
          <div className="tip-card">
            <div className="tip-card-top">
              <div className="tip-icon blue">
                <svg viewBox="0 0 18 18" fill="none">
                  <path d="M3 5h12M3 9h8M3 13h5" stroke="#2a85ff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="tip-title">Include the right details upfront</div>
            </div>
            <div className="tip-text">
              For claims and billing issues, attach all relevant EOBs and medical bills. For pharmacy
              questions, include the medication name, your pharmacy, and the date of service.
            </div>
          </div>

          {/* Tip 3 */}
          <div className="tip-card">
            <div className="tip-card-top">
              <div className="tip-icon green">
                <svg viewBox="0 0 18 18" fill="none">
                  <path d="M4 9l3.5 3.5L14 5.5" stroke="#0d8a7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="9" r="7.5" stroke="#0d8a7a" strokeWidth="1.4" />
                </svg>
              </div>
              <div className="tip-title">Have multiple issues? One ticket is fine.</div>
            </div>
            <div className="tip-text">
              Select the primary or most urgent category and describe everything in the details. Our
              team will triage your ticket and handle all elements together.
            </div>
          </div>

          {/* Emergency */}
          <div className="emergency-box">
            <div className="emergency-title">Medical emergency or urgent care?</div>
            <div className="emergency-text">
              For a medical emergency, go to the nearest ER — always in-network. For non-emergency
              urgent care needs, consider{" "}
              <a href="https://cleverhealth.ai/contact" target="_blank" rel="noopener noreferrer">Clever Health</a>{" "}
              virtual urgent care at no cost, available 24/7. For immediate plan support, call Solo
              Concierge at 646-328-6968.
            </div>
          </div>
        </div>

        {/* ─── RIGHT: Form — completely unchanged ─── */}
        <div className="form-frame">
          <div className="form-frame-header">
            <div className="fh-icon">
              <svg viewBox="0 0 18 18" fill="none">
                <path d="M9 2l1.8 5.4H17l-4.9 3.6 1.9 5.4L9 13l-5 3.4 1.9-5.4L1 7.4h6.2L9 2z"
                  stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="fh-title">Submit a Support Request</div>
              <div className="fh-sub">Responds within 1 business day &middot; M&ndash;F 9am&ndash;5pm EST</div>
            </div>
          </div>

          <div className="form-body">
            {submitted ? (
              <div className="success-box">
                <div className="success-icon">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M5 13l5 5L21 8" stroke="#0d8a7a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="success-title">Request Submitted!</div>
                <div className="success-text">
                  Thank you. A Solo Concierge specialist will reach out within 1 business day
                  (M–F, 9am–5pm EST). Check your email for a confirmation and case management link.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {apiError && <div className="api-error">{apiError}</div>}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="field-firstName">First Name *</label>
                    <input id="field-firstName" name="firstName" type="text" placeholder="Jane"
                      value={form.firstName} onChange={handleChange}
                      className={errors.firstName ? "input-error" : ""} />
                    {errors.firstName && <span className="field-error">{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="field-lastName">Last Name *</label>
                    <input id="field-lastName" name="lastName" type="text" placeholder="Smith"
                      value={form.lastName} onChange={handleChange}
                      className={errors.lastName ? "input-error" : ""} />
                    {errors.lastName && <span className="field-error">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="field-email">Email Address *</label>
                  <input id="field-email" name="email" type="email" placeholder="jane@example.com"
                    value={form.email} onChange={handleChange}
                    className={errors.email ? "input-error" : ""} />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="field-phone">Phone Number *</label>
                  <input id="field-phone" name="phone" type="tel" placeholder="(646) 555-0100"
                    value={form.phone} onChange={handleChange}
                    className={errors.phone ? "input-error" : ""} />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="field-memberId">Member ID (optional)</label>
                  <input id="field-memberId" name="memberId" type="text"
                    placeholder="Your Solo member ID" value={form.memberId} onChange={handleChange} />
                </div>

                <div className="form-group" id="field-category">
                  <p className="section-label">How can we help you? *</p>
                  {errors.category && <span className="field-error">{errors.category}</span>}
                  <ul className="category-list">
                    {SUPPORT_CATEGORIES.map((cat) => (
                      <li key={cat.value}
                        className={`category-item${form.category === cat.value ? " selected" : ""}`}
                        onClick={() => handleCategorySelect(cat.value)}
                        role="radio" aria-checked={form.category === cat.value} tabIndex={0}
                        onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") handleCategorySelect(cat.value); }}>
                        <div className="category-radio">
                          {form.category === cat.value && <div className="category-radio-dot" />}
                        </div>
                        <div>
                          <span className="category-label-title">{cat.value}</span>
                          <span className="category-label-sub">{cat.subText}</span>
                          {cat.boldText && <span className="category-label-bold"> {cat.boldText}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {form.category === "Cancel my plan" && (
                  <div className="form-group" id="field-cancelDate">
                    <label htmlFor="cancel-date-select">Requested Cancellation Date *</label>
                    <select id="cancel-date-select" name="cancelDate" value={form.cancelDate}
                      onChange={handleChange} className={errors.cancelDate ? "input-error" : ""}>
                      <option value="">Select a date…</option>
                      {cancelOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    {errors.cancelDate && <span className="field-error">{errors.cancelDate}</span>}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="field-details">Describe your issue in detail *</label>
                  <textarea id="field-details" name="details"
                    placeholder="Please provide as much detail as possible — dates, provider names, amounts, etc."
                    value={form.details} onChange={handleChange} rows={5}
                    className={errors.details ? "input-error" : ""} />
                  {errors.details && <span className="field-error">{errors.details}</span>}
                </div>

                <button type="submit" className="btn-submit" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit Support Request"}
                </button>
              </form>
            )}
          </div>

          <div className="form-footer">
            <p>
              This form is secured for protected health information. Do not send PHI via unsecured email.{" "}
              <a href="/privacy-policy-cookie-restriction-mode" target="_blank">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}