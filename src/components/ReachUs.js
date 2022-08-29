import React from "react";
import styled from "styled-components";
import ExternalLinkButton from "../ui/ExternalLinkButton";
import SocialMediaIcons from "./SocialMediaIcons";

const ReachUsContainer = styled.div`
  width: 100%;
`;

const ReachUsContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5vh 0 5vh 0;
  margin: 0 auto;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5vh;
`;

const SocialMedias = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;
`;

const Mail = styled.p`
  font-size: 20px;
  font-weight: 900;
`;

const LinkButtonsContainer = styled.div`
  display: flex;
  gap: 2%;
  width: 100%;
  justify-content: center;
`;

const ReachUs = ({
  linkedin,
  twitter,
  instagram,
  youtube,
  mail,
  member,
  sponsorship,
}) => {
  return (
    <>
      <ReachUsContainer>
        <ReachUsContentContainer>
          <SocialMedias>
            <SocialMediaIcons
              linkedin={linkedin}
              twitter={twitter}
              instagram={instagram}
              youtube={youtube}
            />
          </SocialMedias>
          <Mail>{mail}</Mail>
          {/* <LinkButton link="/Hakkimizda" text="Yönetim Kurulumuza Ulaşın" /> */}
          <LinkButtonsContainer>
            <ExternalLinkButton href={member} title="Aramıza Katıl" />
            <ExternalLinkButton href={sponsorship} title="Sponsor Ol" />
          </LinkButtonsContainer>
        </ReachUsContentContainer>
      </ReachUsContainer>
    </>
  );
};

export default ReachUs;
