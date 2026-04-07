import { ProfileCardGrid } from './ProfileCardGrid';

export default {
  title: 'Components/ProfileCardGrid',
  render: (args) => ProfileCardGrid(args),
};

export const ExecutiveGrid = {
  args: {
    profiles: [
      {
        name: 'Robert Michael',
        title: 'Chairman and Chief Executive Officer',
        href: '/leaders/robert-michael',
      },
      {
        name: 'Sarah Chen',
        title: 'Chief Financial Officer',
        href: '/leaders/sarah-chen',
      },
      {
        name: 'James Walker',
        title: 'Chief Scientific Officer',
        href: '/leaders/james-walker',
      },
      {
        name: 'Maria Rodriguez',
        title: 'Chief Medical Officer',
        href: '/leaders/maria-rodriguez',
      },
      {
        name: 'David Park',
        title: 'Chief Commercial Officer',
        href: '/leaders/david-park',
      },
      {
        name: 'Emily Thompson',
        title: 'Chief Human Resources Officer',
        href: '/leaders/emily-thompson',
      },
    ],
  },
};
