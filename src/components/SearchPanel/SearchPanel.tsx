import { popularTopics, searchConfig } from "../../data/homepage";

export function SearchPanel() {
  return (
    <section
      className="search-panel"
      id="search"
      aria-labelledby="search-title"
    >
      <h2 id="search-title">Search TOPR Entries</h2>
      <p>Find peer-reviewed teaching strategies in the TOPR series on STARS.</p>
      <form role="search" method="get" action={searchConfig.action}>
        <label htmlFor="topr-stars-q">Search keywords</label>
        <div className="search-panel__row">
          <input
            type="search"
            id="topr-stars-q"
            name="q"
            placeholder="Example: AI, assessment, discussion"
            autoComplete="off"
            required
          />
          <input type="hidden" name="start" value="0" />
          <input type="hidden" name="context" value={searchConfig.context} />
          <button type="submit">Search</button>
        </div>
      </form>
      <div className="topic-list">
        <p id="popular-topics-label">Popular topics</p>
        <ul aria-labelledby="popular-topics-label">
          {popularTopics.map((topic) => (
            <li key={topic.label}>
              <a href={topic.href}>{topic.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
