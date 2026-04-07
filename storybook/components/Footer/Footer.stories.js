import { Footer } from './Footer';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/Footer',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** All pages — [abbvie.com](https://www.abbvie.com/) (scroll to bottom)\n\nGlobal footer with AbbVie logo, 5 nav sections, 6 social media icons, Popular Pages, External Links, legal bar, and copyright. AEM component: experiencefragment cmp-experiencefragment--footer. Present on all 321 pages.',
      },
    },
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = refBanner([{label:'All Pages (scroll to bottom)',url:'https://www.abbvie.com/'}]);
    wrapper.appendChild(Footer(args));
    return wrapper;
  },
};

export const Default = {
  args: {
    logoText: 'AbbVie',
    logoSrc: '/images/abbvie-logo.svg',
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
      { label: 'Facebook', href: 'https://www.facebook.com/AbbVieGlobal', iconSrc: '/images/icon-facebook.svg' },
      { label: 'X', href: 'https://twitter.com/abbvie', iconSrc: '/images/icon-twitter.svg' },
      { label: 'Instagram', href: 'https://www.instagram.com/abbvie/', iconSrc: '/images/icon-instagram.svg' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/abbvie/', iconSrc: '/images/icon-linkedin.svg' },
      { label: 'YouTube', href: 'https://www.youtube.com/user/AbbVie', iconSrc: '/images/icon-youtube.svg' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@abbvie', iconSrc: '/images/icon-tiktok.svg' },
    ],
    copyright: '\u00a9 2026 AbbVie Inc. North Chicago, Illinois, U.S.A.',
    legalLinks: [
      { label: 'Contact Us', href: '/contact-us.html' },
      { label: 'Accessibility Statement', href: '/legal/accessibility.html' },
      { label: 'Site Map', href: '/site-map.html' },
      { label: 'Terms of Use', href: '/legal/terms-of-use.html' },
      { label: 'Privacy Notice', href: '/legal/privacy-notice.html' },
    ],
  },
};
