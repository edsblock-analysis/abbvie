export default function decorate(block) {
  const rows = [...block.children];
  block.textContent = '';

  const bar = document.createElement('div');
  bar.className = 'storyinfo-bar';

  rows.forEach((row) => {
    const children = [...row.children];
    if (children.length < 2) return;

    const label = children[0].textContent.trim().toLowerCase();
    const value = children[1];

    const item = document.createElement('span');
    item.className = `storyinfo-item storyinfo-${label.replace(/\s+/g, '-')}`;

    const link = value.querySelector('a');
    if (link) {
      link.className = 'storyinfo-link';
      item.append(link);
    } else {
      item.textContent = value.textContent.trim();
    }

    bar.append(item);
  });

  block.append(bar);
}
