import React from "react";
import styled from "styled-components";

const UpDividerContainer = styled.div`
  width: 99%;
  height: 6vh;
  background: #f5f5f5;
  transform: rotate(-3deg);
  text-align: end;
  color: black;
  font-weight: 900;
  padding: 1vh 1% 0 0;
  font-size: 25px;
  margin-top: -1vh;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const UpDivider = ({ text }) => {
  return (
    <>
      <UpDividerContainer>
        <span className="fa-solid fa-arrow-trend-down"></span>
        {"  "}
        {text}
      </UpDividerContainer>
    </>
  );
};

export default UpDivider;
