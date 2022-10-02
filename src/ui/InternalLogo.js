import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InternalLogoContainer = styled.a`
  width: ${(props) => props.width && props.width}%;
  height: auto;
  cursor: pointer;
  :hover {
    transform: translateY(-10px);
  }
`;
const InternalLogoImage = styled.img`
  width: 100%;
  height: auto;
`;
const InternalLogo = ({ src, alt, width, linkTo }) => {
  return (
    <InternalLogoContainer width={width}>
      <Link to={linkTo}>
        <InternalLogoImage src={src} alt={alt} />
      </Link>
    </InternalLogoContainer>
  );
};

export default InternalLogo;
