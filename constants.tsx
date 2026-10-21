import { Project, Role, Degree, SkillGroup } from './types';

import gridironImg from './assets/images/gridiron.png';
import courtVisionImg from './assets/images/court-vision.png';

export const EMAIL = 'Akilirbahati@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/akili-bahati';
export const GITHUB = 'https://github.com/Rodgers20';
export const RESUME_URL = '/Akili_B-CV.docx.pdf';

export const FEATURED: Project[] = [
  {
    id: 'gridiron',
    title: 'Gridiron',
    year: '2024 – now',
    summary:
      'Predicts the winner, score, spread and total of every NFL game before kickoff, then grades itself in public. Backtested on 3,017 games from 2015 to 2025, it picked 66.3% of winners against 66.1% for the sportsbook closing line. A live win-probability model follows each play, and the pipeline refreshes and redeploys the site several times on game days.',
    stack: ['Python', 'LightGBM', 'scikit-learn', 'FastAPI', 'Next.js', 'Vercel'],
    image: gridironImg,
    imageAlt: 'Gridiron week view showing a projected score and win-probability bar for Patriots at Bears',
    liveUrl: 'https://gridiron-nfl.vercel.app',
  },
  {
    id: 'court-vision',
    title: 'Court Vision',
    year: '2025 – now',
    summary:
      'NBA and WNBA game predictions and player-prop analysis. It compares each model probability with live sportsbook prices, ranks plays by edge, and keeps a graded record of every pick it has made.',
    stack: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'D3', 'Vercel'],
    image: courtVisionImg,
    imageAlt: 'Court Vision tonight’s plays list ranked by edge',
    liveUrl: 'https://court-vision-basketball.vercel.app',
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    id: 'futball',
    title: 'FUTBALL',
    year: '2026',
    summary:
      'Football analytics dashboard for the Premier League, La Liga and Champions League. Club and player pages, 3D StatsBomb pitch scenes, and forecasts for result, goals, corners and shots on target.',
    stack: ['Next.js', 'React Three Fiber', 'FastAPI', 'Python'],
    note: 'Live demo on request',
  },
  {
    id: 'mlb',
    title: 'MLB home run and strikeout predictor',
    year: '2026',
    summary:
      'Daily home-run probabilities and starting-pitcher strikeout projections from an XGBoost model trained on Statcast plate appearances, with calibration and chronological validation.',
    stack: ['XGBoost', 'Statcast', 'FastAPI', 'Next.js'],
    note: 'Live demo on request',
  },
  {
    id: 'gymforge',
    title: 'GymForge',
    year: '2025 – 2026',
    summary:
      'Workout tracker with muscle-recovery tracking, exercise history and personal records. Built first in Expo, then rewritten natively in SwiftUI.',
    stack: ['SwiftUI', 'Expo', 'Supabase'],
    note: 'Live demo on request',
  },
  {
    id: 'biotech',
    title: 'Biotech funding analysis',
    year: '2026',
    summary:
      'Cleaned a 10,000+ record biotech funding dataset and built a Tableau dashboard of maps, treemaps and trend charts. Found the 2019 inflection point and the $70B peak in 2021, with R² of 0.92 between company capital and deal size.',
    stack: ['pandas', 'Tableau', 'Statistics'],
    note: 'Walkthrough on request',
  },
  {
    id: 'fraud',
    title: 'Credit card fraud detection',
    year: '2024',
    summary:
      'Data-processing pipeline and statistical models that flag anomalous transactions, with an interactive dashboard for reviewing flagged events.',
    stack: ['Python', 'Statistical modeling'],
    note: 'Walkthrough on request',
  },
  {
    id: 'job-assistant',
    title: 'Job application assistant',
    year: '2025',
    summary:
      'Matches a weekly batch of job listings against a resume, then drafts a tailored resume and cover letter for each role that fits.',
    stack: ['Python'],
    note: 'Live demo on request',
  },
];

export const ROLES: Role[] = [
  {
    title: 'Experimental Learning: Data Wrangling',
    org: 'Global Tech HQ',
    place: 'New York, NY',
    dates: 'Jan – May 2024',
    points: [
      'Worked with stakeholders to gather business requirements and turn them into data definitions and technical specs.',
      'Designed and validated SQL and Python pipelines that extract, clean and standardize large datasets from multiple sources.',
      'Documented as-is data workflows and proposed to-be improvements, with written reports for technical and non-technical readers.',
    ],
  },
];

export const DEGREES: Degree[] = [
  {
    title: 'B.S. Informatics',
    school: 'University at Albany, SUNY',
    dates: 'May 2026',
    detail: 'Software Development concentration, Machine Learning minor. GPA 3.4.',
  },
  {
    title: 'A.A.S. Information Technology',
    school: 'Hudson Valley Community College',
    dates: '2020 – 2022',
    detail: 'Computer systems, networking, programming, databases and technical support.',
  },
];

export const SKILLS: SkillGroup[] = [
  { label: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'Java', 'HTML/CSS'] },
  { label: 'Data', items: ['pandas', 'NumPy', 'scikit-learn', 'LightGBM', 'Tableau', 'Plotly/Dash', 'Jupyter'] },
  { label: 'Build', items: ['React', 'Node.js', 'FastAPI', 'Docker', 'Git', 'AWS', 'Vercel'] },
];
