import { styled } from "styled-components";
import { joinbutton, momoLogo } from "../assets";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <span className="logo"></span>
        <span>Momo</span>
      </Logo>

      <LinkContainer>
        <NavLinks>
          <a href="">Home</a>
        </NavLinks>
        <NavLinks>
          <a href="">Why Momo</a>
        </NavLinks>
        <BuyBtn>
          <p>Buy Momo</p>
        </BuyBtn>
      </LinkContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2em 10%;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  z-index: 99;

  & a {
    text-decoration: none;
    cursor: pointer;
    color: #392c19;
  }
`;

const Logo = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #392c19;
  font-family: Cherry Bomb One;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 5px;
  align-items: center;

  & span {
    display: block;
  }

  & span.logo {
    width: 60px;
    height: 60px;
    background: url(${momoLogo}) no-repeat center/cover;
  }
`;

const LinkContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;
`;

const NavLinks = styled.li`
  color: #392c19;
  font-family: Cherry Bomb One;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const BuyBtn = styled.button`
  min-width: 150px;
  height: 48px;
  outline: none;
  border: none;
  background: url(${joinbutton}) no-repeat;
  background-size: 100%;
  color: #e8d6bc;

  & p {
    color: #dbcab1;
    font-family: Cherry Bomb One;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
