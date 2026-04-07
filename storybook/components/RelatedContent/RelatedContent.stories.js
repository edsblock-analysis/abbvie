import { RelatedContent } from './RelatedContent';

export default {
  title: 'Components/RelatedContent',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [story article](https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html) (3 related article cards at bottom), [oncology](https://www.abbvie.com/science/areas-of-focus/oncology.html) (related topics links)\n\nBottom-of-page section. ArticleRelated: 3-col card grid with image + category + title. TopicLinks: horizontal list of topic links.',
      },
    },
  },
  render: (args) => RelatedContent(args),
};

export const ArticleRelated = {
  args: {
    heading: 'Related Articles',
    variant: 'cards',
    cards: [
      {
        image: '/images/card-science.webp',
        category: 'Science',
        title: 'Striving for Breakthroughs',
        description: 'Meet the AbbVie scientist whose passion for translational research is helping bring new treatments to patients faster.',
        href: '/science/ambily-banerjee.html',
      },
      {
        image: '/images/hero-parkinsons.webp',
        category: 'Science',
        title: 'Data Convergence',
        description: 'AbbVie researchers are exploring new pathways to develop next-generation therapies for immune-mediated diseases.',
        href: '/science/immunology-research.html',
      },
      {
        image: '/images/card-story.webp',
        category: 'Science',
        title: 'AI & Data Convergence',
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
