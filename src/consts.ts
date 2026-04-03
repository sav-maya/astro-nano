import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Savannah Longoria",
  EMAIL: "hello@sav-db.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Savannah Longoria — portfolio, blog, and projects at sav-db.com.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Articles and projects I have worked on and i'm proud of.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/sav-maya",
  },
];
