import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("TOPR homepage", () => {
  it("renders the page landmarks and one primary heading inside main", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("id", "main-content");
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(within(main).getByRole("heading", { level: 1 })).toBeInTheDocument();
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

  it("separates browse and submit destinations on STARS", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: "Browse all TOPR entries on STARS" }),
    ).toHaveAttribute("href", "https://stars.library.ucf.edu/topr/");
    expect(
      screen.getByRole("link", { name: "Submit an entry on STARS" }),
    ).toHaveAttribute(
      "href",
      "https://stars.library.ucf.edu/cgi/ir_submit.cgi?context=topr",
    );
    expect(
      screen.getByRole("link", { name: "Submit your article on STARS" }),
    ).toHaveAttribute(
      "href",
      "https://stars.library.ucf.edu/cgi/ir_submit.cgi?context=topr",
    );
    expect(
      screen.getByRole("link", { name: "Join our mailing list" }),
    ).toHaveAttribute(
      "href",
      "https://app.e2ma.net/app2/audience/signup/1982025/1957260/",
    );
    expect(
      screen.getByRole("link", { name: "Submission guidelines on STARS" }),
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

  it("states the stakeholder-aligned review timeline", () => {
    render(<App />);

    expect(
      screen.getByText(/Authors receive feedback by/, { exact: false }),
    ).toHaveTextContent(/July/);
    expect(
      screen.getByText(/published and promoted around the fall semester/i),
    ).toBeInTheDocument();
  });

  it("includes an accessibility contact path", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: "UCF Digital Accessibility" }),
    ).toHaveAttribute("href", "https://www.ucf.edu/accessibility/");
    expect(
      screen.getByRole("link", { name: "topr@ucf.edu" }),
    ).toHaveAttribute("href", "mailto:topr@ucf.edu");
  });
});
