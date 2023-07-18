import { styled } from "styled-components";
import { joinbutton, momoLogo } from "../assets";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (scrollPosition > 0) {
      setScrolled(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Nav className={scrolled ? "scrolled" : ""}>
      <Logo>
        <span className="logo"></span>
        <span>Momo</span>
      </Logo>

      <LinkContainer>
        <NavLinks>
          <a href="">Home</a>
        </NavLinks>
        <NavLinks>
          <a href="#features">Why Momo</a>
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
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;

  &.scrolled {
    background: #dacab1;
    filter: drop-shadow(2px 6px 10px rgba(0, 0, 0, 0.2));
  }

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
