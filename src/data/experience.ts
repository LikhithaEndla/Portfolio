export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  location?: string;
  clients?: string[];
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'epam',
    company: 'EPAM Systems',
    role: 'Senior Software Test Automation Engineer',
    startDate: 'Jan 2021',
    endDate: 'Present',
    current: true,
    location: 'Remote',
    clients: ['Microsoft India', 'Swiss Re', 'LSEG'],
    description:
      'Leading QA automation initiatives for global Fortune 500 clients. Architecting scalable test frameworks and managing enterprise testing strategies across cloud and on-premises environments.',
    highlights: [
      'Designed and implemented Playwright + TypeScript automation frameworks for enterprise applications',
      'Led Azure cloud migration testing for LSEG, validating 500+ test scenarios',
      'Architected BDD frameworks using SpecFlow for Swiss Re underwriting workbench',
      'Mentored team of 5+ QA engineers in modern automation practices',
      'Integrated GitHub Copilot and Generative AI into QA workflows, improving test development velocity by 40%',
      'Implemented CI/CD pipelines using Azure DevOps with automated regression suites',
      'API testing expertise: REST and SOAP services validation',
    ],
    technologies: [
      'Playwright',
      'Selenium',
      'TypeScript',
      'C#',
      'SpecFlow',
      'NUnit',
      'Azure DevOps',
      'Azure Test Plans',
      'GitHub Actions',
      'Postman',
    ],
  },
  {
    id: 'ge-healthcare',
    company: 'GE HealthCare – Sutherland',
    role: 'Senior QA Automation Engineer',
    startDate: 'Jun 2019',
    endDate: 'Dec 2020',
    location: 'India',
    clients: [],
    description:
      'Healthcare automation testing for imaging and diagnostics platforms. Built and maintained BDD frameworks for critical healthcare applications.',
    highlights: [
      'Developed Selenium + C# BDD automation framework for Zero Footprint Viewer',
      'Healthcare HIPAA compliance testing and validation',
      'Integrated Jenkins CI/CD pipelines for daily regression runs',
      'Created test data management framework for complex healthcare workflows',
      'Cross-browser and cross-platform testing validation',
      'Recognized as SME for healthcare testing domain',
    ],
    technologies: ['Selenium', 'C#', 'SpecFlow', 'NUnit', 'Jenkins', 'SQL Server'],
  },
  {
    id: 'r-systems',
    company: 'R Systems',
    role: 'QA Automation Engineer',
    startDate: 'Feb 2018',
    endDate: 'May 2019',
    location: 'India',
    clients: [],
    description:
      'Employee benefits platform testing with focus on end-to-end automation. Developed robust automation frameworks for HR/payroll systems.',
    highlights: [
      'Built CoreFlex benefits platform automation suite using Selenium + C#',
      'End-to-end testing for payroll and benefits calculations',
      'Integration testing with third-party APIs',
      'Performance testing and optimization',
      'Agile collaboration with product and development teams',
    ],
    technologies: ['Selenium', 'C#', 'NUnit', 'SQL', 'Azure'],
  },
  {
    id: 'accenture',
    company: 'Accenture – Microsoft',
    role: 'QA Automation Engineer',
    startDate: 'Aug 2017',
    endDate: 'Jan 2018',
    location: 'India',
    clients: ['Microsoft'],
    description:
      'Enterprise automation testing for Microsoft licensing and compliance applications. Large-scale QA delivery with focus on release validation.',
    highlights: [
      'Automated 400+ test cases for Microsoft licensing applications',
      'Cross-browser testing (Chrome, Firefox, Edge, Safari)',
      'Release validation and UAT support',
      'Performance and load testing',
      'Collaboration with distributed teams across APAC and EMEA',
    ],
    technologies: ['Selenium', 'Java', 'TestNG', 'SQL', 'Azure'],
  },
];

export const getExperienceById = (id: string): ExperienceEntry | undefined => {
  return experience.find((exp) => exp.id === id);
};

export const getTotalYearsOfExperience = (): number => {
  // Simple calculation: from earliest start year to present
  const startYear = 2017;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};
