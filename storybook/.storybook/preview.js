import '../styles/global.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: {
        mobileSmall: { name: 'Mobile Small', styles: { width: '375px', height: '812px' } },
        mobile: { name: 'Mobile', styles: { width: '743px', height: '1024px' } },
        tablet: { name: 'Tablet', styles: { width: '744px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
        largeDesktop: { name: 'Large Desktop', styles: { width: '1440px', height: '900px' } },
        xlDesktop: { name: 'XL Desktop', styles: { width: '1920px', height: '1080px' } },
      },
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
