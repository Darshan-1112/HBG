// "use client";
// import { useState, useCallback, useRef } from "react";
// import Footer from "@/components/Footer";
// import AddMemberModal from "@/components/AddMemberModal";
// import ClientInit from "@/components/ClientInit";

// // ─── Static Data ──────────────────────────────────────────────────────────────

// const CALENDLY_LINK =
//   "https://calendly.com/d/ckh2-xd6-qjd/benefits-conversation-with-hbg";

// const COVERAGE_TILES = [
//   ["tiles-card-1.png","Preventive Services","Routine checkups, screenings, labs, and immunizations fully covered before the deductible applies."],
//   ["tiles-card-2.png","Primary & Specialist Care","Nationwide access to 1.4M+ doctors, specialists, and providers through the Multiplan PHCS network."],
//   ["tiles-card-3.png","Emergency Care","Emergency services covered at any hospital, including international travel and urgent situations."],
//   ["tiles-card-4.png","Mental Health Services","Coverage for therapy, counseling, and psychiatry—both in-network and with out-of-network options."],
//   ["tiles-card-5.png","Inpatient Hospitalization & Surgeries","No annual or lifetime caps on covered inpatient hospital stays or major surgeries."],
//   ["tiles-card-6.png","Imaging & Advanced Diagnostics","X-rays, MRIs, CT scans, and diagnostic lab tests covered after meeting your deductible."],
//   ["tiles-card-7.png","Chiropractic Services","Includes coverage for outpatient rehab, physical therapy, and chiropractic care for qualifying conditions."],
//   ["tiles-card-8.png","Maternity & Newborn Care","Prenatal, childbirth, and newborn care covered after deductible with no lifetime limits."],
//   ["tiles-card-9.png","Pharmacy Benefits","Five-tier prescription coverage; preventive drugs at $0, copays apply after deductible for others."],
// ];

// const JOIN_STEPS = [
//   ["1.","Calculate Your Health Plan Cost","Enter your zip code, age, and household details including any dependents—to view rates for your business-of-one."],
//   ["2.","Select Your Plan Design","Choose from three deductible levels $2,500, $5,000, or $10,000. HSA options are available."],
//   ["3.","Complete Health Questionnaire & Sign Docs","Complete a secure medical eligibility questionnaire, then sign your plan documents to confirm enrollment."],
//   ["4.","Manage Your Plan Online","After your first payment is processed, access ID cards, benefits, claims, and documents in your secure member portal."],
// ];

// const TESTIMONIALS_ROW1 = [
//   ["Meghan H, Nurse","Every Solo team member I spoke with was knowledgeable, patient and genuinely helpful. They took the time to walk me through my options, answer all my questions, and made sure I felt confident in my decision. It's rare to find a company that combines professionalism with such a personal touch."],
//   ["Lauren S, Video Producer","As a freelancer/small business owner finding adequate coverage has always been difficult. Solo Health Collective made everything easy to understand, and what really stood out was how far their team went to help."],
//   ["Toby W, Talent Manager","I've been a member of Solo for a coming for two years now! It has been a great experience generally, it has reduced our monthly costs a lot and given us a wider network of providers to see. I also love how it is HSA eligible."],
//   ["Frances D, Member","I actually feel like I have an ally in navigating the complexity of insurance and the whole medical ecosystem. It it truly so appreciated to know that when I send an email it is not going into the void. Thank you!"],
//   ["Hayley L, Photographer","Very easy to work with, quick responses & great coverage. Would highly recommend to any other entrepreneurs!"],
//   ["Sam C, Irrigation Specialist","We've been on the plan for over 2 years and are very satisfied with the service. Highly recommend to all my fellow small business owners!"],
// ];

// const TESTIMONIALS_ROW2 = [
//   ["Larissa M, Strategist","Great customer experience, easy to sign up and manage care, and much wider provider coverage than the state marketplace plan I was on previously"],
//   ["Karen E, Member","Allison and Brian were incredibly responsive and helpful when we signed up for Solo Health Collective. They went above and beyond, making time for phone calls whenever we had questions. Highly recommend!"],
//   ["Justin M, Executive Coach","I had a great experience with HBG and their insurance product Solo. It saved us thousands this year on health coverage. Has been a game changer for us."],
//   ["Frankie B, Real Estate Agent","I have had the best experience with Solo!!! Signing up was super easy and the team is always quick to get back to me on any questions or concerns I have. Highly recommend!! :)"],
//   ["Drew A, Food Photographer & Stylist","As a small business owner that went without health care for YEARS, I am thankful for HBG for being affordable and caring. Please don't go anywhere"],
//   ["Meghan H, Nurse","Every Solo team member I spoke with was knowledgeable, patient and genuinely helpful. They took the time to walk me through my options, answer all my questions, and made sure I felt confident in my decision."],
// ];

// const FAQ_ITEMS = [
//   { id:"collapseOne", question:"What does it mean to establish a Solo plan?", answer:"Your business creates a self-funded major medical health plan for its sole employee—you. As the plan sponsor, your business funds the coverage, and Solo provides the administrative infrastructure, network access, and partner services to make it work." },
//   { id:"collapseTwo", question:"When should I establish my plan?", itemId:"ques2", answer:"We recommend setting up your Solo plan by the 20th of the month prior to your desired start date. Creating your plan earlier allows time for administrative setup and coordination with partner services (Claims Admin, Rx, Telemedicine etc.) before your coverage begins.<br/><br/>If you miss the 20th, that's okay - plans can still be set up through the end of the month for coverage that starts on the 1st of the following month. Plans created later in the month may simply require additional processing time before all services are fully active.<br/><br/>Your first payment isn't due until your plan's effective date, so there's no downside to setting up your plan early." },
//   { id:"collapseThree", question:"Is Solo a PPO health plan? Can I choose my doctor?", answer:"Yes. Solo uses the Multiplan PHCS Network with 1.4M+ providers nationwide. You have the freedom to choose any doctor, specialist, or hospital within the network. You can also see out-of-network providers, though your cost-sharing may be higher." },
//   { id:"collapseFour", question:"What benefits are included?", answer:"Solo offers comprehensive major medical coverage including: Preventive care (fully covered before deductible), Primary and specialist visits, Emergency care at any hospital, Mental health and therapy, Inpatient hospitalization and surgeries, Imaging and diagnostics, Chiropractic and rehabilitation services, Maternity and newborn care, and a five-tier pharmacy benefit program." },
//   { id:"collapseFive", question:"Can I add my spouse or dependents?", answer:"Yes. You can add eligible family members including a spouse or partner and dependent children under age 26. Family members can be added during initial enrollment or at qualifying life events." },
//   { id:"collapseSix", question:"How do I get help choosing a plan?", answer:"Our team can review your needs and walk you through your options. Book a call using the Calendly link or use the quote tool on this page to see real monthly costs." },
// ];

// const SIDEBAR_SECTIONS = [
//   { title:"Plans and Coverage", icon:"paln-img.png", links:[{ href:"/plan-summary", label:"Plan Summary", cls:"custom-border-1" },{ href:"/faq", label:"Policy FAQ" }] },
//   { title:"Our Network", icon:"network.png", links:[{ href:"/our-network", label:"Find a Doctor" }] },
//   { title:"Member Services", icon:"member.png", links:[{ href:"/member-services", label:"Manage your Portal" }] },
//   { title:"Resources", icon:"resource.png", links:[{ href:"/how-it-works", label:"How it Works" },{ href:"/resource-articles", label:"Resource Articles", cls:"custom-border" },{ href:"/preventive-care", label:"Preventive Care Guide", cls:"custom-border-1" },{ href:"/mental-health", label:"Mental Health & Wellness", cls:"custom-border-1" },{ href:"/emergency-care-benefits", label:"Emergency Care Benefits" }] },
//   { title:"About us", icon:"member.png", links:[{ href:"/about-us", label:"Company" },{ href:"/about-us#license", label:"Licensing" }] },
//   { title:"Contact Us", icon:"conatctus.png", links:[{ href:CALENDLY_LINK, label:"Schedule a consult", external:true },{ href:"/contact#partner", label:"Partner with us", cls:"custom-border" },{ href:"/contact#feedback", label:"Leave us feedback" }] },
// ];

// const PARTNER_LOGOS = [
//   ["ascension-logo.jpg","Ascension"],["1920px-Stony_Brook_Medicine_logo.svg_.png","Stony Brook"],
//   ["HCA_Healthcare_Logo.jpg","HCA"],["Mayo-Clinic-Emblem.jpg","Mayo Clinic"],
//   ["NYU_Langone_Health_Logo.jpg","NYU Langone"],["newyork-removebg-preview.png","NewYork-Presbyterian"],
// ];

