import React from 'react';
import styled from 'styled-components';
import audioExample from '../assets/example.mp3';
import waveImage from '../assets/music_wave.jpg';
import powerbiImage from '../assets/powerBI_visualization.png';
import tweetImage from '../assets/tweet_classification.png';
import stocksImage from '../assets/stock.png';
import proteinWarriorsGif from '../assets/protein_warriors.gif';

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 30px 15px; /* Adjusted padding for mobile */
  }
`;

const ProjectsTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;  /* Adjusted width */
  align-items: center; /* Center the items horizontally */
`;

const Card = styled.div`
  background-color: ${props => props.theme.body === '#1c1c1c' ? '#FFF' : '#000'};
  color: ${props => props.theme.body === '#1c1c1c' ? '#000' : '#FFF'};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;  /* Ensure cards fill the width of the container */
  max-width: 700px;
  cursor: pointer; /* Make the card appear clickable */
  position: relative; /* For the ribbon positioning */
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:hover .hover-message {
    opacity: 1;
    right: 10px;
  }

  @media (max-width: 768px) {
    padding: 20px; /* Increased padding for mobile */
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CardContent = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2em;
  margin: 0;
  color: inherit;
`;

const CardDate = styled.p`
  font-size: 0.8em;
  color: ${props => props.theme.body === '#1c1c1c' ? '#000' : '#FFF'};
`;

const CardDescription = styled.p`
  font-size: 0.9em;
  color: inherit;
`;

const ProjectAudio = styled.audio`
  width: 100%;
  margin-top: 20px;
`;

const HoverMessageContainer = styled.div`
  position: absolute;
  top: 20px;
  right: -160px;
  transition: right 0.3s, opacity 0.3s;
  opacity: 0;
  pointer-events: none;

  ${Card}:hover & {
    opacity: 1;
    right: 10px;
    pointer-events: auto;
  }
`;

const HoverMessage = styled.div`
  width: 160px;
  height: 40px;
  background-color: #6f42c1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  border-radius: 10px;
  cursor: pointer;

  &::after {
    content: '';
    padding-left: 5px;
    white-space: nowrap;
  }
`;

const LastCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const LastCardText = styled.p`
  font-size: 1.5em;
  text-align: center;
  margin: 0;
  color: inherit;
`;

const projectData = [
  {
    type: 'audio',
    title: 'Generating music using LSTM network',
    description: 'Paper on generating midi file using LSTM network, for training purposes we used POP909 dataset. Below is an example of an MP3 playable midi file generated by our LSTM network.',
    date: 'January 2024',
    link: 'https://github.com/Darex20/lstm-music-generation',
    audio: audioExample,
    image: waveImage,  // Replace with actual image path
    position: 'flex-start',
  },
  {
    type: 'paper',
    title: 'PowerBI Visualization of Top 2000 Titles',
    image: powerbiImage, // Replace with actual image path
    date: 'December 2023',
    link: 'https://app.powerbi.com/links/2mHWquDvbd?ctid=ca71eddc-cc7b-4e5b-95bd-55b658e696be&pbi_source=linkShare',
    description: 'Detailed PowerBI visualization of top 2000 movie titles from IMDB. The visualization includes barcharts, scatterplots, maps. Ever element is responsive and when clicked on automatically adjusts the other elements.',
    position: 'flex-end',
  },
  {
    type: 'paper',
    title: 'NLP rumor evaluation of Tweets',
    image: tweetImage, // Replace with actual image path
    date: 'May 2023',
    link: 'https://github.com/Darex20/rumour-eval',
    description: 'Paper for Text Analysis and Retrieval course. In the paper we suggest our approach in evaluating and classifying Tweet rumours.',
    position: 'flex-start',
  },
  {
    type: 'paper',
    title: 'Final thesis - Predicting stock prices using neural networks',
    image: stocksImage, // Replace with actual image path
    date: 'June 2022',
    link: 'https://github.com/Darex20/final-thesis',
    description: 'In the thesis I use LSTM Neural Network as a means to try and predict the movement of stock prices.',
    position: 'flex-end',
  },
  {
    type: 'paper',
    title: 'Visual implementation of NN, CGP, GP algorithms',
    image: proteinWarriorsGif, // Replace with actual image path
    date: 'February 2022',
    link: 'https://gitlab.com/p2385/projekt',
    description: 'Visual implementation of Neural Networks, Cartesian Genetic Programming and Genetic Programming algorithms. In the visualization we show the units interacting with the "food" and each other managed by each of the three algorithms to decide which one behaves the best in our simulation.',
    position: 'flex-start',
  },
];

const Projects = () => {
  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

  const handleLastCardClick = () => {
    window.open('https://github.com/Darex20?tab=repositories', '_blank');
  };

  return (
    <ProjectsSection>
      <ProjectsTitle>Projects and Papers</ProjectsTitle>
      <ProjectsList>
        {projectData.map((project, index) => (
          project.type === 'audio' ? (
            <Card key={index} position={project.position} onClick={() => handleCardClick(project.link)}>
              <HoverMessageContainer>
                <HoverMessage>Click to see more!</HoverMessage>
              </HoverMessageContainer>
              <CardContent position={project.position}>
                <ProjectImageContainer>
                  <ProjectImage src={project.image} alt={project.title} />
                </ProjectImageContainer>
                <CardText>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDate>{project.date}</CardDate>
                  <CardDescription>{project.description}</CardDescription>
                  {project.audio && (
                    <ProjectAudio controls>
                      <source src={project.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </ProjectAudio>
                  )}
                </CardText>
              </CardContent>
            </Card>
          ) : (
            <Card key={index} position={project.position} onClick={() => handleCardClick(project.link)}>
              <HoverMessageContainer>
                <HoverMessage>Click to see more!</HoverMessage>
              </HoverMessageContainer>
              <CardContent position={project.position}>
                <ProjectImageContainer>
                  <ProjectImage src={project.image} alt={project.title} />
                </ProjectImageContainer>
                <CardText>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDate>{project.date}</CardDate>
                  <CardDescription>{project.description}</CardDescription>
                </CardText>
              </CardContent>
            </Card>
          )
        ))}
        <LastCard onClick={handleLastCardClick}>
          <LastCardText>
            And many more other projects...<br></br>
            Please do click on this card to also check them out!
          </LastCardText>
        </LastCard>
      </ProjectsList>
    </ProjectsSection>
  );
};

export default Projects;