import { LeaderBio } from './LeaderBio';

export default {
  title: 'Components/LeaderBio',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [robert-michael](https://www.abbvie.com/who-we-are/our-leaders/robert-michael.html), [thomas-hudson](https://www.abbvie.com/who-we-are/our-leaders/thomas-hudson.html), [philip-hajduk](https://www.abbvie.com/science/our-people/our-rd-leaders/philip-hajduk.html)\n\nFull biography page with square headshot, H1 name, subtitle title, multi-paragraph bio, and LinkedIn link. Same structure for executive leaders (24 pages) and R&D leaders (13 pages).',
      },
    },
  },
  render: (args) => LeaderBio(args),
};

/**
 * Default — Full biography with headshot, name, title, body, LinkedIn link.
 * Identical structure for all leaders (executive and R&D) — only content differs.
 */
export const Default = {
  args: {
    name: 'Robert A. Michael',
    title: 'Chairman of the Board and Chief Executive Officer',
    image: '/images/headshot-rob-michael.webp',
    linkedInUrl: 'https://www.linkedin.com/company/abbvie/',
    bio: [
      'Robert A. Michael is Chairman of the Board and Chief Executive Officer of AbbVie, a global biopharmaceutical company with approximately 57,000 employees across more than 175 countries. Under his leadership, AbbVie continues to advance a robust pipeline of innovative medicines across its core therapeutic areas of immunology, oncology, neuroscience, eye care, and aesthetics.',
      'Before becoming CEO, Rob served as President and Chief Operating Officer, where he was responsible for AbbVie\'s commercial and operational functions worldwide. He played a central role in the successful acquisition and integration of Allergan, which significantly expanded AbbVie\'s portfolio and strengthened its long-term growth profile. With more than 30 years of experience in the biopharmaceutical industry, Rob has been instrumental in shaping AbbVie\'s strategy since its separation from Abbott in 2013.',
      'Rob holds a Bachelor of Science degree from Indiana University and a Master of Business Administration from the UCLA Anderson School of Management.',
    ],
  },
};
