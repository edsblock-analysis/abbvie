/* eslint-disable */
/* global WebImporter */

/**
 * Parser: video-research
 * Base block: video
 * Source: https://www.abbvie.com/
 * Selector: .video.video-default.cmp-video-xx-large
 * Structure: Row 1 = poster image, Row 2 = heading + subtitle + watch CTA
 */
export default function parse(element, { document }) {
  const cells = [];
  const posterImg = element.querySelector('img');
  const heading = element.querySelector('h2');
  const subtitle = element.querySelector('p');
  const watchBtn = element.querySelector('button, [class*="cta"]');
  const videoLink = element.querySelector('a[href], video source');

  // Row 1: poster image or video link
  if (posterImg) {
    cells.push([posterImg.cloneNode(true)]);
  } else if (videoLink) {
    const link = document.createElement('a');
    link.href = videoLink.src || videoLink.href || '';
    link.textContent = link.href;
    cells.push([link]);
  }

  // Row 2: heading + subtitle
  const contentParts = [];
  if (heading) contentParts.push(heading.cloneNode(true));
  if (subtitle) contentParts.push(subtitle.cloneNode(true));
  if (contentParts.length > 0) cells.push(contentParts);

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'video-research',
    cells,
  });

  element.replaceWith(block);
}
