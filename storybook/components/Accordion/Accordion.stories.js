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

/**
 * Default — Expandable/collapsible accordion with Expand All / Collapse All.
 * The accordion shell is identical across all usages (FAQ, medicine lists,
 * disease categories). Only the inner content differs — paragraphs, links,
 * or bullet lists. One story covers the visual pattern.
 *
 * Content shown here uses AbbVie FAQ as representative sample.
 * Same component handles 65+ items on patient-assistance pages.
 */
export const Default = () => {
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
  `;
  attachAccordionJS(wrapper);
  return wrapper;
};
