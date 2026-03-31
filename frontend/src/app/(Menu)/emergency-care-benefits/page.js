"use client";

import React from "react";
import Link from "next/link";

export default function EmergencyCarePage() {
    return (
        <main id="maincontent" className="page-main-full-width">
            <a id="contentarea" tabIndex="-1"></a>
            <div className="columns">
                <div className="column main">
                    <div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true">

                        {/* --- HERO SECTION --- */}
                        <section className="network-hero-section">
                            <div className="custom-container">
                                {/* Mobile Breadcrumbs */}
                                <div className="breadcrumbs d-flex d-lg-none">
                                    <div>
                                        <img src="/images/book.png" alt="arrow" />
                                    </div>
                                    <div>
                                        <Link href="/">Home</Link> <span>/</span>
                                        <Link href="/our-network">Our Network</Link>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <img className="img-fluid" src="/images/emergency.png" alt="emergency" />
                                </div>
                                <div className="network-headeing">
                                    <p className="mb-0">Emergency Care</p>
                                    <p className="mb-0">Benefits</p>
                                </div>
                                <div className="sub-heading">
                                    <p className="title-one lh-sm">With Solo Health Collective</p>
                                    <p className="title-two">
                                        At Solo Health Collective, your health and safety are our top priorities—especially in an
                                        emergency. Whether you experience a sudden illness, an accident, or a life-threatening condition, we ensure
                                        you have access to quality care when every second counts.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* --- ACCORDION SECTION --- */}
                        <section className="emergency-care-acordian">
                            <div className="custom-container">
                                {/* Desktop Breadcrumbs */}
                                <div className="breadcrumbs d-none d-lg-flex">
                                    <div>
                                        <img src="https://hbgsolo.com/media/.renditions/wysiwyg/breadcrumb-arrow.png" alt="arrow" />
                                    </div>
                                    <div>
                                        <Link href="/">Home</Link> <span>/</span>
                                        <a>Emergency Care Benefits</a>
                                    </div>
                                </div>

                                <div className="accordion custom-network-accordion" id="faqAccordion">

                                    {/* Item 1: What Qualifies */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <div className="accordion-header-content">
                                                    <span className="icon">
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M39.0398 26.8828C45.843 26.883 51.3581 32.3979 51.3582 39.2012C51.3582 46.0044 45.843 51.5193 39.0398 51.5195C32.2364 51.5195 26.7205 46.0046 26.7205 39.2012C26.7205 32.3978 32.2364 26.8828 39.0398 26.8828ZM39.5613 30.8711C39.389 30.4646 38.8127 30.4646 38.6404 30.8711L36.7078 35.4297C36.6354 35.6004 36.4746 35.7167 36.2898 35.7324L31.3484 36.1523C30.9077 36.1897 30.7289 36.7387 31.0632 37.0283L34.8171 40.2803C34.9572 40.4017 35.0183 40.5909 34.9763 40.7715L33.8494 45.6045C33.7491 46.0351 34.2159 46.374 34.5945 46.1455L38.8425 43.582C39.0014 43.4861 39.2002 43.4861 39.3591 43.582L43.6072 46.1455C43.9857 46.374 44.4525 46.0351 44.3523 45.6045L43.2253 40.7715C43.1833 40.5908 43.2444 40.4018 43.3845 40.2803L47.1384 37.0283C47.4727 36.7387 47.294 36.1897 46.8533 36.1523L41.9119 35.7324C41.7271 35.7167 41.5653 35.6004 41.4929 35.4297L39.5613 30.8711Z"
                                                                fill="#FFBF00" />
                                                            <path
                                                                d="M29.9911 5.24219C31.1661 5.24219 32.2985 5.68547 33.161 6.4834L39.7802 12.6064C40.7347 13.4896 41.2771 14.7327 41.2772 16.0332V24.3438C40.4727 24.2073 39.646 24.1357 38.8026 24.1357C38.0576 24.1357 37.3254 24.1908 36.6102 24.2979V19.2871H32.8954C30.9625 19.287 29.3954 17.72 29.3954 15.7871V9.9082H10.7294V43.917H25.0194C25.6599 45.6503 26.6181 47.2291 27.8231 48.584H10.7294C8.15226 48.5837 6.06335 46.4942 6.06335 43.917V9.9082C6.06352 7.33118 8.15236 5.24245 10.7294 5.24219H29.9911ZM24.4637 35.6211C24.2952 36.3784 24.1852 37.1577 24.1385 37.9541H15.3954C14.7512 37.9539 14.2294 37.4313 14.2294 36.7871C14.2295 36.1429 14.7512 35.6212 15.3954 35.6211H24.4637ZM26.3983 30.9541C25.9304 31.69 25.5261 32.4701 25.1932 33.2871H15.3954C14.7513 33.287 14.2296 32.7651 14.2294 32.1211C14.2294 31.4769 14.7512 30.9543 15.3954 30.9541H26.3983ZM18.7137 13.0654C20.0137 13.0654 21.0788 14.1929 21.079 15.5693C21.079 16.946 20.0212 18.0742 18.7137 18.0742H17.2225L20.3446 21.3799L22.2762 19.334C22.5627 19.0307 23.0259 19.0307 23.3124 19.334C23.5988 19.6372 23.5987 20.1273 23.3124 20.4307L21.3807 22.4766L23.3124 24.5215C23.5988 24.8247 23.5986 25.3148 23.3124 25.6182C23.1655 25.7659 22.9818 25.8437 22.7909 25.8438C22.5999 25.8438 22.4163 25.7737 22.2694 25.6182L20.3378 23.5732L18.4052 25.6182C18.2582 25.7659 18.0747 25.8438 17.8837 25.8438C17.6928 25.8437 17.509 25.7736 17.3622 25.6182C17.0761 25.3148 17.0758 24.8247 17.3622 24.5215L19.2948 22.4766L16.1727 19.1709V20.75C16.1726 21.1775 15.8421 21.5272 15.4384 21.5273L15.4452 21.5352C15.0414 21.535 14.7109 21.1855 14.7108 20.7578V13.8428C14.711 13.4152 15.0414 13.0656 15.4452 13.0654H18.7137ZM31.7294 15.7871C31.7294 16.4313 32.2512 16.9539 32.8954 16.9541H36.6102V16.0332L31.7294 11.5166V15.7871ZM16.1727 16.5107H18.7069C19.1989 16.5106 19.6024 16.0825 19.6024 15.5615C19.6023 15.0406 19.1989 14.6134 18.7069 14.6133H16.1727V16.5107Z"
                                                                fill="#FFBF00" />
                                                        </svg>
                                                    </span>
                                                    <div><h3>What Qualifies as an Emergency?</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <div className="MB-32">
                                                    <p className="m-0 fs-16 text-primary fw-normal">Any medical condition with acute symptoms (including severe
                                                        pain) such that a reasonable person would believe that not getting immediate medical attention could
                                                        seriously jeopardize their health, bodily functions, or organs.
                                                        Emergency services include the initial evaluation, treatment, and stabilization of an emergency
                                                        medical condition.</p>
                                                </div>
                                                <p className="fs-16 text-primary fw-normal">Examples include:</p>
                                                <ul className="ps-4">
                                                    <li>Chest pain or heart attack symptoms</li>
                                                    <li>Severe difficulty breathing</li>
                                                    <li>Major injuries or broken bones</li>
                                                    <li>Uncontrolled bleeding</li>
                                                    <li>Sudden loss of consciousness</li>
                                                    <li>Suspected stroke</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2: Coverage */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                <div className="accordion-header-content">
                                                    <span className="icon">
                                                        {/* SVG Content from source */}
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M43.8021 21.7474V47.1879C43.8021 48.6578 43.1946 49.991 42.2132 50.9592C41.1685 51.9899 39.8112 52.5267 38.3371 52.5267H8.50127C7.01925 52.5267 5.6738 51.9294 4.69831 50.967C3.72283 50.0066 3.11737 48.6773 3.11737 47.2153C3.11737 45.7532 3.72283 44.4258 4.69831 43.4635C5.6738 42.5011 7.02123 41.9038 8.50127 41.9038H10.1693V8.8896C10.1693 7.41973 10.7767 6.08649 11.7581 5.11829C12.7376 4.15204 14.091 3.55083 15.5809 3.55083H46.8613C48.3433 3.55083 49.6888 4.14814 50.6643 5.11049C51.6398 6.0709 52.2452 7.40019 52.2452 8.86226V20.5996C52.2452 21.234 51.7249 21.7474 51.0818 21.7474H43.8021ZM16.0952 37.2661C15.4522 37.2661 14.9318 36.7527 14.9318 36.1183C14.9318 35.4838 15.4521 34.9705 16.0952 34.9705H37.8741C38.5172 34.9705 39.0376 35.4838 39.0376 36.1183C39.0376 36.7527 38.5172 37.2661 37.8741 37.2661H16.0952ZM26.9857 28.0543C28.6596 27.1505 33.9662 23.8848 33.9662 18.8096V13.8202C31.8629 12.8169 29.4292 12.3171 26.9857 12.3171C24.5421 12.3171 22.1063 12.8188 20.0051 13.8202V18.8096C20.0051 23.8847 25.3136 27.1488 26.9857 28.0543ZM36.2932 18.8096C36.2932 26.2758 27.5099 30.3595 27.4861 30.3735C27.1814 30.5179 26.8154 30.5296 26.4869 30.3735C26.4612 30.3618 17.6798 26.2762 17.6798 18.8096V13.1233C17.6798 12.7192 17.8994 12.3268 18.2833 12.118C20.8694 10.7184 23.9342 10.0216 26.9876 10.0216C30.0129 10.0216 33.0503 10.7087 35.6224 12.0829C36.0201 12.2644 36.2952 12.6627 36.2952 13.1233L36.2932 18.8096ZM38.4618 50.2292C39.281 50.2116 40.0249 49.872 40.5671 49.3351C41.127 48.7827 41.4733 48.0234 41.4733 47.1879V8.86221C41.4733 7.7437 41.8275 6.70524 42.4309 5.84832H15.5786C14.7317 5.84832 13.9601 6.19188 13.4021 6.74432C12.8421 7.29675 12.4939 8.05607 12.4939 8.89154V41.9058H34.5853C35.2283 41.9058 35.7488 42.4191 35.7488 43.0536V47.4065C35.7488 48.1503 36.0416 48.8276 36.5204 49.3332C37.0012 49.8407 37.67 50.1765 38.414 50.2272C38.4298 50.2292 38.446 50.2292 38.4618 50.2292ZM8.49934 50.2292H34.289C33.7409 49.4191 33.4204 48.447 33.4204 47.4046V44.1994H8.49742C7.6585 44.1994 6.89469 44.5391 6.33872 45.0856C5.78468 45.6322 5.44044 46.3857 5.44044 47.2153C5.44044 48.0429 5.78472 48.7964 6.33872 49.3449C6.89277 49.8915 7.65652 50.2311 8.49742 50.2311L8.49934 50.2292ZM43.8022 19.4517H49.914V8.86371C49.914 8.03608 49.5697 7.28256 49.0157 6.73407C48.4617 6.18748 47.6979 5.84788 46.857 5.84788C46.0181 5.84788 45.2543 6.18753 44.6983 6.73407C44.1443 7.28066 43.8 8.03608 43.8 8.86371L43.8022 19.4517Z"
                                                                fill="#FFBF00" />
                                                            <path
                                                                d="M28.0905 14.8736C28.0905 14.2691 27.5938 13.7791 26.9811 13.7791C26.3683 13.7791 25.8716 14.2691 25.8716 14.8736V18.1571H22.5433C21.9306 18.1571 21.4339 18.6472 21.4339 19.2516C21.4339 19.8561 21.9306 20.3462 22.5433 20.3462H25.8716V23.6297C25.8716 24.2342 26.3683 24.7242 26.9811 24.7242C27.5938 24.7242 28.0905 24.2342 28.0905 23.6297L28.0905 20.3462H31.4189C32.0316 20.3462 32.5283 19.8561 32.5283 19.2516C32.5283 18.6472 32.0316 18.1571 31.4189 18.1571H28.0905V14.8736Z"
                                                                fill="#FFBF00" />
                                                            <path
                                                                d="M14.7891 1.01523H48.1823L48.3089 1.02723C49.8883 1.18658 51.6284 1.56098 52.9437 2.91961C54.2008 4.21841 54.6583 6.00365 54.9082 7.84749L54.9325 8.0252L54.7061 24.108L52.306 24.1657L46.6658 24.2953V49.4246L46.5879 49.7224C46.178 51.311 45.4724 53.0012 43.7276 54.0211C42.1749 54.9282 40.2561 55.0114 38.2919 54.9H8.08031L8.02433 54.8976C6.44824 54.8274 4.55969 54.5958 3.19232 53.2982C1.78662 51.9642 1.52845 50.0922 1.50294 48.4208C1.43528 46.0816 1.75245 43.7729 3.5039 42.0688C4.66043 40.9437 6.2095 40.3332 7.93182 39.9483V7.60013L7.93913 7.49687C7.99806 6.80094 8.07109 6.02363 8.22637 5.3091C8.38437 4.58207 8.66504 3.72699 9.2731 2.96044C10.6096 1.27592 12.702 0.951318 14.7891 1.01523ZM14.6333 5.93109C13.7462 5.90394 13.3399 5.99078 13.1825 6.04396C13.1617 6.09947 13.1316 6.19284 13.0998 6.33935C13.0245 6.68544 12.9751 7.13555 12.9172 7.80666V44.1533L10.7629 44.4439C8.23802 44.7849 7.35582 45.2284 7.00437 45.5702C6.80964 45.7597 6.51327 46.1794 6.48101 47.6067L6.48587 48.2815V48.3199C6.49835 49.2594 6.61553 49.6327 6.66357 49.7488C6.6989 49.7642 6.75673 49.7912 6.84858 49.8161C7.11734 49.8887 7.5429 49.9504 8.2215 49.9818H38.4136L38.4891 49.9866C40.4057 50.1018 41.0073 49.8942 41.1863 49.7897C41.2009 49.7815 41.4115 49.7015 41.6804 48.7834V21.8939H44.2437L44.1853 19.4371L49.7865 19.3026L49.9399 8.33739C49.7185 6.81788 49.4361 6.41883 49.3386 6.31773C49.2978 6.2756 49.0936 6.06404 47.9024 5.93349H14.6723L14.6333 5.93109Z"
                                                                fill="#FFBF00" />
                                                        </svg>
                                                    </span>
                                                    <div><h3>Coverage for Emergency Care</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <ul className="ps-4">
                                                    <li className="fw-bolder">In-Network:
                                                        <p className="fw-normal">Emergency services received at an in-network hospital or facility are covered at
                                                            your plan’s negotiated rates, helping you avoid unnecessary costs.</p>
                                                    </li>
                                                    <li className="fw-bolder">Out-of-Network:
                                                        <p className="fw-normal mb-0">Under the No Surprises Act, hospitals and providers must treat
                                                            out-of-network emergency care as in-network for billing purposes — meaning they must bill your
                                                            insurance as if they were in-network, and you can only be charged your normal in-network
                                                            cost-sharing (copay, deductible, or coinsurance).</p>
                                                    </li>
                                                </ul>
                                                <p className="text-primary fs-16 M-32 mb-3"><strong>Key Point:</strong>
                                                    In a medical emergency, you are only responsible for meeting your deductible</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 3: Best Practices */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                <div className="accordion-header-content">
                                                    <div className="icon">
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M21 48.9974C21 47.7087 22.0447 46.6641 23.3333 46.6641H32.6667C33.9553 46.6641 35 47.7087 35 48.9974C35 50.2861 33.9553 51.3307 32.6667 51.3307H23.3333C22.0447 51.3307 21 50.2861 21 48.9974Z"
                                                                fill="#FFBF00" />
                                                            <path
                                                                d="M32.6666 34.4031C32.6666 32.8776 33.4123 31.4483 34.6635 30.5756C37.6974 28.4594 39.6666 24.958 39.6666 20.9974C39.6666 14.5541 34.4433 9.33073 28 9.33073C21.5566 9.33073 16.3333 14.5541 16.3333 20.9974C16.3333 24.958 18.3025 28.4594 21.3364 30.5756C22.5876 31.4483 23.3333 32.8776 23.3333 34.4031V37.3307C23.3333 38.6194 24.378 39.6641 25.6666 39.6641H30.3333C31.622 39.6641 32.6666 38.6194 32.6666 37.3307V34.4031ZM18.6666 34.4031C14.4352 31.4516 11.6666 26.5478 11.6666 20.9974C11.6666 11.9767 18.9793 4.66406 28 4.66406C37.0206 4.66406 44.3333 11.9767 44.3333 20.9974C44.3333 26.5478 41.5648 31.4516 37.3333 34.4031V37.3307C37.3333 41.1967 34.1993 44.3307 30.3333 44.3307H25.6666C21.8006 44.3307 18.6666 41.1967 18.6666 37.3307V34.4031Z"
                                                                fill="#FFBF00" />
                                                        </svg>
                                                    </div>
                                                    <div><h3>Best Practices</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <ul className="ps-4">
                                                    <li>
                                                        <p className="text-primary fs-16 fw-normal mb-0">If you are experiencing a medical emergency, simply go to the
                                                            nearest hospital. </p>
                                                    </li><li>
                                                        <p className="text-primary fs-16 fw-normal mb-0 mt-3 mt-md-0">Follow up and ongoing treatment at an in-network hospital or
                                                            clinic will <strong>save you money</strong> and reduce the risk of balance billing.</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 4: After Visit */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                                <div className="accordion-header-content">
                                                    <span className="icon">
                                                        {/* SVG same as Item 2 */}
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M43.5885 21.7474V47.1879C43.5885 48.6578 42.981 49.991 41.9996 50.9592C40.9549 51.9899 39.5975 52.5267 38.1235 52.5267H8.28764C6.80563 52.5267 5.46017 51.9294 4.48469 50.967C3.50921 50.0066 2.90375 48.6773 2.90375 47.2153C2.90375 45.7532 3.50921 44.4258 4.48469 43.4635C5.46017 42.5011 6.8076 41.9038 8.28764 41.9038H9.95566V8.8896C9.95566 7.41973 10.5631 6.08649 11.5445 5.11829C12.5239 4.15204 13.8773 3.55083 15.3673 3.55083H46.6477C48.1297 3.55083 49.4752 4.14814 50.4507 5.11049C51.4261 6.0709 52.0316 7.40019 52.0316 8.86226V20.5996C52.0316 21.234 51.5112 21.7474 50.8681 21.7474H43.5885ZM38.2482 50.2292C39.0673 50.2116 39.8113 49.872 40.3534 49.3351C40.9134 48.7827 41.2597 48.0234 41.2597 47.1879V8.86221C41.2597 7.7437 41.6138 6.70524 42.2173 5.84832H15.365C14.5181 5.84832 13.7465 6.19188 13.1885 6.74432C12.6285 7.29675 12.2802 8.05607 12.2802 8.89154V41.9058H34.3717C35.0147 41.9058 35.5351 42.4191 35.5351 43.0536V47.4065C35.5351 48.1503 35.828 48.8276 36.3068 49.3332C36.7876 49.8407 37.4564 50.1765 38.2004 50.2272C38.2162 50.2292 38.2323 50.2292 38.2482 50.2292ZM8.28572 50.2292H34.0754C33.5273 49.4191 33.2068 48.447 33.2068 47.4046V44.1994H8.28379C7.44487 44.1994 6.68107 44.5391 6.1251 45.0856C5.57105 45.6322 5.22681 46.3857 5.22681 47.2153C5.22681 48.0429 5.5711 48.7964 6.1251 49.3449C6.67915 49.8915 7.4429 50.2311 8.28379 50.2311L8.28572 50.2292ZM43.5886 19.4517H49.7004V8.86371C49.7004 8.03608 49.3561 7.28256 48.8021 6.73407C48.2481 6.18748 47.4843 5.84788 46.6434 5.84788C45.8045 5.84788 45.0407 6.18753 44.4847 6.73407C43.9307 7.28066 43.5864 8.03608 43.5864 8.86371L43.5886 19.4517Z"
                                                                fill="#FFBF00" />
                                                            <path
                                                                d="M14.5755 1.01523H47.9687L48.0953 1.02723C49.6747 1.18658 51.4148 1.56098 52.7301 2.91961C53.9872 4.21841 54.4446 6.00365 54.6946 7.84749L54.7189 8.0252L54.4925 24.108L52.0923 24.1657L46.4522 24.2953V49.4246L46.3743 49.7224C45.9644 51.311 45.2588 53.0012 43.514 54.0211C41.9613 54.9282 40.0425 55.0114 38.0783 54.9H7.86669L7.8107 54.8976C6.23461 54.8274 4.34606 54.5958 2.9787 53.2982C1.573 51.9642 1.31483 50.0922 1.28932 48.4208C1.22166 46.0816 1.53883 43.7729 3.29028 42.0688C4.44681 40.9437 5.99588 40.3332 7.7182 39.9483V7.60013L7.7255 7.49687C7.78444 6.80094 7.85747 6.02363 8.01275 5.3091C8.17075 4.58207 8.45142 3.72699 9.05948 2.96044C10.3959 1.27592 12.4884 0.951318 14.5755 1.01523ZM14.4197 5.93109C13.5325 5.90394 13.1262 5.99078 12.9689 6.04396C12.9481 6.09947 12.918 6.19284 12.8861 6.33935C12.8109 6.68544 12.7614 7.13555 12.7036 7.80666V44.1533L10.5492 44.4439C8.0244 44.7849 7.1422 45.2284 6.79075 45.5702C6.59602 45.7597 6.29965 46.1794 6.26738 47.6067L6.27225 48.2815V48.3199C6.28473 49.2594 6.4019 49.6327 6.44995 49.7488C6.48527 49.7642 6.54311 49.7912 6.63496 49.8161C6.90371 49.8887 7.32927 49.9504 8.00788 49.9818H38.2L38.2755 49.9866C40.1921 50.1018 40.7937 49.8942 40.9726 49.7897C40.9873 49.7816 41.1979 49.7015 41.4668 48.7834V21.8939H44.0301L43.9716 19.4371L49.5729 19.3026L49.7262 8.33739C49.5048 6.81788 49.2225 6.41883 49.125 6.31773C49.0842 6.2756 48.88 6.06404 47.6888 5.93349H14.4587L14.4197 5.93109Z"
                                                                fill="#FFBF00" />
                                                            <path
                                                                d="M35.7625 33.1366C37.6827 33.1366 38.8819 31.0847 37.9198 29.4453L28.865 14.0158C27.9049 12.3798 25.5106 12.3798 24.5506 14.0158L15.4958 29.4453C14.5337 31.0847 15.7328 33.1366 17.653 33.1366H35.7625ZM25.4916 29.5369V27.1372H27.924V29.5369H25.4916ZM25.4916 24.7379V19.9386H27.924V24.7379H25.4916Z"
                                                                fill="#FFBF00" />
                                                        </svg>
                                                    </span>
                                                    <div><h3>After an Emergency Visit</h3></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                <p className="mt-0 fs-16 text-primary fw-normal">If you receive emergency care at an OON facility:</p>
                                                <ol className="ps-3 ms-1 fs-16 text-primary fw-normal">
                                                    <li>Confirm if the hospital submitted claims to Vault for processing.</li>
                                                    <li>Keep all bills and documentation for claims processing.</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="quick-steps-card">
                                    <h3 className="title">Remember:</h3>
                                    <p className="fs-16 text-primary fw-normal m-0">
                                        In a life-threatening situation, <strong>get care immediately</strong>—whether in-network or not. Your safety always comes first.
                                        But when the crisis is over, choosing in-network can make a big difference to your out-of-pocket costs.
                                    </p>
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
        
      `}</style>
        </main>
    );
}