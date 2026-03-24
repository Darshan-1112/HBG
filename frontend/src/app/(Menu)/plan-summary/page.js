"use client";
import Link from "next/link";

export default function PlanSummaryPage() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="paln-hero-section">
                <div className="container">
                    <div className="mb-2">
                        <img className="img-fluid" src="/images/plan_light.png" alt="" />
                    </div>
                    <div className="plan-headeing">
                        <p>Plan Summary</p>
                    </div>
                    <div className="sub-heading">
                        <p className="title-one">Solo Health Collective – Nationwide PPO Health Plan</p>
                        <p className="title-two">
                            Solo is a self‑funded major medical plan administered by Vault Admin Services and
                            backed by a Medical Reimbursement Policy through Vault Health Captive, LLC – Series C. It&apos;s designed
                            for entrepreneurs and self‑employed owners who want high‑quality care, concierge support, and strong
                            financial protection.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── VIDEO (shown first as requested) ── */}
            {/* <section style={{ background:"#f4f6fb", padding:"40px 0" }}>
        <div className="container">
          <video
            controls
            playsInline
            style={{ width:"100%", borderRadius:"12px", display:"block", maxHeight:"480px", objectFit:"cover", boxShadow:"0 8px 32px rgba(38,41,101,0.15)" }}
          >
            <source src="/videos/Plan_Summary___Solo__1_.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section> */}

            {/* ── ACCORDION + DOWNLOAD ── */}
            <section className="plan-acordian">
                <div className="container">

                    {/* Breadcrumbs */}
                    <div className="breadcrumbs">
                        <div>
                            <img src="/images/breadcrumb-arrow.png" alt="arrow" />
                        </div>
                        <div>
                            <Link href="/">Home</Link> <span>/</span>
                            <a>Plan Summary</a>
                        </div>
                    </div>

                    {/* ── Accordion ── */}
                    <div className="accordion custom-network-accordion" id="faqAccordion">

                        {/* 1. Key Highlights */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <div className="accordion-header-content">
                                        <span className="icon">
                                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z" fill="#FFBF00" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z" fill="#FFBF00" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h3>Key Highlights</h3>
                                            <p>See the most important features of your Solo Health plan at a glance.</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Network: <p> Access the MultiPlan PHCS nationwide PPO (all 50 states).</p></li>
                                        <li>Emergency care:<p>Always treated as in-network—go to the nearest ER.</p></li>
                                        <li>Deductible choices: <p>$2,500 / $5,000 / $10,000 individual; $5,000 / $10,000 / $20,000 family.</p></li>
                                        <li>Before deductible: <p>Plan pays 100% of preventative services only.</p></li>
                                        <li>After deductible: <p>Plan pays 100% of covered medical services (no coinsurance).</p></li>
                                        <li>Copays: <p>Only apply to prescriptions after the deductible (preventive Rx $0).</p></li>
                                        <li>Prior authorization: <p>Required for certain inpatient admissions, procedures, surgeries, and some mental health treatments (see <a href="https://hbgsolo.com/pub/media/Solo-Plan-Model-SPD-2026.pdf" target="_blank" style={{ color: "#272869", fontWeight: 700 }}>  SPD details</a>).</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2. Networks & Access */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <div className="accordion-header-content">
                                        <span className="icon">
                                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.31415 18.4378C3.31415 19.3764 3.68698 20.2765 4.35062 20.9401C5.01426 21.6037 5.91435 21.9766 6.85288 21.9766H17.1474C18.0859 21.9766 18.986 21.6037 19.6496 20.9401C20.3133 20.2765 20.6861 19.3764 20.6861 18.4378C20.6861 17.4993 20.3133 16.5992 19.6496 15.9356C18.986 15.2719 18.0859 14.8991 17.1474 14.8991H12.9652V13.2906C12.9652 13.0346 12.8636 12.7891 12.6826 12.6081C12.5016 12.4272 12.2561 12.3255 12.0001 12.3255C11.7442 12.3255 11.4987 12.4272 11.3177 12.6081C11.1367 12.7891 11.035 13.0346 11.035 13.2906V14.8991H6.85288C5.91435 14.8991 5.01426 15.2719 4.35062 15.9356C3.68698 16.5992 3.31415 17.4993 3.31415 18.4378ZM17.1474 16.8293C17.574 16.8293 17.9831 16.9988 18.2848 17.3004C18.5864 17.6021 18.7559 18.0112 18.7559 18.4378C18.7559 18.8644 18.5864 19.2736 18.2848 19.5752C17.9831 19.8769 17.574 20.0463 17.1474 20.0463H6.85288C6.42627 20.0463 6.01714 19.8769 5.71549 19.5752C5.41383 19.2736 5.24436 18.8644 5.24436 18.4378C5.24436 18.0112 5.41383 17.6021 5.71549 17.3004C6.01714 16.9988 6.42627 16.8293 6.85288 16.8293H17.1474Z" fill="#FFBF00" />
                                                <path d="M3.2691 6.69245C3.28653 6.82751 3.33292 6.95723 3.4051 7.07271C3.47727 7.1882 3.57354 7.28674 3.68732 7.36159C3.88448 7.49127 4.12232 7.54423 4.35587 7.51044C4.58943 7.47665 4.80251 7.35846 4.95483 7.17822C5.82912 6.16697 6.91085 5.35578 8.12653 4.79978C9.34221 4.24378 10.6633 3.95601 12.0001 3.95601C13.3369 3.95601 14.658 4.24378 15.8737 4.79978C17.0894 5.35578 18.1711 6.16697 19.0454 7.17822C19.1986 7.35745 19.4121 7.4744 19.6456 7.50699C19.8791 7.53959 20.1165 7.48558 20.3129 7.35515C20.4267 7.2803 20.523 7.18177 20.5952 7.06628C20.6673 6.95079 20.7137 6.82108 20.7311 6.68601C20.7498 6.5465 20.7385 6.40463 20.698 6.26984C20.6575 6.13504 20.5887 6.01042 20.4963 5.90427C19.4414 4.68617 18.1369 3.70919 16.6713 3.03959C15.2056 2.36999 13.6131 2.02344 12.0017 2.02344C10.3904 2.02344 8.79784 2.36999 7.33219 3.03959C5.86653 3.70919 4.56203 4.68617 3.50716 5.90427C3.4133 6.0109 3.34347 6.13647 3.30239 6.27246C3.26132 6.40845 3.24997 6.55168 3.2691 6.69245Z" fill="#FFBF00" />
                                                <path d="M9.22384 10.1668C9.9889 9.48844 10.976 9.11382 11.9985 9.11382C13.0211 9.11382 14.0082 9.48844 14.7732 10.1668C14.9318 10.3134 15.1349 10.4026 15.3501 10.42C15.5653 10.4375 15.7802 10.3824 15.9603 10.2634C16.0832 10.1815 16.1857 10.0725 16.2599 9.94477C16.3341 9.81705 16.378 9.674 16.3882 9.52665C16.3981 9.38135 16.3742 9.23573 16.3184 9.10121C16.2626 8.9667 16.1763 8.84694 16.0665 8.75135C14.947 7.73927 13.4916 7.17891 11.9824 7.17891C10.4733 7.17891 9.0179 7.73927 7.89842 8.75135C7.78855 8.84694 7.70232 8.9667 7.64651 9.10121C7.59069 9.23573 7.5668 9.38135 7.57672 9.52665C7.58691 9.674 7.63078 9.81705 7.70496 9.94477C7.77914 10.0725 7.88165 10.1815 8.00459 10.2634C8.18768 10.3906 8.40918 10.4505 8.63145 10.4329C8.85372 10.4153 9.06304 10.3213 9.22384 10.1668Z" fill="#FFBF00" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h3>Networks &amp; Access</h3>
                                            <p>Learn how to find in-network providers and understand your open network options.</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <ul>
                                        <li>In‑Network (Multiplan PHCS): <p> Use Multiplan PHCS providers for the lowest out‑of‑pocket costs.</p></li>
                                        <li>Out‑of‑Network: <p>Covered under Reference‑Based Pricing (RBP); you may pay more—confirm status before care.</p></li>
                                        <li>Emergency Services: <p>Always handled as in‑network.</p></li>
                                    </ul>
                                    <div className="provider-div pt-4">
                                        <a href="http://localhost:3000/our-network" target="_blank" rel="noopener" style={{ borderRadius: "5px", fontSize: "clamp(12px, 1vw, 14px)", fontWeight: 800, color: "#262965", margin: 0, backgroundColor: "#FFBF00", padding: "20px 80px", border: "none", display: "inline-block", textDecoration: "none" }}>
                                            Find a Provider
                                        </a>
                                        <p>Search the Multiplan PHCS network.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. What's Covered */}
                        <div className="accordion-item table-accordion">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <div className="accordion-header-content">
                                        <div className="icon">
                                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 9h-3V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V12c0-1.66-1.34-3-3-3zM14 4v5h-3V4h3zM4 18V4h5v14H4zM20 18H11v-7h8c.55 0 1 .45 1 1v6z" fill="#FFBF00" />
                                                <path d="M12 13h6v1.5h-6zM12 15.5h4v1.5h-4z" fill="#FFBF00" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>What&apos;s Covered (at a glance)</h3>
                                            <p>A quick overview of the core medical services included in your plan.</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                <div className="accordion-body">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Care Type</th>
                                                <th className="text-start">Coverage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p className="title">Preventive Services</p>
                                                    <p className="desc">(age/gender-appropriate screenings, annual wellness, certain vaccines/Rx, well-child)</p>
                                                    <br />
                                                    <p>Note: Solo follows the <a href="https://www.healthcare.gov/coverage/preventive-care-benefits/" target="_blank" style={{ color: "#272869", fontWeight: 700 }}>ACA guidelines</a> of preventive care </p>
                                                </td>
                                                <td><p className="price">100% <span className="note">(deductible waived)</span></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Primary &amp; specialist visits</p></td>
                                                <td><p className="price">100% after deductible</p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Emergency room</p></td>
                                                <td><p className="price">100% after deductible <span className="note">(closest ER)</span></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Urgent care</p></td>
                                                <td><p className="price">100% after deductible</p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Inpatient hospitalization &amp; surgeries</p></td>
                                                <td><p className="price">100% after deductible <span className="note">(Prior authorization required)</span></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Mental health &amp; substance abuse treatment</p></td>
                                                <td><p className="price">100% after deductible <span className="note">(Prior authorization may apply)</span><br /><span className="note">*Outpatient therapy capped at 40 visits per year per covered individual</span></p></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="title">Imaging &amp; advanced diagnostics</p>
                                                    <p className="desc">(X-ray, MRI, CT, PET, labs)</p>
                                                </td>
                                                <td><p className="price">100% after deductible</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="pt-4">
                                        <p className="text-primary fs-16">
                                            <span className="fw-bold">Note:</span> Out‑of‑network services are subject to RBP and may result in higher costs, especially if you prepay the provider.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Prescription Benefits */}
                        <div className="accordion-item table-accordion-1">
                            <h2 className="accordion-header" id="heading4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    <div className="accordion-header-content">
                                        <div className="icon">
                                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.7312 11.52C19.6469 11.52 22.0105 13.8846 22.0105 16.8003C22.0103 19.7158 19.6468 22.0796 16.7312 22.0796C13.8156 22.0796 11.4521 19.7159 11.4519 16.8003C11.4519 13.8846 13.8155 11.52 16.7312 11.52ZM17.2175 13.8501C17.0451 13.4439 16.4689 13.4437 16.2966 13.8501L15.7996 15.0249C15.7272 15.1955 15.5662 15.3118 15.3816 15.3276L14.1101 15.436C13.6694 15.4734 13.4906 16.0224 13.8249 16.312L14.7908 17.1499C14.931 17.2714 14.9931 17.4604 14.9509 17.6411L14.6609 18.8843C14.5604 19.315 15.0273 19.6548 15.406 19.4263L16.4988 18.7661C16.6575 18.6703 16.8566 18.6705 17.0154 18.7661L18.1091 19.4263C18.4878 19.6548 18.9547 19.315 18.8542 18.8843L18.5642 17.6411C18.5221 17.4606 18.5834 17.2714 18.7234 17.1499L19.6902 16.312C20.0245 16.0224 19.8457 15.4734 19.405 15.436L18.1335 15.3276C17.9489 15.3119 17.7879 15.1956 17.7156 15.0249L17.2175 13.8501Z" fill="#FFBF00" />
                                                <path d="M12.8534 2.24536C13.357 2.24536 13.8422 2.4356 14.2118 2.77759L17.0487 5.40161C17.4578 5.78015 17.6903 6.31296 17.6903 6.87036V10.4329C17.3455 10.3743 16.9913 10.343 16.6298 10.343C16.3105 10.343 15.9967 10.3665 15.6903 10.4124V8.26489H14.0985C13.2701 8.26489 12.5985 7.59329 12.5985 6.76489V4.24536H4.59851V18.8206H10.7225C10.9971 19.5637 11.4089 20.2398 11.9257 20.8206H4.59851C3.49394 20.8206 2.59851 19.9251 2.59851 18.8206V4.24536C2.59851 3.14079 3.49394 2.24536 4.59851 2.24536H12.8534Z" fill="#FFBF00" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>Prescription Benefits (FairosRx)</h3>
                                            <p>Details on covered medications, copays, and how to use your pharmacy benefits.</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4">
                                <div className="accordion-body">
                                    <p className="text-primary fs-6 fw-normal">Members pay full cost until the deductible is met, except Tier 1 preventive drugs (always $0). Then the following copays apply:</p>
                                    <table className="MT-32">
                                        <thead>
                                            <tr>
                                                <th>Tier</th>
                                                <th className="text-center">30-Days Retail</th>
                                                <th>90‑Day Mail</th>
                                                <th className="text-start">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><p className="title">Tier 1 – Preventive</p></td>
                                                <td><p className="price">$0</p></td>
                                                <td><p className="price">$0</p></td>
                                                <td><p className="price"> <span className="note">Deductible waived</span></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Tier 2 – Preferred Drugs</p></td>
                                                <td><p className="price">$15</p></td>
                                                <td><p className="title">$30</p></td>
                                                <td><p className="price"> <span className="note">After deductible</span></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Tier 3 – Preferred Brand &amp; Non‑Preferred Generics</p></td>
                                                <td><p className="price">$50</p></td>
                                                <td><p className="title">$100</p></td>
                                                <td><p className="price"> <span className="note">After deductible</span></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Tier 4 – Non‑Preferred Brand</p></td>
                                                <td><p className="price">$100</p></td>
                                                <td><p className="title">$200</p></td>
                                                <td><p className="price"> <span className="note">After deductible</span></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Tier 5 – Specialty Drugs</p></td>
                                                <td><p className="price">Covered up to $1,000/Rx</p></td>
                                                <td><p className="title">Covered up to $1,000/Rx</p></td>
                                                <td><p className="price"> <span className="note">Covered up to $1,000/Rx</span></p></td>
                                            </tr>
                                            <tr>
                                                <td><p className="title">Tier 6 – Non‑Formulary</p></td>
                                                <td><p className="price">Not Covered</p></td>
                                                <td><p className="price">Not Covered</p></td>
                                                <td><p className="price"> <span className="note">Excluded</span></p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="pt-4">
                                        <div className="d-flex align-items-start gap-2">
                                            <p className="text-primary m-0 fw-bold fs-16 text-nowrap">Important Rx notes:</p>
                                            <p className="text-primary m-0 fs-16">Non‑specialty drugs over $1,000 (30‑day) or over $3,000 (90‑day) are excluded; formulary updates are communicated 30 days in advance. Use the FairosRx portal/app to check coverage and pharmacies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5. Concierge & Support */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    <div className="accordion-header-content">
                                        <span className="icon">
                                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.79175 11.9453L2.79176 18.4246C2.79176 18.9769 3.23947 19.4246 3.79175 19.4246L7.08893 19.4246C7.64122 19.4247 8.08894 18.9769 8.08894 18.4246V15.8948H15.796V18.3863C15.796 18.9386 16.2437 19.3863 16.796 19.3863H20.2082C20.7605 19.3863 21.2082 18.9386 21.2082 18.3863L21.2082 11.7919C21.2082 11.2396 20.7576 10.7918 20.2053 10.7928C13.853 10.8053 10.7726 10.9331 3.79491 10.9445C3.24262 10.9454 2.79175 11.393 2.79175 11.9453Z" stroke="#FFBF00" strokeWidth="2" />
                                                <path d="M11.9915 2.0957C13.4182 2.0957 14.5754 3.25203 14.5755 4.67871C14.5755 4.81198 14.5627 4.94247 14.5433 5.07031H14.2395C14.2616 4.94298 14.2747 4.81234 14.2747 4.67871C14.2746 3.41772 13.2525 2.39551 11.9915 2.39551C10.7306 2.39571 9.70839 3.41784 9.70829 4.67871C9.70831 4.81238 9.72237 4.94295 9.74443 5.07031H9.44169C9.42221 4.94244 9.40851 4.81201 9.40849 4.67871C9.40859 3.25215 10.565 2.0959 11.9915 2.0957Z" fill="#FFBF00" />
                                                <path d="M11.9921 7.31042C13.7919 7.31042 15.2875 8.65611 15.5126 10.3915H8.48724C8.71044 8.65434 10.1946 7.31051 11.9921 7.31042Z" stroke="#FFBF00" />
                                                <path d="M11.9603 3.16516C12.8313 3.16516 13.5188 3.84751 13.5188 4.66516C13.5186 5.48259 12.8311 6.16418 11.9603 6.16418C11.0894 6.16418 10.4019 5.48259 10.4017 4.66516C10.4017 3.84751 11.0892 3.16516 11.9603 3.16516Z" stroke="#FFBF00" strokeWidth="0.7" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h3>Concierge &amp; Support Services</h3>
                                            <p>Explore extra member resources like second opinions, care navigation, and billing support.</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Vault Cares Network: <p> Second opinions, care navigation, member advocacy.</p></li>
                                        <li>MedWatch Case Management: <p>Coordination for complex/high‑cost care (and prior auth).</p></li>
                                        <li>Occunet Balance‑Bill Support: <p>Help if you receive an unexpected balance bill.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 6. Exclusions */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading7">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                    <div className="accordion-header-content">
                                        <span className="icon">
                                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h12v16z" fill="#FFBF00" />
                                                <path d="M11 15h2v2h-2zm0-8h2v6h-2z" fill="#FFBF00" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h3>Exclusions &amp; Limitations (examples)</h3>
                                            <p>Understand the services not included in your plan and common limitations.</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Not typically covered: <p> acupuncture/massage/alternative therapies, cosmetic procedures, dental &amp; vision, infertility/surrogacy services, vitamins/supplements, marriage therapy, experimental treatments. See the <a href="https://hbgsolo.com/pub/media/Solo-Plan-Model-SPD-2026.pdf" target="_blank" style={{ color: "#272869", fontWeight: 700 }}>Summary Plan Description (SPD)</a> for the full list.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 7. Important Disclosures */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading9">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                    <div className="accordion-header-content">
                                        <span className="icon">
                                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 17h-2v-7c0-4.08-3.05-7.44-7-7.93V2c0-.55-.45-1-1-1s-1 .45-1 1v.07C7.05 2.56 4 5.92 4 10v7H2c-.55 0-1 .45-1 1s.45 1 1 1h20c.55 0 1-.45 1-1s-.45-1-1-1zM12 6c2.21 0 4 1.79 4 4v7H8v-7c0-2.21 1.79-4 4-4zm-2 14c0 1.1.9 2 2 2s2-.9 2-2h-4z" fill="#FFBF00" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h3>Important Disclosures</h3>
                                            <p>Review key information about how your plan works and important member notices.</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Medical Reimbursement Policy: <p> After you meet your deductible, eligible claims are reimbursed by Vault Health Captive, LLC – Series C.</p></li>
                                        <li>Eligibility<p>Health attestation required; inaccuracies may lead to denial.</p></li>
                                        <li>Captive Participation: <p>Members share claims risk as part of the Vault Strategies small‑employer group.</p></li>
                                        <li>Governing Document: <p>This page is a summary; the <a href="https://hbgsolo.com/pub/media/Solo-Plan-Model-SPD-2026.pdf" target="_blank" style={{ color: "#272869", fontWeight: 700 }}>Summary Plan Description (SPD)</a> controls.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 8. Need Help */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading8">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                    <div className="accordion-header-content">
                                        <span className="icon">
                                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.79175 11.9453L2.79176 18.4246C2.79176 18.9769 3.23947 19.4246 3.79175 19.4246L7.08893 19.4246C7.64122 19.4247 8.08894 18.9769 8.08894 18.4246V15.8948H15.796V18.3863C15.796 18.9386 16.2437 19.3863 16.796 19.3863H20.2082C20.7605 19.3863 21.2082 18.9386 21.2082 18.3863L21.2082 11.7919C21.2082 11.2396 20.7576 10.7918 20.2053 10.7928C13.853 10.8053 10.7726 10.9331 3.79491 10.9445C3.24262 10.9454 2.79175 11.393 2.79175 11.9453Z" stroke="#FFBF00" strokeWidth="2" />
                                                <path d="M11.9921 7.31042C13.7919 7.31042 15.2875 8.65611 15.5126 10.3915H8.48724C8.71044 8.65434 10.1946 7.31051 11.9921 7.31042Z" stroke="#FFBF00" />
                                                <path d="M11.9603 3.16516C12.8313 3.16516 13.5188 3.84751 13.5188 4.66516C13.5186 5.48259 12.8311 6.16418 11.9603 6.16418C11.0894 6.16418 10.4019 5.48259 10.4017 4.66516C10.4017 3.84751 11.0892 3.16516 11.9603 3.16516Z" stroke="#FFBF00" strokeWidth="0.7" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h3>Need Help?</h3>
                                            <p>Find out how to contact Solo support for claims, benefits, or enrollment assistance.</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-4 m-col-sm-12">
                                            <h6 className="text-primary fw-bold mb-2 mt-2 fs-16">Vault Admin Services (claims &amp; benefits):</h6>
                                            <ul>
                                                <li className="text-primary m-0 fw-bold fs-16">Phone:&nbsp;<a className="text-decoration-none text-primary fw-normal fs-16">888‑211‑5706</a></li>
                                                <li className="text-primary m-0 fw-bold fs-16">Email:&nbsp;<a className="highlight-text fw-normal fs-16">claims@allthingsvault.com</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-4 m-col-sm-12">
                                            <h6 className="text-primary fw-bold mb-2 mt-2 fs-16">Healthy Business Group / Solo Support:</h6>
                                            <ul>
                                                <li className="text-primary m-0 fw-bold fs-16">Call/Text: :&nbsp;<a className="text-decoration-none text-primary fw-normal fs-16">888‑655‑4053</a></li>
                                                <li className="text-primary m-0 fw-bold fs-16">Email:&nbsp;<a className="highlight-text fw-normal fs-16">support@hbgnow.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>{/* end .custom-network-accordion */}

                 
                    <div className="container download-section MT-32">
                        <div className="download-heading">
                            <h3>Downloadable Resources</h3>
                            <p>Here are a few important files you may want to keep handy offline. Use the buttons below to access them.</p>
                        </div>
                        <div className="row pt-3 pt-lg-4">
                            <div className="col-12">
                                <div className="pdf-main-div">

                                    <div className="pdf-card">
                                        <div className="pdf-card-content">
                                            <div>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="0.5" width="24" height="24" rx="12" fill="#262965" />
                                                    <path d="M8.596 7.3H13.844V18.5H10.676V9.748H8.596V7.3Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div className="card-content">
                                                <h5>Summary of Benefits</h5>
                                                <p>Understand what your plan covers whenever you need it.</p>
                                            </div>
                                        </div>
                                        <div className="download-button">
                                            <button onClick={() => window.open("https://hbgsolo.com/pub/media/Summary-of-Benefits-and-Coverage-2026.pdf", "_blank")}>
                                                Download PDF
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pdf-card">
                                        <div className="pdf-card-content">
                                            <div>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="0.5" width="24" height="24" rx="12" fill="#262965" />
                                                    <path d="M11.88 15.988H16.2V18.5H7.48V16.516L11.672 12.596C12.568 11.764 12.696 11.252 12.696 10.788C12.696 10.068 12.216 9.636 11.256 9.636C10.44 9.636 9.704 10.004 9.256 10.724L6.904 9.412C7.752 8.004 9.336 7.076 11.544 7.076C14.12 7.076 15.896 8.404 15.896 10.484C15.896 11.572 15.592 12.564 13.992 14.036L11.88 15.988Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div className="card-content">
                                                <h5>Prescription Drug Formulary</h5>
                                                <p>Easily check which medications are covered under your plan.</p>
                                            </div>
                                        </div>
                                        <div className="download-button">
                                            <button onClick={() => window.open("https://hbgsolo.com/pub/media/Solo%20Rx%20Formulary.pdf", "_blank")}>
                                                Download PDF
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pdf-card">
                                        <div className="pdf-card-content">
                                            <div>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="0.5" width="24" height="24" rx="12" fill="#262965" />
                                                    <path d="M13.288 11.78C15.176 12.18 16.168 13.396 16.168 14.996C16.168 16.9 14.664 18.724 11.288 18.724C9.736 18.724 8.088 18.34 6.936 17.62L8.088 15.236C8.984 15.844 10.136 16.164 11.192 16.164C12.264 16.164 12.968 15.748 12.968 14.996C12.968 14.324 12.472 13.908 11.256 13.908H9.928V11.908L11.928 9.748H7.512V7.3H15.608V9.284L13.288 11.78Z" fill="white" />
                                                </svg>
                                            </div>
                                            <div className="card-content">
                                                <h5>Summary Plan Description</h5>
                                                <p>Understand the full details and rules of your coverage.</p>
                                            </div>
                                        </div>
                                        <div className="download-button">
                                            <button onClick={() => window.open("https://hbgsolo.com/pub/media/Solo-Plan-Model-SPD-2026.pdf", "_blank")}>
                                                Download PDF
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* These 3 rules are from the original source's inline <style> tag — not custom additions */}
            <style>{`
             body {
          background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
        }
        .download-button button {
          border: 2px solid #262965;
          padding: 8px 16px;
          color: #262965;
          font-weight: 800;
          background-color: white;
          border-radius: 5px;
          font-size: clamp(12px, 1vw, 14px) !important;
          cursor: pointer;
        }
        .plan-acordian .custom-network-accordion .accordion-item .accordion-body .provider-div {
          align-items: baseline !important;
        }
        @media(max-width:767px){
          .m-col-sm-12 { width: 100% !important; }
        }
      `}</style>
        </>
    );
}