import './Accordion.css';

export default {
  title: 'Components/Accordion',
};

function attachAccordionJS(container) {
  const headers = container.querySelectorAll('.accordion-item-header');
  const toggleAllBtn = container.querySelector('.accordion-toggle-all');

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-toggle-icon');
      content.classList.toggle('expanded');
      icon.classList.toggle('rotated');
    });
  });

  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
      const action = toggleAllBtn.getAttribute('data-action');
      const contents = container.querySelectorAll('.accordion-item-content');
      const icons = container.querySelectorAll('.accordion-toggle-icon');

      if (action === 'expand') {
        contents.forEach((c) => c.classList.add('expanded'));
        icons.forEach((i) => i.classList.add('rotated'));
        toggleAllBtn.textContent = 'Collapse All';
        toggleAllBtn.setAttribute('data-action', 'collapse');
      } else {
        contents.forEach((c) => c.classList.remove('expanded'));
        icons.forEach((i) => i.classList.remove('rotated'));
        toggleAllBtn.textContent = 'Expand All';
        toggleAllBtn.setAttribute('data-action', 'expand');
      }
    });
  }
}

export const FAQAccordion = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
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
          <span class="accordion-item-title">What patient support programs does AbbVie offer?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>AbbVie offers a range of patient support programs, including myAbbVie Assist, which provides eligible patients with AbbVie medicines at no cost. Additional programs help patients navigate insurance coverage, find co-pay assistance, and connect with nurse ambassadors who provide personalized support throughout their treatment journey.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">How do I explore career opportunities at AbbVie?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>AbbVie employs approximately 50,000 people worldwide and is consistently recognized as a great place to work. Career opportunities span R&amp;D, commercial, manufacturing, data science, and corporate functions. Visit <a href="https://careers.abbvie.com" target="_blank" rel="noopener">careers.abbvie.com</a> to search open positions, learn about our culture, and apply online.</p>
        </div>
      </div>
    </div>
  `;
  attachAccordionJS(wrapper);
  return wrapper;
};

export const MedicineListAccordion = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="accordion-container">
      <div class="accordion-controls">
        <button class="accordion-toggle-all" data-action="expand">Expand All</button>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">HUMIRA (adalimumab)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="https://www.rxabbvie.com/pdf/humira.pdf" target="_blank" rel="noopener">Prescribing Information (EN)</a> | <a href="https://www.rxabbvie.com/pdf/humira_sp.pdf" target="_blank" rel="noopener">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">RINVOQ (upadacitinib)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="https://www.rxabbvie.com/pdf/rinvoq_pi.pdf" target="_blank" rel="noopener">Prescribing Information (EN)</a> | <a href="https://www.rxabbvie.com/pdf/rinvoq_pi_sp.pdf" target="_blank" rel="noopener">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">SKYRIZI (risankizumab-rzaa)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="https://www.rxabbvie.com/pdf/skyrizi_pi.pdf" target="_blank" rel="noopener">Prescribing Information (EN)</a> | <a href="https://www.rxabbvie.com/pdf/skyrizi_pi_sp.pdf" target="_blank" rel="noopener">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">VENCLEXTA (venetoclax)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="https://www.rxabbvie.com/pdf/venclexta.pdf" target="_blank" rel="noopener">Prescribing Information (EN)</a> | <a href="https://www.rxabbvie.com/pdf/venclexta_sp.pdf" target="_blank" rel="noopener">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">BOTOX (onabotulinumtoxinA)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="https://www.rxabbvie.com/pdf/botox_pi.pdf" target="_blank" rel="noopener">Prescribing Information (EN)</a> | <a href="https://www.rxabbvie.com/pdf/botox_pi_sp.pdf" target="_blank" rel="noopener">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>
    </div>
  `;
  attachAccordionJS(wrapper);
  return wrapper;
};

export const DiseaseCategoryAccordion = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="accordion-container">
      <div class="accordion-controls">
        <button class="accordion-toggle-all" data-action="expand">Expand All</button>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Blood Cancers</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <ul>
            <li><strong>Acute Myeloid Leukemia (AML)</strong> &mdash; A fast-growing cancer of the blood and bone marrow that affects myeloid cells. AbbVie's VENCLEXTA, in combination with other agents, is approved for newly diagnosed AML in adults.</li>
            <li><strong>Acute Lymphoblastic Leukemia (ALL)</strong> &mdash; A type of cancer that starts in white blood cells called lymphocytes in the bone marrow. AbbVie is investigating novel targeted therapies for relapsed or refractory ALL.</li>
            <li><strong>Chronic Lymphocytic Leukemia (CLL)</strong> &mdash; A slow-growing cancer that begins in lymphocytes in the bone marrow and extends into the blood. VENCLEXTA is approved for CLL/SLL as both a first-line and relapsed/refractory treatment.</li>
            <li><strong>Diffuse Large B-Cell Lymphoma (DLBCL)</strong> &mdash; The most common type of aggressive non-Hodgkin lymphoma. AbbVie is advancing therapies targeting key signaling pathways involved in DLBCL progression.</li>
            <li><strong>Multiple Myeloma (MM)</strong> &mdash; A cancer of plasma cells in the bone marrow. AbbVie is exploring combination strategies to improve outcomes for patients with multiple myeloma.</li>
          </ul>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Solid Tumors</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <ul>
            <li><strong>Colorectal Cancer (CRC)</strong> &mdash; A cancer that begins in the colon or rectum. AbbVie is developing targeted therapies and immunotherapy combinations for advanced colorectal cancer.</li>
            <li><strong>Lung Cancer</strong> &mdash; One of the most common cancers worldwide. AbbVie's oncology pipeline includes investigational agents targeting driver mutations and immune evasion mechanisms in non-small cell lung cancer.</li>
            <li><strong>Ovarian Cancer</strong> &mdash; A cancer that forms in the tissues of the ovary. AbbVie is investigating novel approaches, including antibody-drug conjugates, for patients with advanced ovarian cancer.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  attachAccordionJS(wrapper);
  return wrapper;
};
