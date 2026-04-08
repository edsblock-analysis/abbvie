import './Card.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/Card',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [homepage](https://www.abbvie.com/), [science](https://www.abbvie.com/science.html), [our-stories](https://www.abbvie.com/who-we-are/our-stories.html), [our-leaders](https://www.abbvie.com/who-we-are/our-leaders.html)\n\nUnified card component (AEM: cardpagestory + dashboardcards). 8 live variants found across 311 pages. Merged from: Card, CardGrid, DashboardCards, RelatedContent, ProfileCardGrid.',
      },
    },
  },
};

/**
 * TextOnly — Most common homepage variant.
 * card-dashboard medium-theme-stroke hide-image-hide-desc
 * Light blue bg, border, no image, title + CTA only.
 */
export const TextOnly = () => refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}]) + `
  <div class="card card--medium-theme-stroke card--hide-image" style="max-width:500px;">
    <a href="#">
      <div class="card__image"><img src="/images/card-science.webp" alt="" /></div>
      <div class="card__content">
        <span class="card__category">Science</span>
        <h4 class="card__title">Striving for Breakthroughs: First, Faster and for Patients</h4>
        <div class="card__meta"><span class="card__cta">Learn More</span></div>
      </div>
    </a>
  </div>
`;

/**
 * TextWithDescription — Shows description text.
 * card-dashboard medium-theme-stroke hide-image-show-desc
 */
export const TextWithDescription = () => refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}]) + `
  <div class="card card--medium-theme-stroke card--hide-image" style="max-width:500px;">
    <a href="#">
      <div class="card__image"><img src="/images/card-science.webp" alt="" /></div>
      <div class="card__content">
        <span class="card__category">Innovation</span>
        <h4 class="card__title">Innovation That Raises the Bar</h4>
        <p class="card__body">Our commitment to science-first innovation helps us tackle the toughest challenges in healthcare.</p>
        <div class="card__meta"><span class="card__cta">Explore</span></div>
      </div>
    </a>
  </div>
`;

/**
 * WithImage — Horizontal card with image visible.
 * card-dashboard show-image-hide-desc
 */
export const WithImage = () => refBanner([{label:'Homepage (Featured)',url:'https://www.abbvie.com/'}]) + `
  <div class="card card--dashboard card--medium-theme-stroke" style="max-width:700px;">
    <a href="#">
      <div class="card__image"><img src="/images/card-story.webp" alt="Story" /></div>
      <div class="card__content">
        <span class="card__date">December 15, 2025</span>
        <span class="card__category">Neuroscience</span>
        <h4 class="card__title">Beyond the Diagnosis</h4>
        <p class="card__body">Meet a patient learning to navigate life with Parkinson's, and a scientist dedicated to advancing research in the field.</p>
        <div class="card__meta">
          <span class="card__cta">Read story</span>
          <span class="card__read-time">3 Minute Read</span>
        </div>
      </div>
    </a>
  </div>
`;

/**
 * StandardVertical — Vertical card with image on top.
 * card-standard card-medium show-description
 * Used on story listing and related content sections.
 */
export const StandardVertical = () => refBanner([{label:'Our Stories',url:'https://www.abbvie.com/who-we-are/our-stories.html'}]) + `
  <div class="card card--standard card--medium-theme-stroke" style="max-width:380px;">
    <a href="#">
      <div class="card__image"><img src="/images/card-science.webp" alt="Science" /></div>
      <div class="card__content">
        <span class="card__category">Science</span>
        <span class="card__date">March 15, 2026</span>
        <h4 class="card__title">Redefining Treatment Goals in Rheumatoid Arthritis</h4>
        <p class="card__body">New clinical data suggest early intervention with targeted biologics can shift the standard of care.</p>
        <div class="card__meta">
          <span class="card__cta">Read Article</span>
          <span class="card__read-time">5 min read</span>
        </div>
      </div>
    </a>
  </div>
`;

/**
 * NoStroke — Card without border.
 * card-dashboard light-theme-no-stroke hide-description
 */
export const NoStroke = () => refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}]) + `
  <div class="card card--no-stroke card--hide-image" style="max-width:500px;">
    <a href="#">
      <div class="card__image"><img src="/images/card-science.webp" alt="" /></div>
      <div class="card__content">
        <h4 class="card__title">Making Medicine More Accessible</h4>
        <div class="card__meta"><span class="card__cta">Learn More</span></div>
      </div>
    </a>
  </div>
`;

