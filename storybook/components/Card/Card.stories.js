import './Card.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/Card',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [homepage](https://www.abbvie.com/) (featured card), [science](https://www.abbvie.com/science.html), [our-stories](https://www.abbvie.com/who-we-are/our-stories.html)\n\nAEM component: cardpagestory. Found on 311/321 pages. Multiple layout and theme variants.',
      },
    },
  },
};

/**
 * DashboardCard — The most common variant on the live site.
 * Horizontal layout, text-only (image hidden), light blue bg with border.
 * Matches homepage: card-dashboard card-medium hide-image medium-theme-stroke
 */
export const DashboardCard = () => `
  ${refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}])}
  <div class="card card--dashboard card--medium-theme-stroke card--hide-image" style="max-width:500px;">
    <a href="#">
      <div class="card__image"><img src="/images/card-science.webp" alt="" /></div>
      <div class="card__content">
        <h4 class="card__title">Beyond the Diagnosis</h4>
        <div class="card__meta">
          <span class="card__cta">Read Story</span>
          <span class="card__read-time">3 Minute Read</span>
        </div>
      </div>
    </a>
  </div>
`;

/**
 * StandardCardWithImage — Vertical card with image, category, title, body, CTA.
 * Matches story listing pages: card-standard card-medium
 */
export const StandardCardWithImage = () => `
  ${refBanner([{label:'Our Stories',url:'https://www.abbvie.com/who-we-are/our-stories.html'}])}
  <div class="card card--standard card--medium-theme-stroke" style="max-width:380px;">
    <a href="#">
      <div class="card__image"><img src="/images/card-story.webp" alt="Story" /></div>
      <div class="card__content">
        <span class="card__category">Neuroscience</span>
        <span class="card__date">December 15, 2025</span>
        <h4 class="card__title">Beyond the Diagnosis</h4>
        <p class="card__body">Meet a patient learning to navigate life with Parkinson's, and a scientist dedicated to advancing research in the field.</p>
        <div class="card__meta">
          <span class="card__cta">Read Story</span>
          <span class="card__read-time">3 Minute Read</span>
        </div>
      </div>
    </a>
  </div>
`;

/**
 * DarkThemeCard — Navy background with white text.
 * Used on Join Us and other dark-themed sections.
 */
export const DarkThemeCard = () => `
  ${refBanner([{label:'Join Us',url:'https://www.abbvie.com/join-us.html'}])}
  <div class="card card--dashboard card--dark-theme" style="max-width:500px;">
    <a href="#">
      <div class="card__image"><img src="/images/culture-testtube.webp" alt="Scientist" /></div>
      <div class="card__content">
        <span class="card__category" style="color:#479ff8;">Research & Development</span>
        <h4 class="card__title">Explore R&D Opportunities</h4>
        <p class="card__body">Join our world-class team of scientists and researchers who are developing therapies that make a real difference.</p>
        <div class="card__meta">
          <span class="card__cta">Learn More</span>
        </div>
      </div>
    </a>
  </div>
`;
