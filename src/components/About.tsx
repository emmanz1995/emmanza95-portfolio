import React from 'react';
import { StyledAboutContainer } from '../styles/about';
import { aboutData } from '../utils/data';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <StyledAboutContainer id="about" variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}>
            <motion.div className="about-wrapper">
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
            </motion.div>
        </StyledAboutContainer>
    );
};

export default About;