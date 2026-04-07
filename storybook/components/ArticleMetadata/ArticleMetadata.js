import './ArticleMetadata.css';

export const ArticleMetadata = ({ date, category, categoryHref = '#', readTime }) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'article-metadata';

  if (date) {
    const dateEl = document.createElement('span');
    dateEl.className = 'article-metadata-date';
    dateEl.textContent = date;
    wrapper.appendChild(dateEl);
  }

  if (category) {
    const sep = document.createElement('span');
    sep.className = 'article-metadata-separator';
    sep.textContent = '|';
    wrapper.appendChild(sep);

    const catEl = document.createElement('a');
    catEl.className = 'article-metadata-category';
    catEl.href = categoryHref;
    catEl.textContent = category;
    wrapper.appendChild(catEl);
  }

  if (readTime) {
    const sep2 = document.createElement('span');
    sep2.className = 'article-metadata-separator';
    sep2.textContent = '|';
    wrapper.appendChild(sep2);

    const timeEl = document.createElement('span');
    timeEl.className = 'article-metadata-read-time';
    timeEl.textContent = readTime;
    wrapper.appendChild(timeEl);
  }

  return wrapper;
};
