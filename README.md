# 개인 포트폴리오 페이지

### http://ymStudyLog.github.io

gh-pages 패키지를 사용해서 github 블로그로 배포

### 스팩

- React
- tailwindCSS
- Swiper.js

### 성과

- tailwindCSS 프레임워크를 직접 사용해본 후 느낀점

  - 모바일 반응형 디자인에 적용하기에는 적합하지 않다. breakpoint를 전부 커스텀 해야하는데, 프레임워크를 사용하는 메리트가 없어진다.
  - 아주 잘 만들어진 tailwind CSS 공식 문서
  - styled-components에 익숙해져서 긴 클래스명이 매우 거슬림
  - 단순 개인 프로젝트라면 사용해보기 좋음

- 커스텀 breakpoints : 최상위 디렉토리의 tailwind.config.js에서 커스텀

  ```
  module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      screens: {
        //기본 breakpoints
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

//여기서 부터는 위의 breakpoints를 침범하지 않으면서 추가한 breakpoint, 기본 breakpoints와 구분하기 위해서 맨 앞에 '$'를 붙임.
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
      plugins: [],
  };
  ```

### 향후 수정 계획

- Projects에서 스팩 부분에 애니메이션 효과를 넣어 지루하지 않게 스타일링
- 프로젝트들을 시연하는 짧은 영상 클립 디스플레이도 고려 중

:eyes: _Go back to github profile to check the other repositories_ :eyes:
[![github-profile](https://img.shields.io/badge/Github-Profile-blue?style=flat&logo=Git&logoColor=F05032)](https://github.com/ymStudyLog?tab=repositories)
