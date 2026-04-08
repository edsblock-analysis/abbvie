export default function decorate(block) {
  const hasImage = block.querySelector('picture');

  if (hasImage) {
    block.classList.add('teaser-two-column');
    const rows = [...block.children];
    rows.forEach((row) => {
      const cols = [...row.children];
      cols.forEach((col) => {
        if (col.querySelector('picture')) {
          col.classList.add('teaser-image');
        } else {
          col.classList.add('teaser-content');
        }
      });
    });
  } else {
    block.classList.add('teaser-centered');
    const rows = [...block.children];
    rows.forEach((row) => {
      row.classList.add('teaser-content');
    });
  }

  // Style CTA links
  block.querySelectorAll('a').forEach((link) => {
    link.classList.add('teaser-cta');
  });
}
