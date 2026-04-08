export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    let imageCol = null;
    let textCol = null;
    let imageFirst = false;

    cols.forEach((col, index) => {
      if (col.querySelector('picture') && !imageCol) {
        imageCol = col;
        imageFirst = index === 0;
      } else {
        textCol = col;
      }
    });

    if (imageCol) {
      imageCol.classList.add('image-positioned-image');
    }
    if (textCol) {
      textCol.classList.add('image-positioned-text');
    }

    // Add position class based on image location
    if (imageFirst) {
      row.classList.add('image-positioned-left');
    } else {
      row.classList.add('image-positioned-right');
    }
  });
}
