import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { LuBriefcase } from 'react-icons/lu';

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
    justify-content: flex-start;
    margin: 0;
    padding: 10px 12px 10px 58px;
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
    padding: 24px 28px;
  }
`;


const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.position === 'left' ? 'right: -44px;' : 'left: -44px;'}
  background: ${props => props.theme.body};
  color: #6f42c1;
  border: 2px solid #6f42c1;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-size: 1.3em;
  box-shadow: 0 0 0 4px ${props => props.theme.body}, 0 0 14px rgba(111, 66, 193, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-50%) scale(1.15);
    box-shadow: 0 0 0 4px ${props => props.theme.body}, 0 0 20px rgba(111, 66, 193, 0.65);
  }

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    left: 3px;
    right: auto;
    font-size: 0.9em;
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
      <IconContainer position={position} theme={theme}>
        <LuBriefcase />
      </IconContainer>
    </ItemContainer>
  );
};

export default TimelineItem;
