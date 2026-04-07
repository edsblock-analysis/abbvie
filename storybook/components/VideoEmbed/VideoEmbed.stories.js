import './VideoEmbed.css';

export default {
  title: 'Components/VideoEmbed',
};

export const StandaloneVideo = () => {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '640px';
  wrapper.innerHTML = `
    <div class="video-embed-container">
      <img class="video-embed-poster" src="/images/hero-parkinsons.webp" alt="Advancing Parkinson's Research: One Patient's Journey, One Scientist's Mission" />
      <button class="video-embed-play-button" aria-label="Play video"></button>
      <span class="video-embed-duration">3:49</span>
    </div>
    <div class="video-embed-title">Advancing Parkinson's Research: One Patient's Journey, One Scientist's Mission</div>
    <p class="video-embed-description">Discover how AbbVie neuroscience researchers are partnering with patients and caregivers to develop transformative therapies for people living with Parkinson's disease, following one patient's personal journey alongside the scientist dedicated to finding new treatments.</p>
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
      Watch the video below to learn how AbbVie scientists are pushing the boundaries of research to develop next-generation therapies across immunology, oncology, and neuroscience.
    </p>
    <div class="video-embed-container">
      <img class="video-embed-poster" src="/images/card-science.webp" alt="AbbVie Science: Pushing the Boundaries of Research" />
      <button class="video-embed-play-button" aria-label="Play video"></button>
      <span class="video-embed-duration">1:08</span>
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
