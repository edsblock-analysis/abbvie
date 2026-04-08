/* eslint-disable */
/* global WebImporter */

/**
 * Parser: cards-featured
 * Base block: cards
 * Source: https://www.abbvie.com/
 * Selector: .homepage-overlap .cardpagestory.card-standard
 * Structure: Each card = 1 row, col 1 = image, col 2 = content
 */
export default function parse(element, { document }) {
  const cells = [];
  const img = element.querySelector('img');
  const title = element.querySelector('h4, h3, [class*="title"]');
  const desc = element.querySelector('p, [class*="description"]');
  const category = element.querySelector('[class*="category"], [class*="cta-read"]');
  const dateEl = element.querySelector('[class*="date"], [class*="timestamp"]');
  const cta = element.querySelector('[class*="cta-standard"], [class*="card-cta"]');

  // Row 1: image | content
  const imageCell = img ? img.cloneNode(true) : '';
  const contentParts = [];
  if (dateEl) contentParts.push(dateEl.cloneNode(true));
  if (category) contentParts.push(category.cloneNode(true));
  if (title) contentParts.push(title.cloneNode(true));
  if (desc) contentParts.push(desc.cloneNode(true));
  if (cta) contentParts.push(cta.cloneNode(true));

  cells.push([imageCell, contentParts]);

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'cards-featured',
    cells,
  });

  element.replaceWith(block);
}
