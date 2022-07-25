import React, { FC } from 'react';
import styled from 'styled-components';
import { IAbout } from '../utils/types';
import { aboutData } from '../utils/data';
import { SiGmail, SiInstagram, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    // const { text } = useTypewriter({
    //     words: ['Software Engineer', 'JavaScript Developer', 'Gamer', 'Data engineering enthusiast'],
    //     loop: 0,
    //     onLoopDone: () => console.log('loop completed after 3 runs.'),
    //     delaySpeed: 1500,
    //     typeSpeed: 90
    // })
    return (
        <StyledHeroContainer id="home">
            <div className="hero-container">
                <div className="header-wrapper">
                    <div className="img-wrapper">
                        <img src={aboutData.pic} alt="" width="600" height="400" className="about-img" />
                    </div>
                    <div className="about-info">
                        <p>Hi there I'm</p>
                        <h2>{aboutData.name}</h2>
                        <h3>{aboutData.occupation}</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="social-media-container">
                        <a href="mailto:emmanza2@gmail.com " className="handles" target="_blank" rel="noreferrer">
                            <MdOutlineMail size={30} />
                        </a>
                        <a href="https://github.com/emmanz1995" className="handles" target="_blank" rel="noreferrer">
                            <SiGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/emmanuel-okuchukwu-677011b4/" className="handles" target="_blank" rel="noreferrer">
                            <SiLinkedin size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </StyledHeroContainer>
    );
};

export default Hero;

const StyledHeroContainer = styled.section`
  background-color: ${(props: any) => props.theme.primaryColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .hero-container {}
  .img-wrapper {
    width: 200px;
  }
  .about-img {
    width: 100%;
    height: auto;
    clip-path: circle(40%);
  }
  .header-wrapper {
    width: 470px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contact {
    margin: 15px 0;
  }
  .social-media-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .handles {
    border-radius: 100%;
    color: ${(props: any) => props.theme.light};
  }
  .about-info {
    color: ${(props: any) => props.theme.light};
  }
  
  @media screen and (max-width: ${(props: any) => props.theme.sm}) {
    display: flex;
    flex-direction: column;
    .header-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`