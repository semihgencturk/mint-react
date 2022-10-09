import React from "react";
import Navbar from "../components/Navbar";
import DetailBundle from "../components/DetailBundle";
import AboutUs from "../components/AboutUs";
import Upcoming from "../components/Upcoming";
import Sponsorships from "../components/Sponsorships";
import ReachUs from "../components/ReachUs";
import Members from "../components/Members";
import { auroraContent } from "../contents/Contents";
import UpDivider from "../ui/UpDivider";

const Aurora = () => {
  return (
    <>
      <Navbar />

      <DetailBundle
        background={auroraContent.bundle.background}
        logo={auroraContent.bundle.logo}
        title={auroraContent.bundle.title}
        sponsorships={auroraContent.sponsorships}
      />

      <UpDivider text="HAKKIMIZDA" />

      <AboutUs
        aboutUs={auroraContent.aboutUs.aboutUs}
        mission={auroraContent.aboutUs.mission}
        vission={auroraContent.aboutUs.vission}
        image1={auroraContent.aboutUsImages[0]}
        image2={auroraContent.aboutUsImages[1]}
      />

      <Upcoming
        title="YARIŞMALAR"
        achievements={auroraContent.achievements.achievements}
        image1={auroraContent.achievementsImages[0]}
        image2={auroraContent.achievementsImages[0]}
      />

      <Sponsorships sponsorships={auroraContent.sponsorships} />

      <Members
        title="TAKIM ÜYELERİ"
        members={auroraContent.teamMembers.teamMembers}
        image1={auroraContent.teamMembersImages[0]}
        image2={auroraContent.teamMembersImages[1]}
        image3={auroraContent.teamMembersImages[2]}
      />

      <ReachUs
        linkedin={auroraContent.links.linkedin}
        twitter={auroraContent.links.twitter}
        instagram={auroraContent.links.instagram}
        youtube={auroraContent.links.youtube}
        mail={auroraContent.links.mail}
        member={auroraContent.links.member}
        sponsorship={auroraContent.links.sponsorship}
      />
    </>
  );
};

export default Aurora;
