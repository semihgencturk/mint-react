import React from "react";
import styled from "styled-components";
import ReachUs from "../components/ReachUs";
import { homeContent, contactContent } from "../contents/Contents";
// import BundleStatic from "../ui/BundleStatic";
import InternalLogo from "../ui/InternalLogo";
import Navbar from "../components/Navbar";

const ContactContainer = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5vh;
  align-items: center;
`;
const ContactHeader = styled.div`
  font-size: 50px;
  font-family: Russo One;
`;
const ContactLogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  background: black;
  padding: 5vh 0 5vh 0;
`;

// const HomeBundleStatics = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   gap: 15%;
//   z-index: 1;
// `;

const Contact = () => {
  return (
    <>
      <Navbar type="black" />
      <ContactContainer>
        <ContactHeader>Bize Ulaşın</ContactHeader>
        <ReachUs
          linkedin={homeContent.links.linkedin}
          twitter={homeContent.links.twitter}
          instagram={homeContent.links.instagram}
          youtube={homeContent.links.youtube}
          mail={homeContent.links.mail}
          member={homeContent.links.member}
          sponsorship={homeContent.links.sponsorship}
        />
        <ContactLogoContainer>
          {contactContent.logos.map((logo) => (
            <InternalLogo
              key={logo.to}
              src={logo.src}
              alt={logo.alt}
              linkTo={logo.linkTo}
              width={10}
            />
          ))}
        </ContactLogoContainer>
        {/* <HomeBundleStatics>
          {homeContent.bundle.statistics.map((statistic) => (
            <BundleStatic
              key={statistic.text}
              number={statistic.number}
              text={statistic.text}
            />
          ))}
        </HomeBundleStatics> */}
      </ContactContainer>
    </>
  );
};

export default Contact;
