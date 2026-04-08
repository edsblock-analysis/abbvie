import './PipelineFilter.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/PipelineFilter',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [pipeline](https://www.abbvie.com/science/pipeline.html)\n\nInteractive pipeline browser with search, sort, filters, and expandable compound cards. Each card has a + button that reveals description and indication table. 90+ compounds grouped by therapeutic area.',
      },
    },
  },
};

function attachPipelineJS(container) {
  container.querySelectorAll('.pipeline-filter__expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.pipeline-filter__card');
      const details = card.querySelector('.pipeline-filter__card-details');
      const isExpanded = details.classList.toggle('expanded');
      btn.textContent = isExpanded ? '−' : '+';
      btn.setAttribute('aria-expanded', isExpanded);
    });
  });
}

/**
 * Default — Pipeline browser with expandable compound cards.
 * Click the + button on each compound to reveal description and indication table.
 */
export const Default = () => {
  const el = document.createElement('div');
  el.innerHTML = refBanner([{label:'Pipeline',url:'https://www.abbvie.com/science/pipeline.html'}]) + `
    <div class="pipeline-filter">
      <div class="pipeline-filter__toolbar">
        <input type="search" class="pipeline-filter__search" placeholder="Search Pipeline" />
        <select class="pipeline-filter__sort">
          <option>Focus Area</option>
          <option>Alphabetical</option>
        </select>
        <button class="pipeline-filter__toggle">
          <span class="pipeline-filter__toggle-icon">&#9776;</span> Filter
        </button>
      </div>

      <div class="pipeline-filter__results-count">Showing 3 of 90+ compounds</div>

      <h3 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:3.2rem; font-weight:650; color:#071d49; margin:3.2rem 0 1.6rem;">Immunology</h3>

      <!-- Compound Card 1: ABBV-141 (collapsed) -->
      <div class="pipeline-filter__card">
        <div class="pipeline-filter__card-header">
          <div class="pipeline-filter__card-left">
            <h4 class="pipeline-filter__compound-name">ABBV-141</h4>
            <div class="pipeline-filter__chips">
              <span class="pipeline-filter__chip">Pharmaceutical</span>
            </div>
            <button class="pipeline-filter__share-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Share link
            </button>
            <div class="pipeline-filter__meta-row">
              <div class="pipeline-filter__meta-item">
                <strong>Target</strong>
                LPAR1
              </div>
              <div class="pipeline-filter__meta-item">
                <strong>Type of molecule</strong>
                Biologic
              </div>
            </div>
          </div>
          <button class="pipeline-filter__expand-btn" aria-expanded="false" aria-label="Expand compound details">+</button>
        </div>
        <div class="pipeline-filter__card-details">
          <p class="pipeline-filter__description">ABBV-141 is a lysophosphatidic acid receptor 1 (LPAR1) antagonist antibody being investigated for the treatment of idiopathic pulmonary fibrosis (IPF). LPAR1 contributes to the underlying pathology of fibrotic diseases and amplifies inflammation and fibrosis in the lungs, among other tissues. Inhibition of LPAR1 may address systemic sclerosis (SSc) and IPF pathogenesis.</p>
          <table class="pipeline-filter__table">
            <thead>
              <tr>
                <th>Potential Indication</th>
                <th>Region</th>
                <th>Phase 1</th>
                <th>Phase 2</th>
                <th>Phase 3</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Idiopathic Pulmonary Fibrosis</td>
                <td>N/A</td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase1">●</span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Compound Card 2: ABBV-951 (expanded) -->
      <div class="pipeline-filter__card">
        <div class="pipeline-filter__card-header">
          <div class="pipeline-filter__card-left">
            <h4 class="pipeline-filter__compound-name">ABBV-951 (Foscarbidopa / Foslevodopa)</h4>
            <div class="pipeline-filter__chips">
              <span class="pipeline-filter__chip">Pharmaceutical</span>
            </div>
            <button class="pipeline-filter__share-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Share link
            </button>
            <div class="pipeline-filter__meta-row">
              <div class="pipeline-filter__meta-item">
                <strong>Target</strong>
                Levodopa/Carbidopa prodrug
              </div>
              <div class="pipeline-filter__meta-item">
                <strong>Type of molecule</strong>
                Small Molecule
              </div>
            </div>
          </div>
          <button class="pipeline-filter__expand-btn" aria-expanded="true" aria-label="Collapse compound details">−</button>
        </div>
        <div class="pipeline-filter__card-details expanded">
          <p class="pipeline-filter__description">Continuous subcutaneous infusion of levodopa/carbidopa prodrugs for the treatment of motor fluctuations in patients with advanced Parkinson's disease. ABBV-951 delivers levodopa and carbidopa through a subcutaneous pump, providing stable plasma levels and reducing "off" time.</p>
          <table class="pipeline-filter__table">
            <thead>
              <tr>
                <th>Potential Indication</th>
                <th>Region</th>
                <th>Phase 1</th>
                <th>Phase 2</th>
                <th>Phase 3</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Advanced Parkinson's Disease</td>
                <td>US</td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase1">●</span></td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase2">●</span></td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase3">●</span></td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--approved">Approved</span></td>
              </tr>
              <tr>
                <td>Advanced Parkinson's Disease</td>
                <td>EU</td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase1">●</span></td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase2">●</span></td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase3">●</span></td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--submitted">Submitted</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:3.2rem; font-weight:650; color:#071d49; margin:3.2rem 0 1.6rem;">Oncology</h3>

      <!-- Compound Card 3: ABBV-400 (collapsed) -->
      <div class="pipeline-filter__card">
        <div class="pipeline-filter__card-header">
          <div class="pipeline-filter__card-left">
            <h4 class="pipeline-filter__compound-name">ABBV-400</h4>
            <div class="pipeline-filter__chips">
              <span class="pipeline-filter__chip">Pharmaceutical</span>
              <span class="pipeline-filter__chip">Biologic</span>
            </div>
            <button class="pipeline-filter__share-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Share link
            </button>
            <div class="pipeline-filter__meta-row">
              <div class="pipeline-filter__meta-item">
                <strong>Target</strong>
                c-Met
              </div>
              <div class="pipeline-filter__meta-item">
                <strong>Type of molecule</strong>
                Antibody-Drug Conjugate (ADC)
              </div>
            </div>
          </div>
          <button class="pipeline-filter__expand-btn" aria-expanded="false" aria-label="Expand compound details">+</button>
        </div>
        <div class="pipeline-filter__card-details">
          <p class="pipeline-filter__description">ABBV-400 is a c-Met-targeting antibody-drug conjugate (ADC) being investigated for the treatment of non-small cell lung cancer (NSCLC) and other solid tumors. The ADC delivers a cytotoxic payload selectively to c-Met expressing tumor cells.</p>
          <table class="pipeline-filter__table">
            <thead>
              <tr>
                <th>Potential Indication</th>
                <th>Region</th>
                <th>Phase 1</th>
                <th>Phase 2</th>
                <th>Phase 3</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Non-Small Cell Lung Cancer (NSCLC)</td>
                <td>Global</td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase1">●</span></td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase2">●</span></td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase3">●</span></td>
                <td></td>
              </tr>
              <tr>
                <td>Colorectal Cancer (CRC)</td>
                <td>Global</td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase1">●</span></td>
                <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase2">●</span></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
  attachPipelineJS(el);
  return el;
};
