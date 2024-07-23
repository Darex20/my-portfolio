import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../assets/portrait.jpg';
import cvPdf from '../assets/cv.pdf';

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
    min-height: 90vh;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 70px;
  padding: 30px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px; /* Reduced margin-bottom */
    padding-bottom: 0; /* Removed bottom padding for mobile view */
  }
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const TiltContainer = styled(Tilt)`
  width: 350px;
  height: 350px;
  margin-bottom: 20px; /* Reduced margin-bottom */
  transition: transform 0.3s;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 10px; /* Reduced margin-bottom */
  padding: 10px; /* Reduced padding */
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.iconColor};
  font-size: 3.5em;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #6f42c1;
    transform: translateY(-1mm);
  }
`;

const ProfileInfo = styled.div`
  max-width: 700px;
  text-align: left;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 0;
  }

  h1 {
    font-size: 3.5em;
    margin-bottom: 20px; /* Reduced margin-bottom */

    @media (max-width: 768px) {
      font-size: 2em;
    }
  }

  p {
    font-size: 1.5em;
    margin-bottom: 20px; /* Reduced margin-bottom */

    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  .dynamic-text {
    font-size: 1.8em;
    margin-bottom: 20px; /* Reduced margin-bottom */

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }

  .static-text {
    color: ${({ theme }) => theme.text};
    display: inline;
  }

  .typing-text {
    color: #6f42c1;
    display: inline;
  }

  .buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px; /* Reduced margin-top */

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  a {
    text-decoration: none;
    display: inline-block;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  button {
    display: flex;
    align-items: center;
    background-color: #6f42c1;
    color: white;
    border: none;
    padding: 20px 40px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.5em;
    transition: background-color 0.3s;
    text-decoration: none;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      padding: 15px 30px;
      font-size: 1.2em;
    }
  }

  button:hover {
    background-color: #583c9b;
  }

  svg {
    margin-right: 15px;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <ProfileContainer>
        <TiltContainer>
          <ProfileImage src={profileImage} alt="Profile" />
        </TiltContainer>
        <IconContainer>
          <IconLink href="https://github.com/Darex20" target="_blank">
            <FaGithub />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/dario-pavlovi%C4%87-09808a220/" target="_blank">
            <FaLinkedin />
          </IconLink>
          <IconLink href="mailto:pava.dario@gmail.com">
            <FaEnvelope />
          </IconLink>
        </IconContainer>
      </ProfileContainer>
      <ProfileInfo>
        <h1>Hello, I'm Dario 👋</h1>
        <p className="dynamic-text">
          <span className="static-text">I am into </span>
          <span className="typing-text">
            <ReactTypingEffect
              text={['Data Science', 'Data Engineering','Data visualization', 'UI/UX Design', 'Web Development']}
              speed={100}
              eraseSpeed={100}
              eraseDelay={2000}
              typingDelay={500}
            />
          </span>
        </p>
        <div className="buttons">
          <a href={cvPdf} download="CV_Dario_Pavlovic">
            <button>
              <FaFilePdf />
              Download CV
            </button>
          </a>
          <a href="mailto:pava.dario@gmail.com">
            <button>
              <FaEnvelope />
              Contact
            </button>
          </a>
        </div>
      </ProfileInfo>
    </AboutSection>
  );
};

export default About;