// const PRICING_PLANS = [
//   { value:"10000", price:"$29.00", deductible:"$10,000", familyDeductible:"$20,000 deductible per family", planClass:"plan1" },
//   { value:"5000",  price:"$49.00", deductible:"$5,000",  familyDeductible:"$10,000 deductible per family", planClass:"plan2", popular:true },
//   { value:"2500",  price:"$69.00", deductible:"$2,500",  familyDeductible:"$5,000 deductible per family",  planClass:"plan3" },
// ];

// // ─── Home Component ───────────────────────────────────────────────────────────

// export default function Home() {

//   // ── UI state ──────────────────────────────────────────────────────────────
//   const [showModal,           setShowModal]           = useState(false);
//   const [notificationVisible, setNotificationVisible] = useState(true);
//   const [coverageSlide,       setCoverageSlide]       = useState(0);
//   const [joinSlide,           setJoinSlide]           = useState(0);
//   const [openFaq,             setOpenFaq]             = useState("collapseOne");
//   const [sidebarOpen,         setSidebarOpen]         = useState({ 0: true });
//   const [pricingVisible,      setPricingVisible]      = useState(false);
//   const [desktopPopupVisible, setDesktopPopupVisible] = useState(false);
//   const [mobileQuoteVisible,  setMobileQuoteVisible]  = useState(false);
//   const [selectedPlan,        setSelectedPlan]        = useState("5000");

//   // ── Quote form state ──────────────────────────────────────────────────────
//   const [quoteZip,       setQuoteZip]       = useState("");
//   const [quoteDob,       setQuoteDob]       = useState("");
//   const [quoteGender,    setQuoteGender]    = useState("");
//   const [quoteFirstname, setQuoteFirstname] = useState("");
//   const [quoteEmail,     setQuoteEmail]     = useState("");
//   const [quotePhone,     setQuotePhone]     = useState("");
//   const [privacyAck,     setPrivacyAck]     = useState(false);
//   const [marketingConsent, setMarketingConsent] = useState(false);
//   const [ratesEmail,     setRatesEmail]     = useState("");

//   // ── Desktop popup spouse/children ─────────────────────────────────────────
//   const [hasSpouseDesktop,    setHasSpouseDesktop]    = useState(false);
//   const [spouseGenderDesktop, setSpouseGenderDesktop] = useState("");
//   const [spouseDobDesktop,    setSpouseDobDesktop]    = useState("");
//   const [hasChildrenDesktop,  setHasChildrenDesktop]  = useState(false);
//   const [childCountDesktop,   setChildCountDesktop]   = useState("");

//   // ── Mobile popup spouse/children ──────────────────────────────────────────
//   const [hasSpouseMobile,    setHasSpouseMobile]    = useState(false);
//   const [spouseGenderMobile, setSpouseGenderMobile] = useState("");
//   const [spouseDobMobile,    setSpouseDobMobile]    = useState("");
//   const [hasChildrenMobile,  setHasChildrenMobile]  = useState(false);
//   const [childCountMobile,   setChildCountMobile]   = useState("");

//   // ── Touch refs ─────────────────────────────────────────────────────────────
//   const coverageTouchStart = useRef(0);
//   const joinTouchStart     = useRef(0);

//   // ── Handlers ──────────────────────────────────────────────────────────────

//   // Family toggle — only opens modal if required fields are filled
//   const handleFamilyToggle = useCallback((e) => {
//     const checked = e.target.checked;
//     if (!checked) { setShowModal(false); return; }
//     if (!quoteZip || !quoteDob || !quoteGender) {
//       // silently reject — toggle stays off
//       e.preventDefault();
//       return;
//     }
//     setShowModal(true);
//     // Decide which popup to show based on viewport — deferred to avoid SSR mismatch
//     if (window.innerWidth >= 768) {
//       setDesktopPopupVisible(true);
//     } else {
//       setMobileQuoteVisible(true);
//     }
//   }, [quoteZip, quoteDob, quoteGender]);

//   const handleGetQuote            = useCallback(() => setPricingVisible(true),  []);
//   const handleRecalculate         = useCallback(() => setPricingVisible(false), []);
//   const handlePlanSelect          = useCallback((v) => setSelectedPlan((p) => p === v ? "" : v), []);
//   const handleFaqToggle           = useCallback((id) => setOpenFaq((p) => p === id ? null : id), []);
//   const handleToggleSidebar       = useCallback((i) => setSidebarOpen((prev) => { const n={}; Object.keys(prev).forEach(k=>{ n[k]=false; }); n[i]=!prev[i]; return n; }), []);
//   const handleDesktopPopupCancel  = useCallback(() => { setDesktopPopupVisible(false); setShowModal(false); }, []);
//   const handleDesktopPopupContinue= useCallback(() => { setDesktopPopupVisible(false); setPricingVisible(true); }, []);
//   const handleMobilePopupCancel   = useCallback(() => { setMobileQuoteVisible(false); setShowModal(false); }, []);
//   const handleMobilePopupContinue = useCallback(() => { setMobileQuoteVisible(false); setPricingVisible(true); }, []);

//   // FAQ banner — passed to ClientInit so it can wire up the DOM link safely
//   const handleFaqBannerClick = useCallback((e) => {
//     e.preventDefault();
//     setOpenFaq("collapseTwo");
//     setTimeout(() => {
//       const el = document.getElementById("ques2");
//       if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 200, behavior:"smooth" });
//     }, 100);
//   }, []);

//   const handleSendRatesEmail = useCallback(async () => {
//     if (!ratesEmail) return;
//     try {
//       await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method:"POST", headers:{"Content-Type":"application/json"},
//         body: JSON.stringify({ email:ratesEmail, zip:quoteZip, dob:quoteDob, gender:quoteGender, selectedPlan }),
//       });
//     } catch (err) { console.error("Send rates error:", err); }
//   }, [ratesEmail, quoteZip, quoteDob, quoteGender, selectedPlan]);

//   // Slider touches
//   const handleCoverageTouchStart = useCallback((e) => { coverageTouchStart.current = e.touches[0].clientX; }, []);
//   const handleCoverageTouchEnd   = useCallback((e) => {
//     const diff = coverageTouchStart.current - e.changedTouches[0].clientX;
//     if (Math.abs(diff) > 40) setCoverageSlide((p) => diff > 0 ? (p+1) % COVERAGE_TILES.length : (p-1+COVERAGE_TILES.length) % COVERAGE_TILES.length);
//   }, []);
//   const handleJoinTouchStart = useCallback((e) => { joinTouchStart.current = e.touches[0].clientX; }, []);
//   const handleJoinTouchEnd   = useCallback((e) => {
//     const diff = joinTouchStart.current - e.changedTouches[0].clientX;
//     if (Math.abs(diff) > 40) setJoinSlide((p) => diff > 0 ? (p+1) % JOIN_STEPS.length : (p-1+JOIN_STEPS.length) % JOIN_STEPS.length);
//   }, []);

//   // ── Render ─────────────────────────────────────────────────────────────────
//   return (
//     <>
//       {/* ClientInit handles all DOM-dependent side-effects after hydration */}
//       <ClientInit onFaqBannerClick={handleFaqBannerClick} />

//       {/* ─── HEADER ─── */}
//       <section className="header">
//         <div className="custom-container home-container">
//           <div className="new-custom-header d-flex align-items-center justify-content-between">

//             {/* LEFT */}
//             <div className="left-side">
//               <a className="text-decoration-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
//                 <div className="d-flex gap-3 align-items-center">
//                   <div><img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/menu-bars.png" alt="" /></div>
//                   <p className="m-0 fs-14 fw-bold text-primary">Menu</p>
//                 </div>
//               </a>

