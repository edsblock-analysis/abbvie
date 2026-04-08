import{r as g}from"./reference-DlgtBAY_.js";const A={title:"Components/Accordion",parameters:{docs:{description:{component:`**Production reference:** [science.html](https://www.abbvie.com/science.html) (FAQ accordion), [available-programs](https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html) (medicine list with 65 items), [oncology](https://www.abbvie.com/science/areas-of-focus/oncology.html) (disease category accordion)

Expandable/collapsible panels with Expand All / Collapse All control. Same accordion shell for all content types.`}}}};function w(a){const i=a.querySelectorAll(".accordion-item-header"),e=a.querySelector(".accordion-toggle-all");i.forEach(n=>{n.addEventListener("click",()=>{const c=n.nextElementSibling,s=n.querySelector(".accordion-toggle-icon");c.classList.toggle("expanded"),s.classList.toggle("rotated")})}),e&&e.addEventListener("click",()=>{const n=e.getAttribute("data-action"),c=a.querySelectorAll(".accordion-item-content"),s=a.querySelectorAll(".accordion-toggle-icon");n==="expand"?(c.forEach(t=>t.classList.add("expanded")),s.forEach(t=>t.classList.add("rotated")),e.textContent="Collapse All",e.setAttribute("data-action","collapse")):(c.forEach(t=>t.classList.remove("expanded")),s.forEach(t=>t.classList.remove("rotated")),e.textContent="Expand All",e.setAttribute("data-action","expand"))})}const o=()=>{const a=document.createElement("div");return a.innerHTML=g([{label:"Science FAQ",url:"https://www.abbvie.com/science.html"},{label:"Medicine List",url:"https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html"},{label:"Disease Categories",url:"https://www.abbvie.com/science/areas-of-focus/oncology.html"}])+`
    <div class="accordion-container">
      <div class="accordion-controls">
        <button class="accordion-toggle-all" data-action="expand">Expand All</button>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">What is AbbVie's research pipeline?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>AbbVie's pipeline includes more than 90 compounds or indications in development across key therapeutic areas including immunology, oncology, neuroscience, eye care, and aesthetics. Our scientists focus on discovering and developing transformative therapies that address serious health conditions and unmet medical needs worldwide.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">How can I participate in AbbVie clinical trials?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>AbbVie conducts clinical trials globally to evaluate the safety and efficacy of investigational therapies. You can explore currently enrolling studies at <a href="https://www.abbvieclinicaltrials.com" target="_blank" rel="noopener">abbvieclinicaltrials.com</a>. Speak with your healthcare provider to determine whether a clinical trial may be appropriate for your condition.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">HUMIRA (adalimumab) — Prescribing Information</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="https://www.rxabbvie.com/pdf/humira.pdf" target="_blank" rel="noopener">Prescribing Information (EN)</a> | <a href="https://www.rxabbvie.com/pdf/humira_sp.pdf" target="_blank" rel="noopener">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Blood Cancers</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <ul>
            <li><strong>Acute Myeloid Leukemia (AML)</strong> &mdash; AbbVie's VENCLEXTA is approved for newly diagnosed AML.</li>
            <li><strong>Chronic Lymphocytic Leukemia (CLL)</strong> &mdash; VENCLEXTA is approved for CLL/SLL as first-line and relapsed treatment.</li>
          </ul>
        </div>
      </div>
    </div>
  `,w(a),a},r=()=>{const a=document.createElement("div");return a.innerHTML=g([{label:"Science (tabs nav)",url:"https://www.abbvie.com/science.html"}])+`
    <div class="accordion-container accordion-container--tabs">
      <div class="accordion-tabs-bar">
        <button class="accordion-tab active" data-tab="0">Areas of Focus</button>
        <button class="accordion-tab" data-tab="1">Areas of Innovation</button>
        <button class="accordion-tab" data-tab="2">Our People</button>
        <button class="accordion-tab" data-tab="3">Partner with Us</button>
        <button class="accordion-tab" data-tab="4">Clinical Trials</button>
      </div>
      <div class="accordion-tab-panel active" data-panel="0">
        <p>Explore our therapeutic focus areas: Immunology, Oncology, Neuroscience, Eye Care, Aesthetics, and Other Specialties.</p>
      </div>
      <div class="accordion-tab-panel" data-panel="1">
        <p>Innovation at AbbVie spans AI & Data Convergence, Genomics, Precision Medicine, and Therapeutic Modalities.</p>
      </div>
      <div class="accordion-tab-panel" data-panel="2">
        <p>Meet our scientists, explore the Lab of the Future, and discover the stories behind our breakthroughs.</p>
      </div>
      <div class="accordion-tab-panel" data-panel="3">
        <p>Collaborate with AbbVie through ventures, partnering days, and business development opportunities.</p>
      </div>
      <div class="accordion-tab-panel" data-panel="4">
        <p>Learn about our clinical trials and investigator-initiated studies worldwide.</p>
      </div>
    </div>
  `,a.querySelectorAll(".accordion-tab").forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.tab;a.querySelectorAll(".accordion-tab").forEach(n=>n.classList.remove("active")),a.querySelectorAll(".accordion-tab-panel").forEach(n=>n.classList.remove("active")),i.classList.add("active"),a.querySelector(`[data-panel="${e}"]`).classList.add("active")})}),a};var l,d,p,b,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = refBanner([{
    label: 'Science FAQ',
    url: 'https://www.abbvie.com/science.html'
  }, {
    label: 'Medicine List',
    url: 'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html'
  }, {
    label: 'Disease Categories',
    url: 'https://www.abbvie.com/science/areas-of-focus/oncology.html'
  }]) + \`
    <div class="accordion-container">
      <div class="accordion-controls">
        <button class="accordion-toggle-all" data-action="expand">Expand All</button>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">What is AbbVie's research pipeline?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>AbbVie's pipeline includes more than 90 compounds or indications in development across key therapeutic areas including immunology, oncology, neuroscience, eye care, and aesthetics. Our scientists focus on discovering and developing transformative therapies that address serious health conditions and unmet medical needs worldwide.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">How can I participate in AbbVie clinical trials?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>AbbVie conducts clinical trials globally to evaluate the safety and efficacy of investigational therapies. You can explore currently enrolling studies at <a href="https://www.abbvieclinicaltrials.com" target="_blank" rel="noopener">abbvieclinicaltrials.com</a>. Speak with your healthcare provider to determine whether a clinical trial may be appropriate for your condition.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">HUMIRA (adalimumab) — Prescribing Information</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="https://www.rxabbvie.com/pdf/humira.pdf" target="_blank" rel="noopener">Prescribing Information (EN)</a> | <a href="https://www.rxabbvie.com/pdf/humira_sp.pdf" target="_blank" rel="noopener">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Blood Cancers</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <ul>
            <li><strong>Acute Myeloid Leukemia (AML)</strong> &mdash; AbbVie's VENCLEXTA is approved for newly diagnosed AML.</li>
            <li><strong>Chronic Lymphocytic Leukemia (CLL)</strong> &mdash; VENCLEXTA is approved for CLL/SLL as first-line and relapsed treatment.</li>
          </ul>
        </div>
      </div>
    </div>
  \`;
  attachAccordionJS(wrapper);
  return wrapper;
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:`Default — Expandable/collapsible accordion with Expand All / Collapse All.
The accordion shell is identical across all usages (FAQ, medicine lists,
disease categories). Only the inner content differs — paragraphs, links,
or bullet lists. One story covers the visual pattern.

