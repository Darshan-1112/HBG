"use client";
// src/app/faq/page.js
// ─────────────────────────────────────────────────────────────────────────────
// EXACT 1:1 conversion of hbgsolo.com/faq
// NO custom CSS — all styling from a11.css loaded in layout.js
// Tab switching: original uses openCity(event, tabName) → replicated with useState
// Desktop: #d-block-faq (flex, hidden on mobile)
// Mobile:  #m-block-faq (block, hidden on desktop)
// CSS selectors:
//   .faq-hero-section
//   .faq-content-section .main-card-div .faq-card
//   .tablinks.active
//   .faq-content-section .main-content-div .content-faq
//   .network-acordian .custom-network-accordion
//   .download-section .pdf-main-div .pdf-card .download-button a
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState("Eligibility");

  function openCity(tabName) {
    setActiveTab(tabName);
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="faq-hero-section">
        <div className="container">
          <div className="mb-2">
            <img className="img-fluid" src="/images/light.png" alt="" />
          </div>
          <div className="faq-heading">
            <p>Frequently</p>
            <p>Asked Questions</p>
          </div>
          <div className="sub-heading">
            <p className="title-one">Solo Health Collective – Nationwide PPO Health Plan</p>
            <p className="title-two">This resource provides clear answers to common questions about Solo Health Collective. From eligibility and enrollment requirements to plan benefits, billing, and network access, our FAQ helps members and prospective enrollees understand how Solo works. For complete details, please reference your official Summary Plan Description (SPD).</p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="faq-content-section">
        <div className="container">
          <div className="breadcrumbs">
            <div>
              <img src="/images/breadcrumb-arrow.png" alt="arrow" />
            </div>
            <div>
              <Link href="/">Home</Link> <span>/</span>
              <a>Frequently Asked Questions</a>
            </div>
          </div>

          {/* ── DESKTOP LAYOUT ── */}
          <div className="row gy-5 g-0 g-lg-5" id="d-block-faq">
            {/* Left sidebar — category cards */}
            <div className="col-12 col-lg-5">
              <div className="main-card-div">

                <div className={`faq-card tablinks${activeTab === "Eligibility" ? " active" : ""}`} onClick={() => openCity("Eligibility")}>
                  <div><img src="/images/insurance-benefits-light.png" alt="" /></div>
                  <div className="faq-card-content">
                    <h3>Eligibility and Requirements</h3>
                    <p>Learn who qualifies for Solo Health Collective and what&apos;s needed to join.</p>
                  </div>
                </div>

                <div className={`faq-card tablinks${activeTab === "Overview" ? " active" : ""}`} onClick={() => openCity("Overview")}>
                  <div><img src="/images/insurance-light.png" alt="" /></div>
                  <div className="faq-card-content">
                    <h3>Overview</h3>
                    <p>Understand how Solo works, what makes it different, and why solopreneurs choose us.</p>
                  </div>
                </div>

                <div className={`faq-card tablinks${activeTab === "Establishment" ? " active" : ""}`} onClick={() => openCity("Establishment")}>
                  <div><img src="/images/presentation-light.png" alt="" /></div>
                  <div className="faq-card-content">
                    <h3>Plan Establishment and Process</h3>
                    <p>Details on setting up your health plan and what to expect along the way.</p>
                  </div>
                </div>

                <div className={`faq-card tablinks${activeTab === "Plan" ? " active" : ""}`} onClick={() => openCity("Plan")}>
                  <div><img src="/images/design_light.png" alt="" /></div>
                  <div className="faq-card-content">
                    <h3>Plan Designs</h3>
                    <p>Explore basics and how Solo&apos;s plan design fits your needs.</p>
                  </div>
                </div>

                <div className={`faq-card tablinks${activeTab === "Captive" ? " active" : ""}`} onClick={() => openCity("Captive")}>
                  <div><img src="/images/insurance-benefits-light.png" alt="" /></div>
                  <div className="faq-card-content">
                    <h3>Understanding The VAULT Captive</h3>
                    <p>Discover how the captive model works to control costs and protect members.</p>
                  </div>
                </div>

                <div className={`faq-card tablinks${activeTab === "Changing" ? " active" : ""}`} onClick={() => openCity("Changing")}>
                  <div><img src="/images/trending_light.png" alt="" /></div>
                  <div className="faq-card-content">
                    <h3>Changing From Your Current Plan</h3>
                    <p>Things to Know</p>
                  </div>
                </div>

                <div className={`faq-card tablinks${activeTab === "Support" ? " active" : ""}`} onClick={() => openCity("Support")}>
                  <div><img src="/images/helpdesk_light.png" alt="" /></div>
                  <div className="faq-card-content">
                    <h3>Contacting Support</h3>
                    <p>We&apos;re Here to Help.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right content panels */}
            <div id="Eligibility" className="tabcontent col-12 col-lg-7" style={{display: activeTab === "Eligibility" ? "block" : "none"}}>
              <div className="main-content-div">
                <div className="content-faq">
                  <h4>Am I eligible for Solo Health Collective?</h4>
                  <p>To establish your plan, you must be an independent, self-employed business owner. The business must have its own federal Tax ID.; Complete a short health questionnaire and be accepted. A federal tax ID can be from an LLC, S-corp, or other business structure.</p>
                </div>
                <div className="content-faq">
                  <h4>What is the structure of Solo Health Collective?</h4>
                  <p>Solo members join Vault Health Captive, a captive insurance company domiciled and regulated by the North Carolina Department of Insurance. You will establish a self-funded plan for your &apos;business of one&apos;, which means you are an owner of the captive and are represented by its Advisory Board.</p>
                </div>
                <div className="content-faq">
                  <h4>What plan design options are there?</h4>
                  <p>There are three model plan designs for the business. Those plan levels offer deductibles of $2,500, $5,000, and $10,000 – and, unlike the ACA, the deductibles are also the out-of- pocket maximums, with the exception of co-pays for tier 2 and above pharmacy benefits (once the annual deductible is satisfied). As the owner of your self-funded plan, you have the right to request a change of your selected plan design; however, Solo Health Collective and Vault, as administrators, must approve. Plan design change will result in re-rating and could result in a change in your monthly payment. Once contracts are signed, you must wait until renewal to select a different plan design.</p>
                </div>
                <div className="content-faq">
                  <h4>Network &amp; Claims:</h4>
                  <p>You have access to Multiplan PHCS, a nationwide PPO Physician Network. Check their doctor list <a href="/pub/media/Solo%20Provider%20Search.pdf" target="_blank">here</a>. Be sure to compare your explanation of benefits to the provider bill and contact Vault Admin Services, our claims administrator, if they do not match.</p>
                </div>
                <div className="content-faq">
                  <h4>What are some of the benefits of the plan designs?</h4>
                  <p>The structure, plan designs and application of a health questionnaire are all components designed to allow the captive to remain healthy now and in the long run. As the cost of healthcare continues to increase, the captive will choose how to control costs by adjusting participation requirements or plan benefits. Other benefits may include:</p>
                  <ul className="benefits_ul">
                    <li>Potential savings vs. the ACA Exchange</li>
                    <li>Access to a national physician PPO network or go to any doctor of your choice</li>
                    <li>Two HSA eligible plan design options with business tax deductible premiums (always confirm with a tax professional)</li>
                    <li>Three major plan design options.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="Overview" className="tabcontent col-12 col-lg-7" style={{display: activeTab === "Overview" ? "block" : "none"}}>
              <div className="main-content-div">
                <div className="content-faq">
                  <h4>How do I establish my plan?</h4>
                  <p>Creating your plan is simple and secure right on our website. Calculate your cost, review the plan design options, complete and pass a medical questionnaire, select your plan design, sign final contracts, enter payment information, and you&apos;re done.</p>
                </div>
                <div className="content-faq">
                  <h4>What are the requirements in order for me to participate?</h4>
                  <p>The structure, plan designs and application of a health questionnaire are all components designed to allow the captive to remain healthy now and in the long run. As the cost of healthcare continues to increase, the captive will choose how to control costs by adjusting participation requirements or plan benefits. Other benefits may include:</p>
                  <ul className="benefits_ul">
                    <li>Potential savings vs. the ACA Exchange</li>
                    <li>Access to a national physician PPO network or go to any doctor of your choice</li>
                    <li>Two HSA eligible plan design options with business tax deductible premiums (always confirm with a tax professional)</li>
                    <li>Three major plan design options.</li>
                  </ul>
                  <p>If you do not pass the medical questionnaire, your business will not be allowed to establish your plan within the captive (information on the next page). You may not be admitted based on the results of your health questionnaire or if you do not meet other eligibility requirements.</p>
                </div>
                <div className="content-faq">
                  <h4>Information on monthly fees:</h4>
                  <p>Regardless of when you establish your plan and participate in the captive, any changes to monthly fees, details or plan designs will occur January 1 each year. In early November, each plan will have the opportunity to renew for the next calendar year. Monthly fees are guaranteed through the end of the calendar year.</p>
                </div>
                <div className="content-faq">
                  <h4>What is a health questionnaire and is it mandatory?</h4>
                  <p>There is no individual medical underwriting, but applicants must complete a short health questionnaire. The client support team will not request nor view your medical history. Your health questionnaire will not be used for any purpose other than determining your eligibility. It will not be shared with or released to any other entity. You may view the health questions <a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:273e203e-dd84-433d-9211-6354a19bb78f" target="_blank">here.</a></p>
                </div>
              </div>
            </div>

            <div id="Establishment" className="tabcontent col-12 col-lg-7" style={{display: activeTab === "Establishment" ? "block" : "none"}}>
              <div className="main-content-div">
                <div className="content-faq">
                  <h4>How long does it take to join?</h4>
                  <p>You can proceed from viewing your estimate to signing documents in a matter of minutes.</p>
                </div>
                <div className="content-faq">
                  <h4>Which of the plan designs are HSA eligible?</h4>
                  <p>Two of the three plan designs ($2,500 and $5,000 deductibles) are HSA eligible.</p>
                </div>
                <div className="content-faq">
                  <h4>How do I pay my monthly fees?</h4>
                  <p>You may choose to pay via ACH bank draft, credit, or debit card. Your first payment will be automatically drafted on your policy effective date and you will be placed on autopay with 1st of the month payments each month the policy remains active.</p>
                </div>
                <div className="content-faq">
                  <h4>When will I receive my medical ID cards?</h4>
                  <p>On your policy effective date you will receive an email from <a href="mailto:support@hbgnow.com">support@hbgnow.com</a> with instructions to access your Member Portal. This email will include instructions to download your digital ID card. Your physical card will be mailed within 2-3 weeks following your policy effective date.</p>
                </div>
                <div className="content-faq">
                  <h4>What carrier or network will be listed on my ID cards?</h4>
                  <p>Your card will display Multiplan PHCS PPO information. This is the provider network which you can use to determine which doctors are in network. Your card will provide Vault Admin Services information, which is the plan administrator. The administrator information is on the card so claims can be managed and processed.</p>
                </div>
              </div>
            </div>

            <div id="Plan" className="tabcontent col-12 col-lg-7" style={{display: activeTab === "Plan" ? "block" : "none"}}>
              <div className="main-content-div">
                <div className="content-faq">
                  <h4>How does Solo Health Collective differ from other insurance programs?</h4>
                  <p>Your business is establishing a self-funded health plan and your business is joining the Captive as a class member. All participating companies combine funds into a larger pool, from which all participants draw to fund their health services. Each owner is key to keeping the plan healthy. Owners should take an active role in seeking out friendly providers, providers in the Multiplan PHCS network, or others who are open to reference-based pricing, reviewing their claim reimbursements and working with claims advocates when necessary. Members stand to benefit from the performance of the plan in the form of more affordable premiums and healthcare each year if the group spends wisely. Plan designs are simple. Your deductible and out-of-pocket maximums are the same – once you hit your deductible, claims are paid at 100% with the exception of Pharmacy Tier 2 and above.</p>
                </div>
                <div className="content-faq">
                  <h4>What medical provider network do I use?</h4>
                  <p>Start by searching the Multiplan PHCS network by <a href="/our-network" target="_blank">clicking here</a>. If your preferred provider does not appear you can use any doctor you choose with the exception of HMO providers. Simply provide your card to your physician&apos;s office and have them contact the claims team to coordinate payment. Contact information will be on the back of the card, just like other insurance cards you are used to using. It&apos;s important you do not pay for your healthcare services up front; if your provider doesn&apos;t want to call the number on the back to verify the plan, you should insist.</p>
                </div>
                <div className="content-faq">
                  <h4>Is preventive care covered?</h4>
                  <p>Similar to ACA plans, qualified preventative services are not subject to the deductible, and are covered 100% within plan designs.</p>
                </div>
                <div className="content-faq">
                  <h4>May I alter the specifics of my plan design?</h4>
                  <p>As the owner of your self-funded plan for your business, you may request a change to your plan design. However, the plan designs are rated inclusive of all their services and features; prices reflect these ratings. To request a change, you must submit a request to Vault Health Captive. The plan will be re-rated based on its new features, and you will be provided with a new monthly fee total subject to approval.</p>
                </div>
                <div className="content-faq">
                  <h4>Are there caps on coverage?</h4>
                  <p>Similar to ACA plans, there are no annual or lifetime limits on benefits. This is NOT a limited medical or short-term medical plan.</p>
                </div>
                <div className="content-faq">
                  <h4>Where can I view prescription coverage?</h4>
                  <p>Prescription coverage is detailed in the plan summaries; formulary can be found <a href="/pub/media/Solo%20Rx%20Formulary.pdf" target="_blank">here</a>. Please read the formulary carefully.</p>
                </div>
                <div className="content-faq">
                  <h4>How many plan designs are there and can I change mid-year?</h4>
                  <p>There are three plan designs to choose from when you enroll. Once contracts are signed, you must wait until renewal to select a different plan design.</p>
                </div>
                <div className="content-faq">
                  <h4>How much do I pay before I meet my deductibles?</h4>
                  <p>The three model plan designs show the annual out of pocket maximum which is the same as the members deductible and these vary by tier. Once you meet your deductible, qualified benefit services are covered at the 100% level with the exception of copays that apply for Pharmacy Benefits at Tier 2 and above.</p>
                </div>
                <div className="content-faq">
                  <h4>What is reference based pricing?</h4>
                  <p>Reference-Based Pricing is a healthcare cost containment model provided by Fairos that reviews claims, adjusts for errors, and provides fair pricing recommendations based on several benchmarks, including Medicare, cost of care, and regional cost data. This model is used to eliminate the fraud, waste, and abuse that is prevalent in the healthcare billing system today. The referencebased pricing company, Fairos, starts its work when Vault Admin Services receives the first bill from your medical provider. Fairos will reprice the bill based on the above factors.</p>
                </div>
                <div className="content-faq">
                  <h4>Are there any preferred hospitals and how do I find this information? How is their payment determined?</h4>
                  <p>We recommend Members contact the Fairos Care Navigation Team to find the best facilities based on quality and cost metrics. This team, in collaboration with the Member, uses the Provider Finder to locate a &quot;friendly&quot; provider for medical care, based on cost, quality, location, and prior utilization. You can reach the Fairos Care Navigation Team at <a href="tel:8554261100">855-426-1100</a> (this number will also be on your card).</p>
                </div>
                <div className="content-faq">
                  <h4>Do any services require pre-authorization?</h4>
                  <p>Yes – we recommend the member contacts Vault Admin Services, as many providers require authorization prior to some procedures and surgeries.</p>
                </div>
                <div className="content-faq">
                  <h4>Will there be assistance available for complex and serious medical conditions?</h4>
                  <p>The Vault Admin Services team can facilitate access to Members&apos; healthcare resources by ensuring personalized services that support their healthcare needs. In addition, Members have access to Edison Health Care. Members have access to the Edison Health second opinion program and concierge medicine program.</p>
                </div>
                <div className="content-faq">
                  <h4>Can you tell me anything about how medical equipment is covered?</h4>
                  <p>Yes – we recommend the member contacts Vault Admin Services, as many providers require authorization prior to some procedures and surgeries.</p>
                </div>
                <div className="content-faq">
                  <h4>Are there HSA eligible options?</h4>
                  <p>Two of the three plans designs ($2,500 &amp; $5,000 deductibles) are HSA eligible. You can set up your own individual HSA account through many sources. Your bank or credit union may offer individual HSA accounts or use an internet-based HSA provider.</p>
                </div>
                <div className="content-faq">
                  <h4>Can you show me if my prescriptions are on the list, and if not, how will the be covered or discounted?</h4>
                  <p>Prescription coverage is detailed in the plan summaries; formulary can be found <a href="/pub/media/Solo%20Rx%20Formulary.pdf" target="_blank">here</a>. Please read the formulary carefully.</p>
                </div>
              </div>
            </div>

            <div id="Captive" className="tabcontent col-12 col-lg-7" style={{display: activeTab === "Captive" ? "block" : "none"}}>
              <div className="main-content-div">
                <div className="content-faq">
                  <h4>What is a Captive?</h4>
                  <p className="mb-3">A Captive insurance company is a privately owned insurance company whose owners come together to pool risk and form their own licensed insurance company. In this case, members who are sole proprietors, independent contractors and/or single business owners who create self-funded plans for their own businesses. This group approach provides members with the scale to cover the medical risks of participant members and potentially provide cost savings compared to the ACA marketplace and other private individual plans.</p>
                  <p className="mb-3">A captive insurance company is a company that shares in the insured risk of its owners and is controlled by its participants, in this case, the owner/members. Participating members both technically own the majority of the company through B-shares (shares do not come with actual value attached to them) and reap the rewards of any annual profits (generally, future savings). Distribution of any annual profits is determined by a Captive Advisory Board. Typically, an Advisory Board decides to lower prices or keep prices stable by directing reserve funds to benefit the owner/members.</p>
                  <p>A captive harnesses the size and scale of its membership to create an innovative structure that locks in savings for its members and their families in good health. <strong>The first step</strong> is to screen for healthy applicants. About 5% of people drive 95% of healthcare costs. By allowing the remaining 95% of applicants to participate, the chance of larger claims is reduced. <strong>The second step</strong> is to ensure each captive member maintains its responsibility to other participants, including seeking friendly providers via PPO, Care Navigation or other means, reviewing claims reimbursements and provider bills, as well as working with claims advocates when needed.</p>
                </div>
                <div className="content-faq">
                  <h4>How does the VAULT Captive work?</h4>
                  <p>Vault Health Captive is owned by participating member businesses. Each member participant has its own self-funded plan. Vault Health Holdings is the captive manager and Vault Admin Services is the plan Administrator. The captive secures a reinsurance contract to cover claims exceeding the target loss ratio (if the captive does exceed the loss ratio. Re-insurance provided by OdysseyRE does not have a &quot;specific&quot; or &quot;aggregate&quot; paid claim limit, meaning that there is no coverage limit, or reinsurance cap).</p>
                </div>
                <div className="content-faq">
                  <h4>Who is the Captive reinsured by?</h4>
                  <p>The captive is reinsured by OdysseyRE, an A rated reinsurer. If claims exceed expected levels, they are paid by the re-insurer and Vault. There is NO maximum coverage limit. In addition, the captive structure is filed with, and meets all requirements set forth by, the North Carolina Department of Insurance.</p>
                </div>
                <div className="content-faq">
                  <h4>How do I participate in the ownership of the Captive?</h4>
                  <p>Participating companies sign the Joinder Agreement of the Captive to become a member.</p>
                </div>
                <div className="content-faq">
                  <h4>What documents are executed at the time of plan establishment?</h4>
                  <p>The documents executed at the time of the plan establishment are the Joinder Agreement, your company&apos;s self-funded Plan Document, the Medical Reimbursement Contract, and Attestations.</p>
                </div>
                <div className="content-faq">
                  <h4>What is the Joinder to the Captive Operating Agreement?</h4>
                  <p>This document describes, among other things, how the captive will operate and communicate with members as well as to the Administrative Services and Managed Care Agreement.</p>
                </div>
                <div className="content-faq">
                  <h4>What is the role of the Advisory Board?</h4>
                  <p>The role of the Advisory Board is to be the voice of the owner/members and to represent their interests. The Advisory Board will review annual audits and have access into captive financials. The Advisory Board will also make decisions on how to manage annual profits of the captive, such as allowing them to build and grow in a reserve fund, or to apply them to reduce or stabilize monthly costs.</p>
                </div>
                <div className="content-faq">
                  <h4>What is a reserve fund?</h4>
                  <p>A reserve fund is money that accumulates from any profits realized. Funds grow when medical costs are lower than the amount taken in from members/owners. The monthly payments collected from each member should cover 100% of anticipated claims. Therefore, if claims are only 80% for the year, the captive would keep the remaining 20% for a reserve fund, or other purposes, as decided by the Advisors Board.</p>
                </div>
              </div>
            </div>

            <div id="Changing" className="tabcontent col-12 col-lg-7" style={{display: activeTab === "Changing" ? "block" : "none"}}>
              <div className="main-content-div">
                <div className="content-faq">
                  <h4>Can anyone change from their current insurance now, when they&apos;re not up for renewal?</h4>
                  <p>Eligible members can establish their self-funded plan at any time throughout the calendar year with effective dates on the 1st of each month. In most instances, you can change from your existing plan any time during the year.</p>
                </div>
                <div className="content-faq">
                  <h4>How should I decide whether it&apos;s worth establishing my self-funded plan now, or waiting for the end of my insurance plan year?</h4>
                  <p>The decision as to when to establish your plan can only be made by you. Considerations are the cost of a self-funded plan offers versus your current plan, and where you are with regard to your current plan year deductible.</p>
                </div>
                <div className="content-faq">
                  <h4>I have established my self-funded plan. When should I cancel my current coverage?</h4>
                  <p>You should wait to cancel your current plan until after the 1st of the month during which your coverage is effective. You are responsible for proactively canceling your current plan.</p>
                </div>
              </div>
            </div>

            <div id="Support" className="tabcontent col-12 col-lg-7" style={{display: activeTab === "Support" ? "block" : "none"}}>
              <div className="main-content-div">
                <div className="content-faq">
                  <h4>May I talk to someone about my options?</h4>
                  <p>Yes! The Customer Support team is available for you to call: <a href="tel:646-328-6968">646-328-6968</a>, or email <a href="mailto:support@hbgnow.com">support@hbgnow.com</a>.</p>
                </div>
                <div className="content-faq">
                  <h4>May I get advice on which plan to choose?</h4>
                  <p>Although we can help you better understand the Solo Health Collective health plan and answer your questions, you must make this decision on your own, or in consultation with your tax professional. Our partners are here to help you establish your plan and answer any questions you may have. We cannot help you choose a plan design.</p>
                </div>
                <div className="content-faq">
                  <h4>May I get advice on tax deductibility?</h4>
                  <p>You will need to ask your own tax professional to verify tax deductibility of your healthcare fees.</p>
                </div>
                <div className="content-faq">
                  <h4>Once I join, who do I call for general benefits questions, payment issues, or to make an adjustment to my policy?</h4>
                  <p>Please contact the HBG Support team at <a href="tel:646-328-6968">646-328-6968</a> or email <a href="mailto:support@hbgnow.com">support@hbgnow.com</a>. The Support Team is available Monday - Friday, 9:00AM - 5:00PM EST.</p>
                </div>
                <div className="content-faq">
                  <h4>Who should I call for claims questions?</h4>
                  <p>You will call VAULT Admin Services, our carrier claims administrator. The number to call is <a href="tel:8882115706">888-211-5706</a>. Vault Admin Services support hours are Monday - Friday, 8:00am to 5:00pm CST.</p>
                </div>
              </div>
            </div>
          </div>{/* end #d-block-faq */}

          {/* ── MOBILE ACCORDION ── */}
          <div className="network-acordian" id="m-block-faq">
            <div className="accordion custom-network-accordion">

              {/* 1. Eligibility */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <div className="accordion-header-content">
                      <span className="icon"><img src="/images/faq-bulb.png" alt="" /></span>
                      <div><h3>Eligibility and Requirements</h3><p>Learn who qualifies for Solo Health Collective and what&apos;s needed to join.</p></div>
                    </div>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <div className="main-content-div">
                      <div className="content-faq"><h4>Am I eligible for Solo Health Collective?</h4><p>To establish your plan, you must be an independent, self-employed business owner. The business must have its own federal Tax ID.; Complete a short health questionnaire and be accepted. A federal tax ID can be from an LLC, S-corp, or other business structure.</p></div>
                      <div className="content-faq"><h4>What is the structure of Solo Health Collective?</h4><p>Solo members join Vault Health Captive, a captive insurance company domiciled and regulated by the North Carolina Department of Insurance. You will establish a self-funded plan for your &apos;business of one&apos;, which means you are an owner of the captive and are represented by its Advisory Board.</p></div>
                      <div className="content-faq"><h4>What plan design options are there?</h4><p>There are three model plan designs for the business. Those plan levels offer deductibles of $2,500, $5,000, and $10,000 – and, unlike the ACA, the deductibles are also the out-of- pocket maximums, with the exception of co-pays for tier 2 and above pharmacy benefits (once the annual deductible is satisfied).</p></div>
                      <div className="content-faq"><h4>Network &amp; Claims:</h4><p>You have access to Multiplan PHCS, a nationwide PPO Physician Network. Check their doctor list <a href="/pub/media/Solo%20Provider%20Search.pdf" target="_blank">here</a>.</p></div>
                      <div className="content-faq"><h4>What are some of the benefits of the plan designs?</h4><p>Other benefits may include:</p><ul className="benefits_ul"><li>Potential savings vs. the ACA Exchange</li><li>Access to a national physician PPO network or go to any doctor of your choice</li><li>Two HSA eligible plan design options with business tax deductible premiums (always confirm with a tax professional)</li><li>Three major plan design options.</li></ul></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Overview */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <div className="accordion-header-content">
                      <span className="icon"><img src="/images/faq-bulb.png" alt="" /></span>
                      <div><h3>Overview</h3><p>Understand how Solo works, what makes it different, and why solopreneurs choose us.</p></div>
                    </div>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <div className="main-content-div">
                      <div className="content-faq"><h4>How do I establish my plan?</h4><p>Creating your plan is simple and secure right on our website. Calculate your cost, review the plan design options, complete and pass a medical questionnaire, select your plan design, sign final contracts, enter payment information, and you&apos;re done.</p></div>
                      <div className="content-faq"><h4>What are the requirements in order for me to participate?</h4><ul className="benefits_ul"><li>Potential savings vs. the ACA Exchange</li><li>Access to a national physician PPO network or go to any doctor of your choice</li><li>Two HSA eligible plan design options with business tax deductible premiums</li><li>Three major plan design options.</li></ul><p>If you do not pass the medical questionnaire, your business will not be allowed to establish your plan within the captive.</p></div>
                      <div className="content-faq"><h4>Information on monthly fees:</h4><p>Any changes to monthly fees, details or plan designs will occur January 1 each year.</p></div>
                      <div className="content-faq"><h4>What is a health questionnaire and is it mandatory?</h4><p>There is no individual medical underwriting, but applicants must complete a short health questionnaire. You may view the health questions <a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:273e203e-dd84-433d-9211-6354a19bb78f" target="_blank">here.</a></p></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Plan Establishment */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <div className="accordion-header-content">
                      <div className="icon"><img src="/images/faq-bulb.png" alt="" /></div>
                      <div><h3>Plan Establishment and Process</h3><p>Details on setting up your health plan and what to expect along the way.</p></div>
                    </div>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <div className="main-content-div">
                      <div className="content-faq"><h4>How long does it take to join?</h4><p>You can proceed from viewing your estimate to signing documents in a matter of minutes.</p></div>
                      <div className="content-faq"><h4>Which of the plan designs are HSA eligible?</h4><p>Two of the three plan designs ($2,500 and $5,000 deductibles) are HSA eligible.</p></div>
                      <div className="content-faq"><h4>How do I pay my monthly fees?</h4><p>You may choose to pay via ACH bank draft, credit, or debit card.</p></div>
                      <div className="content-faq"><h4>When will I receive my medical ID cards?</h4><p>On your policy effective date you will receive an email from <a href="mailto:support@hbgnow.com">support@hbgnow.com</a> with instructions to access your Member Portal.</p></div>
                      <div className="content-faq"><h4>What carrier or network will be listed on my ID cards?</h4><p>Your card will display Multiplan PHCS PPO information.</p></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Plan Designs */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <div className="accordion-header-content">
                      <span className="icon"><img src="/images/faq-bulb.png" alt="" /></span>
                      <div><h3>Plan Designs</h3><p>Explore basics and how Solo&apos;s plan design fits your needs.</p></div>
                    </div>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <div className="main-content-div">
                      <div className="content-faq"><h4>How does Solo Health Collective differ from other insurance programs?</h4><p>Your business is establishing a self-funded health plan and your business is joining the Captive as a class member.</p></div>
                      <div className="content-faq"><h4>What medical provider network do I use?</h4><p>Start by searching the Multiplan PHCS network by <a href="/our-network" target="_blank">clicking here</a>.</p></div>
                      <div className="content-faq"><h4>Is preventive care covered?</h4><p>Similar to ACA plans, qualified preventative services are not subject to the deductible, and are covered 100% within plan designs.</p></div>
                      <div className="content-faq"><h4>Are there caps on coverage?</h4><p>Similar to ACA plans, there are no annual or lifetime limits on benefits. This is NOT a limited medical or short-term medical plan.</p></div>
                      <div className="content-faq"><h4>Are there HSA eligible options?</h4><p>Two of the three plans designs ($2,500 &amp; $5,000 deductibles) are HSA eligible.</p></div>
                      <div className="content-faq"><h4>Can you show me if my prescriptions are on the list?</h4><p>Prescription coverage is detailed in the plan summaries; formulary can be found <a href="/pub/media/Solo%20Rx%20Formulary.pdf" target="_blank">here</a>.</p></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. VAULT Captive */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    <div className="accordion-header-content">
                      <span className="icon"><img src="/images/faq-bulb.png" alt="" /></span>
                      <div><h3>Understanding The VAULT Captive</h3><p>Discover how the captive model works to control costs and protect members.</p></div>
                    </div>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <div className="main-content-div">
                      <div className="content-faq"><h4>What is a Captive?</h4><p className="mb-3">A Captive insurance company is a privately owned insurance company whose owners come together to pool risk and form their own licensed insurance company.</p><p>A captive harnesses the size and scale of its membership to create an innovative structure that locks in savings for its members and their families in good health.</p></div>
                      <div className="content-faq"><h4>How does the VAULT Captive work?</h4><p>Vault Health Captive is owned by participating member businesses.</p></div>
                      <div className="content-faq"><h4>Who is the Captive reinsured by?</h4><p>The captive is reinsured by OdysseyRE, an A rated reinsurer. There is NO maximum coverage limit.</p></div>
                      <div className="content-faq"><h4>What is the role of the Advisory Board?</h4><p>The role of the Advisory Board is to be the voice of the owner/members and to represent their interests.</p></div>
                      <div className="content-faq"><h4>What is a reserve fund?</h4><p>A reserve fund is money that accumulates from any profits realized.</p></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Changing */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    <div className="accordion-header-content">
                      <span className="icon"><img src="/images/faq-bulb.png" alt="" /></span>
                      <div><h3>Changing From Your Current Plan</h3><p>Things to Know</p></div>
                    </div>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <div className="main-content-div">
                      <div className="content-faq"><h4>Can anyone change from their current insurance now, when they&apos;re not up for renewal?</h4><p>Eligible members can establish their self-funded plan at any time throughout the calendar year with effective dates on the 1st of each month.</p></div>
                      <div className="content-faq"><h4>How should I decide whether it&apos;s worth establishing my self-funded plan now?</h4><p>The decision as to when to establish your plan can only be made by you.</p></div>
                      <div className="content-faq"><h4>I have established my self-funded plan. When should I cancel my current coverage?</h4><p>You should wait to cancel your current plan until after the 1st of the month during which your coverage is effective.</p></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Support */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    <div className="accordion-header-content">
                      <span className="icon"><img src="/images/faq-bulb.png" alt="" /></span>
                      <div><h3>Contacting Support</h3><p>We&apos;re Here to Help.</p></div>
                    </div>
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    <div className="main-content-div">
                      <div className="content-faq"><h4>May I talk to someone about my options?</h4><p>Yes! The Customer Support team is available for you to call: <a href="tel:646-328-6968">646-328-6968</a>, or email <a href="mailto:support@hbgnow.com">support@hbgnow.com</a>.</p></div>
                      <div className="content-faq"><h4>May I get advice on which plan to choose?</h4><p>Although we can help you better understand the Solo Health Collective health plan and answer your questions, you must make this decision on your own.</p></div>
                      <div className="content-faq"><h4>May I get advice on tax deductibility?</h4><p>You will need to ask your own tax professional to verify tax deductibility of your healthcare fees.</p></div>
                      <div className="content-faq"><h4>Once I join, who do I call for general benefits questions?</h4><p>Please contact the HBG Support team at <a href="tel:646-328-6968">646-328-6968</a> or email <a href="mailto:support@hbgnow.com">support@hbgnow.com</a>. Available Monday - Friday, 9:00AM - 5:00PM EST.</p></div>
                      <div className="content-faq"><h4>Who should I call for claims questions?</h4><p>You will call VAULT Admin Services at <a href="tel:8882115706">888-211-5706</a>. Available Monday - Friday, 8:00am to 5:00pm CST.</p></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>{/* end #m-block-faq */}

        </div>
      </section>

      {/* ── DOWNLOADABLE RESOURCES ──
        CSS in a11.css: .download-section .pdf-main-div .pdf-card .download-button a
        This section uses <a> tag (confirmed from original source inline style)
      ── */}
      <section className="download-section pt-0 pt-lg-4">
        <div className="container">
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
                        <rect y="0.5" width="24" height="24" rx="12" fill="#262965"/>
                        <path d="M8.596 7.3H13.844V18.5H10.676V9.748H8.596V7.3Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="card-content">
                      <h5>Offline FAQs</h5>
                      <p>Keep the FAQs handy offline so you can quickly find answers anytime, even without internet.</p>
                    </div>
                  </div>
                  <div className="download-button">
                    <a href="https://hbgsolo.com/pub/media/Solo%20Health%20Collective%20FAQ%20061124.pdf" target="_blank" rel="noopener">Download PDF</a>
                  </div>
                </div>

                <div className="pdf-card">
                  <div className="pdf-card-content">
                    <div>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="24" height="24" rx="12" fill="#262965"/>
                        <path d="M11.88 15.988H16.2V18.5H7.48V16.516L11.672 12.596C12.568 11.764 12.696 11.252 12.696 10.788C12.696 10.068 12.216 9.636 11.256 9.636C10.44 9.636 9.704 10.004 9.256 10.724L6.904 9.412C7.752 8.004 9.336 7.076 11.544 7.076C14.12 7.076 15.896 8.404 15.896 10.484C15.896 11.572 15.592 12.564 13.992 14.036L11.88 15.988Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="card-content">
                      <h5>Summary of Benefits</h5>
                      <p>Understand what your plan covers whenever you need it.</p>
                    </div>
                  </div>
                  <div className="download-button">
                    <a href="https://hbgsolo.com/pub/media/Summary-of-Benefits-and-Coverage-2026.pdf" target="_blank" rel="noopener">Download PDF</a>
                  </div>
                </div>

                <div className="pdf-card">
                  <div className="pdf-card-content">
                    <div>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="24" height="24" rx="12" fill="#262965"/>
                        <path d="M13.288 11.78C15.176 12.18 16.168 13.396 16.168 14.996C16.168 16.9 14.664 18.724 11.288 18.724C9.736 18.724 8.088 18.34 6.936 17.62L8.088 15.236C8.984 15.844 10.136 16.164 11.192 16.164C12.264 16.164 12.968 15.748 12.968 14.996C12.968 14.324 12.472 13.908 11.256 13.908H9.928V11.908L11.928 9.748H7.512V7.3H15.608V9.284L13.288 11.78Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="card-content">
                      <h5>Prescription Drug Formulary</h5>
                      <p>Easily check which medications are covered under your plan.</p>
                    </div>
                  </div>
                  <div className="download-button">
                    <a href="https://hbgsolo.com/pub/media/Solo%20Rx%20Formulary.pdf" target="_blank" rel="noopener">Download PDF</a>
                  </div>
                </div>

                <div className="pdf-card">
                  <div className="pdf-card-content">
                    <div>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="24" height="24" rx="12" fill="#262965"/>
                        <path d="M17.104 13.844V16.356H15.44V18.5H12.352V16.356H6.432V14.292L11.456 7.3H14.736L10.176 13.844H12.448V11.94H15.44V13.844H17.104Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="card-content">
                      <h5>Summary Plan Description</h5>
                      <p>Understand the full details and rules of your coverage.</p>
                    </div>
                  </div>
                  <div className="download-button">
                    <a href="https://hbgsolo.com/pub/media/Solo-Plan-Model-SPD-2026.pdf" target="_blank" rel="noopener">Download PDF</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exact inline styles from original source — desktop/mobile toggle + download button */}
      <style>{`
       body {
          background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
        }
        #d-block-faq { display: flex; }
        #m-block-faq { display: none; }
        @media(max-width: 767px) {
          #d-block-faq { display: none; }
          #m-block-faq { display: block; }
        }
        .download-button a {
          border: 2px solid #262965;
          padding: 8px 16px;
          color: #262965;
          font-weight: 800;
          background-color: white;
          border-radius: 5px;
          font-size: clamp(12px, 1vw, 14px) !important;
          text-decoration: none;
          display: inline-block;
        }
        .download-button a:hover {
          background-color: #262965;
          color: #fff;
        }
      `}</style>
    </>
  );
}