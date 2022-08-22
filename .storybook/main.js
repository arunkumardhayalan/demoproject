module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    "../src/**/*.stories.jx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/theming"
    // "@storybook-design-token"

    // "@storybook/addon-links",
    // "storybook-addon-designs",
    // "@storybook/addon-a11y",
    // "@storybook/addon-console"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
