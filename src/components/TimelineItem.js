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
`;

const ItemContent = styled.div`
  background: ${props => props.theme.body === '#1c1c1c' ? '#FFF' : '#000'};
  padding: 20px 30px;
  border-radius: 10px;
  color: ${props => props.theme.body === '#1c1c1c' ? '#000' : '#FFF'};
  position: relative;
  width: 100%;
  max-width: 500px;
  font-family: monospace;
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
`;

const Title = styled.h3`
  margin: 0;
  color: ${props => props.theme.body === '#1c1c1c' ? '#444' : '#FFF'};
  font-size: 1.5em;
`;

const Subtitle = styled.h4`
  margin: 0;
  color: ${props => props.theme.body === '#1c1c1c' ? '#444' : '#FFF'};
  font-size: 1.2em;
`;

const Date = styled.p`
  margin: 10px 0;
  color: ${props => props.theme.body === '#1c1c1c' ? '#444' : '#FFF'};
  font-size: 1em;
`;

const Description = styled.p`
  margin: 0;
  color: ${props => props.theme.body === '#1c1c1c' ? '#444' : '#FFF'};
  font-size: 1em;
`;

const TimelineItem = ({ position, title, subtitle, date, description }) => {
  const theme = useContext(ThemeContext);

  return (
    <ItemContainer position={position}>
      <ItemContent theme={theme}>
        <Title theme={theme}>{title}</Title>
        <Subtitle theme={theme}>{subtitle}</Subtitle>
        <Date theme={theme}>{date}</Date>
        <Description theme={theme}>{description}</Description>
      </ItemContent>
      <IconContainer position={position}>
        <FaBriefcase />
      </IconContainer>
    </ItemContainer>
  );
};

export default TimelineItem;
