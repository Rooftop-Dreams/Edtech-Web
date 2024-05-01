import Image from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';
import hulubooksuser from 'assets/hulubooksuser.png';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
// import VideoPlayer from 'components/HeroVideo'
import OverTitle from 'components/OverTitle';
// import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  // const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>the coolest, educational tool you have ever experiance</CustomOverTitle>
        <Heading>Make your Study easier with Hulu books</Heading>
        <Description>
        Hulubook is a there for high school student that provide reference books, math equation solver, exams, chatgpt, and AI mentor.
        </Description>
        <CustomButtonGroup>
        <NextLink href="#apps" passHref>
          <Button 
          // onClick={() => setIsModalOpened(true)} 
          >
            Get Started <span>&rarr;</span>
          </Button>
        </NextLink>
          
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <Image className='w-full h-full'  alt='hulubooks user' src={hulubooksuser} width={900} height={900}/>
         {/* <VideoPlayer />  */}
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
