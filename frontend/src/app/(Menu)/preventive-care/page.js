"use client";

import React from "react";
import Link from "next/link";

export default function PreventiveCarePage() {
  return (
    <main id="maincontent" className="page-main-full-width">
      <a id="contentarea" tabIndex="-1"></a>
      <div className="columns">
        <div className="column main">
          <div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true">
            
            {/* --- HERO SECTION --- */}
            <section className="care-hero-section">
              <div className="container">
                <div className="mb-2">
                  <img 
                    className="img-fluid" 
                    src="https://hbgsolo.com/media/.renditions/wysiwyg/book.png" 
                    alt="Preventive Care Icon" 
                  />
                </div>
                <div className="care-heading">
                  <p>Preventive Care Benefits </p>
                  <p>with Solo Health Collective</p>
                </div>
                <div className="sub-heading">
                  <p className="title-one">Solo Health Collective offers 100% coverage for preventive care*</p>
                  <p className="title-two">
                    with the deductible waived — so you can stay proactive with your health at no extra cost. 
                    These benefits are part of your self-funded plan and aligned with{" "}
                    <a 
                      href="https://www.healthcare.gov/coverage/preventive-care-benefits/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="highlight-text"
                    >
                      guidelines under the Affordable Care Act (ACA)
                    </a>.
                  </p>
                  <p className="title-two mt-4">
                    *Out-of-network preventive care may incur extra costs. To find in-network providers in your area{" "}
                    <Link className="highlight-text fw-normal fs-16" href="/our-network">
                      click here.
                    </Link> 
                    Questions? Contact our support team for more information.
                  </p>
                </div>
              </div>
            </section>

            {/* --- ACCORDION SECTION --- */}
            <section className="care-acordian">
              <div className="container">
                <div className="breadcrumbs">
                  <div>
                    <img src="https://hbgsolo.com/media/.renditions/wysiwyg/breadcrumb-arrow.png" alt="arrow" />
                  </div>
                  <div>
                    <Link href="/">Home</Link> <span>/</span>
                    <a>Preventive Care Benefits with Solo Health Collective</a>
                  </div>
                </div>

                <div className="accordion custom-care-accordion" id="faqAccordion">
                  
                  {/* Item 1: What's Covered */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" 
                        aria-expanded="false" 
                        aria-controls="collapseOne"
                      >
                        <div className="accordion-header-content">
                          <span className="icon">
                             <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4673 9.44529V19.7906C18.4673 20.3883 18.2236 20.9305 17.8299 21.3242C17.4108 21.7433 16.8662 21.9616 16.2749 21.9616H4.30551C3.71096 21.9616 3.1712 21.7187 2.77986 21.3274C2.38853 20.9368 2.14563 20.3963 2.14563 19.8017C2.14563 19.2072 2.38853 18.6674 2.77986 18.2761C3.1712 17.8847 3.71176 17.6418 4.30551 17.6418H4.97467V4.2167C4.97467 3.61899 5.21836 3.07683 5.61208 2.68311C6.005 2.29019 6.54795 2.04571 7.14567 2.04571H19.6946C20.2891 2.04571 20.8289 2.2886 21.2202 2.67994C21.6116 3.07049 21.8545 3.61104 21.8545 4.20559V8.97854C21.8545 9.23651 21.6457 9.44529 21.3877 9.44529H18.4673ZM7.35201 15.7559C7.09403 15.7559 6.88526 15.5472 6.88526 15.2892C6.88526 15.0312 7.09401 14.8224 7.35201 14.8224H16.0891C16.3471 14.8224 16.5559 15.0312 16.5559 15.2892C16.5559 15.5472 16.3471 15.7559 16.0891 15.7559H7.35201ZM11.721 12.01C12.3925 11.6425 14.5214 10.3144 14.5214 8.25063V6.22171C13.6776 5.81371 12.7013 5.61051 11.721 5.61051C10.7407 5.61051 9.76352 5.81451 8.92057 6.22171V8.25063C8.92057 10.3144 11.0502 11.6418 11.721 12.01ZM15.4549 8.25063C15.4549 11.2868 11.9313 12.9474 11.9217 12.9531C11.7995 13.0118 11.6527 13.0166 11.5209 12.9531C11.5106 12.9483 7.9877 11.2869 7.9877 8.25063V5.93832C7.9877 5.77401 8.07581 5.61445 8.2298 5.52953C9.26728 4.96038 10.4968 4.67701 11.7217 4.67701C12.9354 4.67701 14.1539 4.95642 15.1858 5.51524C15.3454 5.58906 15.4557 5.751 15.4557 5.93832L15.4549 8.25063ZM16.3249 21.0273C16.6535 21.0202 16.952 20.8821 17.1695 20.6638C17.3941 20.4391 17.533 20.1304 17.533 19.7906V4.20557C17.533 3.75073 17.6751 3.32844 17.9172 2.97998H7.14475C6.80501 2.97998 6.49544 3.11968 6.27159 3.34433C6.04694 3.56898 5.90724 3.87775 5.90724 4.21749V17.6426H14.7697C15.0277 17.6426 15.2365 17.8514 15.2365 18.1094V19.8795C15.2365 20.1819 15.354 20.4574 15.5461 20.663C15.739 20.8694 16.0072 21.0059 16.3057 21.0265C16.3121 21.0273 16.3186 21.0273 16.3249 21.0273ZM4.30474 21.0273H14.6509C14.431 20.6979 14.3024 20.3026 14.3024 19.8787V18.5753H4.30397C3.96741 18.5753 3.661 18.7135 3.43795 18.9357C3.21569 19.158 3.07758 19.4644 3.07758 19.8017C3.07758 20.1383 3.2157 20.4447 3.43795 20.6677C3.66022 20.89 3.96662 21.0281 4.30397 21.0281L4.30474 21.0273ZM18.4673 8.51175H20.9192V4.20618C20.9192 3.86962 20.7811 3.5632 20.5589 3.34016C20.3366 3.11789 20.0302 2.97979 19.6929 2.97979C19.3563 2.97979 19.0499 3.11791 18.8268 3.34016C18.6046 3.56243 18.4665 3.86962 18.4665 4.20618L18.4673 8.51175Z" fill="#FFBF00"/>
<path d="M12.1642 6.65008C12.1642 6.40427 11.9649 6.205 11.7191 6.205C11.4733 6.205 11.2741 6.40427 11.2741 6.65008V7.98532H9.93881C9.693 7.98532 9.49373 8.18459 9.49373 8.4304C9.49373 8.67621 9.693 8.87548 9.93881 8.87548H11.2741V10.2107C11.2741 10.4565 11.4733 10.6558 11.7191 10.6558C11.9649 10.6558 12.1642 10.4565 12.1642 10.2107L12.1642 8.87548H13.4995C13.7453 8.87548 13.9445 8.67621 13.9445 8.4304C13.9445 8.18459 13.7453 7.98532 13.4995 7.98532H12.1642V6.65008Z" fill="#FFBF00"/>
<path d="M6.82804 1.01461H20.2245L20.2753 1.01949C20.9089 1.08429 21.607 1.23654 22.1347 1.78903C22.639 2.31718 22.8225 3.04314 22.9228 3.79293L22.9325 3.8652L22.8417 10.4052L21.8788 10.4287L19.6161 10.4814V20.7002L19.5849 20.8213C19.4204 21.4673 19.1374 22.1546 18.4374 22.5693C17.8145 22.9382 17.0447 22.972 16.2568 22.9267H4.13664L4.11417 22.9257C3.48189 22.8972 2.72425 22.803 2.1757 22.2754C1.61177 21.7329 1.5082 20.9716 1.49796 20.292C1.47082 19.3407 1.59806 18.4019 2.3007 17.7089C2.76467 17.2514 3.38611 17.0031 4.07707 16.8466V3.69235L4.07999 3.65035C4.10364 3.36736 4.13294 3.05127 4.19523 2.76071C4.25862 2.46506 4.37121 2.11734 4.61515 1.80563C5.15131 1.12062 5.99073 0.988623 6.82804 1.01461ZM6.76554 3.01363C6.40963 3.00259 6.24663 3.03791 6.18351 3.05953C6.17516 3.08211 6.16309 3.12007 6.15031 3.17965C6.12013 3.32039 6.10028 3.50343 6.07707 3.77633V18.5566L5.21281 18.6748C4.1999 18.8134 3.84599 18.9938 3.70499 19.1328C3.62687 19.2098 3.50798 19.3805 3.49503 19.9609L3.49699 20.2353V20.2509C3.50199 20.633 3.549 20.7848 3.56828 20.832C3.58245 20.8383 3.60565 20.8492 3.64249 20.8593C3.75031 20.8889 3.92104 20.914 4.19328 20.9267H16.3056L16.3359 20.9287C17.1048 20.9755 17.3461 20.8911 17.4179 20.8486C17.4238 20.8453 17.5082 20.8128 17.6161 20.4394V9.50485H18.6444L18.621 8.50582L20.8681 8.45113L20.9296 3.99215C20.8408 3.37425 20.7275 3.21197 20.6884 3.17086C20.672 3.15373 20.5901 3.0677 20.1122 3.01461H6.78117L6.76554 3.01363Z" fill="#FFBF00"/>
</svg>
                          </span>
                          <div>
                            <h3>What’s Covered</h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p className="text-primary fs-16 MB-32 fw-normal">You’re covered for the following services with no cost to you when performed by an in-network provider:</p>
                        <p className="text-primary fs-16 m-0 mb-1 fw-bold" style={{ color: "#262965" }}>Routine Screenings & Exams</p>
                        <ul>
                          <li>Annual physical exams</li>
                          <li>Well-woman visits</li>
                          <li>Well-baby and well-child checkups</li>
                          <li>Pediatric vision and hearing screenings (age-appropriate)</li>
                          <li>Routine gynecological exams and pap tests</li>
                          <li>Routine prostate exams and PSA testing</li>
                          <li>For more information please visit: <a href="https://www.healthcare.gov/coverage/preventive-care-benefits/" target="_blank" rel="noopener noreferrer" className="highlight-text">Healthcare.gov Preventive Care Guidelines</a></li>
                        </ul>
                        <div className="M-32">
                          <p className="text-primary fs-16 m-0 mb-1 fw-bold" style={{ color: "#262965" }}>Immunizations (All Ages)</p>
                          <ul>
                            <li>Flu</li>
                            <li>Pneumonia</li>
                            <li>COVID-19</li>
                            <li>MMR, HPV, Tdap, Hepatitis A/B, Varicella, and <Link className="highlight-text" href="/resource-articles">more</Link></li>
                            <li>All CDC-recommended pediatric immunizations</li>
                          </ul>
                        </div>
                        <div className="M-32">
                          <p className="text-primary fs-16 m-0 mb-1 fw-bold" style={{ color: "#262965" }}>Screening Tests</p>
                          <ul>
                            <li>Routine lab tests and diagnostic imaging when part of a preventive visit</li>
                            <li>Routine mammograms (1 per year for members 40+)</li>
                            <li>Colonoscopies (1 every 10 years for adults 45–75)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 2: $0 Preventive Medications */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo" 
                        aria-expanded="false" 
                        aria-controls="collapseTwo"
                      >
                        <div className="accordion-header-content">
                          <span className="icon">
                           <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2537 9.44529V19.7906C18.2537 20.3883 18.01 20.9305 17.6163 21.3242C17.1972 21.7433 16.6527 21.9616 16.0613 21.9616H4.09195C3.4974 21.9616 2.95764 21.7187 2.5663 21.3274C2.17496 20.9368 1.93207 20.3963 1.93207 19.8017C1.93207 19.2072 2.17496 18.6674 2.5663 18.2761C2.95764 17.8847 3.49819 17.6418 4.09195 17.6418H4.76111V4.2167C4.76111 3.61899 5.0048 3.07683 5.39852 2.68311C5.79144 2.29019 6.33439 2.04571 6.93211 2.04571H19.481C20.0756 2.04571 20.6153 2.2886 21.0067 2.67994C21.398 3.07049 21.6409 3.61104 21.6409 4.20559V8.97854C21.6409 9.23651 21.4321 9.44529 21.1741 9.44529H18.2537ZM16.1113 21.0273C16.44 21.0202 16.7384 20.8821 16.9559 20.6638C17.1806 20.4391 17.3195 20.1304 17.3195 19.7906V4.20557C17.3195 3.75073 17.4616 3.32844 17.7037 2.97998H6.93119C6.59145 2.97998 6.28188 3.11968 6.05803 3.34433C5.83338 3.56898 5.69367 3.87775 5.69367 4.21749V17.6426H14.5562C14.8142 17.6426 15.0229 17.8514 15.0229 18.1094V19.8795C15.0229 20.1819 15.1404 20.4574 15.3325 20.663C15.5254 20.8694 15.7937 21.0059 16.0922 21.0265C16.0985 21.0273 16.105 21.0273 16.1113 21.0273ZM4.09118 21.0273H14.4373C14.2174 20.6979 14.0889 20.3026 14.0889 19.8787V18.5753H4.0904C3.75385 18.5753 3.44743 18.7135 3.22439 18.9357C3.00212 19.158 2.86402 19.4644 2.86402 19.8017C2.86402 20.1383 3.00214 20.4447 3.22439 20.6677C3.44666 20.89 3.75306 21.0281 4.0904 21.0281L4.09118 21.0273ZM18.2538 8.51175H20.7057V4.20618C20.7057 3.86962 20.5675 3.5632 20.3453 3.34016C20.123 3.11789 19.8166 2.97979 19.4793 2.97979C19.1427 2.97979 18.8363 3.11791 18.6133 3.34016C18.391 3.56243 18.2529 3.86962 18.2529 4.20618L18.2538 8.51175Z" fill="#FFBF00"/>
<path d="M6.61448 1.01461H20.011L20.0617 1.01949C20.6953 1.08429 21.3934 1.23654 21.9211 1.78903C22.4254 2.31718 22.6089 3.04314 22.7092 3.79293L22.719 3.8652L22.6282 10.4052L21.6653 10.4287L19.4026 10.4814V20.7002L19.3713 20.8213C19.2069 21.4673 18.9238 22.1546 18.2239 22.5693C17.6009 22.9382 16.8312 22.972 16.0432 22.9267H3.92307L3.90061 22.9257C3.26833 22.8972 2.51069 22.803 1.96214 22.2754C1.39821 21.7329 1.29464 20.9716 1.2844 20.292C1.25726 19.3407 1.3845 18.4019 2.08714 17.7089C2.5511 17.2514 3.17255 17.0031 3.8635 16.8466V3.69235L3.86643 3.65035C3.89008 3.36736 3.91937 3.05127 3.98167 2.76071C4.04505 2.46506 4.15765 2.11734 4.40159 1.80563C4.93775 1.12062 5.77717 0.988623 6.61448 1.01461ZM6.55198 3.01363C6.19606 3.00259 6.03306 3.03791 5.96995 3.05953C5.9616 3.08211 5.94953 3.12007 5.93675 3.17965C5.90657 3.32039 5.88672 3.50343 5.8635 3.77633V18.5566L4.99925 18.6748C3.98634 18.8134 3.63242 18.9938 3.49143 19.1328C3.41331 19.2098 3.29442 19.3805 3.28147 19.9609L3.28343 20.2353V20.2509C3.28843 20.633 3.33544 20.7848 3.35471 20.832C3.36888 20.8383 3.39209 20.8492 3.42893 20.8593C3.53675 20.8889 3.70748 20.914 3.97971 20.9267H16.092L16.1223 20.9287C16.8912 20.9755 17.1325 20.8911 17.2043 20.8486C17.2102 20.8453 17.2947 20.8128 17.4026 20.4394V9.50485H18.4309L18.4074 8.50582L20.6545 8.45113L20.716 3.99215C20.6272 3.37425 20.5139 3.21197 20.4748 3.17086C20.4585 3.15373 20.3765 3.0677 19.8987 3.01461H6.56761L6.55198 3.01363Z" fill="#FFBF00"/>
<path  d="M15.1142 14.0767C15.8845 14.0767 16.3656 13.2423 15.9796 12.5756L12.3471 6.30126C11.9619 5.63598 11.0014 5.63598 10.6162 6.30126L6.98368 12.5756C6.59771 13.2423 7.07877 14.0767 7.8491 14.0767H15.1142ZM10.9937 12.6129V11.637H11.9696V12.6129H10.9937ZM10.9937 10.6614V8.70976H11.9696V10.6614H10.9937Z" fill="#FFBF00"/>
</svg>
                          </span>
                          <div>
                            <h3>$0 Preventive Medications</h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p className="text-primary fs-16 MB-32 fw-normal">
                          Under Tier 1 of the{" "}
                          <a target="_blank" rel="noreferrer" href="https://hbgsolo.com/pub/media/Solo%20Rx%20Formulary.pdf" className="highlight-text">
                            prescription drug plan,
                          </a> members have <strong>no cost-sharing</strong> on approved ACA preventive medications and supplements with a prescription, such as:
                        </p>
                        <ul>
                          <li>Statins (for cardiovascular prevention, ages 40–75 with risk factors)</li>
                          <li>Aspirin (for preeclampsia prevention in pregnancy)</li>
                          <li>Folic acid (for women planning pregnancy)</li>
                          <li>HIV PrEP medications</li>
                          <li>Fluoride for children</li>
                          <li>Smoking cessation aids (nicotine patch, gum, etc.)</li>
                        </ul>
                        <p className="text-primary fs-16 MT-32 fw-normal">
                          Full formulary details are available{" "}
                          <a href="https://hbgsolo.com/pub/media/Solo%20Rx%20Formulary.pdf" target="_blank" rel="noreferrer" className="highlight-text">here</a> or on your member portal.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 3: How to Access */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseThree" 
                        aria-expanded="false" 
                        aria-controls="collapseThree"
                      >
                        <div className="accordion-header-content">
                          <div className="icon">
                             <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2537 9.44529V19.7906C18.2537 20.3883 18.01 20.9305 17.6163 21.3242C17.1972 21.7433 16.6527 21.9616 16.0613 21.9616H4.09195C3.4974 21.9616 2.95764 21.7187 2.5663 21.3274C2.17496 20.9368 1.93207 20.3963 1.93207 19.8017C1.93207 19.2072 2.17496 18.6674 2.5663 18.2761C2.95764 17.8847 3.49819 17.6418 4.09195 17.6418H4.76111V4.2167C4.76111 3.61899 5.0048 3.07683 5.39852 2.68311C5.79144 2.29019 6.33439 2.04571 6.93211 2.04571H19.481C20.0756 2.04571 20.6153 2.2886 21.0067 2.67994C21.398 3.07049 21.6409 3.61104 21.6409 4.20559V8.97854C21.6409 9.23651 21.4321 9.44529 21.1741 9.44529H18.2537ZM16.1113 21.0273C16.44 21.0202 16.7384 20.8821 16.9559 20.6638C17.1806 20.4391 17.3195 20.1304 17.3195 19.7906V4.20557C17.3195 3.75073 17.4616 3.32844 17.7037 2.97998H6.93119C6.59145 2.97998 6.28188 3.11968 6.05803 3.34433C5.83338 3.56898 5.69367 3.87775 5.69367 4.21749V17.6426H14.5562C14.8142 17.6426 15.0229 17.8514 15.0229 18.1094V19.8795C15.0229 20.1819 15.1404 20.4574 15.3325 20.663C15.5254 20.8694 15.7937 21.0059 16.0922 21.0265C16.0985 21.0273 16.105 21.0273 16.1113 21.0273ZM4.09118 21.0273H14.4373C14.2174 20.6979 14.0889 20.3026 14.0889 19.8787V18.5753H4.0904C3.75385 18.5753 3.44743 18.7135 3.22439 18.9357C3.00212 19.158 2.86402 19.4644 2.86402 19.8017C2.86402 20.1383 3.00214 20.4447 3.22439 20.6677C3.44666 20.89 3.75306 21.0281 4.0904 21.0281L4.09118 21.0273ZM18.2538 8.51175H20.7057V4.20618C20.7057 3.86962 20.5675 3.5632 20.3453 3.34016C20.123 3.11789 19.8166 2.97979 19.4793 2.97979C19.1427 2.97979 18.8363 3.11791 18.6133 3.34016C18.391 3.56243 18.2529 3.86962 18.2529 4.20618L18.2538 8.51175Z" fill="#FFBF00"/>
<path d="M6.61448 1.01461H20.011L20.0617 1.01949C20.6953 1.08429 21.3934 1.23654 21.9211 1.78903C22.4254 2.31718 22.6089 3.04314 22.7092 3.79293L22.719 3.8652L22.6282 10.4052L21.6653 10.4287L19.4026 10.4814V20.7002L19.3713 20.8213C19.2069 21.4673 18.9238 22.1546 18.2239 22.5693C17.6009 22.9382 16.8312 22.972 16.0432 22.9267H3.92307L3.90061 22.9257C3.26833 22.8972 2.51069 22.803 1.96214 22.2754C1.39821 21.7329 1.29464 20.9716 1.2844 20.292C1.25726 19.3407 1.3845 18.4019 2.08714 17.7089C2.5511 17.2514 3.17255 17.0031 3.8635 16.8466V3.69235L3.86643 3.65035C3.89008 3.36736 3.91937 3.05127 3.98167 2.76071C4.04505 2.46506 4.15765 2.11734 4.40159 1.80563C4.93775 1.12062 5.77717 0.988623 6.61448 1.01461ZM6.55198 3.01363C6.19606 3.00259 6.03306 3.03791 5.96995 3.05953C5.9616 3.08211 5.94953 3.12007 5.93675 3.17965C5.90657 3.32039 5.88672 3.50343 5.8635 3.77633V18.5566L4.99925 18.6748C3.98634 18.8134 3.63242 18.9938 3.49143 19.1328C3.41331 19.2098 3.29442 19.3805 3.28147 19.9609L3.28343 20.2353V20.2509C3.28843 20.633 3.33544 20.7848 3.35471 20.832C3.36888 20.8383 3.39209 20.8492 3.42893 20.8593C3.53675 20.8889 3.70748 20.914 3.97971 20.9267H16.092L16.1223 20.9287C16.8912 20.9755 17.1325 20.8911 17.2043 20.8486C17.2102 20.8453 17.2947 20.8128 17.4026 20.4394V9.50485H18.4309L18.4074 8.50582L20.6545 8.45113L20.716 3.99215C20.6272 3.37425 20.5139 3.21197 20.4748 3.17086C20.4585 3.15373 20.3765 3.0677 19.8987 3.01461H6.56761L6.55198 3.01363Z" fill="#FFBF00"/>
<path  d="M11.7246 15.051C14.2099 15.051 16.2246 13.0363 16.2246 10.551C16.2246 8.06574 14.2099 6.05103 11.7246 6.05103C9.23936 6.05103 7.22464 8.06574 7.22464 10.551C7.22464 13.0363 9.23936 15.051 11.7246 15.051ZM11.2367 13.3012V12.3254H12.2125V13.3012H11.2367ZM11.2246 11.3498V8.34976H12.2246V11.3498H11.2246Z" fill="#FFBF00"/>
</svg>
                          </div>
                          <div>
                            <h3>How to Access Preventive Care</h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                      <div className="accordion-body">
                        <div className="d-flex gap-3 flex-column">
                          <div className="number-points">
                            <div className="d-flex gap-2">
                              <h6>1.</h6>
                              <div className="d-flex flex-column">
                                <p>Use the Multiplan PHCS Network</p>
                                <p className="fw-normal">Find providers through the <a className="highlight-text" href="https://providersearch.multiplan.com/" target="_blank" rel="noreferrer">Multiplan PHCS</a> directory to avoid unexpected costs. You can find in-network providers by following <Link className="highlight-text" href="/our-network">these instructions</Link></p>
                              </div>
                            </div>
                          </div>
                          <div className="number-points">
                            <div className="d-flex gap-2">
                              <h6>2.</h6>
                              <div className="d-flex flex-column">
                                <p>Bring Your ID Card</p>
                                <p className="fw-normal">Share your digital or physical ID card at your visit.</p>
                              </div>
                            </div>
                          </div>
                          <div className="number-points">
                            <div className="d-flex gap-2">
                              <h6>3.</h6>
                              <div className="d-flex flex-column">
                                <p>Request Preventive Services </p>
                                <p className="fw-normal MB-32">Confirm with your provider that your visit and tests are coded as preventive to ensure full coverage and avoid any surprises. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 4: Not Considered Preventive */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseFour" 
                        aria-expanded="false" 
                        aria-controls="collapseFour"
                      >
                        <div className="accordion-header-content">
                          <div className="icon">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2537 9.44529V19.7906C18.2537 20.3883 18.01 20.9305 17.6163 21.3242C17.1972 21.7433 16.6527 21.9616 16.0613 21.9616H4.09195C3.4974 21.9616 2.95764 21.7187 2.5663 21.3274C2.17496 20.9368 1.93207 20.3963 1.93207 19.8017C1.93207 19.2072 2.17496 18.6674 2.5663 18.2761C2.95764 17.8847 3.49819 17.6418 4.09195 17.6418H4.76111V4.2167C4.76111 3.61899 5.0048 3.07683 5.39852 2.68311C5.79144 2.29019 6.33439 2.04571 6.93211 2.04571H19.481C20.0756 2.04571 20.6153 2.2886 21.0067 2.67994C21.398 3.07049 21.6409 3.61104 21.6409 4.20559V8.97854C21.6409 9.23651 21.4321 9.44529 21.1741 9.44529H18.2537ZM16.1113 21.0273C16.44 21.0202 16.7384 20.8821 16.9559 20.6638C17.1806 20.4391 17.3195 20.1304 17.3195 19.7906V4.20557C17.3195 3.75073 17.4616 3.32844 17.7037 2.97998H6.93119C6.59145 2.97998 6.28188 3.11968 6.05803 3.34433C5.83338 3.56898 5.69367 3.87775 5.69367 4.21749V17.6426H14.5562C14.8142 17.6426 15.0229 17.8514 15.0229 18.1094V19.8795C15.0229 20.1819 15.1404 20.4574 15.3325 20.663C15.5254 20.8694 15.7937 21.0059 16.0922 21.0265C16.0985 21.0273 16.105 21.0273 16.1113 21.0273ZM4.09118 21.0273H14.4373C14.2174 20.6979 14.0889 20.3026 14.0889 19.8787V18.5753H4.0904C3.75385 18.5753 3.44743 18.7135 3.22439 18.9357C3.00212 19.158 2.86402 19.4644 2.86402 19.8017C2.86402 20.1383 3.00214 20.4447 3.22439 20.6677C3.44666 20.89 3.75306 21.0281 4.0904 21.0281L4.09118 21.0273ZM18.2538 8.51175H20.7057V4.20618C20.7057 3.86962 20.5675 3.5632 20.3453 3.34016C20.123 3.11789 19.8166 2.97979 19.4793 2.97979C19.1427 2.97979 18.8363 3.11791 18.6133 3.34016C18.391 3.56243 18.2529 3.86962 18.2529 4.20618L18.2538 8.51175Z" fill="#FFBF00"/>
<path d="M6.61448 1.01461H20.011L20.0617 1.01949C20.6953 1.08429 21.3934 1.23654 21.9211 1.78903C22.4254 2.31718 22.6089 3.04314 22.7092 3.79293L22.719 3.8652L22.6282 10.4052L21.6653 10.4287L19.4026 10.4814V20.7002L19.3713 20.8213C19.2069 21.4673 18.9238 22.1546 18.2239 22.5693C17.6009 22.9382 16.8312 22.972 16.0432 22.9267H3.92307L3.90061 22.9257C3.26833 22.8972 2.51069 22.803 1.96214 22.2754C1.39821 21.7329 1.29464 20.9716 1.2844 20.292C1.25726 19.3407 1.3845 18.4019 2.08714 17.7089C2.5511 17.2514 3.17255 17.0031 3.8635 16.8466V3.69235L3.86643 3.65035C3.89008 3.36736 3.91937 3.05127 3.98167 2.76071C4.04505 2.46506 4.15765 2.11734 4.40159 1.80563C4.93775 1.12062 5.77717 0.988623 6.61448 1.01461ZM6.55198 3.01363C6.19606 3.00259 6.03306 3.03791 5.96995 3.05953C5.9616 3.08211 5.94953 3.12007 5.93675 3.17965C5.90657 3.32039 5.88672 3.50343 5.8635 3.77633V18.5566L4.99925 18.6748C3.98634 18.8134 3.63242 18.9938 3.49143 19.1328C3.41331 19.2098 3.29442 19.3805 3.28147 19.9609L3.28343 20.2353V20.2509C3.28843 20.633 3.33544 20.7848 3.35471 20.832C3.36888 20.8383 3.39209 20.8492 3.42893 20.8593C3.53675 20.8889 3.70748 20.914 3.97971 20.9267H16.092L16.1223 20.9287C16.8912 20.9755 17.1325 20.8911 17.2043 20.8486C17.2102 20.8453 17.2947 20.8128 17.4026 20.4394V9.50485H18.4309L18.4074 8.50582L20.6545 8.45113L20.716 3.99215C20.6272 3.37425 20.5139 3.21197 20.4748 3.17086C20.4585 3.15373 20.3765 3.0677 19.8987 3.01461H6.56761L6.55198 3.01363Z" fill="#FFBF00"/>
<path  d="M15.1142 14.0767C15.8845 14.0767 16.3656 13.2423 15.9796 12.5756L12.3471 6.30126C11.9619 5.63598 11.0014 5.63598 10.6162 6.30126L6.98368 12.5756C6.59771 13.2423 7.07877 14.0767 7.8491 14.0767H15.1142ZM10.9937 12.6129V11.637H11.9696V12.6129H10.9937ZM10.9937 10.6614V8.70976H11.9696V10.6614H10.9937Z" fill="#FFBF00"/>
</svg>

                          </div>
                          <div>
                            <h3>What’s Not Considered Preventive</h3>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour">
                      <div className="accordion-body">
                        <ul className="MB-32">
                          <li>Tests ordered outside a routine screening (e.g., diagnostic follow-up for a symptom)</li>
                          <li>Screenings that are outside of the ACA age and/or gender guidelines</li>
                          <li>Non-ACA preventive medications or brand-name drugs when generics are available</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="get-started pb-0">
                  <h4 className="text-center">Need Help? Questions about what’s covered or how to schedule your preventive care?</h4>
                  <div className="get-started-btns">
                    <a className="btn-one text-center" href="https://calendly.com/d/ckh2-xd6-qjd/benefits-conversation-with-hbg" target="_blank" rel="noreferrer">Schedule a Consult</a>
                    <Link className="btn-two text-center" href="/#quote-section">Calculate your Cost</Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Inline styles for custom colors per source */}
      <style>{`
      body {
          background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
        }
        h5 {
          color: #262965;
        }
        .faq-card:hover .view-btn button {
          background: #FFBF00 !important;
        }
      `}</style>
    </main>
  );
}