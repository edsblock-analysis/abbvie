import{r as i}from"./reference-DlgtBAY_.js";const b={title:"Components/CTABlock",parameters:{docs:{description:{component:`**Production reference:** [homepage](https://www.abbvie.com/) (Explore Opportunities section), [science](https://www.abbvie.com/science.html) (Explore R&D Opportunities)

Call-to-action block with heading, body, and button. CenteredCTA: text-only centered. CTAWithImage: side-by-side image + text. Wrapped in abbvie-container medium-radius on live site.`}}}},e={render:()=>i([{label:"Homepage",url:"https://www.abbvie.com/"}])+`
    <div class="cta-block">
      <h2 class="cta-block__heading">Explore Opportunities</h2>
      <p class="cta-block__body">
        Join a team that's driven to make a remarkable impact on patients' lives.
        At AbbVie, your work matters—discover roles where you can grow your
        career while advancing transformative science.
      </p>
      <a href="#" class="cta-block__button">Browse Jobs</a>
    </div>
  `},a={render:()=>i([{label:"Science",url:"https://www.abbvie.com/science.html"}])+`
    <div class="cta-block cta-block--with-image">
      <img
        class="cta-block__image"
        src="/images/culture-conference.webp"
        alt="AbbVie professionals collaborating in a conference room"
      />
      <div class="cta-block__content">
        <h2 class="cta-block__heading">Partner with Us</h2>
        <p class="cta-block__body">
          We believe the best breakthroughs happen through collaboration.
          Whether you're in academia, biotech, or healthcare, let's work
          together to bring the next generation of therapies to patients.
        </p>
        <a href="#" class="cta-block__button">Learn More</a>
      </div>
    </div>
  `};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => refBanner([{
    label: 'Homepage',
    url: 'https://www.abbvie.com/'
  }]) + \`
    <div class="cta-block">
      <h2 class="cta-block__heading">Explore Opportunities</h2>
      <p class="cta-block__body">
        Join a team that's driven to make a remarkable impact on patients' lives.
        At AbbVie, your work matters—discover roles where you can grow your
        career while advancing transformative science.
      </p>
      <a href="#" class="cta-block__button">Browse Jobs</a>
    </div>
  \`
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,c,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => refBanner([{
    label: 'Science',
    url: 'https://www.abbvie.com/science.html'
  }]) + \`
    <div class="cta-block cta-block--with-image">
      <img
        class="cta-block__image"
        src="/images/culture-conference.webp"
        alt="AbbVie professionals collaborating in a conference room"
      />
      <div class="cta-block__content">
        <h2 class="cta-block__heading">Partner with Us</h2>
        <p class="cta-block__body">
          We believe the best breakthroughs happen through collaboration.
          Whether you're in academia, biotech, or healthcare, let's work
          together to bring the next generation of therapies to patients.
        </p>
        <a href="#" class="cta-block__button">Learn More</a>
      </div>
    </div>
  \`
}`,...(s=(c=a.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const h=["CenteredCTA","CTAWithImage"];export{a as CTAWithImage,e as CenteredCTA,h as __namedExportsOrder,b as default};
