export default function decorate(block) {
  const rows = [...block.children];
  const track = document.createElement('div');
  track.classList.add('carousel-press-track');
  rows.forEach((row) => {
    row.classList.add('carousel-press-slide');
    track.append(row);
  });
  block.textContent = '';
  block.append(track);
}
