import React from "react";
import styled from "styled-components";
import RotatableImage from "../ui/RotatableImage";
import VerticalHeaderListBox from "../ui/VerticalHeaderListBox";

const MembersContainer = styled.div`
  width: 96%;
  height: fit-content;
  padding: 5vh 2% 5vh 2%;
  display: flex;
  justify-content: space-evenly;
  background: #aacfd0;
`;
const MembersImageContainer = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MembersImagesPart1 = styled.div`
  display: flex;
`;

const MembersImagesPart2 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Members = ({ title, members, image1, image2, image3 }) => {
  return (
    <MembersContainer>
      <VerticalHeaderListBox title={title} items={members} />
      <MembersImageContainer>
        <MembersImagesPart1>
          <RotatableImage
            src={image1.src}
            alt={image1.alt}
            rotate={true}
            width="70%"
          />
        </MembersImagesPart1>
        <MembersImagesPart2>
          <RotatableImage
            src={image2.src}
            alt={image2.alt}
            rotate={false}
            width="70%"
          />
        </MembersImagesPart2>
        <MembersImagesPart1>
          <RotatableImage
            src={image3.src}
            alt={image3.alt}
            rotate={true}
            width="70%"
          />
        </MembersImagesPart1>
      </MembersImageContainer>
    </MembersContainer>
  );
};
export default Members;
