"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function HowItWorks() {
    // Effect to handle scroll logic for header styling as per source script
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".page-header");
            if (header) {
                if (window.scrollY > 10) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main id="maincontent" className="page-main-full-width">
            <a id="contentarea" tabIndex="-1"></a>
            <div className="columns">
                <div className="column main">
                    {/* Hero Section */}
                    <section className="work-hero-section">
                        <div className="container">
                            <div className="mb-2">
                                <img
                                    className="img-fluid"
                                    src="https://hbgsolo.com/media/.renditions/wysiwyg/light_2.png"
                                    alt="Light Icon"
                                />
                            </div>
                            <div className="work-heading">
                                <p>How Solo Health</p>
                                <p>Collective Works</p>
                            </div>
                            <div className="sub-heading">
                                <p className="title-one">
                                    Solo Health Collective – Nationwide PPO Health Plan
                                </p>
                                <p className="title-two">
                                    If you're self-employed, you know the frustration of sifting
                                    through a sea of healthcare options. From limited plans to
                                    short-term coverage and marketplace offerings, the choices can
                                    be overwhelming—and often frustrating and expensive. That’s
                                    where the Solo Health Collective comes in.
                                </p>
                                <p className="title-two mt-4">
                                    Designed specifically for individuals operating as a "business
                                    of one," Solo addresses the common pitfalls of{" "}
                                    <Link className="highlight-text" href="/resource-articles">
                                        traditional insurance
                                    </Link>{" "}
                                    while providing the major medical coverage and healthcare
                                    benefits to its members. If you're skeptical about whether
                                    there’s a viable healthcare option to suit your lifestyle as a
                                    self-employed individual, discover how Solo Health Collective
                                    could be the answer you've been looking for.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Accordion Section */}
                    <section className="work-acordian">
                        <div className="container">
                            <div className="breadcrumbs">
                                <div>
                                    <img
                                        src="https://hbgsolo.com/media/.renditions/wysiwyg/breadcrumb-arrow.png"
                                        alt="arrow"
                                    />
                                </div>
                                <div>
                                    <Link href="/">Home</Link> <span>/</span>
                                    <a>How Solo Health Collective Works</a>
                                </div>
                            </div>

                            <div className="accordion custom-work-accordion" id="faqAccordion">
                                {/* Item 1 */}
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
                                                    <h3>Understanding the Unique Structure of Solo</h3>
                                                    <p>
                                                        How Solo’s captive-backed model offers flexibility
                                                        and financial protection.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <div className="accordian-para">
                                                <h5>What a Captive Insurance Company Is (and Isn’t)</h5>
                                                <p>
                                                    Solo operates through a captive insurance model, which
                                                    is a membership structure that allows participants to
                                                    collectively fund their healthcare expenses while
                                                    leveraging a national PPO network. In this setup, the
                                                    business—rather than the individual—is entered into
                                                    the captive, making it a self-insured organization.
                                                    This model is distinct from traditional insurance and
                                                    provides major medical coverage, along with all the
                                                    essential benefits required under the Affordable Care
                                                    Act (ACA). Our captive is backed by Odyssey
                                                    Reinsurance, ensuring financial strength and
                                                    stability. This means Solo’s members can have full
                                                    confidence knowing that claims are covered beyond
                                                    standard liability limits by a globally recognized,
                                                    highly rated reinsurance provider
                                                </p>
                                                <p>
                                                    We are a powerful alliance of organizations united by
                                                    a common mission: to empower our members in their
                                                    healthcare journey. Together, we create a seamless
                                                    experience, streamline claims management, and champion
                                                    fair pricing from medical facilities. By working
                                                    collaboratively, we not only enhance the quality of
                                                    care but also ensure that healthcare remains
                                                    affordable for all our members. Solo is collectively a{" "}
                                                    <Link
                                                        className="highlight-text"
                                                        href="/resource-articles"
                                                    >
                                                        system of partners
                                                    </Link>{" "}
                                                    working to ensure there are no wasted dollars and
                                                    total transparency of healthcare spending.
                                                </p>
                                                <p>
                                                    <Link className="highlight-text" href="/resource-articles">
                                                        Ideal candidates
                                                    </Link>{" "}
                                                    are individuals who are: generally healthy with no
                                                    major health concerns, operate as a business of one,
                                                    and are seeking to save on monthly costs and major
                                                    medical coverage without the limitations often
                                                    associated with traditional plans.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
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
                                                        <path d="M15.5016 1.0918C17.1584 1.0918 18.5016 2.43494 18.5016 4.0918V14.5977L16.6139 13.9688C16.5749 13.9557 16.5381 13.9383 16.5016 13.9209V4.0918C16.5016 3.53951 16.0539 3.0918 15.5016 3.0918H14.5016C14.5016 3.92022 13.83 4.5918 13.0016 4.5918H10.0016C9.17316 4.5918 8.50159 3.92022 8.50159 3.0918H7.50159C6.9493 3.0918 6.50159 3.53951 6.50159 4.0918V18.0918C6.50159 18.6168 6.90618 19.0466 7.42053 19.0879L8.25159 21.0918H7.50159C5.84473 21.0918 4.50159 19.7487 4.50159 18.0918V4.0918C4.50159 2.43494 5.84473 1.0918 7.50159 1.0918H15.5016Z" fill="#FFBF00" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.3531 15.8718C14.7118 15.7115 14.2619 15.1352 14.2619 14.4742V10.8676C14.2619 10.4726 13.9416 10.1523 13.5466 10.1523C13.1515 10.1523 12.8312 10.4726 12.8312 10.8676V17.3554C12.8312 17.9898 12.4162 18.5496 11.8092 18.7339C11.2022 18.9182 10.546 18.6837 10.1932 18.1565L9.40693 16.9811C9.21525 16.6946 8.77795 16.7535 8.66894 17.0805C8.6341 17.185 8.64228 17.2991 8.69169 17.3976L10.6396 21.28C10.7618 21.5235 11.011 21.6773 11.2835 21.6773H19.3041C19.7019 21.6773 20.0244 21.3548 20.0244 20.957V17.602C20.0244 17.2715 19.7994 16.9834 19.4788 16.9032L15.3531 15.8718ZM9.95 15.5778C8.9966 15.0595 7.68861 15.4658 7.30224 16.6249C7.14636 17.0926 7.18299 17.603 7.40405 18.0436L9.352 21.9261C9.71858 22.6567 10.466 23.1179 11.2835 23.1179H19.3041C20.4975 23.1179 21.465 22.1504 21.465 20.957V17.602C21.465 16.6104 20.7901 15.7461 19.8282 15.5056L15.7025 14.4742V10.8676C15.7025 9.67692 14.7373 8.71167 13.5466 8.71167C12.3559 8.71167 11.3906 9.67692 11.3906 10.8676V17.3554L10.6043 16.18C10.426 15.9135 10.2002 15.7138 9.95 15.5778Z" fill="#FFBF00" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h3>Easy Sign-Up</h3>
                                                    <p>Join in minutes with a simple, guided process.</p>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <h6>
                                                Establishing your Solo Health Collective account is
                                                straightforward:
                                            </h6>
                                            <ul>
                                                <li>
                                                    Calculate Your Costs: Start by assessing which plan
                                                    aligns with your financial and healthcare needs
                                                    ($2,500, $5,000, or $10,000 deductible).
                                                </li>
                                                <li>
                                                    Complete a Short Health Questionnaire: This helps
                                                    determine eligibility and tailor the plan to your
                                                    needs.
                                                </li>
                                                <li>
                                                    Establish Your Account:{" "}
                                                    <Link
                                                        href="/choosing-the-best-solo-plan-for-you"
                                                    >
                                                        Choose your plan
                                                    </Link>{" "}
                                                    and start date, and even contact us for a
                                                    consultation.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse8"
                                            aria-expanded="false"
                                            aria-controls="collapse8"
                                        >
                                            <div className="accordion-header-content">
                                                <div className="icon">
                                                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FFBF00" />
                                                        <path d="M13 7L18 12L13 17" stroke="#FFBF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6 12L18 12" stroke="#FFBF00" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3>What Happens Next</h3>
                                                    <p>
                                                        Know what to expect after enrollment and starting
                                                        your plan.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse8"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="accordion-body">
                                            <div className="MB-32">
                                                <p className="m-0 fs-16 text-primary fw-normal">
                                                    Upon setting up their plan, new members receive an
                                                    immediate order confirmation email confirming details
                                                    of the plan/order. Charges begin on the member's
                                                    preferred start date, which is always the first of the
                                                    month and is chosen by the member during checkout.
                                                    This is also when the welcome kit is delivered,
                                                    containing:
                                                </p>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>
                                                        Solo Member Portal: A directory for all of your plan
                                                        information and resources{" "}
                                                    </li>
                                                    <li>
                                                        Medical ID Card: For easy access to healthcare
                                                        services.
                                                    </li>
                                                    <li>
                                                        Benefits Hero: An essential resource for
                                                        understanding your benefits.
                                                    </li>
                                                    <li>
                                                        Multiplan PHCS Access: Information on finding
                                                        providers within the PPO network.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="M-32">
                                                <p className="m-0 fs-16 text-primary fw-normal">
                                                    Additionally, members benefit from support provided by{" "}
                                                    <Link className="highlight-text" href="/resource-articles">
                                                        organizations within the collective,
                                                    </Link>{" "}
                                                    including Vault for claims management. Members can
                                                    also expect to receive a 1095B tax document at tax
                                                    season for reporting purposes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 4 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
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
                                                    {/* SVG duplicate from source */}
                                                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4673 9.44529V19.7906C18.4673 20.3883 18.2236 20.9305 17.8299 21.3242C17.4108 21.7433 16.8662 21.9616 16.2749 21.9616H4.30551C3.71096 21.9616 3.1712 21.7187 2.77986 21.3274C2.38853 20.9368 2.14563 20.3963 2.14563 19.8017C2.14563 19.2072 2.38853 18.6674 2.77986 18.2761C3.1712 17.8847 3.71176 17.6418 4.30551 17.6418H4.97467V4.2167C4.97467 3.61899 5.21836 3.07683 5.61208 2.68311C6.005 2.29019 6.54795 2.04571 7.14567 2.04571H19.6946C20.2891 2.04571 20.8289 2.2886 21.2202 2.67994C21.6116 3.07049 21.8545 3.61104 21.8545 4.20559V8.97854C21.8545 9.23651 21.6457 9.44529 21.3877 9.44529H18.4673ZM7.35201 15.7559C7.09403 15.7559 6.88526 15.5472 6.88526 15.2892C6.88526 15.0312 7.09401 14.8224 7.35201 14.8224H16.0891C16.3471 14.8224 16.5559 15.0312 16.5559 15.2892C16.5559 15.5472 16.3471 15.7559 16.0891 15.7559H7.35201ZM11.721 12.01C12.3925 11.6425 14.5214 10.3144 14.5214 8.25063V6.22171C13.6776 5.81371 12.7013 5.61051 11.721 5.61051C10.7407 5.61051 9.76352 5.81451 8.92057 6.22171V8.25063C8.92057 10.3144 11.0502 11.6418 11.721 12.01ZM15.4549 8.25063C15.4549 11.2868 11.9313 12.9474 11.9217 12.9531C11.7995 13.0118 11.6527 13.0166 11.5209 12.9531C11.5106 12.9483 7.9877 11.2869 7.9877 8.25063V5.93832C7.9877 5.77401 8.07581 5.61445 8.2298 5.52953C9.26728 4.96038 10.4968 4.67701 11.7217 4.67701C12.9354 4.67701 14.1539 4.95642 15.1858 5.51524C15.3454 5.58906 15.4557 5.751 15.4557 5.93832L15.4549 8.25063ZM16.3249 21.0273C16.6535 21.0202 16.952 20.8821 17.1695 20.6638C17.3941 20.4391 17.533 20.1304 17.533 19.7906V4.20557C17.533 3.75073 17.6751 3.32844 17.9172 2.97998H7.14475C6.80501 2.97998 6.49544 3.11968 6.27159 3.34433C6.04694 3.56898 5.90724 3.87775 5.90724 4.21749V17.6426H14.7697C15.0277 17.6426 15.2365 17.8514 15.2365 18.1094V19.8795C15.2365 20.1819 15.354 20.4574 15.5461 20.663C15.739 20.8694 16.0072 21.0059 16.3057 21.0265C16.3121 21.0273 16.3186 21.0273 16.3249 21.0273ZM4.30474 21.0273H14.6509C14.431 20.6979 14.3024 20.3026 14.3024 19.8787V18.5753H4.30397C3.96741 18.5753 3.661 18.7135 3.43795 18.9357C3.21569 19.158 3.07758 19.4644 3.07758 19.8017C3.07758 20.1383 3.2157 20.4447 3.43795 20.6677C3.66022 20.89 3.96662 21.0281 4.30397 21.0281L4.30474 21.0273ZM18.4673 8.51175H20.9192V4.20618C20.9192 3.86962 20.7811 3.5632 20.5589 3.34016C20.3366 3.11789 20.0302 2.97979 19.6929 2.97979C19.3563 2.97979 19.0499 3.11791 18.8268 3.34016C18.6046 3.56243 18.4665 3.86962 18.4665 4.20618L18.4673 8.51175Z" fill="#FFBF00" /><path d="M12.1642 6.65008C12.1642 6.40427 11.9649 6.205 11.7191 6.205C11.4733 6.205 11.2741 6.40427 11.2741 6.65008V7.98532H9.93881C9.693 7.98532 9.49373 8.18459 9.49373 8.4304C9.49373 8.67621 9.693 8.87548 9.93881 8.87548H11.2741V10.2107C11.2741 10.4565 11.4733 10.6558 11.7191 10.6558C11.9649 10.6558 12.1642 10.4565 12.1642 10.2107L12.1642 8.87548H13.4995C13.7453 8.87548 13.9445 8.67621 13.9445 8.4304C13.9445 8.18459 13.7453 7.98532 13.4995 7.98532H12.1642V6.65008Z" fill="#FFBF00" /><path d="M6.82804 1.01461H20.2245L20.2753 1.01949C20.9089 1.08429 21.607 1.23654 22.1347 1.78903C22.639 2.31718 22.8225 3.04314 22.9228 3.79293L22.9325 3.8652L22.8417 10.4052L21.8788 10.4287L19.6161 10.4814V20.7002L19.5849 20.8213C19.4204 21.4673 19.1374 22.1546 18.4374 22.5693C17.8145 22.9382 17.0447 22.972 16.2568 22.9267H4.13664L4.11417 22.9257C3.48189 22.8972 2.72425 22.803 2.1757 22.2754C1.61177 21.7329 1.5082 20.9716 1.49796 20.292C1.47082 19.3407 1.59806 18.4019 2.3007 17.7089C2.76467 17.2514 3.38611 17.0031 4.07707 16.8466V3.69235L4.07999 3.65035C4.10364 3.36736 4.13294 3.05127 4.19523 2.76071C4.25862 2.46506 4.37121 2.11734 4.61515 1.80563C5.15131 1.12062 5.99073 0.988623 6.82804 1.01461ZM6.76554 3.01363C6.40963 3.00259 6.24663 3.03791 6.18351 3.05953C6.17516 3.08211 6.16309 3.12007 6.15031 3.17965C6.12013 3.32039 6.10028 3.50343 6.07707 3.77633V18.5566L5.21281 18.6748C4.1999 18.8134 3.84599 18.9938 3.70499 19.1328C3.62687 19.2098 3.50798 19.3805 3.49503 19.9609L3.49699 20.2353V20.2509C3.50199 20.633 3.549 20.7848 3.56828 20.832C3.58245 20.8383 3.60565 20.8492 3.64249 20.8593C3.75031 20.8889 3.92104 20.914 4.19328 20.9267H16.3056L16.3359 20.9287C17.1048 20.9755 17.3461 20.8911 17.4179 20.8486C17.4238 20.8453 17.5082 20.8128 17.6161 20.4394V9.50485H18.6444L18.621 8.50582L20.8681 8.45113L20.9296 3.99215C20.8408 3.37425 20.7275 3.21197 20.6884 3.17086C20.672 3.15373 20.5901 3.0677 20.1122 3.01461H6.78117L6.76554 3.01363Z" fill="#FFBF00" /></svg>
                                                </div>
                                                <div>
                                                    <h3>Access to Care</h3>
                                                    <p>
                                                        Use the Multiplan PHCS nationwide network plus open
                                                        network flexibility.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="accordion-body">
                                            <div className="MB-32">
                                                <p className="m-0 fs-16 text-primary fw-normal">
                                                    Members can access the Multiplan PHCS network,
                                                    ensuring they receive quality care. If members choose
                                                    to see an out-of-network provider, they have the
                                                    flexibility to choose healthcare providers outside the
                                                    network, but must go through a pre-authorization
                                                    process to negotiate costs. Solo's claims
                                                    administrator, Vault Health Admin, can assist in
                                                    facilitating fair pricing with the provider.
                                                </p>
                                            </div>
                                            <div>
                                                <h6>Claims Process</h6>
                                                <p className="m-0 fs-16 text-primary fw-normal">
                                                    Understanding the players in the claims process is
                                                    essential:
                                                </p>
                                                <ul>
                                                    <li>
                                                        Vault Health Admin: Solo’s claims administrator that
                                                        handles all aspects of the health plan, processes
                                                        claims, and provides customer support.
                                                    </li>
                                                    <li>
                                                        Fairos: Solo’s partner that works to negotiate
                                                        directly with healthcare providers to establish fair
                                                        and transparent pricing for medical services.
                                                    </li>
                                                    <li>
                                                        Establish Your Account: Choose your plan and start
                                                        date, and even contact us for a consultation.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="M-32">
                                                <h4 className=" fs-16 text-primary fw-bold">
                                                    Submitting and Managing Claims
                                                </h4>
                                                <p className="m-0 fs-16 text-primary fw-normal">
                                                    Claims are submitted through Vault, where they are
                                                    evaluated and processed. Members may encounter common
                                                    issues, such as needing pre-authorization for
                                                    high-cost procedures or specific diagnostic tests.
                                                    Clear communication with providers helps mitigate
                                                    these concerns.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 5 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            <div className="accordion-header-content">
                                                <span className="icon">
                                                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.7312 11.52C19.6469 11.52 22.0105 13.8846 22.0105 16.8003C22.0103 19.7158 19.6468 22.0796 16.7312 22.0796C13.8156 22.0796 11.4521 19.7159 11.4519 16.8003C11.4519 13.8846 13.8155 11.52 16.7312 11.52ZM17.2175 13.8501C17.0451 13.4439 16.4689 13.4437 16.2966 13.8501L15.7996 15.0249C15.7272 15.1955 15.5662 15.3118 15.3816 15.3276L14.1101 15.436C13.6694 15.4734 13.4906 16.0224 13.8249 16.312L14.7908 17.1499C14.931 17.2714 14.9931 17.4604 14.9509 17.6411L14.6609 18.8843C14.5604 19.315 15.0273 19.6548 15.406 19.4263L16.4988 18.7661C16.6575 18.6703 16.8566 18.6705 17.0154 18.7661L18.1091 19.4263C18.4878 19.6548 18.9547 19.315 18.8542 18.8843L18.5642 17.6411C18.5221 17.4606 18.5834 17.2714 18.7234 17.1499L19.6902 16.312C20.0245 16.0224 19.8457 15.4734 19.405 15.436L18.1335 15.3276C17.9489 15.3119 17.7879 15.1956 17.7156 15.0249L17.2175 13.8501Z" fill="#FFBF00" />
                                                        <path d="M12.8534 2.24536C13.357 2.24536 13.8422 2.4356 14.2118 2.77759L17.0487 5.40161C17.4578 5.78015 17.6903 6.31296 17.6903 6.87036V10.4329C17.3455 10.3743 16.9913 10.343 16.6298 10.343C16.3105 10.343 15.9967 10.3665 15.6903 10.4124V8.26489H14.0985C13.2701 8.26489 12.5985 7.59329 12.5985 6.76489V4.24536H4.59851V18.8206H10.7225C10.9971 19.5637 11.4089 20.2398 11.9257 20.8206H4.59851C3.49394 20.8206 2.59851 19.9251 2.59851 18.8206V4.24536C2.59851 3.14079 3.49394 2.24536 4.59851 2.24536H12.8534ZM10.4862 15.2649C10.4139 15.5896 10.3656 15.9234 10.3456 16.2649H6.59851C6.32238 16.2649 6.09854 16.041 6.09851 15.7649C6.09851 15.4888 6.32236 15.2649 6.59851 15.2649H10.4862ZM11.3153 13.2649C11.1146 13.5804 10.9414 13.9146 10.7987 14.2649H6.59851C6.32238 14.2649 6.09854 14.041 6.09851 13.7649C6.09851 13.4888 6.32236 13.2649 6.59851 13.2649H11.3153ZM8.02038 5.5979C8.57741 5.59793 9.03382 6.08137 9.03405 6.67114C9.03405 7.26112 8.58069 7.74533 8.02038 7.74536H7.38171L8.7196 9.16138L9.54675 8.28442C9.66945 8.15456 9.86832 8.15466 9.99109 8.28442C10.1139 8.41441 10.1139 8.62513 9.99109 8.75513L9.16296 9.6311L9.99109 10.5081C10.1138 10.6379 10.1136 10.8478 9.99109 10.9778C9.92812 11.0411 9.84931 11.0745 9.76745 11.0745C9.6856 11.0745 9.60678 11.0444 9.54382 10.9778L8.71569 10.1018L7.88855 10.9778C7.82567 11.041 7.74665 11.0744 7.66491 11.0745C7.58306 11.0745 7.50424 11.0444 7.44128 10.9778C7.31863 10.8478 7.31855 10.638 7.44128 10.5081L8.26941 9.6311L6.93151 8.21509V8.89185C6.93138 9.07506 6.78914 9.22485 6.61609 9.22485L6.61901 9.22876C6.44609 9.22849 6.30456 9.07795 6.30456 8.89478V5.93188C6.30456 5.74872 6.44609 5.59817 6.61901 5.5979H8.02038ZM13.5985 6.76489C13.5985 7.04101 13.8224 7.26489 14.0985 7.26489H15.6903V6.87036L13.5985 4.93481V6.76489ZM6.93151 7.07446H8.01745C8.2282 7.07429 8.40121 6.8914 8.40124 6.66821C8.40124 6.445 8.22824 6.26214 8.01745 6.26196H6.93151V7.07446Z" fill="#FFBF00" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h3>Cost Structure and Benefits</h3>
                                                    <p>
                                                        How deductibles and reimbursement work for
                                                        solopreneurs.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="accordion-body">
                                            <h5 className="fw-bold fs-16 text-primary">
                                                Financial Advantages
                                            </h5>
                                            <ul>
                                                <li className="fw-bolder">
                                                    Tax Deductions:
                                                    <p>
                                                        100% of monthly plan costs paid are tax-deductible,
                                                        as they are considered a business expense.
                                                    </p>
                                                </li>
                                                <li className="fw-bolder">
                                                    HSA Eligibility:
                                                    <p>
                                                        Our V2500 and V5000 plans are eligible for Health
                                                        Savings Accounts, providing additional tax
                                                        advantages.
                                                    </p>
                                                </li>
                                                <li className="fw-bolder">
                                                    No Annual or Lifetime Limits:
                                                    <p>
                                                        Unlike many traditional plans, Solo members enjoy
                                                        comprehensive coverage without caps.
                                                    </p>
                                                </li>
                                                <li className="fw-bolder">
                                                    No Wasted Dollars:
                                                    <p>
                                                        All payments count toward the deductible,
                                                        contrasting sharply with traditional plans, where
                                                        co-pays might not contribute.
                                                    </p>
                                                </li>
                                            </ul>
                                            <div className="M-32">
                                                <p className="text-primary fw-normal m-0">
                                                    Speak to your tax professional about all the{" "}
                                                    <Link
                                                        className="highlight-text"
                                                        href="/resource-articles"
                                                    >
                                                        benefits applicable{" "}
                                                    </Link>
                                                    in your state and how your business can potentially
                                                    write-off your monthly costs as business expenses.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 6 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            <div className="accordion-header-content">
                                                <span className="icon">
                                                    {/* Duplicate Icon from source */}
                                                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7312 11.52C19.6469 11.52 22.0105 13.8846 22.0105 16.8003C22.0103 19.7158 19.6468 22.0796 16.7312 22.0796C13.8156 22.0796 11.4521 19.7159 11.4519 16.8003C11.4519 13.8846 13.8155 11.52 16.7312 11.52ZM17.2175 13.8501C17.0451 13.4439 16.4689 13.4437 16.2966 13.8501L15.7996 15.0249C15.7272 15.1955 15.5662 15.3118 15.3816 15.3276L14.1101 15.436C13.6694 15.4734 13.4906 16.0224 13.8249 16.312L14.7908 17.1499C14.931 17.2714 14.9931 17.4604 14.9509 17.6411L14.6609 18.8843C14.5604 19.315 15.0273 19.6548 15.406 19.4263L16.4988 18.7661C16.6575 18.6703 16.8566 18.6705 17.0154 18.7661L18.1091 19.4263C18.4878 19.6548 18.9547 19.315 18.8542 18.8843L18.5642 17.6411C18.5221 17.4606 18.5834 17.2714 18.7234 17.1499L19.6902 16.312C20.0245 16.0224 19.8457 15.4734 19.405 15.436L18.1335 15.3276C17.9489 15.3119 17.7879 15.1956 17.7156 15.0249L17.2175 13.8501Z" fill="#FFBF00" />
                                                        <path d="M12.8534 2.24536C13.357 2.24536 13.8422 2.4356 14.2118 2.77759L17.0487 5.40161C17.4578 5.78015 17.6903 6.31296 17.6903 6.87036V10.4329C17.3455 10.3743 16.9913 10.343 16.6298 10.343C16.3105 10.343 15.9967 10.3665 15.6903 10.4124V8.26489H14.0985C13.2701 8.26489 12.5985 7.59329 12.5985 6.76489V4.24536H4.59851V18.8206H10.7225C10.9971 19.5637 11.4089 20.2398 11.9257 20.8206H4.59851C3.49394 20.8206 2.59851 19.9251 2.59851 18.8206V4.24536C2.59851 3.14079 3.49394 2.24536 4.59851 2.24536H12.8534ZM10.4862 15.2649C10.4139 15.5896 10.3656 15.9234 10.3456 16.2649H6.59851C6.32238 16.2649 6.09854 16.041 6.09851 15.7649C6.09851 15.4888 6.32236 15.2649 6.59851 15.2649H10.4862ZM11.3153 13.2649C11.1146 13.5804 10.9414 13.9146 10.7987 14.2649H6.59851C6.32238 14.2649 6.09854 14.041 6.09851 13.7649C6.09851 13.4888 6.32236 13.2649 6.59851 13.2649H11.3153ZM8.02038 5.5979C8.57741 5.59793 9.03382 6.08137 9.03405 6.67114C9.03405 7.26112 8.58069 7.74533 8.02038 7.74536H7.38171L8.7196 9.16138L9.54675 8.28442C9.66945 8.15456 9.86832 8.15466 9.99109 8.28442C10.1139 8.41441 10.1139 8.62513 9.99109 8.75513L9.16296 9.6311L9.99109 10.5081C10.1138 10.6379 10.1136 10.8478 9.99109 10.9778C9.92812 11.0411 9.84931 11.0745 9.76745 11.0745C9.6856 11.0745 9.60678 11.0444 9.54382 10.9778L8.71569 10.1018L7.88855 10.9778C7.82567 11.041 7.74665 11.0744 7.66491 11.0745C7.58306 11.0745 7.50424 11.0444 7.44128 10.9778C7.31863 10.8478 7.31855 10.638 7.44128 10.5081L8.26941 9.6311L6.93151 8.21509V8.89185C6.93138 9.07506 6.78914 9.22485 6.61609 9.22485L6.61901 9.22876C6.44609 9.22849 6.30456 9.07795 6.30456 8.89478V5.93188C6.30456 5.74872 6.44609 5.59817 6.61901 5.5979H8.02038ZM13.5985 6.76489C13.5985 7.04101 13.8224 7.26489 14.0985 7.26489H15.6903V6.87036L13.5985 4.93481V6.76489ZM6.93151 7.07446H8.01745C8.2282 7.07429 8.40121 6.8914 8.40124 6.66821C8.40124 6.445 8.22824 6.26214 8.01745 6.26196H6.93151V7.07446Z" fill="#FFBF00" /></svg>
                                                </span>
                                                <div>
                                                    <h3>Benefits of Joining the Solo Health Collective</h3>
                                                    <p>
                                                        The advantages of being part of a national
                                                        solopreneur community.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li className="fw-bold">
                                                    Cost Savings:
                                                    <p>
                                                        The captive model allows for more competitive
                                                        pricing compared to traditional insurance,
                                                        potentially leading to lower monthly costs and
                                                        reduced out-of-pocket expenses via the PPO network.
                                                    </p>
                                                </li>
                                                <li className="fw-bold">
                                                    Transparency and Control:
                                                    <p>
                                                        Members have a clear understanding of how their
                                                        healthcare dollars are spent and can influence the
                                                        structure of their health plans.
                                                    </p>
                                                </li>
                                                <li className="fw-bold">
                                                    Access to Care:{" "}
                                                    <p>
                                                        Solo provides access to a nationwide PPO network,
                                                        offering flexibility in choosing among hundreds of
                                                        healthcare providers, including NYU Langone, Mayo
                                                        Clinic, Ascension, and more.
                                                    </p>
                                                </li>
                                                <li className="fw-bold">
                                                    Support and Resources:
                                                    <p>
                                                        Solo offers concierge support to help you find the
                                                        best in-network providers, schedule appointments,
                                                        resolve billing issues, and more.
                                                    </p>
                                                </li>
                                                <li className="fw-bold">
                                                    Access to FitOn Health:
                                                    <p>
                                                        Members and their enrolled spouse will each receive
                                                        32 monthly credits to use toward in-person or
                                                        virtual fitness classes and gym memberships ($100+
                                                        monthly value).{" "}
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 7 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix"
                                            aria-expanded="false"
                                            aria-controls="collapseSix"
                                        >
                                            <div className="accordion-header-content">
                                                <span className="icon">
                                                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FFBF00" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.69423 12.3079C6.88283 12.1112 7.14352 12 7.41602 12H16.5839C16.8564 12 17.1171 12.1112 17.3057 12.3079C17.4943 12.5046 17.5945 12.7697 17.5831 13.0419C17.5318 14.2638 17.0621 15.5118 16.1095 16.4591C15.1454 17.4178 13.7559 18 12 18C10.2441 18 8.85455 17.4178 7.89049 16.4591C6.93789 15.5118 6.46821 14.2638 6.4169 13.042C6.40546 12.7697 6.50563 12.5046 6.69423 12.3079ZM8.62814 14C8.77651 14.3868 9.00102 14.7429 9.30075 15.0409C9.8451 15.5822 10.7056 16 12 16C13.2944 16 14.1549 15.5822 14.6992 15.0409C14.999 14.7429 15.2235 14.3868 15.3718 14H8.62814Z" fill="#FFBF00" />
                                                        <path d="M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9Z" fill="#FFBF00" />
                                                        <path d="M17 9C17 9.55228 16.5523 10 16 10C15.4477 10 15 9.55228 15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9Z" fill="#FFBF00" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h3>A Healthier You, A Healthier Business</h3>
                                                    <p>
                                                        Coverage that supports both your health and your
                                                        business success.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSix"
                                        className="accordion-collapse collapse"
                                    >
                                        <div className="accordion-body">
                                            <div>
                                                <p className="text-primary fw-normal m-0">
                                                    Solo encourages members to adopt healthy lifestyles,
                                                    offering incentives that lead to lower healthcare
                                                    costs over time, such as exclusive access to FitOn
                                                    fitness programs and more. Staying healthy not only
                                                    benefits individual members but also contributes to
                                                    the overall financial health of the collective. Your
                                                    health and success are our priorities.
                                                </p>
                                            </div>
                                            <div className="M-32">
                                                <p className="text-primary fw-normal m-0">
                                                    Are you ready to take charge of your healthcare
                                                    journey?{" "}
                                                    <a
                                                        className="highlight-text"
                                                        href="https://calendly.com/d/ckh2-xd6-qjd/benefits-conversation-with-hbg"
                                                    >
                                                        Schedule a consultation
                                                    </a>{" "}
                                                    today to learn more about how Solo can benefit you or{" "}
                                                    <Link className="highlight-text" href="/#quote-section">
                                                        calculate your monthly cost
                                                    </Link>{" "}
                                                    if you’re not ready to commit yet.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Get Started Section */}
                            <div className="get-started pb-0">
                                <h4>Don't just join a health plan. Create your own.</h4>
                                <div className="get-started-btns">
                                    <a
                                        className="btn-one text-center"
                                        href="https://calendly.com/d/ckh2-xd6-qjd/benefits-conversation-with-hbg"
                                    >
                                        Schedule a Consult
                                    </a>
                                    <Link
                                        className="btn-two text-center"
                                        href="/#quote-section"
                                    >
                                        Calculate your Cost
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <style>{`
             body {
          background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
        }
      `}</style>
        </main>
    );
}