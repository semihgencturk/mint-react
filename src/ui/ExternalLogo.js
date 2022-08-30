import React from "react";
import styled from "styled-components";

const ExternalLogoContainer = styled.a`
  width: ${(props) => props.width && props.width}%;
  height: fit-content;
  cursor: pointer;
  :hover {
    transform: translateY(-10px);
  }
`;
const ExternalLogoImage = styled.img`
  width: 100%;
  height: fit-content;
`;
const ExternalLogo = ({ src, alt, width, linkTo }) => {
  return (
    <ExternalLogoContainer width={width} href={linkTo}>
      <ExternalLogoImage src={src} alt={alt} />
    </ExternalLogoContainer>
  );
};

export default ExternalLogo;
