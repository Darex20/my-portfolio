import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaGitAlt, FaGithub, FaLinux, FaAws } from 'react-icons/fa';
import { SiVercel, SiExpress, SiSpring, SiC, SiCplusplus, SiMongodb, SiMysql, SiPostgresql, SiHeroku, SiNetlify, SiUnity, SiWordpress, SiGoland, SiBlender, SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiR, SiApachekafka, SiKubernetes, SiDocker, SiMicrosoftazure, SiGooglecloud, SiApachespark, SiFlask } from 'react-icons/si';
import mixerGif from '../assets/mixer-800x600.gif';

const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const SkillCard = styled.div`
  background-color: ${props => props.theme.body === '#1c1c1c' ? '#FFF' : '#000'};
  color: ${props => props.theme.body === '#1c1c1c' ? '#000' : '#FFF'};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: calc(33.33% - 20px);
    height: auto;
    padding: 10px;
  }
`;

const SkillIcon = styled.div`
  font-size: 4em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 5px;
  }
`;

const SkillName = styled.div`
  font-size: 1.2em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const MixerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const MixerImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const MixerTitle = styled.h2`
  font-size: 2em;
  margin-top: 20px;
  color: ${({ theme }) => theme.text};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-top: 10px;
  }
`;

const skillsData = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'PyTorch', icon: <SiPytorch /> },
  { name: 'scikit-learn', icon: <SiScikitlearn /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'Keras', icon: <SiKeras /> },
  { name: 'R', icon: <SiR /> },
  { name: 'Kafka', icon: <SiApachekafka /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Azure', icon: <SiMicrosoftazure /> },
  { name: 'GCP', icon: <SiGooglecloud /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Spark', icon: <SiApachespark /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Spring Framework', icon: <SiSpring /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'ReactJS', icon: <FaReact /> },
  { name: 'ExpressJS', icon: <SiExpress /> },
  { name: 'NodeJS', icon: <FaNodeJs /> },
  { name: 'C', icon: <SiC /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Heroku', icon: <SiHeroku /> },
  { name: 'Netlify', icon: <SiNetlify /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'WordPress', icon: <SiWordpress /> },
  { name: 'Golang', icon: <SiGoland /> },
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'Blender', icon: <SiBlender /> },
  { name: 'Unity', icon: <SiUnity /> },
];

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsList>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsList>
      <MixerContainer>
        <MixerImage src={mixerGif} alt="DJ Mixer" />
        <MixerTitle>I'm also really passionate about music!</MixerTitle>
      </MixerContainer>
    </SkillsSection>
  );
};

export default Skills;
