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

const Upcoming = ({ achievements, images, title }) => {
  return (
    <UpcomingContainer>
      {images.map((image) => (
        <RotatableImage
          src={image.src}
          alt={image.alt}
          rotate={true}
          width="15%"
          key={image.src}
        />
      ))}

      <VerticalHeaderListBox title={title} items={achievements} />
    </UpcomingContainer>
  );
};
export default Upcoming;
