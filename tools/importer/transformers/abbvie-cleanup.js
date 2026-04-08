/* eslint-disable */
/* global WebImporter */

/**
 * AbbVie site-wide cleanup transformer.
 * Removes non-authorable content: header, footer, nav, cookie banner,
 * popups, search, overlays, tracking pixels, and site chrome.
 * Selectors verified from captured DOM of abbvie.com (2026-04-08).
 */

const TransformHook = { beforeTransform: 'beforeTransform', afterTransform: 'afterTransform' };

export default function transform(hookName, element, payload) {
  if (hookName === TransformHook.beforeTransform) {
    // Remove cookie consent banner and overlays (block parsing)
    WebImporter.DOMUtils.remove(element, [
      '#onetrust-consent-sdk',
      '#onetrust-banner-sdk',
      '[class*="cookie"]',
      '[class*="CookieConsent"]',
      '.popup-departure',
      '[role="alertdialog"]',
      '[class*="survey"]',
      '[class*="bowen-craggs"]',
    ]);

    // Remove tracking pixels, iframes, noscript
    WebImporter.DOMUtils.remove(element, [
      'iframe[src*="adsrvr"]',
      'iframe[src*="google"]',
      'iframe[src*="facebook"]',
      'noscript',
      'script',
      'style',
    ]);
  }

  if (hookName === TransformHook.afterTransform) {
    // Remove global header/navigation
    WebImporter.DOMUtils.remove(element, [
      '.cmp-experiencefragment--header',
      '.sticky-nav',
      'header',
      'nav.cmp-navigation',
      '.nav-bar',
      '.skip-link',
    ]);

    // Remove global footer
    WebImporter.DOMUtils.remove(element, [
      '.cmp-experiencefragment--footer',
      'footer',
    ]);

    // Remove search
    WebImporter.DOMUtils.remove(element, [
      '.searchinput',
      '[class*="search-overlay"]',
    ]);

    // Remove scroll-to-top button
    WebImporter.DOMUtils.remove(element, [
      '.back-to-top',
      'button[class*="scroll-to-top"]',
    ]);

    // Remove separator spacers (handled by section breaks)
    WebImporter.DOMUtils.remove(element, [
      '.separator',
    ]);

    // Remove tracking pixel images
    element.querySelectorAll('img').forEach((img) => {
      const src = img.src || img.getAttribute('src') || '';
      if (src.includes('t.co/') || src.includes('analytics.twitter') ||
          src.includes('adsrvr.org') || src.includes('adservice.google') ||
          src.includes('facebook.com/tr') || src.includes('linkedin.com/px') ||
          src.includes('bat.bing.com') || src.includes('metrics.brightcove') ||
          src.includes('e1.emxdgt.com') || src.includes('siteimproveanalytics') ||
          src.includes('clarity.ms') || src.includes('snap.licdn') ||
          src.startsWith('blob:') || src === '' ||
          (img.width <= 1 && img.height <= 1)) {
        img.remove();
      }
    });

    // Remove empty divs and paragraphs
    element.querySelectorAll('div:empty, p:empty').forEach((el) => {
      if (!el.querySelector('*')) el.remove();
    });

    // Clean up data attributes and event handlers
    element.querySelectorAll('*').forEach((el) => {
      if (el.hasAttribute('onclick')) el.removeAttribute('onclick');
      if (el.hasAttribute('data-track')) el.removeAttribute('data-track');
      if (el.hasAttribute('data-asset-tags')) el.removeAttribute('data-asset-tags');
    });
  }
}
