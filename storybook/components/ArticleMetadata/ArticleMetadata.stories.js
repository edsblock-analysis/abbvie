import { ArticleMetadata } from './ArticleMetadata';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/ArticleMetadata',
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = refBanner([{label:'AI Drug Discovery Story',url:'https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html'}]);
    wrapper.appendChild(ArticleMetadata(args));
    return wrapper;
  },
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [AI drug discovery story](https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html)\n\nArticle metadata bar showing date, category tag (linked), and reading time. AEM component: storyinfo. Found on 115 story article pages.',
      },
    },
  },
};

export const Default = {
  args: {
    date: 'September 25, 2024',
    category: 'Science',
    categoryHref: '/who-we-are/our-stories/science-stories.html',
    readTime: '6 Minute Read',
  },
};
