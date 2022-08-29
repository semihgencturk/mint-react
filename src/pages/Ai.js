import React from "react";
import Navbar from "../components/Navbar";
import DetailBundle from "../components/DetailBundle";
import Upcoming from "../components/Upcoming";
import Sponsorships from "../components/Sponsorships";
import ReachUs from "../components/ReachUs";
import Members from "../components/Members";
import { aiContent } from "../contents/Contents";
import AboutUs from "../components/AboutUs";
import UpDivider from "../ui/UpDivider";

const Ai = () => {
  return (
    <>
      <Navbar />

      <DetailBundle
        background={aiContent.bundle.background}
        logo={aiContent.bundle.logo}
        title={aiContent.bundle.title}
        sponsorships={aiContent.sponsorships}
      />

      <UpDivider text="HAKKIMIZDA" />

      <AboutUs
        aboutUs={aiContent.aboutUs.aboutUs}
        mission={aiContent.aboutUs.mission}
        vission={aiContent.aboutUs.vission}
        image1={aiContent.aboutUsImages[0]}
        image2={aiContent.aboutUsImages[1]}
      />

      <Upcoming
        title="ETKİNLİKLER VE YARIŞMALAR"
        achievements={aiContent.achievements.achievements}
        image1={aiContent.achievementsImages[0]}
      />

      <Sponsorships sponsorships={aiContent.sponsorships} />

      <Members
        title="YÖNETİM KURULUMUZ"
        members={aiContent.teamMembers.teamMembers}
        image1={aiContent.teamMembersImages[0]}
        image2={aiContent.teamMembersImages[1]}
        image3={aiContent.teamMembersImages[2]}
      />

      <ReachUs
        linkedin={aiContent.links.linkedin}
        twitter={aiContent.links.twitter}
        instagram={aiContent.links.instagram}
        youtube={aiContent.links.youtube}
        mail={aiContent.links.mail}
        member={aiContent.links.member}
        sponsorship={aiContent.links.sponsorship}
      />
    </>
  );
};

export default Ai;
