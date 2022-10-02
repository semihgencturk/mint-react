import React from "react";
import Navbar from "../components/Navbar";
import DetailBundle from "../components/DetailBundle";
import { cyberContent } from "../contents/Contents";
// import AboutUs from "../components/AboutUs";
// import Upcoming from "../components/Upcoming";
// import Sponsorships from "../components/Sponsorships";
// import ReachUs from "../components/ReachUs";
// import Members from "../components/Members";
// import UpDivider from "../ui/UpDivider";

const Ai = () => {
  return (
    <>
      <Navbar />

      <DetailBundle
        background={cyberContent.bundle.background}
        logo={cyberContent.bundle.logo}
        title={cyberContent.bundle.title}
        sponsorships={cyberContent.sponsorships}
      />

      {/* <UpDivider text="HAKKIMIZDA" />

      <AboutUs
        aboutUs={cyberContent.aboutUs.aboutUs}
        mission={cyberContent.aboutUs.mission}
        vission={cyberContent.aboutUs.vission}
        image1={cyberContent.aboutUsImages[0]}
        image2={cyberContent.aboutUsImages[1]}
      />

      <Upcoming
        title="ETKİNLİKLER VE YARIŞMALAR"
        achievements={cyberContent.achievements.achievements}
        image1={cyberContent.achievementsImages[0]}
      />

      <Sponsorships sponsorships={cyberContent.sponsorships} />

      <Members
        title="YÖNETİM KURULUMUZ"
        members={cyberContent.teamMembers.teamMembers}
        image1={cyberContent.teamMembersImages[0]}
        image2={cyberContent.teamMembersImages[1]}
        image3={cyberContent.teamMembersImages[2]}
      />

      <ReachUs
        linkedin={cyberContent.links.linkedin}
        twitter={cyberContent.links.twitter}
        instagram={cyberContent.links.instagram}
        youtube={cyberContent.links.youtube}
        mail={cyberContent.links.mail}
        member={cyberContent.links.member}
        sponsorship={cyberContent.links.sponsorship}
      /> */}
    </>
  );
};

export default Ai;
