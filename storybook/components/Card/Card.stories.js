import './Card.css';

export default {
  title: 'Components/Card',
};

/**
 * FeatureCard - Highlights a key AbbVie science area with an image,
 * description, and call-to-action link.
 */
export const FeatureCard = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <a class="card" href="#" style="max-width: 380px;">
      <div class="card-image">
        <img src="/images/card-science.webp" alt="Scientist examining molecular data" />
      </div>
      <div class="card-content">
        <h3 class="card-title">Pushing the Boundaries of Science</h3>
        <p class="card-body">AbbVie combines deep scientific expertise with cutting-edge technology platforms to discover and develop therapies that address serious health conditions across immunology, oncology, neuroscience, and eye care.</p>
        <span class="card-cta">Explore Our Pipeline</span>
      </div>
    </a>
  `;
  return el.firstElementChild;
};

/**
 * StoryCard - A story card featuring a date, category tag,
 * estimated read time, and an article about AI in drug discovery.
 */
export const StoryCard = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <a class="card" href="#" style="max-width: 380px;">
      <div class="card-image">
        <img src="/images/podcast-promo.webp" alt="The Persistence Lab podcast promo" />
      </div>
      <div class="card-content">
        <span class="card-category">Data Science</span>
        <span class="card-date">March 22, 2026</span>
        <h3 class="card-title">How AI Is Accelerating Drug Discovery at AbbVie</h3>
        <p class="card-body">Machine-learning models are helping AbbVie scientists predict molecular behavior earlier in the pipeline, reducing development timelines and increasing the probability of clinical success.</p>
        <span class="card-read-time">7 min read</span>
      </div>
    </a>
  `;
  return el.firstElementChild;
};

/**
 * ArticleCard - An oncology article card with full metadata
 * including category, date, read time, and CTA.
 */
export const ArticleCard = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <a class="card" href="#" style="max-width: 380px;">
      <div class="card-image">
        <img src="/images/card-story.webp" alt="AbbVie oncology research story" />
      </div>
      <div class="card-content">
        <span class="card-category">Oncology</span>
        <span class="card-date">February 10, 2026</span>
        <h3 class="card-title">Targeting Solid Tumors with Next-Generation ADCs</h3>
        <p class="card-body">Antibody-drug conjugates represent a rapidly evolving class of cancer therapeutics. AbbVie's ADC portfolio leverages proprietary linker-payload technology to improve tumor selectivity while minimizing off-target effects.</p>
        <span class="card-read-time">9 min read</span>
        <span class="card-cta">Read Article</span>
      </div>
    </a>
  `;
  return el.firstElementChild;
};

/**
 * ResourceCard - A downloadable patient assistance PDF resource card.
 */
export const ResourceCard = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <a class="card" href="/assets/documents/abbvie-patient-assistance.pdf" style="max-width: 380px;">
      <div class="card-image">
        <img src="/images/culture-smile.webp" alt="Three women meeting and smiling" />
      </div>
      <div class="card-content">
        <h3 class="card-title">myAbbVie Assist Patient Savings Program</h3>
        <p class="card-body">Eligible patients may pay as little as $5 per month for qualifying AbbVie medications. Download the enrollment guide to learn about eligibility requirements, covered products, and how to apply.</p>
        <span class="card-cta">Download PDF</span>
      </div>
    </a>
  `;
  return el.firstElementChild;
};