//               {/* OFFCANVAS */}
//               <div className="offcanvas offcanvas-top h-100" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
//                 <div className="menu-close-home offcanvas-header d-flex flex-row-reverse flex-lg-row align-items-center justify-content-start">
//                   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style={{ display:"none" }}>&times;</button>
//                   <div className="menu_close_section">
//                     <div className="menu-btn btn-closes text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
//                       <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.47132 3.52864C4.21097 3.26829 3.78886 3.26829 3.52851 3.52864C3.26816 3.78899 3.26816 4.2111 3.52851 4.47145L7.05712 8.00005L3.52853 11.5286C3.26818 11.789 3.26818 12.2111 3.52853 12.4714C3.78888 12.7318 4.21099 12.7318 4.47134 12.4714L7.99993 8.94286L11.5285 12.4715C11.7889 12.7318 12.211 12.7318 12.4713 12.4715C12.7317 12.2111 12.7317 11.789 12.4713 11.5286L8.94274 8.00005L12.4713 4.47145C12.7317 4.2111 12.7317 3.78899 12.4713 3.52864C12.211 3.26829 11.7889 3.26829 11.5285 3.52864L7.99993 7.05724L4.47132 3.52864Z" fill="#FFBF00" /></svg>
//                     </div>
//                     <div className="menu-close close_menu">Close Menu</div>
//                   </div>
//                   <div className="menu_home_section">
//                     <div className="menu-btn btn-closes text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
//                       <a href="/"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M1.99532 6.07083C1.57389 6.45012 1.33325 6.99045 1.33325 7.55742V12.6667C1.33325 13.7713 2.22868 14.6667 3.33325 14.6667H12.6666C13.7712 14.6667 14.6666 13.7713 14.6666 12.6667V7.55742C14.6666 6.99045 14.4259 6.45012 14.0045 6.07083L9.33785 1.87083C8.57724 1.18628 7.4226 1.18629 6.66199 1.87083L1.99532 6.07083ZM7.33325 8.6667C6.59687 8.6667 5.99992 9.26365 5.99992 10V12.6667C5.99992 13.0349 6.2984 13.3334 6.66659 13.3334H9.33325C9.70144 13.3334 9.99992 13.0349 9.99992 12.6667V10C9.99992 9.26365 9.40297 8.6667 8.66659 8.6667H7.33325Z" fill="#FFBF00" /></svg></a>
//                     </div>
//                     <div className="menu-home close_menu"><a href="/">Home</a></div>
//                   </div>
//                   <div className="d-block d-lg-none">
//                     <img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/mobile-menu-logo.png" alt="" />
//                   </div>
//                 </div>

//                 <div className="offcanvas-body text-white">
//                   <div className="Menu">
//                     <div className="row">
//                       <div className="col-12 col-lg-6 col-xl-8">
//                         <div className="menu-grid">
//                           <div className="grid-1 d-flex flex-column">
//                             <div className="plans">
//                               <div className="Menu-headings"><div><img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/paln-img.png" alt="" /></div><p>Plans and Coverage</p></div>
//                               <div className="menu-content">
//                                 <div className="menu-item"><a href="/plan-summary"><h6>Plan Summary</h6><p>Overview of deductibles, benefits, and plan highlights at a glance.</p></a></div>
//                                 <div className="menu-item"><a href="/faq"><h6>Policy FAQ</h6><p>Clear answers to the most common plan questions.</p></a></div>
//                               </div>
//                             </div>
//                             <div className="plans">
//                               <div className="Menu-headings"><div><img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/network.png" alt="" /></div><p>Our Network</p></div>
//                               <div className="menu-content">
//                                 <div className="menu-item"><a href="/our-network"><h6>Find a Doctor</h6><p>Search 1.4M+ in-network providers across the Multiplan PHCS PPO network.</p></a></div>
//                               </div>
//                             </div>
//                             <div className="plans">
//                               <div className="Menu-headings"><div><img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/member.png" alt="" /></div><p>About us</p></div>
//                               <div className="menu-content">
//                                 <div className="menu-item"><a href="/about-us"><h6>Company</h6><p>Learn about Solo&apos;s mission to redefine healthcare for solopreneurs.</p></a></div>
//                                 <div className="menu-item"><a href="/about-us#license"><h6>Licensing</h6><p>Review state licenses and compliance information.</p></a></div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="grid-2 d-flex flex-column">
//                             <div className="plans">
//                               <div className="Menu-headings"><div><img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/member.png" alt="" /></div><p>Member Services</p></div>
//                               <div className="menu-content">
//                                 <div className="menu-item"><a href="/member-services"><h6>Manage your Portal</h6><p>Access your ID cards, claims, benefits, and personal plan details online.</p></a></div>
//                               </div>
//                             </div>
//                             <div className="plans">
//                               <div className="Menu-headings"><div><img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/resource.png" alt="" /></div><p>Resources</p></div>
//                               <div className="menu-content">
//                                 <div className="menu-item"><a href="/how-it-works"><h6>How it Works</h6><p>Step-by-step guide to setting up and using your Solo plan.</p></a></div>
//                                 <div className="menu-item"><a href="/resource-articles"><h6>Resource Articles</h6><p>Understand the unique structure of Solo compared to market alternatives.</p></a></div>
//                                 <div className="menu-item"><a href="/preventive-care"><h6>Preventive Care Guide</h6><p>Stay on top of covered preventive services and annual screenings.</p></a></div>
//                                 <div className="menu-item"><a href="/mental-health"><h6>Mental Health &amp; Wellness</h6><p>Resources and benefits that support your overall well-being</p></a></div>
//                                 <div className="menu-item"><a href="/emergency-care-benefits"><h6>Emergency Care Benefits</h6><p>Understand how emergency services are covered, including urgent care, ER visits, and international emergencies.</p></a></div>
//                               </div>
//                             </div>
//                             <div className="plans">
//                               <div className="Menu-headings"><div><img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/conatctus.png" alt="" /></div><p>Contact Us</p></div>
//                               <div className="menu-content">
//                                 <div className="menu-item"><a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer"><h6>Schedule a consult</h6><p>Book a call with our team to review your options.</p></a></div>
//                                 <div className="menu-item"><a href="/contact#partner"><h6>Partner with us</h6><p>Explore opportunities to collaborate with Solo Health Collective.</p></a></div>
//                                 <div className="menu-item"><a href="/contact#feedback"><h6>Leave us feedback</h6><p>Share your thoughts to help us improve member experience.</p></a></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Sidebar Accordion (mobile) */}
//                         <div className="sidebar-accordion">
//                           {SIDEBAR_SECTIONS.map((sec, i) => (
//                             <div className="accordion-item" key={i}>
//                               <button className={`accordion-header${sidebarOpen[i] ? " active" : ""}`} onClick={() => handleToggleSidebar(i)}>
//                                 <div className="d-flex align-items-center gap-2">
//                                   <img src={`https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/${sec.icon}`} alt="" />
//                                   <span className="title">{sec.title}</span>
//                                 </div>
//                                 <span className="chevron">
//                                   <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 1L7 7L13 1" stroke="#6469C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                                 </span>
//                               </button>
//                               <div className={`accordion-body${sidebarOpen[i] ? " open" : ""}`}>
//                                 <div className="body-content">
//                                   {sec.links.map((link, j) => (
//                                     <p key={j} className={link.cls || ""}>
//                                       <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>{link.label}</a>
//                                     </p>
//                                   ))}
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Right Side */}
//                       <div className="col-12 col-lg-6 col-xl-4">
//                         <div className="video">
//                           <div className="video-heading">
//                             <div><img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/video.png" alt="" /></div>
//                             <div><h6>SOLO Academy</h6><p className="d-none d-md-block">Watch educational videos and listen to podcasts that explain Solo&apos;s approach and guide you through your plan.</p></div>
//                           </div>
//                           <div className="mt-2 menu-video-wrapper">
//                             <video autoPlay muted loop playsInline className="menu-video">
//                               <source src="https://hbgsolo.com/static/frontend/Hbg/theme1/en_US/videos/video1.mp4" type="video/mp4" />
//                             </video>
//                             <div className="video-overlay"></div>
//                             <img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/Play.png" alt="Play" className="play-button" />
//                           </div>
//                           <div className="pt-3">
//                             <a href="https://www.youtube.com/watch?v=by_olN-27v4" target="_blank" rel="noopener noreferrer"><h6>Video 1</h6><p>Intro to Solo Health Collective and how it works.</p></a>
//                             <a href="https://www.youtube.com/watch?v=GSY_acicpV4" target="_blank" rel="noopener noreferrer"><h6 className="pt-3">Video 2</h6><p>Listen to Laura Adams from the Money Girl podcast discuss Solo.</p></a>
//                           </div>
//                         </div>
//                         <div className="news-box">
//                           <div className="news-heading"><div><img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/news.png" alt="" /></div><div><h6>News</h6></div></div>
//                           <div className="owl-carousel owl-theme d-none d-md-block">
//                             <div className="news-slide"><div className="news-card"><h3>Uprise</h3><p>Solo partners with Uprise to enhance financial planning for solopreneurs.</p></div><div className="news-card"><h3>IndeCollective</h3><p>Solo and IndeCollective collaborate to support independent business growth.</p></div></div>
//                             <div className="news-slide"><div className="news-card"><h3>Carry</h3><p>Carry joins Solo to provide tailored tax and investment support.</p></div><div className="news-card"><h3>Simply Business</h3><p>Solo partners with Simply Business to offer specialized insurance solutions.</p></div></div>
//                             <div className="news-slide"><div className="news-card"><h3>Wethos</h3><p>Wethos and Solo collaborate to simplify client proposals and billing tools.</p></div><div className="news-card"><h3>Grasshopper</h3><p>Solo and Grasshopper team up to deliver virtual phone services for members.</p></div></div>
//                           </div>
//                           <div className="owl-carousel owl-theme d-block d-md-none">
//                             {["Uprise","IndeCollective","Carry","Simply Business","Wethos","Grasshopper"].map((name,i) => (
//                               <div className="news-slide" key={i}><div className="news-card"><h3>{name}</h3><p>Solo partners with {name} to deliver great value for members.</p></div></div>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="d-flex justify-content-end">
//                           <img src="https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/solo-menu-logo.png" className="pt-3 mobile-logo" alt="" />
//                         </div>
//                         <div className="mobile-menu-button d-flex gap-2 justify-content-center align-items-center pt-3 d-block d-md-none">
//                           <a className="btn-one homebutton text-center fs-14" href="/#quote-section">Get Started</a>
//                           <a className="btn-two text-center fs-14" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">Book a Call</a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT (desktop) */}
//             <div className="right-side d-flex gap-4">
//               <div className="d-flex align-items-center gap-2">
//                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 10C14.1569 10 15.5 8.65685 15.5 7C15.5 5.34315 14.1569 4 12.5 4C10.8431 4 9.5 5.34315 9.5 7C9.5 8.65685 10.8431 10 12.5 10ZM12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M9.5 16C7.29086 16 5.5 17.7909 5.5 20V21C5.5 21.5523 5.05228 22 4.5 22C3.94772 22 3.5 21.5523 3.5 21V20C3.5 16.6863 6.18629 14 9.5 14H15.5C18.8137 14 21.5 16.6863 21.5 20V21C21.5 21.5523 21.0523 22 20.5 22C19.9477 22 19.5 21.5523 19.5 21V20C19.5 17.7909 17.7091 16 15.5 16H9.5Z" fill="#262965" /></svg>
//                 <p className="m-0 fs-14 fw-bold text-primary"><a href="/customer/account/login">Login</a></p>
//               </div>
//               <div><a className="btn btn-primary fs-14 text-white fw-bold d-none d-md-block" href="/#quote-section">Get Started</a></div>
//               <div><a className="book-call-header btn btn-secondary fs-14 fw-bold text-primary" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">Book a Call</a></div>
//             </div>

