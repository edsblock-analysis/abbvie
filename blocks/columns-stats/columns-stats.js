export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-stats-${cols.length}-cols`);
  cols.forEach((col) => {
    col.classList.add('columns-stats-col');
    const pic = col.querySelector('picture');
    if (pic) {
      const picWrapper = pic.closest('div');
      if (picWrapper && picWrapper.children.length === 1) {
        picWrapper.classList.add('columns-stats-img-col');
      }
    }
  });
}
