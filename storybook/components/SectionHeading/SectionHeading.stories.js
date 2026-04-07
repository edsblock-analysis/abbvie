import styles from './SectionHeading.css?inline';

export default {
  title: 'Components/SectionHeading',
};

const wrap = (html) => `<style>${styles}</style>${html}`;

export const WithLabel = {
  render: () =>
    wrap(`
    <div class="section-heading">
      <p class="section-heading__label">Our Approach</p>
      <h2 class="section-heading__headline">Science-Driven Innovation</h2>
      <p class="section-heading__body">
        We leverage cutting-edge science and data to develop breakthrough therapies
        that transform the standard of care across key therapeutic areas.
      </p>
    </div>
  `),
};

export const Simple = {
  render: () =>
    wrap(`
    <div class="section-heading section-heading--small">
      <h2 class="section-heading__headline">Therapeutic Areas</h2>
      <p class="section-heading__body">
        Explore the conditions and diseases where we are making a meaningful
        difference in patients' lives.
      </p>
    </div>
  `),
};
