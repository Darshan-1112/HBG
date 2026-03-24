"use client";
import React, { useState } from 'react';
import Head from 'next/head';

const AboutUs = () => {
    // Logic for the licensing table toggle
    const [isLicensingCollapsed, setIsLicensingCollapsed] = useState(true);

    const licenses = [
        { state: "Alabama", val: "3002314374" },
        { state: "Alaska", val: "16185783" },
        { state: "Arizona", val: "3002244951" },
        { state: "Arkansas", val: "3284550" },
        { state: "California", val: "0H78237" },
        { state: "Colorado", val: "16185783" },
        { state: "Connecticut", val: "2376872" },
        { state: "Delaware", val: "3001672353" },
        { state: "District of Columbia", val: "3002245149" },
        { state: "Florida", val: "W271314" },
        { state: "Georgia", val: "838630" },
        { state: "Hawaii", val: "3284550" },
        { state: "Idaho", val: "3284550" },
        { state: "Illinois", val: "3284550" },
        { state: "Indiana", val: "3852260" },
        { state: "Iowa", val: "3284550" },
        { state: "Kansas", val: "3284550" },
        { state: "Kentucky", val: "1248688" },
        { state: "Louisiana", val: "1025058" },
        { state: "Maine", val: "PRN113173" },
        { state: "Maryland", val: "2083971" },
        { state: "Massachusetts", val: "1952072" },
        { state: "Michigan", val: "3284550" },
        { state: "Minnesota", val: "40840444" },
        { state: "Mississippi", val: "10911928" },
        { state: "Missouri", val: "3002313489" },
        { state: "Montana", val: "3284550" },
        { state: "Nebraska", val: "3284550" },
        { state: "Nevada", val: "3850074" },
        { state: "New Hampshire", val: "3002245065" },
        { state: "New Jersey", val: "1302775" },
        { state: "New Mexico", val: "3284550" },
        { state: "New York", val: "1178660" },
        { state: "North Carolina", val: "3284550" },
        { state: "North Dakota", val: "3284550" },
        { state: "Ohio", val: "1479414" },
        { state: "Oklahoma", val: "3002313555" },
        { state: "Oregon", val: "3284550" },
        { state: "Pennsylvania", val: "604938" },
        { state: "Rhode Island", val: "3001672494" },
        { state: "South Carolina", val: "3284550" },
        { state: "South Dakota", val: "40666962" },
        { state: "Tennessee", val: "3284550" },
        { state: "Texas", val: "16185783" },
        { state: "Utah", val: "967419" },
        { state: "Vermont", val: "523368" },
        { state: "Virginia", val: "535849" },
        { state: "Washington", val: "854885" },
        { state: "West Virginia", val: "3284550" },
        { state: "Wisconsin", val: "3284550" }
    ];

    const visibleLicenses = isLicensingCollapsed ? licenses.slice(0, 5) : licenses;

    return (
        <>
            <Head>
                <title>About Solo</title>
                <meta name="description" content="Discover the best and most affordable self employed health plan options with Solo Health Collective." />
            </Head>

            {/* <Header /> */}

            <main id="maincontent" className="page-main-full-width">
                <div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true">

                    {/* Hero Section */}
                    <section className="about-us-hero-section">
                        <div className="about-hero-bg">
                            <video autoPlay muted loop playsInline className="hero-video">
                                <source src="/videos/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="custom-container">
                                <div className="main-div">
                                    <div className="breadcrumbs-about-us align-items-center d-flex d-md-none">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.4714 12.8047C10.7317 12.5444 10.7317 12.1223 10.4714 11.8619L6.60944 8L10.4714 4.13807C10.7317 3.87772 10.7317 3.45561 10.4714 3.19526C10.211 2.93491 9.7889 2.93491 9.52856 3.19526L5.66663 7.05719C5.14593 7.57789 5.14593 8.42211 5.66663 8.94281L9.52855 12.8047C9.7889 13.0651 10.211 13.0651 10.4714 12.8047Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div>
                                            <a className="text-white" href="/">Home</a> <span className="text-white">/</span>
                                            <a className="text-white">About us</a>
                                        </div>
                                    </div>
                                    <div className="about-solo-logo" style={{ display: 'block', width: '100%', height: '100%' }}>
                                        <img src="/images/about-solo.png" alt="About Solo" />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="about-title text-start">
                                            <p className="fs-65 fw-800">ABOUT</p>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row gap-30">
                                            <div className="about-us-content">
                                                <p>With <span>Solo</span> you’ll become part of a community of like-minded individuals
                                                    ready to make a difference in their healthcare. As a member of the <span>Solo
                                                        Health Collective</span>, you’ll be part of a population of health-conscious
                                                    members committed to keeping claim costs in check, ultimately leading to reduced
                                                    renewal increases year after year. This collective will unlock the savings that are
                                                    typically only available to larger companies.</p>
                                            </div>
                                            <div className="about-us-content">
                                                <p>Solo offers complete health coverage with major savings for those who can qualify for
                                                    the plan. Members must have an EIN (available to all businesses for free - our team
                                                    can show you how to get one). The HBG team behind Solo is passionate about making
                                                    the benefits landscape easier for businesses of one - this means you’ll have access
                                                    to concierge support, the option for virtual telemedicine and teletherapy from
                                                    Clever Health, and so much more.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Healthy Business Group Section */}
                    <section className="HBG background-gradient-btm-right">
                        <div className="custom-container">
                            <div className="breadcrumbs-about-us d-none d-lg-flex">
                                <div><img src="/images/breadcrumb-arrow.png" alt="arrow" /></div>
                                <div><a href="/">Home</a> <span>/</span> <a>About us</a></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6 d-none d-lg-block">
                                    <img src="/images/about-banner.png" className="img-fluid h-100" alt="Banner" />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="HGB-content">
                                        <div><img src="/images/HBG.png" className="img-fluid" alt="HBG" /></div>
                                        <h5 className="fs-32 fw-800 text-1">Healthy Business Group</h5>
                                        <div className="healthy-banner-img d-block d-md-none ">
                                            <img src="/images/about-banner.png" className="img-fluid" alt="Banner" />
                                        </div>
                                        <p>Healthy Business Group (HBG) provides leading solutions to improve health and wellness
                                            outcomes by offering an array of innovative benefits to both companies and individuals often
                                            overlooked in today’s workforce. Through years of experience, we have found that a company’s
                                            most dependable workers may not be eligible or have access to benefits in the traditional
                                            employer model. In 2022, we launched a direct to consumer benefits strategy.</p>
                                        <p>Our customized benefits stores are tailored for an organization's members or employees. Our
                                            stores are closely aligned with the expectations of today's online consumers; regarding ease
                                            of navigation, expanded choice of options, and positive consumer experience. In 2023, we
                                            further expanded our portfolio with the introduction of Solo Health Collective, a one of a
                                            kind captive solution designed specifically for entrepreneurs and sole proprietors fueling
                                            the rapidly growing gig-economy.</p>
                                        <p>Solo enables businesses of one to access comprehensive medical coverage on the nation’s
                                            largest PPO network, while saving 20-50% off traditional coverage options. Through our
                                            innovative products and technology, we are able to deliver benefit solutions that seamlessly
                                            address the unique needs of customer’s workforce, whether they have full-time, part-time, or
                                            independent workers - truly bringing health to everyone, everywhere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* In The News Section */}
                    <section className="in-the-news">
                        <div className="custom-container">
                            <div className="news-content">
                                <h5 className="fs-32 fw-800 text-1">In the News</h5>
                                <p className="text-1 fs-18">Listen to Solo discussions on podcasts and in media</p>
                            </div>
                        </div>
                    </section>

                    {/* Desktop and Mobile Podcast blocks are handled in CSS imported via a11.css */}
                    <section className="HBG background-gradient-btm-right podcast-section">
                        <div className="custom-container" id="d-block-about">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/3Fgr3b19fmhRbW1grVcoJP?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen loading="lazy"></iframe>
                                    <h6 className="text-primary fw-bold mt-3">Episode Description</h6>
                                    <p className="text-primary fs-14">Laura discusses affordable health plans and benefits for freelancers and solo business owners. Joined by Tom Morrissey from Healthy Business Group and Rafael Espinal from the Freelancers Union, they cover tips for accessing support and choosing the right coverage as an independent worker.</p>
                                </div>
                                <div className="col-md-6 col-12">
                                    <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/3TNWy7mQeIeXnHCdOseumY?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen loading="lazy"></iframe>
                                    <h6 className="text-primary fw-bold mt-3">Episode Description</h6>
                                    <p className="text-primary fs-14">Solo Health Collectice is a health plan for sole proprietors, independent contractors and gig workers. Today we’re joined by Kylie Morrissey, Director of Marketing and Michael Bowen, Customer Success Lead to discuss entrepreneurship, comprehensive health coverage for business owners and the “benefits” of HBG Solo.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Licensing Section */}
                    <section className="license-section background-gradient-right" id="license">
                        <div className="custom-container">
                            <div className="mb-2">
                                <img className="img-fluid" src="/images/light_1.png" alt="Light" />
                            </div>
                            <div className="license-heading">
                                <p className="fs-45 fw-800 text-1">Licensing</p>
                            </div>
                            <div className="sub-heading">
                                <p className="title-one fs-24 text-1">Review state licenses and compliance information.</p>
                            </div>
                            <div className="license-content">
                                <h2 className="main-title fs-32 fw-800 text-1">Healthy Business Group, LLC</h2>
                                <p className="desc text-1 fs-16">Insurance services are provided by Healthy Business Group, LLC (NPN 16185783). State licensing information is provided below.</p>

                                <div className="license-table">
                                    <div className="row heading">
                                        <div className="col text-1 fw-bold">NPN</div>
                                        <div className="col text-1">16185783</div>
                                    </div>
                                    <div className="row">
                                        <div className="col fw-bold">Thomas Morrissey <span className="fw-normal">3284550</span></div>
                                    </div>
                                    {visibleLicenses.map((item, index) => (
                                        <div key={index} className="row">
                                            <div className="col fw-bold text-1">{item.state}</div>
                                            <div className="col text-1">{item.val}</div>
                                        </div>
                                    ))}
                                </div>


                                <div className="show-toggle  mt-4">
                                    <button
                                        id="toggleRows"
                                        className="btn btn-primary"
                                        onClick={() => setIsLicensingCollapsed(!isLicensingCollapsed)}
                                    >
                                        {isLicensingCollapsed ? "Show All" : "Show Less"}
                                    </button>
                                </div>
                            </div>

                            {/* Mail Subscription */}
                            <div className="about-mail pb-0">
                                <div className="headings">
                                    <h5 className="text-capitalize fs-32 fw-800 text-1">Stay informed about Solo</h5>
                                    <p className="text-1 fs-16">Subscribe to stay up to date on the latest news and offerings from Solo & HBG.</p>
                                </div>
                                <div className="faq-search pt-0 pt-md-3">
                                    <input className="text-primary fw-semibold fs-14" type="text" placeholder="Your email" />
                                    <div className="search-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 6H19C19.3862 6 19.7213 6.21897 19.8879 6.53954L12.5547 11.4283C12.2188 11.6523 11.7812 11.6523 11.4453 11.4283L4.11209 6.53953C4.27868 6.21896 4.61377 6 5 6ZM4 8.8685V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8.86852L13.6641 13.0924C12.6564 13.7642 11.3436 13.7642 10.3359 13.0924L4 8.8685ZM2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z" fill="#262965" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="get-started-btns">
                                    <a className="btn-one text-center fs-14 fw-bold">Schedule a Call</a>
                                    <a className="btn-two text-center fs-14 fw-bold">Subscribe Now</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* <Footer /> */}
        </>
    );
};

export default AboutUs;