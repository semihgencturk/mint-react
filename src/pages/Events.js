import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ReachUs from "../components/ReachUs";
import { homeContent } from "../contents/Contents";

const EventsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 5vh;
  flex-direction: column;
  gap: 5vh;
  align-items: center;
`;

const EventHeader = styled.div`
  font-size: 50px;
`;

const EventOptions = styled.div`
  display: flex;
`;

const EventOption = styled.div`
  background-color: transparent;
  border-style: solid;
  border-width: 3px;
  border-color: black;
  box-shadow: 10px -10px 0 -3px black;
  padding: 10px 20px 10px 20px;
  width: fit-content;
  cursor: pointer;
  :hover {
    top: -10px;
    left: 10px;
    box-shadow: 0 0 0 -3px white;
  }
`;

const EventItemContainer = styled.div`
  width: 550px;
  min-height: 20vh;
  height: fit-content;
  border: solid 3px black;
  background: tranparent;
  display: flex;
`;

const EventItemType = styled.div`
  font-size: 20px;
  width: 10%;
  writing-mode: vertical-lr;
  text-orientation: upright;
  background-color: #aacfd0;
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
  background: #aacfd0;
  text-align: right;
  cursor: pointer;
`;
const Events = () => {
  return (
    <>
      <Navbar />
      <EventsContainer>
        <EventHeader> Yaklasan Etkinliklerimiz</EventHeader>
        <EventOptions>
          <EventOption>Tumu</EventOption>
          <EventOption>Zirveler</EventOption>
          <EventOption>Egitimler</EventOption>
          <EventOption>Yarismalar</EventOption>
          <EventOption>Bulusmalar</EventOption>
        </EventOptions>
        <EventItemContainer>
          <EventItemType>Bulusma</EventItemType>
          <EventItemInfos>
            <EventItemName>Yildiz Yazilim Zirvesi</EventItemName>
            <EventItemBy>Mint</EventItemBy>
            <EventItemLocation>
              Ytu Davutpasa Kampusu Tarihi Hamam
            </EventItemLocation>
            <EventItemDate>25-26-27 Ekim 2022</EventItemDate>
            <EventItemButton>Hemen Başvur</EventItemButton>
          </EventItemInfos>
        </EventItemContainer>
        <EventItemContainer>
          <EventItemType>Bulusma</EventItemType>
          <EventItemInfos>
            <EventItemName>Yildiz Yazilim Zirvesi</EventItemName>
            <EventItemBy>Mint</EventItemBy>
            <EventItemLocation>
              Ytu Davutpasa Kampusu Tarihi Hamam
            </EventItemLocation>
            <EventItemDate>25-26-27 Ekim 2022</EventItemDate>
            <EventItemButton>Hemen Başvur</EventItemButton>
          </EventItemInfos>
        </EventItemContainer>
        <EventItemContainer>
          <EventItemType>Bulusma</EventItemType>
          <EventItemInfos>
            <EventItemName>Yildiz Yazilim Zirvesi</EventItemName>
            <EventItemBy>Mint</EventItemBy>
            <EventItemLocation>
              Ytu Davutpasa Kampusu Tarihi Hamam
            </EventItemLocation>
            <EventItemDate>25-26-27 Ekim 2022</EventItemDate>
            <EventItemButton>Hemen Başvur</EventItemButton>
          </EventItemInfos>
        </EventItemContainer>
        <ReachUs
          linkedin={homeContent.links.linkedin}
          twitter={homeContent.links.twitter}
          instagram={homeContent.links.instagram}
          youtube={homeContent.links.youtube}
          mail={homeContent.links.mail}
          member={homeContent.links.member}
          sponsorship={homeContent.links.sponsorship}
        />
      </EventsContainer>
    </>
  );
};

export default Events;
