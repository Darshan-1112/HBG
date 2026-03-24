"use client";
import Link from 'next/link';

const CALENDLY_LINK =
  "https://calendly.com/d/ckh2-xd6-qjd/benefits-conversation-with-hbg";

const SIDEBAR_SECTIONS = [
  { title:"Plans and Coverage", icon:"paln-img.png", links:[{ href:"/plan-summary", label:"Plan Summary", cls:"custom-border-1" },{ href:"/faq", label:"Policy FAQ" }] },
  { title:"Our Network", icon:"network.png", links:[{ href:"/our-network", label:"Find a Doctor" }] },
  { title:"Member Services", icon:"member.png", links:[{ href:"/member-services", label:"Manage your Portal" }] },
  { title:"Resources", icon:"resource.png", links:[{ href:"/how-it-works", label:"How it Works" },{ href:"/resource-articles", label:"Resource Articles", cls:"custom-border" },{ href:"/preventive-care", label:"Preventive Care Guide", cls:"custom-border-1" },{ href:"/mental-health", label:"Mental Health & Wellness", cls:"custom-border-1" },{ href:"/emergency-care-benefits", label:"Emergency Care Benefits" }] },
  { title:"About us", icon:"member.png", links:[{ href:"/about-us", label:"Company" },{ href:"/about-us#license", label:"Licensing" }] },
  { title:"Contact Us", icon:"conatctus.png", links:[{ href:CALENDLY_LINK, label:"Schedule a consult", external:true },{ href:"/contact#partner", label:"Partner with us", cls:"custom-border" },{ href:"/contact#feedback", label:"Leave us feedback" }] },
];

