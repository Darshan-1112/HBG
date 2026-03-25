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
                                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z"
                                                    fill="#FFBF00" />
                                                <path
                                                    d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z"
                                                    fill="#FFBF00" />
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
                                                <path d="M3.31415 18.4378C3.31415 19.3764 3.68698 20.2765 4.35062 20.9401C5.01426 21.6037 5.91435 21.9766 6.85288 21.9766H17.1474C18.0859 21.9766 18.986 21.6037 19.6496 20.9401C20.3133 20.2765 20.6861 19.3764 20.6861 18.4378C20.6861 17.4993 20.3133 16.5992 19.6496 15.9356C18.986 15.2719 18.0859 14.8991 17.1474 14.8991H12.9652V13.2906C12.9652 13.0346 12.8636 12.7891 12.6826 12.6081C12.5016 12.4272 12.2561 12.3255 12.0001 12.3255C11.7442 12.3255 11.4987 12.4272 11.3177 12.6081C11.1367 12.7891 11.035 13.0346 11.035 13.2906V14.8991H6.85288C5.91435 14.8991 5.01426 15.2719 4.35062 15.9356C3.68698 16.5992 3.31415 17.4993 3.31415 18.4378ZM17.1474 16.8293C17.574 16.8293 17.9831 16.9988 18.2848 17.3004C18.5864 17.6021 18.7559 18.0112 18.7559 18.4378C18.7559 18.8644 18.5864 19.2736 18.2848 19.5752C17.9831 19.8769 17.574 20.0463 17.1474 20.0463H6.85288C6.42627 20.0463 6.01714 19.8769 5.71549 19.5752C5.41383 19.2736 5.24436 18.8644 5.24436 18.4378C5.24436 18.0112 5.41383 17.6021 5.71549 17.3004C6.01714 16.9988 6.42627 16.8293 6.85288 16.8293H17.1474Z" fill="#FFBF00"></path>
                                                <path d="M3.2691 6.69245C3.28653 6.82751 3.33292 6.95723 3.4051 7.07271C3.47727 7.1882 3.57354 7.28674 3.68732 7.36159C3.88448 7.49127 4.12232 7.54423 4.35587 7.51044C4.58943 7.47665 4.80251 7.35846 4.95483 7.17822C5.82912 6.16697 6.91085 5.35578 8.12653 4.79978C9.34221 4.24378 10.6633 3.95601 12.0001 3.95601C13.3369 3.95601 14.658 4.24378 15.8737 4.79978C17.0894 5.35578 18.1711 6.16697 19.0454 7.17822C19.1986 7.35745 19.4121 7.4744 19.6456 7.50699C19.8791 7.53959 20.1165 7.48558 20.3129 7.35515C20.4267 7.2803 20.523 7.18177 20.5952 7.06628C20.6673 6.95079 20.7137 6.82108 20.7311 6.68601C20.7498 6.5465 20.7385 6.40463 20.698 6.26984C20.6575 6.13504 20.5887 6.01042 20.4963 5.90427C19.4414 4.68617 18.1369 3.70919 16.6713 3.03959C15.2056 2.36999 13.6131 2.02344 12.0017 2.02344C10.3904 2.02344 8.79784 2.36999 7.33219 3.03959C5.86653 3.70919 4.56203 4.68617 3.50716 5.90427C3.4133 6.0109 3.34347 6.13647 3.30239 6.27246C3.26132 6.40845 3.24997 6.55168 3.2691 6.69245Z" fill="#FFBF00"></path>
                                                <path d="M9.22384 10.1668C9.9889 9.48844 10.976 9.11382 11.9985 9.11382C13.0211 9.11382 14.0082 9.48844 14.7732 10.1668C14.9318 10.3134 15.1349 10.4026 15.3501 10.42C15.5653 10.4375 15.7802 10.3824 15.9603 10.2634C16.0832 10.1815 16.1857 10.0725 16.2599 9.94477C16.3341 9.81705 16.378 9.674 16.3882 9.52665C16.3981 9.38135 16.3742 9.23573 16.3184 9.10121C16.2626 8.9667 16.1763 8.84694 16.0665 8.75135C14.947 7.73927 13.4916 7.17891 11.9824 7.17891C10.4733 7.17891 9.0179 7.73927 7.89842 8.75135C7.78855 8.84694 7.70232 8.9667 7.64651 9.10121C7.59069 9.23573 7.5668 9.38135 7.57672 9.52665C7.58691 9.674 7.63078 9.81705 7.70496 9.94477C7.77914 10.0725 7.88165 10.1815 8.00459 10.2634C8.18768 10.3906 8.40918 10.4505 8.63145 10.4329C8.85372 10.4153 9.06304 10.3213 9.22384 10.1668Z" fill="#FFBF00"></path>
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
                                                <path d="M18.4673 9.44529V19.7906C18.4673 20.3883 18.2236 20.9305 17.8299 21.3242C17.4108 21.7433 16.8662 21.9616 16.2749 21.9616H4.30551C3.71096 21.9616 3.1712 21.7187 2.77986 21.3274C2.38853 20.9368 2.14563 20.3963 2.14563 19.8017C2.14563 19.2072 2.38853 18.6674 2.77986 18.2761C3.1712 17.8847 3.71176 17.6418 4.30551 17.6418H4.97467V4.2167C4.97467 3.61899 5.21836 3.07683 5.61208 2.68311C6.005 2.29019 6.54795 2.04571 7.14567 2.04571H19.6946C20.2891 2.04571 20.8289 2.2886 21.2202 2.67994C21.6116 3.07049 21.8545 3.61104 21.8545 4.20559V8.97854C21.8545 9.23651 21.6457 9.44529 21.3877 9.44529H18.4673ZM7.35201 15.7559C7.09403 15.7559 6.88526 15.5472 6.88526 15.2892C6.88526 15.0312 7.09401 14.8224 7.35201 14.8224H16.0891C16.3471 14.8224 16.5559 15.0312 16.5559 15.2892C16.5559 15.5472 16.3471 15.7559 16.0891 15.7559H7.35201ZM11.721 12.01C12.3925 11.6425 14.5214 10.3144 14.5214 8.25063V6.22171C13.6776 5.81371 12.7013 5.61051 11.721 5.61051C10.7407 5.61051 9.76352 5.81451 8.92057 6.22171V8.25063C8.92057 10.3144 11.0502 11.6418 11.721 12.01ZM15.4549 8.25063C15.4549 11.2868 11.9313 12.9474 11.9217 12.9531C11.7995 13.0118 11.6527 13.0166 11.5209 12.9531C11.5106 12.9483 7.9877 11.2869 7.9877 8.25063V5.93832C7.9877 5.77401 8.07581 5.61445 8.2298 5.52953C9.26728 4.96038 10.4968 4.67701 11.7217 4.67701C12.9354 4.67701 14.1539 4.95642 15.1858 5.51524C15.3454 5.58906 15.4557 5.751 15.4557 5.93832L15.4549 8.25063ZM16.3249 21.0273C16.6535 21.0202 16.952 20.8821 17.1695 20.6638C17.3941 20.4391 17.533 20.1304 17.533 19.7906V4.20557C17.533 3.75073 17.6751 3.32844 17.9172 2.97998H7.14475C6.80501 2.97998 6.49544 3.11968 6.27159 3.34433C6.04694 3.56898 5.90724 3.87775 5.90724 4.21749V17.6426H14.7697C15.0277 17.6426 15.2365 17.8514 15.2365 18.1094V19.8795C15.2365 20.1819 15.354 20.4574 15.5461 20.663C15.739 20.8694 16.0072 21.0059 16.3057 21.0265C16.3121 21.0273 16.3186 21.0273 16.3249 21.0273ZM4.30474 21.0273H14.6509C14.431 20.6979 14.3024 20.3026 14.3024 19.8787V18.5753H4.30397C3.96741 18.5753 3.661 18.7135 3.43795 18.9357C3.21569 19.158 3.07758 19.4644 3.07758 19.8017C3.07758 20.1383 3.2157 20.4447 3.43795 20.6677C3.66022 20.89 3.96662 21.0281 4.30397 21.0281L4.30474 21.0273ZM18.4673 8.51175H20.9192V4.20618C20.9192 3.86962 20.7811 3.5632 20.5589 3.34016C20.3366 3.11789 20.0302 2.97979 19.6929 2.97979C19.3563 2.97979 19.0499 3.11791 18.8268 3.34016C18.6046 3.56243 18.4665 3.86962 18.4665 4.20618L18.4673 8.51175Z" fill="#FFBF00" />
                                                <path d="M12.1642 6.65008C12.1642 6.40427 11.9649 6.205 11.7191 6.205C11.4733 6.205 11.2741 6.40427 11.2741 6.65008V7.98532H9.93881C9.693 7.98532 9.49373 8.18459 9.49373 8.4304C9.49373 8.67621 9.693 8.87548 9.93881 8.87548H11.2741V10.2107C11.2741 10.4565 11.4733 10.6558 11.7191 10.6558C11.9649 10.6558 12.1642 10.4565 12.1642 10.2107L12.1642 8.87548H13.4995C13.7453 8.87548 13.9445 8.67621 13.9445 8.4304C13.9445 8.18459 13.7453 7.98532 13.4995 7.98532H12.1642V6.65008Z" fill="#FFBF00" />
                                                <path d="M6.82804 1.01461H20.2245L20.2753 1.01949C20.9089 1.08429 21.607 1.23654 22.1347 1.78903C22.639 2.31718 22.8225 3.04314 22.9228 3.79293L22.9325 3.8652L22.8417 10.4052L21.8788 10.4287L19.6161 10.4814V20.7002L19.5849 20.8213C19.4204 21.4673 19.1374 22.1546 18.4374 22.5693C17.8145 22.9382 17.0447 22.972 16.2568 22.9267H4.13664L4.11417 22.9257C3.48189 22.8972 2.72425 22.803 2.1757 22.2754C1.61177 21.7329 1.5082 20.9716 1.49796 20.292C1.47082 19.3407 1.59806 18.4019 2.3007 17.7089C2.76467 17.2514 3.38611 17.0031 4.07707 16.8466V3.69235L4.07999 3.65035C4.10364 3.36736 4.13294 3.05127 4.19523 2.76071C4.25862 2.46506 4.37121 2.11734 4.61515 1.80563C5.15131 1.12062 5.99073 0.988623 6.82804 1.01461ZM6.76554 3.01363C6.40963 3.00259 6.24663 3.03791 6.18351 3.05953C6.17516 3.08211 6.16309 3.12007 6.15031 3.17965C6.12013 3.32039 6.10028 3.50343 6.07707 3.77633V18.5566L5.21281 18.6748C4.1999 18.8134 3.84599 18.9938 3.70499 19.1328C3.62687 19.2098 3.50798 19.3805 3.49503 19.9609L3.49699 20.2353V20.2509C3.50199 20.633 3.549 20.7848 3.56828 20.832C3.58245 20.8383 3.60565 20.8492 3.64249 20.8593C3.75031 20.8889 3.92104 20.914 4.19328 20.9267H16.3056L16.3359 20.9287C17.1048 20.9755 17.3461 20.8911 17.4179 20.8486C17.4238 20.8453 17.5082 20.8128 17.6161 20.4394V9.50485H18.6444L18.621 8.50582L20.8681 8.45113L20.9296 3.99215C20.8408 3.37425 20.7275 3.21197 20.6884 3.17086C20.672 3.15373 20.5901 3.0677 20.1122 3.01461H6.78117L6.76554 3.01363Z" fill="#FFBF00" />
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
                                                <path d="M12.8534 2.24536C13.357 2.24536 13.8422 2.4356 14.2118 2.77759L17.0487 5.40161C17.4578 5.78015 17.6903 6.31296 17.6903 6.87036V10.4329C17.3455 10.3743 16.9913 10.343 16.6298 10.343C16.3105 10.343 15.9967 10.3665 15.6903 10.4124V8.26489H14.0985C13.2701 8.26489 12.5985 7.59329 12.5985 6.76489V4.24536H4.59851V18.8206H10.7225C10.9971 19.5637 11.4089 20.2398 11.9257 20.8206H4.59851C3.49394 20.8206 2.59851 19.9251 2.59851 18.8206V4.24536C2.59851 3.14079 3.49394 2.24536 4.59851 2.24536H12.8534ZM10.4862 15.2649C10.4139 15.5896 10.3656 15.9234 10.3456 16.2649H6.59851C6.32238 16.2649 6.09854 16.041 6.09851 15.7649C6.09851 15.4888 6.32236 15.2649 6.59851 15.2649H10.4862ZM11.3153 13.2649C11.1146 13.5804 10.9414 13.9146 10.7987 14.2649H6.59851C6.32238 14.2649 6.09854 14.041 6.09851 13.7649C6.09851 13.4888 6.32236 13.2649 6.59851 13.2649H11.3153ZM8.02038 5.5979C8.57741 5.59793 9.03382 6.08137 9.03405 6.67114C9.03405 7.26112 8.58069 7.74533 8.02038 7.74536H7.38171L8.7196 9.16138L9.54675 8.28442C9.66945 8.15456 9.86832 8.15466 9.99109 8.28442C10.1139 8.41441 10.1139 8.62513 9.99109 8.75513L9.16296 9.6311L9.99109 10.5081C10.1138 10.6379 10.1136 10.8478 9.99109 10.9778C9.92812 11.0411 9.84931 11.0745 9.76745 11.0745C9.6856 11.0745 9.60678 11.0444 9.54382 10.9778L8.71569 10.1018L7.88855 10.9778C7.82567 11.041 7.74665 11.0744 7.66491 11.0745C7.58306 11.0745 7.50424 11.0444 7.44128 10.9778C7.31863 10.8478 7.31855 10.638 7.44128 10.5081L8.26941 9.6311L6.93151 8.21509V8.89185C6.93138 9.07506 6.78914 9.22485 6.61609 9.22485L6.61901 9.22876C6.44609 9.22849 6.30456 9.07795 6.30456 8.89478V5.93188C6.30456 5.74872 6.44609 5.59817 6.61901 5.5979H8.02038ZM13.5985 6.76489C13.5985 7.04101 13.8224 7.26489 14.0985 7.26489H15.6903V6.87036L13.5985 4.93481V6.76489ZM6.93151 7.07446H8.01745C8.2282 7.07429 8.40121 6.8914 8.40124 6.66821C8.40124 6.445 8.22824 6.26214 8.01745 6.26196H6.93151V7.07446Z" fill="#FFBF00" />
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
                                                <path d="M2.79175 11.9453L2.79176 18.4246C2.79176 18.9769 3.23947 19.4246 3.79175 19.4246L7.08893 19.4246C7.64122 19.4247 8.08894 18.9769 8.08894 18.4246V15.8948H15.796V18.3863C15.796 18.9386 16.2437 19.3863 16.796 19.3863H20.2082C20.7605 19.3863 21.2082 18.9386 21.2082 18.3863L21.2082 11.7919C21.2082 11.2396 20.7576 10.7918 20.2053 10.7928C13.853 10.8053 10.7726 10.9331 3.79491 10.9445C3.24262 10.9454 2.79175 11.393 2.79175 11.9453Z" stroke="#FFBF00" />
                                                <path d="M11.9915 2.0957C13.4182 2.0957 14.5754 3.25203 14.5755 4.67871C14.5755 4.81198 14.5627 4.94247 14.5433 5.07031H14.2395C14.2616 4.94298 14.2747 4.81234 14.2747 4.67871C14.2746 3.41772 13.2525 2.39551 11.9915 2.39551C10.7306 2.39571 9.70839 3.41784 9.70829 4.67871C9.70831 4.81238 9.72237 4.94295 9.74443 5.07031H9.44169C9.42221 4.94244 9.40851 4.81201 9.40849 4.67871C9.40859 3.25215 10.565 2.0959 11.9915 2.0957Z" fill="#FFBF00" />
                                                <path d="M13.6897 6.2002C14.053 5.79588 14.2756 5.2621 14.2757 4.67578C14.2755 3.41499 13.2533 2.39278 11.9925 2.39258C10.7315 2.39258 9.70947 3.41487 9.70927 4.67578C9.70927 4.69527 9.71171 4.715 9.7122 4.73437L9.41044 4.64453C9.4274 3.23234 10.5763 2.0918 11.9925 2.0918C13.4189 2.09199 14.5753 3.24931 14.5755 4.67578C14.5754 5.32129 14.337 5.91053 13.9456 6.36328L13.6897 6.2002Z" fill="#FFBF00" />
                                                <path d="M14.303 4.14817C14.303 3.91868 14.2771 3.72498 14.5066 3.72498C14.7361 3.72498 14.9221 3.91101 14.9221 4.1405V4.65576C14.9221 4.88525 14.7361 5.07129 14.5066 5.07129C14.2771 5.07129 14.303 4.89292 14.303 4.66343V4.14817Z" fill="#FFBF00" />
                                                <path d="M13.87 5.97283C13.9383 5.88721 13.9822 5.8039 14.1049 5.90184C14.2275 5.99977 14.2715 6.14858 14.2031 6.2342L14.0496 6.42644C13.9812 6.51206 13.8264 6.50207 13.7037 6.40413C13.5811 6.3062 13.6481 6.25069 13.7164 6.16507L13.87 5.97283Z" fill="#FFBF00" />
                                                <path d="M9.69706 4.14817C9.69706 3.91868 9.72294 3.72498 9.49345 3.72498C9.26396 3.72498 9.07792 3.91101 9.07792 4.1405V4.65576C9.07792 4.88525 9.26396 5.07129 9.49345 5.07129C9.72294 5.07129 9.69706 4.89292 9.69706 4.66343V4.14817Z" fill="#FFBF00" />
                                                <path d="M11.9921 7.31042C13.7919 7.31042 15.2875 8.65611 15.5126 10.3915H8.48724C8.71044 8.65434 10.1946 7.31051 11.9921 7.31042Z" stroke="#FFBF00" />
                                                <path d="M11.9603 3.16516C12.8313 3.16516 13.5188 3.84751 13.5188 4.66516C13.5186 5.48259 12.8311 6.16418 11.9603 6.16418C11.0894 6.16418 10.4019 5.48259 10.4017 4.66516C10.4017 3.84751 11.0892 3.16516 11.9603 3.16516Z" stroke="#FFBF00" />
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
                                                <path d="M18.2537 9.44529V19.7906C18.2537 20.3883 18.01 20.9305 17.6163 21.3242C17.1972 21.7433 16.6527 21.9616 16.0613 21.9616H4.09195C3.4974 21.9616 2.95764 21.7187 2.5663 21.3274C2.17496 20.9368 1.93207 20.3963 1.93207 19.8017C1.93207 19.2072 2.17496 18.6674 2.5663 18.2761C2.95764 17.8847 3.49819 17.6418 4.09195 17.6418H4.76111V4.2167C4.76111 3.61899 5.0048 3.07683 5.39852 2.68311C5.79144 2.29019 6.33439 2.04571 6.93211 2.04571H19.481C20.0756 2.04571 20.6153 2.2886 21.0067 2.67994C21.398 3.07049 21.6409 3.61104 21.6409 4.20559V8.97854C21.6409 9.23651 21.4321 9.44529 21.1741 9.44529H18.2537ZM16.1113 21.0273C16.44 21.0202 16.7384 20.8821 16.9559 20.6638C17.1806 20.4391 17.3195 20.1304 17.3195 19.7906V4.20557C17.3195 3.75073 17.4616 3.32844 17.7037 2.97998H6.93119C6.59145 2.97998 6.28188 3.11968 6.05803 3.34433C5.83338 3.56898 5.69367 3.87775 5.69367 4.21749V17.6426H14.5562C14.8142 17.6426 15.0229 17.8514 15.0229 18.1094V19.8795C15.0229 20.1819 15.1404 20.4574 15.3325 20.663C15.5254 20.8694 15.7937 21.0059 16.0922 21.0265C16.0985 21.0273 16.105 21.0273 16.1113 21.0273ZM4.09118 21.0273H14.4373C14.2174 20.6979 14.0889 20.3026 14.0889 19.8787V18.5753H4.0904C3.75385 18.5753 3.44743 18.7135 3.22439 18.9357C3.00212 19.158 2.86402 19.4644 2.86402 19.8017C2.86402 20.1383 3.00214 20.4447 3.22439 20.6677C3.44666 20.89 3.75306 21.0281 4.0904 21.0281L4.09118 21.0273ZM18.2538 8.51175H20.7057V4.20618C20.7057 3.86962 20.5675 3.5632 20.3453 3.34016C20.123 3.11789 19.8166 2.97979 19.4793 2.97979C19.1427 2.97979 18.8363 3.11791 18.6133 3.34016C18.391 3.56243 18.2529 3.86962 18.2529 4.20618L18.2538 8.51175Z" fill="#FFBF00" />
                                                <path d="M6.61448 1.01461H20.011L20.0617 1.01949C20.6953 1.08429 21.3934 1.23654 21.9211 1.78903C22.4254 2.31718 22.6089 3.04314 22.7092 3.79293L22.719 3.8652L22.6282 10.4052L21.6653 10.4287L19.4026 10.4814V20.7002L19.3713 20.8213C19.2069 21.4673 18.9238 22.1546 18.2239 22.5693C17.6009 22.9382 16.8312 22.972 16.0432 22.9267H3.92307L3.90061 22.9257C3.26833 22.8972 2.51069 22.803 1.96214 22.2754C1.39821 21.7329 1.29464 20.9716 1.2844 20.292C1.25726 19.3407 1.3845 18.4019 2.08714 17.7089C2.5511 17.2514 3.17255 17.0031 3.8635 16.8466V3.69235L3.86643 3.65035C3.89008 3.36736 3.91937 3.05127 3.98167 2.76071C4.04505 2.46506 4.15765 2.11734 4.40159 1.80563C4.93775 1.12062 5.77717 0.988623 6.61448 1.01461ZM6.55198 3.01363C6.19606 3.00259 6.03306 3.03791 5.96995 3.05953C5.9616 3.08211 5.94953 3.12007 5.93675 3.17965C5.90657 3.32039 5.88672 3.50343 5.8635 3.77633V18.5566L4.99925 18.6748C3.98634 18.8134 3.63242 18.9938 3.49143 19.1328C3.41331 19.2098 3.29442 19.3805 3.28147 19.9609L3.28343 20.2353V20.2509C3.28843 20.633 3.33544 20.7848 3.35471 20.832C3.36888 20.8383 3.39209 20.8492 3.42893 20.8593C3.53675 20.8889 3.70748 20.914 3.97971 20.9267H16.092L16.1223 20.9287C16.8912 20.9755 17.1325 20.8911 17.2043 20.8486C17.2102 20.8453 17.2947 20.8128 17.4026 20.4394V9.50485H18.4309L18.4074 8.50582L20.6545 8.45113L20.716 3.99215C20.6272 3.37425 20.5139 3.21197 20.4748 3.17086C20.4585 3.15373 20.3765 3.0677 19.8987 3.01461H6.56761L6.55198 3.01363Z" fill="#FFBF00" />
                                                <path d="M15.1142 14.0767C15.8845 14.0767 16.3656 13.2423 15.9796 12.5756L12.3471 6.30126C11.9619 5.63598 11.0014 5.63598 10.6162 6.30126L6.98368 12.5756C6.59771 13.2423 7.07877 14.0767 7.8491 14.0767H15.1142ZM10.9937 12.6129V11.637H11.9696V12.6129H10.9937ZM10.9937 10.6614V8.70976H11.9696V10.6614H10.9937Z" fill="#FFBF00" />
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
                                                <path d="M18.2537 9.44529V19.7906C18.2537 20.3883 18.01 20.9305 17.6163 21.3242C17.1972 21.7433 16.6527 21.9616 16.0613 21.9616H4.09195C3.4974 21.9616 2.95764 21.7187 2.5663 21.3274C2.17496 20.9368 1.93207 20.3963 1.93207 19.8017C1.93207 19.2072 2.17496 18.6674 2.5663 18.2761C2.95764 17.8847 3.49819 17.6418 4.09195 17.6418H4.76111V4.2167C4.76111 3.61899 5.0048 3.07683 5.39852 2.68311C5.79144 2.29019 6.33439 2.04571 6.93211 2.04571H19.481C20.0756 2.04571 20.6153 2.2886 21.0067 2.67994C21.398 3.07049 21.6409 3.61104 21.6409 4.20559V8.97854C21.6409 9.23651 21.4321 9.44529 21.1741 9.44529H18.2537ZM16.1113 21.0273C16.44 21.0202 16.7384 20.8821 16.9559 20.6638C17.1806 20.4391 17.3195 20.1304 17.3195 19.7906V4.20557C17.3195 3.75073 17.4616 3.32844 17.7037 2.97998H6.93119C6.59145 2.97998 6.28188 3.11968 6.05803 3.34433C5.83338 3.56898 5.69367 3.87775 5.69367 4.21749V17.6426H14.5562C14.8142 17.6426 15.0229 17.8514 15.0229 18.1094V19.8795C15.0229 20.1819 15.1404 20.4574 15.3325 20.663C15.5254 20.8694 15.7937 21.0059 16.0922 21.0265C16.0985 21.0273 16.105 21.0273 16.1113 21.0273ZM4.09118 21.0273H14.4373C14.2174 20.6979 14.0889 20.3026 14.0889 19.8787V18.5753H4.0904C3.75385 18.5753 3.44743 18.7135 3.22439 18.9357C3.00212 19.158 2.86402 19.4644 2.86402 19.8017C2.86402 20.1383 3.00214 20.4447 3.22439 20.6677C3.44666 20.89 3.75306 21.0281 4.0904 21.0281L4.09118 21.0273ZM18.2538 8.51175H20.7057V4.20618C20.7057 3.86962 20.5675 3.5632 20.3453 3.34016C20.123 3.11789 19.8166 2.97979 19.4793 2.97979C19.1427 2.97979 18.8363 3.11791 18.6133 3.34016C18.391 3.56243 18.2529 3.86962 18.2529 4.20618L18.2538 8.51175Z" fill="#FFBF00" />
                                                <path d="M6.61448 1.01461H20.011L20.0617 1.01949C20.6953 1.08429 21.3934 1.23654 21.9211 1.78903C22.4254 2.31718 22.6089 3.04314 22.7092 3.79293L22.719 3.8652L22.6282 10.4052L21.6653 10.4287L19.4026 10.4814V20.7002L19.3713 20.8213C19.2069 21.4673 18.9238 22.1546 18.2239 22.5693C17.6009 22.9382 16.8312 22.972 16.0432 22.9267H3.92307L3.90061 22.9257C3.26833 22.8972 2.51069 22.803 1.96214 22.2754C1.39821 21.7329 1.29464 20.9716 1.2844 20.292C1.25726 19.3407 1.3845 18.4019 2.08714 17.7089C2.5511 17.2514 3.17255 17.0031 3.8635 16.8466V3.69235L3.86643 3.65035C3.89008 3.36736 3.91937 3.05127 3.98167 2.76071C4.04505 2.46506 4.15765 2.11734 4.40159 1.80563C4.93775 1.12062 5.77717 0.988623 6.61448 1.01461ZM6.55198 3.01363C6.19606 3.00259 6.03306 3.03791 5.96995 3.05953C5.9616 3.08211 5.94953 3.12007 5.93675 3.17965C5.90657 3.32039 5.88672 3.50343 5.8635 3.77633V18.5566L4.99925 18.6748C3.98634 18.8134 3.63242 18.9938 3.49143 19.1328C3.41331 19.2098 3.29442 19.3805 3.28147 19.9609L3.28343 20.2353V20.2509C3.28843 20.633 3.33544 20.7848 3.35471 20.832C3.36888 20.8383 3.39209 20.8492 3.42893 20.8593C3.53675 20.8889 3.70748 20.914 3.97971 20.9267H16.092L16.1223 20.9287C16.8912 20.9755 17.1325 20.8911 17.2043 20.8486C17.2102 20.8453 17.2947 20.8128 17.4026 20.4394V9.50485H18.4309L18.4074 8.50582L20.6545 8.45113L20.716 3.99215C20.6272 3.37425 20.5139 3.21197 20.4748 3.17086C20.4585 3.15373 20.3765 3.0677 19.8987 3.01461H6.56761L6.55198 3.01363Z" fill="#FFBF00" />
                                                <path d="M11.7246 15.051C14.2099 15.051 16.2246 13.0363 16.2246 10.551C16.2246 8.06574 14.2099 6.05103 11.7246 6.05103C9.23936 6.05103 7.22464 8.06574 7.22464 10.551C7.22464 13.0363 9.23936 15.051 11.7246 15.051ZM11.2367 13.3012V12.3254H12.2125V13.3012H11.2367ZM11.2246 11.3498V8.34976H12.2246V11.3498H11.2246Z" fill="#FFBF00" />
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
                                                <path d="M2.79175 11.9453L2.79176 18.4246C2.79176 18.9769 3.23947 19.4246 3.79175 19.4246L7.08893 19.4246C7.64122 19.4247 8.08894 18.9769 8.08894 18.4246V15.8948H15.796V18.3863C15.796 18.9386 16.2437 19.3863 16.796 19.3863H20.2082C20.7605 19.3863 21.2082 18.9386 21.2082 18.3863L21.2082 11.7919C21.2082 11.2396 20.7576 10.7918 20.2053 10.7928C13.853 10.8053 10.7726 10.9331 3.79491 10.9445C3.24262 10.9454 2.79175 11.393 2.79175 11.9453Z" stroke="#FFBF00" />
                                                <path d="M11.9915 2.0957C13.4182 2.0957 14.5754 3.25203 14.5755 4.67871C14.5755 4.81198 14.5627 4.94247 14.5433 5.07031H14.2395C14.2616 4.94298 14.2747 4.81234 14.2747 4.67871C14.2746 3.41772 13.2525 2.39551 11.9915 2.39551C10.7306 2.39571 9.70839 3.41784 9.70829 4.67871C9.70831 4.81238 9.72237 4.94295 9.74443 5.07031H9.44169C9.42221 4.94244 9.40851 4.81201 9.40849 4.67871C9.40859 3.25215 10.565 2.0959 11.9915 2.0957Z" fill="#FFBF00" />
                                                <path d="M13.6897 6.2002C14.053 5.79588 14.2756 5.2621 14.2757 4.67578C14.2755 3.41499 13.2533 2.39278 11.9925 2.39258C10.7315 2.39258 9.70947 3.41487 9.70927 4.67578C9.70927 4.69527 9.71171 4.715 9.7122 4.73437L9.41044 4.64453C9.4274 3.23234 10.5763 2.0918 11.9925 2.0918C13.4189 2.09199 14.5753 3.24931 14.5755 4.67578C14.5754 5.32129 14.337 5.91053 13.9456 6.36328L13.6897 6.2002Z" fill="#FFBF00" />
                                                <path d="M14.303 4.14817C14.303 3.91868 14.2771 3.72498 14.5066 3.72498C14.7361 3.72498 14.9221 3.91101 14.9221 4.1405V4.65576C14.9221 4.88525 14.7361 5.07129 14.5066 5.07129C14.2771 5.07129 14.303 4.89292 14.303 4.66343V4.14817Z" fill="#FFBF00" />
                                                <path d="M13.87 5.97283C13.9383 5.88721 13.9822 5.8039 14.1049 5.90184C14.2275 5.99977 14.2715 6.14858 14.2031 6.2342L14.0496 6.42644C13.9812 6.51206 13.8264 6.50207 13.7037 6.40413C13.5811 6.3062 13.6481 6.25069 13.7164 6.16507L13.87 5.97283Z" fill="#FFBF00" />
                                                <path d="M9.69706 4.14817C9.69706 3.91868 9.72294 3.72498 9.49345 3.72498C9.26396 3.72498 9.07792 3.91101 9.07792 4.1405V4.65576C9.07792 4.88525 9.26396 5.07129 9.49345 5.07129C9.72294 5.07129 9.69706 4.89292 9.69706 4.66343V4.14817Z" fill="#FFBF00" />
                                                <path d="M11.9921 7.31042C13.7919 7.31042 15.2875 8.65611 15.5126 10.3915H8.48724C8.71044 8.65434 10.1946 7.31051 11.9921 7.31042Z" stroke="#FFBF00" />
                                                <path d="M11.9603 3.16516C12.8313 3.16516 13.5188 3.84751 13.5188 4.66516C13.5186 5.48259 12.8311 6.16418 11.9603 6.16418C11.0894 6.16418 10.4019 5.48259 10.4017 4.66516C10.4017 3.84751 11.0892 3.16516 11.9603 3.16516Z" stroke="#FFBF00" />
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