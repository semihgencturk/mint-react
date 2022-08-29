import React from "react";
import styled from "styled-components";

const ExternalLinkButtonContainer = styled.a`
  text-decoration: none;
  background-color: white;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  box-shadow: 10px -10px 0 -3px black;
  padding: 10px 20px 10px 20px;
  font-size: 25px;
  width: fit-content;
  cursor: pointer;
  color: black !important;
  :hover {
    top: -10px;
    left: 10px;
    box-shadow: 0 0 0 -3px black;
  }
`;

const ExternalLinkButton = ({ href, title }) => {
  return (
    <ExternalLinkButtonContainer href={href} target="_blank">
      {title}
    </ExternalLinkButtonContainer>
  );
};

export default ExternalLinkButton;
