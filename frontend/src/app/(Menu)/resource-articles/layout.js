"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ResourceLayout({ children }) {
  const params = useParams();
  const currentSlug = params.slug;

  const sidebarArticles = [
    {
      slug: "traditional-vs-solo-health-collective-difference",
      title: "Traditional Health Insurance vs. Solo Health Collective - What’s the Difference?",
      desc: "Navigating the healthcare landscape can be daunting, especially for self-employed individuals.",
      date: "Sep 7, 2025",
    },
    {
      slug: "choosing-the-best-solo-plan-for-you",
      title: "Healthcare Coverage: Choosing the Best Solo Plan for You",
      desc: "Solo Health Collective is an innovative healthcare solution tailored for self-employed individuals.",
      date: "Sep 14, 2025",
    },
    {
      slug: "what-makes-you-a-good-candidate-for-solo",
      title: "What Makes You a Good Candidate for Solo?",
      desc: "The Solo Health Collective is specifically designed for self-employed individuals operating as a.",
      date: "Sep 21, 2025",
    },
    {
      slug: "everything-you-need-to-know-about-solo",
      title: "No Wasted Dollars: Everything You Need to Know About Your Healthcare Costs",
      desc: "Healthcare cost tracking is important to both members as individuals and as business owners.",
      date: "Sep 28, 2025",
    },
    {
      slug: "how-your-business-benefits-from-solo",
      title: "How Your Business Benefits from Solo",
      desc: "The Solo Health Collective is designed specifically for self-employed individuals, offering a tailored.",
      date: "Oct 4, 2025",
    },
  ];

  return (

    <main id="maincontent" className="page-main-full-width">
      <style>{`
             body {
          background: radial-gradient(circle at top left, rgba(255, 235, 180, 0.3) 0%, rgba(255, 235, 180, 0.3) 0%, rgb(255, 255, 255) 30%);
        }
        `}</style>
      {/* HERO SECTION - PERSISTENT */}
      <section className="faq-hero-section">
        <div className="container">
          <div className="mb-2">
            <img className="img-fluid" src="https://hbgsolo.com/media/.renditions/wysiwyg/light_3.png" alt="Hero" />
          </div>
          <div className="faq-heading">
            <p>Resource Articles</p>
          </div>
          <div className="sub-heading">
            <p className="title-one">Understand the unique structure of Solo compared to market alternatives.</p>
          </div>
        </div>
      </section>

      <section className="faq-content-section">
        <div className="container">
          <div className="breadcrumbs">
            <div><img src="https://hbgsolo.com/media/.renditions/wysiwyg/breadcrumb-arrow.png" alt="arrow" /></div>
            <div>
              <Link href="/">Home</Link> <span>/</span> <Link href="/resource-articles">Resource Articles</Link>
            </div>
          </div>

          <div className="row gy-5 g-0 g-lg-5">
            {/* LEFT SIDEBAR - PERSISTENT */}
            <div className="col-12 col-lg-5">
              <div className="main-card-div">
                {sidebarArticles.map((article) => (
                  <Link key={article.slug} href={`/resource-articles/${article.slug}`} className="text-decoration-none">
                    <div className={`faq-card ${currentSlug === article.slug ? "active" : ""}`}>
                      <div className="faq-card-content">
                        <h3>{article.title}</h3>
                        <p>{article.desc}</p>
                        <div className="date-div">
                          <div className="date">
                            <p>{article.date}</p>
                          </div>
                          <div className="view-btn">
                            <button>view</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE CONTENT - DYNAMIC */}
            <div className="col-12 col-lg-7">
              {children}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA - PERSISTENT */}
      <div className="custom-container">
        <div className="resources-bottom">
          <h4>We invite you to schedule a personal consultation to explore your options further.</h4>
          <div className="get-started-btns M-32">
            <a className="btn-one" href="https://calendly.com/d/ckh2-xd6-qjd/benefits-conversation-with-hbg">Schedule a Consult</a>
            <Link className="btn-two" href="/#quote-section">Calculate your Cost</Link>
          </div>
          <p className="text-center text-primary fs-16 fw-normal m-0">
            We encourage you to carefully evaluate your healthcare needs and consider which Solo plan design best aligns with your lifestyle.
          </p>
        </div>
      </div>
    </main>
  );
}