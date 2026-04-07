import './CardGrid.css';
import '../Card/Card.css';

export default {
  title: 'Components/CardGrid',
};

/**
 * FeatureCards — 3-column grid of feature cards (image + title + body + CTA).
 * Used on landing pages for navigating to major site sections.
 */
export const FeatureCards = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card-grid">
      <a class="card" href="#">
        <div class="card-image">
          <img src="/images/card-science.webp" alt="Scientist examining molecular data" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Our Science</h3>
          <p class="card-body">AbbVie scientists are pioneering targeted therapies across immunology, oncology, neuroscience, and eye care to address the most complex health challenges of our time.</p>
          <span class="card-cta">Explore Our Research</span>
        </div>
      </a>
      <a class="card" href="#">
        <div class="card-image">
          <img src="/images/culture-smile.webp" alt="Three women meeting in a collaborative workspace" />
        </div>
        <div class="card-content">
          <h3 class="card-title">For Patients</h3>
          <p class="card-body">From patient assistance programs to disease education resources, we are committed to supporting patients at every step of their treatment journey.</p>
          <span class="card-cta">Patient Resources</span>
        </div>
      </a>
      <a class="card" href="#">
        <div class="card-image">
          <img src="/images/culture-conference.webp" alt="Woman speaking to colleague at a conference" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Join Us</h3>
          <p class="card-body">At AbbVie you will find bold career opportunities where your talent fuels the discovery and delivery of medicines that change millions of lives.</p>
          <span class="card-cta">View Careers</span>
        </div>
      </a>
    </div>
  `;
  return el.firstElementChild;
};

/**
 * StoryCards — 3-column grid of story cards with metadata (category, date, read time).
 * Column count is controlled by CSS/inline style — same card internals for 3 or 4 columns.
 */
export const StoryCards = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card-grid">
      <a class="card" href="#">
        <div class="card-image">
          <img src="/images/card-science.webp" alt="Scientist in immunology lab" />
        </div>
        <div class="card-content">
          <span class="card-category">Immunology</span>
          <span class="card-date">March 15, 2026</span>
          <h3 class="card-title">Redefining Treatment Goals in Rheumatoid Arthritis</h3>
          <p class="card-body">New clinical data suggest that early intervention with targeted biologics can shift the standard of care for RA patients toward sustained remission.</p>
          <span class="card-read-time">5 min read</span>
        </div>
      </a>
      <a class="card" href="#">
        <div class="card-image">
          <img src="/images/card-story.webp" alt="Oncology research story" />
        </div>
        <div class="card-content">
          <span class="card-category">Oncology</span>
          <span class="card-date">February 28, 2026</span>
          <h3 class="card-title">Venclexta Combination Therapy: Five-Year Follow-Up</h3>
          <p class="card-body">Long-term data from the CLL14 trial demonstrate durable responses with fixed-duration venetoclax-based regimens in chronic lymphocytic leukemia.</p>
          <span class="card-read-time">8 min read</span>
        </div>
      </a>
      <a class="card" href="#">
        <div class="card-image">
          <img src="/images/hero-parkinsons.webp" alt="Neuroscience research focus" />
        </div>
        <div class="card-content">
          <span class="card-category">Neuroscience</span>
          <span class="card-date">January 10, 2026</span>
          <h3 class="card-title">Advancing Precision Medicine in Parkinson's Disease</h3>
          <p class="card-body">AbbVie is combining biomarker-driven patient selection with novel mechanisms of action to tackle the underlying biology of neurodegeneration.</p>
          <span class="card-read-time">6 min read</span>
        </div>
      </a>
    </div>
  `;
  return el.firstElementChild;
};
