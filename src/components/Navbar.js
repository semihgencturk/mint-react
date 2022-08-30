import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import NavbarNonColapsableItem from "../ui/NavbarNonColapsableItem";
import MintGreenLogo from "../assets/MintGreenLogo.png";
import InternalLogo from "../ui/InternalLogo";
import NavbarHamburger from "./NavbarHamburger";

const NavbarContainer = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  background: black;
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

const Navbar = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

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
    <NavbarContainer>
      {windowSize.innerWidth > 768 ? (
        <>
          <NavbarNonColapsableItem title="Hakkımızda" linkTo="/" />
          <NavbarNonColapsableItem title="Sponsorluk" linkTo="/Iletisim" />
          <NavbarNonColapsableItem title="İletişim" linkTo="/Iletisim" />
          <InternalLogo
            src={MintGreenLogo}
            alt="Ytu-Mint-Logo"
            width={5}
            linkTo="/"
          />
          <NavbarNonColapsableItem title="Topluluklar" linkTo="/Topluluklar" />
          <NavbarNonColapsableItem title="Takımlar" linkTo="/Takimlar" />
          <NavbarNonColapsableItem title="Etkinlikler" linkTo="/Etkinlikler" />
        </>
      ) : (
        <>
          <InternalLogo
            src={MintGreenLogo}
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
