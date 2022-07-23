import React from 'react';
import { StyledSkillsContainer } from '../styles/skills';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiSass, SiStyledcomponents, SiMongodb, SiMysql, SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';
import { skillsData } from '../utils/data';

interface ISkill {
    level: string;
    tech: string;
    icon: string;
}

const Skills = () => {
    const skills = skillsData;
    console.log(skills)
    return (
        <StyledSkillsContainer>
            <motion.div className="skills-wrapper">
                <div className="skills-title">
                    <h3>Skills</h3>
                </div>
                <div className="flex-skills">
                    {skills.map((skill: ISkill) => (
                        <motion.div className="skills" whileHover={{ scale: 1.2, transition: { duration: .2 }}}>
                            <div className="icon-wrapper">
                                <img src={skill.icon} alt="" width="600" height="400" className="icon" />
                            </div>
                            <h6>{skill.tech}</h6>
                            <div className="skill-bar"><div style={{ width: `${skill.level}` }}><p>{skill.level}</p></div></div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </StyledSkillsContainer>
    );
};

export default Skills;