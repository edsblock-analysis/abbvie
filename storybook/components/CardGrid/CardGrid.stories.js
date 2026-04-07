import './CardGrid.css';
import '../Card/Card.css';

export default {
  title: 'Components/CardGrid',
};

const scene7 = (name) => `https://abbvie.scene7.com/is/image/abbviecorp/${name}?fmt=webp`;

/**
 * ThreeColumnCards - A 3-column grid featuring AbbVie focus areas:
 * Science, Patients, and Careers.
 */
export const ThreeColumnCards = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card-grid">
      <a class="card" href="#">
        <div class="card-image">
          <img src="${scene7('man-looking-at-testtube-feature-tall-2')}" alt="Scientist examining a test tube" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Our Science</h3>
          <p class="card-body">AbbVie scientists are pioneering targeted therapies across immunology, oncology, neuroscience, and eye care to address the most complex health challenges of our time.</p>
          <span class="card-cta">Explore Our Research</span>
        </div>
      </a>
      <a class="card" href="#">
        <div class="card-image">
          <img src="${scene7('young-woman-smiling')}" alt="Young woman smiling" />
        </div>
        <div class="card-content">
          <h3 class="card-title">For Patients</h3>
          <p class="card-body">From patient assistance programs to disease education resources, we are committed to supporting patients at every step of their treatment journey.</p>
          <span class="card-cta">Patient Resources</span>
        </div>
      </a>
      <a class="card" href="#">
        <div class="card-image">
          <img src="${scene7('woman-in-conference-room')}" alt="Professional in conference room" />
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
 * FourColumnStoryCards - A 4-column grid of story cards with dates,
 * categories, and estimated read times.
 */
export const FourColumnStoryCards = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card-grid" style="grid-template-columns: repeat(4, 1fr);">
      <a class="card" href="#">
        <div class="card-image">
          <img src="${scene7('the-persistence-lab-promo')}" alt="Persistence lab" />
        </div>
        <div class="card-content">
          <span class="card-category">Innovation</span>
          <span class="card-date">March 28, 2026</span>
          <h3 class="card-title">Inside the Persistence Lab</h3>
          <p class="card-body">How AbbVie researchers are using novel screening platforms to identify next-generation small-molecule therapies.</p>
          <span class="card-read-time">5 min read</span>
        </div>
      </a>
      <a class="card" href="#">
        <div class="card-image">
          <img src="${scene7('ambily-card-image')}" alt="AbbVie employee spotlight" />
        </div>
        <div class="card-content">
          <span class="card-category">People</span>
          <span class="card-date">March 14, 2026</span>
          <h3 class="card-title">From Bench to Boardroom</h3>
          <p class="card-body">Meet the immunology lead whose 15-year journey at AbbVie spans three continents and two breakthrough therapies.</p>
          <span class="card-read-time">7 min read</span>
        </div>
      </a>
      <a class="card" href="#">
        <div class="card-image">
          <img src="${scene7('kids-playing-soccer-grass')}" alt="Children playing soccer" />
        </div>
        <div class="card-content">
          <span class="card-category">Community</span>
          <span class="card-date">February 20, 2026</span>
          <h3 class="card-title">Week of Possibilities 2026</h3>
          <p class="card-body">AbbVie employees volunteered over 100,000 hours across 30 countries during our annual community service initiative.</p>
          <span class="card-read-time">4 min read</span>
        </div>
      </a>
      <a class="card" href="#">
        <div class="card-image">
          <img src="${scene7('rob-michael-headshot-square')}" alt="Rob Michael headshot" />
        </div>
        <div class="card-content">
          <span class="card-category">Leadership</span>
          <span class="card-date">January 30, 2026</span>
          <h3 class="card-title">Q&amp;A with Our CFO</h3>
          <p class="card-body">Rob Michael discusses AbbVie's capital allocation strategy and long-term growth outlook heading into 2026.</p>
          <span class="card-read-time">6 min read</span>
        </div>
      </a>
    </div>
  `;
  return el.firstElementChild;
};

/**
 * ArticleCards - A 3-column grid of article cards covering
 * Immunology, Oncology, and Neuroscience topics.
 */
export const ArticleCards = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card-grid">
      <a class="card" href="#">
        <div class="card-image">
          <img src="${scene7('woman-in-lab-looking-down')}" alt="Scientist in immunology lab" />
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
          <img src="${scene7('man-looking-at-testtube-feature-tall-2')}" alt="Oncology researcher" />
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
          <img src="${scene7('phil-hajduk-headshot-1')}" alt="Neuroscience research lead" />
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
