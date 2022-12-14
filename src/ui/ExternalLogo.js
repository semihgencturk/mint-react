import React from "react";
import styled from "styled-components";

const ExternalLogoContainer = styled.a`
  width: ${(props) => props.width && props.width}%;
  height: auto;
  cursor: pointer;
  :hover {
    transform: translateY(-10px);
  }
`;
const ExternalLogoImage = styled.img`
  width: 100%;
  height: auto;
`;
const ExternalLogo = ({ src, alt, width, linkTo }) => {
  return (
    <ExternalLogoContainer width={width} href={linkTo} target="__blank">
      <ExternalLogoImage src={src} alt={alt} />
    </ExternalLogoContainer>
  );
};

export default ExternalLogo;
