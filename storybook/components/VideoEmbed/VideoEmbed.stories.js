import './VideoEmbed.css';

export default {
  title: 'Components/VideoEmbed',
};

export const StandaloneVideo = () => {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '640px';
  wrapper.innerHTML = `
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
  wrapper.innerHTML = `
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
