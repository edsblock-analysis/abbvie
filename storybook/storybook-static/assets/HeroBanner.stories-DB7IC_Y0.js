import{r as i}from"./reference-DlgtBAY_.js";const P={title:"Components/HeroBanner",parameters:{docs:{description:{component:`**Production reference:** [abbvie.com](https://www.abbvie.com/) (VideoHero), [join-us](https://www.abbvie.com/join-us.html) (ImageHero), [story article](https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html) (SimpleHero), [oncology](https://www.abbvie.com/science/areas-of-focus/oncology.html) (DetailPageHero)

Full-width hero with 64px top-left border-radius on image container. Responsive: 32px on mobile.`}}}},l=`
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="2" width="4" height="12"/>
    <rect x="9" y="2" width="4" height="12"/>
  </svg>`,E=`
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="4,2 14,8 4,14"/>
  </svg>`,r=()=>{const e=document.createElement("div");e.innerHTML=i([{label:"Homepage",url:"https://www.abbvie.com/"}])+`
    <div class="hero-banner">
      <div class="hero-banner__media-wrapper">
        <video
          class="hero-banner__media hero-banner__media--video"
          autoplay
          muted
          loop
          playsinline
          poster="/images/hero-lab.webp"
        >
          <source src="/videos/sample-hero.mp4" type="video/mp4" />
        </video>

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <h1 class="hero-banner__title">We find answers that make life better for patients and our world.</h1>
          <p class="hero-banner__subheading">
            At AbbVie, our science drives innovative therapies across immunology, oncology,
            neuroscience, eye care, and aesthetics &mdash; reaching patients in more than 175 countries.
          </p>
          <a href="#" class="hero-banner__cta">Explore Our Science</a>
        </div>

        <button class="hero-banner__pause-btn" aria-label="Pause background video" type="button">
          ${l}
        </button>
      </div>
    </div>
  `;const n=e.querySelector(".hero-banner__pause-btn"),c=e.querySelector("video");let t=!0;return n.addEventListener("click",()=>{t?(c.pause(),n.innerHTML=E,n.setAttribute("aria-label","Play background video")):(c.play(),n.innerHTML=l,n.setAttribute("aria-label","Pause background video")),t=!t}),e},a=()=>{const e=document.createElement("div");return e.innerHTML=i([{label:"Join Us",url:"https://www.abbvie.com/join-us.html"}])+`
    <div class="hero-banner">
      <div class="hero-banner__media-wrapper">
        <img
          class="hero-banner__media"
          src="/images/hero-soccer.webp"
          alt="Children playing soccer outdoors"
          loading="eager"
        />

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <h1 class="hero-banner__title">Join AbbVie</h1>
          <p class="hero-banner__subheading">
            Build a career where your work helps transform the lives of patients around the world.
            We offer bold opportunities in research, manufacturing, commercial, and beyond.
          </p>
          <a href="#" class="hero-banner__cta">Browse Jobs</a>
        </div>
      </div>
    </div>
  `,e},o=()=>{const e=document.createElement("div");return e.innerHTML=i([{label:"Story Article",url:"https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html"}])+`
    <div class="hero-banner hero-banner--simple">
      <div class="hero-banner__media-wrapper">
        <img
          class="hero-banner__media"
          src="/images/hero-parkinsons.webp"
          alt="Two women in conversation about Parkinson's disease"
          loading="eager"
        />
      </div>
    </div>
  `,e},s=()=>{const e=document.createElement("div");return e.innerHTML=i([{label:"Oncology",url:"https://www.abbvie.com/science/areas-of-focus/oncology.html"}])+`
    <div class="hero-banner hero-banner--detail">
      <div class="hero-banner__media-wrapper">
        <img
          class="hero-banner__media"
          src="/images/scientist-examining.webp"
          alt="Woman scientist examining research data"
          loading="eager"
        />

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <p class="hero-banner__topic">Areas of Focus</p>
          <h1 class="hero-banner__title">Oncology</h1>
        </div>
      </div>
    </div>
  `,e};var d,b,p,h,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{
    label: 'Homepage',
    url: 'https://www.abbvie.com/'
  }]) + \`
    <div class="hero-banner">
      <div class="hero-banner__media-wrapper">
        <video
          class="hero-banner__media hero-banner__media--video"
          autoplay
          muted
          loop
          playsinline
          poster="/images/hero-lab.webp"
        >
          <source src="/videos/sample-hero.mp4" type="video/mp4" />
        </video>

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <h1 class="hero-banner__title">We find answers that make life better for patients and our world.</h1>
          <p class="hero-banner__subheading">
            At AbbVie, our science drives innovative therapies across immunology, oncology,
            neuroscience, eye care, and aesthetics &mdash; reaching patients in more than 175 countries.
          </p>
          <a href="#" class="hero-banner__cta">Explore Our Science</a>
        </div>

        <button class="hero-banner__pause-btn" aria-label="Pause background video" type="button">
          \${pauseIcon}
        </button>
      </div>
    </div>
  \`;
  const btn = el.querySelector('.hero-banner__pause-btn');
  const video = el.querySelector('video');
  let playing = true;
  btn.addEventListener('click', () => {
    if (playing) {
      video.pause();
      btn.innerHTML = playIcon;
      btn.setAttribute('aria-label', 'Play background video');
    } else {
      video.play();
      btn.innerHTML = pauseIcon;
      btn.setAttribute('aria-label', 'Pause background video');
    }
    playing = !playing;
  });
  return el;
}`,...(p=(b=r.parameters)==null?void 0:b.docs)==null?void 0:p.source},description:{story:`VideoHero — Hero with background video, 80px top-left radius, pause/play.
Matches live site: border-radius: 80px 0 0 0 on image container.`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.description}}};var u,v,g,_,w;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{
    label: 'Join Us',
    url: 'https://www.abbvie.com/join-us.html'
  }]) + \`
    <div class="hero-banner">
      <div class="hero-banner__media-wrapper">
        <img
          class="hero-banner__media"
          src="/images/hero-soccer.webp"
          alt="Children playing soccer outdoors"
          loading="eager"
        />

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <h1 class="hero-banner__title">Join AbbVie</h1>
          <p class="hero-banner__subheading">
            Build a career where your work helps transform the lives of patients around the world.
            We offer bold opportunities in research, manufacturing, commercial, and beyond.
          </p>
          <a href="#" class="hero-banner__cta">Browse Jobs</a>
        </div>
      </div>
    </div>
  \`;
  return el;
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source},description:{story:`ImageHero — Static background image with 80px top-left radius.
Careers-focused messaging.`,...(w=(_=a.parameters)==null?void 0:_.docs)==null?void 0:w.description}}};var y,f,H,x,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{
    label: 'Story Article',
    url: 'https://www.abbvie.com/who-we-are/our-stories/three-ways-ai-is-changing-drug-discovery-at-abbvie.html'
  }]) + \`
    <div class="hero-banner hero-banner--simple">
      <div class="hero-banner__media-wrapper">
        <img
          class="hero-banner__media"
          src="/images/hero-parkinsons.webp"
          alt="Two women in conversation about Parkinson's disease"
          loading="eager"
        />
      </div>
    </div>
  \`;
  return el;
}`,...(H=(f=o.parameters)==null?void 0:f.docs)==null?void 0:H.source},description:{story:`SimpleHero — Image-only hero with no text overlay.
Still has the 80px top-left radius clipping.`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};var S,A,L,T,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{
    label: 'Oncology',
    url: 'https://www.abbvie.com/science/areas-of-focus/oncology.html'
  }]) + \`
    <div class="hero-banner hero-banner--detail">
      <div class="hero-banner__media-wrapper">
        <img
          class="hero-banner__media"
          src="/images/scientist-examining.webp"
          alt="Woman scientist examining research data"
          loading="eager"
        />

        <div class="hero-banner__overlay"></div>

        <div class="hero-banner__content">
          <p class="hero-banner__topic">Areas of Focus</p>
          <h1 class="hero-banner__title">Oncology</h1>
        </div>
      </div>
    </div>
  \`;
  return el;
}`,...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:`DetailPageHero — Interior page hero with 64px top-left radius.
Category label above title. Used on science area pages.`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};const I=["VideoHero","ImageHero","SimpleHero","DetailPageHero"];export{s as DetailPageHero,a as ImageHero,o as SimpleHero,r as VideoHero,I as __namedExportsOrder,P as default};
