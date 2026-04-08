var CustomImportScript = (() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // tools/importer/import-homepage.js
  var import_homepage_exports = {};
  __export(import_homepage_exports, {
    default: () => import_homepage_default
  });

  // tools/importer/parsers/hero-homepage.js
  function parse(element, { document }) {
    const img = element.querySelector("img");
    const heading = element.querySelector("h1");
    const ctaLink = element.querySelector("a[href]");
    const cells = [];
    if (img) {
      cells.push([img.cloneNode(true)]);
    }
    const contentCell = [];
    if (heading) contentCell.push(heading.cloneNode(true));
    if (ctaLink) contentCell.push(ctaLink.cloneNode(true));
    if (contentCell.length > 0) cells.push(contentCell);
    const block = WebImporter.Blocks.createBlock(document, {
      name: "hero-homepage",
      cells
    });
    element.replaceWith(block);
  }

  // tools/importer/parsers/carousel-press.js
  function parse2(element, { document }) {
    const slides = element.querySelectorAll('.splide__slide, [class*="carousel__item"], [role="group"]');
    const cells = [];
    slides.forEach((slide) => {
      const dateEl = slide.querySelector('[class*="date"], time');
      const headlineEl = slide.querySelector('p, h3, h4, [class*="headline"]');
      const linkEl = slide.querySelector("a[href]");
      const cellContent = [];
      if (dateEl) cellContent.push(dateEl.cloneNode(true));
      if (headlineEl) cellContent.push(headlineEl.cloneNode(true));
      if (linkEl && !cellContent.includes(linkEl)) cellContent.push(linkEl.cloneNode(true));
      if (cellContent.length > 0) cells.push(cellContent);
    });
    if (cells.length === 0) {
      cells.push([element.cloneNode(true)]);
    }
    const block = WebImporter.Blocks.createBlock(document, {
      name: "carousel-press",
      cells
    });
    element.replaceWith(block);
  }

  // tools/importer/parsers/cards-featured.js
  function parse3(element, { document }) {
    const cells = [];
    const img = element.querySelector("img");
    const title = element.querySelector('h4, h3, [class*="title"]');
    const desc = element.querySelector('p, [class*="description"]');
    const category = element.querySelector('[class*="category"], [class*="cta-read"]');
    const dateEl = element.querySelector('[class*="date"], [class*="timestamp"]');
    const cta = element.querySelector('[class*="cta-standard"], [class*="card-cta"]');
    const imageCell = img ? img.cloneNode(true) : "";
    const contentParts = [];
    if (dateEl) contentParts.push(dateEl.cloneNode(true));
    if (category) contentParts.push(category.cloneNode(true));
    if (title) contentParts.push(title.cloneNode(true));
    if (desc) contentParts.push(desc.cloneNode(true));
    if (cta) contentParts.push(cta.cloneNode(true));
    cells.push([imageCell, contentParts]);
    const block = WebImporter.Blocks.createBlock(document, {
      name: "cards-featured",
      cells
    });
    element.replaceWith(block);
  }

  // tools/importer/parsers/cards-culture.js
  function parse4(element, { document }) {
    const cells = [];
    const cardItems = element.querySelectorAll(".grid-row__col-with-4, .grid-cell, :scope > div > div");
    cardItems.forEach((item) => {
      const img = item.querySelector("img");
      const body = item.querySelector("p");
      const cta = item.querySelector("a[href]");
      const contentParts = [];
      if (img) contentParts.push(img.cloneNode(true));
      if (body) contentParts.push(body.cloneNode(true));
      if (cta) contentParts.push(cta.cloneNode(true));
      if (contentParts.length > 0) cells.push(contentParts);
    });
    const block = WebImporter.Blocks.createBlock(document, {
      name: "cards-culture",
      cells
    });
    element.replaceWith(block);
  }

  // tools/importer/parsers/video-research.js
  function parse5(element, { document }) {
    const cells = [];
    const posterImg = element.querySelector("img");
    const heading = element.querySelector("h2");
    const subtitle = element.querySelector("p");
    const watchBtn = element.querySelector('button, [class*="cta"]');
    const videoLink = element.querySelector("a[href], video source");
    if (posterImg) {
      cells.push([posterImg.cloneNode(true)]);
    } else if (videoLink) {
      const link = document.createElement("a");
      link.href = videoLink.src || videoLink.href || "";
      link.textContent = link.href;
      cells.push([link]);
    }
    const contentParts = [];
    if (heading) contentParts.push(heading.cloneNode(true));
    if (subtitle) contentParts.push(subtitle.cloneNode(true));
    if (contentParts.length > 0) cells.push(contentParts);
    const block = WebImporter.Blocks.createBlock(document, {
      name: "video-research",
      cells
    });
    element.replaceWith(block);
  }

  // tools/importer/parsers/columns-stats.js
  function parse6(element, { document }) {
    const children = element.querySelectorAll(":scope > div > div, .grid-row__col-with-4, .grid-cell");
    const row = [];
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      row.push(clone);
    });
    const cells = row.length > 0 ? [row] : [[element.cloneNode(true)]];
    const block = WebImporter.Blocks.createBlock(document, {
      name: "columns-stats",
      cells
    });
    element.replaceWith(block);
  }

  // tools/importer/parsers/columns-feature.js
  function parse7(element, { document }) {
    const img = element.querySelector("img");
    const heading = element.querySelector("h5, h4, h3, h2");
    const category = element.querySelector("h2");
    const body = element.querySelector("p");
    const cta = element.querySelector("a[href]");
    const col1 = [];
    if (img) col1.push(img.cloneNode(true));
    const col2 = [];
    if (category && category !== heading) col2.push(category.cloneNode(true));
    if (heading) col2.push(heading.cloneNode(true));
    if (body) col2.push(body.cloneNode(true));
    if (cta) col2.push(cta.cloneNode(true));
    const cells = [[col1.length > 0 ? col1 : "", col2]];
    const block = WebImporter.Blocks.createBlock(document, {
      name: "columns-feature",
      cells
    });
    element.replaceWith(block);
  }

  // tools/importer/parsers/columns-investor.js
  function parse8(element, { document }) {
    const children = element.querySelectorAll(":scope > div > div, .grid-row__col-with-4, .grid-cell");
    const row = [];
    children.forEach((child) => {
      row.push(child.cloneNode(true));
    });
    const cells = row.length > 0 ? [row] : [[element.cloneNode(true)]];
    const block = WebImporter.Blocks.createBlock(document, {
      name: "columns-investor",
      cells
    });
    element.replaceWith(block);
  }

  // tools/importer/parsers/columns-esg.js
  function parse9(element, { document }) {
    const children = element.querySelectorAll(":scope > .cmp-container > div, .grid-row__col-with-3, .grid-cell");
    const row = [];
    children.forEach((child) => {
      row.push(child.cloneNode(true));
    });
    if (row.length === 0) {
      element.querySelectorAll(":scope > div > div > div").forEach((child) => {
        row.push(child.cloneNode(true));
      });
    }
    const cells = row.length > 0 ? [row] : [[element.cloneNode(true)]];
    const block = WebImporter.Blocks.createBlock(document, {
      name: "columns-esg",
      cells
    });
    element.replaceWith(block);
  }

  // tools/importer/transformers/abbvie-cleanup.js
  var TransformHook = { beforeTransform: "beforeTransform", afterTransform: "afterTransform" };
  function transform(hookName, element, payload) {
    if (hookName === TransformHook.beforeTransform) {
      WebImporter.DOMUtils.remove(element, [
        "#onetrust-consent-sdk",
        "#onetrust-banner-sdk",
        '[class*="cookie"]',
        '[class*="CookieConsent"]',
        ".popup-departure",
        '[role="alertdialog"]',
        '[class*="survey"]',
        '[class*="bowen-craggs"]'
      ]);
      WebImporter.DOMUtils.remove(element, [
        'iframe[src*="adsrvr"]',
        'iframe[src*="google"]',
        'iframe[src*="facebook"]',
        "noscript",
        "script",
        "style"
      ]);
    }
    if (hookName === TransformHook.afterTransform) {
      WebImporter.DOMUtils.remove(element, [
        ".cmp-experiencefragment--header",
        ".sticky-nav",
        "header",
        "nav.cmp-navigation",
        ".nav-bar",
        ".skip-link"
      ]);
      WebImporter.DOMUtils.remove(element, [
        ".cmp-experiencefragment--footer",
        "footer"
      ]);
      WebImporter.DOMUtils.remove(element, [
        ".searchinput",
        '[class*="search-overlay"]'
      ]);
      WebImporter.DOMUtils.remove(element, [
        ".back-to-top",
        'button[class*="scroll-to-top"]'
      ]);
      WebImporter.DOMUtils.remove(element, [
        ".separator"
      ]);
      element.querySelectorAll("img").forEach((img) => {
        const src = img.src || img.getAttribute("src") || "";
        if (src.includes("t.co/") || src.includes("analytics.twitter") || src.includes("adsrvr.org") || src.includes("adservice.google") || src.includes("facebook.com/tr") || src.includes("linkedin.com/px") || src.includes("bat.bing.com") || src.includes("metrics.brightcove") || src.includes("e1.emxdgt.com") || src.includes("siteimproveanalytics") || src.includes("clarity.ms") || src.includes("snap.licdn") || src.startsWith("blob:") || src === "" || img.width <= 1 && img.height <= 1) {
          img.remove();
        }
      });
      element.querySelectorAll("div:empty, p:empty").forEach((el) => {
        if (!el.querySelector("*")) el.remove();
      });
      element.querySelectorAll("*").forEach((el) => {
        if (el.hasAttribute("onclick")) el.removeAttribute("onclick");
        if (el.hasAttribute("data-track")) el.removeAttribute("data-track");
        if (el.hasAttribute("data-asset-tags")) el.removeAttribute("data-asset-tags");
      });
    }
  }

  // tools/importer/transformers/abbvie-sections.js
  var TransformHook2 = { beforeTransform: "beforeTransform", afterTransform: "afterTransform" };
  function transform2(hookName, element, payload) {
    var _a;
    if (hookName === TransformHook2.afterTransform) {
      const { template } = payload || {};
      if (!template || !template.sections || template.sections.length < 2) return;
      const { document } = element.ownerDocument ? { document: element.ownerDocument } : { document: element };
      const doc = document || element.ownerDocument;
      if (!doc) return;
      const sections = [...template.sections].reverse();
      for (const section of sections) {
        if (!section.selector) continue;
        const selectors = Array.isArray(section.selector) ? section.selector : [section.selector];
        let sectionEl = null;
        for (const sel of selectors) {
          try {
            sectionEl = element.querySelector(sel);
            if (sectionEl) break;
          } catch (e) {
          }
        }
        if (!sectionEl) continue;
        if (section.style) {
          const sectionMetadata = WebImporter.Blocks.createBlock(doc, {
            name: "Section Metadata",
            cells: [["style", section.style]]
          });
          sectionEl.after(sectionMetadata);
        }
        if (section.id !== ((_a = template.sections[0]) == null ? void 0 : _a.id)) {
          const hr = doc.createElement("hr");
          if (sectionEl.previousElementSibling) {
            sectionEl.before(hr);
          }
        }
      }
    }
  }

  // tools/importer/import-homepage.js
  var parsers = {
    "hero-homepage": parse,
    "carousel-press": parse2,
    "cards-featured": parse3,
    "cards-culture": parse4,
    "video-research": parse5,
    "columns-stats": parse6,
    "columns-feature": parse7,
    "columns-investor": parse8,
    "columns-esg": parse9
  };
  var PAGE_TEMPLATE = {
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
  var transformers = [
    transform,
    ...PAGE_TEMPLATE.sections && PAGE_TEMPLATE.sections.length > 1 ? [transform2] : []
  ];
  function executeTransformers(hookName, element, payload) {
    const enhancedPayload = __spreadProps(__spreadValues({}, payload), { template: PAGE_TEMPLATE });
    transformers.forEach((transformerFn) => {
      try {
        transformerFn.call(null, hookName, element, enhancedPayload);
      } catch (e) {
        console.error("Transformer failed at " + hookName + ":", e);
      }
    });
  }
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
              section: blockDef.section || null
            });
          });
        } catch (e) {
          console.warn("Invalid selector for " + blockDef.name + ": " + selector);
        }
      });
    });
    console.log("Found " + pageBlocks.length + " block instances on page");
    return pageBlocks;
  }
  var import_homepage_default = {
    transform: (payload) => {
      const { document, url, html, params } = payload;
      const main = document.body;
      executeTransformers("beforeTransform", main, payload);
      const pageBlocks = findBlocksOnPage(document, PAGE_TEMPLATE);
      pageBlocks.forEach((block) => {
        const parser = parsers[block.name];
        if (parser) {
          try {
            parser(block.element, { document, url, params });
          } catch (e) {
            console.error("Failed to parse " + block.name + ":", e);
          }
        } else {
          console.warn("No parser found for block: " + block.name);
        }
      });
      executeTransformers("afterTransform", main, payload);
      const hr = document.createElement("hr");
      main.appendChild(hr);
      WebImporter.rules.createMetadata(main, document);
      WebImporter.rules.transformBackgroundImages(main, document);
      WebImporter.rules.adjustImageUrls(main, url, params.originalURL);
      const path = WebImporter.FileUtils.sanitizePath(
        new URL(params.originalURL).pathname.replace(/\/$/, "").replace(/\.html$/, "") || "/index"
      );
      return [{
        element: main,
        path,
        report: {
          title: document.title,
          template: PAGE_TEMPLATE.name,
          blocks: pageBlocks.map((b) => b.name)
        }
      }];
    }
  };
  return __toCommonJS(import_homepage_exports);
})();
