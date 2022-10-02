import React from "react";
import Navbar from "../components/Navbar";
import DetailBundle from "../components/DetailBundle";
import { dataScienceContent } from "../contents/Contents";
// import AboutUs from "../components/AboutUs";
// import Upcoming from "../components/Upcoming";
// import Sponsorships from "../components/Sponsorships";
// import ReachUs from "../components/ReachUs";
// import Members from "../components/Members";
// import UpDivider from "../ui/UpDivider";

const DataScience = () => {
  return (
    <>
      <Navbar />

      <DetailBundle
        background={dataScienceContent.bundle.background}
        logo={dataScienceContent.bundle.logo}
        title={dataScienceContent.bundle.title}
        sponsorships={dataScienceContent.sponsorships}
      />
      {/* 
      <UpDivider text="HAKKIMIZDA" />

      <AboutUs
        aboutUs={dataScienceContent.aboutUs.aboutUs}
        mission={dataScienceContent.aboutUs.mission}
        vission={dataScienceContent.aboutUs.vission}
        image1={dataScienceContent.aboutUsImages[0]}
        image2={dataScienceContent.aboutUsImages[1]}
      />

      <Upcoming
        title="ETKİNLİKLER VE YARIŞMALAR"
        achievements={dataScienceContent.achievements.achievements}
        image1={dataScienceContent.achievementsImages[0]}
      />

      <Sponsorships sponsorships={dataScienceContent.sponsorships} />

      <Members
        title="YÖNETİM KURULUMUZ"
        members={dataScienceContent.teamMembers.teamMembers}
        image1={dataScienceContent.teamMembersImages[0]}
        image2={dataScienceContent.teamMembersImages[1]}
        image3={dataScienceContent.teamMembersImages[2]}
      />

      <ReachUs
        linkedin={dataScienceContent.links.linkedin}
        twitter={dataScienceContent.links.twitter}
        instagram={dataScienceContent.links.instagram}
        youtube={dataScienceContent.links.youtube}
        mail={dataScienceContent.links.mail}
        member={dataScienceContent.links.member}
        sponsorship={dataScienceContent.links.sponsorship}
      /> */}
    </>
  );
};

export default DataScience;
