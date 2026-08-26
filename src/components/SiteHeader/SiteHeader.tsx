import { siteLinks } from "../../data/homepage";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <a className="site-brand" href="/" aria-label="TOPR home">
          <span className="site-brand__mark" aria-hidden="true">
            TOPR
          </span>
          <span className="site-brand__name">
            Teaching Online Pedagogical Repository
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {siteLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
