import { LinkList } from './LinkList';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/LinkList',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [homepage](https://www.abbvie.com/) (ESG Quick Links section, Investor Resources links), [available-programs](https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html) (related topics)\n\nGrouped list of links. **QuickLinks:** optional `eyebrow` (e.g. “Quick Links”) + `heading` (F37 title) + external link indicators. **TopicsList:** links only, no heading.',
      },
    },
  },
  render: (args) => LinkList(args),
};

export const QuickLinks = {
  render: (args) => {
    const w = document.createElement('div');
    w.innerHTML = refBanner([{label:'Homepage ESG Section',url:'https://www.abbvie.com/'}]);
    w.appendChild(LinkList(args));
    return w;
  },
  args: {
    eyebrow: 'Quick Links',
    heading: "AbbVie's Positions & Views",
    links: [
      { label: 'Our Environmental Stewardship', href: 'https://www.abbvie.com/sustainability/environment.html', external: true },
      { label: 'Pricing and Access of Our Innovative Medicines', href: 'https://www.abbvie.com/patients/pricing-and-access.html', external: true },
      { label: "AbbVie's Code of Conduct", href: 'https://www.abbvie.com/who-we-are/code-of-conduct.html', external: true },
    ],
  },
};

export const TopicsList = {
  render: (args) => {
    const w = document.createElement('div');
    w.innerHTML = refBanner([{label:'Patient Assistance',url:'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html'}]);
    w.appendChild(LinkList(args));
    return w;
  },
  args: {
    links: [
      { label: 'Pipeline', href: '/science/pipeline.html' },
      { label: 'Products', href: '/science/products.html' },
      { label: 'Partner with Us', href: '/science/partner-with-us.html' },
      { label: 'Patient Support', href: '/patients/patient-support.html' },
    ],
  },
};
