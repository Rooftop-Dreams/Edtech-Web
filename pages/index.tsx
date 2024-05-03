import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Features from 'views/HomePage/Features';
import Hero from 'views/HomePage/Hero';


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
            <BasicSection imageUrl="/demo-illustration-1.svg" title="Looking for Reference books?" overTitle="Affordable Books">
              <p>
              Hulu books holds a collectin off over 120 reference books , including extreme book seriese , galaxy reference books , commet reference book.{' '}Top and modern reference books in one place.
              </p>
            </BasicSection>
          {/* </motion.div> */}
          <BasicSection imageUrl="/demo-illustration-2.svg" title="What if the question in your mind could be answered effertlessly?." overTitle="Ai Generated Answer" reversed>
            <p>
            Reading for long time with out understanding can be annoying.{' '}
              <strong>Hulubook has made the path easier to solve all your questions</strong>.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Dont wait for the next exam time" overTitle="Question and queizes">
              <p>
                We have prepared your intrance exam related to your specific chapters. Select the chapter you want and begin to evaluate yourself.
              </p>
            </BasicSection>
            
            <BasicSection imageUrl="/demo-illustration-2.svg" title="Do you want to know how you are performing in school?" overTitle="Performance Indication" reversed>
            <p>
            Checing where You stand is a way to show you are performing well.HuluBook evaluates your study performance by 
            <strong> {' '}Analyizing your your reading time and guides you to adjust your next plan.</strong>.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <Cta /> */}
          {/* <FeaturesGallery /> */}
          <div className="mt-4"/>
          <Features />
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
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
