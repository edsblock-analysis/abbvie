import './FeatureCardRow.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/FeatureCardRow',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [aliada-therapeutics](https://www.abbvie.com/aliada-therapeutics.html), [cerevel](https://www.abbvie.com/cerevel.html), [immunogen](https://www.abbvie.com/immunogen.html)\n\nSide-by-side image + text feature cards on #f1f3ff light blue background. Image has 40px top-left radius. Each card has navy divider, H3 heading, body, outline CTA button. Used on acquisition pages below the hero.',
      },
    },
  },
};

/**
 * AcquisitionFeatures — Two feature cards on light blue background.
 * Matches live site: https://www.abbvie.com/aliada-therapeutics.html
 * Each card: image (left) + content (right) with divider, H3, body, CTA.
 */
export const AcquisitionFeatures = () => refBanner([{label:'Aliada Therapeutics',url:'https://www.abbvie.com/aliada-therapeutics.html'}]) + `
  <div class="feature-card-row">
    <div class="feature-card-row__card">
      <img
        class="feature-card-row__image"
        src="/images/card-guitar.webp"
        alt="Female playing guitar"
      />
      <div class="feature-card-row__content">
        <hr class="feature-card-row__divider" />
        <h3 class="feature-card-row__heading">Neuroscience</h3>
        <p class="feature-card-row__body">
          We're delivering science that takes us closer to meaningful change for people
          with neurological and psychiatric disorders.
        </p>
        <a href="/science/areas-of-focus/neuroscience.html" class="feature-card-row__cta">
          Explore
        </a>
      </div>
    </div>

    <div class="feature-card-row__card">
      <img
        class="feature-card-row__image"
        src="/images/card-whiteboard.webp"
        alt="Two men scientists at whiteboard"
      />
      <div class="feature-card-row__content">
        <hr class="feature-card-row__divider" />
        <h3 class="feature-card-row__heading">A career at AbbVie</h3>
        <p class="feature-card-row__body">
          As one company, our ~55,000 employees around the world focus on discovering and
          delivering transformational medicines and products.
        </p>
        <a href="https://careers.abbvie.com" class="feature-card-row__cta" target="_blank" rel="noopener noreferrer">
          Search Open Jobs
        </a>
      </div>
    </div>

    <div class="feature-card-row__separator"></div>
  </div>
`;

/**
 * SingleFeatureCard — Just one feature card (reusable pattern).
 */
export const SingleFeatureCard = () => refBanner([{label:'Cerevel',url:'https://www.abbvie.com/cerevel.html'}]) + `
  <div class="feature-card-row" style="padding-bottom: 4rem;">
    <div class="feature-card-row__card">
      <img
        class="feature-card-row__image"
        src="/images/card-science.webp"
        alt="AbbVie scientist in lab"
      />
      <div class="feature-card-row__content">
        <hr class="feature-card-row__divider" />
        <h3 class="feature-card-row__heading">Science at AbbVie</h3>
        <p class="feature-card-row__body">
          We combine advanced science with deep expertise to discover and deliver innovative therapies that
          address some of the world's most complex health issues.
        </p>
        <a href="/science.html" class="feature-card-row__cta">
          Learn More
        </a>
      </div>
    </div>
  </div>
`;
