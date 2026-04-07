/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};

export default config;
