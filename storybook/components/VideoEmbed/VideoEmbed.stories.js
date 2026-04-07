import './VideoEmbed.css';

export default {
  title: 'Components/VideoEmbed',
};

export const StandaloneVideo = () => {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '640px';
  wrapper.innerHTML = `
    <div class="video-embed-container">
      <img class="video-embed-poster" src="https://abbvie.scene7.com/is/image/abbviecorp/man-looking-at-testtube-feature-tall-2?fmt=webp" alt="Advancing Parkinson's Research" />
      <button class="video-embed-play-button" aria-label="Play video"></button>
      <span class="video-embed-duration">3:49</span>
    </div>
    <div class="video-embed-title">Advancing Parkinson's Research</div>
    <p class="video-embed-description">Discover how AbbVie neuroscience researchers are working to develop transformative therapies for people living with Parkinson's disease, from early-stage discovery through late-stage clinical trials.</p>
  `;

  const playBtn = wrapper.querySelector('.video-embed-play-button');
  const container = wrapper.querySelector('.video-embed-container');

  playBtn.addEventListener('click', () => {
    const isPlaying = container.classList.toggle('playing');
    if (isPlaying) {
      playBtn.style.opacity = '0';
      playBtn.style.pointerEvents = 'none';
    } else {
      playBtn.style.opacity = '';
      playBtn.style.pointerEvents = '';
    }
  });

  container.addEventListener('click', (e) => {
    if (e.target === playBtn) return;
    if (container.classList.contains('playing')) {
      container.classList.remove('playing');
      playBtn.style.opacity = '';
      playBtn.style.pointerEvents = '';
    }
  });

  return wrapper;
};

export const InlineVideo = () => {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '480px';
  wrapper.innerHTML = `
    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 24px; color: #071d49; margin-bottom: 16px;">
      Watch the video below to learn how AbbVie is harnessing artificial intelligence and machine learning to accelerate drug discovery and bring new treatments to patients faster.
    </p>
    <div class="video-embed-container">
      <img class="video-embed-poster" src="https://abbvie.scene7.com/is/image/abbviecorp/ambily-card-image?fmt=webp" alt="AbbVie AI-Powered Drug Discovery" />
      <button class="video-embed-play-button" aria-label="Play video"></button>
      <span class="video-embed-duration">0:30</span>
    </div>
  `;

  const playBtn = wrapper.querySelector('.video-embed-play-button');
  const container = wrapper.querySelector('.video-embed-container');

  playBtn.addEventListener('click', () => {
    const isPlaying = container.classList.toggle('playing');
    if (isPlaying) {
      playBtn.style.opacity = '0';
      playBtn.style.pointerEvents = 'none';
    } else {
      playBtn.style.opacity = '';
      playBtn.style.pointerEvents = '';
    }
  });

  container.addEventListener('click', (e) => {
    if (e.target === playBtn) return;
    if (container.classList.contains('playing')) {
      container.classList.remove('playing');
      playBtn.style.opacity = '';
      playBtn.style.pointerEvents = '';
    }
  });

  return wrapper;
};
