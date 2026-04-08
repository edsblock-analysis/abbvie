/* eslint-disable */
/* global WebImporter */

/**
 * AbbVie section transformer.
 * Adds section breaks (<hr>) and section-metadata blocks from template sections.
 * Runs in afterTransform only. Uses payload.template.sections.
 */

const TransformHook = { beforeTransform: 'beforeTransform', afterTransform: 'afterTransform' };

export default function transform(hookName, element, payload) {
  if (hookName === TransformHook.afterTransform) {
    const { template } = payload || {};
    if (!template || !template.sections || template.sections.length < 2) return;

    const { document } = element.ownerDocument ? { document: element.ownerDocument } : { document: element };
    const doc = document || element.ownerDocument;
    if (!doc) return;

    // Process sections in reverse order to preserve DOM positions
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
          // Invalid selector, try next
        }
      }

      if (!sectionEl) continue;

      // Add section-metadata block if section has a style
      if (section.style) {
        const sectionMetadata = WebImporter.Blocks.createBlock(doc, {
          name: 'Section Metadata',
          cells: [['style', section.style]],
        });
        sectionEl.after(sectionMetadata);
      }

      // Add section break (hr) before section if it's not the first
      // and there is content before it
      if (section.id !== template.sections[0]?.id) {
        const hr = doc.createElement('hr');
        if (sectionEl.previousElementSibling) {
          sectionEl.before(hr);
        }
      }
    }
  }
}
