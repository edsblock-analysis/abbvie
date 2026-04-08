import{r as v}from"./reference-DlgtBAY_.js";const m={title:"Components/Separator",parameters:{docs:{description:{component:`**Production reference:** [all pages](https://www.abbvie.com/) (abbvie.com)

Spacing and divider element used on 318/321 pages with 12 different height variants. Available as a visible divider line or invisible spacer.`}}}},b=[1,8,16,24,32,48,64,80,96,112,128,144],e=()=>`
  ${v([{label:"All Pages",url:"https://www.abbvie.com/"}])}
  <div style="max-width:600px;">
    ${b.map(t=>`
      <div style="display:flex; align-items:center; gap:16px; margin-bottom:8px;">
        <span style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:14px; color:#666b7a; min-width:80px; text-align:right;">h${t} (${t}px)</span>
        <div style="flex:1; background:#f1f3ff; border:1px solid #a6b5e0;">
          <div class="separator separator--spacer separator--h${t}"></div>
        </div>
      </div>
    `).join("")}
  </div>
`,i=()=>`
  ${v([{label:"All Pages",url:"https://www.abbvie.com/"}])}
  <div style="max-width:600px;">
    <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49;">
      Content above the divider line.
    </p>
    <div class="separator separator--divider separator--h1"></div>
    <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49;">
      Content below the divider line. The divider is a 1px solid #e0e0e0 border-top.
    </p>
  </div>
`;var a,o,s,r,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => \`
  \${refBanner([{
  label: 'All Pages',
  url: 'https://www.abbvie.com/'
}])}
  <div style="max-width:600px;">
    \${heights.map(h => \`
      <div style="display:flex; align-items:center; gap:16px; margin-bottom:8px;">
        <span style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:14px; color:#666b7a; min-width:80px; text-align:right;">h\${h} (\${h}px)</span>
        <div style="flex:1; background:#f1f3ff; border:1px solid #a6b5e0;">
          <div class="separator separator--spacer separator--h\${h}"></div>
        </div>
      </div>
    \`).join('')}
  </div>
\``,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source},description:{story:`AllHeights — All 12 separator height variants stacked with labels.
Each separator is shown as a spacer with a visible background to illustrate the height.`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.description}}};var l,p,d,c,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => \`
  \${refBanner([{
  label: 'All Pages',
  url: 'https://www.abbvie.com/'
}])}
  <div style="max-width:600px;">
    <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49;">
      Content above the divider line.
    </p>
    <div class="separator separator--divider separator--h1"></div>
    <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49;">
      Content below the divider line. The divider is a 1px solid #e0e0e0 border-top.
    </p>
  </div>
\``,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:`DividerLine — The visible 1px divider line variant.
Used as a content separator between sections.`,...(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.description}}};const g=["AllHeights","DividerLine"];export{e as AllHeights,i as DividerLine,g as __namedExportsOrder,m as default};
