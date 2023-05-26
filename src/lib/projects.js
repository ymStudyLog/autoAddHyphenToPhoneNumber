const projects = [
  {
    id: 1,
    title: '인스타그램 클론 코딩 프로젝트 리팩토링',
    achievement:
      '클린 코드 작성법을 공부하고 이를 바탕으로 코드 리팩토링을 할 수 있게 되었다.',
    start: '2022-07-04',
    deadline: '2022-07-06',
    repository: 'https://github.com/ymStudyLog/wanted-pre-onboarding-fe',
    readme:
      'https://github.com/ymStudyLog/wanted-pre-onboarding-fe/blob/main/README.md',
    organization:
      'https://github.com/Wanted-Pre-Onboarding-FE-Team5/pre-assginment-refactoring',
    spec: ['JavaScript', 'React', 'styled-components'],
    personalTask: [],
    teamTask: [
      '서로의 과제를 발표하면서 코드 리뷰해주기',
      'react custom hook, 클린 코드에 대해서 함께 스터디하고 직접 프로젝트에 적용하기',
    ],
    lookBack: [
      '팀 프로젝트 진행시 분업의 중요성에 대해 생각해 볼 수 있었던 계기였다. 함께 코드를 처음부터 작성하는 것이 비효율적이었다.',
      'json-server 라이브러리를 처음 알게 되어 지금은 가장 좋아하는 라이브러리 중 하나 되었다.',
    ],
  },
  {
    id: 2,
    title: '검색어 추천 기능을 가진 영화 정보 사이트 제작',
    achievement: '직접 알고리즘을 짜보는 경험을 할 수 있었다.',
    start: '2022-07-07',
    deadline: '2022-07-13',
    repository: 'https://github.com/ymStudyLog/fussy_string_matching',
    readme:
      'https://github.com/ymStudyLog/fussy-string-matching/blob/main/README.md',
    organization: 'https://github.com/Wanted-Pre-Onboarding-FE-Team5/WMovie5',
    spec: ['JavaScript', 'React', 'json-server', 'react-query', 'recoil', 'styled-components'],
    personalTask: [
      '추천 검색어 Presentational 컴포넌트 담당 : position 속성을 활용',
      '검색어 추천 기능 담당 : fussy string matching 로직을 직접 만들어봤다. Fuse.js라는 fussy 매칭 라이브러리를 활용해서 비교하면서 만들었다. 자세한 내용은 리드미 확인',
    ],
    teamTask: [
      '프로젝트 기획에 figma를 사용',
      'git flow를 연습하면서 github 활용 방법 스터디',
    ],
    lookBack: [
      '직접 알고리즘을 짜는 것이 얼마나 힘든지 알 수 있었지만 재미있었다.',
      'github을 드디어 제대로 활용할 수 있게 된 것 같아서 뿌듯했다.',
    ],
  },
  {
    id: 3,
    title: 'TypeScript로 차트를 포함한 광고 플랫폼 사이트 제작',
    achievement:
      'TypeScript를 React에 적용할 수 있게 되었고, 이 과제를 통해 나만의 data fetching 모델과 비즈니스 로직의 틀이 잡혔다.',
    start: '2022-07-14',
    deadline: '2022-07-20',
    repository: 'https://github.com/ymStudyLog/ad-platform-dashboard-ym',
    readme:
      'https://github.com/ymStudyLog/ad-platform-dashboard-ym/blob/main/README.md',
    organization:
      'https://github.com/Wanted-Pre-Onboarding-FE-Team5/ad-platform-dashboard',
    spec: ['TypeScript', 'React', 'json-server', 'date-fns', 'recharts', 'recoil', 'mui'],
    personalTask: [
      'default layout + 모바일 반응형 메뉴바 : mui 프레임워크를 활용해서 레이아웃 구현',
      'TotalAdStatus 컴포넌트 담당(Presentatianl + logic) : Presentational 컴포넌트부터 data fetching, 비즈니스 로직까지 전체 과정을 구현',
      '데이터 필터링 드롭다운 컴포넌트 담당 : recoil을 사용했는데 이 부분에서 문제가 있어서 에러가 생겼다. 제출 후 수정 과정 => 리드미 확인',
    ],
    teamTask: [
      'TypeScript 스터디 - 최대한 type을 전부 작성하고 모르면 any를 써도 되는 것으로 합의',
      'git commit과 branch 컨벤션을 생성해서 좀 더 체계적인 git flow 사용',
    ],
    lookBack: [
      'recoil에 대해 제대로 이해하지 못한 것 같아서 다시 공부해야 했다.',
      'date-fns 라이브러리를 처음 접했는데 이것도 나중에 즐겨 사용하는 라이브러리가 되었다.',
    ],
  },
  {
    id: 4,
    title:
      "기업 과제 - '지원자 모집 폼'과 '모집한 지원자 확인 페이지' 제작",
    achievement: 'styled-components로 디테일한 스타일링을 연습해 볼 수 있었다.',
    start: '2022-07-21',
    deadline: '2022-07-27',
    repository: 'https://github.com/ymStudyLog/snplab-admin-ym',
    readme: 'https://github.com/ymStudyLog/snplab-admin-ym/blob/main/README.md',
    organization:
      'https://github.com/Wanted-Pre-Onboarding-FE-Team5/snplab-admin',
    spec: ['TypeScript', 'React', 'json-server', 'recoil', 'react-hook-form', 'mui'],
    personalTask: [
      '랜딩 페이지 및 data fetching 모델 담당',
      '지원 폼 레이아웃 담당 : checkbox, radio 구현시 label 요소를 활용해서 스타일링. 또한 label과 input 요소 사이 이벤트 버블링 현상이 발생하여 이 것에 대해 공부하고 문제를 해결',
      'admin 페이지의 검색창(Presentational + logic)담당 : 검색창 맨 앞에 검색어 필터링 드롭다운에서 query string의 앞 부분을 만들고, 그 query string에 검색어를 합치게 로직을 작성. 과제 1에서의 경험을 활용하여 useRef로 렌더링 최적화 적용',
    ],
    teamTask: [
      '매일 매일 issue card를 작성하고 이에 맞춰 commit message 작성',
    ],
    lookBack: [
      '데이터 폼을 이렇게까지 스타일링해 본 적이 없어서 재미있었다.',
      'react에서는 form 데이터를 제출하려면 third-party의 도움이 필요하다는 것을 알 수 있었다.',
      '거주지역 데이터가 form 제출시 database에 들어오지 않아서 나중에 수정했다. => 리드미 확인',
    ],
  },
  {
    id: 5,
    title: '기업 과제 - 간단한 수업 스케줄러 제작',
    achievement:
      'database 구조를 설계해보았다. 전역 상태 관리에 대한 기본 틀이 잡혔다.',
    start: '2022-07-28',
    deadline: '2022-07-30',
    repository: 'https://github.com/ymStudyLog/engall-class-schedule-ym',
    readme:
      'https://github.com/ymStudyLog/engall-class-schedule-ym/blob/main/README.md',
    organization:
      'https://github.com/Wanted-Pre-Onboarding-FE-Team5/engall-class-schedule',
    spec: ['TypeScript', 'React', 'json-server', 'date-fns', 'recoil', 'styled-components'],
    personalTask: [
      '헤더+바탕, 메인 내용이 들어갈 하얀 박스 컴포넌트 + 요일 타이틀 레이아웃 담당 : 기업에서 제공한 figma 데이터로 각자 페이지를 구성하는 최소 단위의 레이아웃들을 분업해서 구현. 가능하면 재사용할 수 있는 형태로 컴포넌트를 구현',
      'data fetching 모델 담당',
      '수업 스케줄들을 렌더링 할 주간 스케줄 페이지 담당(Presentational + logic) : 간단하게나마 database의 구성을 직접 설계해 볼 수 있었던 과제. 프로그램이 자동으로 현재 날짜를 가져와서 이것을 기준으로 일주일(월~일) 데이터를 불러오게 했는데 여기에서 로직이 부실해서 많은 버그와 에러가 생겼다. => 리드미 확인',
    ],
    teamTask: [],
    lookBack: [
      '처음에 디자인이 주어져서 atomic design을 따라 컴포넌트들을 전부 분리해서 구현해볼까 했는데 만만치 않다는 것을 알 수 있었다.',
      'database 구조 설계가 얼마나 중요한지 깨달았다.',
    ],
  },
  {
    id: 6,
    title: '기업 과제 - 간단한 호텔 예약 사이트 제작',
    achievement: 'react-query 라이브러리 사용 경험, 무한 스크롤 구현',
    start: '2022-08-01',
    deadline: '2022-08-06',
    repository: 'https://github.com/ymStudyLog/tripbtoz-ym',
    readme: 'https://github.com/ymStudyLog/tripbtoz-ym/blob/main/README.md',
    organization: 'https://github.com/Wanted-Pre-Onboarding-FE-Team5/tripbtoz',
    spec: ['TypeScript', 'React', 'json-server', 'react-query', 'date-fns', 'styled-components'],
    personalTask: [
      'data fetching 모델 담당 : 사용자가 선택한 투숙 인원을 query string으로 필터링',
      '예약 로직 담당 : 예약 버튼 클릭시 localStorage에 데이터 저장',
      '무한스크롤, 10개씩 limit가 적용된 호텔 데이터 렌더링 담당 : react-query 사용, 호텔 정보 레이아웃을 재사용한 로딩바 사용',
    ],
    teamTask: [],
    lookBack: [
      '호텔 예약시 기존에 제공된 호텔 데이터에 예약정보를 저장하게 설계했으나 호텔 데이터에는 예약 정보가 있는 것이 적절하지 않을 것 같다는 피드백을 받아 localStorage에 저장하는 방식으로 변경했다.',
    ],
  },
];

export default projects;