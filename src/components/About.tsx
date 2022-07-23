import React from 'react';
import { StyledAboutContainer } from '../styles/about';
import { aboutData } from '../utils/data';

const About = () => {
    return (
        <StyledAboutContainer >
            <div className="about-wrapper" id="about">
                <div className="about-title">
                    <h3>About</h3>
                </div>
                <div className="about-info">
                    <div className="about-img-wrapper">
                        <img src={aboutData.portrait} alt="" width="600" height="400" className="about-img" />
                    </div>
                    <div>
                        <p className="text">{aboutData.about}</p>
                    </div>
                </div>
            </div>
        </StyledAboutContainer>
    );
};

export default About;