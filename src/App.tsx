import { ActionCards } from "./components/ActionCards/ActionCards";
import { Hero } from "./components/Hero/Hero";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import { SiteFooter } from "./components/SiteFooter/SiteFooter";
import { SiteHeader } from "./components/SiteHeader/SiteHeader";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <Hero />
      <main id="main-content">
        <div className="page-shell intro-layout">
          <section className="intro-copy" aria-labelledby="about-topr">
            <p className="section-heading__eyebrow">Teaching that travels</p>
            <h2 id="about-topr">Practical strategies, grounded in practice</h2>
            <p className="lead">
              The <strong>Teaching Online Pedagogical Repository (TOPR)</strong>{" "}
              is an open, peer-reviewed resource for faculty and instructional
              designers around the world. It highlights effective online and
              blended teaching strategies, each supported with real course
              artifacts and relevant research or professional practice.
            </p>
            <p>
              <strong>
                New TOPR submissions are peer-reviewed and published through
                STARS
              </strong>
              , UCF’s platform for showcasing knowledge, research, and creative
              activity.{" "}
              <a href="https://stars.library.ucf.edu/topr/">
                TOPR entries published in STARS
              </a>{" "}
              benefit from increased visibility and enhanced analytics.
            </p>
            <p>
              Submissions are accepted year-round. Formal review and publication
              occur during the next Call for Submissions, usually from{" "}
              <strong>February through March</strong>. Authors receive feedback
              by late April or early May, with final decisions in June.
            </p>
          </section>
          <SearchPanel />
        </div>
        <div className="page-shell">
          <ActionCards />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
