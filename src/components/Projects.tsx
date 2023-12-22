import React from 'react';
import { StyledProjectContainer } from '../styles/projects';
import { projectData } from '../utils/data';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = projectData;
    const projectsAnimation = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
    }
    return (
        <StyledProjectContainer id="projects">
            <motion.div className="project-wrapper" variants={projectsAnimation} initial="hidden" animate="visible">
                <div className="project-title">
                    <h3>Projects</h3>
                </div>
                <div className="flex-project">
                    {projects.map((project) => (
                        <motion.div key={project.id} className="project-card" whileHover={{ scale: 1.1 }}>
                            <div>
                                <div>
                                    <img src={project.screenshot} width="600" height="400" alt="" className="project-img" />
                                </div>
                            </div>
                            <div className="project-content">
                                <span>
                                    <h4 className="title">{project.title}</h4>
                                </span>
                                {/*<span>*/}
                                {/*    <p className="headline">{project.headline}</p>*/}
                                {/*</span>*/}
                                <span className="btn-flex">
                                    <a href={project.gitHub} className="button-link" target="_blank"rel="noreferrer">View GitHub</a>
                                    <a href={project.webLinks} className="button-link" target="_blank" rel="noreferrer">Live Preview</a>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </StyledProjectContainer>
    );
};

export default Projects;