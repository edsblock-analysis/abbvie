/* eslint-disable */
/* global WebImporter */

/**
 * Parser: hero-homepage
 * Base block: hero
 * Source: https://www.abbvie.com/
 * Selector: .homepage-hero-controller
 * Structure: Row 1 = background image, Row 2 = heading + CTA
 */
export default function parse(element, { document }) {
  const img = element.querySelector('img');
  const heading = element.querySelector('h1');
  const ctaLink = element.querySelector('a[href]');

  const cells = [];

  // Row 1: Background image
  if (img) {
    cells.push([img.cloneNode(true)]);
  }

  // Row 2: Heading + optional CTA
  const contentCell = [];
  if (heading) contentCell.push(heading.cloneNode(true));
  if (ctaLink) contentCell.push(ctaLink.cloneNode(true));
  if (contentCell.length > 0) cells.push(contentCell);

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'hero-homepage',
    cells,
  });

  element.replaceWith(block);
}
