import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  render: (args) => Footer(args),
};

export const Default = {
  args: {
    logoText: 'Company',
    sections: [
      {
        heading: 'About Us',
        links: [
          { label: 'Our Story', href: '/about/our-story' },
          { label: 'Leadership', href: '/about/leadership' },
          { label: 'Careers', href: '/careers' },
          { label: 'Locations', href: '/about/locations' },
        ],
      },
      {
        heading: 'Science',
        links: [
          { label: 'Research Areas', href: '/science/research-areas' },
          { label: 'Pipeline', href: '/science/pipeline' },
          { label: 'Clinical Trials', href: '/science/clinical-trials' },
          { label: 'Publications', href: '/science/publications' },
        ],
      },
      {
        heading: 'Products',
        links: [
          { label: 'Our Medicines', href: '/products' },
          { label: 'Patient Support', href: '/products/patient-support' },
          { label: 'Medical Information', href: '/products/medical-info' },
        ],
      },
      {
        heading: 'Investors',
        links: [
          { label: 'Financial Results', href: '/investors/financials' },
          { label: 'SEC Filings', href: '/investors/sec-filings' },
          { label: 'Stock Information', href: '/investors/stock' },
          { label: 'Events & Presentations', href: '/investors/events' },
        ],
      },
      {
        heading: 'Newsroom',
        links: [
          { label: 'Press Releases', href: '/news/press-releases' },
          { label: 'In the News', href: '/news/in-the-news' },
          { label: 'Media Resources', href: '/news/media-resources' },
        ],
      },
    ],
    socialLinks: [
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'Li' },
      { label: 'Twitter', href: 'https://twitter.com', icon: 'X' },
      { label: 'Facebook', href: 'https://facebook.com', icon: 'Fb' },
      { label: 'YouTube', href: 'https://youtube.com', icon: 'Yt' },
    ],
    copyright: '\u00a9 2024 Company. All rights reserved.',
    legalLinks: [
      { label: 'Terms of Use', href: '/legal/terms' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Cookie Preferences', href: '/legal/cookies' },
      { label: 'Accessibility', href: '/legal/accessibility' },
    ],
  },
};
