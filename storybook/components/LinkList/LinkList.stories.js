import { LinkList } from './LinkList';

export default {
  title: 'Components/LinkList',
  render: (args) => LinkList(args),
};

export const QuickLinks = {
  args: {
    heading: 'Quick Links',
    links: [
      { label: 'Annual Report 2024', href: '/annual-report', external: true },
      { label: 'Corporate Governance', href: '/governance' },
      { label: 'Investor Presentations', href: '/investors/presentations', external: true },
      { label: 'SEC Filings', href: '/investors/sec-filings', external: true },
    ],
  },
};

export const TopicsList = {
  args: {
    links: [
      { label: 'Oncology', href: '/topics/oncology' },
      { label: 'Immunology', href: '/topics/immunology' },
      { label: 'Cardiovascular', href: '/topics/cardiovascular' },
      { label: 'Rare Diseases', href: '/topics/rare-diseases' },
      { label: 'Neuroscience', href: '/topics/neuroscience' },
    ],
  },
};
