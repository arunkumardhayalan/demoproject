import { create } from '@storybook/theming';

export default create({
    base: 'light',
    brandTitle: 'Zinnext Storybook',
    brandUrl: 'https://www.zinnext.com',
    // brandImage: 'https://www.zinnext.com/assets/img/final_logo.svg',  //Zinnext Logo
    brandImage: 'https://realtekconsulting.net/assets/img/realtek-consulting-logo-2.png',
    brandTarget: '_self',
});

// import { create } from '@storybook/theming';

// export default create({
//     base: 'light',

//     colorPrimary: 'hotpink',
//     colorSecondary: 'deepskyblue',

//     // UI
//     appBg: 'white',
//     appContentBg: 'silver',
//     appBorderColor: 'grey',
//     appBorderRadius: 4,

//     // Typography
//     fontBase: '"Open Sans", sans-serif',
//     fontCode: 'monospace',

//     // Text colors
//     textColor: 'black',
//     textInverseColor: 'rgba(255,255,255,0.9)',

//     // Toolbar default and active colors
//     barTextColor: 'silver',
//     barSelectedColor: 'black',
//     barBg: 'hotpink',

//     // Form colors
//     inputBg: 'white',
//     inputBorder: 'silver',
//     inputTextColor: 'black',
//     inputBorderRadius: 4,

//     brandTitle: 'My custom storybook',
//     brandUrl: 'https://example.com',
//     brandImage: 'https://place-hold.it/350x150',
//     brandTarget: '_self',
// });