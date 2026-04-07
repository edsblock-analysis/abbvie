import './Card.css';

export default {
  title: 'Components/Card',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [homepage](https://www.abbvie.com/) (featured story card), [science](https://www.abbvie.com/science.html) (article cards), [our-stories](https://www.abbvie.com/who-we-are/our-stories.html) (story listing)\n\nCard component used as cardpagestory in AEM. Found on 311 of 321 pages. Variants: FeatureCard (image+title+body+CTA), StoryCard (with category/date/readtime), ArticleCard (full metadata+CTA).',
      },
    },
  },
};

/**
 * FeatureCard — Image + title + body + CTA link.
 * Simplest card variant. Used for navigation cards on landing pages.
 * Also covers ResourceCard (identical structure, different content).
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
 * StoryCard — Image + category tag + date + title + body + read time.
 * Used for story/article listings. No explicit CTA.
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
 * ArticleCard — Full metadata card: category + date + title + body + read time + CTA.
 * Superset of StoryCard — adds explicit "Read Article" CTA.
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
