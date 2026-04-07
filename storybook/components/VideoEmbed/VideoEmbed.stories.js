import videoEmbedStyles from './VideoEmbed.css?raw';

export default {
  title: 'Components/VideoEmbed',
};

export const StandaloneVideo = () => {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '640px';
  wrapper.innerHTML = `
    <style>${videoEmbedStyles}</style>
    <div class="video-embed-container">
      <img class="video-embed-poster" src="https://via.placeholder.com/800x450/1a1a2e/ffffff?text=Video+Poster" alt="Understanding your treatment options" />
      <button class="video-embed-play-button" aria-label="Play video"></button>
      <span class="video-embed-duration">4:32</span>
    </div>
    <div class="video-embed-title">Understanding Your Treatment Options</div>
    <p class="video-embed-description">Learn about the different treatment pathways available and how to work with your care team to find the right approach for you.</p>
  `;
  return wrapper;
};

export const InlineVideo = () => {
  const wrapper = document.createElement('div');
  wrapper.style.maxWidth = '480px';
  wrapper.innerHTML = `
    <style>${videoEmbedStyles}</style>
    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 24px; color: #071d49; margin-bottom: 16px;">
      Watch the video below for a brief overview of how the program works and what to expect during enrollment.
    </p>
    <div class="video-embed-container">
      <img class="video-embed-poster" src="https://via.placeholder.com/640x360/2d2d44/ffffff?text=Inline+Video" alt="Program overview" />
      <button class="video-embed-play-button" aria-label="Play video"></button>
      <span class="video-embed-duration">2:15</span>
    </div>
  `;
  return wrapper;
};
