import React from "react";
import styled from "styled-components";

const VerticalHeaderBoxContainer = styled.div`
  width: 50%;
  height: fit-content;
  padding: 3vh;
  border-radius: 50px;
  display: flex;
  gap: 5vh;
  //   background: ${(props) => (props.color ? props.color : "#cfe8a9")};
  background: transparent;
  color: black;

  @media (max-width: 768px) {
    width: 80%;
    padding: 1vh;
    gap: 4vh;
  }
`;
const VerticalHeaderBoxHeaderSection = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
`;

const VerticalHeaderBoxHeader = styled.div`
  writing-mode: vertical-lr;
  text-orientation: upright;
  display: flex;
  justify-content: flex-start;
  border-right: solid;
  padding-right: 20px;
  font-weight: 900;
  font-family: Russo One;
  color: ${(props) => (props.color ? props.color : "#cfe8a9")};
`;

const VerticalHeaderBoxText = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const VerticalHeaderBox = ({ color, title, text }) => {
  return (
    <VerticalHeaderBoxContainer>
      <VerticalHeaderBoxHeaderSection>
        <VerticalHeaderBoxHeader color={color}>{title}</VerticalHeaderBoxHeader>
      </VerticalHeaderBoxHeaderSection>
      <VerticalHeaderBoxText>{text}</VerticalHeaderBoxText>
    </VerticalHeaderBoxContainer>
  );
};

export default VerticalHeaderBox;
