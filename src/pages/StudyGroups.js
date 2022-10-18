import React from "react";
import Navbar from "../components/Navbar";
import DetailBundle from "../components/DetailBundle";
import { studyGroupContent } from "../contents/Contents";

const StudyGroup = () => {
  return (
    <>
      <Navbar />
      <DetailBundle
        background={studyGroupContent.bundle.background}
        logo={studyGroupContent.bundle.logo}
        title={studyGroupContent.bundle.title}
        sponsorships={studyGroupContent.sponsorships}
      />
    </>
  );
};

export default StudyGroup;
