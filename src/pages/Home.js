import React from "react";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import HomeBundle from "../components/HomeBundle";
import AboutUs from "../components/AboutUs";
import Upcoming from "../components/Upcoming";
import Sponsorships from "../components/Sponsorships";
import ReachUs from "../components/ReachUs";
import Members from "../components/Members";
import { homeContent } from "../contents/Contents";

// const InternalLinkButtonContainer = styled.div`
//   display: flex;
//   justify-content: ${(props) => props.position && props.position};
//   align-items: center;
//   width: 90%;
//   padding: 0 5% 0 5%;
//   height: 15vh;
//   background: ${(props) => props.backgroundColor && props.backgroundColor};
// `;

const Home = () => {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <Navbar />
      <div onClick={executeScroll}>
        <HomeBundle
          background={homeContent.bundle.background}
          title={homeContent.bundle.title}
          statistics={homeContent.bundle.statistics}
          sponsorships={homeContent.sponsorships}
        />
      </div>
      <div ref={myRef}>
        <AboutUs
          aboutUs={homeContent.aboutUs.aboutUs}
          mission={homeContent.aboutUs.mission}
          vission={homeContent.aboutUs.vission}
          image1={homeContent.aboutUsImages[0]}
          image2={homeContent.aboutUsImages[1]}
        />
      </div>
      <Upcoming
        title="YAKLAŞAN ETKİNLİKLER"
        achievements={homeContent.upcoming.upcoming}
        image1={homeContent.upcomingImages[0]}
        image2={homeContent.upcomingImages[1]}
      />

      {/* <InternalLinkButtonContainer backgroundColor="#aacfd0" position="center">
        <InternalLinkButton
          title="Etkinlikler Sayfamız"
          to="/Etkinlikler"
          fontSize={25}
        />
      </InternalLinkButtonContainer> */}

      <Sponsorships sponsorships={homeContent.sponsorships} />

      {/* <InternalLinkButtonContainer position="center">
        <InternalLinkButton
          title="Sponsorlar Sayfamıza Gidin"
          to="/Etkinlikler"
          fontSize={25}
        />
      </InternalLinkButtonContainer> */}

      <Members
        title="YÖNETİM KURULUMUZ"
        members={homeContent.members.members}
        image1={homeContent.membersImages[0]}
        image2={homeContent.membersImages[1]}
        image3={homeContent.membersImages[2]}
      />

      {/* <InternalLinkButtonContainer backgroundColor="#aacfd0" position="center">
        <InternalLinkButton
          title="Hakkimizda Sayfamız"
          to="/Etkinlikler"
          fontSize={25}
        />
      </InternalLinkButtonContainer> */}

      <ReachUs
        linkedin={homeContent.links.linkedin}
        twitter={homeContent.links.twitter}
        instagram={homeContent.links.instagram}
        youtube={homeContent.links.youtube}
        mail={homeContent.links.mail}
        member={homeContent.links.member}
        sponsorship={homeContent.links.sponsorship}
      />
    </>
  );
};

export default Home;
