/* eslint-disable */
/* global WebImporter */

// PARSER IMPORTS
import heroHomepageParser from './parsers/hero-homepage.js';
import carouselPressParser from './parsers/carousel-press.js';
import cardsFeaturedParser from './parsers/cards-featured.js';
import cardsCultureParser from './parsers/cards-culture.js';
import videoResearchParser from './parsers/video-research.js';
import columnsStatsParser from './parsers/columns-stats.js';
import columnsFeatureParser from './parsers/columns-feature.js';
import columnsInvestorParser from './parsers/columns-investor.js';
import columnsEsgParser from './parsers/columns-esg.js';

// TRANSFORMER IMPORTS
import abbvieCleanupTransformer from './transformers/abbvie-cleanup.js';
import abbvieSectionsTransformer from './transformers/abbvie-sections.js';

// PARSER REGISTRY
const parsers = {
  'hero-homepage': heroHomepageParser,
  'carousel-press': carouselPressParser,
  'cards-featured': cardsFeaturedParser,
  'cards-culture': cardsCultureParser,
  'video-research': videoResearchParser,
  'columns-stats': columnsStatsParser,
  'columns-feature': columnsFeatureParser,
  'columns-investor': columnsInvestorParser,
  'columns-esg': columnsEsgParser,
};

// PAGE TEMPLATE CONFIGURATION
const PAGE_TEMPLATE = {
    "name": "homepage",
    "urls": [
      "https://www.abbvie.com/"
    ],
    "description": "Homepage with hero carousel, press releases, featured story, video, stats, sections, and CTA blocks",
    "blocks": [
      {
        "name": "hero-homepage",
        "instances": [
          ".homepage-hero-controller"
        ]
      },
      {
        "name": "carousel-press",
        "instances": [
          ".homepage-overlap .carousel",
          ".homepage-overlap .splide"
        ]
      },
      {
        "name": "cards-featured",
        "instances": [
          ".homepage-overlap .cardpagestory.card-standard"
        ]
      },
      {
        "name": "cards-culture",
        "instances": [
          ".grid.cmp-grid-custom"
        ]
      },
      {
        "name": "video-research",
        "instances": [
          ".video.video-default.cmp-video-xx-large"
        ]
      },
      {
        "name": "columns-stats",
        "instances": [
          ".grid:not(.cmp-grid-custom):first-of-type"
        ]
      },
      {
        "name": "columns-feature",
        "instances": [
          ".container.abbvie-container.default-radius.cmp-container-xxx-large"
        ]
      },
      {
        "name": "columns-investor",
        "instances": [
          ".grid:not(.cmp-grid-custom):last-of-type"
        ]
      },
      {
        "name": "columns-esg",
        "instances": [
          ".container.abbvie-container.large-radius.cmp-container-full-width"
        ]
      }
    ],
    "sections": [
      {
        "id": "section-1",
        "name": "Hero",
        "selector": ".homepage-hero-controller",
        "style": "dark",
        "blocks": [
          "hero-homepage"
        ],
        "defaultContent": []
      },
      {
        "id": "section-2",
        "name": "Press Releases + Featured",
        "selector": ".container.abbvie-container.homepage-overlap",
        "style": null,
        "blocks": [
          "carousel-press",
          "cards-featured"
        ],
        "defaultContent": []
      },
      {
        "id": "section-3",
        "name": "Patient Focus",
        "selector": ".teaser:not(.light-theme)",
        "style": null,
        "blocks": [],
        "defaultContent": [
          "h3",
          "p",
          "a"
        ]
      },
      {
        "id": "section-4",
        "name": "Parkinson Video",
        "selector": ".video.video-default.cmp-video-xx-large",
        "style": "dark",
        "blocks": [
          "video-research"
        ],
        "defaultContent": []
      },
      {
        "id": "section-5",
        "name": "Science Heading",
        "selector": ".teaser:nth-of-type(2)",
        "style": null,
        "blocks": [],
        "defaultContent": [
          "h2",
          "h3",
          "p"
        ]
      },
      {
        "id": "section-6",
        "name": "Card Stats Row",
        "selector": ".grid:not(.cmp-grid-custom):first-of-type",
        "style": null,
        "blocks": [
          "columns-stats"
        ],
        "defaultContent": []
      },
      {
        "id": "section-7",
        "name": "Podcast Feature",
        "selector": ".container.abbvie-container.default-radius",
        "style": null,
        "blocks": [
          "columns-feature"
        ],
        "defaultContent": []
      },
      {
        "id": "section-8",
        "name": "Culture Heading",
        "selector": ".teaser.light-theme",
        "style": null,
        "blocks": [],
        "defaultContent": [
          "h2",
          "h3",
          "p"
        ]
      },
      {
        "id": "section-9",
        "name": "Culture Cards",
        "selector": ".grid.cmp-grid-custom",
        "style": null,
        "blocks": [
          "cards-culture"
        ],
        "defaultContent": []
      },
      {
        "id": "section-10",
        "name": "Explore CTA",
        "selector": ".container.abbvie-container.medium-radius.cmp-container-xxx-large.height-short",
        "style": "light-blue",
        "blocks": [],
        "defaultContent": [
          "h4",
          "p",
          "a"
        ]
      },
      {
        "id": "section-11",
        "name": "Investor Heading",
        "selector": ".teaser:nth-of-type(4)",
        "style": null,
        "blocks": [],
        "defaultContent": [
          "h2",
          "h3",
          "p"
        ]
      },
      {
        "id": "section-12",
        "name": "Investor Content",
        "selector": ".grid:not(.cmp-grid-custom):last-of-type",
        "style": null,
        "blocks": [
          "columns-investor"
        ],
        "defaultContent": []
      },
      {
        "id": "section-13",
        "name": "ESG Heading",
        "selector": ".teaser:nth-of-type(5)",
        "style": null,
        "blocks": [],
        "defaultContent": [
          "h2",
          "h3",
          "p"
        ]
      },
      {
        "id": "section-14",
        "name": "ESG Composite",
        "selector": ".container.abbvie-container.large-radius.cmp-container-full-width",
        "style": null,
        "blocks": [
          "columns-esg"
        ],
        "defaultContent": []
      }
    ]
  };

