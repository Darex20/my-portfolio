import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FaBriefcase } from 'react-icons/fa';

const ItemContainer = styled.div`
  position: relative;
  width: 50%;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: ${props => (props.position === 'left' ? 'flex-end' : 'flex-start')};
  align-items: center;
  ${props => props.position === 'right' ? 'margin-left: 50%;' : 'margin-right: 50%;'}

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin: 0;
    padding: 10px 0;
  }
`;

const ItemContent = styled.div`
  background: ${props => props.featured
    ? (props.theme.body === '#1c1c1c' ? '#2e1f54' : '#ede8fb')
    : (props.theme.body === '#1c1c1c' ? '#FFF' : '#000')};
  color: ${props => props.featured
    ? (props.theme.body === '#1c1c1c' ? '#e0d7f8' : '#2d1b6e')
    : (props.theme.body === '#1c1c1c' ? '#000' : '#FFF')};
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: ${props => props.featured ? '0 4px 24px rgba(111,66,193,0.3)' : 'none'};
  position: relative;
  width: 100%;
  max-width: 500px;
  font-family: monospace;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 40px 50px;
    text-align: center;
  }
`;


const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.position === 'left' ? 'right: -40px;' : 'left: -40px;'}
  background: #6a0dad;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const Subtitle = styled.h4`
  margin: 0;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Date = styled.p`
  margin: 10px 0;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const TimelineItem = ({ position, featured, title, subtitle, date, description }) => {
  const theme = useContext(ThemeContext);

  return (
    <ItemContainer position={position}>
      <ItemContent theme={theme} featured={featured}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </ItemContent>
      <IconContainer position={position}>
        <FaBriefcase />
      </IconContainer>
    </ItemContainer>
  );
};

export default TimelineItem;
