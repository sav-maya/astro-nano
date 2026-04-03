import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Savannah Longoria",
  EMAIL: "hello@sav-db.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Developer Relations at Databricks. Writing about databases, Postgres, and the developer experience of modern data infrastructure.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "Articles on databases, Postgres, and developer experience with modern data infrastructure.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Things I have built and shipped.",
};

export const SOCIALS: Socials = [
  {
    NAME: "x",
    HREF: "https://x.com/savsql",
  },
  {
    NAME: "github",
    HREF: "https://github.com/sav-maya",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/savannah-longoria",
  },
];
