import{r as n}from"./reference-DlgtBAY_.js";const g={title:"Components/TwoColumnFeature",parameters:{docs:{description:{component:`**Production reference:** [homepage](https://www.abbvie.com/) (Persistence Lab Podcast section, Parkinson's Research video), [join-us](https://www.abbvie.com/join-us.html) (employee testimonial sections)

50/50 split layout with 40px top-left border-radius. ImageLeft: image left, text+CTA right. ImageRight: reversed with CSS modifier. VideoLeft: poster image with play button that swaps to real video.`}}}},t={render:()=>n([{label:"Homepage (Podcast)",url:"https://www.abbvie.com/"}])+`
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper">
        <img
          src="/images/hero-lab.webp"
          alt="AbbVie scientist examining research samples in the lab"
        />
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Striving for Breakthroughs: First, Faster and for Patients</h2>
        <p class="two-column-feature__body">
          At AbbVie, our science-first approach means we tackle the toughest
          challenges in healthcare. By combining deep expertise with bold
          innovation, we develop therapies that make a real difference for
          patients around the world.
        </p>
        <a href="#" class="two-column-feature__cta">Learn More</a>
      </div>
    </div>
  `},o={render:()=>n([{label:"Join Us",url:"https://www.abbvie.com/join-us.html"}])+`
    <div class="two-column-feature two-column-feature--reversed">
      <div class="two-column-feature__image-wrapper">
        <img
          src="/images/culture-smile.webp"
          alt="AbbVie employee smiling"
        />
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Life at AbbVie</h2>
        <p class="two-column-feature__body">
          Our people are our greatest strength. At AbbVie, you'll find a
          collaborative culture that values diverse perspectives, encourages
          bold thinking, and supports your growth at every stage of your career.
        </p>
        <a href="#" class="two-column-feature__cta">Explore Careers</a>
      </div>
    </div>
  `},a=()=>{const e=document.createElement("div");e.innerHTML=n([{label:"Homepage (Parkinson's Video)",url:"https://www.abbvie.com/"}])+`
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper two-column-feature__image-wrapper--video" style="position:relative; cursor:pointer;">
        <img
          src="/images/hero-parkinsons.webp"
          alt="Advancing Parkinson's research"
          class="two-col-poster"
        />
        <video class="two-col-video" style="display:none; width:100%; height:100%; object-fit:cover;" controls>
          <source src="/videos/sample-hero.mp4" type="video/mp4" />
        </video>
        <div class="two-column-feature__play-btn" aria-label="Play video" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); cursor:pointer;">
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
            <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)"/>
            <polygon points="26,20 26,44 46,32" fill="#fff"/>
          </svg>
        </div>
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Advancing Parkinson's Research</h2>
        <p class="two-column-feature__body">
          Watch how AbbVie researchers are pioneering new approaches to
          Parkinson's disease — moving beyond symptom management to explore
          treatments that target the underlying causes of neurodegeneration.
        </p>
        <a href="#" class="two-column-feature__cta">Watch 3:49</a>
      </div>
    </div>
  `;const r=e.querySelector(".two-column-feature__play-btn"),v=e.querySelector(".two-col-poster"),s=e.querySelector(".two-col-video");return r.addEventListener("click",()=>{v.style.display="none",r.style.display="none",s.style.display="block",s.play()}),e};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => refBanner([{
    label: 'Homepage (Podcast)',
    url: 'https://www.abbvie.com/'
  }]) + \`
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper">
        <img
          src="/images/hero-lab.webp"
          alt="AbbVie scientist examining research samples in the lab"
        />
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Striving for Breakthroughs: First, Faster and for Patients</h2>
        <p class="two-column-feature__body">
          At AbbVie, our science-first approach means we tackle the toughest
          challenges in healthcare. By combining deep expertise with bold
          innovation, we develop therapies that make a real difference for
          patients around the world.
        </p>
        <a href="#" class="two-column-feature__cta">Learn More</a>
      </div>
    </div>
  \`
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,p,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => refBanner([{
    label: 'Join Us',
    url: 'https://www.abbvie.com/join-us.html'
  }]) + \`
    <div class="two-column-feature two-column-feature--reversed">
      <div class="two-column-feature__image-wrapper">
        <img
          src="/images/culture-smile.webp"
          alt="AbbVie employee smiling"
        />
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Life at AbbVie</h2>
        <p class="two-column-feature__body">
          Our people are our greatest strength. At AbbVie, you'll find a
          collaborative culture that values diverse perspectives, encourages
          bold thinking, and supports your growth at every stage of your career.
        </p>
        <a href="#" class="two-column-feature__cta">Explore Careers</a>
      </div>
    </div>
  \`
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,h,w;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{
    label: 'Homepage (Parkinson\\'s Video)',
    url: 'https://www.abbvie.com/'
  }]) + \`
    <div class="two-column-feature">
      <div class="two-column-feature__image-wrapper two-column-feature__image-wrapper--video" style="position:relative; cursor:pointer;">
        <img
          src="/images/hero-parkinsons.webp"
          alt="Advancing Parkinson's research"
          class="two-col-poster"
        />
        <video class="two-col-video" style="display:none; width:100%; height:100%; object-fit:cover;" controls>
          <source src="/videos/sample-hero.mp4" type="video/mp4" />
        </video>
        <div class="two-column-feature__play-btn" aria-label="Play video" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); cursor:pointer;">
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
            <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)"/>
            <polygon points="26,20 26,44 46,32" fill="#fff"/>
          </svg>
        </div>
      </div>
      <div class="two-column-feature__content">
        <h2 class="two-column-feature__heading">Advancing Parkinson's Research</h2>
        <p class="two-column-feature__body">
          Watch how AbbVie researchers are pioneering new approaches to
          Parkinson's disease — moving beyond symptom management to explore
          treatments that target the underlying causes of neurodegeneration.
        </p>
        <a href="#" class="two-column-feature__cta">Watch 3:49</a>
      </div>
    </div>
  \`;
  const playBtn = el.querySelector('.two-column-feature__play-btn');
  const poster = el.querySelector('.two-col-poster');
  const video = el.querySelector('.two-col-video');
  playBtn.addEventListener('click', () => {
    poster.style.display = 'none';
    playBtn.style.display = 'none';
    video.style.display = 'block';
    video.play();
  });
  return el;
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const b=["ImageLeft","ImageRight","VideoLeft"];export{t as ImageLeft,o as ImageRight,a as VideoLeft,b as __namedExportsOrder,g as default};
