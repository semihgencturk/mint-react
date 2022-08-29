import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InternalLinkButtonContainer = styled.div`
  width: 75%;
  text-decoration: none;
  background-color: transparent;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  box-shadow: 10px -10px 0 -3px black;
  padding: 10px 20px 10px 20px;
  font-size: ${(props) => props.fontSize && props.fontSize}px;
  width: fit-content;
  cursor: pointer;
  color: white;
  :hover {
    top: -10px;
    left: 10px;
    box-shadow: 0 0 0 -3px white;
  }
`;

const InternalLinkButton = ({ to, title, fontSize }) => {
  return (
    <Link to={to}>
      <InternalLinkButtonContainer fontSize={fontSize}>
        {title}
      </InternalLinkButtonContainer>
    </Link>
  );
};

export default InternalLinkButton;
