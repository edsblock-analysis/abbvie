import{r}from"./reference-DlgtBAY_.js";const d={title:"Components/SectionHeading",parameters:{docs:{description:{component:`**Production reference:** [homepage](https://www.abbvie.com/) (Science & Innovation section, Culture of Curiosity section, Investor Resources section, ESG section)

Section header with optional uppercase label, H2/H3 headline, and body text. AEM component: teaser (heading-only config). WithLabel adds colored eyebrow above headline. Simple variant uses --small modifier.`}}}},e={render:()=>r([{label:"Homepage (Science & Innovation)",url:"https://www.abbvie.com/"}])+`
    <div class="section-heading">
      <p class="section-heading__label">SCIENCE &amp; INNOVATION</p>
      <h2 class="section-heading__headline">We solve the tough challenges.</h2>
      <p class="section-heading__body">
        Working alongside patients, physicians, and researchers, we pursue the
        most complex health challenges with rigor and compassion—turning bold
        science into real solutions that improve lives.
      </p>
    </div>
  `},n={render:()=>r([{label:"Science Areas",url:"https://www.abbvie.com/science/areas-of-focus.html"}])+`
    <div class="section-heading section-heading--small">
      <h2 class="section-heading__headline">Areas of Focus</h2>
      <p class="section-heading__body">
        From immunology and oncology to neuroscience and eye care, we
        concentrate our expertise in therapeutic areas where we can make the
        greatest difference for patients worldwide.
      </p>
    </div>
  `};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => refBanner([{
    label: 'Homepage (Science & Innovation)',
    url: 'https://www.abbvie.com/'
  }]) + \`
    <div class="section-heading">
      <p class="section-heading__label">SCIENCE &amp; INNOVATION</p>
      <h2 class="section-heading__headline">We solve the tough challenges.</h2>
      <p class="section-heading__body">
        Working alongside patients, physicians, and researchers, we pursue the
        most complex health challenges with rigor and compassion—turning bold
        science into real solutions that improve lives.
      </p>
    </div>
  \`
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,t,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => refBanner([{
    label: 'Science Areas',
    url: 'https://www.abbvie.com/science/areas-of-focus.html'
  }]) + \`
    <div class="section-heading section-heading--small">
      <h2 class="section-heading__headline">Areas of Focus</h2>
      <p class="section-heading__body">
        From immunology and oncology to neuroscience and eye care, we
        concentrate our expertise in therapeutic areas where we can make the
        greatest difference for patients worldwide.
      </p>
    </div>
  \`
}`,...(c=(t=n.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const h=["WithLabel","Simple"];export{n as Simple,e as WithLabel,h as __namedExportsOrder,d as default};
