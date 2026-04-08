export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const anchor = row.querySelector('a');
    if (anchor && anchor.href.includes('youtube')) {
      const videoId = new URL(anchor.href).searchParams.get('v');
      if (videoId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('frameborder', '0');
        iframe.classList.add('video-research-iframe');
        anchor.replaceWith(iframe);
      }
    }
  });
}
