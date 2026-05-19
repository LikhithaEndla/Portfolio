export interface ProjectCard {
  id: string;
  title: string;
  client: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  testingScope: string[];
  technologies: string[];
  image?: string;
  featured: boolean;
}

export const projects: ProjectCard[] = [
  {
    id: 'lseg-cloud-migration',
    title: 'Cloud Migration Testing – LSEG',
    client: 'London Stock Exchange Group',
    description: 'Enterprise-scale cloud migration testing for equity trading platform',
    overview:
      'Comprehensive automation testing for LSEG\'s migration from on-premises to Microsoft Azure cloud infrastructure. Validated 500+ critical trading scenarios and APIs across legacy and cloud environments.',
    challenge:
      'Complex trading workflows with strict performance SLAs, regulatory compliance (MIFID II), and zero downtime migration requirement. Required parallel testing of legacy and cloud systems.',
    solution:
      'Built Playwright + TypeScript automation framework with API testing layer. Implemented data-driven testing for 500+ trading scenarios. Created performance baseline comparisons between legacy and cloud systems. Integrated automated testing into Azure DevOps CI/CD pipeline.',
    impact:
      'Successfully validated migration with 0 production incidents. Reduced manual testing effort by 70%. Enabled continuous validation throughout migration phases.',
    testingScope: [
      'Functional regression testing',
      'API testing (REST/SOAP)',
      'Performance baseline comparison',
      'Security validation',
      'Data integrity verification',
      'End-to-end workflow validation',
    ],
    technologies: ['Playwright', 'TypeScript', 'Postman', 'Azure DevOps', 'Azure Test Plans'],
    featured: true,
  },
  {
    id: 'swiss-re-underwriting',
    title: 'Underwriting Workbench Platform – Swiss Re',
    client: 'Swiss Re',
    description: 'BDD automation framework for global underwriting platform',
    overview:
      'Designed and implemented a comprehensive BDD testing framework for Swiss Re\'s underwriting workbench used by 2000+ underwriters globally. Enabled rapid business rule validation and regulatory compliance testing.',
    challenge:
      'Complex business rules engine with 50+ underwriting workflows. Frequent product changes requiring quick test updates. Need for non-technical stakeholder visibility into test scenarios.',
    solution:
      'Implemented SpecFlow BDD framework in C# with NUnit. Created reusable step definitions for underwriting domain. Established living documentation approach where feature files served as requirements and test documentation.',
    impact:
      'Reduced test maintenance time by 60%. Enabled business analysts to write/modify tests independently. Zero critical defects escaped to production in 12-month period.',
    testingScope: [
      'Business rule validation',
      'Workflow automation',
      'Data transformation testing',
      'Integration testing',
      'Regulatory compliance',
      'Performance benchmarking',
    ],
    technologies: ['Selenium', 'C#', 'SpecFlow', 'NUnit', 'Azure DevOps', 'Jenkins'],
    featured: true,
  },
  {
    id: 'ge-zero-footprint',
    title: 'Zero Footprint Viewer – GE HealthCare',
    client: 'GE HealthCare',
    description: 'Healthcare imaging platform automation testing',
    overview:
      'End-to-end automation testing for Zero Footprint Viewer, a browser-based medical imaging platform used in 500+ healthcare facilities. Ensured HIPAA compliance and critical diagnostic accuracy.',
    challenge:
      'Complex 3D medical imaging workflows. HIPAA compliance requirements. Cross-browser and cross-OS compatibility. Performance-critical rendering validation.',
    solution:
      'Built Selenium + C# framework with custom image comparison utilities for diagnostic accuracy. Implemented data-driven testing for 200+ imaging scenarios. Created HIPAA-compliant test data management.',
    impact:
      'Enabled 10x faster regression testing. Certified platform for use in critical care environments. Achieved 99.8% test coverage for diagnostic workflows.',
    testingScope: [
      'Medical imaging workflow testing',
      'HIPAA compliance validation',
      'Image quality and rendering',
      'Cross-browser compatibility',
      'Performance under load',
      'Integration with healthcare systems',
    ],
    technologies: ['Selenium', 'C#', 'NUnit', 'Jenkins', 'SQL Server'],
    featured: true,
  },
  {
    id: 'coreflex-benefits',
    title: 'CoreFlex Benefits Platform',
    client: 'R Systems',
    description: 'Employee benefits administration and payroll automation',
    overview:
      'Comprehensive automation testing for CoreFlex, an enterprise benefits and payroll platform. Validated 300+ benefit calculation scenarios and payroll processes.',
    challenge:
      'Complex payroll calculations with state-specific tax rules. Integration with multiple third-party APIs. Real-time data synchronization requirements.',
    solution:
      'Developed Selenium + C# framework with data-driven approach. Implemented API testing layer for third-party integrations. Created automated verification of payroll calculations.',
    impact:
      'Accelerated test cycle from 5 weeks to 2 weeks. Eliminated manual payroll validation errors. Supported company\'s rapid growth to 10,000+ enterprise customers.',
    testingScope: [
      'Benefits enrollment workflows',
      'Payroll calculation verification',
      'Tax rule validation',
      'API integration testing',
      'Data synchronization',
      'Performance under load',
    ],
    technologies: ['Selenium', 'C#', 'NUnit', 'Azure', 'SQL'],
    featured: true,
  },
  {
    id: 'microsoft-licensing',
    title: 'Microsoft Licensing Applications',
    client: 'Microsoft',
    description: 'Enterprise licensing and compliance platform testing',
    overview:
      'Large-scale QA delivery for Microsoft\'s enterprise licensing platform. Automated 400+ test cases across compliance, licensing, and audit workflows.',
    challenge:
      'Global application with multi-language support. Complex licensing rule engine. Integration with multiple Microsoft services and third-party systems.',
    solution:
      'Built scalable Selenium + Java framework. Implemented parallel test execution across multiple environments. Created comprehensive test data management for global scenarios.',
    impact:
      'Reduced manual testing time by 75%. Enabled continuous delivery with daily releases. Supported launch in 50+ countries.',
    testingScope: [
      'Licensing rule validation',
      'Compliance verification',
      'Multi-language testing',
      'Integration testing',
      'Audit trail validation',
      'Performance testing',
    ],
    technologies: ['Selenium', 'Java', 'TestNG', 'Azure', 'SQL Server'],
    featured: true,
  },
];

export const getFeaturedProjects = (): ProjectCard[] => {
  return projects.filter((p) => p.featured);
};

export const getProjectById = (id: string): ProjectCard | undefined => {
  return projects.find((p) => p.id === id);
};
