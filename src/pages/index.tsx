import { InferGetStaticPropsType } from 'next';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import { getDataFromFeedAndCMS } from '../utils/posts';
import { Post } from '../types';
import { PostItem } from '../components/PostItem';

export const getStaticProps = async () => {
  const data: Post[] = await getDataFromFeedAndCMS();
  return { props: { data }, revalidate: 1 };
};

const Index = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <Box py="16" px="2">
      <SimpleGrid columns={[1, null, 2]} spacing={[4, null, 8]}>
        {data.map((item, index) => (
          <PostItem key={index} post={item} />
        ))}
      </SimpleGrid>
    </Box>
  </Layout>
);

export default Index;
