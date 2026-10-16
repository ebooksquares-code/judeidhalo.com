import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, BookOpen, Compass, Globe2, Layers3 } from "lucide-react";
import bookCover from "@/assets/book-cover.jpeg.asset.json";
import bookOnDesk from "@/assets/book-on-desk.jpeg.asset.json";

const checkoutUrl = "https://selar.com/78711g6310";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Gift of China — Jude Isaac Dahilo" },
      {
        name: "description",
        content:
          "Discover The Gift of China by Jude Isaac Dahilo: a journey through leadership, innovation, youth development, and lessons from a rising nation.",
      },
      { property: "og:title", content: "The Gift of China — Jude Isaac Dahilo" },
      {
        property: "og:description",
        content:
          "A journey through leadership, innovation, youth development, and lessons from a rising nation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="book-hero" id="top">
        <header className="site-header page-width">
          <a className="brand-mark" href="#top" aria-label="The Gift of China home">
            <BookOpen aria-hidden="true" />
            <span>THE GIFT <b>OF</b> CHINA</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#the-book">The book</a>
            <a href="#inside">Inside the book</a>
            <a href="#author">The author</a>
          </nav>
          <a className="header-buy-link" href={checkoutUrl} target="_blank" rel="noreferrer">
            Get your copy <ArrowUpRight aria-hidden="true" />
          </a>
        </header>

        <div className="hero-content page-width" id="the-book">
          <div className="hero-copy">
            <p className="eyebrow">A story of ideas, people & possibility</p>
            <h1>
              The Gift of <span>China</span>
            </h1>
            <p className="hero-subtitle">
              Leadership, Innovation, Youth Development and Lessons From a Rising Nation
            </p>
            <p className="hero-description">
              A curious journey through China’s development story—and the ideas it offers
              to young leaders, innovators, and a changing Africa.
            </p>
            <p className="hero-byline">By Jude Isaac Dahilo</p>
            <div className="hero-actions">
              <a className="button-primary" href={checkoutUrl} target="_blank" rel="noreferrer">
                Get your copy <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="button-quiet" href="#inside">
                Explore the book <ArrowDown aria-hidden="true" />
              </a>
            </div>
            <p className="checkout-note">Checkout on Selar · Choose a payment option there</p>
          </div>

          <div className="hero-product">
            <div className="hero-image-frame">
              <img src={bookCover.url} alt="The Gift of China by Jude Isaac Dahilo" />
            </div>
            <div className="hero-image-caption">
              <span>LEADERSHIP · INNOVATION · YOUTH</span>
              <span>01 / A NEW PERSPECTIVE</span>
            </div>
          </div>
        </div>
        <a className="scroll-cue page-width" href="#inside">
          <span>Scroll to explore</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section className="intro-section section-pad">
        <div className="page-width intro-grid">
          <div className="section-heading">
            <p className="eyebrow eyebrow-dark">A closer look</p>
            <h2>A journey beyond the headlines.</h2>
          </div>
          <div className="intro-copy">
            <p>
              What can the rest of the world learn from China’s rise? In <i>The Gift of
              China</i>, Jude Isaac Dahilo reflects on the systems, choices, and people
              behind a nation’s transformation—and what those lessons might mean for
              Africa and beyond.
            </p>
            <a className="text-link" href="#inside">
              Follow the journey <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="page-width perspective-row">
          <article className="perspective-item">
            <span className="item-number">01</span>
            <Compass aria-hidden="true" />
            <h3>Observe the journey</h3>
            <p>See development through the lens of lived experience and careful observation.</p>
          </article>
          <article className="perspective-item">
            <span className="item-number">02</span>
            <Layers3 aria-hidden="true" />
            <h3>Look at the system</h3>
            <p>Explore coordination, infrastructure, education, and the power of execution.</p>
          </article>
          <article className="perspective-item">
            <span className="item-number">03</span>
            <Globe2 aria-hidden="true" />
            <h3>Ask what’s possible</h3>
            <p>Consider how global lessons can inspire fresh thinking across Africa.</p>
          </article>
        </div>
      </section>

      <section className="inside-section section-pad" id="inside">
        <div className="page-width inside-grid">
          <div className="inside-photo-wrap">
            <img src={bookOnDesk.url} alt="The Gift of China book on a reading desk" />
            <span className="photo-caption">A thoughtful look at a changing world.</span>
          </div>
          <div className="inside-copy">
            <p className="eyebrow eyebrow-dark">Five parts · 25 chapters</p>
            <h2>From encounter to insight.</h2>
            <p className="inside-lede">
              Travel from first impressions of China to practical questions about the
              future of emerging nations.
            </p>
            <ol className="chapter-list">
              <li><span>01</span><p>Encountering a system</p></li>
              <li><span>02</span><p>Understanding the machine</p></li>
              <li><span>03</span><p>The Chinese model</p></li>
              <li><span>04</span><p>The gift called “China”</p></li>
              <li><span>05</span><p>Lessons for Africa & others</p></li>
            </ol>
            <a className="text-link" href={checkoutUrl} target="_blank" rel="noreferrer">
              Continue to Selar <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="author-section section-pad" id="author">
        <div className="page-width author-content">
          <p className="eyebrow eyebrow-dark">Meet the author</p>
          <h2>Jude Isaac Dahilo</h2>
          <p>
            An author and youth-development practitioner, Jude brings a personal,
            African perspective to questions of leadership, innovation, and national
            development. This book invites readers to look closely, think boldly, and
            imagine what purposeful progress can look like.
          </p>
          <a className="button-primary button-primary-dark" href={checkoutUrl} target="_blank" rel="noreferrer">
            Get your copy <ArrowUpRight aria-hidden="true" />
          </a>
          <span className="author-signoff">A book by Jude Isaac Dahilo</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-content">
          <a className="brand-mark footer-brand" href="#top">
            <BookOpen aria-hidden="true" />
            <span>THE GIFT <b>OF</b> CHINA</span>
          </a>
          <p>Leadership, innovation & lessons from a rising nation.</p>
          <a className="footer-buy-link" href={checkoutUrl} target="_blank" rel="noreferrer">
            Buy on Selar <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </footer>

      <div className="mobile-buy-bar">
        <span>The Gift of China</span>
        <a href={checkoutUrl} target="_blank" rel="noreferrer">
          Get your copy <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </main>
  );
}
