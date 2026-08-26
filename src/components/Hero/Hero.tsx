import { heroActions } from "../../data/homepage";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="page-shell hero__content">
        <p className="hero__eyebrow">University of Central Florida</p>
        <h1 id="page-title">
          <span>Teaching Online</span> Pedagogical Repository
        </h1>
        <p className="hero__tagline">
          Online and blended strategies for distributed learning
        </p>
        <div className="hero__actions">
          {heroActions.map((action) => (
            <a
              className="button button--gold"
              href={action.href}
              key={action.label}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
