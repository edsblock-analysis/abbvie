export default {
  title: 'Components/Card',
};

export const FeatureCard = () => `
  <a class="card" href="#" style="max-width: 380px;">
    <div class="card-image">
      <img src="https://scene7.abbvie.com/is/image/abbvie/feature-highlight" alt="Feature Highlight" />
    </div>
    <div class="card-content">
      <h3 class="card-title">Transforming Patient Lives</h3>
      <p class="card-body">Our innovative therapies are making a remarkable difference for patients around the world, delivering new hope where it is needed most.</p>
      <span class="card-cta">Learn More</span>
    </div>
  </a>
`;

export const StoryCard = () => `
  <a class="card" href="#" style="max-width: 380px;">
    <div class="card-image">
      <img src="https://scene7.abbvie.com/is/image/abbvie/story-spotlight" alt="Story Spotlight" />
    </div>
    <div class="card-content">
      <span class="card-category">Research</span>
      <span class="card-date">March 22, 2026</span>
      <h3 class="card-title">Behind the Breakthrough</h3>
      <p class="card-body">An inside look at the dedicated team of researchers who turned years of study into a life-changing treatment.</p>
      <span class="card-read-time">7 min read</span>
    </div>
  </a>
`;

export const ArticleCard = () => `
  <a class="card" href="#" style="max-width: 380px;">
    <div class="card-image">
      <img src="https://scene7.abbvie.com/is/image/abbvie/article-immunology" alt="Immunology Article" />
    </div>
    <div class="card-content">
      <span class="card-category">Immunology</span>
      <span class="card-date">January 15, 2026</span>
      <h3 class="card-title">The Future of Immunology Treatment</h3>
      <p class="card-body">New research findings are paving the way for more targeted and effective immunology therapies with fewer side effects.</p>
      <span class="card-read-time">6 min read</span>
      <span class="card-cta">Read Article</span>
    </div>
  </a>
`;

export const ResourceCard = () => `
  <a class="card" href="/assets/documents/resource-guide.pdf" style="max-width: 380px;">
    <div class="card-image">
      <img src="https://scene7.abbvie.com/is/image/abbvie/resource-pdf" alt="Resource PDF" />
    </div>
    <div class="card-content">
      <h3 class="card-title">Patient Resource Guide</h3>
      <p class="card-body">Download our comprehensive guide covering treatment options, support programs, and frequently asked questions.</p>
      <span class="card-cta">Download PDF</span>
    </div>
  </a>
`;
