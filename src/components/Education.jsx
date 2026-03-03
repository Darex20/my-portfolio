import React from 'react';
import styled from 'styled-components';
import schoolLogo1 from '../assets/school_1.jpg';
import schoolLogo2 from '../assets/school_2.jpg';
import schoolLogo3 from '../assets/school_3.jpg';
import schoolLogo4 from '../assets/school_4.jpg';

const EducationSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px 20px;  /* Adjusted padding */
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 30px 30px 20px;  /* Adjusted padding */
  }
`;

const EducationTitle = styled.h2`
  font-size: 2em;  /* Ensure consistent size with other titles */
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
  text-align: center;  /* Center the title */
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => {
    if (props.index === 1) return '#51b401';
    if (props.index === 3) return '#d8212d';
    return props.theme.body === '#1c1c1c' ? '#FFF' : '#000';
  }};
  color: ${props => props.index === 1 || props.index === 3 ? '#FFF' : props.theme.body === '#1c1c1c' ? '#000' : '#FFF'};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center; /* Center align items */
  }
`;

const LogoContainer = styled.div`
  width: 170px;  /* Fixed width */
  height: 170px;  /* Fixed height */
  margin-right: 20px;
  background-color: #FFF;  /* White background for the logo */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;  /* Square shape with rounded corners */
  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0; /* Remove right margin */
  }
`;

const Logo = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.9em;
  color: inherit;
`;

const CardSubtitle = styled.h3`
  margin: 5px 0;
  font-size: 1.1em;
  color: inherit;
`;

const CardDegree = styled.h4`
  margin: 5px 0;
  font-size: 1.3em;
  color: inherit;
`;

const CardDescription = styled.p`
  font-size: 1.2em;
  color: inherit;
`;

const educationData = [
  {
    logo: schoolLogo4, // Path to school logo 4
    title: 'Faculty of Electrical Engineering and Computing',
    subtitle: 'Oct 2022 - Jul 2025',
    degree: 'Master of Science in Computing',
    description: 'Relevant courses: Introduction to Data Science, Machine Learning, Neural Networks, Text Analysis and Retrieval, Statistical Data Analysis, Multivariate Data Analysis, Data Visualization, Advanced Algorithms and Data Structures',
  },
  {
    logo: schoolLogo3, // Path to school logo 3
    title: 'University of Aveiro',
    subtitle: 'Feb 2024 - Jul 2024',
    degree: 'Erasmus+ exchange',
    description: 'Relevant courses: Mining Large Scale Datasets, 3D Animation and Modelling, Game Narrative Design',
  },
  {
    logo: schoolLogo2, // Path to school logo 2
    title: 'Faculty of Electrical Engineering and Computing',
    subtitle: 'Oct 2019 - Jun 2022',
    degree: 'Bachelor of Computing - Thesis Predicting stock prices using neural networks',
    description: 'Relevant courses: Introduction to Programming, Object Oriented Programming, Algorithms and Data Structures, Software Engineering, Databases, Introduction to Artificial Intelligence, Computer Security, Linux',
  },
  {
    logo: schoolLogo1, // Path to school logo 1
    title: 'Gimnazija Sesvete',
    subtitle: 'Sep 2015 - Jun 2019',
    degree: 'High school degree',
    description: 'Took a Java Academy course. Worked on an Arduino noise pollution project.',
  },
];

const Education = () => {
  return (
    <EducationSection>
      <EducationTitle>Education</EducationTitle>
      {educationData.map((edu, index) => (
        <Card key={index} index={index}>
          <LogoContainer>
            <Logo src={edu.logo} alt={`${edu.title} logo`} />
          </LogoContainer>
          <CardContent>
            <CardTitle>{edu.title}</CardTitle>
            <CardSubtitle>{edu.subtitle}</CardSubtitle>
            <CardDegree>{edu.degree}</CardDegree>
            <CardDescription>{edu.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </EducationSection>
  );
};

export default Education;
