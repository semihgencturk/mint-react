import React from "react";
import styled from "styled-components";
import NavbarNonColapsableItem from "../ui/NavbarNonColapsableItem";
import MintGreenLogo from "../assets/MintGreenLogo.png";
import Logo from "../ui/Logo";

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
  z-index: 1;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarNonColapsableItem title="Hakkımızda" linkTo="/" />
      <NavbarNonColapsableItem title="Sponsorluk" linkTo="/Iletisim" />
      <NavbarNonColapsableItem title="İletişim" linkTo="/Iletisim" />
      <Logo src={MintGreenLogo} alt="Ytu-Mint-Logo" width={70} />
      <NavbarNonColapsableItem title="Topluluklar" linkTo="/Topluluklar" />
      <NavbarNonColapsableItem title="Takımlar" linkTo="/Takimlar" />
      <NavbarNonColapsableItem title="Etkinlikler" linkTo="/Etkinlikler" />
    </NavbarContainer>
  );
};

export default Navbar;
