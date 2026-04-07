import { ArticleMetadata } from './ArticleMetadata';

export default {
  title: 'Components/ArticleMetadata',
  render: (args) => ArticleMetadata(args),
};

export const Default = {
  args: {
    date: 'September 25, 2024',
    category: 'Science',
    categoryHref: '/science.html',
    readTime: '6 Minute Read',
  },
};
