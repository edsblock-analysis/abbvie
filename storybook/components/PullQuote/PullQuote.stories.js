import './PullQuote.css';

export default {
  title: 'Components/PullQuote',
};

export const WithHeadshot = {
  render: () => `
    <blockquote class="pull-quote">
      <p class="pull-quote__text">
        "Our ability to integrate computational chemistry with high-throughput
        screening has fundamentally changed the speed and precision of drug
        discovery at AbbVie."
      </p>
      <div class="pull-quote__attribution">
        <img
          class="pull-quote__headshot"
          src="https://abbvie.scene7.com/is/image/abbviecorp/phil-hajduk-headshot-1?fmt=webp"
          alt="Phil Hajduk, Ph.D."
        />
        <div class="pull-quote__author-info">
          <p class="pull-quote__name">Phil Hajduk, Ph.D.</p>
          <p class="pull-quote__title">Vice President, IT Information Research, AbbVie</p>
        </div>
      </div>
    </blockquote>
  `,
};

export const Testimonial = {
  render: () => `
    <blockquote class="pull-quote">
      <p class="pull-quote__text">
        "What drew me to AbbVie was the culture of ownership—everyone here
        genuinely cares about the impact of their work. I've grown more in
        three years than I thought possible, surrounded by people who push
        each other to do meaningful science."
      </p>
      <div class="pull-quote__attribution">
        <div class="pull-quote__author-info">
          <p class="pull-quote__name">Sarah M.</p>
          <p class="pull-quote__title">Senior Research Scientist, AbbVie</p>
        </div>
      </div>
    </blockquote>
  `,
};
