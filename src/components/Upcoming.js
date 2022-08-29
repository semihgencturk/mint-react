import React from "react";
import styled from "styled-components";
import RotatableImage from "../ui/RotatableImage";
import VerticalHeaderListBox from "../ui/VerticalHeaderListBox";

const UpcomingContainer = styled.div`
  width: 96%;
  height: fit-content;
  padding: 5vh 2% 5vh 2%;
  display: flex;
  justify-content: space-evenly;
  background: #aacfd0;
`;

const Upcoming = ({ achievements, image1, title }) => {
  return (
    <UpcomingContainer>
      <RotatableImage
        src={image1.src}
        alt={image1.alt}
        rotate={false}
        width="20%"
      />
      <RotatableImage
        src={image1.src}
        alt={image1.alt}
        rotate={true}
        width="20%"
      />

      <VerticalHeaderListBox title={title} items={achievements} />
    </UpcomingContainer>
  );
};
export default Upcoming;
