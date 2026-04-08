import './Accordion.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/Accordion',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [science.html](https://www.abbvie.com/science.html) (FAQ accordion), [available-programs](https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html) (medicine list with 65 items), [oncology](https://www.abbvie.com/science/areas-of-focus/oncology.html) (disease category accordion)\n\nExpandable/collapsible panels with Expand All / Collapse All control. Same accordion shell for all content types.',
      },
    },
  },
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
  wrapper.innerHTML = refBanner([{label:'Science FAQ',url:'https://www.abbvie.com/science.html'},{label:'Medicine List',url:'https://www.abbvie.com/patients/patient-support/patient-assistance/available-programs.html'},{label:'Disease Categories',url:'https://www.abbvie.com/science/areas-of-focus/oncology.html'}]) + `
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

export const TabsOnDesktop = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = refBanner([{label:'Science (tabs nav)',url:'https://www.abbvie.com/science.html'}]) + `
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
  `;
  // Tab switching JS
  wrapper.querySelectorAll('.accordion-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = tab.dataset.tab;
      wrapper.querySelectorAll('.accordion-tab').forEach(t => t.classList.remove('active'));
      wrapper.querySelectorAll('.accordion-tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      wrapper.querySelector(`[data-panel="${idx}"]`).classList.add('active');
    });
  });
  return wrapper;
};
