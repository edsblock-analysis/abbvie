import { ProfileCardGrid } from './ProfileCardGrid';

export default {
  title: 'Components/ProfileCardGrid',
  render: (args) => ProfileCardGrid(args),
};

export const ExecutiveGrid = {
  args: {
    profiles: [
      {
        name: 'Robert A. Michael',
        title: 'Chairman of the Board and Chief Executive Officer',
        image: 'https://abbvie.scene7.com/is/image/abbviecorp/rob-michael-headshot-square?fmt=webp',
        href: '/who-we-are/our-leaders/robert-a-michael.html',
      },
      {
        name: 'Scott T. Reents',
        title: 'Executive Vice President, Chief Financial Officer',
        image: 'https://abbvie.scene7.com/is/image/abbviecorp/rob-michael-headshot-square?fmt=webp',
        href: '/who-we-are/our-leaders/scott-t-reents.html',
      },
      {
        name: 'Thomas J. Hudson, M.D.',
        title: 'Senior Vice President, Research and Development and Chief Scientific Officer',
        image: 'https://abbvie.scene7.com/is/image/abbviecorp/phil-hajduk-headshot-1?fmt=webp',
        href: '/who-we-are/our-leaders/thomas-j-hudson.html',
      },
      {
        name: 'Jeffrey R. Stewart',
        title: 'Executive Vice President, Chief Commercial Officer',
        image: 'https://abbvie.scene7.com/is/image/abbviecorp/rob-michael-headshot-square?fmt=webp',
        href: '/who-we-are/our-leaders/jeffrey-r-stewart.html',
      },
      {
        name: 'Timothy J. Richmond',
        title: 'Executive Vice President, Chief Human Resources Officer',
        image: 'https://abbvie.scene7.com/is/image/abbviecorp/rob-michael-headshot-square?fmt=webp',
        href: '/who-we-are/our-leaders/timothy-j-richmond.html',
      },
      {
        name: 'Tracie L. Haynie',
        title: 'Executive Vice President, General Counsel and Corporate Secretary',
        image: 'https://abbvie.scene7.com/is/image/abbviecorp/rob-michael-headshot-square?fmt=webp',
        href: '/who-we-are/our-leaders/tracie-l-haynie.html',
      },
    ],
  },
};
