import { RelatedContent } from './RelatedContent';

export default {
  title: 'Components/RelatedContent',
  render: (args) => RelatedContent(args),
};

export const ArticleRelated = {
  args: {
    heading: 'Related Articles',
    variant: 'cards',
    cards: [
      {
        image: 'https://abbvie.scene7.com/is/image/abbviecorp/ambily-card-image?fmt=webp',
        category: 'Science',
        title: 'Ambily Banerjee Wants to Turn Scientific Discoveries into Life-Changing Medicines',
        description: 'Meet the AbbVie scientist whose passion for translational research is helping bring new treatments to patients faster.',
        href: '/science/ambily-banerjee.html',
      },
      {
        image: 'https://abbvie.scene7.com/is/image/abbviecorp/two-women-scientist-talking-hero?fmt=webp',
        category: 'Science',
        title: 'How AbbVie Scientists Are Advancing Immunology Research',
        description: 'AbbVie researchers are exploring new pathways to develop next-generation therapies for immune-mediated diseases.',
        href: '/science/immunology-research.html',
      },
      {
        image: 'https://abbvie.scene7.com/is/image/abbviecorp/man-looking-screen-hero-1?fmt=webp',
        category: 'Science',
        title: 'Pushing the Boundaries of Oncology Science at AbbVie',
        description: 'From targeted therapies to novel combinations, AbbVie is committed to transforming cancer care for patients worldwide.',
        href: '/science/oncology-research.html',
      },
    ],
  },
};

export const TopicLinks = {
  args: {
    heading: 'Explore Topics',
    variant: 'topics',
    cards: [
      { label: 'Immunology', href: '/science/immunology.html' },
      { label: 'Oncology', href: '/science/oncology.html' },
      { label: 'Neuroscience', href: '/science/neuroscience.html' },
      { label: 'Eye Care', href: '/science/eye-care.html' },
      { label: 'Aesthetics', href: '/science/aesthetics.html' },
      { label: 'Other Specialties', href: '/science/other-specialties.html' },
    ],
  },
};
