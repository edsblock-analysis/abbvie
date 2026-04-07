import './RelatedContent.css';

const createCard = ({ image, category, title, description, href }) => {
  const card = document.createElement('a');
  card.className = 'related-content-card';
  card.href = href || '#';

  const img = document.createElement('div');
  img.className = 'related-content-card-image';
  if (image) {
    const imgEl = document.createElement('img');
    imgEl.className = 'related-content-card-image';
    imgEl.src = image;
    imgEl.alt = title || '';
    card.appendChild(imgEl);
  } else {
    card.appendChild(img);
  }

  const body = document.createElement('div');
  body.className = 'related-content-card-body';

  if (category) {
    const cat = document.createElement('span');
    cat.className = 'related-content-card-category';
    cat.textContent = category;
    body.appendChild(cat);
  }

  if (title) {
    const h3 = document.createElement('h3');
    h3.className = 'related-content-card-title';
    h3.textContent = title;
    body.appendChild(h3);
  }

  if (description) {
    const desc = document.createElement('p');
    desc.className = 'related-content-card-description';
    desc.textContent = description;
    body.appendChild(desc);
  }

  card.appendChild(body);
  return card;
};

export const RelatedContent = ({ heading, cards = [], variant = 'cards' }) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'related-content';

  if (heading) {
    const h2 = document.createElement('h2');
    h2.textContent = heading;
    wrapper.appendChild(h2);
  }

  if (variant === 'cards') {
    const grid = document.createElement('div');
    grid.className = 'related-content-grid';
    cards.forEach((cardData) => {
      grid.appendChild(createCard(cardData));
    });
    wrapper.appendChild(grid);
  } else if (variant === 'topics') {
    const ul = document.createElement('ul');
    ul.className = 'related-content-topics';
    cards.forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.href || '#';
      a.textContent = item.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
    wrapper.appendChild(ul);
  }

  return wrapper;
};
