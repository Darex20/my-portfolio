import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
  flex: 1;
  max-width: 300px;
  text-align: center;
`;

const CardHeader = styled.div`
  background: ${props => props.bgColor || '#333'};
  padding: 20px;
  color: white;
`;

const CardIcon = styled.div`
  background: white;
  border-radius: 50%;
  padding: 10px;
  margin-top: -30px;
  display: inline-block;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  color: #333;
  font-family: monospace;
`;

const CardSubtitle = styled.h4`
  color: #666;
  font-family: monospace;
  margin-top: 0;
`;

const CardDate = styled.p`
  color: #999;
  font-family: monospace;
`;

const CardDescription = styled.p`
  color: #666;
  font-family: monospace;
`;

const ExperienceCard = ({ bgColor, icon, title, subtitle, date, description }) => (
  <Card>
    <CardHeader bgColor={bgColor}>
      <h2>{title}</h2>
      <CardIcon>{icon}</CardIcon>
    </CardHeader>
    <CardBody>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardDate>{date}</CardDate>
      <CardDescription>{description}</CardDescription>
    </CardBody>
  </Card>
);

export default ExperienceCard;
