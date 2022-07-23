import React from 'react';
import { StyledEducationContainer } from '../styles/education'
import { educationData } from '../utils/data';

interface IEducation {
    school: string;
    course: string;
    grade: string;
    certificate: string;
    content: string[];
}

const Education = () => {
    const education = educationData
    return (
        <StyledEducationContainer id="education">
            <div className="education-wrapper">
                <div className="education-title">
                    <h3>Education</h3>
                </div>
                <div>
                    {education.map((edu: IEducation, index: number) => (
                        <div className="education" key={index}>
                            <div>
                                <h3>{edu.course}</h3>
                            </div>
                            <div>
                                <p>Finished with: {edu.grade}</p>
                                <div className="certificate-img-wrapper">
                                    <img src={edu.certificate} alt="" className="certificate-img" width="400" height="600" />
                                </div>
                                <p>What I learnt: {edu.content.join(', ')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StyledEducationContainer>
    );
};

export default Education;