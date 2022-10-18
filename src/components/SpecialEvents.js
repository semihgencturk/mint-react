import React from "react";
import styled from "styled-components";
import RotatableImage from "../ui/RotatableImage";

const SpecialEventsContainer = styled.div`
  width: 90%;
  height: fit-content;
  padding: 5vh 5% 5vh 5%;
  background-color: #4b6587;
  display: flex;
  justify-content: space-between;
`;

const SpecialEventContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
`;

const SpecialEventTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  font-family: Russo One;
  color: white;
`;

const SpecialEventText = styled.div`
  font-size: 18px;
  color: white;
`;

const SpecialEventsButtons = styled.div`
  width: 100%;
  margin-top 5vh;
  display: flex;
  gap: 5vh;

`;

const SpecialEventsButton = styled.a`
  width: 25%;
  height: 5vh;
  font-size: 18px;
  background: linear-gradient(
    90deg,
    rgba(247, 215, 22, 1) 0%,
    rgba(242, 76, 76, 1) 100%
  );
  border-radius: 50px;
  font-family: Russo One;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  :hover {
    cursor: pointer;
    color: white !important;
  }

  :visited {
    color: black;
  }
`;

const SpecialEvents = ({ title, text, banner }) => {
  return (
    <SpecialEventsContainer>
      <SpecialEventContentContainer>
        <SpecialEventTitle>{title}</SpecialEventTitle>
        <SpecialEventText>{text}</SpecialEventText>
        <SpecialEventsButtons>
          <SpecialEventsButton
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfOJNjh6oaHvKc0_7brflQfDYX3KuWziqmCLOMx597Dp0Klpw/viewform"
          >
            Bilgi Al
          </SpecialEventsButton>
          <SpecialEventsButton
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfOJNjh6oaHvKc0_7brflQfDYX3KuWziqmCLOMx597Dp0Klpw/viewform"
          >
            Katıl
          </SpecialEventsButton>
        </SpecialEventsButtons>
      </SpecialEventContentContainer>
      <RotatableImage
        src={banner.src}
        alt={banner.alt}
        rotate={false}
        width={15}
      />
    </SpecialEventsContainer>
  );
};

export default SpecialEvents;
