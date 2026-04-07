import { PressReleaseCarousel } from './PressReleaseCarousel';

export default {
  title: 'Components/PressReleaseCarousel',
  render: (args) => PressReleaseCarousel(args),
};

export const Default = {
  args: {
    slides: [
      {
        date: 'January 7, 2025',
        headline: 'Allergan Aesthetics Announces New Data Reinforcing the Long-Term Safety and Efficacy of BOTOX Cosmetic',
        href: '/news/press-releases/allergan-aesthetics-botox-data.html',
      },
      {
        date: 'November 15, 2024',
        headline: 'AbbVie to Host CoolSculpting Elite Launch Event Highlighting Next-Generation Body Contouring Technology',
        href: '/news/press-releases/coolsculpting-elite-launch.html',
      },
      {
        date: 'October 30, 2024',
        headline: 'AbbVie Reports Third-Quarter 2024 Financial Results and Hosts Earnings Conference Call',
        href: '/news/press-releases/q3-2024-earnings.html',
      },
    ],
  },
};
