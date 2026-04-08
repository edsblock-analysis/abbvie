import './PipelineFilter.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/PipelineFilter',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [pipeline](https://www.abbvie.com/science/pipeline.html)\n\nPipeline compound cards with 3-column grid: metadata (left) | phase progress bars (center) | expand button (right). Click + to reveal description. Phase bars show filled (navy) vs empty (gray) progress.',
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

const phaseBar = (p1, p2, p3) => `
  <div class="pipeline-filter__phase-bar pipeline-filter__phase-bar--${p1 ? 'filled' : 'empty'}" style="margin:0 2px;"></div>
  <div class="pipeline-filter__phase-bar pipeline-filter__phase-bar--${p2 ? 'filled' : 'empty'}" style="margin:0 2px;"></div>
  <div class="pipeline-filter__phase-bar pipeline-filter__phase-bar--${p3 ? 'filled' : 'empty'}" style="margin:0 2px;"></div>
`;

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

      <h3 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:3.2rem; font-weight:650; color:#071d49; margin:3.2rem 0 1.6rem;">Immunology</h3>

      <!-- ABBV-166 (SKYRIZI + Lutikizumab) — matches screenshot -->
      <div class="pipeline-filter__card">
        <div class="pipeline-filter__card-header">
          <h4 class="pipeline-filter__compound-name">ABBV-166 (SKYRIZI + Lutikizumab)</h4>
          <div class="pipeline-filter__chips">
            <span class="pipeline-filter__chip">Pharmaceutical</span>
          </div>
        </div>

        <div class="pipeline-filter__phases">
          <div class="pipeline-filter__phase-header">
            <span>Potential Indication</span>
            <span>Phase 1</span>
            <span>Phase 2</span>
            <span>Phase 3</span>
            <span>Status</span>
          </div>
          <div class="pipeline-filter__indication-row">
            <span class="pipeline-filter__indication-name">Crohn's Disease</span>
            ${phaseBar(true, true, false)}
            <span></span>
          </div>
          <div class="pipeline-filter__indication-row">
            <span class="pipeline-filter__indication-name">Psoriatic Arthritis</span>
            ${phaseBar(true, true, false)}
            <span></span>
          </div>
        </div>

        <div class="pipeline-filter__expand-col">
          <button class="pipeline-filter__expand-btn" aria-expanded="false" aria-label="Expand compound details">+</button>
        </div>

        <div class="pipeline-filter__card-details">
          <p class="pipeline-filter__description">Skyrizi (risankizumab) is an anti-IL-23 antibody. Lutikizumab is an IL-1a/1b antagonist. Risankizumab + lutikizumab (ABBV-166) are being investigated as a combination therapy for the treatment of Crohn's disease and psoriatic arthritis.</p>
        </div>
      </div>

      <!-- ABBV-141 -->
      <div class="pipeline-filter__card">
        <div class="pipeline-filter__card-header">
          <h4 class="pipeline-filter__compound-name">ABBV-141</h4>
          <div class="pipeline-filter__chips">
            <span class="pipeline-filter__chip">Pharmaceutical</span>
          </div>
        </div>

        <div class="pipeline-filter__phases">
          <div class="pipeline-filter__phase-header">
            <span>Potential Indication</span>
            <span>Phase 1</span>
            <span>Phase 2</span>
            <span>Phase 3</span>
            <span>Status</span>
          </div>
          <div class="pipeline-filter__indication-row">
            <span class="pipeline-filter__indication-name">Idiopathic Pulmonary Fibrosis</span>
            ${phaseBar(true, false, false)}
            <span></span>
          </div>
        </div>

        <div class="pipeline-filter__expand-col">
          <button class="pipeline-filter__expand-btn" aria-expanded="false" aria-label="Expand compound details">+</button>
        </div>

        <div class="pipeline-filter__card-details">
          <p class="pipeline-filter__description">ABBV-141 is a lysophosphatidic acid receptor 1 (LPAR1) antagonist antibody being investigated for the treatment of idiopathic pulmonary fibrosis (IPF). LPAR1 contributes to the underlying pathology of fibrotic diseases and amplifies inflammation and fibrosis in the lungs.</p>
        </div>
      </div>

      <h3 style="font-family:'F37 Lineca Book',Helvetica,sans-serif; font-size:3.2rem; font-weight:650; color:#071d49; margin:3.2rem 0 1.6rem;">Neuroscience</h3>

      <!-- ABBV-951 -->
      <div class="pipeline-filter__card">
        <div class="pipeline-filter__card-header">
          <h4 class="pipeline-filter__compound-name">ABBV-951 (Foscarbidopa / Foslevodopa)</h4>
          <div class="pipeline-filter__chips">
            <span class="pipeline-filter__chip">Pharmaceutical</span>
          </div>
        </div>

        <div class="pipeline-filter__phases">
          <div class="pipeline-filter__phase-header">
            <span>Potential Indication</span>
            <span>Phase 1</span>
            <span>Phase 2</span>
            <span>Phase 3</span>
            <span>Status</span>
          </div>
          <div class="pipeline-filter__indication-row">
            <span class="pipeline-filter__indication-name">Advanced Parkinson's Disease</span>
            ${phaseBar(true, true, true)}
            <span style="font-size:1.2rem; color:#2e7d32; font-weight:700;">Approved</span>
          </div>
        </div>

        <div class="pipeline-filter__expand-col">
          <button class="pipeline-filter__expand-btn" aria-expanded="false" aria-label="Expand compound details">+</button>
        </div>

        <div class="pipeline-filter__card-details">
          <p class="pipeline-filter__description">Continuous subcutaneous infusion of levodopa/carbidopa prodrugs for the treatment of motor fluctuations in patients with advanced Parkinson's disease.</p>
        </div>
      </div>
    </div>
  `;
  attachPipelineJS(el);
  return el;
};
