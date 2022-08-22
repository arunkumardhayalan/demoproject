import '@storybook/addon-storysource';
import '@storybook/addon-controls';
import '../src/index.css'
// import '@storybook/addon-links';
// import '@storybook-addon-designs';
import '@storybook/addon-a11y';
import '@storybook/theming';
// import '@storybook-design-token'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }