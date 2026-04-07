import './HeroBanner.css';

export default {
  title: 'Components/HeroBanner',
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
 * VideoHero - Hero banner with a video background.
 * Uses a poster image as fallback and includes working pause/play controls.
 */
export const VideoHero = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="hero-banner">
      <video
        class="hero-banner__media hero-banner__media--video"
        autoplay
        muted
        loop
        playsinline
        poster="/images/hero-lab.webp"
      >
        <source src="" type="video/mp4" />
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

  return el.firstElementChild;
};

/**
 * ImageHero - Hero banner with a static background image.
 * Careers-focused messaging with heading, subheading, and CTA.
 */
export const ImageHero = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="hero-banner">
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
  `;
  return el.firstElementChild;
};

/**
 * SimpleHero - Image-only hero with no text overlay.
 * Typically used as a visual lead-in for article or content pages.
 */
export const SimpleHero = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="hero-banner hero-banner--simple">
      <img
        class="hero-banner__media"
        src="/images/hero-parkinsons.webp"
        alt="Two women in conversation about Parkinson's disease"
        loading="eager"
        style="position:relative;"
      />
    </div>
  `;
  return el.firstElementChild;
};

/**
 * DetailPageHero - Hero with a centered topic heading.
 * Used on detail/interior pages with a category label above the title.
 */
export const DetailPageHero = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="hero-banner hero-banner--detail">
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
  `;
  return el.firstElementChild;
};
