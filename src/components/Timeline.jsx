import React from 'react';
import styled from 'styled-components';
import TimelineItem from './TimelineItem';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  &:before {
    content: '';
    position: absolute;
    width: 3px;
    background: linear-gradient(
      to bottom,
      transparent,
      #6f42c1 8%,
      #6f42c1 92%,
      transparent
    );
    box-shadow: 0 0 10px rgba(111, 66, 193, 0.45);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    &:before {
      left: 24px;
      transform: none;
    }
  }
`;

const experienceData = [
  {
    title: 'all eyes on screens',
    subtitle: 'Data Scientist',
    date: 'Sep 2025 - now',
    description: 'TV Advertisement analysis',
    position: 'left'
  },
  {
    title: 'Raiffeisenbank Croatia',
    subtitle: 'Data Analyst',
    date: 'Oct 2024 - July 2025',
    description: 'Gen AI, Chatbot team',
    position: 'right'
  },
  {
    title: 'Syntio',
    subtitle: 'Associate Data Engineer',
    date: 'Sep 2022 - Jun 2023',
    description: 'Cloud data engineering (Google Cloud Platform, Azure, AWS, Kafka, Spark, Golang)',
    position: 'left'
  },
  {
    title: 'KING ICT',
    subtitle: 'Web Developer | Internship',
    date: 'Jul 2021 - Aug 2021',
    description: 'Developed a Python Flask Web Application',
    position: 'right'
  },
  {
    title: 'nDimension',
    subtitle: 'Maintenance and repairement of computers | Internship',
    date: 'Jun 2016 - Aug 2016',
    description: 'Maintenance and repairement of computers',
    position: 'left'
  },
];

const Timeline = () => {
  return (
    <TimelineContainer>
      {experienceData.map((item, index) => (
        <TimelineItem
          key={index}
          featured={index === 0}
          position={item.position}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          description={item.description}
        />
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
