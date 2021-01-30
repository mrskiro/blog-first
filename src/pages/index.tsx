import { GetStaticProps, NextPage } from 'next';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { getDataFromFeedAndCMS, getPostFromCMSById } from '../utils/posts';
import { Post } from '../types';
import { PostItem } from '../components/PostItem';

type Props = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps = async ({ preview, previewData }) => {
  const posts: Post[] = await getDataFromFeedAndCMS();
  if (preview) {
    const draftData = await getPostFromCMSById(previewData.id, previewData.draftKey);
    posts.unshift({
      id: draftData.id,
      type: 'CMS',
      title: draftData.title,
      createdAt: new Date(draftData.date),
    });
  }
  return { props: { posts }, revalidate: 1 };
};

const Index: NextPage<Props> = ({ posts }) => (
  <>
    <SEO title="" description="purpleeeee's portfolio" />
    <Layout>
      <Box py="16" px="2">
        <SimpleGrid columns={[1, null, 2]} spacing={[4, null, 8]}>
          {posts.map((item, index) => (
            <PostItem key={index} post={item} />
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  </>
);

export default Index;
