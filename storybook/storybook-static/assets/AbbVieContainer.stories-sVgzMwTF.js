import{r as n}from"./reference-DlgtBAY_.js";const B={title:"Components/AbbVieContainer",parameters:{docs:{description:{component:`**Production reference:** [all pages](https://www.abbvie.com/) (abbvie.com)

Primary layout wrapper used on 318/321 pages. Applies border-radius (top-left only), size constraints, and height to content sections.`}}}},e=()=>`
  ${n([{label:"All Pages",url:"https://www.abbvie.com/"}])}
  <div class="abbvie-container abbvie-container--default-radius abbvie-container--large">
    <div class="abbvie-container__inner" style="background:#f1f3ff; padding-bottom:40px;">
      <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:32px; color:#071d49; margin:0 0 16px;">Section Heading</h2>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49; max-width:640px;">
        This container uses the default 24px top-left border-radius. It is the most common layout wrapper on the site, appearing on nearly every page.
      </p>
    </div>
  </div>
`,a=()=>`
  ${n([{label:"All Pages",url:"https://www.abbvie.com/"}])}
  <div class="abbvie-container abbvie-container--medium-radius abbvie-container--large">
    <div class="abbvie-container__inner" style="background:#071d49; padding-bottom:40px;">
      <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:32px; color:#fff; margin:0 0 16px;">Medium Radius Section</h2>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#fff; max-width:640px;">
        This container uses the medium 40px top-left border-radius, creating a more pronounced curve at the top-left corner.
      </p>
    </div>
  </div>
`,o=()=>`
  ${n([{label:"All Pages",url:"https://www.abbvie.com/"}])}
  <div class="abbvie-container abbvie-container--large-radius abbvie-container--xx-large">
    <div class="abbvie-container__inner" style="background:linear-gradient(135deg, #071d49 0%, #0d3a8f 100%); padding-bottom:60px;">
      <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:40px; color:#fff; margin:0 0 16px;">Large Radius with Background</h2>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#fff; max-width:640px;">
        This container uses the large 64px top-left border-radius. Often paired with background imagery or gradients for hero-adjacent sections.
      </p>
    </div>
  </div>
`,i=()=>`
  ${n([{label:"Homepage",url:"https://www.abbvie.com/"}])}
  <div style="background:#071d49; padding:60px 55px 140px;">
    <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:40px; color:#fff; margin:0;">Hero Area</h2>
  </div>
  <div class="abbvie-container abbvie-container--overlap abbvie-container--default-radius abbvie-container--large">
    <div class="abbvie-container__inner" style="background:#fff; padding-bottom:40px; box-shadow:0 4px 16px rgba(0,0,0,0.08);">
      <h3 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:24px; color:#071d49; margin:0 0 12px;">Press Releases</h3>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49;">
        This container uses margin-top: -112px to overlap the hero section above, creating a layered visual effect commonly seen with press release listings.
      </p>
    </div>
  </div>
`;var r,t,s,l,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => \`
  \${refBanner([{
  label: 'All Pages',
  url: 'https://www.abbvie.com/'
}])}
  <div class="abbvie-container abbvie-container--default-radius abbvie-container--large">
    <div class="abbvie-container__inner" style="background:#f1f3ff; padding-bottom:40px;">
      <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:32px; color:#071d49; margin:0 0 16px;">Section Heading</h2>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49; max-width:640px;">
        This container uses the default 24px top-left border-radius. It is the most common layout wrapper on the site, appearing on nearly every page.
      </p>
    </div>
  </div>
\``,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source},description:{story:`DefaultRadius — Container with the standard 24px top-left border-radius.
The most common variant across the site.`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};var d,p,f,b,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => \`
  \${refBanner([{
  label: 'All Pages',
  url: 'https://www.abbvie.com/'
}])}
  <div class="abbvie-container abbvie-container--medium-radius abbvie-container--large">
    <div class="abbvie-container__inner" style="background:#071d49; padding-bottom:40px;">
      <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:32px; color:#fff; margin:0 0 16px;">Medium Radius Section</h2>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#fff; max-width:640px;">
        This container uses the medium 40px top-left border-radius, creating a more pronounced curve at the top-left corner.
      </p>
    </div>
  </div>
\``,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source},description:{story:`MediumRadius — Container with the 40px top-left border-radius.
Used for sections that need a slightly more pronounced curve.`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.description}}};var m,g,v,h,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => \`
  \${refBanner([{
  label: 'All Pages',
  url: 'https://www.abbvie.com/'
}])}
  <div class="abbvie-container abbvie-container--large-radius abbvie-container--xx-large">
    <div class="abbvie-container__inner" style="background:linear-gradient(135deg, #071d49 0%, #0d3a8f 100%); padding-bottom:60px;">
      <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:40px; color:#fff; margin:0 0 16px;">Large Radius with Background</h2>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#fff; max-width:640px;">
        This container uses the large 64px top-left border-radius. Often paired with background imagery or gradients for hero-adjacent sections.
      </p>
    </div>
  </div>
\``,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:`LargeRadius — Container with the 64px top-left border-radius.
Used for hero-adjacent sections and feature areas with background imagery.`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var y,w,R,k,z;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => \`
  \${refBanner([{
  label: 'Homepage',
  url: 'https://www.abbvie.com/'
}])}
  <div style="background:#071d49; padding:60px 55px 140px;">
    <h2 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:40px; color:#fff; margin:0;">Hero Area</h2>
  </div>
  <div class="abbvie-container abbvie-container--overlap abbvie-container--default-radius abbvie-container--large">
    <div class="abbvie-container__inner" style="background:#fff; padding-bottom:40px; box-shadow:0 4px 16px rgba(0,0,0,0.08);">
      <h3 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:24px; color:#071d49; margin:0 0 12px;">Press Releases</h3>
      <p style="font-family:'Roboto Regular',Roboto,sans-serif; font-size:16px; line-height:22px; color:#071d49;">
        This container uses margin-top: -112px to overlap the hero section above, creating a layered visual effect commonly seen with press release listings.
      </p>
    </div>
  </div>
\``,...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source},description:{story:`OverlapContainer — Negative margin overlap showing how content sections
can overlap the hero banner above them (e.g., press release lists).`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};const H=["DefaultRadius","MediumRadius","LargeRadius","OverlapContainer"];export{e as DefaultRadius,o as LargeRadius,a as MediumRadius,i as OverlapContainer,H as __namedExportsOrder,B as default};
