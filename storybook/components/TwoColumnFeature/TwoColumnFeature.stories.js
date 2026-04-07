import './TwoColumnFeature.css';

export default {
  title: 'Components/TwoColumnFeature',
};

export const ImageLeft = {
  render: () => `
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper">
        <img
          src="https://abbvie.scene7.com/is/image/abbviecorp/woman-in-lab-looking-down?fmt=webp"
          alt="AbbVie scientist examining research samples in the lab"
        />
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Striving for Breakthroughs</h2>
        <p class="two-column-feature__body">
          At AbbVie, our science-first approach means we tackle the toughest
          challenges in healthcare. By combining deep expertise with bold
          innovation, we develop therapies that make a real difference for
          patients around the world.
        </p>
        <a href="#" class="two-column-feature__cta">Learn More</a>
      </div>
    </div>
  `,
};

export const ImageRight = {
  render: () => `
    <div class="two-column-feature two-column-feature--reversed">
      <div class="two-column-feature__image-wrapper">
        <img
          src="https://abbvie.scene7.com/is/image/abbviecorp/young-woman-smiling?fmt=webp"
          alt="AbbVie employee smiling"
        />
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Life at AbbVie</h2>
        <p class="two-column-feature__body">
          Our people are our greatest strength. At AbbVie, you'll find a
          collaborative culture that values diverse perspectives, encourages
          bold thinking, and supports your growth at every stage of your career.
        </p>
        <a href="#" class="two-column-feature__cta">Explore Careers</a>
      </div>
    </div>
  `,
};

export const VideoLeft = {
  render: () => `
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper two-column-feature__image-wrapper--video">
        <img
          src="https://abbvie.scene7.com/is/image/abbviecorp/man-looking-at-testtube-feature-tall-2?fmt=webp"
          alt="Researcher examining a test tube"
        />
        <button class="two-column-feature__play-btn" aria-label="Play video">
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
            <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)"/>
            <polygon points="26,20 26,44 46,32" fill="#fff"/>
          </svg>
        </button>
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Beyond the Diagnosis</h2>
        <p class="two-column-feature__body">
          Watch how AbbVie researchers are pioneering new approaches to
          Parkinson's disease—moving beyond symptom management to explore
          treatments that target the underlying causes of neurodegeneration.
        </p>
        <a href="#" class="two-column-feature__cta">Watch Video</a>
      </div>
    </div>
  `,
};
