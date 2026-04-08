import './DashboardCards.css';
import { refBanner } from '../../helpers/reference';

export default {
  title: 'Components/DashboardCards',
  parameters: {
    docs: {
      description: {
        component: '**Production reference:** [homepage](https://www.abbvie.com/), [science](https://www.abbvie.com/science.html)\n\nMetric/stat cards used on 310/321 pages. Displays key statistics like conditions treated, employee count, and sustainability metrics.',
      },
    },
  },
};

/**
 * StatCard — Single stat card showing "75+" conditions treated.
 * The most common dashboard card variant on the homepage.
 */
export const StatCard = () => `
  ${refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}])}
  <div class="dashboard-card dashboard-card--medium-theme dashboard-card--vertical" style="max-width:280px;">
    <div>
      <span class="dashboard-card__stat-number">75</span>
      <span class="dashboard-card__stat-suffix">+</span>
    </div>
    <p class="dashboard-card__label">Conditions treated across our therapeutic areas</p>
  </div>
`;

/**
 * StatsRow — Row of 3 stat cards showing key homepage metrics.
 * Demonstrates how dashboard cards appear in a horizontal row layout.
 */
export const StatsRow = () => `
  ${refBanner([{label:'Homepage',url:'https://www.abbvie.com/'},{label:'Science',url:'https://www.abbvie.com/science.html'}])}
  <div style="display:flex; gap:20px; flex-wrap:wrap;">
    <div class="dashboard-card dashboard-card--medium-theme dashboard-card--vertical" style="flex:1; min-width:200px;">
      <div>
        <span class="dashboard-card__stat-number">75</span>
        <span class="dashboard-card__stat-suffix">+</span>
      </div>
      <p class="dashboard-card__label">Conditions treated across our therapeutic areas</p>
    </div>
    <div class="dashboard-card dashboard-card--medium-theme dashboard-card--vertical" style="flex:1; min-width:200px;">
      <div>
        <span class="dashboard-card__stat-number">~57</span>
        <span class="dashboard-card__stat-suffix">k</span>
      </div>
      <p class="dashboard-card__label">Employees worldwide</p>
    </div>
    <div class="dashboard-card dashboard-card--medium-theme dashboard-card--vertical" style="flex:1; min-width:200px;">
      <div>
        <span class="dashboard-card__stat-number">32</span>
        <span class="dashboard-card__stat-suffix">%</span>
      </div>
      <p class="dashboard-card__label">Reduction in GHG emissions since 2015</p>
    </div>
  </div>
`;

/**
 * DarkThemeCard — Navy background with white text stat card.
 * Used in dark-themed sections such as Join Us and corporate areas.
 */
export const DarkThemeCard = () => `
  ${refBanner([{label:'Homepage',url:'https://www.abbvie.com/'}])}
  <div class="dashboard-card dashboard-card--dark dashboard-card--vertical" style="max-width:280px;">
    <div>
      <span class="dashboard-card__stat-number">50</span>
      <span class="dashboard-card__stat-suffix">+</span>
    </div>
    <p class="dashboard-card__label">Years of pharmaceutical innovation</p>
  </div>
`;
