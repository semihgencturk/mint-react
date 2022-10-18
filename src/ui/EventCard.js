import React from "react";
import styled from "styled-components";

const EventItemContainer = styled.div`
  width: 550px;
  min-height: 20vh;
  height: fit-content;
  border: solid 3px black;
  background: tranparent;
  display: flex;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const EventItemType = styled.div`
  font-size: 20px;
  width: 10%;
  writing-mode: vertical-lr;
  text-orientation: upright;
  background-color: ${(props) => props.color && props.color};
  padding: 2%;
  display: flex;
  font-family: Russo One;
  justify-content: center;
`;

const EventItemInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  div,
  a {
    border-bottom: solid 3px black;
    padding: 5px 20px 5px 20px;
    font-family: Russo One;
    :last-child {
      border-bottom: none;
    }
  }
`;

const EventItemName = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

const EventItemBy = styled.div`
  font-size: 25px;
`;

const EventItemLocation = styled.div`
  font-size: 20px;
`;

const EventItemDate = styled.div`
  font-size: 20px;
`;
const EventItemButton = styled.a`
  font-size: 25px;
  color: red;
  background-color: ${(props) => props.color && props.color};
  text-align: right;
  cursor: pointer;
  text-shadow: 2px 2px #ec7272;
`;

const EventCard = ({ event }) => {
  function color(type) {
    switch (type) {
      case "zirve":
        return "#aacfd0";
      case "eğitim":
        return "#90B77D";
      case "yarışma":
        return "#EC7272";
      case "buluşma":
        return "#FECD70";
      default:
        return "#aacfd0";
    }
  }
  return (
    <EventItemContainer>
      <EventItemType color={color(event.type)}>{event.type}</EventItemType>
      <EventItemInfos>
        <EventItemName>{event.name}</EventItemName>
        <EventItemBy>{event.by}</EventItemBy>
        <EventItemLocation>{event.location}</EventItemLocation>
        <EventItemDate>{event.date}</EventItemDate>
        <EventItemButton color={color(event.type)} href={event.link}>
          {event.situation}
        </EventItemButton>
      </EventItemInfos>
    </EventItemContainer>
  );
};

export default EventCard;
