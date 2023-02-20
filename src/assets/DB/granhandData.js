const granhandPageStructure = [
  {
    id: 1,
    name: "Projects",
    des1: "- 프로젝트 서브페이지로 넘어갈 때 사용자가 클릭할 영역을 알기 쉽도록 hover 이벤트 효과. 마우스를 올렸을 때, Greyscale효과가 사라지고 TranslateY로 위로 살짝 움직임",
    des2: "- 서브페이지를 소개하는 영역의 내용이 반복됨으로 map 메서드를 사용",
    des3: "- 라우터 NavLink를 이용해 새로고침 없이 서브페이지로 이동",
  },
  {
    id: 2,
    name: "Projects SubPages ('Projects'의 상세 페이지)",
    des1: "- 이전으로 돌아가기 버튼에 Router useNavigate를 이용한 내비게이션 설정",
    des2: "- '페이지 구성'과 '문제 및 해결'의 내용을 map 메서드로 작성. 데이터는 useState, useEffect, async/await, axios를 이용해 Public폴더에 저장한 JSON 파일을 출력",
    des3: "- swiper를 이용한 슬라이드 이용",
    des4: "- 제작한 웹 사이트로 이동할 수 있도록 'Go see the site'버튼 마련",
  },
  {
    id: 3,
    name: "About Me",
    des1: "- 'Let's Connet' 버튼을 눌렀을 때 바로 이력서를 볼 수 있도록 외부 페이지와 연결 (Footer의 'RESUME'버튼과 같은 페이지)",
  },
  {
    id: 4,
    name: "Header",
    des1: "- 로고 이미지를 클릭하면 메인인 projects로 이동하도록 Router Link로 연결",
  },
  {
    id: 5,
    name: "App.js",
    des1: "- 각 페이지를 Route로 연결",
    des2: "- 에러 발생 시, NotFoundPage로 연결",
  },
  {
    id: 6,
    name: "GoUp 버튼",
    des1: "- 페이지 맨 위로 돌아갈 때 쉽게 올라갈 수 있도록 GoUp 버튼을 마련",
    des2: "- 사용자 편의를 생각하여 hover시 버튼이 조금 위로 올라가고 흐리던 버튼이 또렷하게 보이도록 디자인",
    des3: "- useState, useEffect, behavior:'smooth'를 이용해 스크롤에 따른 이동 구현",
  },
  {
    id: 7,
    name: "내비게이션 (메뉴 탭)",
    des1: "- Router NavLink를 사용해 페이지 이동. NavLink 특성인 논리 연산자로 탭의 색 변화",
  },
];

export default granhandPageStructure;
