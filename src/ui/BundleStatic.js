import React from "react";
import styled from "styled-components";

const BundleStaticContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const BundleStaticNumber = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: 900;
  background: linear-gradient(to bottom, transparent 50%, #aacfd0 50%);
`;

const BundleStaticText = styled.div`
  color: #f05454;
  font-size: 40px;
  text-align: center;
`;

const BundleStatic = ({ number, text }) => {
  return (
    <BundleStaticContainer>
      <BundleStaticNumber>{number}</BundleStaticNumber>
      <BundleStaticText>{text}</BundleStaticText>
    </BundleStaticContainer>
  );
};

export default BundleStatic;
