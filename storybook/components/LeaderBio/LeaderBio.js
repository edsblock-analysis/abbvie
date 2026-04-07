import './LeaderBio.css';

export const LeaderBio = ({ name, title, image, linkedInUrl, bio = [] }) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'leader-bio';

  const header = document.createElement('div');
  header.className = 'leader-bio-header';

  const headshot = document.createElement('div');
  headshot.className = 'leader-bio-headshot';
  if (image) {
    const img = document.createElement('img');
    img.className = 'leader-bio-headshot';
    img.src = image;
    img.alt = name;
    header.appendChild(img);
  } else {
    header.appendChild(headshot);
  }

  const info = document.createElement('div');
  info.className = 'leader-bio-info';

  const nameEl = document.createElement('h1');
  nameEl.className = 'leader-bio-name';
  nameEl.textContent = name;
  info.appendChild(nameEl);

  if (title) {
    const titleEl = document.createElement('p');
    titleEl.className = 'leader-bio-title';
    titleEl.textContent = title;
    info.appendChild(titleEl);
  }

  if (linkedInUrl) {
    const link = document.createElement('a');
    link.className = 'leader-bio-linkedin';
    link.href = linkedInUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Connect on LinkedIn';
    info.appendChild(link);
  }

  header.appendChild(info);
  wrapper.appendChild(header);

  const content = document.createElement('div');
  content.className = 'leader-bio-content';
  bio.forEach((paragraph) => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    content.appendChild(p);
  });
  wrapper.appendChild(content);

  return wrapper;
};
