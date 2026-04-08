import './CardGrid.css';
import '../Card/Card.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/CardGrid',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [homepage](https://www.abbvie.com/) (card + stats row), [join-us](https://www.abbvie.com/join-us.html) (3-col), [science](https://www.abbvie.com/science.html)\n\nResponsive card grid: 3-col desktop, 2-col tablet, 1-col mobile.',
      },
    },
  },
};

/**
 * DashboardCards — Text-only cards (image hidden) in a grid.
 * Matches the homepage press/featured section cards.
 */
export const DashboardCards = () => `
  ${refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}])}
  <div class="card-grid">
    <div class="card card--dashboard card--medium-theme-stroke card--hide-image">
      <a href="#">
        <div class="card__image"><img src="/images/card-science.webp" alt="" /></div>
        <div class="card__content">
          <span class="card__category">Science</span>
          <h4 class="card__title">Striving for Breakthroughs: First, Faster and for Patients</h4>
          <div class="card__meta"><span class="card__cta">Learn More</span></div>
        </div>
      </a>
    </div>
    <div class="card card--dashboard card--medium-theme-stroke card--hide-image">
      <a href="#">
        <div class="card__image"><img src="/images/card-story.webp" alt="" /></div>
        <div class="card__content">
          <span class="card__category">Neuroscience</span>
          <h4 class="card__title">Beyond the Diagnosis</h4>
          <div class="card__meta">
            <span class="card__cta">Read Story</span>
            <span class="card__read-time">3 Minute Read</span>
          </div>
        </div>
      </a>
    </div>
    <div class="card card--dashboard card--medium-theme-stroke card--hide-image">
      <a href="#">
        <div class="card__image"><img src="/images/podcast-promo.webp" alt="" /></div>
        <div class="card__content">
          <span class="card__category">Innovation</span>
          <h4 class="card__title">The Persistence Lab Podcast</h4>
          <div class="card__meta"><span class="card__cta">Listen Now</span></div>
        </div>
      </a>
    </div>
  </div>
`;

/**
 * StandardCards — Vertical cards with images, full metadata.
 * Matches story listing pages.
 */
export const StandardCards = () => `
  ${refBanner([{label:'Our Stories',url:'https://www.abbvie.com/who-we-are/our-stories.html'}])}
  <div class="card-grid">
    <div class="card card--standard card--medium-theme-stroke">
      <a href="#">
        <div class="card__image"><img src="/images/card-science.webp" alt="Immunology research" /></div>
        <div class="card__content">
          <span class="card__category">Immunology</span>
          <span class="card__date">March 15, 2026</span>
          <h4 class="card__title">Redefining Treatment Goals in Rheumatoid Arthritis</h4>
          <p class="card__body">New clinical data suggest that early intervention with targeted biologics can shift the standard of care for RA patients.</p>
          <div class="card__meta">
            <span class="card__cta">Read Article</span>
            <span class="card__read-time">5 min read</span>
          </div>
        </div>
      </a>
    </div>
    <div class="card card--standard card--medium-theme-stroke">
      <a href="#">
        <div class="card__image"><img src="/images/card-story.webp" alt="Oncology research" /></div>
        <div class="card__content">
          <span class="card__category">Oncology</span>
          <span class="card__date">February 28, 2026</span>
          <h4 class="card__title">Venclexta Combination Therapy: Five-Year Follow-Up</h4>
          <p class="card__body">Long-term data demonstrate durable responses with fixed-duration venetoclax-based regimens in CLL.</p>
          <div class="card__meta">
            <span class="card__cta">Read Article</span>
            <span class="card__read-time">8 min read</span>
          </div>
        </div>
      </a>
    </div>
    <div class="card card--standard card--medium-theme-stroke">
      <a href="#">
        <div class="card__image"><img src="/images/hero-parkinsons.webp" alt="Neuroscience" /></div>
        <div class="card__content">
          <span class="card__category">Neuroscience</span>
          <span class="card__date">January 10, 2026</span>
          <h4 class="card__title">Advancing Precision Medicine in Parkinson's Disease</h4>
          <p class="card__body">AbbVie is combining biomarker-driven patient selection with novel mechanisms of action.</p>
          <div class="card__meta">
            <span class="card__cta">Read Article</span>
            <span class="card__read-time">6 min read</span>
          </div>
        </div>
      </a>
    </div>
  </div>
`;