//             {/* RIGHT (mobile) */}
//             <div className="mobile-right-side d-flex gap-4">
//               <div className="d-flex align-items-center gap-2">
//                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 10C14.1569 10 15.5 8.65685 15.5 7C15.5 5.34315 14.1569 4 12.5 4C10.8431 4 9.5 5.34315 9.5 7C9.5 8.65685 10.8431 10 12.5 10ZM12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M9.5 16C7.29086 16 5.5 17.7909 5.5 20V21C5.5 21.5523 5.05228 22 4.5 22C3.94772 22 3.5 21.5523 3.5 21V20C3.5 16.6863 6.18629 14 9.5 14H15.5C18.8137 14 21.5 16.6863 21.5 20V21C21.5 21.5523 21.0523 22 20.5 22C19.9477 22 19.5 21.5523 19.5 21V20C19.5 17.7909 17.7091 16 15.5 16H9.5Z" fill="#262965" /></svg>
//                 <p className="m-0 fs-14 fw-bold text-primary"><a href="/customer/account/login">Login</a></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── NOTIFICATION BAR ─── */}
//       {notificationVisible && (
//         <section id="notificationBar" className="notification bg-primary">
//           <div className="custom-container">
//             <div className="d-flex gap-3 align-items-center py-3 justify-content-center">
//               <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M14 16.3333C14.6444 16.3333 15.1667 15.811 15.1667 15.1667V9.33335C15.1667 8.68901 14.6444 8.16668 14 8.16668C13.3557 8.16668 12.8334 8.68901 12.8334 9.33335V15.1667C12.8334 15.811 13.3557 16.3333 14 16.3333Z" fill="#FFBF00" /><path d="M15.1667 18.6667C15.1667 19.311 14.6444 19.8333 14 19.8333C13.3557 19.8333 12.8334 19.311 12.8334 18.6667C12.8334 18.0223 13.3557 17.5 14 17.5C14.6444 17.5 15.1667 18.0223 15.1667 18.6667Z" fill="#FFBF00" /><path fillRule="evenodd" clipRule="evenodd" d="M14 23.3333C19.1547 23.3333 23.3334 19.1547 23.3334 14C23.3334 8.84534 19.1547 4.66667 14 4.66667C8.84538 4.66667 4.66671 8.84534 4.66671 14C4.66671 19.1547 8.84538 23.3333 14 23.3333ZM14 25.6667C20.4434 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55668 20.4434 2.33334 14 2.33334C7.55672 2.33334 2.33337 7.55668 2.33337 14C2.33337 20.4433 7.55672 25.6667 14 25.6667Z" fill="#FFBF00" /></svg>
//               <div className="solo-banner">
//                 <p className="m-0 text-white fw-normal text-center fs-14">
//                   {/* href is handled by ClientInit via DOM event */}
//                   <a href="#faqAccordion" style={{ color:"#fff" }}>
//                     Set up your plan by the 20th to ensure plan and partner services are activated on time for your upcoming coverage month - click to learn more
//                   </a>
//                 </p>
//               </div>
//               <div style={{ cursor:"pointer" }} onClick={() => setNotificationVisible(false)}>
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.47138 3.5286C4.21103 3.26825 3.78892 3.26825 3.52858 3.5286C3.26823 3.78895 3.26823 4.21106 3.52858 4.47141L7.05718 8.00001L3.52859 11.5286C3.26824 11.7889 3.26824 12.2111 3.52859 12.4714C3.78894 12.7318 4.21105 12.7318 4.4714 12.4714L7.99999 8.94282L11.5286 12.4714C11.7889 12.7318 12.211 12.7318 12.4714 12.4714C12.7317 12.2111 12.7317 11.789 12.4714 11.5286L8.9428 8.00001L12.4714 4.47141C12.7318 4.21106 12.7318 3.78895 12.4714 3.5286C12.2111 3.26825 11.7889 3.26825 11.5286 3.5286L7.99999 7.0572L4.47138 3.5286Z" fill="white" /></svg>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ─── HERO ─── */}
//       <section className="hero-section" data-aos="fade-zoom-out" data-aos-duration="3000">
//         <div className="hero-bg">
//           <div className="custom-container">
//             <video autoPlay muted loop playsInline className="hero-video">
//               <source src="https://hbgsolo.com/media/video1.mp4" type="video/mp4" />
//             </video>
//             <div className="solo-logo">
//               <img src="https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/hero--banner-logo.png" alt="solo_img" />
//             </div>
//             <div>
//               <div className="hero-p">
//                 <p className="line-mask nowrap">Your BUSINESS.</p>
//                 <p className="line-mask">Your Health.</p>
//                 <p className="line-mask">Your PLAN.</p>
//               </div>
//               <div className="banner_buttons">
//                 <a className="start-btn" href="#quote-section">Calculate Cost</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="stats-section">
//           <div className="custom-container">
//             <div className="d-flex flex-column flex-md-row gap-3">
//               <div className="stats-card shadow" data-aos="fade-up" data-aos-delay="200"><div data-aos="fade-up" data-aos-delay="800"><h2 className="counter">1,000+</h2><p className="label">SELF-EMPLOYED</p><span>Businesses &amp; Growing</span></div></div>
//               <div className="stats-card shadow" data-aos="fade-up" data-aos-delay="800"><div data-aos="fade-up" data-aos-delay="1400"><h2 className="counter">$4.2+</h2><p className="label">MILLION</p><span>In Collective Member Savings</span></div></div>
//               <div className="stats-card shadow" data-aos="fade-up" data-aos-delay="1200"><div data-aos="fade-up" data-aos-delay="1600"><h2 className="counter">1M+</h2><p className="label">IN-NETWORK</p><span>Healthcare Practitioners Nationwide</span></div></div>
//             </div>
//           </div>
//         </div>
//         <section className="stats-carousel">
//           <div className="outer">
//             <div className="owl-carousel stats-owl">
//               <div className="stats-card shadow-sm"><h2 className="counter">1,000+</h2><p className="label">SELF-EMPLOYED</p><span>Businesses &amp; Growing</span></div>
//               <div className="stats-card shadow-sm"><h2 className="counter">$4.2+</h2><p className="label">MILLION</p><span>In Collective Member Savings</span></div>
//               <div className="stats-card shadow-sm"><h2 className="counter">1M+</h2><p className="label">IN-NETWORK</p><span>Healthcare Practitioners Nationwide</span></div>
//             </div>
//           </div>
//         </section>
//       </section>

