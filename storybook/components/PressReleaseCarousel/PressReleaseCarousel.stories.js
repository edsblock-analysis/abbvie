import { PressReleaseCarousel } from './PressReleaseCarousel';

export default {
  title: 'Components/PressReleaseCarousel',
  render: (args) => PressReleaseCarousel(args),
};

export const Default = {
  args: {
    slides: [
      {
        date: 'April 7, 2026',
        headline: 'Allergan Aesthetics Third State-of-the-Art AMI Center Opens in Austin',
        href: '/news/press-releases/allergan-aesthetics-ami-center-austin.html',
      },
      {
        date: 'March 31, 2026',
        headline: 'Allergan Aesthetics Announces Fourth Annual, All-Access CoolMonth with Deals on CoolSculpting',
        href: '/news/press-releases/allergan-aesthetics-coolmonth-2026.html',
      },
      {
        date: 'March 31, 2026',
        headline: 'AbbVie to Host First-Quarter 2026 Earnings Conference Call',
        href: '/news/press-releases/q1-2026-earnings-call.html',
      },
    ],
  },
};
