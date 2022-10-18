import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarNonColapsableItemContainer = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => props.type && props.type};

  :hover {
    color: #f05454;
  }
`;

const NavbarNonColapsableItem = ({ type, title, linkTo }) => {
  return (
    <Link to={linkTo}>
      <NavbarNonColapsableItemContainer type={type}>
        {title}
      </NavbarNonColapsableItemContainer>
    </Link>
  );
};

export default NavbarNonColapsableItem;
