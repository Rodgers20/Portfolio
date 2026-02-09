
import React from 'react';
import { Database, BarChart3, TrendingUp } from 'lucide-react';
import { Project, Experience, Service, EducationEntry, Certification } from './types';

import nbaImg from './assets/images/nba.jpeg';
import fraudImg from './assets/images/cc-fraud.jpeg';
import pharmacyImg from './assets/images/pharmacy.jpeg';

export const PROJECTS: Project[] = [
  {
    id: 'nba-predict',
    title: 'NBA Player Performance Predictor',
    category: 'PREDICTIVE ANALYTICS',
    imageUrl: nbaImg,
    link: 'https://github.com/Rodgers20/NBA_Player_Stats_Predictor',
    demoLink: 'https://nba-player-stats.onrender.com',
    tools: ['Python', 'Dash', 'Plotly', 'Pandas', 'Scikit-learn']
  },
  {
    id: 'fraud-shield',
    title: 'Credit Card Fraud Analytics Dashboard',
    category: 'DATA VISUALIZATION',
    imageUrl: fraudImg,
    link: '#',
    tools: ['React', 'D3.js', 'PostgreSQL', 'Express']
  },
  {
    id: 'pharma-bot',
    title: 'Pharmacy NLP Conversational Agent',
    category: 'ARTIFICIAL INTELLIGENCE',
    imageUrl: pharmacyImg,
    link: '#',
    tools: ['Python', 'Hugging Face', 'NLP', 'FastAPI']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: 'Experimental Learning: Data Wrangling',
    company: 'The Global Tech',
    duration: 'SPRING 2024',
    isActive: true
  },
  {
    id: 2,
    title: 'Software Engineering Intern',
    company: 'FinTech Solutions',
    duration: 'SUMMER 2024'
  },
  {
    id: 3,
    title: 'Data Analyst Co-op',
    company: 'Insight Analytics Group',
    duration: 'FALL 2023'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'DATA VISUALIZATION',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Creating interactive D3.js and Tableau dashboards that tell a compelling story from complex raw data.'
  },
  {
    id: 's2',
    title: 'PREDICTIVE MODELING',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Implementing Scikit-learn and PyTorch models for classification, regression, and time-series forecasting.'
  },
  {
    id: 's3',
    title: 'BIG DATA PIPELINES',
    icon: <Database className="w-8 h-8" />,
    description: 'Designing robust ETL processes using SQL, Spark, and Python to handle large-scale information sets.'
  }
];

export const EDUCATION_DATA: EducationEntry[] = [
  { 
    year: '2022 - 2026', 
    title: 'Informatics', 
    institution: 'University at Albany',
    description: 'Focusing on the intersection of human behavior and information systems. Core coursework includes Database Systems, Human-Computer Interaction, and Advanced Data Analytics.'
  },
  {
    year: '2020 - 2022',
    title: 'Information Science',
    institution: 'HUdson Valley Community College',
    description: 'Associate Degree in Information Technology – Hudson Valley Community College Coursework focused on computer systems, networking fundamentals, cybersecurity principles, programming basics, database concepts, and technical support, with an emphasis on hands-on learning and practical problem-solving skills.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    name: 'Google Data Analytics Professional',
    issuer: 'Google',
    date: 'Dec 2023',
    url: '#'
  },
  {
    id: 'c2',
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: 'Aug 2023',
    url: '#'
  },
  {
    id: 'c3',
    name: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    date: 'May 2023',
    url: '#'
  },
  {
    id: 'c4',
    name: 'IBM Data Science Professional',
    issuer: 'IBM',
    date: 'Jan 2023',
    url: '#'
  }
];

export const SKILLS = ['PYTHON', 'R-LANG', 'SQL', 'TABLEAU', 'SEABORN', 'TENSORFLOW', 'SCIKIT-LEARN', 'PANDAS', 'POWERBI'];
