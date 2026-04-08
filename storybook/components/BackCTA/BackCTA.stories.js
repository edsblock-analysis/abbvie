import './BackCTA.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/BackCTA',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [story articles](https://www.abbvie.com/who-we-are/our-stories.html)\n\nBack navigation button found on 130/321 pages. Used on story articles and content pages to navigate back to listing pages.',
      },
    },
  },
};

/**
 * Default — "All Stories" back link with left-pointing arrow.
 * Standard back navigation as seen on story article pages.
 */
export const Default = () => `
  ${refBanner([{label:'Story Articles',url:'https://www.abbvie.com/who-we-are/our-stories.html'}])}
  <a href="#" class="back-cta">
    <span class="back-cta__icon" style="color:#0066f5;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 10h12" />
        <path d="M10 4l6 6-6 6" />
      </svg>
    </span>
    <span class="back-cta__text">All Stories</span>
  </a>
`;
