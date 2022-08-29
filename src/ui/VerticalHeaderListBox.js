import React from "react";
import styled from "styled-components";

const VerticalHeaderListBoxContainer = styled.div`
  width: fit-content;
  min-height: 200px;
  height: auto;
  padding: 2vh;
  display: flex;
  justify-content: flex-start;
`;

const VerticalHeaderListHeader = styled.div`
  writing-mode: vertical-lr;
  text-orientation: upright;
  display: flex;
  justify-content: flex-start;
  border-right: solid;
  padding-right: 20px;
  font-weight: 900;
  font-family: Russo One;
  color: #f15412;
`;

const VerticalHeaderLists = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  justify-content: flex-start;
  padding-left: 5vh;
`;

const VerticalHeaderList = styled.a`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  color: black;

  :hover {
    color: #f05454;
  }
`;
const VerticalHeaderListBox = ({ title, items }) => {
  return (
    <VerticalHeaderListBoxContainer>
      <VerticalHeaderListHeader>{title}</VerticalHeaderListHeader>
      <VerticalHeaderLists>
        {items.map((item) => (
          <VerticalHeaderList key={item} href={item.href} target="__blank">
            {item.name}
          </VerticalHeaderList>
        ))}
      </VerticalHeaderLists>
    </VerticalHeaderListBoxContainer>
  );
};

export default VerticalHeaderListBox;
