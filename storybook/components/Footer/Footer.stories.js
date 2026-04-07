import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  render: (args) => Footer(args),
};

export const Default = {
  args: {
    logoText: 'AbbVie',
    sections: [
      {
        heading: 'Who We Are',
        links: [
          { label: 'Our Story', href: '/who-we-are/our-story.html' },
          { label: 'Our Leaders', href: '/who-we-are/our-leaders.html' },
          { label: 'Our Stories', href: '/who-we-are/our-stories.html' },
          { label: 'Locations', href: '/who-we-are/locations.html' },
        ],
      },
      {
        heading: 'Science',
        links: [
          { label: 'Immunology', href: '/science/immunology.html' },
          { label: 'Oncology', href: '/science/oncology.html' },
          { label: 'Neuroscience', href: '/science/neuroscience.html' },
          { label: 'Eye Care', href: '/science/eye-care.html' },
          { label: 'Pipeline', href: '/science/pipeline.html' },
        ],
      },
      {
        heading: 'Patients',
        links: [
          { label: 'Patient Support', href: '/patients/patient-support.html' },
          { label: 'Products', href: '/patients/products.html' },
          { label: 'Pricing and Access', href: '/patients/pricing-and-access.html' },
        ],
      },
      {
        heading: 'Join Us',
        links: [
          { label: 'Careers at AbbVie', href: '/join-us/careers.html' },
          { label: 'Culture and Values', href: '/join-us/culture-and-values.html' },
          { label: 'Benefits', href: '/join-us/benefits.html' },
          { label: 'Search Jobs', href: '/join-us/search-jobs.html' },
        ],
      },
      {
        heading: 'Sustainability',
        links: [
          { label: 'Our Approach', href: '/sustainability/our-approach.html' },
          { label: 'Environmental Stewardship', href: '/sustainability/environment.html' },
          { label: 'Social Impact', href: '/sustainability/social-impact.html' },
          { label: 'Governance', href: '/sustainability/governance.html' },
        ],
      },
    ],
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/abbvie/', icon: 'Li' },
      { label: 'X', href: 'https://twitter.com/abbvie', icon: 'X' },
      { label: 'Facebook', href: 'https://www.facebook.com/AbbVie', icon: 'Fb' },
      { label: 'YouTube', href: 'https://www.youtube.com/user/AbbVie', icon: 'Yt' },
      { label: 'Instagram', href: 'https://www.instagram.com/abbvie/', icon: 'Ig' },
    ],
    copyright: '\u00a9 2026 AbbVie Inc. All rights reserved.',
    legalLinks: [
      { label: 'Terms of Use', href: '/legal/terms-of-use.html' },
      { label: 'Privacy Policy', href: '/legal/privacy-policy.html' },
      { label: 'Cookie Preferences', href: '/legal/cookie-preferences.html' },
      { label: 'Accessibility', href: '/legal/accessibility.html' },
      { label: 'AdChoices', href: '/legal/adchoices.html' },
    ],
  },
};
