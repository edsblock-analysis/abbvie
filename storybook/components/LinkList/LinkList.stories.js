import { LinkList } from './LinkList';

export default {
  title: 'Components/LinkList',
  render: (args) => LinkList(args),
};

export const QuickLinks = {
  args: {
    heading: "AbbVie's Positions & Views",
    links: [
      { label: 'Our Environmental Stewardship', href: 'https://www.abbvie.com/sustainability/environment.html', external: true },
      { label: 'Pricing and Access of Our Innovative Medicines', href: 'https://www.abbvie.com/patients/pricing-and-access.html', external: true },
      { label: "AbbVie's Code of Conduct", href: 'https://www.abbvie.com/who-we-are/code-of-conduct.html', external: true },
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
