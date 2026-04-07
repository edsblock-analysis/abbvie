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
        category: 'Science',
        title: 'Advancing Gene Therapy Research for Rare Diseases',
        description: 'New breakthroughs in gene therapy offer hope for patients with rare genetic disorders.',
        href: '/articles/gene-therapy',
      },
      {
        category: 'Innovation',
        title: 'How AI Is Transforming Drug Discovery',
        description: 'Artificial intelligence accelerates the identification of promising drug candidates.',
        href: '/articles/ai-drug-discovery',
      },
      {
        category: 'Research',
        title: 'Clinical Trial Results Show Promise for New Treatment',
        description: 'Phase 3 trial data demonstrates significant efficacy in treating chronic conditions.',
        href: '/articles/clinical-trial-results',
      },
    ],
  },
};

export const TopicLinks = {
  args: {
    heading: 'Explore Topics',
    variant: 'topics',
    cards: [
      { label: 'Oncology', href: '/topics/oncology' },
      { label: 'Immunology', href: '/topics/immunology' },
      { label: 'Rare Diseases', href: '/topics/rare-diseases' },
      { label: 'Neuroscience', href: '/topics/neuroscience' },
      { label: 'Cardiovascular', href: '/topics/cardiovascular' },
      { label: 'Gene Therapy', href: '/topics/gene-therapy' },
    ],
  },
};
