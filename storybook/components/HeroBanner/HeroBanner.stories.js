import './HeroBanner.css';

export default {
  title: 'Components/HeroBanner',
};

const SCENE7_IMAGE =
  'https://abbvie.scene7.com/is/image/abbviecorp/woman-in-lab-looking-down?fmt=webp';

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
 * Uses a poster image as fallback and includes pause/play controls.
 */
export const VideoHero = () => `
  <div class="hero-banner">
    <video
      class="hero-banner__media hero-banner__media--video"
      autoplay
      muted
      loop
      playsinline
      poster="${SCENE7_IMAGE}"
    >
      <!-- Video source would be provided in production -->
      <source src="" type="video/mp4" />
    </video>

    <div class="hero-banner__overlay"></div>

    <div class="hero-banner__content">
      <h1 class="hero-banner__title">Discovering and delivering transformative medicines</h1>
      <p class="hero-banner__subheading">
        We pursue innovative science to make a remarkable impact on people&rsquo;s lives.
      </p>
      <a href="#" class="hero-banner__cta">Learn More</a>
    </div>

    <button class="hero-banner__pause-btn" aria-label="Pause background video" type="button">
      ${pauseIcon}
    </button>
  </div>
`;

/**
 * ImageHero - Hero banner with a static background image,
 * heading, subheading, and CTA link.
 */
export const ImageHero = () => `
  <div class="hero-banner">
    <img
      class="hero-banner__media"
      src="${SCENE7_IMAGE}"
      alt="Woman in laboratory"
      loading="eager"
    />

    <div class="hero-banner__overlay"></div>

    <div class="hero-banner__content">
      <h1 class="hero-banner__title">Discovering and delivering transformative medicines</h1>
      <p class="hero-banner__subheading">
        We pursue innovative science to make a remarkable impact on people&rsquo;s lives.
      </p>
      <a href="#" class="hero-banner__cta">Learn More</a>
    </div>

    <button class="hero-banner__pause-btn" aria-label="Pause background media" type="button">
      ${pauseIcon}
    </button>
  </div>
`;

/**
 * SimpleHero - Image-only hero with no text overlay.
 * Typically used for article or content pages.
 */
export const SimpleHero = () => `
  <div class="hero-banner hero-banner--simple">
    <img
      class="hero-banner__media"
      src="${SCENE7_IMAGE}"
      alt="Woman in laboratory"
      loading="eager"
      style="position:relative;"
    />
  </div>
`;

/**
 * DetailPageHero - Hero with a centered topic heading.
 * Used on detail/interior pages with a category label above the title.
 */
export const DetailPageHero = () => `
  <div class="hero-banner hero-banner--detail">
    <img
      class="hero-banner__media"
      src="${SCENE7_IMAGE}"
      alt="Woman in laboratory"
      loading="eager"
    />

    <div class="hero-banner__overlay"></div>

    <div class="hero-banner__content">
      <p class="hero-banner__topic">Science &amp; Innovation</p>
      <h1 class="hero-banner__title">Our approach to transformative science</h1>
    </div>

    <button class="hero-banner__pause-btn" aria-label="Pause background media" type="button">
      ${pauseIcon}
    </button>
  </div>
`;