// TRANSFORMER REGISTRY
const transformers = [
  abbvieCleanupTransformer,
  ...(PAGE_TEMPLATE.sections && PAGE_TEMPLATE.sections.length > 1 ? [abbvieSectionsTransformer] : []),
];

/**
 * Execute all page transformers for a specific hook
 */
function executeTransformers(hookName, element, payload) {
  const enhancedPayload = { ...payload, template: PAGE_TEMPLATE };
  transformers.forEach((transformerFn) => {
    try {
      transformerFn.call(null, hookName, element, enhancedPayload);
    } catch (e) {
      console.error('Transformer failed at ' + hookName + ':', e);
    }
  });
}

/**
 * Find all blocks on the page based on embedded template configuration
 */
function findBlocksOnPage(document, template) {
  const pageBlocks = [];
  template.blocks.forEach((blockDef) => {
    blockDef.instances.forEach((selector) => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          pageBlocks.push({
            name: blockDef.name,
            selector,
            element,
            section: blockDef.section || null,
          });
        });
      } catch (e) {
        console.warn('Invalid selector for ' + blockDef.name + ': ' + selector);
      }
    });
  });
  console.log('Found ' + pageBlocks.length + ' block instances on page');
  return pageBlocks;
}

// EXPORT DEFAULT CONFIGURATION
export default {
  transform: (payload) => {
    const { document, url, html, params } = payload;
    const main = document.body;

    // 1. Execute beforeTransform transformers
    executeTransformers('beforeTransform', main, payload);

    // 2. Find blocks on page using embedded template
    const pageBlocks = findBlocksOnPage(document, PAGE_TEMPLATE);

    // 3. Parse each block using registered parsers
    pageBlocks.forEach((block) => {
      const parser = parsers[block.name];
      if (parser) {
        try {
          parser(block.element, { document, url, params });
        } catch (e) {
          console.error('Failed to parse ' + block.name + ':', e);
        }
      } else {
        console.warn('No parser found for block: ' + block.name);
      }
    });

    // 4. Execute afterTransform transformers
    executeTransformers('afterTransform', main, payload);

    // 5. Apply WebImporter built-in rules
    const hr = document.createElement('hr');
    main.appendChild(hr);
    WebImporter.rules.createMetadata(main, document);
    WebImporter.rules.transformBackgroundImages(main, document);
    WebImporter.rules.adjustImageUrls(main, url, params.originalURL);

    // 6. Generate sanitized path
    const path = WebImporter.FileUtils.sanitizePath(
      new URL(params.originalURL).pathname.replace(/\/$/, '').replace(/\.html$/, '') || '/index'
    );

    return [{
      element: main,
      path,
      report: {
        title: document.title,
        template: PAGE_TEMPLATE.name,
        blocks: pageBlocks.map((b) => b.name),
      },
    }];
  },
};
