var CustomImportScript = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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

  // tools/importer/import-generic.js
  var import_generic_exports = {};
  __export(import_generic_exports, {
    default: () => import_generic_default
  });

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

  // tools/importer/import-generic.js
  var transformers = [transform];
  function executeTransformers(hookName, element, payload) {
    transformers.forEach((fn) => {
      try {
        fn.call(null, hookName, element, payload);
      } catch (e) {
        console.error("Transformer error:", e);
      }
    });
  }
  var import_generic_default = {
    transform: (payload) => {
      const { document, url, params } = payload;
      const main = document.body;
      executeTransformers("beforeTransform", main, payload);
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
          template: "generic"
        }
      }];
    }
  };
  return __toCommonJS(import_generic_exports);
})();