//       {/* ─── ABOUT ─── */}
//       {/*
//         FIX: removed the IntersectionObserver from render.
//         ClientInit adds the "reveal" class via its own observer.
//         The section is visible by default and the CSS animation
//         fires once "reveal" is added.
//       */}
//       <section className="about-us">
//         <div className="custom-container">
//           <div className="about-content">
//             <div className="d-none d-lg-block">
//               <img src="https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/arrow-right.png" alt="right-arrow" />
//             </div>
//             <div>
//               <div className="animated-text">
//                 <h6>At Solo,</h6>
//                 <p className="line">
//                   As a <span>Solopreneur,</span> you are in full control. With Solo Health
//                   Collective&apos;s captive framework, your business builds a health plan designed
//                   for you — your needs, your lifestyle, your business. It&apos;s healthcare that
//                   works as hard as you do.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── MEDICAL COVERAGE ─── */}
//       <section className="medical-coverage">
//         <div className="custom-container">
//           <div className="coverage">
//             <div>
//               <p className="med-heading d-block-1">Major Medical Coverage, Built <br /> for a Business of One</p>
//               <p className="med-title">Solo offers comprehensive major medical coverage with nationwide access and real financial protection.</p>
//             </div>

//             {/* Mobile Slider */}
//             <div className="custom-slider d-block d-lg-none" data-aos="fade-up" data-aos-duration="1500" onTouchStart={handleCoverageTouchStart} onTouchEnd={handleCoverageTouchEnd}>
//               <div className="slides">
//                 {COVERAGE_TILES.map(([img, title, desc], i) => (
//                   <div className={`slide${i === coverageSlide ? " active" : ""}`} key={i}>
//                     <div className="coverage-tiles">
//                       <div className="tile-image"><img className="slider-logos" src={`https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/${img}`} alt={title} /></div>
//                       <div><p className="tiles-title">{title}</p><p className="tiles-subtitle">{desc}</p></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="custom-dots">
//                 {COVERAGE_TILES.map((_, i) => (
//                   <span key={i} className={`dot${i === coverageSlide ? " active" : ""}`} onClick={() => setCoverageSlide(i)} />
//                 ))}
//               </div>
//             </div>

//             {/* Desktop Grid */}
//             <div data-aos="fade-up" data-aos-easing="linear" data-aos-offset="200" data-aos-duration="1500">
//               <div className="row g-5 M-32">
//                 {COVERAGE_TILES.map(([img, title, desc], i) => (
//                   <div className="col-12 col-md-6 col-lg-4" key={i}>
//                     <div className="coverage-tiles">
//                       <div className="tile-image"><img src={`https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/${img}`} alt={title} /></div>
//                       <div><p className="tiles-title">{title}</p><p className="tiles-subtitle">{desc}</p></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="d-none d-lg-block">
//                 <div className="d-flex justify-content-center">
//                   <a className="view-btn" href="/plan-summary">View all benefits</a>
//                 </div>
//               </div>
//             </div>

//             {/* ─── QUOTE FORM ─── */}
//             <div id="quote-section" className="quote-section" data-aos="fade-up" data-aos-duration="1500">
//               <h2 className="quote-title">GET YOUR HEALTH PLAN COST <br /> FOR YOUR BUSINESS-OF-ONE</h2>
//               <p className="quote-subtitle">Enter a few details to view your actual monthly health plan cost and take the next step toward enrollment.</p>

//               <div className="quote_rates_form">
//                 <div className="row gy-3 justify-content-center M-32">
//                   {/* ZIP */}
//                   <div className="col-12 col-md-6 pe-0 pe-md-3">
//                     <label className="form-label">What&apos;s your zip code?*</label>
//                     <div className="input-card d-flex align-items-center">
//                       <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M20.0347 10.0348C20.0347 11.9349 19.3751 13.681 18.2724 15.0565H18.277C18.277 15.0565 15.4846 18.7933 13.3214 21.4393C12.6312 22.2834 11.3688 22.2831 10.6791 21.4386C8.5227 18.7985 5.73385 15.0646 5.73385 15.0646L5.72735 15.0565C4.62466 13.681 3.96509 11.9349 3.96509 10.0348C3.96509 5.5973 7.56238 2 11.9999 2C16.4374 2 20.0347 5.5973 20.0347 10.0348ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" fill="#262965" /></svg></div>
//                       <input type="text" className="form-control border-0 shadow-none" placeholder="Location" value={quoteZip} onChange={(e) => setQuoteZip(e.target.value)} />
//                     </div>
//                   </div>
//                   {/* DOB */}
//                   <div className="col-12 col-md-6">
//                     <label className="form-label">What&apos;s your date of birth?*</label>
//                     <div className="input-card-1 d-flex align-items-center">
//                       <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H6V3C6 2.44772 6.44772 2 7 2ZM16 6V7C16 7.55228 16.4477 8 17 8C17.5523 8 18 7.55228 18 7V6H19C19.5523 6 20 6.44771 20 7V10H4V7C4 6.44772 4.44772 6 5 6H6V7C6 7.55228 6.44772 8 7 8C7.55228 8 8 7.55228 8 7V6H16ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4Z" fill="#262965" /></svg></div>
//                       <input type="text" className="form-control border-0 shadow-none" placeholder="MM/DD/YYYY" value={quoteDob} onChange={(e) => setQuoteDob(e.target.value)} />
//                     </div>
//                   </div>
//                   {/* Gender */}
//                   <div className="col-12 pt-3">
//                     <label className="form-label fw-bold text-uppercase small">WHAT&apos;S YOUR SEX?*</label>
//                   </div>
//                   <div className="col-6 m-0 pe-0 pe-md-3">
//                     <div className="gender-selection gender-card">
//                       <label className="gender-card w-100">
//                         <input type="radio" name="gender" value="male" checked={quoteGender === "male"} onChange={() => setQuoteGender("male")} />
//                         <span className="custom-radio"></span>
//                         <span className="radio-label fs-14 fw-bolder text-primary">Male</span>
//                       </label>
//                     </div>
//                   </div>
//                   <div className="col-6 m-0">
//                     <div className="gender-selection gender-card">
//                       <label className="gender-card w-100">
//                         <input type="radio" name="gender" value="female" checked={quoteGender === "female"} onChange={() => setQuoteGender("female")} />
//                         <span className="custom-radio"></span>
//                         <span className="radio-label fs-14 fw-bolder text-primary">Female</span>
//                       </label>
//                     </div>
//                   </div>

//                   {/* Family Toggle */}
//                   <div className="mt-4 d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
//                     <div className="form-check form-switch">
//                       <input className="form-check-input quote_family" type="checkbox" id="familyToggle" checked={showModal} onChange={handleFamilyToggle} />
//                     </div>
//                     <div className="text-center d-flex gap-2 flex-column flex-lg-row">
//                       <p className="fw-bold m-0 mb-1 mb-md-0 fs-16 text-center text-primary">Add Family Members?</p>
//                       <p className="fw-normal m-0 fs-16 text-primary">(Toggle on to include spouse or dependents)</p>
//                     </div>
//                   </div>

