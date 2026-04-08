import './VideoEmbed.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/VideoEmbed',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [homepage](https://www.abbvie.com/) (Parkinson\'s Research video — Watch 3:49), [science](https://www.abbvie.com/science.html) (research videos), [story articles](https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html) (inline article video)\n\nVideo player with poster image, play button, and duration badge. StandaloneVideo: full block with title + description. InlineVideo: embedded in article body. Click play replaces poster with actual video. Found on 83 pages.',
      },
    },
  },
};

export const StandaloneVideo = () => {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '640px';
  wrapper.innerHTML = refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}]) + `
    <div class="video-embed-container">
      <img class="video-embed-poster" src="/images/hero-parkinsons.webp" alt="Advancing Parkinson's Research" />
      <video class="video-embed-player" style="display:none; width:100%; border-radius:4px;" controls>
        <source src="/videos/sample-hero.mp4" type="video/mp4" />
      </video>
      <button class="video-embed-play-button" aria-label="Play video"></button>
      <span class="video-embed-duration">3:49</span>
    </div>
    <div class="video-embed-title">Advancing Parkinson's Research: One Patient's Journey, One Scientist's Mission</div>
    <p class="video-embed-description">Discover how AbbVie neuroscience researchers are partnering with patients and caregivers to develop transformative therapies for people living with Parkinson's disease.</p>
  `;

  const playBtn = wrapper.querySelector('.video-embed-play-button');
  const poster = wrapper.querySelector('.video-embed-poster');
  const video = wrapper.querySelector('.video-embed-player');
  const duration = wrapper.querySelector('.video-embed-duration');

  playBtn.addEventListener('click', () => {
    poster.style.display = 'none';
    playBtn.style.display = 'none';
    duration.style.display = 'none';
    video.style.display = 'block';
    video.play();
  });

  return wrapper;
};

export const InlineVideo = () => {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '480px';
  wrapper.innerHTML = refBanner([{label:'Story Article',url:'https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html'}]) + `
    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 24px; color: #071d49; margin-bottom: 16px;">
      Watch the video below to learn how AbbVie scientists are pushing the boundaries of research to develop next-generation therapies.
    </p>
    <div class="video-embed-container">
      <img class="video-embed-poster" src="/images/card-science.webp" alt="AbbVie Science" />
      <video class="video-embed-player" style="display:none; width:100%; border-radius:4px;" controls>
        <source src="/videos/sample-hero.mp4" type="video/mp4" />
      </video>
      <button class="video-embed-play-button" aria-label="Play video"></button>
      <span class="video-embed-duration">1:08</span>
    </div>
  `;

  const playBtn = wrapper.querySelector('.video-embed-play-button');
  const poster = wrapper.querySelector('.video-embed-poster');
  const video = wrapper.querySelector('.video-embed-player');
  const duration = wrapper.querySelector('.video-embed-duration');

  playBtn.addEventListener('click', () => {
    poster.style.display = 'none';
    playBtn.style.display = 'none';
    duration.style.display = 'none';
    video.style.display = 'block';
    video.play();
  });

  return wrapper;
};

export const TwoColumnWithOverlay = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = refBanner([{label:'Homepage (Parkinson\'s video)',url:'https://www.abbvie.com/'}]) + `
    <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:0; border-radius:40px 0 0 0; overflow:hidden;">
      <div style="position:relative;">
        <img src="/images/hero-parkinsons.webp" alt="Parkinson's Research" style="width:100%; height:100%; object-fit:cover; display:block;" />
        <div style="position:absolute; bottom:3.2rem; left:3.2rem; right:3.2rem;">
          <h2 style="font-family:'F37 Lineca Medium',sans-serif; font-size:3.2rem; font-weight:800; color:#fff; margin:0 0 0.8rem;">Advancing Parkinson's Research</h2>
          <p style="font-family:'Roboto',sans-serif; font-size:1.6rem; color:#fff; margin:0 0 1.6rem;">One Patient's Journey, One Scientist's Mission</p>
          <button style="font-family:'Roboto Bold',sans-serif; font-size:1.4rem; font-weight:700; color:#fff; background:none; border:1px solid #fff; padding:1.6rem 4rem; cursor:pointer; display:flex; align-items:center; gap:0.8rem;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff"><polygon points="4,2 14,8 4,14"/></svg>
            Watch 3:49
          </button>
        </div>
      </div>
      <div style="background:#071d49; padding:4rem; display:flex; align-items:center;">
        <div>
          <video style="width:100%; border-radius:4px; display:none;" controls>
            <source src="/videos/sample-hero.mp4" type="video/mp4" />
          </video>
          <p style="font-family:'Roboto',sans-serif; font-size:1.6rem; color:rgba(255,255,255,0.7); line-height:2.4rem;">Discover how AbbVie researchers are partnering with patients and caregivers to develop transformative therapies for people living with Parkinson's disease.</p>
        </div>
      </div>
    </div>
  `;
  return wrapper;
};
