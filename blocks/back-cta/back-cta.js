export default function decorate(block) {
  block.classList.add('back-cta');

  const link = block.querySelector('a');
  if (link) {
    // Create arrow SVG
    const arrow = document.createElement('span');
    arrow.classList.add('back-cta-arrow');
    arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    // Wrap content in link structure
    const text = link.textContent;
    link.textContent = '';
    link.classList.add('back-cta-link');
    link.appendChild(arrow);

    const label = document.createElement('span');
    label.classList.add('back-cta-label');
    label.textContent = text;
    link.appendChild(label);

    // Replace block content with the styled link
    block.textContent = '';
    block.appendChild(link);
  }
}
