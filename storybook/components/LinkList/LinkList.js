import './LinkList.css';

export const LinkList = ({ heading, links = [] }) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'link-list';

  if (heading) {
    const h3 = document.createElement('h3');
    h3.className = 'link-list-heading';
    h3.textContent = heading;
    wrapper.appendChild(h3);
  }

  const ul = document.createElement('ul');

  links.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href || '#';
    a.textContent = item.label;

    if (item.external) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  wrapper.appendChild(ul);
  return wrapper;
};
