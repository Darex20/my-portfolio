import React from 'react';
import styled, { keyframes } from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaBriefcase, FaCode } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../assets/portrait.jpg';
import cvPdf from '../assets/CV-DarioPavlovic.pdf';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 40px 24px 60px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  gap: 20px;
`;

const TiltWrapper = styled.div`
  width: 300px;
  height: 300px;
  animation: ${fadeUp} 0.6s ease both;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 240px;
    height: 240px;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #6f42c1;
  box-shadow: 0 0 0 8px ${({ theme }) => theme.body === '#1c1c1c' ? 'rgba(111,66,193,0.18)' : 'rgba(111,66,193,0.12)'};

  @media (max-width: 600px) {
    width: 240px;
    height: 240px;
  }
`;

const Greeting = styled.h1`
  font-size: 3.8em;
  margin: 0;
  animation: ${fadeUp} 0.6s ease 0.1s both;

  @media (max-width: 600px) {
    font-size: 2.4em;
  }
`;

const TypingLine = styled.p`
  font-size: 1.8em;
  margin: 0;
  animation: ${fadeUp} 0.6s ease 0.2s both;

  .typing-text {
    color: #6f42c1;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    font-size: 1.3em;
  }
`;

const Bio = styled.p`
  font-size: 1.25em;
  line-height: 1.8;
  max-width: 580px;
  opacity: 0.8;
  margin: 0;
  animation: ${fadeUp} 0.6s ease 0.3s both;

  @media (max-width: 600px) {
    font-size: 1.05em;
  }
`;

const Divider = styled.div`
  width: 48px;
  height: 3px;
  background: #6f42c1;
  border-radius: 2px;
  animation: ${fadeUp} 0.6s ease 0.35s both;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  animation: ${fadeUp} 0.6s ease 0.4s both;
  width: 100%;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #6f42c1;
  color: white;
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 1.2em;
  font-family: monospace;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(111, 66, 193, 0.35);
  width: fit-content;

  &:hover {
    background-color: #583c9b;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(111, 66, 193, 0.5);
    border-bottom: none;
  }
`;

const SecondaryButtonRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const SecondaryButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1.5px solid ${({ theme }) => theme.text === '#FFFFFF' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'};
  padding: 13px 28px;
  border-radius: 50px;
  font-size: 1.1em;
  font-family: monospace;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    border-color: #6f42c1;
    color: #6f42c1;
    transform: translateY(-2px);
    border-bottom: 1.5px solid #6f42c1;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  animation: ${fadeUp} 0.6s ease 0.5s both;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 2em;
  opacity: 0.6;
  transition: opacity 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    opacity: 1;
    color: #6f42c1;
    transform: translateY(-3px);
    border-bottom: none;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <TiltWrapper>
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          scale={1.06}
          transitionSpeed={400}
          glare
          maxGlare={0.2}
        >
          <ProfileImage src={profileImage} alt="Dario Pavlović" />
        </Tilt>
      </TiltWrapper>

      <Greeting>Hi, I'm Dario 👋</Greeting>

      <TypingLine>
        I'm into{' '}
        <span className="typing-text">
          <ReactTypingEffect
            text={['Data Science', 'Machine Learning', 'Data Engineering', 'Data Visualization', 'Web Development']}
            speed={100}
            eraseSpeed={80}
            eraseDelay={2000}
            typingDelay={400}
          />
        </span>
      </TypingLine>

      <Divider />

      <Bio>
        I am a Data Scientist with MSc in Computing, currently working on TV advertisement analysis.
          Experienced in machine learning, generative AI, and cloud data engineering.
      </Bio>

      <ButtonGroup>
        <PrimaryButton href={cvPdf} target="_blank" rel="noreferrer">
          <FaFilePdf /> View my resume
        </PrimaryButton>
        <SecondaryButtonRow>
          <SecondaryButton to="/projects">
            <FaCode /> Projects &amp; Papers
          </SecondaryButton>
          <SecondaryButton to="/work-experience">
            <FaBriefcase /> Work Experience
          </SecondaryButton>
        </SecondaryButtonRow>
      </ButtonGroup>

      <IconContainer>
        <IconLink href="https://github.com/Darex20" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/dario-pavlovi%C4%87-09808a220/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </IconLink>
        <IconLink href="mailto:pava.dario@gmail.com" aria-label="Email">
          <FaEnvelope />
        </IconLink>
      </IconContainer>
    </AboutSection>
  );
};

export default About;
