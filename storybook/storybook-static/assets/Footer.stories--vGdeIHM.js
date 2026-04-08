import{r as S}from"./reference-DlgtBAY_.js";const C=({logoText:i="Company",logoSrc:l,sections:v=[],socialLinks:b=[],legalLinks:y=[],copyright:p})=>{const o=document.createElement("footer");o.className="footer";const r=document.createElement("div");if(r.className="footer-logo",l){const e=document.createElement("img");e.className="footer-logo-image",e.src=l,e.alt=i||"Logo",r.appendChild(e)}else{const e=document.createElement("span");e.className="footer-logo-placeholder",e.textContent=i,r.appendChild(e)}o.appendChild(r);const h=document.createElement("div");if(h.className="footer-grid",v.forEach(e=>{const n=document.createElement("div");n.className="footer-section";const t=document.createElement("h4");t.className="footer-section-heading",t.textContent=e.heading,n.appendChild(t);const a=document.createElement("ul");e.links.forEach(f=>{const u=document.createElement("li"),m=document.createElement("a");m.href=f.href||"#",m.textContent=f.label,u.appendChild(m),a.appendChild(u)}),n.appendChild(a),h.appendChild(n)}),o.appendChild(h),b.length>0){const e=document.createElement("div");e.className="footer-social",b.forEach(n=>{const t=document.createElement("a");if(t.className="footer-social-icon",t.href=n.href||"#",t.target="_blank",t.rel="noopener noreferrer",t.setAttribute("aria-label",n.label),n.iconSrc){const a=document.createElement("img");a.src=n.iconSrc,a.alt=n.label,a.className="footer-social-icon-image",t.appendChild(a)}else t.textContent=n.icon||n.label.charAt(0);e.appendChild(t)}),o.appendChild(e)}const s=document.createElement("div");if(s.className="footer-legal",p){const e=document.createElement("span");e.className="footer-legal-text",e.textContent=p,s.appendChild(e)}return y.forEach(e=>{const n=document.createElement("a");n.href=e.href||"#",n.textContent=e.label,s.appendChild(n)}),o.appendChild(s),o},E={title:"Components/Footer",parameters:{docs:{description:{component:`**Production reference:** All pages — [abbvie.com](https://www.abbvie.com/) (scroll to bottom)

Global footer with AbbVie logo, 5 nav sections, 6 social media icons, Popular Pages, External Links, legal bar, and copyright. AEM component: experiencefragment cmp-experiencefragment--footer. Present on all 321 pages.`}}},render:i=>{const l=document.createElement("div");return l.innerHTML=S([{label:"All Pages (scroll to bottom)",url:"https://www.abbvie.com/"}]),l.appendChild(C(i)),l}},c={args:{logoText:"AbbVie",logoSrc:"/images/abbvie-logo.svg",sections:[{heading:"Who We Are",links:[{label:"Our Story",href:"/who-we-are/our-story.html"},{label:"Our Leaders",href:"/who-we-are/our-leaders.html"},{label:"Our Stories",href:"/who-we-are/our-stories.html"},{label:"Locations",href:"/who-we-are/locations.html"}]},{heading:"Science",links:[{label:"Immunology",href:"/science/immunology.html"},{label:"Oncology",href:"/science/oncology.html"},{label:"Neuroscience",href:"/science/neuroscience.html"},{label:"Eye Care",href:"/science/eye-care.html"},{label:"Pipeline",href:"/science/pipeline.html"}]},{heading:"Patients",links:[{label:"Patient Support",href:"/patients/patient-support.html"},{label:"Products",href:"/patients/products.html"},{label:"Pricing and Access",href:"/patients/pricing-and-access.html"}]},{heading:"Join Us",links:[{label:"Careers at AbbVie",href:"/join-us/careers.html"},{label:"Culture and Values",href:"/join-us/culture-and-values.html"},{label:"Benefits",href:"/join-us/benefits.html"},{label:"Search Jobs",href:"/join-us/search-jobs.html"}]},{heading:"Sustainability",links:[{label:"Our Approach",href:"/sustainability/our-approach.html"},{label:"Environmental Stewardship",href:"/sustainability/environment.html"},{label:"Social Impact",href:"/sustainability/social-impact.html"},{label:"Governance",href:"/sustainability/governance.html"}]}],socialLinks:[{label:"Facebook",href:"https://www.facebook.com/AbbVieGlobal",iconSrc:"/images/icon-facebook.svg"},{label:"X",href:"https://twitter.com/abbvie",iconSrc:"/images/icon-twitter.svg"},{label:"Instagram",href:"https://www.instagram.com/abbvie/",iconSrc:"/images/icon-instagram.svg"},{label:"LinkedIn",href:"https://www.linkedin.com/company/abbvie/",iconSrc:"/images/icon-linkedin.svg"},{label:"YouTube",href:"https://www.youtube.com/user/AbbVie",iconSrc:"/images/icon-youtube.svg"},{label:"TikTok",href:"https://www.tiktok.com/@abbvie",iconSrc:"/images/icon-tiktok.svg"}],copyright:"© 2026 AbbVie Inc. North Chicago, Illinois, U.S.A.",legalLinks:[{label:"Contact Us",href:"/contact-us.html"},{label:"Accessibility Statement",href:"/legal/accessibility.html"},{label:"Site Map",href:"/site-map.html"},{label:"Terms of Use",href:"/legal/terms-of-use.html"},{label:"Privacy Notice",href:"/legal/privacy-notice.html"}]}};var g,d,w;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    logoText: 'AbbVie',
    logoSrc: '/images/abbvie-logo.svg',
    sections: [{
      heading: 'Who We Are',
      links: [{
        label: 'Our Story',
        href: '/who-we-are/our-story.html'
      }, {
        label: 'Our Leaders',
        href: '/who-we-are/our-leaders.html'
      }, {
        label: 'Our Stories',
        href: '/who-we-are/our-stories.html'
      }, {
        label: 'Locations',
        href: '/who-we-are/locations.html'
      }]
    }, {
      heading: 'Science',
      links: [{
        label: 'Immunology',
        href: '/science/immunology.html'
      }, {
        label: 'Oncology',
        href: '/science/oncology.html'
      }, {
        label: 'Neuroscience',
        href: '/science/neuroscience.html'
      }, {
        label: 'Eye Care',
        href: '/science/eye-care.html'
      }, {
        label: 'Pipeline',
        href: '/science/pipeline.html'
      }]
    }, {
      heading: 'Patients',
      links: [{
        label: 'Patient Support',
        href: '/patients/patient-support.html'
      }, {
        label: 'Products',
        href: '/patients/products.html'
      }, {
        label: 'Pricing and Access',
        href: '/patients/pricing-and-access.html'
      }]
    }, {
      heading: 'Join Us',
      links: [{
        label: 'Careers at AbbVie',
        href: '/join-us/careers.html'
      }, {
        label: 'Culture and Values',
        href: '/join-us/culture-and-values.html'
      }, {
        label: 'Benefits',
        href: '/join-us/benefits.html'
      }, {
        label: 'Search Jobs',
        href: '/join-us/search-jobs.html'
      }]
    }, {
      heading: 'Sustainability',
      links: [{
        label: 'Our Approach',
        href: '/sustainability/our-approach.html'
      }, {
        label: 'Environmental Stewardship',
        href: '/sustainability/environment.html'
      }, {
        label: 'Social Impact',
        href: '/sustainability/social-impact.html'
      }, {
        label: 'Governance',
        href: '/sustainability/governance.html'
      }]
    }],
    socialLinks: [{
      label: 'Facebook',
      href: 'https://www.facebook.com/AbbVieGlobal',
      iconSrc: '/images/icon-facebook.svg'
    }, {
      label: 'X',
      href: 'https://twitter.com/abbvie',
      iconSrc: '/images/icon-twitter.svg'
    }, {
      label: 'Instagram',
      href: 'https://www.instagram.com/abbvie/',
      iconSrc: '/images/icon-instagram.svg'
    }, {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/abbvie/',
      iconSrc: '/images/icon-linkedin.svg'
    }, {
      label: 'YouTube',
      href: 'https://www.youtube.com/user/AbbVie',
      iconSrc: '/images/icon-youtube.svg'
    }, {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@abbvie',
      iconSrc: '/images/icon-tiktok.svg'
    }],
    copyright: '\\u00a9 2026 AbbVie Inc. North Chicago, Illinois, U.S.A.',
    legalLinks: [{
      label: 'Contact Us',
      href: '/contact-us.html'
    }, {
      label: 'Accessibility Statement',
      href: '/legal/accessibility.html'
    }, {
      label: 'Site Map',
      href: '/site-map.html'
    }, {
      label: 'Terms of Use',
      href: '/legal/terms-of-use.html'
    }, {
      label: 'Privacy Notice',
      href: '/legal/privacy-notice.html'
    }]
  }
}`,...(w=(d=c.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};const A=["Default"];export{c as Default,A as __namedExportsOrder,E as default};
