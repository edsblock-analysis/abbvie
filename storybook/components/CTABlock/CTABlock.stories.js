import './CTABlock.css';

export default {
  title: 'Components/CTABlock',
};

export const CenteredCTA = {
  render: () => `
    <div class="cta-block">
      <h2 class="cta-block__heading">Explore Opportunities</h2>
      <p class="cta-block__body">
        Join a team that's driven to make a remarkable impact on patients' lives.
        At AbbVie, your work matters—discover roles where you can grow your
        career while advancing transformative science.
      </p>
      <a href="#" class="cta-block__button">Browse Jobs</a>
    </div>
  `,
};

export const CTAWithImage = {
  render: () => `
    <div class="cta-block cta-block--with-image">
      <img
        class="cta-block__image"
        src="https://abbvie.scene7.com/is/image/abbviecorp/woman-in-conference-room?fmt=webp"
        alt="AbbVie professionals collaborating in a conference room"
      />
      <div class="cta-block__content">
        <h2 class="cta-block__heading">Partner with Us</h2>
        <p class="cta-block__body">
          We believe the best breakthroughs happen through collaboration.
          Whether you're in academia, biotech, or healthcare, let's work
          together to bring the next generation of therapies to patients.
        </p>
        <a href="#" class="cta-block__button">Learn More</a>
      </div>
    </div>
  `,
};
