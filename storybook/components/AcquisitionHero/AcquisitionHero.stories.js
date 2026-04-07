import './AcquisitionHero.css';

export default {
  title: 'Components/AcquisitionHero',
};

/**
 * Default — Full-width hero image with overlapping white content card.
 * Used on all acquisition pages (Aliada, Cerevel, ImmunoGen, Capstan, etc.)
 * All share identical structure — only content differs per acquisition.
 *
 * Hero image: 80px top-left radius, card: 40px top-left, -112px overlap.
 */
export const Default = () => `
  <div class="acquisition-hero">
    <div class="acquisition-hero__image-section">
      <div class="acquisition-hero__image-wrapper">
        <img
          class="acquisition-hero__image"
          src="/images/hero-aliada.webp"
          alt="Woman scientist with pipette in laboratory"
          loading="eager"
        />
      </div>
    </div>
    <div class="acquisition-hero__card">
      <h1 class="acquisition-hero__title">Aliada Therapeutics is now part of AbbVie</h1>
      <p class="acquisition-hero__description">
        We discover and develop innovative medicines for tomorrow, while helping people live better lives today.
      </p>
      <hr class="acquisition-hero__divider" />
      <a href="https://news.abbvie.com/2024-12-11-AbbVie-Completes-Acquisition-of-Aliada-Therapeutics"
         class="acquisition-hero__cta"
         target="_blank"
         rel="noopener noreferrer">
        Read the Announcement
      </a>
    </div>
  </div>
`;
