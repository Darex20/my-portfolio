import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../assets/portrait.jpg'
import cvPdf from '../assets/cv.pdf'

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;  /* Increased padding */
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh; /* Increased min-height */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;  /* Increased padding */
    min-height: 90vh; /* Increased min-height */
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 70px; /* Increased margin */
  padding: 30px;  /* Increased padding */

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 40px; /* Increased margin */
  }
`;

const ProfileImage = styled.img`
  width: 350px; /* Increased width */
  height: 350px; /* Increased height */
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s; /* Add transition for the lift effect */

  @media (max-width: 768px) {
    width: 250px; /* Increased width */
    height: 250px; /* Increased height */
  }
`;

const TiltContainer = styled(Tilt)`
  width: 350px; /* Increased width */
  height: 350px; /* Increased height */
  margin-bottom: 30px; /* Increased margin */
  transition: transform 0.3s; /* Add transition for the lift effect */

  @media (max-width: 768px) {
    width: 250px; /* Increased width */
    height: 250px; /* Increased height */
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 30px; /* Increased gap */
  justify-content: center;
  margin-bottom: 30px; /* Increased margin */
  padding: 20px;  /* Increased padding */
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.iconColor};
  font-size: 3.5em; /* Increased font size */
  transition: color 0.3s, transform 0.3s; /* Add transition for the lift effect */

  &:hover {
    color: #6f42c1;
    transform: translateY(-1mm); /* Lift up the icon */
  }
`;

const ProfileInfo = styled.div`
  max-width: 700px; /* Increased max-width */
  text-align: left; /* Left aligned text */
  padding: 30px;  /* Increased padding */

  h1 {
    font-size: 3.5em; /* Increased font size */
    margin-bottom: 30px; /* Increased margin */
  }

  p {
    font-size: 1.5em; /* Increased font size */
    margin-bottom: 30px; /* Increased margin */
  }

  .dynamic-text {
    font-size: 1.8em; /* Increased font size */
    margin-bottom: 30px; /* Increased margin */
  }

  .static-text {
    color: ${({ theme }) => theme.text}; /* Normal color for static text */
    display: inline; /* Ensure the static text remains inline */
  }

  .typing-text {
    color: #6f42c1; /* Color for typing text */
    display: inline; /* Ensure the typing text remains inline */
  }

  .buttons {
    display: flex;
    gap: 20px; /* Added gap between buttons */
    justify-content: center;
    margin-top: 30px; /* Increased margin */
  }

  a {
    text-decoration: none;
    display: inline-block; /* Ensure anchor element takes up only necessary space */
  }

  button {
    display: flex;
    align-items: center;
    background-color: #6f42c1;
    color: white;
    border: none;
    padding: 20px 40px; /* Increased padding */
    border-radius: 10px; /* Increased border radius */
    cursor: pointer;
    font-size: 1.5em; /* Increased font size */
    transition: background-color 0.3s; /* Add transition for the hover effect */
    text-decoration: none; /* Remove underline */
  }

  button:hover {
    background-color: #583c9b; /* Darker purple for hover effect */
  }

  svg {
    margin-right: 15px; /* Increased space between icon and text */
  }
`;

const About = () => {
  return (
    <AboutSection>
      <ProfileContainer>
        <TiltContainer>
          <ProfileImage src={profileImage} alt="Profile"/>
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
