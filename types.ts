export interface Project {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  year: string;
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  /** One headline number shown on the featured card. */
  stat?: { value: string; label: string };
  /** In-page anchor to a longer write-up. */
  detailHref?: string;
  /** Shown in place of links when there is nothing public to point at. */
  note?: string;
}

export interface Role {
  title: string;
  org: string;
  place: string;
  dates: string;
  points: string[];
}

export interface Degree {
  title: string;
  school: string;
  dates: string;
  detail: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}
