"use client";

import React, { useState } from "react";

const ConciergeSupport = () => {
  // 1. Form State Management
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    details: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // 2. Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Form Submission Handler (Random API Call)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // Mocking an API call to JSONPlaceholder (Random API)
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `Support Ticket from ${formData.firstName}`,
          body: formData.details,
          userId: 1,
          metaData: formData, // Sending full form data
        }),
      });

      if (response.ok) {
        setStatus({ loading: false, success: "Request sent successfully!", error: null });
        // Reset form
        setFormData({ firstName: "", lastName: "", email: "", phone: "", category: "", details: "" });
      } else {
        throw new Error("Failed to submit request.");
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: "Something went wrong. Please try again." });
    }
  };

  return (
    <>
      {/* INTERNAL CSS INJECTION FROM SOURCE */}
      

      <main id="maincontent" className="page-main">
        {/* HERO SECTION */}
        <section className="network-hero-section">
          <div className="container">
            <div className="mb-2">
              <img className="img-fluid" src="https://hbgsolo.com/media/.renditions/wysiwyg/book.png" alt="Concierge" />
            </div>
            <div className="network-headeing">
              <p>Concierge Support</p>
            </div>
            <div className="sub-heading">
              <p className="title-one">Solo Health Collective – Member Support Center</p>
              <p className="text-primary">
                Our concierge team is here to help you navigate your plan, resolve claims, get answers, and handle whatever comes up. Submit a request below and a specialist will be in touch within 1 business day (M-F, 9am - 5pm EST).
              </p>
            </div>
          </div>
        </section>

        {/* BREADCRUMBS */}
        <div className="container">
          <div className="breadcrumbs" style={{ padding: "15px 0", fontSize: "14px" }}>
            <a href="/" style={{ color: "var(--purple)", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 10px" }}>/</span>
            <span style={{ color: "var(--text-muted)" }}>Concierge Support</span>
          </div>
        </div>

        {/* MAIN PAGE CONTENT */}
        <div className="page-content">
          
          {/* LEFT COLUMN: GUIDANCE */}
          <div className="guidance">
            <div className="tip-card">
              <div className="tip-card-top">
                <div className="tip-icon purple">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="#272966" strokeWidth="1.5"/><path d="M9 8v4M9 6h.01" stroke="#272966" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div className="tip-title">What to expect</div>
              </div>
              <div className="tip-text">Once you submit, you'll receive a confirmation email with your case number and a case management link. All updates and correspondence on your case will take place through that link.</div>
            </div>

            <div className="tip-card">
              <div className="tip-card-top">
                <div className="tip-icon blue">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5h12M3 9h8M3 13h5" stroke="#2a85ff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div className="tip-title">Include the right details upfront</div>
              </div>
              <div className="tip-text">For claims and billing issues, attach all relevant EOBs and medical bills. For pharmacy questions, include the medication name, your pharmacy, and the date of service.</div>
            </div>

            <div className="tip-card">
              <div className="tip-card-top">
                <div className="tip-icon green">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9l3.5 3.5L14 5.5" stroke="#0d8a7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="9" r="7.5" stroke="#0d8a7a" strokeWidth="1.4"/></svg>
                </div>
                <div className="tip-title">Have multiple issues? One ticket is fine.</div>
              </div>
              <div className="tip-text">Select the primary or most urgent category and describe everything in the details. Our team will triage your ticket and handle all elements together.</div>
            </div>

            <div className="emergency-box">
              <div className="emergency-title">Medical emergency or urgent care?</div>
              <div className="emergency-text">
                For a medical emergency, go to the nearest ER — always in-network. For non-emergency urgent care needs, consider <a href="https://cleverhealth.ai/contact" target="_blank" rel="noreferrer" style={{ color: "var(--blue)" }}>Clever Health</a> virtual urgent care at no cost, available 24/7. For immediate plan support, call Solo Concierge at 646-328-6968.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="form-frame">
            <div className="form-frame-header">
              <div className="fh-icon" style={{ background: "rgba(255,255,255,0.2)", padding: "8px", borderRadius: "8px" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l1.8 5.4H17l-4.9 3.6 1.9 5.4L9 13l-5 3.4 1.9-5.4L1 7.4h6.2L9 2z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="fh-title">Submit a Support Request</div>
                <div className="fh-sub">Responds within 1 business day · M–F 9am–5pm EST</div>
              </div>
            </div>

            <div className="form-body">
              {status.success && <div style={{ color: "green", marginBottom: "10px", fontSize: "14px" }}>{status.success}</div>}
              {status.error && <div style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>{status.error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Category of Help *</label>
                  <select name="category" className="form-control" value={formData.category} onChange={handleChange} required>
                    <option value="">Please Select</option>
                    <option value="Claims">Help with claims/medical bills</option>
                    <option value="Pharmacy">Help with pharmacy</option>
                    <option value="Plan">Help understanding my plan</option>
                    <option value="Technical">Website troubleshooting</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Details *</label>
                  <textarea name="details" className="form-control" style={{ height: "120px" }} value={formData.details} onChange={handleChange} required placeholder="Describe your issue in detail..."></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={status.loading}>
                  {status.loading ? "Submitting..." : "Submit Support Request"}
                </button>
              </form>
            </div>

            <div className="form-footer">
              <p>This form is secured for protected health information. Do not send PHI via unsecured email. <a href="#" style={{ color: "var(--blue)" }}>Privacy Policy</a></p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default ConciergeSupport;