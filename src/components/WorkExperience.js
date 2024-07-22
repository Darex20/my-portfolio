import React from 'react';
import styled from 'styled-components';
import Timeline from './Timeline';

const Section = styled.div`
  padding: 40px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;  /* Ensure consistent size */
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
  font-family: monospace;
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
