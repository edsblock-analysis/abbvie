import{r as b}from"./reference-DlgtBAY_.js";const s=({items:r=[]})=>{const e=document.createElement("nav");e.className="breadcrumb",e.setAttribute("aria-label","Breadcrumb");const c=document.createElement("ol");return r.forEach((o,w)=>{const l=document.createElement("li");if(w===r.length-1){const a=document.createElement("span");a.className="breadcrumb-current",a.setAttribute("aria-current","page"),a.textContent=o.label,l.appendChild(a)}else{const a=document.createElement("a");a.href=o.href||"#",a.textContent=o.label,l.appendChild(a)}c.appendChild(l)}),e.appendChild(c),e},f={title:"Components/Breadcrumb",render:r=>s(r),parameters:{docs:{description:{component:`**Production reference:** [robert-michael](https://www.abbvie.com/who-we-are/our-leaders/robert-michael.html) (multi-level: Who We Are > Our Leaders > Robert A. Michael), [available-programs](https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html) (4-level breadcrumb)

Hierarchical path navigation. Found on 158 pages. AEM component: breadcrumb abbvie-breadcrumb.`}}}},t={args:{items:[{label:"Who We Are",href:"/who-we-are.html"},{label:"Our Leaders",href:"/who-we-are/our-leaders.html"},{label:"Robert A. Michael"}]},render:r=>{const e=document.createElement("div");return e.innerHTML=b([{label:"Robert Michael Bio",url:"https://www.abbvie.com/who-we-are/our-leaders/robert-michael.html"}]),e.appendChild(s(r)),e}},n={args:{items:[{label:"All Stories",href:"/who-we-are/our-stories.html"}]},render:r=>{const e=document.createElement("div");return e.innerHTML=b([{label:"Our Stories",url:"https://www.abbvie.com/who-we-are/our-stories.html"}]),e.appendChild(s(r)),e}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Who We Are',
      href: '/who-we-are.html'
    }, {
      label: 'Our Leaders',
      href: '/who-we-are/our-leaders.html'
    }, {
      label: 'Robert A. Michael'
    }]
  },
  render: args => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = refBanner([{
      label: 'Robert Michael Bio',
      url: 'https://www.abbvie.com/who-we-are/our-leaders/robert-michael.html'
    }]);
    wrapper.appendChild(Breadcrumb(args));
    return wrapper;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,h,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'All Stories',
      href: '/who-we-are/our-stories.html'
    }]
  },
  render: args => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = refBanner([{
      label: 'Our Stories',
      url: 'https://www.abbvie.com/who-we-are/our-stories.html'
    }]);
    wrapper.appendChild(Breadcrumb(args));
    return wrapper;
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const L=["MultiLevel","SingleLevel"];export{t as MultiLevel,n as SingleLevel,L as __namedExportsOrder,f as default};
