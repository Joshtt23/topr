export interface LinkItem {
  label: string;
  href: string;
}

export interface ActionCardData {
  title: string;
  text: string;
  href: string;
  linkLabel: string;
  variant: "dark" | "gold";
}

const starsContext = "14960553";
const searchBase = "https://stars.library.ucf.edu/do/search/";

export const siteLinks: LinkItem[] = [
  { label: "Search entries", href: "#search" },
  { label: "Browse TOPR", href: "https://stars.library.ucf.edu/topr/" },
  {
    label: "Submission guidelines",
    href: "https://stars.library.ucf.edu/topr/guidelines.html",
  },
];

export const heroActions: LinkItem[] = [
  {
    label: "Join our mailing list",
    href: "https://app.e2ma.net/app2/audience/signup/1982025/1957260/",
  },
  {
    label: "Submit an entry",
    href: "https://stars.library.ucf.edu/topr/",
  },
];

export const popularTopics: LinkItem[] = [
  {
    label: "AI",
    href: `${searchBase}?q=subject%3AAI&start=0&context=${starsContext}&sort=score`,
  },
  {
    label: "Assessment",
    href: `${searchBase}?q=subject%3Aassessment&start=0&context=${starsContext}&sort=score`,
  },
  {
    label: "Interaction",
    href: `${searchBase}?q=subject%3Ainteraction&start=0&context=${starsContext}&sort=score`,
  },
  {
    label: "Research",
    href: `${searchBase}?q=research&start=0&context=${starsContext}`,
  },
  {
    label: "Rubrics",
    href: `${searchBase}?q=subject%3Arubrics&start=0&context=${starsContext}&sort=score`,
  },
  {
    label: "Universal Design",
    href: `${searchBase}?q=subject%3A(%20Universal%20Design%20)&start=0&context=${starsContext}&sort=score`,
  },
];

export const actionCards: ActionCardData[] = [
  {
    title: "Read Published Entries",
    text: "Browse the peer-reviewed collection in STARS, UCF’s open-access repository. Each entry describes an online or blended teaching strategy, illustrated with artifacts from real courses.",
    href: "https://stars.library.ucf.edu/topr/",
    linkLabel: "Browse all TOPR entries",
    variant: "dark",
  },
  {
    title: "Submit Your Strategy",
    text: "Share an effective online or blended teaching strategy with educators around the world. Entries are accepted year-round and reviewed during the annual call for submissions.",
    href: "https://stars.library.ucf.edu/topr/",
    linkLabel: "Submit your article",
    variant: "gold",
  },
];

export const searchConfig = {
  action: searchBase,
  context: starsContext,
};
