"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
// Import your already created Header and Footer components here
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const AboutUs = () => {
    const [isLicensingCollapsed, setIsLicensingCollapsed] = useState(true);

    const licenses = [
        { state: "Alabama", npn: "3002314374" },
        { state: "Alaska", npn: "16185783" },
        { state: "Arizona", npn: "3002244951" },
        { state: "Arkansas", npn: "3284550" },
        { state: "California", npn: "0H78237" },
        { state: "Colorado", npn: "16185783" },
        { state: "Connecticut", npn: "2376872" },
        { state: "Delaware", npn: "3001672353" },
        { state: "District of Columbia", npn: "3002245149" },
        { state: "Florida", npn: "W271314" },
        { state: "Georgia", npn: "838630" },
        { state: "Hawaii", npn: "3284550" },
        { state: "Idaho", npn: "3284550" },
        { state: "Illinois", npn: "3284550" },
        { state: "Indiana", npn: "3852260" },
        { state: "Iowa", npn: "3284550" },
        { state: "Kansas", npn: "3284550" },
        { state: "Kentucky", npn: "1248688" },
        { state: "Louisiana", npn: "1025058" },
        { state: "Maine", npn: "PRN113173" },
        { state: "Maryland", npn: "2083971" },
        { state: "Massachusetts", npn: "1952072" },
        { state: "Michigan", npn: "3284550" },
        { state: "Minnesota", npn: "40840444" },
        { state: "Mississippi", npn: "10911928" },
        { state: "Missouri", npn: "3002313489" },
        { state: "Montana", npn: "3284550" },
        { state: "Nebraska", npn: "3284550" },
        { state: "Nevada", npn: "3850074" },
        { state: "New Hampshire", npn: "3002245065" },
        { state: "New Jersey", npn: "1302775" },
        { state: "New Mexico", npn: "3284550" },
        { state: "New York", npn: "1178660" },
        { state: "North Carolina", npn: "3284550" },
        { state: "North Dakota", npn: "3284550" },
        { state: "Ohio", npn: "1479414" },
        { state: "Oklahoma", npn: "3002313555" },
        { state: "Oregon", npn: "3284550" },
        { state: "Pennsylvania", npn: "604938" },
        { state: "Rhode Island", npn: "3001672494" },
        { state: "South Carolina", npn: "3284550" },
        { state: "South Dakota", npn: "40666962" },
        { state: "Tennessee", npn: "3284550" },
        { state: "Texas", npn: "16185783" },
        { state: "Utah", npn: "967419" },
        { state: "Vermont", npn: "523368" },
        { state: "Virginia", npn: "535849" },
        { state: "Washington", npn: "854885" },
        { state: "West Virginia", npn: "3284550" },
        { state: "Wisconsin", npn: "3284550" }
    ];

    const visibleLicenses = isLicensingCollapsed ? licenses.slice(0, 5) : licenses;

    return (
        <>
            <Head>
                <title>About Solo - Solo Health Collective</title>
                <meta name="description" content="Discover the best and most affordable self employed health plan options with Solo Health Collective." />
            </Head>

            {/* <Header /> */}

            <main id="maincontent" className="page-main-full-width">
                {/* Hero Section */}
                <section className="about-us-hero-section">
                    <div className="about-hero-bg">
                        <video autoPlay muted loop playsInline className="hero-video">
                            <source src="https://hbgsolo.com/media/Hero-Img-PlaceHolder-Simple.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="custom-container">
                            <div className="main-div">
                                <div className="breadcrumbs-about-us align-items-center d-flex d-md-none">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10.4714 12.8047C10.7317 12.5444 10.7317 12.1223 10.4714 11.8619L6.60944 8L10.4714 4.13807C10.7317 3.87772 10.7317 3.45561 10.4714 3.19526C10.211 2.93491 9.7889 2.93491 9.52856 3.19526L5.66663 7.05719C5.14593 7.57789 5.14593 8.42211 5.66663 8.94281L9.52855 12.8047C9.7889 13.0651 10.211 13.0651 10.4714 12.8047Z" fill="white" /></svg>
                                    <a className="text-white" href="/">Home</a> <span className="text-white mx-2">/</span>
                                    <a className="text-white">About us</a>
                                </div>
                                <div className="about-solo-logo" style={{ display: 'block', width: '100%', height: '100%' }}>
                                    <img src="https://hbgsolo.com/media/.renditions/wysiwyg/about-solo.png" alt="Solo Logo" />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="about-title text-start">
                                        <p className="fs-65 fw-800 text-white">ABOUT</p>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row gap-30">
                                        <div className="about-us-content text-white fs-16">
                                            <p>With <span>Solo</span> you’ll become part of a community of like-minded individuals
                                                ready to make a difference in their healthcare. As a member of the <span>Solo
                                                    Health Collective</span>, you’ll be part of a population of health-conscious
                                                members committed to keeping claim costs in check, ultimately leading to reduced
                                                renewal increases year after year. This collective will unlock the savings that are
                                                typically only available to larger companies.</p>
                                        </div>
                                        <div className="about-us-content text-white fs-16">
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

                {/* HBG Section */}
                <section className="HBG background-gradient-btm-right py-5">
                    <div className="custom-container">
                        <div className="breadcrumbs-about-us d-none d-lg-flex mb-5">
                            <img src="https://hbgsolo.com/media/.renditions/wysiwyg/breadcrumb-arrow.png" alt="arrow" className="me-2" />
                            <a href="/">Home</a> <span className="mx-2">/</span>
                            <a>About us</a>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6 d-none d-lg-block">
                                <img src="https://hbgsolo.com/media/.renditions/wysiwyg/about-us-banner.png" className="img-fluid h-100" alt="About Us Banner" />
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="HGB-content">
                                    <img src="https://hbgsolo.com/media/.renditions/wysiwyg/HBG.png" className="img-fluid mb-4" alt="HBG Logo" />
                                    <h5 className="fs-32 fw-800 text-1 mb-4">Healthy Business Group</h5>
                                    <div className="healthy-banner-img d-block d-md-none mb-4">
                                        <img src="https://hbgsolo.com/media/.renditions/wysiwyg/about-us-banner.png" className="img-fluid" alt="Mobile Banner" />
                                    </div>
                                    <p className='fs-16 text-1'>Healthy Business Group (HBG) provides leading solutions to improve health and wellness
                                        outcomes by offering an array of innovative benefits to both companies and individuals often
                                        overlooked in today’s workforce. Through years of experience, we have found that a company’s
                                        most dependable workers may not be eligible or have access to benefits in the traditional
                                        employer model. In 2022, we launched a direct to consumer benefits strategy.</p>
                                    <p className='fs-16 text-1'>Our customized benefits stores are tailored for an organization's members or employees. Our
                                        stores are closely aligned with the expectations of today's online consumers; regarding ease
                                        of navigation, expanded choice of options, and positive consumer experience. In 2023, we
                                        further expanded our portfolio with the introduction of Solo Health Collective, a one of a
                                        kind captive solution designed specifically for entrepreneurs and sole proprietors fueling
                                        the rapidly growing gig-economy.</p>
                                    <p className='fs-16 text-1'>Solo enables businesses of one to access comprehensive medical coverage on the nation’s
                                        largest PPO network, while saving 20-50% off traditional coverage options. Through our
                                        innovative products and technology, we are able to deliver benefit solutions that seamlessly
                                        address the unique needs of customer’s workforce, whether they have full-time, part-time, or
                                        independent workers - truly bringing health to everyone, everywhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* In the News / Podcasts */}
                <section className="in-the-news py-5">
                    <div className="custom-container text-center">
                        <div className="news-content">
                            <h5 className="fs-32 fw-800 text-1">In the News</h5>
                            <p className="fs-18 text-1">Listen to Solo discussions on podcasts and in media</p>
                        </div>
                    </div>
                </section>

                <section className="HBG background-gradient-btm-right pb-5">
                    <div className="custom-container" id="d-block-about">
                        <div className="row g-4">
                            <div className="col-md-6 col-12">
                                <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/3Fgr3b19fmhRbW1grVcoJP?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen loading="lazy"></iframe>
                                <h6 className="text-1 fw-bold mt-3">Episode Description</h6>
                                <p className="text-1 fs-14">Laura discusses affordable health plans and benefits for freelancers and solo business owners. Joined by Tom Morrissey from Healthy Business Group and Rafael Espinal from the Freelancers Union, they cover tips for accessing support and choosing the right coverage as an independent worker.</p>
                            </div>
                            <div className="col-md-6 col-12">
                                <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/episode/3TNWy7mQeIeXnHCdOseumY?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen loading="lazy"></iframe>
                                <h6 className="text-1 fw-bold mt-3">Episode Description</h6>
                                <p className="text-1 fs-14">Solo Health Collectice is a health plan for sole proprietors, independent contractors and gig workers. Today we’re joined by Kylie Morrissey, Director of Marketing and Michael Bowen, Customer Success Lead to discuss entrepreneurship, comprehensive health coverage for business owners and the “benefits” of HBG Solo.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Licensing Section */}
                <section className="license-section background-gradient-right py-5" id="license">
                    <div className="custom-container">
                        <div className="mb-2">
                            <img className="img-fluid" src="https://hbgsolo.com/media/.renditions/wysiwyg/light_1.png" alt="Licensing Light" />
                        </div>
                        <div className="license-heading mb-4">
                            <p className="fs-45 fw-800 text-1">Licensing</p>
                        </div>
                        <div className="sub-heading mb-5">
                            <p className="title-one fs-24 text-1">Review state licenses and compliance information.</p>
                        </div>
                        <div className="license-content">
                            <h2 className="main-title fs-32 fw-800 text-1 mb-3">Healthy Business Group, LLC</h2>
                            <p className="desc text-1 mb-4">Insurance services are provided by Healthy Business Group, LLC (NPN 16185783).</p>

                            <div className="license-table">
                                <div className="row heading bg-light p-3 border-bottom">
                                    <div className="col fw-bold text-1">NPN</div>
                                    <div className="col text-1">16185783</div>
                                </div>
                                <div className="row p-3 border-bottom">
                                    <div className="col fw-bold text-1">Thomas Morrissey <span className="fw-normal">3284550</span></div>
                                </div>
                                {visibleLicenses.map((lic, index) => (
                                    <div className="row p-3 border-bottom" key={index}>
                                        <div className="col fw-bold text-1">{lic.state}</div>
                                        <div className="col text-1">{lic.npn}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="show-toggle text-center mt-4">
                                <button className="btn btn-primary" onClick={() => setIsLicensingCollapsed(!isLicensingCollapsed)}>
                                    {isLicensingCollapsed ? 'Show All' : 'Show Less'}
                                </button>
                            </div>
                        </div>

                        {/* Subscription Mail Section */}
                        <div className="about-mail mt-5 p-5 text-center bg-white rounded-20 shadow-sm">
                            <div className="headings mb-4">
                                <h5 className="fs-32 fw-800 text-1 text-capitalize">Stay informed about Solo</h5>
                                <p className="text-1">Subscribe to stay up to date on the latest news and offerings from Solo & HBG.</p>
                            </div>
                            <div className="faq-search mb-4">
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5 6H19C19.3862 6 19.7213 6.21897 19.8879 6.53954L12.5547 11.4283C12.2188 11.6523 11.7812 11.6523 11.4453 11.4283L4.11209 6.53953C4.27868 6.21896 4.61377 6 5 6ZM4 8.8685V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8.86852L13.6641 13.0924C12.6564 13.7642 11.3436 13.7642 10.3359 13.0924L4 8.8685ZM2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z" fill="#262965" /></svg>
                                    </span>
                                    <input className="form-control border-start-0 text-1 fw-semibold fs-14" type="text" placeholder="Your email" />
                                </div>
                            </div>
                             <div className="get-started-btns">
                <a
                  className="btn-one text-center"
                  href="https://calendly.com/d/ckh2-xd6-qjd/benefits-conversation-with-hbg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </a>
                <a className="btn-two text-center" href="#">
                  Subscribe Now
                </a>
              </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </>
    );
};

export default AboutUs;