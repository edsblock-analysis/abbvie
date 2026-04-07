import styles from './PullQuote.css?inline';

export default {
  title: 'Components/PullQuote',
};

const wrap = (html) => `<style>${styles}</style>${html}`;

export const WithHeadshot = {
  render: () =>
    wrap(`
    <blockquote class="pull-quote">
      <p class="pull-quote__text">
        "AbbVie's commitment to innovation has fundamentally changed the way we
        approach treatment for patients with chronic conditions."
      </p>
      <div class="pull-quote__attribution">
        <img
          class="pull-quote__headshot"
          src="https://scene7.abbvie.com/is/image/abbvie/headshot-placeholder?fmt=webp&wid=160"
          alt="Dr. Jane Smith"
        />
        <div class="pull-quote__author-info">
          <p class="pull-quote__name">Dr. Jane Smith</p>
          <p class="pull-quote__title">Chief Medical Officer</p>
        </div>
      </div>
    </blockquote>
  `),
};

export const Testimonial = {
  render: () =>
    wrap(`
    <blockquote class="pull-quote">
      <p class="pull-quote__text">
        "Thanks to their dedication to research, my quality of life has improved
        in ways I never thought possible."
      </p>
      <div class="pull-quote__attribution">
        <div class="pull-quote__author-info">
          <p class="pull-quote__name">Michael R.</p>
          <p class="pull-quote__title">Patient Advocate</p>
        </div>
      </div>
    </blockquote>
  `),
};
