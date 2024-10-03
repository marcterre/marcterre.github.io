export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  url: string;
  isCurrentProject: boolean;
}

export interface ProfileInfo {
  id: string;
  name: string;
  email: string;
  avatar: string;
  profession: string;
  linkedIn: string;
  github: string;
  website: string;
  place: string;
  motivation: string;
  skills: string[];
  languages: string[];
  availability: string;
  salaryPreference: number;
}

export interface Education {
  id: string;
  institute: string;
  type: string;
  startDate: string;
  endDate: string;
  topics: string[];
}

export interface ProfessionalExperienceType {
  id: string;
  company: string;
  profession: string;
  startDate: string;
  endDate: string;
  activities: string[];
}

export type ViewType = "projects" | "cv";
