import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: aliceblue;
  width: 300px;
  height: 100px;
  line-height: 100px;
  margin: 70px auto 50px;
  text-align: center;
  &:hover {
    color: red;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>
        <Link to="/">
          {/* <img src="" alt="" /> */}
          이미지 로고
        </Link>
      </h1>
    </HeaderContainer>
  );
}

export default Header;
