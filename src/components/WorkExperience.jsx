import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;
import Timeline from './Timeline';

const Section = styled.div`
  padding: 40px;
  text-align: center;
  animation: ${fadeUp} 0.5s ease both;
`;

const SectionTitle = styled.h2`
  font-size: 2em;  /* Ensure consistent size */
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
`;

const WorkExperience = () => {
  return (
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
      <Timeline />
    </Section>
  );
};

export default WorkExperience;
