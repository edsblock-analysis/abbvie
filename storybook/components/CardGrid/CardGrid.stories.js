export default {
  title: 'Components/CardGrid',
};

export const ThreeColumnCards = () => `
  <div class="card-grid">
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/feature-card-1" alt="Innovation" />
      </div>
      <div class="card-content">
        <h3 class="card-title">Driving Innovation</h3>
        <p class="card-body">Discover how our research teams are pushing the boundaries of science to develop transformative therapies.</p>
        <span class="card-cta">Learn More</span>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/feature-card-2" alt="Patient Care" />
      </div>
      <div class="card-content">
        <h3 class="card-title">Patient-Centered Care</h3>
        <p class="card-body">Our commitment to patients goes beyond medicine, providing support programs and resources for better outcomes.</p>
        <span class="card-cta">Explore Programs</span>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/feature-card-3" alt="Community Impact" />
      </div>
      <div class="card-content">
        <h3 class="card-title">Community Impact</h3>
        <p class="card-body">See how we are making a meaningful difference in communities around the world through our outreach initiatives.</p>
        <span class="card-cta">Get Involved</span>
      </div>
    </a>
  </div>
`;

export const FourColumnStoryCards = () => `
  <div class="card-grid" style="grid-template-columns: repeat(4, 1fr);">
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/story-card-1" alt="Research Breakthrough" />
      </div>
      <div class="card-content">
        <h3 class="card-title">Research Breakthrough</h3>
        <p class="card-body">A new clinical trial shows promising results for patients with chronic conditions.</p>
        <span class="card-cta">Read Story</span>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/story-card-2" alt="Employee Spotlight" />
      </div>
      <div class="card-content">
        <h3 class="card-title">Employee Spotlight</h3>
        <p class="card-body">Meet the scientist behind our latest advancement in immunology research.</p>
        <span class="card-cta">Read Story</span>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/story-card-3" alt="Global Reach" />
      </div>
      <div class="card-content">
        <h3 class="card-title">Global Reach</h3>
        <p class="card-body">Expanding access to essential medicines across underserved regions worldwide.</p>
        <span class="card-cta">Read Story</span>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/story-card-4" alt="Sustainability" />
      </div>
      <div class="card-content">
        <h3 class="card-title">Sustainability Goals</h3>
        <p class="card-body">Our roadmap to reducing environmental impact while advancing healthcare solutions.</p>
        <span class="card-cta">Read Story</span>
      </div>
    </a>
  </div>
`;

export const ArticleCards = () => `
  <div class="card-grid">
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/article-card-1" alt="Immunology Research" />
      </div>
      <div class="card-content">
        <span class="card-category">Immunology</span>
        <span class="card-date">March 15, 2026</span>
        <h3 class="card-title">Advances in Immunology Treatment</h3>
        <p class="card-body">Exploring the next generation of targeted therapies that are reshaping how we approach autoimmune diseases.</p>
        <span class="card-read-time">5 min read</span>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/article-card-2" alt="Oncology Update" />
      </div>
      <div class="card-content">
        <span class="card-category">Oncology</span>
        <span class="card-date">February 28, 2026</span>
        <h3 class="card-title">Oncology Pipeline Update</h3>
        <p class="card-body">A comprehensive look at our expanding oncology portfolio and the clinical milestones achieved this quarter.</p>
        <span class="card-read-time">8 min read</span>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card-image">
        <img src="https://scene7.abbvie.com/is/image/abbvie/article-card-3" alt="Neuroscience" />
      </div>
      <div class="card-content">
        <span class="card-category">Neuroscience</span>
        <span class="card-date">January 10, 2026</span>
        <h3 class="card-title">Neuroscience and the Future of Care</h3>
        <p class="card-body">How breakthroughs in neuroscience are opening new pathways for treating neurological disorders.</p>
        <span class="card-read-time">6 min read</span>
      </div>
    </a>
  </div>
`;
