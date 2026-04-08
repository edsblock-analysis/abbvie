/* eslint-disable */
/* global WebImporter */

/**
 * Parser: carousel-press
 * Base block: carousel
 * Source: https://www.abbvie.com/
 * Selector: .homepage-overlap .carousel, .homepage-overlap .splide
 * Structure: Each slide = 1 row with date + headline + link
 */
export default function parse(element, { document }) {
  const slides = element.querySelectorAll('.splide__slide, [class*="carousel__item"], [role="group"]');
  const cells = [];

  slides.forEach((slide) => {
    const dateEl = slide.querySelector('[class*="date"], time');
    const headlineEl = slide.querySelector('p, h3, h4, [class*="headline"]');
    const linkEl = slide.querySelector('a[href]');

    const cellContent = [];
    if (dateEl) cellContent.push(dateEl.cloneNode(true));
    if (headlineEl) cellContent.push(headlineEl.cloneNode(true));
    if (linkEl && !cellContent.includes(linkEl)) cellContent.push(linkEl.cloneNode(true));

    if (cellContent.length > 0) cells.push(cellContent);
  });

  if (cells.length === 0) {
    // Fallback: treat entire element as single slide
    cells.push([element.cloneNode(true)]);
  }

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'carousel-press',
    cells,
  });

  element.replaceWith(block);
}
