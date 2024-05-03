import { InferGetStaticPropsType } from 'next';
import Page from 'components/Page';
import { getAllPosts } from 'utils/postsFetcher';

export default function BlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page
      title="Dashboard"
      description="Dashboard Part."
    >

    
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
