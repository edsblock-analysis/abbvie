/* eslint-disable */
/* global WebImporter */

/**
 * Parser: columns-feature
 * Base block: columns
 * Source: https://www.abbvie.com/
 * Selector: .container.abbvie-container.default-radius.cmp-container-xxx-large
 * Structure: 1 row with 2 columns (image | content)
 */
export default function parse(element, { document }) {
  const img = element.querySelector('img');
  const heading = element.querySelector('h5, h4, h3, h2');
  const category = element.querySelector('h2');
  const body = element.querySelector('p');
  const cta = element.querySelector('a[href]');

  const col1 = [];
  if (img) col1.push(img.cloneNode(true));

  const col2 = [];
  if (category && category !== heading) col2.push(category.cloneNode(true));
  if (heading) col2.push(heading.cloneNode(true));
  if (body) col2.push(body.cloneNode(true));
  if (cta) col2.push(cta.cloneNode(true));

  const cells = [[col1.length > 0 ? col1 : '', col2]];

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'columns-feature',
    cells,
  });

  element.replaceWith(block);
}
