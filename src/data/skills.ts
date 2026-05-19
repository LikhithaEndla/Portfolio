export interface Skill {
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar';
  icon?: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Automation Tools',
    color: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    skills: [
      { name: 'Selenium WebDriver', proficiency: 'Expert', icon: 'SiSelenium' },
      { name: 'Playwright', proficiency: 'Expert', icon: 'SiPlaywright' },
      { name: 'Postman', proficiency: 'Advanced', icon: 'SiPostman' },
      { name: 'REST Assured', proficiency: 'Advanced' },
      { name: 'API Testing', proficiency: 'Expert' },
    ],
  },
  {
    category: 'Programming Languages',
    color: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    skills: [
      { name: 'C#', proficiency: 'Expert', icon: 'SiCsharp' },
      { name: 'TypeScript', proficiency: 'Advanced', icon: 'SiTypescript' },
      { name: 'Java', proficiency: 'Advanced', icon: 'SiJava' },
      { name: 'Python', proficiency: 'Intermediate', icon: 'SiPython' },
      { name: 'SQL', proficiency: 'Advanced', icon: 'SiMysql' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    color: 'bg-green-500/10 border-green-500/30 text-green-400',
    skills: [
      { name: 'NUnit', proficiency: 'Expert' },
      { name: 'SpecFlow', proficiency: 'Expert' },
      { name: '.NET / .NET Core', proficiency: 'Expert', icon: 'SiDotnet' },
      { name: 'Cucumber', proficiency: 'Advanced' },
      { name: 'TestNG', proficiency: 'Advanced' },
      { name: 'xUnit', proficiency: 'Intermediate' },
    ],
  },
  {
    category: 'CI/CD & DevOps',
    color: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    skills: [
      { name: 'Azure DevOps', proficiency: 'Expert', icon: 'SiAzuredevops' },
      { name: 'Jenkins', proficiency: 'Advanced', icon: 'SiJenkins' },
      { name: 'GitHub Actions', proficiency: 'Advanced', icon: 'SiGithubactions' },
      { name: 'Azure Pipelines', proficiency: 'Advanced' },
      { name: 'Docker', proficiency: 'Intermediate', icon: 'SiDocker' },
      { name: 'Git', proficiency: 'Expert', icon: 'SiGit' },
    ],
  },
  {
    category: 'Cloud Technologies',
    color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    skills: [
      { name: 'Microsoft Azure', proficiency: 'Advanced', icon: 'SiMicrosoftazure' },
      { name: 'Azure Test Plans', proficiency: 'Advanced' },
      { name: 'Cloud Migration Testing', proficiency: 'Expert' },
      { name: 'Azure DevOps Services', proficiency: 'Advanced' },
    ],
  },
  {
    category: 'Testing Methodologies',
    color: 'bg-pink-500/10 border-pink-500/30 text-pink-400',
    skills: [
      { name: 'Behavior Driven Development (BDD)', proficiency: 'Expert' },
      { name: 'Test Driven Development (TDD)', proficiency: 'Advanced' },
      { name: 'API Testing', proficiency: 'Expert' },
      { name: 'Cross-Browser Testing', proficiency: 'Expert' },
      { name: 'Cloud Testing', proficiency: 'Advanced' },
      { name: 'Agile/Scrum', proficiency: 'Expert' },
    ],
  },
  {
    category: 'AI & Modern Tools',
    color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
    skills: [
      { name: 'GitHub Copilot', proficiency: 'Advanced' },
      { name: 'Generative AI in Testing', proficiency: 'Advanced' },
      { name: 'AI-Assisted QA Workflows', proficiency: 'Intermediate' },
      { name: 'ChatGPT for QA', proficiency: 'Advanced' },
    ],
  },
];

export const getSkillsByCategory = (category: string): Skill[] => {
  const found = skills.find((s) => s.category === category);
  return found?.skills || [];
};

export const getAllSkills = (): Skill[] => {
  return skills.flatMap((category) => category.skills);
};
