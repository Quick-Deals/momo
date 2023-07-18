import { styled } from "styled-components";
import { heroTop2, joinbutton, momoLogo } from "../assets";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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

  useEffect(() => {
    if (scrolled) {
      setIsOpen(false);
    }
  }, [scrolled]);

  useEffect(() => {
    const widthOnLoad = window.innerWidth;

    if (widthOnLoad > 860 && isOpen) {
      return;
    }
    if (widthOnLoad > 860 && !isOpen) {
      setIsOpen(true);
    }

    window.onresize = () => {
      if (window.innerWidth > 860 && isOpen) {
        return;
      }
      if (window.innerWidth > 860 && !isOpen) {
        setIsOpen(true);
        return;
      } else {
        setIsOpen(false);
      }
    };
  }, [isOpen]);

  return (
    <>
      <Nav className={scrolled ? "scrolled" : ""}>
        <Logo>
          <span className="logo"></span>
          <span>Momo</span>
        </Logo>

        <LinkContainer className={isOpen ? "opened" : ""}>
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
        {isOpen ? (
          <Close
            size={24}
            onClick={toggle}
            className="toggleBtn"
            color={"#392d19"}
          />
        ) : (
          <Hamburger
            size={24}
            onClick={toggle}
            className="toggleBtn"
            color={"#392d19"}
          />
        )}
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  & span.heroTop2 {
    position: relative;
    width: 0%;
    height: 0%;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      width: 30%;
      height: 50%;
      max-width: 530px;
      max-height: 530px;
      background: url(${heroTop2}) no-repeat;
      background-position: top right;
      background-size: contain;
    }
  }

  @media screen and (max-width: 860px) {
    padding: 1em 5%;
    & .toggleBtn {
      display: flex;
      cursor: pointer;
    }

    & span.heroTop2 {
      &::before {
        width: 50%;
        height: 20%;
        background-position: top left;
        z-index: 0;
      }
    }
  }

  @media screen and (min-width: 860px) {
    & .toggleBtn {
      display: none;
    }
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
  @media screen and (max-width: 860px) {
    & span.logo {
      width: 40px;
      height: 40px;
      padding: 1em;
      background: url(${momoLogo}) no-repeat center/contain;
    }
  }
`;

const LinkContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;

  @media screen and (max-width: 860px) {
    display: none;

    &.opened {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 4em;
      width: 100%;
      background: #dacab1;
      padding: 3em;
    }
  }

  @media screen and (min-width: 860px) {
    &.opened {
      display: flex;
      flex-direction: row;
      position: relative;
      /* width: 100%;
      background: #dacab1; */
      /* padding: 3em; */
    }
  }
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

const Hamburger = styled(RxHamburgerMenu)``;

const Close = styled(AiOutlineClose)``;
