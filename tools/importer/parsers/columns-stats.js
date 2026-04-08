/* eslint-disable */
/* global WebImporter */

/**
 * Parser: columns-stats
 * Base block: columns
 * Source: https://www.abbvie.com/
 * Selector: .grid:not(.cmp-grid-custom):first-of-type
 * Structure: 1 row with 3 columns (card + stat + stat)
 */
export default function parse(element, { document }) {
  const children = element.querySelectorAll(':scope > div > div, .grid-row__col-with-4, .grid-cell');
  const row = [];

  children.forEach((child) => {
    const clone = child.cloneNode(true);
    row.push(clone);
  });

  const cells = row.length > 0 ? [row] : [[element.cloneNode(true)]];

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'columns-stats',
    cells,
  });

  element.replaceWith(block);
}
