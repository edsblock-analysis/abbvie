import './ProfileCardGrid.css';

const createProfileCard = ({ name, title, image, href }) => {
  const card = document.createElement('div');
  card.className = 'profile-card';

  const headshot = document.createElement('div');
  headshot.className = 'profile-card-headshot';
  if (image) {
    const img = document.createElement('img');
    img.className = 'profile-card-headshot';
    img.src = image;
    img.alt = name;
    card.appendChild(img);
  } else {
    card.appendChild(headshot);
  }

  const nameEl = document.createElement('h3');
  nameEl.className = 'profile-card-name';
  nameEl.textContent = name;
  card.appendChild(nameEl);

  if (title) {
    const titleEl = document.createElement('p');
    titleEl.className = 'profile-card-title';
    titleEl.textContent = title;
    card.appendChild(titleEl);
  }

  const link = document.createElement('a');
  link.className = 'profile-card-link';
  link.href = href || '#';
  link.textContent = `Meet ${name.split(' ')[0]}`;
  card.appendChild(link);

  return card;
};

export const ProfileCardGrid = ({ profiles = [] }) => {
  const grid = document.createElement('div');
  grid.className = 'profile-card-grid';

  profiles.forEach((profile) => {
    grid.appendChild(createProfileCard(profile));
  });

  return grid;
};
