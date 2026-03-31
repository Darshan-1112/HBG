"use client";
import React from 'react';

import Link from 'next/link';

const DisclosureStatement = () => {
    return (
        <>


            <main id="maincontent" className="page-main">
                {/* Page Title Wrapper */}
                <style>{`
                     body {
                     background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
                      }
                 `}</style>

                <div className="disc-hbg">
                    {/* Hero Section */}
                    <section className="network-hero-section">
                        <div className="container">
                            <div className="mb-2">
                                <img
                                    className="img-fluid"
                                    src="/images/book.png"
                                    alt="Disclosure Icon"
                                />
                            </div>
                            <div className="network-headeing">
                                <p>Disclosure Statement</p>
                            </div>
                            <div className="sub-heading">
                                <p className="title-one">Disclosure Statement</p>
                            </div>
                        </div>
                    </section>

                    {/* Breadcrumbs and Content Section */}
                    <section className="network-acordian">
                        <div className="container">
                            <div className="breadcrumbs">
                                <div>
                                    <img
                                        src="/images/breadcrumb-arrow.png"
                                        alt="arrow"
                                    />
                                </div>
                                <div>
                                    <Link href="/">Home</Link> <span>/</span>
                                    <a>Disclosure Statement</a>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <ul>
                                <li>Solo does not make any payments directly to the providers of medical services.</li>
                                <li>Members are responsible for any applicable copayments as listed in the program description.</li>
                                <div className="MB-32">
                                    <h2 className="m-0 mb-1 text-primary fs-24 fw-bold">Cancellation policy</h2>
                                    <li className="mt-3">To terminate or cancel your subscription, send a written cancellation notice to <a href="mailto:support@hbgnow.com">support@hbgnow.com</a> at least five days (5) prior to your next scheduled payment date. This program may be cancelled for non-payment.</li>

                                </div>
                                <div className="MB-32">
                                    <h2 className="m-0 mb-1 text-primary fs-24 fw-bold">Issue resolution:</h2>
                                    <li className="mt-3">For any concerns or issues when using this program please contact us at <a href="mailto:support@hbgnow.com">support@hbgnow.com</a> and we will be happy to assist. Your issue will be researched and a resolution reached in three (3) business days</li>


                                </div>

                                <div className="MB-32">
                                    <h2 className="m-0 mb-1 text-primary fs-24 fw-bold">Refund Policy</h2>
                                    <li className="mt-3">It is the customer's responsibility to cancel your benefits on time and in writing. Refunds will not be honored for late cancellation requests. If you feel you have been incorrectly charged, please get in touch with us at <a href="mailto:support@hbgnow.com">support@hbgnow.com</a> or <a href="tel:888-655-4053">888-655-4053</a> to discuss refund options.</li>

                                </div>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default DisclosureStatement;