//                   {/* Holdrate Fields */}
//                   <div className="holdrate-fields row">
//                     <h3 className="fs-32 text-primary fw-bold text-uppercase ratehold d-block-1">Want to save your rate automatically?</h3>
//                     <p className="holdrate-text">Fill out the details below!</p>
//                     <div className="mt-sm-3 mt-md-3 mt-3 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 pe-0 pe-md-3">
//                       <div className="input-box w-100">
//                         <div className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9 15C7.34315 15 6 16.3431 6 18V20C6 20.5523 5.55228 21 5 21C4.44772 21 4 20.5523 4 20V18C4 15.2386 6.23858 13 9 13H15C17.7614 13 20 15.2386 20 18V20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20V18C18 16.3431 16.6569 15 15 15H9Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5ZM8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7Z" fill="#262965" /></svg></div>
//                         <div className="input-field">
//                           <input type="text" id="holdrate_firstname" name="holdrate_firstname" className="new-input_design" placeholder=" " autoComplete="off" value={quoteFirstname} onChange={(e) => setQuoteFirstname(e.target.value)} />
//                           <label className="custom-input-label" htmlFor="holdrate_firstname">Full Name</label>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mt-sm-3 mt-md-3 mt-3 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 pe-0 pe-md-3">
//                       <div className="input-box w-100">
//                         <div className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5 6H19C19.3862 6 19.7213 6.21897 19.8879 6.53954L12.5547 11.4283C12.2188 11.6523 11.7812 11.6523 11.4453 11.4283L4.11209 6.53953C4.27868 6.21896 4.61377 6 5 6ZM4 8.8685V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8.86852L13.6641 13.0924C12.6564 13.7642 11.3436 13.7642 10.3359 13.0924L4 8.8685ZM2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z" fill="#262965" /></svg></div>
//                         <div className="input-field">
//                           <input type="text" id="holdrate_email" name="holdrate_email" className="new-input_design" placeholder=" " autoComplete="off" value={quoteEmail} onChange={(e) => setQuoteEmail(e.target.value)} />
//                           <label className="custom-input-label" htmlFor="holdrate_email">Business Email</label>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mt-sm-3 mt-md-3 mt-3 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 pe-0 pe-md-3">
//                       <div className="input-box w-100">
//                         <div className="icon"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.314 28.323"><path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" fill="#262965" /></svg></div>
//                         <div className="input-field">
//                           <input type="text" id="holdrate_phone" name="holdrate_phone" className="new-input_design" placeholder=" " autoComplete="off" value={quotePhone} onChange={(e) => setQuotePhone(e.target.value)} />
//                           <label className="custom-input-label" htmlFor="holdrate_phone">Phone Number</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {showModal && (
//                   <AddMemberModal
//                     closeModal={() => setShowModal(false)}
//                     onSave={() => {}}
//                     quoteData={{ zip:quoteZip, dob:quoteDob, gender:quoteGender, firstname:quoteFirstname, email:quoteEmail, phone:quotePhone }}
//                   />
//                 )}

//                 <div className="disclaimer-wrapper">
//                   <div className="disclaimer-item">
//                     <label className="custom-checkbox">
//                       <input type="checkbox" name="privacy_acknowledge" checked={privacyAck} onChange={(e) => setPrivacyAck(e.target.checked)} />
//                       <span className="checkmark"></span>
//                       <span className="disclaimer-text">By checking this box, you acknowledge your personal information will be handled in accordance with our <a href="/privacy-policy-cookie-restriction-mode" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</span>
//                     </label>
//                   </div>
//                   <div className="disclaimer-item">
//                     <label className="custom-checkbox">
//                       <input type="checkbox" name="marketing_consent" checked={marketingConsent} onChange={(e) => setMarketingConsent(e.target.checked)} />
//                       <span className="checkmark"></span>
//                       <span className="disclaimer-text">By checking this box, you agree that Healthy Business Group may contact you at the telephone number and email address you provided, even if your number is on a federal, state, or internal Do Not Call list, and may send marketing calls and texts using an automated system for selection or dialing of numbers or pre-recorded or artificial voice messages related to real estate products or services. You may unsubscribe at any time.</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="a-q-btn d-flex flex-column flex-md-row align-items-center justify-content-center">
//                   <button className="quote-btn" onClick={handleGetQuote}>Get my Quote</button>
//                 </div>
//               </div>

