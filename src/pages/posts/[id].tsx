import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { Box, Text, Divider } from '@chakra-ui/react';
import { Layout } from '../../components/Layout';
import { getPostsFromCMS, getPostsFromCMSById } from '../../utils/posts';
import { CMSData } from '../../types';
import { MarkdownTemplate } from '../../components/MarkdownTemplate';
import { BackToHome } from '../../components/BackToHome';
import { yyyyMMMMdd } from '../../utils/date-fns';
import { SEO } from '../../components/SEO';

type PostDetailProps = {
  post: CMSData;
};

export const getStaticProps: GetStaticProps<PostDetailProps> = async ({ params }) => {
  const id = params?.id as string;
  const post: CMSData = await getPostsFromCMSById(id);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getPostsFromCMS();
  const paths = data?.map((item) => `/posts/${item.id}`);

  return {
    paths,
    fallback: false,
  };
};

const PostDetail = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <SEO title={post.title} description={post.description} />
    <Layout>
      <Box py="16" as="article">
        <Text as="h1" mb="4" fontSize="4xl" textAlign="center">
          {post.title}
        </Text>
        <Text textAlign="center" fontSize="lg">
          {yyyyMMMMdd(post.date)}
        </Text>
        <Divider my="8" />
        <MarkdownTemplate source={post.content} mb="16" />
        <BackToHome />
      </Box>
    </Layout>
  </>
);

export default PostDetail;
