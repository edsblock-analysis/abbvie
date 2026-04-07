import './SectionHeading.css';

export default {
  title: 'Components/SectionHeading',
};

export const WithLabel = {
  render: () => `
    <div class="section-heading">
      <p class="section-heading__label">SCIENCE &amp; INNOVATION</p>
      <h2 class="section-heading__headline">We solve the tough challenges.</h2>
      <p class="section-heading__body">
        Working alongside patients, physicians, and researchers, we pursue the
        most complex health challenges with rigor and compassion—turning bold
        science into real solutions that improve lives.
      </p>
    </div>
  `,
};

export const Simple = {
  render: () => `
    <div class="section-heading section-heading--small">
      <h2 class="section-heading__headline">Areas of Focus</h2>
      <p class="section-heading__body">
        From immunology and oncology to neuroscience and eye care, we
        concentrate our expertise in therapeutic areas where we can make the
        greatest difference for patients worldwide.
      </p>
    </div>
  `,
};
