import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("TOPR homepage", () => {
  it("renders the page landmarks and one primary heading", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("submits searches to the TOPR STARS context", () => {
    render(<App />);

    const form = screen.getByRole("search");
    expect(form).toHaveAttribute(
      "action",
      "https://stars.library.ucf.edu/do/search/",
    );
    expect(within(form).getByLabelText("Search keywords")).toHaveAttribute(
      "name",
      "q",
    );
    expect(form.querySelector('input[name="context"]')).toHaveValue("14960553");
  });

  it("preserves primary TOPR destinations", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: "Browse all TOPR entries" }),
    ).toHaveAttribute("href", "https://stars.library.ucf.edu/topr/");
    expect(
      screen.getByRole("link", { name: "Join our mailing list" }),
    ).toHaveAttribute(
      "href",
      "https://app.e2ma.net/app2/audience/signup/1982025/1957260/",
    );
    expect(
      screen.getByRole("link", { name: "Submission guidelines" }),
    ).toHaveAttribute(
      "href",
      "https://stars.library.ucf.edu/topr/guidelines.html",
    );
  });

  it("provides working in-page navigation to search", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: "Search entries" }),
    ).toHaveAttribute("href", "#search");
    expect(
      screen.getByRole("region", { name: "Search TOPR Entries" }),
    ).toHaveAttribute("id", "search");
  });
});
