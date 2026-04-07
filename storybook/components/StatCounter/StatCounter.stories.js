import './StatCounter.css';

export default {
  title: 'Components/StatCounter',
};

export const InlineStat = {
  render: () => `
    <div class="stat-counter">
      <div>
        <span class="stat-counter__number">75</span><span class="stat-counter__suffix">+</span>
      </div>
      <p class="stat-counter__label">Conditions treated across our portfolio</p>
    </div>
  `,
};

export const GridStats = {
  render: () => `
    <div class="stat-counter-grid">
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">90</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Compounds in pipeline</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__prefix">~</span><span class="stat-counter__number">50</span>
        </div>
        <p class="stat-counter__label">New molecular entities</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">9</span>
        </div>
        <p class="stat-counter__label">R&amp;D centers globally</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">75</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Conditions treated</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__number">375</span><span class="stat-counter__suffix">+</span>
        </div>
        <p class="stat-counter__label">Active clinical trials</p>
      </div>
      <div class="stat-counter">
        <div>
          <span class="stat-counter__prefix">$</span><span class="stat-counter__number">10.8</span><span class="stat-counter__suffix">B</span>
        </div>
        <p class="stat-counter__label">Invested in R&amp;D</p>
      </div>
    </div>
  `,
};
