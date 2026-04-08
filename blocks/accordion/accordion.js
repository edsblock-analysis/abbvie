export default function decorate(block) {
  const items = [...block.children];
  block.textContent = '';

  // Expand All / Collapse All button
  const controls = document.createElement('div');
  controls.className = 'accordion-controls';
  const toggleAllBtn = document.createElement('button');
  toggleAllBtn.className = 'accordion-toggle-all';
  toggleAllBtn.textContent = 'Expand All';
  toggleAllBtn.setAttribute('type', 'button');
  toggleAllBtn.addEventListener('click', () => {
    const allExpanded = [...block.querySelectorAll('.accordion-item')]
      .every((item) => item.classList.contains('active'));
    block.querySelectorAll('.accordion-item').forEach((item) => {
      if (allExpanded) {
        item.classList.remove('active');
        item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        item.querySelector('.accordion-header').setAttribute('aria-expanded', 'true');
      }
    });
    toggleAllBtn.textContent = allExpanded ? 'Expand All' : 'Collapse All';
  });
  controls.append(toggleAllBtn);
  block.append(controls);

  items.forEach((row) => {
    const children = [...row.children];
    if (!children.length) return;

    const item = document.createElement('div');
    item.className = 'accordion-item';

    // Header
    const header = document.createElement('button');
    header.className = 'accordion-header';
    header.setAttribute('type', 'button');
    header.setAttribute('aria-expanded', 'false');
    header.innerHTML = children[0].innerHTML;

    const icon = document.createElement('span');
    icon.className = 'accordion-icon';
    header.append(icon);

    // Content
    const content = document.createElement('div');
    content.className = 'accordion-content';
    children.slice(1).forEach((child) => {
      content.append(...child.childNodes);
    });

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      item.classList.toggle('active');
      header.setAttribute('aria-expanded', String(!isActive));

      // Update toggle-all button text
      const allExpanded = [...block.querySelectorAll('.accordion-item')]
        .every((i) => i.classList.contains('active'));
      const noneExpanded = [...block.querySelectorAll('.accordion-item')]
        .every((i) => !i.classList.contains('active'));
      if (allExpanded) toggleAllBtn.textContent = 'Collapse All';
      else if (noneExpanded) toggleAllBtn.textContent = 'Expand All';
    });

    item.append(header, content);
    block.append(item);
  });
}
