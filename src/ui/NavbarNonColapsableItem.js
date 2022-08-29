import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarNonColapsableItemContainer = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: white;
`;

const NavbarNonColapsableItem = ({ title, linkTo }) => {
  return (
    <Link to={linkTo}>
      <NavbarNonColapsableItemContainer>
        {title}
      </NavbarNonColapsableItemContainer>
    </Link>
  );
};

export default NavbarNonColapsableItem;
