#!/usr/bin/env node
/**
 * Crawl all URLs from siteurl.txt and extract AEM component classes.
 * Outputs a JSON report of every block found on every page.
 */
const https = require('https');
const fs = require('fs');

const urls = fs.readFileSync('/workspace/siteurl.txt', 'utf8')
  .split('\n')
  .map(u => u.trim())
  .filter(u => u.startsWith('http'));

console.log(`Total URLs to crawl: ${urls.length}`);

// AEM component patterns to detect in HTML class attributes
const BLOCK_PATTERNS = [
  // Top-level AEM components
  /class="[^"]*\b(homepage-hero-controller)\b[^"]*"/g,
  /class="[^"]*\b(container abbvie-container[^"]*?)"/g,
  /class="[^"]*\b(teaser(?:\s+[\w-]+)*)\s+aem-GridColumn/g,
  /class="[^"]*\b(video[\s]+video-default[^"]*?)"/g,
  /class="[^"]*\b(separator[\s]+separator-height-\d+)/g,
  /class="[^"]*\b(grid(?:\s+cmp-grid[\w-]*)?)\s+(?:aem-GridColumn|no-bottom)/g,
  /class="[^"]*\b(accordion[^"]*?)"\s/g,
  /class="[^"]*\b(breadcrumb\s+abbvie-breadcrumb)/g,
  /class="[^"]*\b(cardpagestory[^"]*?)"/g,
  /class="[^"]*\b(dashboardcards[^"]*?)"/g,
  /class="[^"]*\b(quote[^"]*?cmp-quote[^"]*?)"/g,
  /class="[^"]*\b(storyinfo)\b/g,
  /class="[^"]*\b(button\s+back-cta[^"]*?)"/g,
  /class="[^"]*\b(image[^"]*?cmp-image--[^"]*?)"/g,
  // Container radius and size modifiers
  /\b(default-radius|medium-radius|large-radius)\b/g,
  /\b(cmp-container-(?:medium|large|x-large|xx-large|xxx-large|full-width))\b/g,
  /\b(height-(?:default|short|tall))\b/g,
  // Theme modifiers
  /\b(dark-theme|light-theme|medium-theme|medium-theme-stroke|light-theme-stroke|light-theme-no-stroke)\b/g,
  // Special modifiers
  /\b(homepage-overlap|overlap-predecessor|semi-transparent-layer|show-tabs-desktop)\b/g,
  // Separator heights
  /\b(separator-height-\d+)\b/g,
  // Card modifiers
  /\b(card-dashboard|card-standard|card-medium|card-small)\b/g,
  /\b(hide-image|hide-description|hide-publish-date|show-publish-date|standard-title)\b/g,
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AbbVieCrawler/1.0)' },
      timeout: 15000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchPage(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function extractBlocks(html, url) {
  const blocks = new Set();
  const modifiers = new Set();
  const separatorHeights = new Set();
  const cardVariants = new Set();
  const containerVariants = new Set();
  const themeVariants = new Set();

  // Extract body class for template type
  const bodyMatch = html.match(/<body[^>]*class="([^"]*)"/);
  const bodyClass = bodyMatch ? bodyMatch[1] : '';
  const isStoryPage = bodyClass.includes('storypage');

  // Check for breadcrumb
  if (html.includes('abbvie-breadcrumb')) blocks.add('breadcrumb');

  // Check for homepage hero
  if (html.includes('homepage-hero-controller')) blocks.add('homepage-hero-controller');

  // Check for storyinfo
  if (html.includes('"storyinfo"') || html.includes(' storyinfo ')) blocks.add('storyinfo');

  // Check for video
  if (html.includes('video-default') || html.includes('cmp-video')) blocks.add('video');

  // Check for accordion content (not just nav)
  const accordionMatches = html.match(/cmp-accordion(?!.*nav)/g);
  if (accordionMatches && accordionMatches.length > 0) blocks.add('accordion');

  // Check for show-tabs-desktop
  if (html.includes('show-tabs-desktop')) blocks.add('accordion-tabs');

  // Check for teaser
  if (html.match(/class="teaser[\s"]/)) blocks.add('teaser');
  if (html.includes('teaser-h4')) blocks.add('teaser-h4');
  if (html.includes('cmp-teaser__action-link')) blocks.add('teaser-with-cta');

  // Check for quote
  if (html.includes('cmp-quote')) blocks.add('quote');

  // Check for dashboardcards
  if (html.includes('dashboardcards')) blocks.add('dashboardcards');

  // Check for cardpagestory variants
  if (html.includes('cardpagestory')) {
    blocks.add('cardpagestory');
    if (html.includes('card-dashboard')) cardVariants.add('card-dashboard');
    if (html.includes('card-standard')) cardVariants.add('card-standard');
    if (html.includes('card-medium')) cardVariants.add('card-medium');
    if (html.includes('card-small')) cardVariants.add('card-small');
    if (html.includes('hide-image')) cardVariants.add('hide-image');
    if (html.includes('hide-description')) cardVariants.add('hide-description');
    if (html.includes('hide-publish-date')) cardVariants.add('hide-publish-date');
    if (html.includes('show-publish-date')) cardVariants.add('show-publish-date');
    if (html.includes('standard-title')) cardVariants.add('standard-title');
  }

  // Check for containers
  if (html.includes('abbvie-container')) {
    blocks.add('abbvie-container');
    if (html.includes('default-radius')) containerVariants.add('default-radius');
    if (html.includes('medium-radius')) containerVariants.add('medium-radius');
    if (html.includes('large-radius')) containerVariants.add('large-radius');
    if (html.includes('homepage-overlap')) containerVariants.add('homepage-overlap');
    if (html.includes('overlap-predecessor')) containerVariants.add('overlap-predecessor');
    if (html.includes('semi-transparent-layer')) containerVariants.add('semi-transparent-layer');
    if (html.includes('cmp-container-medium')) containerVariants.add('size-medium');
    if (html.includes('cmp-container-large"') || html.includes('cmp-container-large ')) containerVariants.add('size-large');
    if (html.includes('cmp-container-x-large')) containerVariants.add('size-x-large');
    if (html.includes('cmp-container-xx-large')) containerVariants.add('size-xx-large');
    if (html.includes('cmp-container-xxx-large')) containerVariants.add('size-xxx-large');
    if (html.includes('cmp-container-full-width')) containerVariants.add('size-full-width');
    if (html.includes('height-default')) containerVariants.add('height-default');
    if (html.includes('height-short')) containerVariants.add('height-short');
    if (html.includes('height-tall')) containerVariants.add('height-tall');
  }

  // Separator heights
  const sepMatches = html.matchAll(/separator-height-(\d+)/g);
  for (const m of sepMatches) {
    separatorHeights.add(parseInt(m[1]));
    blocks.add('separator');
  }

  // Theme variants
  if (html.includes('dark-theme')) themeVariants.add('dark-theme');
  if (html.includes('light-theme"') || html.includes('light-theme ')) themeVariants.add('light-theme');
  if (html.includes('medium-theme"') || html.includes('medium-theme ')) themeVariants.add('medium-theme');
  if (html.includes('medium-theme-stroke')) themeVariants.add('medium-theme-stroke');
  if (html.includes('light-theme-stroke')) themeVariants.add('light-theme-stroke');
  if (html.includes('light-theme-no-stroke')) themeVariants.add('light-theme-no-stroke');

  // Check for back-cta
  if (html.includes('back-cta')) blocks.add('back-cta');

  // Check for image variants
  if (html.includes('cmp-image--left')) blocks.add('image-positioned');

  // Check for grid variants
  if (html.includes('cmp-grid-custom')) blocks.add('grid-custom');
  if (html.includes('cmp-grid-full-page')) blocks.add('grid-full-page');

  // Check for experience fragments
  if (html.includes('cmp-experiencefragment--header')) blocks.add('xf-header');
  if (html.includes('cmp-experiencefragment--footer')) blocks.add('xf-footer');

  return {
    blocks: [...blocks].sort(),
    cardVariants: [...cardVariants].sort(),
    containerVariants: [...containerVariants].sort(),
    separatorHeights: [...separatorHeights].sort((a,b) => a-b),
    themeVariants: [...themeVariants].sort(),
    isStoryPage,
    bodyClass: bodyClass.substring(0, 80)
  };
}

