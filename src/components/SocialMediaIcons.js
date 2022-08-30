import React from "react";
import styled from "styled-components";

const SocialMediaIconsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 1%;
  background-color: transparent;
  font-size: 50px;
`;

const SocialMediaIcon = styled.span`
  color: black;

  :hover {
    color: #f05454;
  }
`;

const SocialMediaIcons = ({ linkedin, twitter, instagram, youtube }) => {
  return (
    <SocialMediaIconsContainer>
      <a href={linkedin} target="_blank" rel="noreferrer">
        <SocialMediaIcon
          className="fa-brands fa-linkedin"
          aria-hidden="true"
        ></SocialMediaIcon>
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href={twitter} target="_blank" rel="noreferrer">
        <SocialMediaIcon
          className="fa-brands fa-twitter-square"
          aria-hidden="true"
        ></SocialMediaIcon>
        <span className="sr-only">Twitter</span>
      </a>
      <a href={instagram} target="_blank" rel="noreferrer">
        <SocialMediaIcon
          className="fa-brands fa-instagram-square"
          aria-hidden="true"
        ></SocialMediaIcon>
        <span className="sr-only">instagram</span>
      </a>
      <a href={youtube} target="_blank" rel="noreferrer">
        <SocialMediaIcon
          className="fa-brands fa-youtube-square"
          aria-hidden="true"
        ></SocialMediaIcon>
        <span className="sr-only">Youtube</span>
      </a>
    </SocialMediaIconsContainer>
  );
};

export default SocialMediaIcons;