//               {/* PRICING SECTION */}
//               {pricingVisible && (
//                 <section className="pricing-section py-5 text-center">
//                   <div className="container">
//                     <p className="sub-text text-primary fw-bold text-center mt-3">Review your plan options and select your preferred deductible.</p>
//                     <div className="row gy-3 justify-content-center align-items-end mt-3 mt-lg-5">
//                       {PRICING_PLANS.map((plan) => (
//                         <div key={plan.value} className={`col-12 col-md-6 col-lg-4 col-xl-4 ${plan.planClass} quote-plans${plan.value === "5000" ? " selected" : ""}`}>
//                           {plan.popular ? (
//                             <div className={`popular-1 text-center${selectedPlan === plan.value ? " hover active" : ""}`}>
//                               <input type="hidden" name="quote_rate_plan" value={plan.value} />
//                               <div className="badge-top">MOST POPULAR</div>
//                               <div className="price-card-1">
//                                 <div className="responsive-price-card">
//                                   <div><input type="radio" name="plan" className="radio-btn d-md-none me-2" readOnly checked={selectedPlan === plan.value} /></div>
//                                   <div className="w-100">
//                                     <div className="card-responsive"><h2 className="price fw-bold">{plan.price}</h2><p className="subtitle">MONTHLY COST</p></div>
//                                     <div className="card-responsive"><h4 className="deductible fw-bold mt-3">{plan.deductible}</h4><p className="subtitle mb-0 m-0">DEDUCTIBLE PLAN</p><p className="mb-0 fs-14 text-primary m-0">{plan.familyDeductible}</p></div>
//                                   </div>
//                                 </div>
//                                 <button className="mt-3 sel-desel-btn fw-bolder text-primary Deselect-btn bg-primary" onClick={() => handlePlanSelect(plan.value)}>{selectedPlan === plan.value ? "Deselect" : "Select"}</button>
//                               </div>
//                             </div>
//                           ) : (
//                             <div className={`price-card${selectedPlan === plan.value ? " active" : ""}`}>
//                               <input type="hidden" name="quote_rate_plan" value={plan.value} />
//                               <div className="responsive-price-card">
//                                 <div><input type="radio" name="plan" className="radio-btn d-md-none me-2" readOnly checked={selectedPlan === plan.value} /></div>
//                                 <div className="w-100">
//                                   <div className="card-responsive"><h3 className="price fw-bold text-primary text-center">{plan.price}</h3><p className="mb-0 text-primary m-0">MONTHLY COST</p></div>
//                                   <div className="card-responsive"><h5 className="fw-bold text-primary m-0 mt-0 mt-md-3">{plan.deductible}</h5><p className="mb-0 text-primary m-0">DEDUCTIBLE PLAN</p><p className="mb-0 fs-14 text-primary m-0">{plan.familyDeductible}</p></div>
//                                 </div>
//                               </div>
//                               <button className="mt-3 sel-desel-btn text-white select-btn bg-primary fw-bolder" onClick={() => handlePlanSelect(plan.value)}>{selectedPlan === plan.value ? "Deselect" : "Select"}</button>
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                     <div className="d-flex flex-column flex-lg-row justify-content-center gap-3 mt-4">
//                       <button className="recalculate-btn bg-white text-primary fw-bolder" onClick={handleRecalculate}>Recalculate</button>
//                       <a className="talk-to-agent-btn bg-secondary text-primary fw-bolder" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">Talk to an agent</a>
//                       <a className="continue-btn bg-primary text-white fw-bolder" href="/hbgrates/form/medicalhistory">Continue</a>
//                     </div>
//                     <div className="saved-price mt-5">
//                       <h4 className="fs-32 text-primary fw-bold text-uppercase">We&apos;ve saved your price</h4>
//                       <div className="d-flex justify-content-center mt-3">
//                         <div className="email-input-group input-group">
//                           <span className="input-group-text"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5 6H19C19.3862 6 19.7213 6.21897 19.8879 6.53954L12.5547 11.4283C12.2188 11.6523 11.7812 11.6523 11.4453 11.4283L4.11209 6.53953C4.27868 6.21896 4.61377 6 5 6ZM4 8.8685V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8.86852L13.6641 13.0924C12.6564 13.7642 11.3436 13.7642 10.3359 13.0924L4 8.8685ZM2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z" fill="#262965" /></svg></span>
//                           <input type="email" className="form-control quote_rates_email" placeholder="Enter your email" value={ratesEmail} onChange={(e) => setRatesEmail(e.target.value)} />
//                           <button className="quote_rates_send btn btn-outline-light bg-white" onClick={handleSendRatesEmail}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.2929 17.7929C12.9024 18.1834 12.9024 18.8166 13.2929 19.2071C13.6834 19.5976 14.3166 19.5976 14.7071 19.2071L20.5 13.4142C21.281 12.6332 21.281 11.3668 20.5 10.5858L14.7071 4.79289C14.3166 4.40237 13.6834 4.40237 13.2929 4.79289C12.9024 5.18342 12.9024 5.81658 13.2929 6.20711L18.0858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H18.0858L13.2929 17.7929Z" fill="#656565" /></svg></button>
//                         </div>
//                       </div>
//                       <p className="fs-20 fw-medium text-primary mt-3 emailshare">Share your email and we&apos;ll send it to you for easy access later.</p>
//                     </div>
//                   </div>
//                 </section>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── MOBILE QUOTE MODAL ─── */}
//       {mobileQuoteVisible && (
//         <section className="mobile-quote d-block d-md-none">
//           <div className="mobile_quote_rates">
//             <div className="custom-container">
//               <div className="row d-flex justify-content-center">
//                 <div className="col-12 col-md-6">
//                   <div onClick={handleMobilePopupCancel} style={{ cursor:"pointer" }}>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.7071 17.7929C11.0976 18.1834 11.0976 18.8166 10.7071 19.2071C10.3166 19.5976 9.68339 19.5976 9.29286 19.2071L3.49997 13.4142C2.71892 12.6332 2.71892 11.3668 3.49997 10.5858L9.29286 4.79289C9.68339 4.40237 10.3166 4.40237 10.7071 4.79289C11.0976 5.18342 11.0976 5.81658 10.7071 6.20711L5.91419 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H5.91418L10.7071 17.7929Z" fill="#262965" /></svg>
//                   </div>
//                   <div className="custom-modal">
//                     <div className="border-0"><h5 className="form-title text-center mb-3 fw-bold text-primary fs-32">Add Members To Your Quote</h5></div>
//                     <div className="spouse-toggle-popup-mobile d-flex flex-column gap-2 justify-content-center align-items-center border-btm pb-3">
//                       <span className="fw-bold text-primary fs-16">Spouse/Partner</span>
//                       <div className="d-flex align-items-center gap-2">
//                         <label className="spouse-label-mobile form-check-label mb-0 fw-semibold text-primary">No</label>
//                         <div className="form-check form-switch m-0"><input className="form-check-input" type="checkbox" checked={hasSpouseMobile} onChange={(e) => { setHasSpouseMobile(e.target.checked); setSpouseGenderMobile(""); setSpouseDobMobile(""); }} /></div>
//                         <label className="spouse-label-mobile form-check-label mb-0 fw-semibold text-primary">Yes</label>
//                       </div>
//                     </div>
//                     {hasSpouseMobile && (
//                       <>
//                         <div className="row py-4">
//                           <p className="form-label fw-bold fs-16 text-primary text-center text-uppercase">What is your spouse gender*</p>
//                           <div className="col-6"><div className="gender-card mobile d-flex align-items-center gap-2"><input type="radio" name="spouseGenderMobile" className="form-check-input-1 m-0" value="Male" checked={spouseGenderMobile==="Male"} onChange={() => setSpouseGenderMobile("Male")} /><label className="mb-0 text-1 fs-14 fw-bold">Male</label></div></div>
//                           <div className="col-6"><div className="gender-card mobile d-flex align-items-center gap-2"><input type="radio" name="spouseGenderMobile" className="form-check-input-1 m-0" value="Female" checked={spouseGenderMobile==="Female"} onChange={() => setSpouseGenderMobile("Female")} /><label className="mb-0 text-1 fs-14 fw-bold">Female</label></div></div>
//                         </div>
//                         <div className="pt-0 pb-4 border-btm">
//                           <p className="form-label fw-bold fs-16 text-primary text-center text-uppercase">What is your spouse date of birth?*</p>
//                           <div className="input-box w-100">
//                             <div className="input-field"><input type="text" className="spouse-dob-mobile" placeholder="MM/DD/YYYY" value={spouseDobMobile} onChange={(e) => setSpouseDobMobile(e.target.value)} /></div>
//                           </div>
//                         </div>
//                       </>
//                     )}
//                     <div className="d-flex flex-column gap-2 justify-content-center align-items-center border-btm py-4">
//                       <span className="fw-bold text-primary fs-16">Child(ren)</span>
//                       <div className="d-flex align-items-center gap-2">
//                         <label className="form-check-label fw-semibold mb-0 text-primary">No</label>
//                         <div className="form-check form-switch m-0"><input className="form-check-input" type="checkbox" checked={hasChildrenMobile} onChange={(e) => { setHasChildrenMobile(e.target.checked); setChildCountMobile(""); }} /></div>
//                         <label className="form-check-label text-primary fw-semibold mb-0">Yes</label>
//                       </div>
//                     </div>
//                     {hasChildrenMobile && (
//                       <div className="children-section fs-16 text-center border-btm py-4">
//                         <h6 className="fw-bold mb-3">How many children under the age of 26?*</h6>
//                         <div className="d-flex justify-content-center gap-4">
//                           {[{v:"1",l:"1 Child"},{v:"2",l:"2 Children"},{v:"3",l:"3+ Children"}].map(({v,l}) => (
//                             <label key={v} className={`child-option children-${v}-mobile`}><input type="radio" name="childrenMobile" value={v} checked={childCountMobile===v} onChange={() => setChildCountMobile(v)} /><span>{l}</span></label>
//                           ))}
//                         </div>
//                         <p className="note fs-16 m-0 mt-4">Price is the same for 3 or more children.</p>
//                       </div>
//                     )}
//                     <div className="mobile-button d-flex justify-content-center pt-4 align-items-center gap-3">
//                       <button className="help-btn w-100" onClick={handleMobilePopupCancel}>Cancel</button>
//                       <button className="search-btn w-100" onClick={handleMobilePopupContinue}>Continue</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ─── TESTIMONIALS ─── */}
//       <section className="testimonials-section pt-3 pt-md-5 pb-5" data-aos="fade-up" data-aos-duration="1000">
//         <div className="custom-container">
//           <h2 className="fw-bold text-uppercase mb-3">What Real Members Are Saying About Solo</h2>
//           <p className="mb-4">Join 1,000+ solopreneurs who trust Solo for major medical coverage—read verified reviews and ratings on Trustpilot.</p>
//           <div className="text-center"><a href="https://www.trustpilot.com/review/hbgsolo.com" target="_blank" rel="noopener noreferrer"><img src="https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/trustpilot-image.png" alt="Trustpilot" className="mb-5" /></a></div>
//         </div>
//         <div className="slider slider-left">
//           <div className="slide-track row flex-nowrap pt-3">
//             {TESTIMONIALS_ROW1.map(([name, text], i) => (
//               <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={i}>
//                 <div className="card testimonial-card"><div className="card-body"><h6 className="fw-bold">{name}</h6><div className="rating-img"><img className="img-fluid" src="https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/Rating.png" alt="rating" /></div><p>{text}</p></div></div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="slider slider-right">
//           <div className="slide-track row flex-nowrap pt-3">
//             {TESTIMONIALS_ROW2.map(([name, text], i) => (
//               <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={i}>
//                 <div className="card testimonial-card"><div className="card-body"><h6 className="fw-bold">{name}</h6><div className="rating-img"><img className="img-fluid" src="https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/Rating.png" alt="rating" /></div><p>{text}</p></div></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── NETWORK ─── */}
//       <section className="network-section text-center" data-aos="fade-up" data-aos-duration="2000">
//         <div className="custom-container">
//           <h2 className="fw-bold text-uppercase mb-3">Easily Find In-Network Doctors &amp; Specialists</h2>
//           <img src="https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/MULTIPLAN_LOGO_RGB_IMG.png" alt="MultiPlan" className="pt-3 pb-4" style={{ maxWidth:"300px" }} />
//           <p className="lead mb-4">Solo partners with MultiPlan&apos;s PHCS offering nationwide access to over <strong style={{ fontWeight:600 }}>1.4 million physicians, hospitals, and specialists</strong>, plus the flexibility of an open network for accepting providers.</p>
//         </div>
//         <div className="logos-slider background-gradient-1">
//           <div className="logos-track">
//             {[...PARTNER_LOGOS,...PARTNER_LOGOS].map(([img,alt],i) => (
//               <img key={i} src={`https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/${img}`} alt={alt} className="partner-logo" />
//             ))}
//           </div>
//         </div>
//         <div className="custom-container">
//           <div className="d-flex flex-column flex-md-row gap-3 justify-content-center py-4">
//             <a className="search-btn" href="/our-network">Search the Network</a>
//           </div>
//           <p className="text-primary fw-normal fs-16">Use our online search tool to find doctors, hospitals, and specialists in the PHCS Practitioner &amp; Ancillary Network. You&apos;ll get the highest level of benefits when you choose in-network providers.</p>
//         </div>
//       </section>

