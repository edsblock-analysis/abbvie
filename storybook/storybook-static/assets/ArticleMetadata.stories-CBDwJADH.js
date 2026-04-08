import{r as l}from"./reference-DlgtBAY_.js";const p=({date:n,category:r,categoryHref:m="#",readTime:s})=>{const a=document.createElement("div");if(a.className="article-metadata",n){const e=document.createElement("span");e.className="article-metadata-date",e.textContent=n,a.appendChild(e)}if(r){const e=document.createElement("span");e.className="article-metadata-separator",e.textContent="|",a.appendChild(e);const t=document.createElement("a");t.className="article-metadata-category",t.href=m,t.textContent=r,a.appendChild(t)}if(s){const e=document.createElement("span");e.className="article-metadata-separator",e.textContent="|",a.appendChild(e);const t=document.createElement("span");t.className="article-metadata-read-time",t.textContent=s,a.appendChild(t)}return a},h={title:"Components/ArticleMetadata",render:n=>{const r=document.createElement("div");return r.innerHTML=l([{label:"AI Drug Discovery Story",url:"https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html"}]),r.appendChild(p(n)),r},parameters:{docs:{description:{component:`**Production reference:** [AI drug discovery story](https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html)

Article metadata bar showing date, category tag (linked), and reading time. AEM component: storyinfo. Found on 115 story article pages.`}}}},o={args:{date:"September 25, 2024",category:"Science",categoryHref:"/who-we-are/our-stories/science-stories.html",readTime:"6 Minute Read"}};var c,i,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    date: 'September 25, 2024',
    category: 'Science',
    categoryHref: '/who-we-are/our-stories/science-stories.html',
    readTime: '6 Minute Read'
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const g=["Default"];export{o as Default,g as __namedExportsOrder,h as default};
