import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ExternalLogo from "../ui/ExternalLogo";
import InternalLogo from "../ui/InternalLogo";

const DetailBundleContainer = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8vh;
  align-items: center;
`;
const DetailBundleBackground = styled.img`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("${(props) => props.src && props.src}");
`;

const LogoContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
`;

const DetailBundleTitle = styled.div`
  font-size: 50px;
  line-height: 2;
  font-family: Russo One;
  z-index: 1;
  text-align: center;
`;

const DetailBundleSponsorhips = styled.div`
  color: white;
  width: 90%;
  height: 15vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2%;
  font-size: 40px;
  // border-style: solid;
  // border-width: 3px;
  // border-color: white;
  // box-shadow: 10px -10px 0 -3px white;
  // padding: 10px 20px 10px 20px;
  // cursor: pointer;
  // :hover {
  //   top: -10px;
  //   left: 10px;
  //   box-shadow: 0 0 0 -3px white;
  // }
  z-index: 1;

  img {
    margin-bottom: 2vh;
    text-align: center;
  }
`;

const DetailBundle = ({ background, logo, title, sponsorships }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <DetailBundleContainer>
      <DetailBundleBackground src={background.src} alt={background.alt} />
      <LogoContainer>
        <InternalLogo
          src={logo.src}
          alt={logo.alt}
          width={windowSize.innerWidth > 768 ? "20" : "40"}
          linkTo={logo.linkTo}
        />
        <DetailBundleTitle>{title}</DetailBundleTitle>
      </LogoContainer>
      <DetailBundleSponsorhips>
        {sponsorships.map((sponsorship) => (
          <ExternalLogo
            key={sponsorship.src}
            src={sponsorship.src}
            alt={sponsorship.alt}
            width={windowSize.innerWidth > 768 ? "5" : "20"}
            linkTo={sponsorship.linkTo}
          />
        ))}
      </DetailBundleSponsorhips>
    </DetailBundleContainer>
  );
};

export default DetailBundle;