Content shown here uses AbbVie FAQ as representative sample.
Same component handles 65+ items on patient-assistance pages.`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.description}}};var v,m,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = refBanner([{
    label: 'Science (tabs nav)',
    url: 'https://www.abbvie.com/science.html'
  }]) + \`
    <div class="accordion-container accordion-container--tabs">
      <div class="accordion-tabs-bar">
        <button class="accordion-tab active" data-tab="0">Areas of Focus</button>
        <button class="accordion-tab" data-tab="1">Areas of Innovation</button>
        <button class="accordion-tab" data-tab="2">Our People</button>
        <button class="accordion-tab" data-tab="3">Partner with Us</button>
        <button class="accordion-tab" data-tab="4">Clinical Trials</button>
      </div>
      <div class="accordion-tab-panel active" data-panel="0">
        <p>Explore our therapeutic focus areas: Immunology, Oncology, Neuroscience, Eye Care, Aesthetics, and Other Specialties.</p>
      </div>
      <div class="accordion-tab-panel" data-panel="1">
        <p>Innovation at AbbVie spans AI & Data Convergence, Genomics, Precision Medicine, and Therapeutic Modalities.</p>
      </div>
      <div class="accordion-tab-panel" data-panel="2">
        <p>Meet our scientists, explore the Lab of the Future, and discover the stories behind our breakthroughs.</p>
      </div>
      <div class="accordion-tab-panel" data-panel="3">
        <p>Collaborate with AbbVie through ventures, partnering days, and business development opportunities.</p>
      </div>
      <div class="accordion-tab-panel" data-panel="4">
        <p>Learn about our clinical trials and investigator-initiated studies worldwide.</p>
      </div>
    </div>
  \`;
  // Tab switching JS
  wrapper.querySelectorAll('.accordion-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = tab.dataset.tab;
      wrapper.querySelectorAll('.accordion-tab').forEach(t => t.classList.remove('active'));
      wrapper.querySelectorAll('.accordion-tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      wrapper.querySelector(\`[data-panel="\${idx}"]\`).classList.add('active');
    });
  });
  return wrapper;
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const y=["Default","TabsOnDesktop"];export{o as Default,r as TabsOnDesktop,y as __namedExportsOrder,A as default};
