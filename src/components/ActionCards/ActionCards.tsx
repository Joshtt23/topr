import { actionCards } from "../../data/homepage";

function CardIcon({ variant }: { variant: "dark" | "gold" }) {
  if (variant === "gold") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 16V4m-6 6 6-6 6 6M4 20h16" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4.5 4.5" />
    </svg>
  );
}

export function ActionCards() {
  return (
    <section className="actions" aria-labelledby="actions-title">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Explore and contribute</p>
        <h2 id="actions-title">Put proven teaching strategies to work</h2>
      </div>
      <div className="actions__grid">
        {actionCards.map((card) => (
          <article
            className={`action-card action-card--${card.variant}`}
            key={card.title}
          >
            <div className="action-card__heading">
              <span className="action-card__icon">
                <CardIcon variant={card.variant} />
              </span>
              <h3>{card.title}</h3>
            </div>
            <p>{card.text}</p>
            {card.variant === "gold" && (
              <p className="action-card__details">
                Review the{" "}
                <a href="https://stars.library.ucf.edu/topr/policies.html">
                  author guide
                </a>{" "}
                and{" "}
                <a href="https://stars.library.ucf.edu/topr/guidelines.html">
                  submission guidelines
                </a>
                .
              </p>
            )}
            <a className={`button button--${card.variant}`} href={card.href}>
              {card.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
