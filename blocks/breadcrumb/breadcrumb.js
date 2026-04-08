export default function decorate(block) {
  const items = [...block.children];
  block.textContent = '';

  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Breadcrumb');
  nav.className = 'breadcrumb-nav';

  const ol = document.createElement('ol');
  ol.className = 'breadcrumb-list';

  items.forEach((row, index) => {
    const li = document.createElement('li');
    li.className = 'breadcrumb-item';
    const isLast = index === items.length - 1;

    if (isLast) {
      li.setAttribute('aria-current', 'page');
      li.className += ' breadcrumb-current';
      li.textContent = row.textContent.trim();
    } else {
      const link = row.querySelector('a');
      if (link) {
        li.append(link);
      } else {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = row.textContent.trim();
        li.append(a);
      }
    }

    ol.append(li);
  });

  nav.append(ol);
  block.append(nav);
}