//       {/* ─── SWITCH PLAN ─── */}
//       <section className="switch-plan-section text-center">
//         <div className="custom-container">
//           <div className="switch-part">
//             <div className="faded-wrapper">
//               <div className="faded-text">
//                 <p className="fade-line fade-1">Consultant, Bookkeeper,</p>
//                 <p className="fade-line fade-2">Copywriter, Coach, Developer,</p>
//                 <p className="fade-line fade-3">Attorney, Photographer,</p>
//                 <p className="fade-line fade-4">Strategist, Illustrator, Filmmaker,</p>
//                 <p className="fade-line fade-5">Podcaster, Realtor, Stylist,</p>
//                 <p className="fade-line fade-6">Organizer, Walker, Chef, Trainer,</p>
//                 <p className="fade-line fade-7">Vendor, Baker, Preparer, Tutor,</p>
//                 <p className="fade-line fade-8">Instructor, Seller, Curator.</p>
//               </div>
//             </div>
//             <h2 className="switch-heading">READY TO SWITCH <br /> YOUR HEALTH PLAN? <br /> WE&apos;LL MAKE IT SIMPLE.</h2>
//             <p className="lead">Our team will walk you through every step from reviewing your current coverage to getting you set up with Solo.</p>
//             <div className="d-flex flex-column flex-md-row justify-content-center gap-30 mb-4">
//               <a className="start-btn" href="#quote-section">Get Started</a>
//               <a className="enroll-btn" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">Talk to a Specialist</a>
//             </div>
//             <p className="text-center fs-16 text-primary">Switching is easier than you think. We&apos;ll help you compare benefits, coordinate your start date, and ensure a smooth transition with no gap in coverage.</p>
//           </div>

//           <section className="join-solo" data-aos="fade-up" data-aos-duration="1000">
//             <h2>How to Join Solo <br /> in 4 Easy Steps</h2>
//             <div className="row flex-column-reverse flex-lg-row pt-5">
//               <div className="col-12 col-lg-7">
//                 <div className="solo-points">
//                   {JOIN_STEPS.map(([num, title, desc], i) => (
//                     <div className="point-one" key={i} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={i*400} data-aos-offset="0">
//                       <div className="number"><p>{num}</p></div>
//                       <div className="point-text"><h5>{title}</h5><p>{desc}</p></div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="custom-slider-2 d-block d-lg-none" onTouchStart={handleJoinTouchStart} onTouchEnd={handleJoinTouchEnd}>
//                   <div className="slides">
//                     {JOIN_STEPS.map(([num,title,desc],i) => (
//                       <div className={`slide${i===joinSlide?" active":""}`} key={i}>
//                         <div className="slider-point-one"><div className="number"><p>{num}</p></div><div className="point-text"><h5>{title}</h5><p>{desc}</p></div></div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="custom-dots">
//                     {JOIN_STEPS.map((_,i) => <span key={i} className={`dot${i===joinSlide?" active":""}`} onClick={() => setJoinSlide(i)} />)}
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 col-lg-5 overflow-hidden">
//                 <img src="https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/Group_12.png" data-aos="fade-left" data-aos-duration="1200" className="join-solo-image d-none d-md-block" alt="solos-banner" />
//                 <img src="https://stage.hbgsolo.com/media/.renditions/wysiwyg/homepage/Group_12.png" data-aos="fade-left" data-aos-duration="1200" className="join-solo-image d-block d-md-none" alt="solos-banner" />
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>

//       {/* ─── FAQ ─── */}
//       <section className="faq-section" data-aos="fade-up" data-aos-duration="1200">
//         <div className="custom-container">
//           <h2>FREQUENTLY ASKED QUESTIONS</h2>
//           <div className="accordion faq-list M-32" id="faqAccordion">
//             {FAQ_ITEMS.map((faq) => (
//               <div className="accordion-item faq-item" key={faq.id} id={faq.itemId || undefined}>
//                 <h2 className="accordion-header">
//                   <button className={`accordion-button faq-question${openFaq !== faq.id ? " collapsed" : ""}`} type="button" onClick={() => handleFaqToggle(faq.id)} aria-expanded={openFaq === faq.id}>{faq.question}</button>
//                 </h2>
//                 <div className={`accordion-collapse collapse${openFaq === faq.id ? " show" : ""}`}>
//                   <div className="accordion-body faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="faq-cta py-3 py-lg-5"><p className="m-0">Want more answers? <a href="/faq">Visit our Full FAQ</a> or talk to our team today.</p></div>
//           <div className="d-flex justify-content-center"><a className="faq-btn" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">Talk to an Agent</a></div>
//         </div>
//       </section>

//       {/* ─── DESKTOP FAMILY POPUP ─── */}
//       {desktopPopupVisible && (
//         <div id="custom-popup" className="medical-coverage">
//           <div className="custom-modal">
//             <div className="custom-modal-body">
//               <div className="spouse-toggle-popup d-flex gap-5 justify-content-center align-items-center border-btm pb-3">
//                 <span className="fw-bold text-primary fs-16">Spouse/Partner</span>
//                 <div className="d-flex align-items-center gap-2">
//                   <label className="spouse-label form-check-label mb-0 fw-semibold text-primary">No</label>
//                   <div className="form-check form-switch m-0"><input className="form-check-input" type="checkbox" checked={hasSpouseDesktop} onChange={(e) => { setHasSpouseDesktop(e.target.checked); setSpouseGenderDesktop(""); setSpouseDobDesktop(""); }} /></div>
//                   <label className="spouse-label form-check-label mb-0 fw-semibold text-primary">Yes</label>
//                 </div>
//               </div>
//               {hasSpouseDesktop && (
//                 <>
//                   <div className="row py-4">
//                     <p className="form-label fw-bold text-primary text-center text-uppercase">What is your spouse gender*</p>
//                     <div className="col-6"><div className="gender-card d-flex align-items-center gap-2"><input type="radio" name="spouseGenderDesktop" className="form-check-input-1 m-0" value="Male" checked={spouseGenderDesktop==="Male"} onChange={() => setSpouseGenderDesktop("Male")} /><label className="mb-0 text-1 fs-14 fw-bold">Male</label></div></div>
//                     <div className="col-6"><div className="gender-card d-flex align-items-center gap-2"><input type="radio" name="spouseGenderDesktop" className="form-check-input-1 m-0" value="Female" checked={spouseGenderDesktop==="Female"} onChange={() => setSpouseGenderDesktop("Female")} /><label className="mb-0 text-1 fs-14 fw-bold">Female</label></div></div>
//                   </div>
//                   <div className="pt-0 pb-4 border-btm">
//                     <p className="form-label fw-bold text-primary text-center text-uppercase">What is your spouse date of birth?*</p>
//                     <div className="input-box w-100">
//                       <div className="input-field"><input type="text" className="spouse-dob" placeholder="MM/DD/YYYY" value={spouseDobDesktop} onChange={(e) => setSpouseDobDesktop(e.target.value)} /></div>
//                     </div>
//                   </div>
//                 </>
//               )}
//               <div className="d-flex gap-5 justify-content-center align-items-center border-btm py-4">
//                 <span className="fw-bold text-primary fs-16">Child(ren)</span>
//                 <div className="d-flex align-items-center gap-2">
//                   <label className="form-check-label fw-semibold mb-0 text-primary">No</label>
//                   <div className="form-check form-switch m-0"><input className="form-check-input" type="checkbox" checked={hasChildrenDesktop} onChange={(e) => { setHasChildrenDesktop(e.target.checked); setChildCountDesktop(""); }} /></div>
//                   <label className="form-check-label text-primary fw-semibold mb-0">Yes</label>
//                 </div>
//               </div>
//               {hasChildrenDesktop && (
//                 <div className="children-section text-center border-btm py-4">
//                   <h6 className="fw-bold mb-3">How many children under the age of 26?*</h6>
//                   <div className="d-flex justify-content-center gap-5">
//                     {[{v:"1",l:"1 Child"},{v:"2",l:"2 Children"},{v:"3",l:"3+ Children"}].map(({v,l}) => (
//                       <label key={v} className={`child-option children-${v}`}><input type="radio" name="childrenDesktop" value={v} checked={childCountDesktop===v} onChange={() => setChildCountDesktop(v)} /><span>{l}</span></label>
//                     ))}
//                   </div>
//                   <p className="note m-0 mt-4">Price is the same for 3 or more children.</p>
//                 </div>
//               )}
//               <div className="popup-button d-flex justify-content-center pt-4 align-items-center gap-3">
//                 <button className="help-btn w-100" onClick={handleDesktopPopupCancel}>Cancel</button>
//                 <button className="search-btn w-100" onClick={handleDesktopPopupContinue}>Continue</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// // }