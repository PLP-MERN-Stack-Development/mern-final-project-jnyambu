// src/types/project.ts

export interface Project {
  _id: string;
  title: string;
  description: string;
  tech: string[];
  color: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProjectFormData {
  title: string;
  description: string;
  tech: string[];
  color: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}