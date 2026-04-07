import { LinkList } from './LinkList';

export default {
  title: 'Components/LinkList',
  render: (args) => LinkList(args),
};

export const QuickLinks = {
  args: {
    heading: "AbbVie's Positions & Views",
    links: [
      { label: 'Our Environmental Stewardship', href: '/sustainability/environment.html' },
      { label: 'Pricing and Access', href: '/patients/pricing-and-access.html' },
      { label: "AbbVie's Code of Conduct", href: '/who-we-are/code-of-conduct.html' },
    ],
  },
};

export const TopicsList = {
  args: {
    links: [
      { label: 'Pipeline', href: '/science/pipeline.html' },
      { label: 'Products', href: '/science/products.html' },
      { label: 'Partner with Us', href: '/science/partner-with-us.html' },
      { label: 'Patient Support', href: '/patients/patient-support.html' },
    ],
  },
};
