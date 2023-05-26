module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'mobile': { min: '320px' },
      /** mobile-vertical && mobile-horizontal
       * @media (min-width: 321px and max-width: 480px) { ... }
       */
      'mobile-extra': { min: '481px' },
      /** bigger than mobile && smaller than tablet
       * @media (min-width: 481px and max-width: 767px) { ... }
       */
      'tablet': { min: '768px' },
      /** bigger than tablet-vertical && smaller than tablet-horizontal
       * @media (min-width: 768px and max-width: 1024px) { ... }
       */
      'desktop': { min: '1025px' },
      /* all devices bigger than tablet incl.desktop,monitor
       * @media (min-width: 1224px) { ... }
       */

      '$card': { max: '319px' },
      /** smaller than mobile-vertical
       * @media (max-width: 320px) {...}
       */
      '$midmobile': { max: '465px' },
      /** Breakpoint for only used in src/components/Comment.jsx
       * @media (max-width: 465px) {...}
       */
      '$swiper': { max: '920px' },
      /** Breakpoint for Projects' swiper component
       *  @media (max-width: 920px) {...}
       */
    },
  },
  plugins: [],
};
