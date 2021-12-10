import React from "react";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
} from "./HomeElements";
import Video from "../../Images/video3.mp4";
function HeroSection() {
  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>

      <HomeContent>
        <HomeH1>Gopinath Manohar</HomeH1>
        <HomeP>
          I'm a passionate{" "}
          <span style={{ borderBottom: "3px solid green" }}>Web Developer</span>{" "}
          from Chennai
        </HomeP>
        <span className="float-left">
          <a
            href="https://github.com/GopinathMano"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-github"></i>
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/gopimano1996/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &emsp;
        </span>
      </HomeContent>
    </HomeContainer>
  );
}

export default HeroSection;
