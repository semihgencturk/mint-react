import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ReachUs from "../components/ReachUs";
import { eventsData, homeContent } from "../contents/Contents";
import EventCard from "../ui/EventCard";
import JuniorProjectInfo from "../assets/JuniorProjectInfo.png";
import MintWeekends from "../assets/mintWeekends.png";
import RotatableImage from "../ui/RotatableImage";
import BreakfastBanner from "../assets/events/BreakfastBanner.png";

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
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const EventOptions = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const EventOption = styled.button`
  border-style: solid;
  border-width: 3px;
  box-shadow: 10px -10px 0 -3px black;
  padding: 10px 20px 10px 20px;
  width: fit-content;
  cursor: pointer;
  :hover {
    top: -10px;
    left: 10px;
    box-shadow: 0 0 0 -3px white;
  }

  transform: ${(props) =>
    props.active ? "translateY(0);" : "translateY(10px);"};
`;

const EventsPart = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const EventImages1 = styled.div`
  width: 25%;
  padding-left: 5vh;
  display: flex;
  flex-direction: column;
  gap: 5vh;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const EventImages2 = styled.div`
  width: 25%;
  padding-right: 5vh;
  display: flex;
  flex-direction: column;
  gap: 5vh;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Events = () => {
  // const [eventType, setEventType] = useState([
  //   "summit",
  //   "workshop",
  //   "competition",
  //   "meetup",
  // ]);

  // function handleShowEvents() {
  //   setEventType([]);
  //   setEventType([["summit", "workshop", "competition", "meetup"]]);
  // }
  // function handleShowSummits() {
  //   setEventType([]);
  //   setEventType(["summit"]);
  // }
  // function handleShowWorkshops() {
  //   setEventType([]);
  //   setEventType(["workshop"]);
  // }
  // function handleShowCompetitions() {
  //   setEventType([]);
  //   setEventType(["competition"]);
  // }
  // function handleShowMeetUps() {
  //   setEventType([]);
  //   setEventType(["meetup"]);
  // }

  const [showSummits, setShowSummits] = useState(true);
  const [showWorkshops, setShowWorkshops] = useState(true);
  const [showCompetitions, setShowCompetitions] = useState(true);
  const [showMeetUps, setShowMeetUps] = useState(true);
  const [isAllActive, setIsAllActive] = useState(true);
  const [isSummitsActive, setIsSummitsActive] = useState(false);
  const [isWorkshopActive, setIsWorkshopActive] = useState(false);
  const [isCompetitionActive, setIsCompetitionActive] = useState(false);
  const [isMeetupActive, setIsMeetupActive] = useState(false);

  function handleShowEvents() {
    setShowSummits(true);
    setShowWorkshops(true);
    setShowCompetitions(true);
    setShowMeetUps(true);

    setIsAllActive(true);
    setIsSummitsActive(false);
    setIsWorkshopActive(false);
    setIsCompetitionActive(false);
    setIsMeetupActive(false);
  }
  function handleShowSummits() {
    setShowSummits(true);
    setShowWorkshops(false);
    setShowCompetitions(false);
    setShowMeetUps(false);

    setIsAllActive(false);
    setIsSummitsActive(true);
    setIsWorkshopActive(false);
    setIsCompetitionActive(false);
    setIsMeetupActive(false);
  }
  function handleShowWorkshops() {
    setShowSummits(false);
    setShowWorkshops(true);
    setShowCompetitions(false);
    setShowMeetUps(false);

    setIsAllActive(false);
    setIsSummitsActive(false);
    setIsWorkshopActive(true);
    setIsCompetitionActive(false);
    setIsMeetupActive(false);
  }
  function handleShowCompetitions() {
    setShowSummits(false);
    setShowWorkshops(false);
    setShowCompetitions(true);
    setShowMeetUps(false);

    setIsAllActive(false);
    setIsSummitsActive(false);
    setIsWorkshopActive(false);
    setIsCompetitionActive(true);
    setIsMeetupActive(false);
  }
  function handleShowMeetUps() {
    setShowSummits(false);
    setShowWorkshops(false);
    setShowCompetitions(false);
    setShowMeetUps(true);

    setIsAllActive(false);
    setIsSummitsActive(false);
    setIsWorkshopActive(false);
    setIsCompetitionActive(false);
    setIsMeetupActive(true);
  }
  return (
    <>
      <Navbar type="black" />
      <EventsContainer>
        <EventHeader> Yaklasan Etkinliklerimiz</EventHeader>
        <EventOptions>
          <EventOption onClick={handleShowEvents} active={isAllActive}>
            Tumu
          </EventOption>
          <EventOption onClick={handleShowSummits} active={isSummitsActive}>
            Zirveler
          </EventOption>
          <EventOption onClick={handleShowWorkshops} active={isWorkshopActive}>
            Egitimler
          </EventOption>
          <EventOption
            onClick={handleShowCompetitions}
            active={isCompetitionActive}
          >
            Yarismalar
          </EventOption>
          <EventOption onClick={handleShowMeetUps} active={isMeetupActive}>
            Bulusmalar
          </EventOption>
        </EventOptions>
        <EventsPart>
          <EventImages1>
            <RotatableImage
              rotate={true}
              src={MintWeekends}
              alt="mint-etkinlik-afişi"
              width={100}
            />
            <RotatableImage
              rotate={false}
              src={JuniorProjectInfo}
              alt="mint-etkinlik-afişi"
              width={100}
            />
          </EventImages1>
          {/* {eventsData.map((event) =>
          eventType.include(event.type.toLowerCase()) ? (
            <EventItemContainer key={event.date}>
              <EventItemType>{event.type}</EventItemType>
              <EventItemInfos>
                <EventItemName>{event.name}</EventItemName>
                <EventItemBy>{event.by}</EventItemBy>
                <EventItemLocation>{event.location}</EventItemLocation>
                <EventItemDate>{event.date}</EventItemDate>
                <EventItemButton>Hemen Başvur</EventItemButton>
              </EventItemInfos>
            </EventItemContainer>
          ) : null
        )} */}
          {showSummits && showWorkshops && showCompetitions && showMeetUps ? (
            <EventsContainer>
              {eventsData.map((event) => (
                <EventCard key={event.date} event={event} />
              ))}
            </EventsContainer>
          ) : null}
          {showSummits &&
          !showWorkshops &&
          !showCompetitions &&
          !showMeetUps ? (
            <EventsContainer>
              {eventsData.map((event) =>
                event.type == "zirve" ? (
                  <EventCard key={event.date} event={event} />
                ) : null
              )}
            </EventsContainer>
          ) : null}
          {!showSummits &&
          showWorkshops &&
          !showCompetitions &&
          !showMeetUps ? (
            <EventsContainer>
              {eventsData.map((event) =>
                event.type == "eğitim" ? (
                  <EventCard key={event.date} event={event} />
                ) : null
              )}
            </EventsContainer>
          ) : null}
          {!showSummits &&
          !showWorkshops &&
          showCompetitions &&
          !showMeetUps ? (
            <EventsContainer>
              {eventsData.map((event) =>
                event.type == "yarışma" ? (
                  <EventCard key={event.date} event={event} />
                ) : null
              )}
            </EventsContainer>
          ) : null}
          {!showSummits &&
          !showWorkshops &&
          !showCompetitions &&
          showMeetUps ? (
            <EventsContainer>
              {eventsData.map((event) =>
                event.type == "buluşma" ? (
                  <EventCard key={event.date} event={event} />
                ) : null
              )}
            </EventsContainer>
          ) : null}
          <EventImages2>
            <RotatableImage
              rotate={false}
              src={BreakfastBanner}
              alt="mint-etkinlik-afişi"
              width={100}
            />
            <RotatableImage
              rotate={true}
              src={MintWeekends}
              alt="mint-etkinlik-afişi"
              width={100}
            />
          </EventImages2>
        </EventsPart>
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
