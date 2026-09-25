import { starsPaths } from "../../data/homepage";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div>
          <strong>Teaching Online Pedagogical Repository</strong>
          <p>
            An open, peer-reviewed resource from the University of Central
            Florida.
          </p>
          <p className="site-footer__a11y">
            Accessibility questions:{" "}
            <a href="https://www.ucf.edu/accessibility/">
              UCF Digital Accessibility
            </a>{" "}
            or{" "}
            <a href="mailto:topr@ucf.edu">topr@ucf.edu</a>.
          </p>
        </div>
        <a href={starsPaths.series}>Explore the TOPR collection on STARS</a>
      </div>
    </footer>
  );
}
