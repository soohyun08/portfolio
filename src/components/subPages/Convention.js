function Convention({ convention }) {
  return (
    <>
      {/*       {convention.map((list) => {
        return (
          <div className="convention">
            <h5>{list.title}</h5>
            <ul key={list.id}>
              <li>{list.item1}</li>
              <li>{list.item2}</li>
              <li>{list.item3}</li>
              <li>{list.item4}</li>
              <li>{list.item5}</li>
              <li>{list.item6}</li>
            </ul>
          </div>
        );
      })} */}

      <ul>
        <li>들여쓰기</li>
        <li>공백문자 2개를 사용한다.</li>
      </ul>

      <ul>
        <li>문장종료</li>
        <li>세미콜론(;)을 필수로 한다.</li>
      </ul>

      <ul>
        <li>JSON</li>
        <li>JSON파일을 이용할 경우, 절대 경로로 public 폴더에 저장한다.</li>
      </ul>

      <ul>
        <li>HTML</li>
        <li>웹표준과 웹접근성에 따라 HTML은 시멘틱마크업에 따라 작성한다.</li>
      </ul>

      <ul>
        <li>변수</li>
        <li>
          되도록 const 상수를 사용하며 변하는 값의 경우 let 변수를 사용한다.
        </li>
        <li>const와 let은 사용 시점에 선언 및 할당한다.</li>
        <li>전역변수는 사용하지 않는다. </li>
      </ul>

      <ul>
        <li>폴더 정리</li>
        <li>
          layout 폴더에는 페이지의 큼직한 레이아웃 컴포넌트인 Header, Footer,
          Projects, About로 구성한다.
        </li>
        <li>
          components 폴더는 레이아웃 외의 컴포넌트로 구성한다. (Navigation,
          GoUp버튼, NotFoundPage 등)
        </li>
        <li>
          서로 연관된 파일들은 하나의 폴더에 넣어준다. 예)프로젝트 서브 페이지
        </li>
      </ul>

      <ul>
        <li>폴더명</li>
        <li>
          Project Sub Page는 제작한 프로젝트 수만큼 만들고, 프로젝트 수가 많지
          않기 때문에 파일명은 SubPage1, SubPage2, SubPage3과 같이 동일한 이름에
          숫자만 다르게 표기한다.
        </li>
        <li>테스트 파일은 테스트 대상 파일명 .test 를 붙여준다.</li>
        <li>
          스타일 시트 파일(CSS)은 스타일 시트 적용할 파일명과 동일하나 시작은
          소문자로 맞춘다.
        </li>
      </ul>

      <ul>
        <li>스타일</li>
        <li>폰트와 리셋 외의 스타일로는 SCSS를 사용한다.</li>
        <li>
          각 컴포넌트에 적용하는 SCSS 스타일은 따로 style 폴더에 저장하지 않고,
          해당 컴포넌트와 같은 폴더에 저장한다.
        </li>
      </ul>

      <ul>
        <li>문법</li>
        <li>eslint 기본문법에 따른다.</li>
      </ul>

      <ul style={{ width: "627px" }}>
        <li>네이밍 규칙</li>
        <li>
          식별자명은 리액트 컴포넌트와 겹치지 않게 카멜 표기법으로 작성한다.
        </li>
        <li>배열의 이름은 복수형으로 작성한다.</li>
        <li>
          form 사용시 id/className 값을 필수로 입력하며, name과 동일하게
          입력한다.
        </li>
        <li>반환 값이 boolean형인 함수는 'is'로 시작한다.</li>
        <li>
          이벤트가 연결되어 있는 경우 on을 사용하고, 이벤트가 발생했을 때
          호출되는 실제 Function은 handle 접두사를 붙인다.
        </li>
        <li>이름이 겹치는 경우 on+명사+동사, handle+명사+동사 로 작성한다.</li>
      </ul>
    </>
  );
}

export default Convention;
