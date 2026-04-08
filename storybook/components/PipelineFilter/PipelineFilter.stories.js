import './PipelineFilter.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/PipelineFilter',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [pipeline](https://www.abbvie.com/science/pipeline.html)\n\nInteractive pipeline browser with search, sort dropdown, checkbox filters (Focus Area, Phase, Type), and compound cards showing phase status. 90+ compounds. Only page with this component.',
      },
    },
  },
};

export const Default = () => refBanner([{label:'Pipeline',url:'https://www.abbvie.com/science/pipeline.html'}]) + `
  <div class="pipeline-filter">
    <div class="pipeline-filter__toolbar">
      <input type="text" class="pipeline-filter__search" placeholder="Search compounds..." />
      <select class="pipeline-filter__sort">
        <option>Sort: A-Z</option>
        <option>Sort: Z-A</option>
        <option>Sort: Phase</option>
      </select>
      <button class="pipeline-filter__toggle">
        <span class="pipeline-filter__toggle-icon">&#9776;</span> Filter
      </button>
    </div>

    <div class="pipeline-filter__panel">
      <div class="pipeline-filter__panel-header">
        <span class="pipeline-filter__panel-title">Filter by</span>
        <button class="pipeline-filter__clear">Clear All</button>
      </div>
      <div class="pipeline-filter__group">
        <div class="pipeline-filter__group-heading">Focus Area</div>
        <div class="pipeline-filter__checkboxes">
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Immunology</label>
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Oncology</label>
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Neuroscience</label>
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Eye Care</label>
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Aesthetics</label>
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Other Specialties</label>
        </div>
      </div>
      <div class="pipeline-filter__group">
        <div class="pipeline-filter__group-heading">Phase</div>
        <div class="pipeline-filter__checkboxes">
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Phase 1</label>
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Phase 2</label>
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Phase 3</label>
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Submitted</label>
          <label class="pipeline-filter__checkbox-label"><input type="checkbox" /> Approved</label>
        </div>
      </div>
    </div>

    <div class="pipeline-filter__results-count">Showing 3 of 90+ compounds</div>

    <!-- Compound 1 -->
    <div class="pipeline-filter__card">
      <h3 class="pipeline-filter__compound-name">ABBV-951 (Foscarbidopa / Foslevodopa)</h3>
      <p class="pipeline-filter__compound-target">Continuous subcutaneous infusion of levodopa/carbidopa prodrugs</p>
      <table class="pipeline-filter__table">
        <thead>
          <tr>
            <th>Potential Indication</th>
            <th>Region</th>
            <th>Phase</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Advanced Parkinson's Disease</td>
            <td>US</td>
            <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--approved">Approved</span></td>
            <td>Approved Oct 2024</td>
          </tr>
          <tr>
            <td>Advanced Parkinson's Disease</td>
            <td>EU</td>
            <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--submitted">Submitted</span></td>
            <td>Under Review</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Compound 2 -->
    <div class="pipeline-filter__card">
      <h3 class="pipeline-filter__compound-name">ABBV-400</h3>
      <p class="pipeline-filter__compound-target">c-Met-targeting antibody-drug conjugate (ADC)</p>
      <table class="pipeline-filter__table">
        <thead>
          <tr>
            <th>Potential Indication</th>
            <th>Region</th>
            <th>Phase</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Non-Small Cell Lung Cancer (NSCLC)</td>
            <td>Global</td>
            <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase3">Phase 3</span></td>
            <td>Enrolling</td>
          </tr>
          <tr>
            <td>Colorectal Cancer (CRC)</td>
            <td>Global</td>
            <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase2">Phase 2</span></td>
            <td>Enrolling</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Compound 3 -->
    <div class="pipeline-filter__card">
      <h3 class="pipeline-filter__compound-name">Rinvoq (Upadacitinib)</h3>
      <p class="pipeline-filter__compound-target">Selective JAK1 inhibitor</p>
      <table class="pipeline-filter__table">
        <thead>
          <tr>
            <th>Potential Indication</th>
            <th>Region</th>
            <th>Phase</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Crohn's Disease</td>
            <td>US</td>
            <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--approved">Approved</span></td>
            <td>Approved May 2023</td>
          </tr>
          <tr>
            <td>Systemic Lupus Erythematosus</td>
            <td>Global</td>
            <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase3">Phase 3</span></td>
            <td>Enrolling</td>
          </tr>
          <tr>
            <td>Giant Cell Arteritis</td>
            <td>Global</td>
            <td><span class="pipeline-filter__phase-badge pipeline-filter__phase-badge--phase1">Phase 1</span></td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;