export default function Header({ sidebarOpen, handleToggleSidebar }) {
  return (
    <section className="header">
      <div className="custom-container home-container">
        <div className="new-custom-header d-flex align-items-center justify-content-between">

          {/* LEFT */}
          <div className="left-side">
            <Link className="text-decoration-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              <div className="d-flex gap-3 align-items-center">
                <div><img src="/images/menu-bars.png" alt="" /></div>
                <p className="m-0 fs-14 fw-bold text-primary">Menu</p>
              </div>
            </Link>

            {/* OFFCANVAS */}
            <div className="offcanvas offcanvas-top h-100" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="menu-close-home offcanvas-header d-flex flex-row-reverse flex-lg-row align-items-center justify-content-start">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style={{ display:"none" }}>&times;</button>
                <div className="menu_close_section">
                  <div className="menu-btn btn-closes text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.47132 3.52864C4.21097 3.26829 3.78886 3.26829 3.52851 3.52864C3.26816 3.78899 3.26816 4.2111 3.52851 4.47145L7.05712 8.00005L3.52853 11.5286C3.26818 11.789 3.26818 12.2111 3.52853 12.4714C3.78888 12.7318 4.21099 12.7318 4.47134 12.4714L7.99993 8.94286L11.5285 12.4715C11.7889 12.7318 12.211 12.7318 12.4713 12.4715C12.7317 12.2111 12.7317 11.789 12.4713 11.5286L8.94274 8.00005L12.4713 4.47145C12.7317 4.2111 12.7317 3.78899 12.4713 3.52864C12.211 3.26829 11.7889 3.26829 11.5285 3.52864L7.99993 7.05724L4.47132 3.52864Z" fill="#FFBF00" /></svg>
                  </div>
                  <div className="menu-close close_menu">Close Menu</div>
                </div>
                <div className="menu_home_section">
                  <div className="menu-btn btn-closes text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link href="/"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M1.99532 6.07083C1.57389 6.45012 1.33325 6.99045 1.33325 7.55742V12.6667C1.33325 13.7713 2.22868 14.6667 3.33325 14.6667H12.6666C13.7712 14.6667 14.6666 13.7713 14.6666 12.6667V7.55742C14.6666 6.99045 14.4259 6.45012 14.0045 6.07083L9.33785 1.87083C8.57724 1.18628 7.4226 1.18629 6.66199 1.87083L1.99532 6.07083ZM7.33325 8.6667C6.59687 8.6667 5.99992 9.26365 5.99992 10V12.6667C5.99992 13.0349 6.2984 13.3334 6.66659 13.3334H9.33325C9.70144 13.3334 9.99992 13.0349 9.99992 12.6667V10C9.99992 9.26365 9.40297 8.6667 8.66659 8.6667H7.33325Z" fill="#FFBF00" /></svg></Link>
                  </div>
                  <div className="menu-home close_menu"><Link href="/">Home</Link></div>
                </div>
                <div className="d-block d-lg-none">
                  <img src="/images/mobile-menu-logo.png" alt="mobilemenulogo" />
                </div>
              </div>

              <div className="offcanvas-body text-white">
                <div className="Menu">
                  <div className="row">
                    <div className="col-12 col-lg-6 col-xl-8">
                      <div className="menu-grid">
                        <div className="grid-1 d-flex flex-column">
                          <div className="plans">
                            <div className="Menu-headings"><div><img src="/images/paln-img.png" alt="" /></div><p>Plans and Coverage</p></div>
                            <div className="menu-content">
                              <div className="menu-item"><a href="/plan-summary"><h6>Plan Summary</h6><p>Overview of deductibles, benefits, and plan highlights at a glance.</p></a></div>
                              <div className="menu-item"><a href="/faq"><h6>Policy FAQ</h6><p>Clear answers to the most common plan questions.</p></a></div>
                            </div>
                          </div>
                          <div className="plans">
                            <div className="Menu-headings"><div><img src="/images/network.png" alt="" /></div><p>Our Network</p></div>
                            <div className="menu-content">
                              <div className="menu-item"><a href="/our-network"><h6>Find a Doctor</h6><p>Search 1.4M+ in-network providers across the Multiplan PHCS PPO network.</p></a></div>
                            </div>
                          </div>
                          <div className="plans">
                            <div className="Menu-headings"><div><img src="/images/member.png" alt="" /></div><p>About us</p></div>
                            <div className="menu-content">
                              <div className="menu-item"><a href="/about-us"><h6>Company</h6><p>Learn about Solo&apos;s mission to redefine healthcare for solopreneurs.</p></a></div>
                              <div className="menu-item"><a href="/about-us#license"><h6>Licensing</h6><p>Review state licenses and compliance information.</p></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="grid-2 d-flex flex-column">
                          <div className="plans">
                            <div className="Menu-headings"><div><img src="/images/member.png" alt="" /></div><p>Member Services</p></div>
                            <div className="menu-content">
                              <div className="menu-item"><Link href="/member-services"><h6>Manage your Portal</h6><p>Access your ID cards, claims, benefits, and personal plan details online.</p></Link></div>
                            </div>
                          </div>
                          <div className="plans">
                            <div className="Menu-headings"><div><img src="/images/resource.png" alt="" /></div><p>Resources</p></div>
                            <div className="menu-content">
                              <div className="menu-item"><Link href="/how-it-works"><h6>How it Works</h6><p>Step-by-step guide to setting up and using your Solo plan.</p></Link></div>
                              <div className="menu-item"><Link href="/resource-articles"><h6>Resource Articles</h6><p>Understand the unique structure of Solo compared to market alternatives.</p></Link></div>
                              <div className="menu-item"><Link href="/preventive-care"><h6>Preventive Care Guide</h6><p>Stay on top of covered preventive services and annual screenings.</p></Link></div>
                              <div className="menu-item"><Link href="/mental-health"><h6>Mental Health &amp; Wellness</h6><p>Resources and benefits that support your overall well-being</p></Link></div>
                              <div className="menu-item"><Link href="/emergency-care-benefits"><h6>Emergency Care Benefits</h6><p>Understand how emergency services are covered, including urgent care, ER visits, and international emergencies.</p></Link></div>
                            </div>
                          </div>
                          <div className="plans">
                            <div className="Menu-headings"><div><img src="/images/conatctus.png" alt="" /></div><p>Contact Us</p></div>
                            <div className="menu-content">
                              <div className="menu-item"><Link href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer"><h6>Schedule a consult</h6><p>Book a call with our team to review your options.</p></Link></div>
                              <div className="menu-item"><Link href="/contact#partner"><h6>Partner with us</h6><p>Explore opportunities to collaborate with Solo Health Collective.</p></Link></div>
                              <div className="menu-item"><Link href="/contact#feedback"><h6>Leave us feedback</h6><p>Share your thoughts to help us improve member experience.</p></Link></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sidebar Accordion (mobile) */}
                      <div className="sidebar-accordion">
                        {SIDEBAR_SECTIONS.map((sec, i) => (
                          <div className="accordion-item" key={i}>
                            <button className={`accordion-header${sidebarOpen[i] ? " active" : ""}`} onClick={() => handleToggleSidebar(i)}>
                              <div className="d-flex align-items-center gap-2">
                                <img src={`https://stage.hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/${sec.icon}`} alt="" />
                                <span className="title">{sec.title}</span>
                              </div>
                              <span className="chevron">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 1L7 7L13 1" stroke="#6469C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </span>
                            </button>
                            <div className={`accordion-body${sidebarOpen[i] ? " open" : ""}`}>
                              <div className="body-content">
                                {sec.links.map((link, j) => (
                                  <p key={j} className={link.cls || ""}>
                                    <Link href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                                      {link.label}
                                    </Link>
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-12 col-lg-6 col-xl-4">
                      <div className="video">
                        <div className="video-heading">
                          <div><img src="/images/video.png" alt="" /></div>
                          <div><h6>SOLO Academy</h6><p className="d-none d-md-block">Watch educational videos and listen to podcasts that explain Solo&apos;s approach and guide you through your plan.</p></div>
                        </div>
                        <div className="mt-2 menu-video-wrapper">
                          <video autoPlay muted loop playsInline className="menu-video">
                            <source src="/videos/video2.mp4" type="video/mp4" />
                          </video>
                          <div className="video-overlay"></div>
                          <img src="/images/Play.png" alt="Play" className="play-button" />
                        </div>
                        <div className="pt-3">
                          <Link href="https://www.youtube.com/watch?v=by_olN-27v4" target="_blank" rel="noopener noreferrer">
                            <h6>Video 1</h6>
                            <p>Intro to Solo Health Collective and how it works.</p>
                          </Link>
                          <Link href="https://www.youtube.com/watch?v=GSY_acicpV4" target="_blank" rel="noopener noreferrer">
                            <h6 className="pt-3">Video 2</h6>
                            <p>Listen to Laura Adams from the Money Girl podcast discuss Solo.</p>
                          </Link>
                        </div>
                      </div>
                      <div className="news-box">
                        <div className="news-heading"><div><img src="/images/news.png" alt="" /></div><div><h6>News</h6></div></div>
                        <div className="owl-carousel owl-theme d-none d-md-block">
                          <div className="news-slide"><div className="news-card"><h3>Uprise</h3><p>Solo partners with Uprise to enhance financial planning for solopreneurs.</p></div><div className="news-card"><h3>IndeCollective</h3><p>Solo and IndeCollective collaborate to support independent business growth.</p></div></div>
                          <div className="news-slide"><div className="news-card"><h3>Carry</h3><p>Carry joins Solo to provide tailored tax and investment support.</p></div><div className="news-card"><h3>Simply Business</h3><p>Solo partners with Simply Business to offer specialized insurance solutions.</p></div></div>
                          <div className="news-slide"><div className="news-card"><h3>Wethos</h3><p>Wethos and Solo collaborate to simplify client proposals and billing tools.</p></div><div className="news-card"><h3>Grasshopper</h3><p>Solo and Grasshopper team up to deliver virtual phone services for members.</p></div></div>
                        </div>
                        <div className="owl-carousel owl-theme d-block d-md-none">
                          {["Uprise","IndeCollective","Carry","Simply Business","Wethos","Grasshopper"].map((name,i) => (
                            <div className="news-slide" key={i}><div className="news-card"><h3>{name}</h3><p>Solo partners with {name} to deliver great value for members.</p></div></div>
                          ))}
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <img src="/images/solo-menu-logo.png" className="pt-3 mobile-logo" alt="" />
                      </div>
                      <div className="mobile-menu-button d-flex gap-2 justify-content-center align-items-center pt-3 d-block d-md-none">
                        <Link className="btn-one homebutton text-center fs-14" href="/#quote-section">
                          Get Started
                        </Link>
                        <Link className="btn-two text-center fs-14" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                          Book a Call
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT (desktop) */}
          <div className="right-side d-flex gap-4">
            <div className="d-flex align-items-center gap-2">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 10C14.1569 10 15.5 8.65685 15.5 7C15.5 5.34315 14.1569 4 12.5 4C10.8431 4 9.5 5.34315 9.5 7C9.5 8.65685 10.8431 10 12.5 10ZM12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M9.5 16C7.29086 16 5.5 17.7909 5.5 20V21C5.5 21.5523 5.05228 22 4.5 22C3.94772 22 3.5 21.5523 3.5 21V20C3.5 16.6863 6.18629 14 9.5 14H15.5C18.8137 14 21.5 16.6863 21.5 20V21C21.5 21.5523 21.0523 22 20.5 22C19.9477 22 19.5 21.5523 19.5 21V20C19.5 17.7909 17.7091 16 15.5 16H9.5Z" fill="#262965" /></svg>
              <p className="m-0 fs-14 fw-bold text-primary"><Link href="/customer/account/login">Login</Link></p>
            </div>
            <div><Link className="btn btn-primary fs-14 text-white fw-bold d-none d-md-block" href="/#quote-section">
              Get Started
            </Link></div>
            <div><Link className="book-call-header btn btn-secondary fs-14 fw-bold text-primary" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              Book a Call
            </Link></div>
          </div>

          {/* RIGHT (mobile) */}
          <div className="mobile-right-side d-flex gap-4">
            <div className="d-flex align-items-center gap-2">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 10C14.1569 10 15.5 8.65685 15.5 7C15.5 5.34315 14.1569 4 12.5 4C10.8431 4 9.5 5.34315 9.5 7C9.5 8.65685 10.8431 10 12.5 10ZM12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z" fill="#262965" /><path fillRule="evenodd" clipRule="evenodd" d="M9.5 16C7.29086 16 5.5 17.7909 5.5 20V21C5.5 21.5523 5.05228 22 4.5 22C3.94772 22 3.5 21.5523 3.5 21V20C3.5 16.6863 6.18629 14 9.5 14H15.5C18.8137 14 21.5 16.6863 21.5 20V21C21.5 21.5523 21.0523 22 20.5 22C19.9477 22 19.5 21.5523 19.5 21V20C19.5 17.7909 17.7091 16 15.5 16H9.5Z" fill="#262965" /></svg>
              <p className="m-0 fs-14 fw-bold text-primary"><Link href="/customer/account/login">Login</Link></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}