/**
 * DarkTheme — Navy background, white text.
 * Used on Join Us page dark sections.
 */
export const DarkTheme = () => refBanner([{label:'Join Us',url:'https://www.abbvie.com/join-us.html'}]) + `
  <div class="card card--dark-theme card--dashboard" style="max-width:500px;">
    <a href="#">
      <div class="card__image"><img src="/images/culture-testtube.webp" alt="Scientist" /></div>
      <div class="card__content">
        <span class="card__category" style="color:#479ff8;">Research &amp; Development</span>
        <h4 class="card__title">Explore R&amp;D Opportunities</h4>
        <p class="card__body">Join our world-class team of scientists developing therapies that make a real difference.</p>
        <div class="card__meta"><span class="card__cta">Learn More</span></div>
      </div>
    </a>
  </div>
`;

/**
 * StatCard — Dashboard stat/metric card.
 * AEM: cmp-dashboardcard. Large number + label.
 */
export const StatCard = () => refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}]) + `
  <div class="card card--stat card--medium-theme-stroke" style="max-width:300px; text-align:center;">
    <div class="card__content">
      <div class="card__stat-number">
        <span style="font-family:'F37 Lineca Medium',sans-serif; font-size:5.6rem; font-weight:800; color:#071d49;">"75</span><span style="font-family:'F37 Lineca Medium',sans-serif; font-size:4rem; font-weight:800; color:#071d49;">+</span>
      </div>
      <p class="card__body" style="color:#666b7a; margin-top:0.8rem;">conditions treated</p>
    </div>
  </div>
`;

/**
 * ProfileCard — Leader/people card with circular headshot.
 * Used on Our Leaders listing page.
 */
export const ProfileCard = () => refBanner([{label:'Our Leaders',url:'https://www.abbvie.com/who-we-are/our-leaders.html'}]) + `
  <div class="card card--profile" style="max-width:280px; text-align:center;">
    <a href="#">
      <div class="card__image" style="display:flex; justify-content:center; padding:2.4rem 0;">
        <img src="/images/headshot-rob-michael.webp" alt="Robert A. Michael" style="width:200px; height:200px; border-radius:50%; object-fit:cover;" />
      </div>
      <div class="card__content" style="text-align:center;">
        <h4 class="card__title" style="font-size:2rem; line-height:2.6rem;">Robert A. Michael</h4>
        <p class="card__body" style="font-size:1.4rem; color:#666b7a;">Chairman and Chief Executive Officer</p>
        <span class="card__cta">Meet Robert</span>
      </div>
    </a>
  </div>
`;

/**
 * CardGrid — 3-column grid of standard vertical cards.
 */
export const CardGrid = () => refBanner([{label:'Our Stories',url:'https://www.abbvie.com/who-we-are/our-stories.html'}]) + `
  <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:2rem;">
    <div class="card card--standard card--medium-theme-stroke">
      <a href="#">
        <div class="card__image"><img src="/images/card-science.webp" alt="" /></div>
        <div class="card__content">
          <span class="card__category">Immunology</span>
          <h4 class="card__title">Redefining Treatment Goals</h4>
          <div class="card__meta"><span class="card__cta">Read Article</span><span class="card__read-time">5 min</span></div>
        </div>
      </a>
    </div>
    <div class="card card--standard card--medium-theme-stroke">
      <a href="#">
        <div class="card__image"><img src="/images/card-story.webp" alt="" /></div>
        <div class="card__content">
          <span class="card__category">Oncology</span>
          <h4 class="card__title">Venclexta Five-Year Follow-Up</h4>
          <div class="card__meta"><span class="card__cta">Read Article</span><span class="card__read-time">8 min</span></div>
        </div>
      </a>
    </div>
    <div class="card card--standard card--medium-theme-stroke">
      <a href="#">
        <div class="card__image"><img src="/images/hero-parkinsons.webp" alt="" /></div>
        <div class="card__content">
          <span class="card__category">Neuroscience</span>
          <h4 class="card__title">Advancing Precision Medicine in Parkinson's</h4>
          <div class="card__meta"><span class="card__cta">Read Article</span><span class="card__read-time">6 min</span></div>
        </div>
      </a>
    </div>
  </div>
`;
