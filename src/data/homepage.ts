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
const starsSeries = "https://stars.library.ucf.edu/topr/";
const starsSubmit =
  "https://stars.library.ucf.edu/cgi/ir_submit.cgi?context=topr";

function topicSearch(subjectQuery: string): string {
  return `${searchBase}?q=${subjectQuery}&start=0&context=${starsContext}&sort=score`;
}

export const siteLinks: LinkItem[] = [
  { label: "Search entries", href: "#search" },
  { label: "Browse TOPR on STARS", href: starsSeries },
  {
    label: "Submission guidelines on STARS",
    href: "https://stars.library.ucf.edu/topr/guidelines.html",
  },
];

export const heroActions: LinkItem[] = [
  {
    label: "Join our mailing list",
    href: "https://app.e2ma.net/app2/audience/signup/1982025/1957260/",
  },
  {
    label: "Submit an entry on STARS",
    href: starsSubmit,
  },
];

export const popularTopics: LinkItem[] = [
  {
    label: "AI",
    href: topicSearch("subject%3AAI"),
  },
  {
    label: "Assessment",
    href: topicSearch("subject%3Aassessment"),
  },
  {
    label: "Interaction",
    href: topicSearch("subject%3Ainteraction"),
  },
  {
    label: "Research",
    href: topicSearch("subject%3Aresearch"),
  },
  {
    label: "Rubrics",
    href: topicSearch("subject%3Arubrics"),
  },
  {
    label: "Universal Design",
    href: topicSearch("subject%3A(%20Universal%20Design%20)"),
  },
];

export const actionCards: ActionCardData[] = [
  {
    title: "Read Published Entries",
    text: "Browse the peer-reviewed collection in STARS, UCF’s open-access repository. Each entry describes an online or blended teaching strategy, illustrated with artifacts from real courses.",
    href: starsSeries,
    linkLabel: "Browse all TOPR entries on STARS",
    variant: "dark",
  },
  {
    title: "Submit Your Strategy",
    text: "Share an effective online or blended teaching strategy with educators around the world. Entries are accepted year-round and reviewed during the annual call for submissions.",
    href: starsSubmit,
    linkLabel: "Submit your article on STARS",
    variant: "gold",
  },
];

export const searchConfig = {
  action: searchBase,
  context: starsContext,
};

export const starsPaths = {
  series: starsSeries,
  submit: starsSubmit,
  authorGuide: "https://stars.library.ucf.edu/topr/policies.html",
  guidelines: "https://stars.library.ucf.edu/topr/guidelines.html",
};
