export type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "Systems";

export interface Project {
  title: string;
  period: string;
  stack: string[];
  bullets: string[];
  status?: "completed" | "in-progress";
  media: string[];
  repoUrl?: string;
  previewUrl?: string;
  position?: number;
  category: ProjectCategory;
  featured?: boolean;
}
