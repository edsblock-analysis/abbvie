import './PressReleaseCarousel.css';

const prevArrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><polyline points="15 18 9 12 15 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const nextArrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

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

  // Controls row — bottom-right, NOT overlapping
  const controls = document.createElement('div');
  controls.className = 'press-release-carousel-controls';

  const counter = document.createElement('span');
  counter.className = 'press-release-carousel-counter';
  counter.textContent = `1 of ${slides.length}`;

  const updateSlide = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    counter.textContent = `${currentIndex + 1} of ${slides.length}`;
  };

  // Previous arrow
  const prevBtn = document.createElement('button');
  prevBtn.className = 'press-release-carousel-arrow';
  prevBtn.innerHTML = prevArrowSVG;
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateSlide();
  });

  // Next arrow
  const nextBtn = document.createElement('button');
  nextBtn.className = 'press-release-carousel-arrow';
  nextBtn.innerHTML = nextArrowSVG;
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateSlide();
  });

  controls.appendChild(prevBtn);
  controls.appendChild(nextBtn);
  controls.appendChild(counter);

  wrapper.appendChild(controls);

  return wrapper;
};
