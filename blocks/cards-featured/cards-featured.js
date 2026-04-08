export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    row.classList.add('cards-featured-card');
    const img = row.querySelector('picture');
    if (img) {
      const imgWrapper = img.closest('div');
      if (imgWrapper) imgWrapper.classList.add('cards-featured-card-image');
    }
    const body = [...row.children].find((child) => !child.querySelector('picture'));
    if (body) body.classList.add('cards-featured-card-body');
  });
}
