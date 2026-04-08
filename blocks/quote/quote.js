export default function decorate(block) {
  const rows = [...block.children];
  block.textContent = '';

  const blockquote = document.createElement('blockquote');
  blockquote.className = 'quote-blockquote';

  // First row = quote text
  if (rows[0]) {
    const quoteText = document.createElement('div');
    quoteText.className = 'quote-text';
    quoteText.innerHTML = rows[0].textContent.trim();
    blockquote.append(quoteText);
  }

  // Second row = attribution (name + title), may contain image
  if (rows[1]) {
    const attribution = document.createElement('div');
    attribution.className = 'quote-attribution';

    const img = rows[1].querySelector('img');
    if (img) {
      const headshot = document.createElement('div');
      headshot.className = 'quote-headshot';
      headshot.append(img);
      attribution.append(headshot);
    }

    const details = document.createElement('div');
    details.className = 'quote-details';

    // Extract text content from the children, split into name and title
    const children = [...rows[1].children];
    const textParts = [];
    children.forEach((child) => {
      const childImg = child.querySelector('img');
      if (!childImg) {
        textParts.push(child.innerHTML.trim());
      } else {
        // If child has both img and text, extract remaining text
        const clone = child.cloneNode(true);
        const imgEl = clone.querySelector('img');
        if (imgEl) imgEl.remove();
        const picEl = clone.querySelector('picture');
        if (picEl) picEl.remove();
        const remaining = clone.innerHTML.trim();
        if (remaining) textParts.push(remaining);
      }
    });

    if (textParts.length > 0) {
      const name = document.createElement('p');
      name.className = 'quote-name';
      name.innerHTML = textParts[0];
      details.append(name);
    }
    if (textParts.length > 1) {
      const title = document.createElement('p');
      title.className = 'quote-title';
      title.innerHTML = textParts[1];
      details.append(title);
    }

    attribution.append(details);
    blockquote.append(attribution);
  }

  block.append(blockquote);
}
