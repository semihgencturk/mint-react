import React from "react";
import Navbar from "../components/Navbar";
import DetailBundle from "../components/DetailBundle";
import Upcoming from "../components/Upcoming";
import Sponsorships from "../components/Sponsorships";
import ReachUs from "../components/ReachUs";
import Members from "../components/Members";
import { astridContent } from "../contents/Contents";
import AboutUs from "../components/AboutUs";
import UpDivider from "../ui/UpDivider";

const Astrid = () => {
  return (
    <>
      <Navbar />

      <DetailBundle
        background={astridContent.bundle.background}
        logo={astridContent.bundle.logo}
        title={astridContent.bundle.title}
        sponsorships={astridContent.sponsorships}
      />

      <UpDivider text="HAKKIMIZDA" />

      <AboutUs
        aboutUs={astridContent.aboutUs.aboutUs}
        mission={astridContent.aboutUs.mission}
        vission={astridContent.aboutUs.vission}
        image1={astridContent.aboutUsImages[0]}
        image2={astridContent.aboutUsImages[1]}
      />

      <Upcoming
        title="YARIŞMALAR"
        achievements={astridContent.achievements.achievements}
        image1={astridContent.achievementsImages[0]}
        image2={astridContent.achievementsImages[0]}
      />

      <Sponsorships sponsorships={astridContent.sponsorships} />

      <Members
        title="TAKIM ÜYELERİ"
        members={astridContent.teamMembers.teamMembers}
        image1={astridContent.teamMembersImages[0]}
        image2={astridContent.teamMembersImages[1]}
        image3={astridContent.teamMembersImages[2]}
      />

      <ReachUs
        linkedin={astridContent.links.linkedin}
        twitter={astridContent.links.twitter}
        instagram={astridContent.links.instagram}
        youtube={astridContent.links.youtube}
        mail={astridContent.links.mail}
        member={astridContent.links.member}
        sponsorship={astridContent.links.sponsorship}
      />
    </>
  );
};

export default Astrid;
