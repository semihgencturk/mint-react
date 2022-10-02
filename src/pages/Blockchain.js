import React from "react";
import Navbar from "../components/Navbar";
import DetailBundle from "../components/DetailBundle";
import { blockchainContent } from "../contents/Contents";
// import Upcoming from "../components/Upcoming";
// import Sponsorships from "../components/Sponsorships";
// import ReachUs from "../components/ReachUs";
// import Members from "../components/Members";
// import AboutUs from "../components/AboutUs";
// import UpDivider from "../ui/UpDivider";

const Ai = () => {
  return (
    <>
      <Navbar />

      <DetailBundle
        background={blockchainContent.bundle.background}
        logo={blockchainContent.bundle.logo}
        title={blockchainContent.bundle.title}
        sponsorships={blockchainContent.sponsorships}
      />

      {/* <UpDivider text="HAKKIMIZDA" />

      <AboutUs
        aboutUs={blockchainContent.aboutUs.aboutUs}
        mission={blockchainContent.aboutUs.mission}
        vission={blockchainContent.aboutUs.vission}
        image1={blockchainContent.aboutUsImages[0]}
        image2={blockchainContent.aboutUsImages[1]}
      />

      <Upcoming
        title="ETKİNLİKLER VE YARIŞMALAR"
        achievements={blockchainContent.achievements.achievements}
        image1={blockchainContent.achievementsImages[0]}
      />

      <Sponsorships sponsorships={blockchainContent.sponsorships} />

      <Members
        title="YÖNETİM KURULUMUZ"
        members={blockchainContent.teamMembers.teamMembers}
        image1={blockchainContent.teamMembersImages[0]}
        image2={blockchainContent.teamMembersImages[1]}
        image3={blockchainContent.teamMembersImages[2]}
      />

      <ReachUs
        linkedin={blockchainContent.links.linkedin}
        twitter={blockchainContent.links.twitter}
        instagram={blockchainContent.links.instagram}
        youtube={blockchainContent.links.youtube}
        mail={blockchainContent.links.mail}
        member={blockchainContent.links.member}
        sponsorship={blockchainContent.links.sponsorship}
      /> */}
    </>
  );
};

export default Ai;
