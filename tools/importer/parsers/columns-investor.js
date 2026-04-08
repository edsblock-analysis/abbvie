/* eslint-disable */
/* global WebImporter */

/**
 * Parser: columns-investor
 * Base block: columns
 * Source: https://www.abbvie.com/
 * Selector: .grid:not(.cmp-grid-custom):last-of-type
 * Structure: 1 row with 2 columns (earnings card | quick links)
 */
export default function parse(element, { document }) {
  const children = element.querySelectorAll(':scope > div > div, .grid-row__col-with-4, .grid-cell');
  const row = [];

  children.forEach((child) => {
    row.push(child.cloneNode(true));
  });

  const cells = row.length > 0 ? [row] : [[element.cloneNode(true)]];

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'columns-investor',
    cells,
  });

  element.replaceWith(block);
}
