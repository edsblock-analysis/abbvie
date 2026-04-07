import './Footer.css';

export const Footer = ({ logoText = 'Company', sections = [], socialLinks = [], legalLinks = [], copyright }) => {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  // Logo
  const logo = document.createElement('div');
  logo.className = 'footer-logo';
  const logoSpan = document.createElement('span');
  logoSpan.className = 'footer-logo-placeholder';
  logoSpan.textContent = logoText;
  logo.appendChild(logoSpan);
  footer.appendChild(logo);

  // Grid of link sections
  const grid = document.createElement('div');
  grid.className = 'footer-grid';

  sections.forEach((section) => {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'footer-section';

    const heading = document.createElement('h4');
    heading.className = 'footer-section-heading';
    heading.textContent = section.heading;
    sectionEl.appendChild(heading);

    const ul = document.createElement('ul');
    section.links.forEach((link) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href || '#';
      a.textContent = link.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
    sectionEl.appendChild(ul);
    grid.appendChild(sectionEl);
  });

  footer.appendChild(grid);

  // Social icons
  if (socialLinks.length > 0) {
    const social = document.createElement('div');
    social.className = 'footer-social';
    socialLinks.forEach((link) => {
      const a = document.createElement('a');
      a.className = 'footer-social-icon';
      a.href = link.href || '#';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', link.label);
      a.textContent = link.icon || link.label.charAt(0);
      social.appendChild(a);
    });
    footer.appendChild(social);
  }

  // Legal bar
  const legal = document.createElement('div');
  legal.className = 'footer-legal';

  if (copyright) {
    const copyEl = document.createElement('span');
    copyEl.className = 'footer-legal-text';
    copyEl.textContent = copyright;
    legal.appendChild(copyEl);
  }

  legalLinks.forEach((link) => {
    const a = document.createElement('a');
    a.href = link.href || '#';
    a.textContent = link.label;
    legal.appendChild(a);
  });

  footer.appendChild(legal);

  return footer;
};
