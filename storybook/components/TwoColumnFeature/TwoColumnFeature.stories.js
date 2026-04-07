import styles from './TwoColumnFeature.css?inline';

export default {
  title: 'Components/TwoColumnFeature',
};

const wrap = (html) => `<style>${styles}</style>${html}`;

export const ImageLeft = {
  render: () =>
    wrap(`
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper">
        <img
          src="https://scene7.abbvie.com/is/image/abbvie/two-col-placeholder?fmt=webp&wid=800"
          alt="Feature image"
        />
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Advancing Science to Transform Lives</h2>
        <p class="two-column-feature__body">
          We combine advanced science with deep expertise to design and deliver
          innovative therapies that address some of the world's most complex health issues.
        </p>
        <a href="#" class="two-column-feature__cta">Learn More</a>
      </div>
    </div>
  `),
};

export const ImageRight = {
  render: () =>
    wrap(`
    <div class="two-column-feature two-column-feature--reversed">
      <div class="two-column-feature__image-wrapper">
        <img
          src="https://scene7.abbvie.com/is/image/abbvie/two-col-placeholder-alt?fmt=webp&wid=800"
          alt="Feature image"
        />
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Our Commitment to Patients</h2>
        <p class="two-column-feature__body">
          From discovery through delivery, we work tirelessly to bring new solutions
          to patients around the world.
        </p>
        <a href="#" class="two-column-feature__cta">Discover Our Pipeline</a>
      </div>
    </div>
  `),
};

export const VideoLeft = {
  render: () =>
    wrap(`
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper">
        <video
          src="https://scene7.abbvie.com/is/content/abbvie/video-placeholder.mp4"
          autoplay
          muted
          loop
          playsinline
        ></video>
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">See the Impact We Make</h2>
        <p class="two-column-feature__body">
          Watch how our research and innovation are helping people live healthier
          lives every day.
        </p>
        <a href="#" class="two-column-feature__cta">Watch Video</a>
      </div>
    </div>
  `),
};
