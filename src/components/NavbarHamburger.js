import React from "react";
import { useState } from "react";
import styled from "styled-components";
import HamburgerItem from "../ui/HamburgerItem";

const NavbarHamburgerContainer = styled.div`
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  top: 5px;
  right: 15px;
`;

const NavbarHamburgerButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 6px 22px;
  color: white;
  border: 2px solid #6ac068;
  border-radius: 30px;
  background-color: #6ac068;
  text-color: white;
  font-family: Arial Black;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background-color: black;
  }
`;

const NavbarHamburgerIcon = styled.div`
  color: white;
`;
const NavbarHamburger = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <NavbarHamburgerContainer>
      <NavbarHamburgerButton onClick={() => setIsExpanded(!isExpanded)}>
        <NavbarHamburgerIcon
          className="fa-solid fa-bars"
          aria-hidden="true"
        ></NavbarHamburgerIcon>
      </NavbarHamburgerButton>
      {isExpanded ? (
        <>
          <HamburgerItem LinkTo="/" title="Hakkımızda " />
          <HamburgerItem LinkTo="/Iletisim" title="Sponsorluk" />
          <HamburgerItem LinkTo="/Iletisim" title="İletişim" />
          <HamburgerItem LinkTo="/Topluluklar" title="Topluluklar" />
          <HamburgerItem LinkTo="/Takimlar" title="Takımlar" />
          <HamburgerItem LinkTo="/Etkinlikler" title="Etkinlikler" />
          <HamburgerItem LinkTo="/Iletisim" title="Üye Başvurusu" />
        </>
      ) : null}
    </NavbarHamburgerContainer>
  );
};

export default NavbarHamburger;
