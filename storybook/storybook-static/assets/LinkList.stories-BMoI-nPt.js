import{r as b}from"./reference-DlgtBAY_.js";const l=({heading:n,links:e=[]})=>{const a=document.createElement("div");if(a.className="link-list",n){const t=document.createElement("h3");t.className="link-list-heading",t.textContent=n,a.appendChild(t)}const o=document.createElement("ul");return e.forEach(t=>{const c=document.createElement("li"),r=document.createElement("a");r.href=t.href||"#",r.textContent=t.label,t.external&&(r.target="_blank",r.rel="noopener noreferrer"),c.appendChild(r),o.appendChild(c)}),a.appendChild(o),a},v={title:"Components/LinkList",parameters:{docs:{description:{component:`**Production reference:** [homepage](https://www.abbvie.com/) (ESG Quick Links section, Investor Resources links), [available-programs](https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html) (related topics)

Grouped list of links. QuickLinks: with heading + external link indicators. TopicsList: simple list, no heading.`}}},render:n=>l(n)},i={render:n=>{const e=document.createElement("div");return e.innerHTML=b([{label:"Homepage ESG Section",url:"https://www.abbvie.com/"}]),e.appendChild(l(n)),e},args:{heading:"AbbVie's Positions & Views",links:[{label:"Our Environmental Stewardship",href:"https://www.abbvie.com/sustainability/environment.html",external:!0},{label:"Pricing and Access of Our Innovative Medicines",href:"https://www.abbvie.com/patients/pricing-and-access.html",external:!0},{label:"AbbVie's Code of Conduct",href:"https://www.abbvie.com/who-we-are/code-of-conduct.html",external:!0}]}},s={render:n=>{const e=document.createElement("div");return e.innerHTML=b([{label:"Patient Assistance",url:"https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html"}]),e.appendChild(l(n)),e},args:{links:[{label:"Pipeline",href:"/science/pipeline.html"},{label:"Products",href:"/science/products.html"},{label:"Partner with Us",href:"/science/partner-with-us.html"},{label:"Patient Support",href:"/patients/patient-support.html"}]}};var p,d,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const w = document.createElement('div');
    w.innerHTML = refBanner([{
      label: 'Homepage ESG Section',
      url: 'https://www.abbvie.com/'
    }]);
    w.appendChild(LinkList(args));
    return w;
  },
  args: {
    heading: "AbbVie's Positions & Views",
    links: [{
      label: 'Our Environmental Stewardship',
      href: 'https://www.abbvie.com/sustainability/environment.html',
      external: true
    }, {
      label: 'Pricing and Access of Our Innovative Medicines',
      href: 'https://www.abbvie.com/patients/pricing-and-access.html',
      external: true
    }, {
      label: "AbbVie's Code of Conduct",
      href: 'https://www.abbvie.com/who-we-are/code-of-conduct.html',
      external: true
    }]
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const w = document.createElement('div');
    w.innerHTML = refBanner([{
      label: 'Patient Assistance',
      url: 'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html'
    }]);
    w.appendChild(LinkList(args));
    return w;
  },
  args: {
    links: [{
      label: 'Pipeline',
      href: '/science/pipeline.html'
    }, {
      label: 'Products',
      href: '/science/products.html'
    }, {
      label: 'Partner with Us',
      href: '/science/partner-with-us.html'
    }, {
      label: 'Patient Support',
      href: '/patients/patient-support.html'
    }]
  }
}`,...(w=(u=s.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const g=["QuickLinks","TopicsList"];export{i as QuickLinks,s as TopicsList,g as __namedExportsOrder,v as default};
