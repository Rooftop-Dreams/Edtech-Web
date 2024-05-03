import { motion } from "framer-motion";
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import styles from "styles";
import { staggerContainer } from "utils/motion";
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';


export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          {/* <motion.div
              variants={staggerContainer({ staggerChildren: 0.1, delayChildren: 0 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.25 }}
              className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 `}
            > */}
            <p className="font-bold  lg:text-8xl text-6xl  flex justify-center">Why Hulu books?</p>
            <BasicSection imageUrl="/demo-illustration-1.svg" title="Digital Learing Envaironment" overTitle="Affordable Books">
              <p>
               Access to affordable books is never been easier. With Hulubooks you can upgrade the learing process to next level.Hulubooks is a toolkit that got everything to learn and appreciate practical leaing that enhance the learing process.{' '}
              </p>
            </BasicSection>
          {/* </motion.div> */}
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Easy payment with chapa payment gatway." overTitle="lorem ipsum" reversed>
            <p>
             With list of feature make your lealring exeriance to a better place.Using Hulu books payment to updated books worh the money spend{' '}
              <strong>Chapa pay makes the payment essy</strong>. You can get a list of featus asside the books to enhannce the learing experiance.
            </p>
            <ul>
              <li>Latest Reference Books </li>
              <li>Math Equation solver</li>
              <li>Ai Explainer & chat with AI</li>
              <li>Chat with your PDF</li>
              <li>Dashboard</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
