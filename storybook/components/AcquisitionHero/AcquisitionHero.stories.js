import './AcquisitionHero.css';

export default {
  title: 'Components/AcquisitionHero',
};

/**
 * AliadaTherapeutics — Full-width hero image with overlapping white content card.
 * Matches live site: https://www.abbvie.com/aliada-therapeutics.html
 * Hero image: 80px top-left radius, card: 40px top-left, -112px overlap.
 */
export const AliadaTherapeutics = () => `
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

/**
 * CerevelTherapeutics — Same template, different content.
 */
export const CerevelTherapeutics = () => `
  <div class="acquisition-hero">
    <div class="acquisition-hero__image-section">
      <div class="acquisition-hero__image-wrapper">
        <img
          class="acquisition-hero__image"
          src="/images/hero-lab.webp"
          alt="Scientist in laboratory"
          loading="eager"
        />
      </div>
    </div>
    <div class="acquisition-hero__card">
      <h1 class="acquisition-hero__title">Cerevel Therapeutics is now part of AbbVie</h1>
      <p class="acquisition-hero__description">
        AbbVie's acquisition of Cerevel strengthens our neuroscience portfolio with a diversified pipeline of
        differentiated therapies for patients with neurological and psychiatric diseases.
      </p>
      <hr class="acquisition-hero__divider" />
      <a href="#" class="acquisition-hero__cta">Read the Announcement</a>
    </div>
  </div>
`;

/**
 * ImmunoGen — Same template, different content.
 */
export const ImmunoGen = () => `
  <div class="acquisition-hero">
    <div class="acquisition-hero__image-section">
      <div class="acquisition-hero__image-wrapper">
        <img
          class="acquisition-hero__image"
          src="/images/scientist-examining.webp"
          alt="Scientist examining data"
          loading="eager"
        />
      </div>
    </div>
    <div class="acquisition-hero__card">
      <h1 class="acquisition-hero__title">ImmunoGen is now part of AbbVie</h1>
      <p class="acquisition-hero__description">
        With the addition of ImmunoGen, AbbVie expands its oncology portfolio with innovative
        antibody-drug conjugate (ADC) technology for the treatment of cancer.
      </p>
      <hr class="acquisition-hero__divider" />
      <a href="#" class="acquisition-hero__cta">Read the Announcement</a>
    </div>
  </div>
`;
