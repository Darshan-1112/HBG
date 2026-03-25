"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactPage() {
  // --- ACCORDION STATE ---
  // feedback is open by default as per source (collapseOne has 'show')
  const [openAccordion, setOpenAccordion] = useState("feedback");

  // --- FORM STATES ---
  const [feedbackData, setFeedbackData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    comment: "",
  });

  const [partnerData, setPartnerData] = useState({
    company: "",
    name: "",
    email: "",
    telephone: "",
    comment: "",
  });

  // --- HASH HANDLING (React Way) ---
  useEffect(() => {
    if (window.location.hash === "#partner") {
      setOpenAccordion("partner");
    } else if (window.location.hash === "#feedback") {
      setOpenAccordion("feedback");
    }
  }, []);

  // --- HELPERS ---
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length > 6) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
    } else if (numbers.length > 3) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    }
    return numbers;
  };

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    const finalValue = name === "telephone" ? formatPhoneNumber(value) : value;

    if (formType === "feedback") {
      setFeedbackData((prev) => ({ ...prev, [name]: finalValue }));
    } else {
      setPartnerData((prev) => ({ ...prev, [name]: finalValue }));
    }
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    const data = formType === "feedback" ? feedbackData : partnerData;

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: `Form Submission: ${formType}`,
          body: data,
          userId: 1,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (response.ok) {
        const result = await response.json();
        alert(`${formType.toUpperCase()} submitted successfully!`);
        // Reset Logic
        if (formType === "feedback") {
          setFeedbackData({ firstname: "", lastname: "", email: "", telephone: "", comment: "" });
        } else {
          setPartnerData({ company: "", name: "", email: "", telephone: "", comment: "" });
        }
      }
    } catch (error) {
      alert("Submission failed. Check console.");
    }
  };

  return (
    <main id="maincontent" className="page-main">
      <a id="contentarea" tabIndex="-1"></a>
      <div className="columns">
        <div className="column main">
          
          {/* --- HERO SECTION --- */}
          <section className="contact-hero-section">
            <div className="custom-container">
              <div className="breadcrumbs mb-4 d-flex d-lg-none">
                <div>
                  <img src="/images/breadcrumb-arrow.png" alt="arrow" />
                </div>
                <div>
                  <Link href="/">Home</Link> <span>/</span> <a>Contact Us</a>
                </div>
              </div>
              <div className="mb-2 banner-svg">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M32 10.6693C20.218 10.6693 10.6667 20.2205 10.6667 32.0026H16C20.4183 32.0026 24 35.5843 24 40.0026V48.0026C24 52.4209 20.4183 56.0026 16 56.0026H13.3334C8.9151 56.0026 5.33337 52.4209 5.33337 48.0026V32.0026C5.33337 17.275 17.2724 5.33594 32 5.33594C46.7276 5.33594 58.6667 17.275 58.6667 32.0026V48.0026C58.6667 52.4209 55.085 56.0026 50.6667 56.0026H48C43.5818 56.0026 40 52.4209 40 48.0026V40.0026C40 35.5843 43.5818 32.0026 48 32.0026H53.3334C53.3334 20.2205 43.7821 10.6693 32 10.6693ZM53.3334 37.3359H48C46.5273 37.3359 45.3334 38.5298 45.3334 40.0026V48.0026C45.3334 49.4754 46.5273 50.6693 48 50.6693H50.6667C52.1395 50.6693 53.3334 49.4754 53.3334 48.0026V37.3359ZM10.6667 37.3359V48.0026C10.6667 49.4754 11.8606 50.6693 13.3334 50.6693H16C17.4728 50.6693 18.6667 49.4754 18.6667 48.0026V40.0026C18.6667 38.5298 17.4728 37.3359 16 37.3359H10.6667Z" fill="#FFBF00" />
                </svg>
              </div>
              <div className="contact-heading"><p>Contact Us</p></div>
            </div>
          </section>

          {/* --- BANNER/SCHEDULE SECTION --- */}
          <section className="contact-us-div">
            <div className="d-block d-lg-none">
              <img src="/images/contact-us-mobile.png" className="w-100" alt="banner-image" />
            </div>
            <div className="custom-container">
              <div className="breadcrumbs d-none d-lg-flex">
                <div>
                  <img src="/images/breadcrumb-arrow.png" alt="arrow" />
                </div>
                <div>
                  <Link href="/">Home</Link> <span>/</span> <a>Contact Us</a>
                </div>
              </div>
              <div className="row g-3 g-lg-5 align-items-center d-none d-lg-flex">
                <div className="col-12 col-lg-6 text-center text-lg-start">
                  <img src="/images/contact-us.png" className="img-fluid" alt="banner-image" />
                </div>
                <div className="col-12 col-lg-6">
                  <div className="schedule">
                    <h6 className="text-start text-md-center text-lg-start">Schedule a Consult</h6>
                    <p className="text-start text-md-center text-lg-start">Book a call with our team to review your options.</p>
                    <div className="schedule-btns justify-content-center justify-content-lg-start">
                      <a href="https://calendly.com/d/ckh2-xd6-qjd/benefits-conversation-with-hbg" target="_blank" rel="noopener noreferrer" className="btn-one">Schedule a Call</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- ACCORDION FORMS SECTION --- */}
          <section className="contact-us-accordian">
            <div className="custom-container">
              <div className="contact-feedback-wrapper">
                <div className="tab-content pt-3 pb-1">
                  <div className="accordion d-flex flex-column gap-3 gap-md-0" id="medicalAccordion">
                    
                    {/* FEEDBACK FORM ACCORDION */}
                    <div className={`accordion-item step-card ${openAccordion === 'feedback' ? 'active' : ''}`} id="feedback">
                      <h2 className="accordion-header">
                        <button 
                          className={`accordion-button d-flex justify-content-between w-100 ${openAccordion !== 'feedback' ? 'collapsed' : ''}`} 
                          type="button" 
                          onClick={() => setOpenAccordion(openAccordion === 'feedback' ? '' : 'feedback')}
                        >
                          <div className="d-flex align-items-center gap-2 gap-md-4 w-100">
                            <div>
                              <h6 className="fw-semibold mb-0 mb-md-1 text-primary accordian-heading"> Leave Us Feedback</h6>
                              <p className="m-0 fs-16 fw-normal text-primary mt-2">Share your thoughts to help us improve member experience.</p>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div className={`accordion-collapse collapse ${openAccordion === 'feedback' ? 'show' : ''}`}>
                        <div className="accordion-body">
                          <form className="form contact" onSubmit={(e) => handleSubmit(e, "feedback")}>
                            <div className="row g-3 mb-4">
                              <div className="col-12 col-lg-6">
                                <div className="input-box w-100">
                                  <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 5H14C14.5523 5 15 5.44772 15 6V7H17V6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7V15H6C5.44772 15 5 14.5523 5 14V6C5 5.44772 5.44772 5 6 5Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M18 9H10C9.44772 9 9 9.44772 9 10V18C9 18.5523 9.44772 19 10 19H18C18.5523 19 19 18.5523 19 18V10C19 9.44772 18.5523 9 18 9ZM10 7C8.34315 7 7 8.34315 7 10V18C7 19.6569 8.34315 21 10 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H10Z" fill="#262965" /></svg>
                                  </div>
                                  <div className="input-field">
                                    <input name="firstname" value={feedbackData.firstname} onChange={(e) => handleInputChange(e, "feedback")} className="input-text" type="text" required />
                                    <label className="custom-input-label">First Name</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6">
                                <div className="input-box w-100">
                                  <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 5H14C14.5523 5 15 5.44772 15 6V7H17V6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7V15H6C5.44772 15 5 14.5523 5 14V6C5 5.44772 5.44772 5 6 5Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M18 9H10C9.44772 9 9 9.44772 9 10V18C9 18.5523 9.44772 19 10 19H18C18.5523 19 19 18.5523 19 18V10C19 9.44772 18.5523 9 18 9ZM10 7C8.34315 7 7 8.34315 7 10V18C7 19.6569 8.34315 21 10 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H10Z" fill="#262965" /></svg>
                                  </div>
                                  <div className="input-field">
                                    <input name="lastname" value={feedbackData.lastname} onChange={(e) => handleInputChange(e, "feedback")} className="input-text" type="text" required />
                                    <label className="custom-input-label">Last Name</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6">
                                <div className="input-box w-100">
                                  <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 5H14C14.5523 5 15 5.44772 15 6V7H17V6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7V15H6C5.44772 15 5 14.5523 5 14V6C5 5.44772 5.44772 5 6 5Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M18 9H10C9.44772 9 9 9.44772 9 10V18C9 18.5523 9.44772 19 10 19H18C18.5523 19 19 18.5523 19 18V10C19 9.44772 18.5523 9 18 9ZM10 7C8.34315 7 7 8.34315 7 10V18C7 19.6569 8.34315 21 10 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H10Z" fill="#262965" /></svg>
                                  </div>
                                  <div className="input-field">
                                    <input name="email" value={feedbackData.email} onChange={(e) => handleInputChange(e, "feedback")} className="input-text" type="email" required />
                                    <label className="custom-input-label">Email</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6">
                                <div className="input-box w-100">
                                  <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 5H14C14.5523 5 15 5.44772 15 6V7H17V6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7V15H6C5.44772 15 5 14.5523 5 14V6C5 5.44772 5.44772 5 6 5Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M18 9H10C9.44772 9 9 9.44772 9 10V18C9 18.5523 9.44772 19 10 19H18C18.5523 19 19 18.5523 19 18V10C19 9.44772 18.5523 9 18 9ZM10 7C8.34315 7 7 8.34315 7 10V18C7 19.6569 8.34315 21 10 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H10Z" fill="#262965" /></svg>
                                  </div>
                                  <div className="input-field">
                                    <input name="telephone" value={feedbackData.telephone} onChange={(e) => handleInputChange(e, "feedback")} className="input-text" type="tel" />
                                    <label className="custom-input-label">Phone</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-box w-100 textarea-box">
                                  <div className="input-field">
                                    <textarea name="comment" value={feedbackData.comment} onChange={(e) => handleInputChange(e, "feedback")} className="input-text" rows="4" placeholder="Note" required></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="submit-feedback-btn d-flex justify-content-center justify-content-md-end">
                              <button type="submit" className="action submit primary"><span>Submit Feedback</span></button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/* PARTNER FORM ACCORDION */}
                    <div className={`accordion-item step-card ${openAccordion === 'partner' ? 'active' : ''}`} id="partner">
                      <h2 className="accordion-header">
                        <button 
                          className={`accordion-button d-flex justify-content-between w-100 ${openAccordion !== 'partner' ? 'collapsed' : ''}`} 
                          type="button" 
                          onClick={() => setOpenAccordion(openAccordion === 'partner' ? '' : 'partner')}
                        >
                          <div className="d-flex align-items-center gap-2 gap-md-4 w-100">
                            <div>
                              <h6 className="fw-semibold mb-0 mb-md-1 text-primary accordian-heading"> Partner With Us</h6>
                              <p className="m-0 fs-16 fw-normal text-primary mt-2">Explore opportunities to collaborate with Solo Health Collective.</p>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div className={`accordion-collapse collapse ${openAccordion === 'partner' ? 'show' : ''}`}>
                        <div className="accordion-body">
                          <form className="form partnerprogram" onSubmit={(e) => handleSubmit(e, "partner")}>
                            <div className="row g-4 mb-4">
                              <div className="col-12 col-lg-6">
                                <div className="input-box w-100">
                                  <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 5H14C14.5523 5 15 5.44772 15 6V7H17V6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7V15H6C5.44772 15 5 14.5523 5 14V6C5 5.44772 5.44772 5 6 5Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M18 9H10C9.44772 9 9 9.44772 9 10V18C9 18.5523 9.44772 19 10 19H18C18.5523 19 19 18.5523 19 18V10C19 9.44772 18.5523 9 18 9ZM10 7C8.34315 7 7 8.34315 7 10V18C7 19.6569 8.34315 21 10 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H10Z" fill="#262965" /></svg>
                                  </div>
                                  <div className="input-field">
                                    <input name="company" value={partnerData.company} onChange={(e) => handleInputChange(e, "partner")} className="input-text" type="text" />
                                    <label className="custom-input-label">Company Name</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6">
                                <div className="input-box w-100">
                                  <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 5H14C14.5523 5 15 5.44772 15 6V7H17V6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7V15H6C5.44772 15 5 14.5523 5 14V6C5 5.44772 5.44772 5 6 5Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M18 9H10C9.44772 9 9 9.44772 9 10V18C9 18.5523 9.44772 19 10 19H18C18.5523 19 19 18.5523 19 18V10C19 9.44772 18.5523 9 18 9ZM10 7C8.34315 7 7 8.34315 7 10V18C7 19.6569 8.34315 21 10 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H10Z" fill="#262965" /></svg>
                                  </div>
                                  <div className="input-field">
                                    <input name="name" value={partnerData.name} onChange={(e) => handleInputChange(e, "partner")} className="input-text" type="text" required />
                                    <label className="custom-input-label">Name</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6">
                                <div className="input-box w-100">
                                  <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 5H14C14.5523 5 15 5.44772 15 6V7H17V6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7V15H6C5.44772 15 5 14.5523 5 14V6C5 5.44772 5.44772 5 6 5Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M18 9H10C9.44772 9 9 9.44772 9 10V18C9 18.5523 9.44772 19 10 19H18C18.5523 19 19 18.5523 19 18V10C19 9.44772 18.5523 9 18 9ZM10 7C8.34315 7 7 8.34315 7 10V18C7 19.6569 8.34315 21 10 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H10Z" fill="#262965" /></svg>
                                  </div>
                                  <div className="input-field">
                                    <input name="email" value={partnerData.email} onChange={(e) => handleInputChange(e, "partner")} className="input-text" type="email" required />
                                    <label className="custom-input-label">Email</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6">
                                <div className="input-box w-100">
                                  <div className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 5H14C14.5523 5 15 5.44772 15 6V7H17V6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H7V15H6C5.44772 15 5 14.5523 5 14V6C5 5.44772 5.44772 5 6 5Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M18 9H10C9.44772 9 9 9.44772 9 10V18C9 18.5523 9.44772 19 10 19H18C18.5523 19 19 18.5523 19 18V10C19 9.44772 18.5523 9 18 9ZM10 7C8.34315 7 7 8.34315 7 10V18C7 19.6569 8.34315 21 10 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H10Z" fill="#262965" /></svg>
                                  </div>
                                  <div className="input-field">
                                    <input name="telephone" value={partnerData.telephone} onChange={(e) => handleInputChange(e, "partner")} className="input-text" type="tel" />
                                    <label className="custom-input-label">Phone</label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-box w-100 textarea-box">
                                  <div className="input-field">
                                    <textarea name="comment" value={partnerData.comment} onChange={(e) => handleInputChange(e, "partner")} className="input-text" rows="3" placeholder="Tell us about yourself, company, and/or community" required></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="submit-btn d-flex justify-content-end">
                              <button type="submit" className="action submit primary"><span>Submit</span></button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* PERSISTENT SOURCE STYLES */}
      <style>{`
        body {
          background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
        }
        li:hover { cursor: pointer; }
        .custom-input-label { pointer-events: none; }
        
        /* Transition for accordion height */
        .accordion-collapse {
          transition: height 0.35s ease;
          overflow: hidden;
        }
        .accordion-collapse:not(.show) {
          height: 0;
          display: none;
        }
        .accordion-collapse.show {
          display: block;
        }
      `}</style>
    </main>
  );
}