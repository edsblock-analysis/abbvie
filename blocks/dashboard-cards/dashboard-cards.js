export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    row.classList.add('dashboard-card');

    const cols = [...row.children];
    cols.forEach((col) => {
      // Check for stat pattern: large number followed by label text
      const text = col.textContent.trim();
      const statMatch = text.match(/^([\d,.$%+~>< ]+)\s*\n?\s*(.+)/s);

      if (statMatch) {
        col.classList.add('dashboard-card-stat');

        const statNumber = document.createElement('div');
        statNumber.classList.add('dashboard-card-number');
        statNumber.textContent = statMatch[1].trim();

        const statLabel = document.createElement('div');
        statLabel.classList.add('dashboard-card-label');
        statLabel.textContent = statMatch[2].trim();

        col.textContent = '';
        col.appendChild(statNumber);
        col.appendChild(statLabel);
      }
    });
  });
}
