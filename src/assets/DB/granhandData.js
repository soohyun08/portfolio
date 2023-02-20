const granhandPageStructure = [
  {
    id: 1,
    name: "검색 (Search)",
    des1: "- 영어나 한국어로 상품명을 검색할 수 있다.",
    des2: "- .filter()와 .includes()를 사용",
    des3: "- .toLowerCase()를 사용해서 영어 입력시 대소문자 상관 없이 검색 가능",
  },
  {
    id: 2,
    name: "Products",
    des1: "- 이전으로 돌아가기 버튼에 Router useNavigate를 이용한 내비게이션 설정",
    des2: "- '페이지 구성'과 '문제 및 해결'의 내용을 map 메서드로 작성. 데이터는 useState, useEffect, async/await, axios를 이용해 Public폴더에 저장한 JSON 파일을 출력",
    des3: "- swiper를 이용한 슬라이드 이용",
    des4: "- 제작한 웹 사이트로 이동할 수 있도록 'Go see the site'버튼 마련",
  },
  {
    id: 3,
    name: "회원가입 (Join)",
    des1: "- firebase를 사용해서 간단한 회원정보 관리를 할 수 있다.",
    des2: "- 필수요건 모두 채우지 않고 '가입하기' 버튼을 눌렀을 경우 알림창이 뜬다.",
    des3: "- 가입에 성공하면 알림창이 뜬 다음 메인페이지로 이동",
  },
  {
    id: 4,
    name: "장바구니 (cart)",
    des1: "- 로고 이미지를 클릭하면 메인인 projects로 이동하도록 Router Link로 연결",
  },
  {
    id: 5,
    name: "즐겨찾기 (wish list)",
    des1: "- async, await, axios, useEffect를 사용해서 데이터 불러오기",
    des2: "- Routes, Route로 페이지 연결",
  },
];

export default granhandPageStructure;
