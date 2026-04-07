import { ProfileCardGrid } from './ProfileCardGrid';

export default {
  title: 'Components/ProfileCardGrid',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [our-leaders](https://www.abbvie.com/who-we-are/our-leaders.html), [our-rd-leaders](https://www.abbvie.com/science/our-people/our-rd-leaders.html)\n\nResponsive grid of profile cards: 3-col desktop, 2-col tablet, 1-col mobile. Each card shows circular headshot, name, title, and "Meet [Name]" link. Used on 2 listing pages.',
      },
    },
  },
  render: (args) => ProfileCardGrid(args),
};

export const ExecutiveGrid = {
  args: {
    profiles: [
      {
        name: 'Robert A. Michael',
        title: 'Chairman of the Board and Chief Executive Officer',
        image: '/images/headshot-rob-michael.webp',
        href: '/who-we-are/our-leaders/robert-a-michael.html',
      },
      {
        name: 'Azita Saleki-Gerhardt',
        title: 'President and Chief Operating Officer',
        image: '/images/headshot-phil-hajduk.webp',
        href: '/who-we-are/our-leaders/azita-saleki-gerhardt.html',
      },
      {
        name: 'Scott T. Reents',
        title: 'Executive Vice President, Chief Financial Officer',
        image: '/images/headshot-phil-hajduk.webp',
        href: '/who-we-are/our-leaders/scott-t-reents.html',
      },
      {
        name: 'Thomas J. Hudson, M.D.',
        title: 'Senior Vice President, Research and Development and Chief Scientific Officer',
        image: '/images/headshot-phil-hajduk.webp',
        href: '/who-we-are/our-leaders/thomas-j-hudson.html',
      },
      {
        name: 'Jeffrey R. Stewart',
        title: 'Executive Vice President, Chief Commercial Officer',
        image: '/images/headshot-phil-hajduk.webp',
        href: '/who-we-are/our-leaders/jeffrey-r-stewart.html',
      },
      {
        name: 'Timothy J. Richmond',
        title: 'Executive Vice President, Chief Human Resources Officer',
        image: '/images/headshot-phil-hajduk.webp',
        href: '/who-we-are/our-leaders/timothy-j-richmond.html',
      },
    ],
  },
};
