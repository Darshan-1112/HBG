import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <>


            <main id="maincontent" className="page-main">
                {/* Page Title for Accessibility/SEO (Hidden or Styled per your CSS) */}
                <style>{`
                     body {
                     background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
                      }
                 `}</style>

                {/* Hero Section */}
                <section className="network-hero-section">
                    <div className="container">
                        <div className="mb-2">
                            <img
                                className="img-fluid"
                                src="/images/book.png"
                                alt="Privacy Icon"
                            />
                        </div>
                        <div className="network-headeing">
                            <p>Privacy Policy</p>
                        </div>
                        <div className="sub-heading">
                            <p className="title-one">Privacy Policy</p>
                            This Privacy Policy<p className="text-primary">This Privacy Policy describes how Solo Health Collective, operated by Healthy Business Group ("Solo," "we," "us," or "our"), collects, uses, and protects information gathered through hbgsolo.com (the "Site"). By using the Site, you agree to the practices described in this policy.
                            </p>
                            <p className="text-primary">This policy applies to the hbgsolo.com website only. It covers data collected through site visits, contact forms, the enrollment intake process, and our website AI assistant. It does not govern data practices that occur after plan enrollment — such as claims processing, pharmacy benefits, or clinical care — which are addressed in separate member-facing documents. This policy also does not govern partner subdomain pages, which may have their own applicable disclosures. We recommend reviewing this policy periodically. We will update the Effective Date when material changes are made.
                            </p>
                            <p className="text-primary" style={{ color: '#7070a0' }} >Effective Date: March 2026  |  Last Updated: March 2026  |  Operated by Healthy Business Group</p>
                        </div>
                    </div>
                </section>

                {/* Accordion/Content Section */}
                <section className="network-acordian">
                    <div className="container">
                        <div className="breadcrumbs">
                            <div>
                                <img src="/images/breadcrumb-arrow.png" alt="arrow" />
                            </div>
                            <div>
                                <Link href="/">Home</Link> <span>/</span>
                                <a>Privacy and Cookie Policy</a>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="MB-32">
                            <h2 className="m-0 mb-1 text-primary fs-24 fw-bold">What we collect</h2>
                            <p className="m-0 mt-3 mb-3 text-primary fs-16">When you use the Site to request information, begin enrollment, or contact us, you may provide:</p>
                            <ul>
                                <li className="text-primary">Full name, email address, phone number, and mailing address</li>
                                <li className="text-primary">Date of birth and Social Security Number (SSN), collected for identity verification purposes during enrollment intake</li>
                                <li className="text-primary">Business information, including your Employer Identification Number (EIN)</li>
                                <li className="text-primary">Payment information, processed through our secure payment provider (Stripe)</li>
                                <li className="text-primary">Health questionnaire responses submitted during the enrollment process</li>
                                <li className="text-primary">Messages submitted through contact forms, the AI assistant, or email</li>
                            </ul>
                            <p className="text-primary">
                                If you enroll dependents — such as a spouse or children — we collect the same categories of identifying information for each covered individual during enrollment intake, including full name, date of birth, Social Security Number, and their relationship to you. Dependent health questionnaire responses are subject to the same pass/fail handling described below.</p>
                            <p className="text-primary">
                                When you visit the Site, we also collect certain information automatically through cookies and similar technologies: IP address, browser type, device type and operating system, pages visited, time on site, referring URLs, click behavior, and cookie identifiers.</p>
                            <p className="text-primary">
                                <strong>A note on health questionnaire responses:</strong> Health questionnaire responses submitted during enrollment — for you and any dependents — are used solely to determine eligibility. We do not store individual question responses after the eligibility determination is complete. We record only the outcome — approved or not approved — for administrative purposes.</p>
                        </div>
                        <div className="MB-32">
                            <h2 className="m-0 mb-1 text-primary fs-24 fw-bold">What we do with the information we gather</h2>
                            <p className="m-0 mt-3 text-primary fs-16"> We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
                            <ul>
                                <li className="text-primary">Internal record keeping.</li>
                                <li className="text-primary">We may provide the information to third-party service providers as defined by the Terms and Conditions.</li>
                                <li className="text-primary">We may use the information to improve our products and services.</li>
                                <li className="text-primary">
                                    We may periodically send promotional emails about new products, special offers or other information that we think you may find interesting using the email address which you have provided.
                                </li>
                                <li className="text-primary">From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, or mail. We may use the information to customize the website according to your interests.</li>
                            </ul>
                        </div>
                        <div className="MB-32">
                            <h2 className="m-0 mb-1 text-primary fs-24 fw-bold">Security</h2>
                            <p className="m-0 mt-3 text-primary fs-16"> We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place physical, electronic and managerial procedures to safeguard and secure the information we collect online. All sensitive data is protected to the highest industry standards.</p>

                        </div>
                        <div className="MB-32">
                            <h2 className="m-0 mb-1 text-primary fs-24 fw-bold">How we use cookies</h2>
                            <p className="m-0 mt-3 text-primary fs-16">A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
                            <p className="m-0 mt-3 text-primary fs-16">We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.</p>
                            <p className="m-0 mt-3 text-primary fs-16">Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>

                        </div>
                        <div className="MB-32">
                            <h2 className="m-0 mb-1 text-primary fs-24 fw-bold">Links to other websites</h2>
                            <p className="m-0 mt-3 text-primary fs-16"> Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
                        </div>
                        <div className="MB-32">
                            <h2 className="m-0 mb-1 text-primary fs-24 fw-bold">Controlling your personal information</h2>
                            <p className="m-0 mt-3 text-primary fs-16">We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.</p>
                            <p className="m-0 mt-3 text-primary fs-16">You may request details of your personal information that we hold under the Data Protection Act 1998. If you would like a copy of the information held on you, please email this request to <a href="mailto:support@hbgnow.com">support@hbgnow.com</a>.</p>
                            <p className="m-0 mt-3 text-primary fs-16">If you believe that any information we are holding is incorrect or incomplete, please email us as soon as possible at <a href="mailto:support@hbgnow.com">support@hbgnow.com</a>. We will promptly correct any information found to be incorrect.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PrivacyPolicy;