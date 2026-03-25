"use client";

import React from "react";
import Link from "next/link";

export default function MentalHealthPage() {
    return (
        <main id="maincontent" className="page-main-full-width">
            <a id="contentarea" tabIndex="-1"></a>
            <div className="columns">
                <div className="column main">
                    <div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true">

                        {/* --- HERO SECTION --- */}
                        <section className="health-hero-section">
                            <div className="container">
                                <div className="mb-2">
                                    <img
                                        className="img-fluid"
                                        src="/images/book.png"
                                        alt="Mental Health Icon"
                                    />
                                </div>
                                <div className="health-heading">
                                    <p>Mental Health Benefits with Solo</p>
                                </div>
                                <div className="sub-heading">
                                    <p className="title-two">
                                        Caring for your mental health is part of caring for your whole
                                        health. Solo covers a broad range of behavioral health
                                        services—from routine therapy visits to higher‑level care—so
                                        you can get support that fits your needs.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* --- ACCORDION SECTION --- */}
                        <section className="health-acordian">
                            <div className="container">
                                <div className="breadcrumbs">
                                    <div>
                                        <img
                                            src="https://hbgsolo.com/media/.renditions/wysiwyg/breadcrumb-arrow.png"
                                            alt="breadcrumb arrow"
                                        />
                                    </div>
                                    <div>
                                        <Link href="/">Home</Link> <span>/</span>
                                        <a> Mental Health Benefits</a>
                                    </div>
                                </div>

                                <div className="accordion custom-health-accordion" id="faqAccordion">

                                    {/* Item 1: What’s Covered */}
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
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z" fill="#FFBF00" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z" fill="#FFBF00" />
                                                        </svg>
                                                    </span>
                                                    <div><h3>What’s Covered</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <ul>
                                                    <div className="MB-32">
                                                        <p className="m-0 mb-1 text-primary fs-16 fw-bold">Outpatient therapy & psychiatry</p>
                                                        <li>Individual, couples, and family therapy with licensed clinicians (e.g., LCSW, LMFT, LPC, psychologist).</li>
                                                        <li>Psychiatric consultations and ongoing medication management.</li>
                                                        <li>Evidence‑based treatments (e.g., CBT, DBT) when medically necessary.</li>
                                                        <li>Capped at 40 visits per year for each covered individual.</li>
                                                    </div>
                                                    <div className="MB-32">
                                                        <p className="m-0 mb-1 text-primary fs-16 fw-bold">Virtual/telehealth visits</p>
                                                        <li>Video or phone therapy/psychiatry with in‑network providers is covered the same as in‑person unless noted in your Plan Summary.</li>
                                                        <li>Great for convenience, continuity, and access to specialty care.</li>

                                                    </div>
                                                    <div className="MB-32">
                                                        <p className="m-0 mb-1 text-primary fs-16 fw-bold">Intensive/structured programs (with prior authorization)</p>
                                                        <li>Intensive Outpatient Programs (IOP), Partial Hospitalization Programs (PHP), and other structured day programs.</li>
                                                        <li>Prior authorization is typically required for these services and for most inpatient behavioral health admissions.</li>

                                                    </div>
                                                    <div className="MB-32">
                                                        <p className="m-0 mb-1 text-primary fs-16 fw-bold">Inpatient & crisis stabilization (with prior authorization)</p>
                                                        <li>Hospitalization or residential treatment for acute mental health or substance use needs.</li>
                                                        <li>Emergency services are always covered according to your plan, but ongoing stays generally require authorization.</li>

                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2: In-Network vs. Out-of-Network */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <div className="accordion-header-content">
                                                    <span className="icon">
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z" fill="#FFBF00" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z" fill="#FFBF00" />
                                                        </svg>
                                                    </span>
                                                    <div><h3>In‑Network vs. Out‑of‑Network: How Costs Work</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <ul>
                                                    <div className="MB-32">
                                                        <p className="m-0 mb-1 text-primary fs-16 fw-bold">In‑Network</p>
                                                        <ul>
                                                            <li>You’ll pay the lowest out‑of‑pocket amounts when you see in‑network mental health providers.</li>
                                                            <li>The provider has agreed to Solo’s contracted rate and will not balance bill you beyond your normal cost share.</li>
                                                            <li>Teletherapy with an in‑network clinician is typically covered at the same level as in‑person care.</li>
                                                        </ul>
                                                    </div>

                                                    <div className="MB-32">
                                                        <p className="m-0 mb-1 text-primary fs-16 fw-bold">Out‑of‑Network (OON)</p>
                                                        <ul>
                                                            <li>You can use out‑of‑network providers, but you will usually pay more.</li>
                                                            <li>Your plan pays the allowed amount (Solo’s maximum payable for a given service); you pay:
                                                                <p className="text-primary fs-16 fw-normal mx-3 m-0">a) your plan’s OON cost share plus</p>
                                                                <p className="text-primary fs-16 fw-normal mx-3 m-0">b) any balance bill if the provider charges above the allowed amount.</p>
                                                            </li>
                                                            <li>OON claims often require you (or your provider) to submit a detailed bill (superbill) and proof of payment if the provider doesn’t bill the plan directly.</li>
                                                            <li>Prior authorization rules still apply—especially for IOP, PHP, residential, and inpatient stays—whether in or out‑of‑network.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <div>
                                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 15C13.0523 15 13.5 14.5523 13.5 14V9.00001C13.5 8.44772 13.0523 8.00001 12.5 8.00001C11.9477 8.00001 11.5 8.44772 11.5 9.00001V14C11.5 14.5523 11.9477 15 12.5 15Z" fill="#FF6A55" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M20.1737 17.5044L13.3688 5.56347C12.9851 4.8903 12.0147 4.89031 11.6311 5.56347L4.82615 17.5044C4.44624 18.1711 4.92767 18.9996 5.69497 18.9996H19.3049C20.0722 18.9996 20.5537 18.1711 20.1737 17.5044ZM15.1064 4.57321C13.9555 2.55372 11.0443 2.55372 9.89347 4.57321L3.08851 16.5142C1.94877 18.5141 3.39306 20.9996 5.69497 20.9996H19.3049C21.6068 20.9996 23.0511 18.5141 21.9114 16.5142L15.1064 4.57321Z" fill="#FF6A55" />
                                                                <path d="M13.5 17C13.5 17.5523 13.0523 18 12.5 18C11.9477 18 11.5 17.5523 11.5 17C11.5 16.4477 11.9477 16 12.5 16C13.0523 16 13.5 16.4477 13.5 17Z" fill="#FF6A55" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="fs-16 fw-bold m-0 text-primary">Balance Billing: <span className="fw-normal">Out‑of‑network providers can bill you the difference between their charge and the plan’s allowed amount. This can be significant for therapy and psychiatry visits over time.</span></p>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 3: Tips */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <div className="accordion-header-content">
                                                    <div className="icon">
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z" fill="#FFBF00" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z" fill="#FFBF00" />
                                                        </svg>
                                                    </div>
                                                    <div><h3>Tip: Choose In‑Network for Mental Health Visits</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                            <div className="accordion-body">
                                                <p className="fs-16 m-0 text-primary fw-normal">You’ll almost always save money—and avoid
                                                    balance bills—by choosing in‑network therapists and psychiatrists. It also reduces
                                                    paperwork because in‑network providers bill the plan for you.</p>
                                                {/* <div className="M-32">
                                                    <p className="fs-16 m-0 mb-2 text-primary fw-bold">How to find providers</p>
                                                    <p className="fs-16 m-0 mb-1 text-primary fw-normal">1. Use the <a href="https://providersearch.multiplan.com/" target="_blank" rel="noreferrer">Multiplan Search tool</a>.</p>
                                                    <p className="fs-16 m-0 mb-1 text-primary fw-normal">2. Confirm before your appointment: ask if they are in network with Multiplan PHCS.</p>
                                                </div> */}
                                                <div className="M-32">
                                                    <p className="fs-16 m-0 mb-2 text-primary fw-bold">How to find in‑network mental health
                                                        providers</p>
                                                    <p className="fs-16 m-0  mb-1 text-primary fw-normal">1. Use the <a href="https://providersearch.multiplan.com/">Multiplan Provider Search tool</a> and filter by “Behavioral Health,” “Mental Health,” or “Psychiatry.”.</p>
                                                    <p className="fs-16 m-0 mb-1 text-primary fw-normal">2. Confirm before your appointment: ask the office if they are in network with Multiplan PHCS. </p>
                                                    <p className="fs-16 m-0 mb-1 text-primary fw-normal">3. For telehealth, ask if the same network status applies to virtual visits and if they will bill your plan.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 4: Prior Authorization */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                                <div className="accordion-header-content">
                                                    <span className="icon">
                                                        {/* SVG same as What's Covered */}
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z" fill="#FFBF00" /><path fillRule="evenodd" clipRule="evenodd" d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z" fill="#FFBF00" /></svg>
                                                    </span>
                                                    <div><h3>Prior Authorization (when it’s needed)</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li >Inpatient psychiatric or substance use admissions

                                                    </li>
                                                    <li >Residential treatment
                                                    </li>
                                                    <li >PHP/IOP programs
                                                    </li>
                                                    <li >Extended psychological testing beyond routine evaluation</li>

                                                    <p className="m-0 mb-1 text-primary fs-16 fw-bold mt-3">What to do</p>


                                                    <li >The treating facility or provider usually requests authorization on your behalf.</li>
                                                    <li>You can call the number on your ID card to confirm whether authorization is on file.</li>
                                                    <li>If you’re using an out‑of‑network facility, be extra sure prior authorization is approved to avoid potential denial or reduced payment.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 5: Prescriptions */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                                <div className="accordion-header-content">
                                                    <span className="icon">
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z" fill="#FFBF00" /><path fillRule="evenodd" clipRule="evenodd" d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z" fill="#FFBF00" /></svg>
                                                    </span>
                                                    <div><h3>Prescriptions for Mental Health</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li >Medications prescribed by an in‑network psychiatrist or primary care provider are covered under your plan’s prescription benefit and formulary (list of covered drugs).
                                                    </li>
                                                    <li >Some medications may require prior authorization, step therapy, or have quantity limits.
                                                    </li>
                                                    <li >For the best price, ask about generics or preferred brands, and make sure your pharmacy is in‑network.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 6: Paying Less */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                                                <div className="accordion-header-content">
                                                    <span className="icon">
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z" fill="#FFBF00" /><path fillRule="evenodd" clipRule="evenodd" d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z" fill="#FFBF00" /></svg>
                                                    </span>
                                                    <div><h3>Paying Less Out‑of‑Pocket: Practical Tips</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li >Stay in‑network whenever possible—particularly for recurring therapy/psychiatry visits.
                                                    </li>
                                                    <li >Verify benefits before starting higher‑level care (IOP/PHP/residential/inpatient).
                                                    </li>
                                                    <li >Use telehealth with in‑network providers for convenience and equal coverage.
                                                    </li>
                                                    <li >Ask for a treatment plan and billing codes (CPT codes) up front so you can estimate costs.
                                                    </li>
                                                    <li >If OON is your preferred option, ask the provider to:
                                                        <p className="text-primary fs-16 fw-normal mx-3 m-0">a) Bill your plan directly (if they will), and</p>
                                                        <p className="text-primary fs-16 fw-normal mx-3 m-0">b) Consider a rate closer to the plan’s allowed amount to reduce balance billing.</p>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 7: Getting Help */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                                                <div className="accordion-header-content">
                                                    <span className="icon">
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z" fill="#FFBF00" /><path fillRule="evenodd" clipRule="evenodd" d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z" fill="#FFBF00" /></svg>
                                                    </span>
                                                    <div><h3>Getting Help
                                                    </h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>Member Services: Call the number on your ID card for coverage, network, or authorization questions.

                                                    </li>
                                                    <li>Care Management: If you’re entering IOP/PHP or an inpatient/residential program, ask to speak with care management to coordinate authorizations and smooth transitions of care.
                                                    </li>
                                                    <li>Appeals: If a claim is denied, you have the right to appeal. Use the instructions on your Explanation of Benefits (EOB) and submit any supporting clinical notes from your provider.
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Item 7: FAQs */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                                                <div className="accordion-header-content">
                                                    <span className="icon">
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21 49.0013C21 47.7126 22.0447 46.668 23.3333 46.668H32.6667C33.9553 46.668 35 47.7126 35 49.0013C35 50.29 33.9553 51.3346 32.6667 51.3346H23.3333C22.0447 51.3346 21 50.29 21 49.0013Z" fill="#FFBF00" /><path fillRule="evenodd" clipRule="evenodd" d="M32.6666 34.407C32.6666 32.8815 33.4123 31.4523 34.6635 30.5795C37.6974 28.4633 39.6666 24.9619 39.6666 21.0013C39.6666 14.558 34.4433 9.33464 28 9.33464C21.5566 9.33464 16.3333 14.558 16.3333 21.0013C16.3333 24.9619 18.3025 28.4633 21.3364 30.5795C22.5876 31.4523 23.3333 32.8815 23.3333 34.407V37.3346C23.3333 38.6233 24.378 39.668 25.6666 39.668H30.3333C31.622 39.668 32.6666 38.6233 32.6666 37.3346V34.407ZM18.6666 34.407C14.4352 31.4555 11.6666 26.5517 11.6666 21.0013C11.6666 11.9807 18.9793 4.66797 28 4.66797C37.0206 4.66797 44.3333 11.9807 44.3333 21.0013C44.3333 26.5517 41.5648 31.4555 37.3333 34.407V37.3346C37.3333 41.2006 34.1993 44.3346 30.3333 44.3346H25.6666C21.8006 44.3346 18.6666 41.2006 18.6666 37.3346V34.407Z" fill="#FFBF00" /></svg>
                                                    </span>
                                                    <div><h3>Quick FAQs</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li className="fw-bolder">Do I need a referral to see a therapist or psychiatrist?
                                                        <p>No, you do not need a referral.</p>
                                                    </li>
                                                    <li className="fw-bolder">Are teletherapy sessions covered?
                                                        <p>Yes, typically at the same level as in‑person when using in‑network providers.</p>
                                                    </li>
                                                    <li className="fw-bolder">Can I see an out‑of‑network therapist?
                                                        <p>Yes, but you may pay more and face balance billing.</p>
                                                    </li>
                                                    <li className="fw-bolder">Do higher‑level programs need authorization?
                                                        <p>Yes—IOP, PHP, residential, and inpatient behavioral health typically require prior authorization.</p>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* --- GET STARTED SECTION --- */}
                                <div className="get-started pb-0">
                                    <h4 className="text-center">Have questions about mental health coverage?</h4>
                                    <div className="get-started-btns">
                                        <a className="btn-one text-center" href="https://calendly.com/d/ckh2-xd6-qjd/benefits-conversation-with-hbg">Schedule a Consult</a>
                                        <Link className="btn-two text-center" href="/#quote-section">Calculate your Cost</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <style>{`
      body {
          background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
        }
        h5 { color: #262965; }
        .faq-card:hover .view-btn button { background: #FFBF00 !important; }
      `}</style>
        </main>
    );
}