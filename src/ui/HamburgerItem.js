import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HamburgerItemContainer = styled.button`
  background-color: #6ac068;
  color: white;
  border: 2px double black;
  border-radius: 25px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;

  :hover {
    color: black;
  }
`;

const HamburgerItem = ({ LinkTo, title }) => {
  return (
    <Link to={LinkTo}>
      <HamburgerItemContainer>{title}</HamburgerItemContainer>
    </Link>
  );
};

export default HamburgerItem;
