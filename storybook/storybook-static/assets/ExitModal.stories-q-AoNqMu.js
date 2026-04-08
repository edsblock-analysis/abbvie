import{r as l}from"./reference-DlgtBAY_.js";const c={title:"Components/ExitModal",parameters:{docs:{description:{component:`**Production reference:** All pages — triggered by clicking external links on [abbvie.com](https://www.abbvie.com/)

Modal dialog warning users they are leaving AbbVie website. "No, I disagree" closes modal, "Yes, I agree" navigates to external URL. Present on all 321 pages.`}}}},t=()=>{const e=document.createElement("div");e.innerHTML=l([{label:"Any Page (click external link)",url:"https://www.abbvie.com/"}])+`
    <div class="exit-modal-overlay" style="position: relative; min-height: 400px;">
      <div class="exit-modal-dialog">
        <h2 class="exit-modal-title">You are about to leave the AbbVie website</h2>
        <p class="exit-modal-body">
          The link you clicked will take you to a site maintained by a third party, who is solely responsible for its content. AbbVie Inc. does not control, influence, or endorse this site, and the opinions, claims, or comments expressed on this site should not be attributed to AbbVie Inc.
        </p>
        <div class="exit-modal-buttons">
          <button class="exit-modal-btn-disagree">No, I disagree</button>
          <button class="exit-modal-btn-agree">Yes, I agree</button>
        </div>
      </div>
    </div>
  `;const i=e.querySelector(".exit-modal-overlay"),s=e.querySelector(".exit-modal-btn-disagree"),r=e.querySelector(".exit-modal-btn-agree");return s.addEventListener("click",()=>{i.style.display="none"}),r.addEventListener("click",()=>{window.alert("Navigating to external site...")}),e};var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = refBanner([{
    label: 'Any Page (click external link)',
    url: 'https://www.abbvie.com/'
  }]) + \`
    <div class="exit-modal-overlay" style="position: relative; min-height: 400px;">
      <div class="exit-modal-dialog">
        <h2 class="exit-modal-title">You are about to leave the AbbVie website</h2>
        <p class="exit-modal-body">
          The link you clicked will take you to a site maintained by a third party, who is solely responsible for its content. AbbVie Inc. does not control, influence, or endorse this site, and the opinions, claims, or comments expressed on this site should not be attributed to AbbVie Inc.
        </p>
        <div class="exit-modal-buttons">
          <button class="exit-modal-btn-disagree">No, I disagree</button>
          <button class="exit-modal-btn-agree">Yes, I agree</button>
        </div>
      </div>
    </div>
  \`;
  const overlay = wrapper.querySelector('.exit-modal-overlay');
  const disagreeBtn = wrapper.querySelector('.exit-modal-btn-disagree');
  const agreeBtn = wrapper.querySelector('.exit-modal-btn-agree');
  disagreeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
  agreeBtn.addEventListener('click', () => {
    window.alert('Navigating to external site...');
  });
  return wrapper;
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const b=["DefaultModal"];export{t as DefaultModal,b as __namedExportsOrder,c as default};
