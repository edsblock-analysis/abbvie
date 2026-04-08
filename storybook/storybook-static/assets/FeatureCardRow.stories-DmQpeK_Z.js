import{r as h}from"./reference-DlgtBAY_.js";const _={title:"Components/FeatureCardRow",parameters:{docs:{description:{component:`**Production reference:** [aliada-therapeutics](https://www.abbvie.com/aliada-therapeutics.html), [cerevel](https://www.abbvie.com/cerevel.html), [immunogen](https://www.abbvie.com/immunogen.html)

Side-by-side image + text feature cards on #f1f3ff light blue background. Image has 40px top-left radius. Each card has navy divider, H3 heading, body, outline CTA button. Used on acquisition pages below the hero.`}}}},e=()=>h([{label:"Aliada Therapeutics",url:"https://www.abbvie.com/aliada-therapeutics.html"}])+`
  <div class="feature-card-row">
    <div class="feature-card-row__card">
      <img
        class="feature-card-row__image"
        src="/images/card-guitar.webp"
        alt="Female playing guitar"
      />
      <div class="feature-card-row__content">
        <hr class="feature-card-row__divider" />
        <h3 class="feature-card-row__heading">Neuroscience</h3>
        <p class="feature-card-row__body">
          We're delivering science that takes us closer to meaningful change for people
          with neurological and psychiatric disorders.
        </p>
        <a href="/science/areas-of-focus/neuroscience.html" class="feature-card-row__cta">
          Explore
        </a>
      </div>
    </div>

    <div class="feature-card-row__card">
      <img
        class="feature-card-row__image"
        src="/images/card-whiteboard.webp"
        alt="Two men scientists at whiteboard"
      />
      <div class="feature-card-row__content">
        <hr class="feature-card-row__divider" />
        <h3 class="feature-card-row__heading">A career at AbbVie</h3>
        <p class="feature-card-row__body">
          As one company, our ~55,000 employees around the world focus on discovering and
          delivering transformational medicines and products.
        </p>
        <a href="https://careers.abbvie.com" class="feature-card-row__cta" target="_blank" rel="noopener noreferrer">
          Search Open Jobs
        </a>
      </div>
    </div>

    <div class="feature-card-row__separator"></div>
  </div>
`,a=()=>h([{label:"Cerevel",url:"https://www.abbvie.com/cerevel.html"}])+`
  <div class="feature-card-row" style="padding-bottom: 4rem;">
    <div class="feature-card-row__card">
      <img
        class="feature-card-row__image"
        src="/images/card-science.webp"
        alt="AbbVie scientist in lab"
      />
      <div class="feature-card-row__content">
        <hr class="feature-card-row__divider" />
        <h3 class="feature-card-row__heading">Science at AbbVie</h3>
        <p class="feature-card-row__body">
          We combine advanced science with deep expertise to discover and deliver innovative therapies that
          address some of the world's most complex health issues.
        </p>
        <a href="/science.html" class="feature-card-row__cta">
          Learn More
        </a>
      </div>
    </div>
  </div>
`;var r,s,c,t,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => refBanner([{
  label: 'Aliada Therapeutics',
  url: 'https://www.abbvie.com/aliada-therapeutics.html'
}]) + \`
  <div class="feature-card-row">
    <div class="feature-card-row__card">
      <img
        class="feature-card-row__image"
        src="/images/card-guitar.webp"
        alt="Female playing guitar"
      />
      <div class="feature-card-row__content">
        <hr class="feature-card-row__divider" />
        <h3 class="feature-card-row__heading">Neuroscience</h3>
        <p class="feature-card-row__body">
          We're delivering science that takes us closer to meaningful change for people
          with neurological and psychiatric disorders.
        </p>
        <a href="/science/areas-of-focus/neuroscience.html" class="feature-card-row__cta">
          Explore
        </a>
      </div>
    </div>

    <div class="feature-card-row__card">
      <img
        class="feature-card-row__image"
        src="/images/card-whiteboard.webp"
        alt="Two men scientists at whiteboard"
      />
      <div class="feature-card-row__content">
        <hr class="feature-card-row__divider" />
        <h3 class="feature-card-row__heading">A career at AbbVie</h3>
        <p class="feature-card-row__body">
          As one company, our ~55,000 employees around the world focus on discovering and
          delivering transformational medicines and products.
        </p>
        <a href="https://careers.abbvie.com" class="feature-card-row__cta" target="_blank" rel="noopener noreferrer">
          Search Open Jobs
        </a>
      </div>
    </div>

    <div class="feature-card-row__separator"></div>
  </div>
\``,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source},description:{story:`AcquisitionFeatures — Two feature cards on light blue background.
Matches live site: https://www.abbvie.com/aliada-therapeutics.html
Each card: image (left) + content (right) with divider, H3, body, CTA.`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.description}}};var n,o,d,l,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => refBanner([{
  label: 'Cerevel',
  url: 'https://www.abbvie.com/cerevel.html'
}]) + \`
  <div class="feature-card-row" style="padding-bottom: 4rem;">
    <div class="feature-card-row__card">
      <img
        class="feature-card-row__image"
        src="/images/card-science.webp"
        alt="AbbVie scientist in lab"
      />
      <div class="feature-card-row__content">
        <hr class="feature-card-row__divider" />
        <h3 class="feature-card-row__heading">Science at AbbVie</h3>
        <p class="feature-card-row__body">
          We combine advanced science with deep expertise to discover and deliver innovative therapies that
          address some of the world's most complex health issues.
        </p>
        <a href="/science.html" class="feature-card-row__cta">
          Learn More
        </a>
      </div>
    </div>
  </div>
\``,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source},description:{story:"SingleFeatureCard — Just one feature card (reusable pattern).",...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};const p=["AcquisitionFeatures","SingleFeatureCard"];export{e as AcquisitionFeatures,a as SingleFeatureCard,p as __namedExportsOrder,_ as default};
