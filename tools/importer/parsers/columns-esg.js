/* eslint-disable */
/* global WebImporter */

/**
 * Parser: columns-esg
 * Base block: columns
 * Source: https://www.abbvie.com/
 * Selector: .container.abbvie-container.large-radius.cmp-container-full-width
 * Structure: 1 row with 3 columns (stat | card | quick links)
 */
export default function parse(element, { document }) {
  const children = element.querySelectorAll(':scope > .cmp-container > div, .grid-row__col-with-3, .grid-cell');
  const row = [];

  children.forEach((child) => {
    row.push(child.cloneNode(true));
  });

  // Fallback: if no grid children found, use direct children
  if (row.length === 0) {
    element.querySelectorAll(':scope > div > div > div').forEach((child) => {
      row.push(child.cloneNode(true));
    });
  }

  const cells = row.length > 0 ? [row] : [[element.cloneNode(true)]];

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'columns-esg',
    cells,
  });

  element.replaceWith(block);
}
