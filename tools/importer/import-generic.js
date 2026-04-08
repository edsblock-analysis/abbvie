/* eslint-disable */
/* global WebImporter */

import abbvieCleanupTransformer from './transformers/abbvie-cleanup.js';

const transformers = [abbvieCleanupTransformer];

function executeTransformers(hookName, element, payload) {
  transformers.forEach((fn) => {
    try { fn.call(null, hookName, element, payload); } catch (e) { console.error('Transformer error:', e); }
  });
}

export default {
  transform: (payload) => {
    const { document, url, params } = payload;
    const main = document.body;

    // 1. Before cleanup
    executeTransformers('beforeTransform', main, payload);

    // 2. After cleanup (removes header, footer, nav, tracking)
    executeTransformers('afterTransform', main, payload);

    // 3. Apply built-in rules
    const hr = document.createElement('hr');
    main.appendChild(hr);
    WebImporter.rules.createMetadata(main, document);
    WebImporter.rules.transformBackgroundImages(main, document);
    WebImporter.rules.adjustImageUrls(main, url, params.originalURL);

    // 4. Generate path
    const path = WebImporter.FileUtils.sanitizePath(
      new URL(params.originalURL).pathname.replace(/\/$/, '').replace(/\.html$/, '') || '/index'
    );

    return [{
      element: main,
      path,
      report: {
        title: document.title,
        template: 'generic',
      },
    }];
  },
};
