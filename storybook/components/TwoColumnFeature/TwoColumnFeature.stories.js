import './TwoColumnFeature.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/TwoColumnFeature',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [homepage](https://www.abbvie.com/) (Persistence Lab Podcast section, Parkinson\'s Research video), [join-us](https://www.abbvie.com/join-us.html) (employee testimonial sections)\n\n50/50 split layout with 40px top-left border-radius. ImageLeft: image left, text+CTA right. ImageRight: reversed with CSS modifier. VideoLeft: poster image with play button that swaps to real video.',
      },
    },
  },
};

export const ImageLeft = {
  render: () => refBanner([{label:'Homepage (Podcast)',url:'https://www.abbvie.com/'}]) + `
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper">
        <img
          src="/images/hero-lab.webp"
          alt="AbbVie scientist examining research samples in the lab"
        />
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Striving for Breakthroughs: First, Faster and for Patients</h2>
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
  render: () => refBanner([{label:'Join Us',url:'https://www.abbvie.com/join-us.html'}]) + `
    <div class="two-column-feature two-column-feature--reversed">
      <div class="two-column-feature__image-wrapper">
        <img
          src="/images/culture-smile.webp"
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

export const VideoLeft = () => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{label:'Homepage (Parkinson\'s Video)',url:'https://www.abbvie.com/'}]) + `
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper two-column-feature__image-wrapper--video" style="position:relative; cursor:pointer;">
        <img
          src="/images/hero-parkinsons.webp"
          alt="Advancing Parkinson's research"
          class="two-col-poster"
        />
        <video class="two-col-video" style="display:none; width:100%; height:100%; object-fit:cover;" controls>
          <source src="/videos/sample-hero.mp4" type="video/mp4" />
        </video>
        <div class="two-column-feature__play-btn" aria-label="Play video" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); cursor:pointer;">
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
            <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)"/>
            <polygon points="26,20 26,44 46,32" fill="#fff"/>
          </svg>
        </div>
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Advancing Parkinson's Research</h2>
        <p class="two-column-feature__body">
          Watch how AbbVie researchers are pioneering new approaches to
          Parkinson's disease — moving beyond symptom management to explore
          treatments that target the underlying causes of neurodegeneration.
        </p>
        <a href="#" class="two-column-feature__cta">Watch 3:49</a>
      </div>
    </div>
  `;

  const playBtn = el.querySelector('.two-column-feature__play-btn');
  const poster = el.querySelector('.two-col-poster');
  const video = el.querySelector('.two-col-video');

  playBtn.addEventListener('click', () => {
    poster.style.display = 'none';
    playBtn.style.display = 'none';
    video.style.display = 'block';
    video.play();
  });

  return el;
};
