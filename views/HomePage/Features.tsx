import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/bookshelf.svg',
    title: 'Digital Library.',
    description:
      `Textbooks, reference books,
      such as extreme book series,
      commet, galaxy, top, Modern, 
      Systematic approch, alpha...etc will be right there.`,
  },
  {
    imageUrl: '/grid-icons/ai-mentor.svg',
    title: 'User friendly Ai Mentor.',
    description:
      'A chatbot integrated in to the pdf reader assists students by answering questions while they are reading.',
  },
  {
    imageUrl: '/grid-icons/math-solver.svg',
    title: 'Math Solver.',
    description:
      'Math Equation and Pysics formula solver and explanation is easy with hulu books.',
  },
  {
    imageUrl: '/grid-icons/llm.svg',
    title: 'ChatGpt and AI book summarizer.',
    description:
      'An AI chatbot that have user friendly chat appearance to chat with you on specific tipics and books you want to discus',
  },
  {
    imageUrl: '/grid-icons/givesupport.svg',
    title: 'FastAssignment Organizer.',
    description:
      'Provides prefered answers related to your assingment questions and prepares a full document that can be submited to your teacher',
  },
  {
    imageUrl: '/grid-icons/dashboard.svg',
    title: 'Performance Tracker.',
    description:
      'Measures day-to-day accomplishments on your reading jorney , analizes and summarizes your performance graphically.',
  }
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
