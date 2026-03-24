"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OurNetwork() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

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

  const accordionItems = [
    {
      id: "one",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.6505 15.7673C21.6505 18.0857 19.7711 19.9651 17.4527 19.9651C15.1343 19.9651 13.2549 18.0857 13.2549 15.7673C13.2549 13.4489 15.1343 11.5695 17.4527 11.5695C19.7711 11.5695 21.6505 13.4489 21.6505 15.7673ZM21.6697 19.1361C22.4082 18.2128 22.8499 17.0416 22.8499 15.7673C22.8499 12.7865 20.4335 10.3701 17.4527 10.3701C14.4719 10.3701 12.0555 12.7865 12.0555 15.7673C12.0555 18.7481 14.4719 21.1645 17.4527 21.1645C18.7271 21.1645 19.8983 20.7228 20.8216 19.9842L22.4259 21.5885C22.66 21.8227 23.0397 21.8227 23.2739 21.5885C23.5081 21.3543 23.5081 20.9746 23.2739 20.7404L21.6697 19.1361Z" fill="#FFBF00"/>
          <path d="M11.1165 17.0483C11.2786 17.7251 11.5468 18.3601 11.9036 18.9351H1.60773C1.08675 18.9351 0.664368 18.5127 0.664368 17.9917C0.664521 17.4708 1.08684 17.0483 1.60773 17.0483H11.1165ZM17.6439 1.95557C19.2067 1.95563 20.4739 3.22274 20.4739 4.78564V9.88721C19.8936 9.56918 19.2587 9.33952 18.5872 9.2124V4.78564C18.5872 4.2647 18.1648 3.84235 17.6439 3.84229H4.43683C3.91605 3.84253 3.49445 4.26481 3.49445 4.78564V13.2749C3.49445 13.7957 3.91605 14.218 4.43683 14.2183H11.0745C10.9853 14.6456 10.9378 15.0886 10.9378 15.5425C10.9378 15.732 10.9471 15.9196 10.9632 16.105H4.43683C2.87409 16.1047 1.60773 14.8377 1.60773 13.2749V4.78564C1.60773 3.22285 2.87409 1.95581 4.43683 1.95557H17.6439Z" fill="#FFBF00"/>
        </svg>
      ),
      title: "Step 1: Search The Multiplan PHCS Network Online",
      subtitle: 'Use the Multiplan search tool and select "PHCS - Practitioner & Ancillary"',
      body: (
        <>
          <ul>
            <li>Visit the <a href="https://providersearch.multiplan.com" target="_blank" rel="noopener noreferrer" className="highlight-text">Multiplan Provider Search Tool</a></li>
            <li>Select &quot;PHCS Practitioner &amp; Ancillary&quot; as your network</li>
            <li>Search by name, specialty, or ZIP code</li>
            <li>Filter results to see only in-network providers</li>
            <li>Save provider details for your records or call ahead to confirm participation</li>
          </ul>
          <div style={{ marginTop: "1rem" }}>
            <p style={{ fontWeight: "bold", color: "#262965", margin: 0, fontSize: "18px" }}>Why it matters:</p>
            <p style={{ fontWeight: "normal", margin: 0, fontSize: "16px", color: "#262965" }}>
              Choosing in-network providers ensures the highest benefits and lowest out-of-pocket costs.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "two",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.31415 18.4378C3.31415 19.3764 3.68698 20.2765 4.35062 20.9401C5.01426 21.6037 5.91435 21.9766 6.85288 21.9766H17.1474C18.0859 21.9766 18.986 21.6037 19.6496 20.9401C20.3133 20.2765 20.6861 19.3764 20.6861 18.4378C20.6861 17.4993 20.3133 16.5992 19.6496 15.9356C18.986 15.2719 18.0859 14.8991 17.1474 14.8991H12.9652V13.2906C12.9652 13.0346 12.8636 12.7891 12.6826 12.6081C12.5016 12.4272 12.2561 12.3255 12.0001 12.3255C11.7442 12.3255 11.4987 12.4272 11.3177 12.6081C11.1367 12.7891 11.035 13.0346 11.035 13.2906V14.8991H6.85288C5.91435 14.8991 5.01426 15.2719 4.35062 15.9356C3.68698 16.5992 3.31415 17.4993 3.31415 18.4378ZM17.1474 16.8293C17.574 16.8293 17.9831 16.9988 18.2848 17.3004C18.5864 17.6021 18.7559 18.0112 18.7559 18.4378C18.7559 18.8644 18.5864 19.2736 18.2848 19.5752C17.9831 19.8769 17.574 20.0463 17.1474 20.0463H6.85288C6.42627 20.0463 6.01714 19.8769 5.71549 19.5752C5.41383 19.2736 5.24436 18.8644 5.24436 18.4378C5.24436 18.0112 5.41383 17.6021 5.71549 17.3004C6.01714 16.9988 6.42627 16.8293 6.85288 16.8293H17.1474Z" fill="#FFBF00"/>
          <path d="M3.2691 6.69245C3.28653 6.82751 3.33292 6.95723 3.4051 7.07271C3.47727 7.1882 3.57354 7.28674 3.68732 7.36159C3.88448 7.49127 4.12232 7.54423 4.35587 7.51044C4.58943 7.47665 4.80251 7.35846 4.95483 7.17822C5.82912 6.16697 6.91085 5.35578 8.12653 4.79978C9.34221 4.24378 10.6633 3.95601 12.0001 3.95601C13.3369 3.95601 14.658 4.24378 15.8737 4.79978C17.0894 5.35578 18.1711 6.16697 19.0454 7.17822C19.1986 7.35745 19.4121 7.4744 19.6456 7.50699C19.8791 7.53959 20.1165 7.48558 20.3129 7.35515C20.4267 7.2803 20.523 7.18177 20.5952 7.06628C20.6673 6.95079 20.7137 6.82108 20.7311 6.68601C20.7498 6.5465 20.7385 6.40463 20.698 6.26984C20.6575 6.13504 20.5887 6.01042 20.4963 5.90427C19.4414 4.68617 18.1369 3.70919 16.6713 3.03959C15.2056 2.36999 13.6131 2.02344 12.0017 2.02344C10.3904 2.02344 8.79784 2.36999 7.33219 3.03959C5.86653 3.70919 4.56203 4.68617 3.50716 5.90427C3.4133 6.0109 3.34347 6.13647 3.30239 6.27246C3.26132 6.40845 3.24997 6.55168 3.2691 6.69245Z" fill="#FFBF00"/>
          <path d="M9.22384 10.1668C9.9889 9.48844 10.976 9.11382 11.9985 9.11382C13.0211 9.11382 14.0082 9.48844 14.7732 10.1668C14.9318 10.3134 15.1349 10.4026 15.3501 10.42C15.5653 10.4375 15.7802 10.3824 15.9603 10.2634C16.0832 10.1815 16.1857 10.0725 16.2599 9.94477C16.3341 9.81705 16.378 9.674 16.3882 9.52665C16.3981 9.38135 16.3742 9.23573 16.3184 9.10121C16.2626 8.9667 16.1763 8.84694 16.0665 8.75135C14.947 7.73927 13.4916 7.17891 11.9824 7.17891C10.4733 7.17891 9.0179 7.73927 7.89842 8.75135C7.78855 8.84694 7.70232 8.9667 7.64651 9.10121C7.59069 9.23573 7.5668 9.38135 7.57672 9.52665C7.58691 9.674 7.63078 9.81705 7.70496 9.94477C7.77914 10.0725 7.88165 10.1815 8.00459 10.2634C8.18768 10.3906 8.40918 10.4505 8.63145 10.4329C8.85372 10.4153 9.06304 10.3213 9.22384 10.1668Z" fill="#FFBF00"/>
        </svg>
      ),
      title: "Step 2: Consider the Open Network Option",
      subtitle: "If your preferred provider is not listed with Multiplan PHCS.",
      body: (
        <>
          <ul>
            <li>They may still see you if they agree to bill <span>Vault Admin Services</span> under our open network policy</li>
            <li>Out-of-network claims are subject to <span>Reference Based Pricing (RBP)</span></li>
            <li>Our <span>Fairos/Occunet</span> team can assist with provider negotiations and balance billing issues</li>
          </ul>
          <p style={{ color: "#262965" }}>
            <strong>Note:</strong> If a provider is unwilling to bill Vault Admin Services, you may have the option to self-submit your claim.
          </p>
        </>
      ),
    },
    {
      id: "three",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.79175 11.9453L2.79176 18.4246C2.79176 18.9769 3.23947 19.4246 3.79175 19.4246L7.08893 19.4246C7.64122 19.4247 8.08894 18.9769 8.08894 18.4246V15.8948H15.796V18.3863C15.796 18.9386 16.2437 19.3863 16.796 19.3863H20.2082C20.7605 19.3863 21.2082 18.9386 21.2082 18.3863L21.2082 11.7919C21.2082 11.2396 20.7576 10.7918 20.2053 10.7928C13.853 10.8053 10.7726 10.9331 3.79491 10.9445C3.24262 10.9454 2.79175 11.393 2.79175 11.9453Z" stroke="#FFBF00" strokeWidth="2"/>
          <path d="M11.9915 2.0957C13.4182 2.0957 14.5754 3.25203 14.5755 4.67871C14.5755 4.81198 14.5627 4.94247 14.5433 5.07031H14.2395C14.2616 4.94298 14.2747 4.81234 14.2747 4.67871C14.2746 3.41772 13.2525 2.39551 11.9915 2.39551C10.7306 2.39571 9.70839 3.41784 9.70829 4.67871C9.70831 4.81238 9.72237 4.94295 9.74443 5.07031H9.44169C9.42221 4.94244 9.40851 4.81201 9.40849 4.67871C9.40859 3.25215 10.565 2.0959 11.9915 2.0957Z" fill="#FFBF00"/>
          <path d="M13.6897 6.2002C14.053 5.79588 14.2756 5.2621 14.2757 4.67578C14.2755 3.41499 13.2533 2.39278 11.9925 2.39258C10.7315 2.39258 9.70947 3.41487 9.70927 4.67578C9.70927 4.69527 9.71171 4.715 9.7122 4.73437L9.41044 4.64453C9.4274 3.23234 10.5763 2.0918 11.9925 2.0918C13.4189 2.09199 14.5753 3.24931 14.5755 4.67578C14.5754 5.32129 14.337 5.91053 13.9456 6.36328L13.6897 6.2002Z" fill="#FFBF00"/>
          <path d="M14.303 4.14817C14.303 3.91868 14.2771 3.72498 14.5066 3.72498C14.7361 3.72498 14.9221 3.91101 14.9221 4.1405V4.65576C14.9221 4.88525 14.7361 5.07129 14.5066 5.07129C14.2771 5.07129 14.303 4.89292 14.303 4.66343V4.14817Z" fill="#FFBF00"/>
          <path d="M13.87 5.97283C13.9383 5.88721 13.9822 5.8039 14.1049 5.90184C14.2275 5.99977 14.2715 6.14858 14.2031 6.2342L14.0496 6.42644C13.9812 6.51206 13.8264 6.50207 13.7037 6.40413C13.5811 6.3062 13.6481 6.25069 13.7164 6.16507L13.87 5.97283Z" fill="#FFBF00"/>
          <path d="M9.69706 4.14817C9.69706 3.91868 9.72294 3.72498 9.49345 3.72498C9.26396 3.72498 9.07792 3.91101 9.07792 4.1405V4.65576C9.07792 4.88525 9.26396 5.07129 9.49345 5.07129C9.72294 5.07129 9.69706 4.89292 9.69706 4.66343V4.14817Z" fill="#FFBF00"/>
          <path d="M11.9921 7.31042C13.7919 7.31042 15.2875 8.65611 15.5126 10.3915H8.48724C8.71044 8.65434 10.1946 7.31051 11.9921 7.31042Z" stroke="#FFBF00"/>
          <path d="M11.9603 3.16516C12.8313 3.16516 13.5188 3.84751 13.5188 4.66516C13.5186 5.48259 12.8311 6.16418 11.9603 6.16418C11.0894 6.16418 10.4019 5.48259 10.4017 4.66516C10.4017 3.84751 11.0892 3.16516 11.9603 3.16516Z" stroke="#FFBF00" strokeWidth="0.7"/>
        </svg>
      ),
      title: "Step 3: Get Help From Solo Support",
      subtitle: "Contact the support team if you need further guidance.",
      body: (
        <ul>
          <li>Contact the <span>Solo Support Team</span> at <a href="tel:+16463286968">646-328-6968</a> or <a href="mailto:support@hbgnow.com">support@hbgnow.com</a></li>
          <li>We can identify in-network options, verify participation, and call offices on your behalf</li>
          <li>We can also guide you through <span>pre-authorization</span> requirements for certain services via <span>MedWatch</span></li>
        </ul>
      ),
    },
    {
      id: "four",
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.7312 11.52C19.6469 11.52 22.0105 13.8846 22.0105 16.8003C22.0103 19.7158 19.6468 22.0796 16.7312 22.0796C13.8156 22.0796 11.4521 19.7159 11.4519 16.8003C11.4519 13.8846 13.8155 11.52 16.7312 11.52ZM17.2175 13.8501C17.0451 13.4439 16.4689 13.4437 16.2966 13.8501L15.7996 15.0249C15.7272 15.1955 15.5662 15.3118 15.3816 15.3276L14.1101 15.436C13.6694 15.4734 13.4906 16.0224 13.8249 16.312L14.7908 17.1499C14.931 17.2714 14.9931 17.4604 14.9509 17.6411L14.6609 18.8843C14.5604 19.315 15.0273 19.6548 15.406 19.4263L16.4988 18.7661C16.6575 18.6703 16.8566 18.6705 17.0154 18.7661L18.1091 19.4263C18.4878 19.6548 18.9547 19.315 18.8542 18.8843L18.5642 17.6411C18.5221 17.4606 18.5834 17.2714 18.7234 17.1499L19.6902 16.312C20.0245 16.0224 19.8457 15.4734 19.405 15.436L18.1335 15.3276C17.9489 15.3119 17.7879 15.1956 17.7156 15.0249L17.2175 13.8501Z" fill="#FFBF00"/>
          <path d="M12.8534 2.24536C13.357 2.24536 13.8422 2.4356 14.2118 2.77759L17.0487 5.40161C17.4578 5.78015 17.6903 6.31296 17.6903 6.87036V10.4329C17.3455 10.3743 16.9913 10.343 16.6298 10.343C16.3105 10.343 15.9967 10.3665 15.6903 10.4124V8.26489H14.0985C13.2701 8.26489 12.5985 7.59329 12.5985 6.76489V4.24536H4.59851V18.8206H10.7225C10.9971 19.5637 11.4089 20.2398 11.9257 20.8206H4.59851C3.49394 20.8206 2.59851 19.9251 2.59851 18.8206V4.24536C2.59851 3.14079 3.49394 2.24536 4.59851 2.24536H12.8534ZM10.4862 15.2649C10.4139 15.5896 10.3656 15.9234 10.3456 16.2649H6.59851C6.32238 16.2649 6.09854 16.041 6.09851 15.7649C6.09851 15.4888 6.32236 15.2649 6.59851 15.2649H10.4862ZM11.3153 13.2649C11.1146 13.5804 10.9414 13.9146 10.7987 14.2649H6.59851C6.32238 14.2649 6.09854 14.041 6.09851 13.7649C6.09851 13.4888 6.32236 13.2649 6.59851 13.2649H11.3153ZM13.5985 6.76489C13.5985 7.04101 13.8224 7.26489 14.0985 7.26489H15.6903V6.87036L13.5985 4.93481V6.76489Z" fill="#FFBF00"/>
        </svg>
      ),
      title: "Tips for a Smooth Experience",
      subtitle: "Best practices for smooth doctor visits.",
      body: (
        <ul>
          <li>Confirm network status before your appointment</li>
          <li>Bring your <span>ID card</span> to every visit</li>
          <li>Use <span>Vault Cares Network</span> for second opinions and concierge medical services</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <style>{`
       
        body {
          background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
        }
      `}</style>

      {/* Hero Section */}
      <section className="network-hero-section">
        <div className="container">
          <div style={{ marginBottom: "0.5rem" }}>
            <img
              className="img-fluid"
              src="/images/netwrok_light.png"
              alt=""
              width={200}
              height={80}
              style={{ width: "auto", height: "auto", maxWidth: "100%" }}
            />
          </div>
          <div className="network-headeing">
            <p>Our Network</p>
          </div>
          <div className="sub-heading">
            <p className="title-one">Find a Doctor</p>
            <p className="title-two">
              Finding the right doctor, hospital, or specialist is simple with Solo Health Collective. As a member, you
              have access to the Multiplan PHCS Network—one of the largest nationwide PPO networks—plus the flexibility
              of our open network policy for certain situations.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="network-acordian">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <div>
              <img
                src="/images/breadcrumb-arrow.png"
                alt="arrow"
                width={16}
                height={16}
              />
            </div>
            <div>
              <Link href="/">Home</Link>{" "}
              <span>/</span>{" "}
              <span>Find a Doctor</span>
            </div>
          </div>

          {/* Accordion */}
          <div className="accordion custom-network-accordion" id="faqAccordion">
            {accordionItems.map((item) => (
              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header" style={{ margin: 0 }}>
                  <button
                    className={`accordion-button${openAccordion === item.id ? " open" : ""}`}
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={openAccordion === item.id}
                  >
                    <div className="accordion-header-content">
                      <span className="icon">{item.icon}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  className={`accordion-collapse${openAccordion === item.id ? " show" : " collapse"}`}
                >
                  <div className="accordion-body">{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Get Started */}
          <div className="get-started">
            <h4>Let&apos;s get started!</h4>
            <div className="get-started-btns">
              <Link className="btn-one" href="/contact">
                Request Assistance
              </Link>
              <a className="btn-two" href="https://providersearch.multiplan.com" target="_blank" rel="noopener noreferrer">
                Search the Network
              </a>
            </div>
          </div>

          {/* Quick Steps Card */}
          <div className="quick-steps-card">
            <h3 className="title">Quick Steps</h3>
            <ol className="steps-list">
              <li>
                Search the Multiplan PHCS Network – Use the{" "}
                <a href="https://providersearch.multiplan.com" target="_blank" rel="noopener noreferrer" className="highlight-text">
                  Multiplan PHCS search tool
                </a>{" "}
                and select &quot;PHCS Practitioner &amp; Ancillary.&quot;
              </li>
              <li>Confirm Participation – Call the provider to verify they accept Multiplan PHCS.</li>
              <li>Explore the Open Network – Ask if they will accept Reference Based Pricing.</li>
              <li>
                Get Help – Contact Solo&apos;s Member Support to find providers or assist with billing arrangements.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}