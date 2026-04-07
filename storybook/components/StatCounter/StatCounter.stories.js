import styles from './StatCounter.css?inline';

export default {
  title: 'Components/StatCounter',
};

const wrap = (html) => `<style>${styles}</style>${html}`;

export const InlineStat = {
  render: () =>
    wrap(`
    <div class="stat-counter">
      <div>
        <span class="stat-counter__number">75</span><span class="stat-counter__suffix">+</span>
      </div>
      <p class="stat-counter__label">Conditions treated across our portfolio</p>
    </div>
  `),
};

export const GridStats = {
  render: () =>
    wrap(`
    <div class="stat-counter-grid">
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">50</span><span class="stat-counter__suffix">M+</span>
        </div>
        <p class="stat-counter__label">Patients served worldwide</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__prefix">$</span><span class="stat-counter__number">7.7</span><span class="stat-counter__suffix">B</span>
        </div>
        <p class="stat-counter__label">Invested in R&amp;D annually</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">175</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Countries with our products</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">48</span><span class="stat-counter__suffix">K</span>
        </div>
        <p class="stat-counter__label">Employees globally</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">30</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Approved therapies</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">100</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Clinical trials underway</p>
      </div>
    </div>
  `),
};
