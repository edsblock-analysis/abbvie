/**
 * Creates an HTML reference banner linking to live production pages.
 * @param {Array<{label: string, url: string}>} links - Production page links
 * @returns {string} HTML string for the reference banner
 */
export function refBanner(links) {
  const anchors = links
    .map(({ label, url }) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`)
    .join(' &nbsp;|&nbsp; ');
  return `<div class="story-reference"><span class="story-reference__label">Live Reference</span> ${anchors}</div>`;
}
