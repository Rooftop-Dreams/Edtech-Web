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
    title: 'Ai Mentor.',
    description:
      'Ai Mentor, a student can ask any question related to his problem can be mentored by Ai and get explanation.',
  },
  {
    imageUrl: '/grid-icons/math-solver.svg',
    title: 'Math Solver.',
    description:
      'Math Equation and Pysics formula solver and explanation is easy with hulu books.',
  },
  {
    imageUrl: '/grid-icons/llm.svg',
    title: 'LLM QA.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/givesupport.svg',
    title: 'Assignment Organizer.',
    description:
      'Easily prepare assignment documents and get ai help',
  },
  {
    imageUrl: '/grid-icons/dashboard.svg',
    title: 'Comprehancive Dashboarod.',
    description:
      'Comprehancive dashboard that ',
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
