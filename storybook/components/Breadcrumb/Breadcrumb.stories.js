import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  render: (args) => Breadcrumb(args),
};

export const MultiLevel = {
  args: {
    items: [
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'Our Leaders', href: '/who-we-are/our-leaders' },
      { label: 'Robert Michael' },
    ],
  },
};

export const SingleLevel = {
  args: {
    items: [
      { label: 'All Stories' },
    ],
  },
};
