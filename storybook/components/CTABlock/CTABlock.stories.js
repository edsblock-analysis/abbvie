import styles from './CTABlock.css?inline';

export default {
  title: 'Components/CTABlock',
};

const wrap = (html) => `<style>${styles}</style>${html}`;

export const CenteredCTA = {
  render: () =>
    wrap(`
    <div class="cta-block">
      <h2 class="cta-block__heading">Ready to Make a Difference?</h2>
      <p class="cta-block__body">
        Join us in our mission to discover and deliver innovative medicines that
        solve serious health issues.
      </p>
      <a href="#" class="cta-block__button">Explore Careers</a>
    </div>
  `),
};

export const CTAWithImage = {
  render: () =>
    wrap(`
    <div class="cta-block cta-block--with-image">
      <img
        class="cta-block__image"
        src="https://scene7.abbvie.com/is/image/abbvie/cta-placeholder?fmt=webp&wid=800"
        alt="Researcher in lab"
      />
      <div class="cta-block__content">
        <h2 class="cta-block__heading">Partner With Us</h2>
        <p class="cta-block__body">
          Collaborate with our world-class researchers to advance the next
          generation of therapies.
        </p>
        <a href="#" class="cta-block__button">Get in Touch</a>
      </div>
    </div>
  `),
};
