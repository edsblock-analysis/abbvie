import './PullQuote.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/PullQuote',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [AI drug discovery story](https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html) (WithHeadshot — Phil Hajduk quote), [join-us](https://www.abbvie.com/join-us.html) (Testimonial — employee quote)\n\nBlockquote with blue left border. WithHeadshot: includes circular headshot + name + title. Testimonial: text only with attribution. AEM component: quote. Found on 108 pages.',
      },
    },
  },
};

export const WithHeadshot = {
  render: () => refBanner([{label:'AI Drug Discovery Story',url:'https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html'}]) + `
    <blockquote class="pull-quote">
      <p class="pull-quote__text">
        "Our ability to integrate AI and machine learning into our research
        pipeline is accelerating drug discovery in ways we couldn't have
        imagined just a few years ago."
      </p>
      <div class="pull-quote__attribution">
        <img
          class="pull-quote__headshot"
          src="/images/headshot-phil-hajduk.webp"
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
  render: () => refBanner([{label:'Join Us',url:'https://www.abbvie.com/join-us.html'}]) + `
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

export const DarkTheme = {
  render: () => refBanner([{label:'Join Us',url:'https://www.abbvie.com/join-us.html'}]) + `
    <div style="background:#071d49; padding:6.4rem 4rem;">
      <blockquote class="pull-quote pull-quote--dark">
        <p class="pull-quote__text" style="color:#ffffff;">
          "At AbbVie, I found a place where I can truly make a difference — not just for patients, but for the communities we serve around the world."
        </p>
        <div class="pull-quote__attribution" style="margin-top:2.4rem;">
          <div class="pull-quote__author-info">
            <p class="pull-quote__name" style="color:#ffffff;">Jody Alde</p>
            <p class="pull-quote__title" style="color:rgba(255,255,255,0.7);">Vice President, Operations</p>
          </div>
        </div>
      </blockquote>
    </div>
  `,
};
