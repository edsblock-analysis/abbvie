import './PressReleaseCarousel.css';

export const PressReleaseCarousel = ({ slides = [] }) => {
  let currentIndex = 0;

  const wrapper = document.createElement('div');
  wrapper.className = 'press-release-carousel';

  const track = document.createElement('div');
  track.className = 'press-release-carousel-track';

  slides.forEach((slide) => {
    const slideEl = document.createElement('div');
    slideEl.className = 'press-release-carousel-slide';

    const date = document.createElement('p');
    date.className = 'press-release-carousel-date';
    date.textContent = slide.date;
    slideEl.appendChild(date);

    const headline = document.createElement('h3');
    headline.className = 'press-release-carousel-headline';
    headline.textContent = slide.headline;
    slideEl.appendChild(headline);

    const link = document.createElement('a');
    link.className = 'press-release-carousel-link';
    link.href = slide.href || '#';
    link.textContent = 'Read More';
    slideEl.appendChild(link);

    track.appendChild(slideEl);
  });

  wrapper.appendChild(track);

  const updateSlide = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.className = i === currentIndex
        ? 'press-release-carousel-dot press-release-carousel-dot--active'
        : 'press-release-carousel-dot';
    });
  };

  // Previous arrow
  const prevBtn = document.createElement('button');
  prevBtn.className = 'press-release-carousel-arrow press-release-carousel-arrow--prev';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateSlide();
  });
  wrapper.appendChild(prevBtn);

  // Next arrow
  const nextBtn = document.createElement('button');
  nextBtn.className = 'press-release-carousel-arrow press-release-carousel-arrow--next';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateSlide();
  });
  wrapper.appendChild(nextBtn);

  // Dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'press-release-carousel-dots';
  const dots = [];

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = i === 0
      ? 'press-release-carousel-dot press-release-carousel-dot--active'
      : 'press-release-carousel-dot';
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlide();
    });
    dots.push(dot);
    dotsContainer.appendChild(dot);
  });

  wrapper.appendChild(dotsContainer);

  return wrapper;
};
