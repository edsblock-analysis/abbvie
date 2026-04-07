import { ArticleMetadata } from './ArticleMetadata';

export default {
  title: 'Components/ArticleMetadata',
  render: (args) => ArticleMetadata(args),
};

export const Default = {
  args: {
    date: 'Sep 25, 2024',
    category: 'Science',
    categoryHref: '/topics/science',
    readTime: '6 Minute Read',
  },
};
