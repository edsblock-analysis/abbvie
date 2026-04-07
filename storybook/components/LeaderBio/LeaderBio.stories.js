import { LeaderBio } from './LeaderBio';

export default {
  title: 'Components/LeaderBio',
  render: (args) => LeaderBio(args),
};

export const ExecutiveBio = {
  args: {
    name: 'Robert A. Michael',
    title: 'Chairman of the Board and Chief Executive Officer',
    image: 'https://abbvie.scene7.com/is/image/abbviecorp/rob-michael-headshot-square?fmt=webp',
    linkedInUrl: 'https://www.linkedin.com/company/abbvie/',
    bio: [
      'Robert A. Michael is Chairman of the Board and Chief Executive Officer of AbbVie, a global biopharmaceutical company with approximately 57,000 employees across more than 175 countries. Under his leadership, AbbVie continues to advance a robust pipeline of innovative medicines across its core therapeutic areas of immunology, oncology, neuroscience, eye care, and aesthetics.',
      'Before becoming CEO, Rob served as President and Chief Operating Officer, where he was responsible for AbbVie\'s commercial and operational functions worldwide. He played a central role in the successful acquisition and integration of Allergan, which significantly expanded AbbVie\'s portfolio and strengthened its long-term growth profile.',
      'Rob joined Abbott Laboratories in 1993 and held positions of increasing responsibility across finance, operations, and commercial functions. He has been instrumental in shaping AbbVie\'s strategy since its separation from Abbott in 2013. He holds a bachelor\'s degree from Indiana University and an MBA from the University of Chicago Booth School of Business.',
    ],
  },
};

export const RDLeaderBio = {
  args: {
    name: 'Thomas J. Hudson, M.D.',
    title: 'Senior Vice President, Research and Development and Chief Scientific Officer',
    image: 'https://abbvie.scene7.com/is/image/abbviecorp/phil-hajduk-headshot-1?fmt=webp',
    linkedInUrl: 'https://www.linkedin.com/company/abbvie/',
    bio: [
      'Thomas J. Hudson, M.D., is Senior Vice President of Research and Development and Chief Scientific Officer at AbbVie. He leads AbbVie\'s global R&D organization, overseeing the discovery, development, and delivery of innovative therapies across the company\'s therapeutic focus areas.',
      'Under his leadership, AbbVie\'s R&D pipeline has grown significantly, with a diverse portfolio of programs spanning immunology, oncology, neuroscience, eye care, and other specialties. Dr. Hudson is committed to applying cutting-edge science and data-driven approaches to bring transformative medicines to patients with serious diseases.',
      'Prior to joining AbbVie, Dr. Hudson held senior leadership roles at leading research institutions and was recognized for his contributions to genomics and precision medicine. He is a graduate of McGill University and holds an M.D. from the University of Montreal.',
    ],
  },
};
