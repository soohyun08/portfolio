const granhandCnS = [
  {
    id: 1,
    challenges:
      "장바수니에서 개별 삭제는 가능하지만 '선택한 상품 삭제'를 눌렀을 때 작동하지 않음. ",
    solution:
      "로컬 스토리지에 '선택상품 삭제'시 전용하는 함수를 하나 더 만듬. 선택된 모든 상품의 ID를 배열로 받아, map으로 돌력 삭제될 수 있게 함.",
    imgUrl: "/granhand/err1.PNG",
  },
  {
    id: 2,
    challenges:
      "장바구니 '모든 상품 선택'버튼을 누른 다음, '선택상품 삭제' 버튼을 눌렀을 때 '모든 상품 선택'의 체크가 없어지지 않음.",
    solution: "'모든 상품 선택'버튼을 useState로 제어.",
    imgUrl: "/granhand/err2.PNG",
  },
  {
    id: 3,
    challenges:
      "장바구니에 넣은 상품 중 선택한 상품의 수량과 가격을 실시간으로 계산하여 총금액이 보이도록 했지만, 이미 선택했던 상품의 개수를 변경했을 때 총금액에 적용되지 않는다.",
    solution:
      "며칠 간 계속 방법을 찾았지만 끝내 해결하지 못했다. 수량 변경이 가능한 count 버튼이 있어서 실시간으로 변경되는 상품 개수와 체크한 상품만 가격을 산출하는데 더 적절한 코드가 있는 거 같다. 앞으로 배우면서 다시 도전.",
    imgUrl: "/granhand/err3.PNG",
  },
  {
    id: 4,
    challenges:
      "기존 웹 사이트에서는 상품에 원하는 문구를 새길 수 있다. 스탬핑 문구를 객체로 localStorage에 저장해서 장바구니에 뿌려주려 했으나 localStorage에 객체를 저장하고 스탬핑 문구만 가져오는 방법을 찾아내지 못했다.",
    solution:
      "앞으로도 localStorage를 종종 사용해야하기에 사용법을 더 공부해야 함.",
    imgUrl: "/granhand/err4.PNG",
  },
];

export default granhandCnS;
