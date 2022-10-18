import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import NavbarNonColapsableItem from "../ui/NavbarNonColapsableItem";
import MintGreenLogo from "../assets/MintGreenLogo.png";
import MintBlackLogo from "../assets/MintBlackLogo.png";
import InternalLogo from "../ui/InternalLogo";
import NavbarHamburger from "./NavbarHamburger";

const NavbarContainer = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  background: ${(props) => (props.mainNavBar ? "black" : "transparent")};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding-left: 5%;
    width: 95%;
  }
`;

const Navbar = ({ type }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [mainNavBar, setMainNavBar] = useState(false);

  const navBarScrollingHandler = () => {
    window.scrollY >= 125 ? setMainNavBar(true) : setMainNavBar(false);
  };

  window.addEventListener("scroll", navBarScrollingHandler);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <NavbarContainer mainNavBar={mainNavBar}>
      {windowSize.innerWidth > 768 ? (
        <>
          <NavbarNonColapsableItem
            type={mainNavBar ? "white" : type}
            title="Hakkımızda"
            linkTo="/"
          />
          <NavbarNonColapsableItem
            type={mainNavBar ? "white" : type}
            title="Sponsorluk"
            linkTo="/Iletisim"
          />
          <NavbarNonColapsableItem
            type={mainNavBar ? "white" : type}
            title="İletişim"
            linkTo="/Iletisim"
          />
          <InternalLogo
            // src={type && mainNavBar == "white" ? MintGreenLogo : MintBlackLogo}
            src={
              mainNavBar
                ? MintGreenLogo
                : type == "black"
                ? MintBlackLogo
                : MintGreenLogo
            }
            alt="Ytu-Mint-Logo"
            width={5}
            linkTo="/"
          />
          <NavbarNonColapsableItem
            type={mainNavBar ? "white" : type}
            title="Topluluklar"
            linkTo="/Topluluklar"
          />
          <NavbarNonColapsableItem
            type={mainNavBar ? "white" : type}
            title="Takımlar"
            linkTo="/Takimlar"
          />
          <NavbarNonColapsableItem
            type={mainNavBar ? "white" : type}
            title="Etkinlikler"
            linkTo="/Etkinlikler"
          />
        </>
      ) : (
        <>
          <InternalLogo
            src={
              mainNavBar
                ? MintGreenLogo
                : type == "black"
                ? MintBlackLogo
                : MintGreenLogo
            }
            alt="Ytu-Mint-Logo"
            width={windowSize.innerWidth > 500 ? "10" : "15"}
            linkTo="/"
          />
          <NavbarHamburger />
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
