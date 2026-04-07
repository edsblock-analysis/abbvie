import { PressReleaseCarousel } from './PressReleaseCarousel';

export default {
  title: 'Components/PressReleaseCarousel',
  render: (args) => PressReleaseCarousel(args),
};

export const Default = {
  args: {
    slides: [
      {
        date: 'October 15, 2024',
        headline: 'Company Announces Positive Phase 3 Results for Novel Cancer Treatment',
        href: '/press/phase-3-results',
      },
      {
        date: 'September 28, 2024',
        headline: 'FDA Grants Breakthrough Therapy Designation for Rare Disease Program',
        href: '/press/breakthrough-therapy',
      },
      {
        date: 'September 10, 2024',
        headline: 'Strategic Partnership to Advance Next-Generation Cell Therapies',
        href: '/press/strategic-partnership',
      },
    ],
  },
};