async function crawlAll() {
  const results = [];
  const allBlocks = {};
  const allCardVariants = new Set();
  const allContainerVariants = new Set();
  const allSeparatorHeights = new Set();
  const allThemeVariants = new Set();
  const errors = [];

  // Process in batches of 10 for speed
  const BATCH = 10;
  for (let i = 0; i < urls.length; i += BATCH) {
    const batch = urls.slice(i, i + BATCH);
    const promises = batch.map(async (url) => {
      try {
        const { status, html } = await fetchPage(url);
        if (status !== 200) {
          errors.push({ url, status });
          return;
        }
        const data = extractBlocks(html, url);
        results.push({ url, ...data });

        // Aggregate
        data.blocks.forEach(b => {
          if (!allBlocks[b]) allBlocks[b] = [];
          allBlocks[b].push(url);
        });
        data.cardVariants.forEach(v => allCardVariants.add(v));
        data.containerVariants.forEach(v => allContainerVariants.add(v));
        data.separatorHeights.forEach(h => allSeparatorHeights.add(h));
        data.themeVariants.forEach(t => allThemeVariants.add(t));
      } catch (err) {
        errors.push({ url, error: err.message });
      }
    });
    await Promise.all(promises);
    process.stdout.write(`  Crawled ${Math.min(i + BATCH, urls.length)}/${urls.length}\r`);
  }

  console.log(`\nDone. ${results.length} pages crawled, ${errors.length} errors.`);

  // Build summary
  const summary = {
    meta: {
      crawlDate: new Date().toISOString(),
      totalURLs: urls.length,
      successfulCrawls: results.length,
      failedCrawls: errors.length
    },
    allBlockTypes: Object.keys(allBlocks).sort().map(block => ({
      block,
      pageCount: allBlocks[block].length,
      percentage: Math.round(allBlocks[block].length / results.length * 100) + '%'
    })),
    allCardVariants: [...allCardVariants].sort(),
    allContainerVariants: [...allContainerVariants].sort(),
    allSeparatorHeights: [...allSeparatorHeights].sort((a,b) => a-b),
    allThemeVariants: [...allThemeVariants].sort(),
    errors: errors.length > 0 ? errors : undefined,
    perPageData: results
  };

  fs.writeFileSync('/workspace/.migration/full-crawl-results.json', JSON.stringify(summary, null, 2));

  // Print summary table
  console.log('\n=== BLOCK TYPE FREQUENCY (across all pages) ===');
  summary.allBlockTypes.forEach(({ block, pageCount, percentage }) => {
    console.log(`  ${block.padEnd(30)} ${String(pageCount).padStart(4)} pages  (${percentage})`);
  });

  console.log('\n=== CARD VARIANTS ===');
  console.log('  ' + summary.allCardVariants.join(', '));

  console.log('\n=== CONTAINER VARIANTS ===');
  console.log('  ' + summary.allContainerVariants.join(', '));

  console.log('\n=== SEPARATOR HEIGHTS ===');
  console.log('  ' + summary.allSeparatorHeights.join(', '));

  console.log('\n=== THEME VARIANTS ===');
  console.log('  ' + summary.allThemeVariants.join(', '));
}

crawlAll().catch(console.error);
