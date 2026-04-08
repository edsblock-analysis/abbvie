export default function decorate(block) {
  const content = block.textContent.trim().toLowerCase();
  block.textContent = '';

  const spacer = document.createElement('div');
  spacer.className = 'separator-spacer';

  if (content.includes('divider')) {
    block.classList.add('divider');
    spacer.classList.add('divider');
  }

  // Extract height value (e.g., "80px", "40", "divider 60px")
  const heightMatch = content.match(/(\d+)(px)?/);
  if (heightMatch) {
    const height = heightMatch[2] ? `${heightMatch[1]}px` : `${heightMatch[1]}px`;
    spacer.style.height = height;
  }

  block.append(spacer);
}
