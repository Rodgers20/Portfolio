
// Fix: Added React import to provide the React namespace for React.ReactNode type definition
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
  demoLink?: string;
  tools: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  isActive?: boolean;
}

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface EducationEntry {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
}
