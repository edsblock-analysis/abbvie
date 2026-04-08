import{r as o}from"./reference-DlgtBAY_.js";const p={title:"Components/StatCounter",parameters:{docs:{description:{component:`**Production reference:** [homepage](https://www.abbvie.com/) (75+ conditions treated, ~57k employees), [science](https://www.abbvie.com/science.html) (90+ compounds, ~50 NMEs, 9 R&D centers, etc.), [sustainability](https://www.abbvie.com/sustainability.html) (32% GHG reduction)

Large numerical display with prefix/suffix and label. InlineStat: single metric. GridStats: row of 6 metrics. AEM component: dashboardcards (fact variant).`}}}},s={render:()=>o([{label:"Homepage",url:"https://www.abbvie.com/"}])+`
    <div class="stat-counter">
      <div>
        <span class="stat-counter__number">75</span><span class="stat-counter__suffix">+</span>
      </div>
      <p class="stat-counter__label">Conditions treated across our portfolio</p>
    </div>
  `},t={render:()=>o([{label:"Science",url:"https://www.abbvie.com/science.html"}])+`
    <div class="stat-counter-grid">
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">90</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Compounds in pipeline</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__prefix">~</span><span class="stat-counter__number">50</span>
        </div>
        <p class="stat-counter__label">New molecular entities</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">9</span>
        </div>
        <p class="stat-counter__label">R&amp;D centers globally</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">75</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Conditions treated</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">375</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Active clinical trials</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__prefix">$</span><span class="stat-counter__number">10.8</span><span class="stat-counter__suffix">B</span>
        </div>
        <p class="stat-counter__label">Invested in R&amp;D</p>
      </div>
    </div>
  `};var a,n,e;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => refBanner([{
    label: 'Homepage',
    url: 'https://www.abbvie.com/'
  }]) + \`
    <div class="stat-counter">
      <div>
        <span class="stat-counter__number">75</span><span class="stat-counter__suffix">+</span>
      </div>
      <p class="stat-counter__label">Conditions treated across our portfolio</p>
    </div>
  \`
}`,...(e=(n=s.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};var c,r,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => refBanner([{
    label: 'Science',
    url: 'https://www.abbvie.com/science.html'
  }]) + \`
    <div class="stat-counter-grid">
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">90</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Compounds in pipeline</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__prefix">~</span><span class="stat-counter__number">50</span>
        </div>
        <p class="stat-counter__label">New molecular entities</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">9</span>
        </div>
        <p class="stat-counter__label">R&amp;D centers globally</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">75</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Conditions treated</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">375</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Active clinical trials</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__prefix">$</span><span class="stat-counter__number">10.8</span><span class="stat-counter__suffix">B</span>
        </div>
        <p class="stat-counter__label">Invested in R&amp;D</p>
      </div>
    </div>
  \`
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const u=["InlineStat","GridStats"];export{t as GridStats,s as InlineStat,u as __namedExportsOrder,p as default};
