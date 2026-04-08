/* eslint-disable */
/* global WebImporter */

/**
 * Parser: cards-culture
 * Base block: cards
 * Source: https://www.abbvie.com/
 * Selector: .grid.cmp-grid-custom
 * Structure: 3 cards each with tall image + body + CTA link
 */
export default function parse(element, { document }) {
  const cells = [];
  const cardItems = element.querySelectorAll('.grid-row__col-with-4, .grid-cell, :scope > div > div');

  cardItems.forEach((item) => {
    const img = item.querySelector('img');
    const body = item.querySelector('p');
    const cta = item.querySelector('a[href]');

    const contentParts = [];
    if (img) contentParts.push(img.cloneNode(true));
    if (body) contentParts.push(body.cloneNode(true));
    if (cta) contentParts.push(cta.cloneNode(true));

    if (contentParts.length > 0) cells.push(contentParts);
  });

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'cards-culture',
    cells,
  });

  element.replaceWith(block);
}
