import './Breadcrumb.css';

export const Breadcrumb = ({ items = [] }) => {
  const nav = document.createElement('nav');
  nav.className = 'breadcrumb';
  nav.setAttribute('aria-label', 'Breadcrumb');

  const ol = document.createElement('ol');

  items.forEach((item, index) => {
    const li = document.createElement('li');
    const isLast = index === items.length - 1;

    if (isLast) {
      const span = document.createElement('span');
      span.className = 'breadcrumb-current';
      span.setAttribute('aria-current', 'page');
      span.textContent = item.label;
      li.appendChild(span);
    } else {
      const a = document.createElement('a');
      a.href = item.href || '#';
      a.textContent = item.label;
      li.appendChild(a);
    }

    ol.appendChild(li);
  });

  nav.appendChild(ol);
  return nav;
};
