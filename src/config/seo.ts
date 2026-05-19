export const seoConfig = {
  title: 'Likhitha Endla - Senior SDET | QA Automation Engineer',
  description:
    '7+ years of enterprise QA automation expertise. Selenium, Playwright, C#, TypeScript. Azure cloud testing, CI/CD, API testing, BDD frameworks.',
  siteUrl: 'https://likhitha-endla.com', // Update with actual domain
  image: '/og-image.png',
  twitterHandle: '@likhitha_qa', // Update if you have Twitter
  author: 'Likhitha Endla',
};

export const generateMetadata = () => {
  return {
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: [
      'QA Automation',
      'SDET',
      'Selenium',
      'Playwright',
      'C#',
      'TypeScript',
      'Azure DevOps',
      'Test Automation',
      'Enterprise QA',
      'BDD',
      'API Testing',
    ],
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: seoConfig.siteUrl,
      title: seoConfig.title,
      description: seoConfig.description,
      siteName: 'Likhitha Endla Portfolio',
      images: [
        {
          url: `${seoConfig.siteUrl}${seoConfig.image}`,
          width: 1200,
          height: 630,
          alt: seoConfig.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoConfig.title,
      description: seoConfig.description,
      images: [`${seoConfig.siteUrl}${seoConfig.image}`],
      creator: seoConfig.twitterHandle,
    },
  };
};

// JSON-LD Schema for Person/Professional
export const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Likhitha Endla',
  jobTitle: 'Senior Software Test Automation Engineer',
  url: seoConfig.siteUrl,
  email: 'likhitha.endla@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/likhitha-endla-64108580/',
    'https://github.com/likhithaendla',
  ],
  image: `${seoConfig.siteUrl}/profile-image.png`,
  description: seoConfig.description,
};
