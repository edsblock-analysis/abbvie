import accordionStyles from './Accordion.css?raw';

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
    <style>${accordionStyles}</style>
    <div class="accordion-container">
      <div class="accordion-controls">
        <button class="accordion-toggle-all" data-action="expand">Expand All</button>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">What is this program about?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>This program provides resources and support for patients and caregivers navigating treatment options. It includes educational materials and access to specialists.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Who is eligible to enroll?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>Patients who have been prescribed a qualifying medication and reside in the United States are eligible. Please consult your healthcare provider for specific eligibility criteria.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">How do I contact support?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>You can reach our support team by calling 1-800-555-0199 Monday through Friday, 8 AM to 8 PM ET. You may also submit a request through our online contact form.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">What are the side effects?</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p>Common side effects may include nausea, fatigue, and headache. Serious side effects are rare but should be reported to your healthcare provider immediately.</p>
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
    <style>${accordionStyles}</style>
    <div class="accordion-container">
      <div class="accordion-controls">
        <button class="accordion-toggle-all" data-action="expand">Expand All</button>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Abelcet (Amphotericin B Lipid Complex)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="#">Prescribing Information (EN)</a> | <a href="#">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Revlimid (Lenalidomide)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="#">Prescribing Information (EN)</a> | <a href="#">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Pomalyst (Pomalidomide)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="#">Prescribing Information (EN)</a> | <a href="#">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Opdivo (Nivolumab)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="#">Prescribing Information (EN)</a> | <a href="#">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-item-header">
          <span class="accordion-item-title">Eliquis (Apixaban)</span>
          <span class="accordion-toggle-icon">&#9660;</span>
        </div>
        <div class="accordion-item-content">
          <p><a href="#">Prescribing Information (EN)</a> | <a href="#">Informaci&oacute;n de Prescripci&oacute;n (ES)</a></p>
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
    <style>${accordionStyles}</style>
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
            <li><strong>Acute Myeloid Leukemia (AML)</strong> &mdash; A fast-growing cancer of the blood and bone marrow that affects myeloid cells.</li>
            <li><strong>Acute Lymphoblastic Leukemia (ALL)</strong> &mdash; A type of cancer that starts in white blood cells called lymphocytes in the bone marrow.</li>
            <li><strong>Chronic Lymphocytic Leukemia (CLL)</strong> &mdash; A slow-growing cancer that begins in lymphocytes in the bone marrow and extends into the blood.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  attachAccordionJS(wrapper);
  return wrapper;
};
