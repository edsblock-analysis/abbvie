import './HeroBanner.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/HeroBanner',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [abbvie.com](https://www.abbvie.com/) (VideoHero), [join-us](https://www.abbvie.com/join-us.html) (ImageHero), [story article](https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html) (SimpleHero), [oncology](https://www.abbvie.com/science/areas-of-focus/oncology.html) (DetailPageHero)\n\n**Radii:** VideoHero & ImageHero use large (64px / 32px mobile). SimpleHero & DetailPageHero use medium (40px / 24px mobile). Modifiers: `hero-banner--radius-large|medium|small`.',
      },
    },
  },
};

const pauseIcon = `
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="2" width="4" height="12"/>
    <rect x="9" y="2" width="4" height="12"/>
  </svg>`;

const playIcon = `
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="4,2 14,8 4,14"/>
  </svg>`;

/**
 * VideoHero — background video, large top-left radius (64px / 32px mobile), pause/play.
 */
export const VideoHero = () => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}]) + `
    <div class="hero-banner">
      <div class="hero-banner__media-wrapper">
        <video
          class="hero-banner__media hero-banner__media--video"
          autoplay
          muted
          loop
          playsinline
          poster="/images/hero-lab.webp"
        >
          <source src="/videos/sample-hero.mp4" type="video/mp4" />
        </video>

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <h1 class="hero-banner__title">We find answers that make life better for patients and our world.</h1>
          <p class="hero-banner__subheading">
            At AbbVie, our science drives innovative therapies across immunology, oncology,
            neuroscience, eye care, and aesthetics &mdash; reaching patients in more than 175 countries.
          </p>
          <a href="#" class="hero-banner__cta">Explore Our Science</a>
        </div>

        <button class="hero-banner__pause-btn" aria-label="Pause background video" type="button">
          ${pauseIcon}
        </button>
      </div>
    </div>
  `;

  const btn = el.querySelector('.hero-banner__pause-btn');
  const video = el.querySelector('video');
  let playing = true;

  btn.addEventListener('click', () => {
    if (playing) {
      video.pause();
      btn.innerHTML = playIcon;
      btn.setAttribute('aria-label', 'Play background video');
    } else {
      video.play();
      btn.innerHTML = pauseIcon;
      btn.setAttribute('aria-label', 'Pause background video');
    }
    playing = !playing;
  });

  return el;
};

/**
 * ImageHero — static image hero with large top-left radius (join-us style).
 */
export const ImageHero = () => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{label:'Join Us',url:'https://www.abbvie.com/join-us.html'}]) + `
    <div class="hero-banner">
      <div class="hero-banner__media-wrapper">
        <img
          class="hero-banner__media"
          src="/images/hero-soccer.webp"
          alt="Children playing soccer outdoors"
          loading="eager"
        />

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <h1 class="hero-banner__title">Join AbbVie</h1>
          <p class="hero-banner__subheading">
            Build a career where your work helps transform the lives of patients around the world.
            We offer bold opportunities in research, manufacturing, commercial, and beyond.
          </p>
          <a href="#" class="hero-banner__cta">Browse Jobs</a>
        </div>
      </div>
    </div>
  `;
  return el;
};

/**
 * SimpleHero — image-only, no overlay (story articles). Medium radius 40px / 24px mobile.
 */
export const SimpleHero = () => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{label:'Story Article',url:'https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html'}]) + `
    <div class="hero-banner hero-banner--simple">
      <div class="hero-banner__media-wrapper">
        <img
          class="hero-banner__media"
          src="/images/hero-parkinsons.webp"
          alt="Two women in conversation about Parkinson's disease"
          loading="eager"
        />
      </div>
    </div>
  `;
  return el;
};

/**
 * DetailPageHero — science area pages. Medium radius 40px / 24px mobile; topic eyebrow + title.
 */
export const DetailPageHero = () => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{label:'Oncology',url:'https://www.abbvie.com/science/areas-of-focus/oncology.html'}]) + `
    <div class="hero-banner hero-banner--detail">
      <div class="hero-banner__media-wrapper">
        <img
          class="hero-banner__media"
          src="/images/scientist-examining.webp"
          alt="Woman scientist examining research data"
          loading="eager"
        />

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <p class="hero-banner__topic">Areas of Focus</p>
          <h1 class="hero-banner__title">Oncology</h1>
        </div>
      </div>
    </div>
  `;
  return el;
};
