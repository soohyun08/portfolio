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
    name: "Products (상품 정렬)",
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
    des1: "- 상품 페이지에서 '장바구니 담기'를 누르면 알림창이 뜬 다음 장바구니로 이동. 정보는 Local Storage에 저장",
    des2: "- 상품 개별 삭제가 가능하며, 각각의 수량을 장바구니에서 변경할 수 있다. 수량은 1 이하로 내려가지 않으며 수량이 변경되면 실시간으로 금액이 변경된다.",
    des3: "- 체크 박스를 이용해서 다수의 상품을 동시에 선태하여 삭제하거나 주문할 수 있다.",
    des4: "- 금액은 계속 변동되기 때문에 상품 금액을 숫자로 데이터에 저장하고 숫자 3자리마다 콤마를 찍어주는 식을 적용.",
    des5: "- 4만원 이상 주문 시 배송료가 무료가 되도록 함.",
  },
  {
    id: 5,
    name: "즐겨찾기 (wish list)",
    des1: "- Local Storage에 상품정보를 저장하고 위시리스트에 뿌려줌",
    des2: "개별 삭제 가능",
  },
];

export default granhandPageStructure;
