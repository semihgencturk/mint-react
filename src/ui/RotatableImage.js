import React from "react";
import styled from "styled-components";

const RotatableImageContainer = styled.img`
  width: ${(props) => (props.width ? props.width : "20")}%;
  height: fit-content;
  transform: ${(props) => (props.rotate ? "rotate(10deg)" : "rotate(-10deg)")};
  border-radius: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const RotatableImage = ({ rotate, src, alt, width }) => {
  return (
    <RotatableImageContainer
      src={src}
      alt={alt}
      rotate={rotate}
      width={width}
    />
  );
};

export default RotatableImage;
