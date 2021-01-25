import {
  useColorMode,
  Flex,
  Wrap,
  WrapItem,
  Heading,
  Link as ChakraLick,
  Text,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { getFavicon, getHostName } from '../utils/posts';
import { yyyyMMMMdd } from '../utils/date-fns';
import { Post } from '../types';

type PostItemProps = {
  post: Post;
};

export const PostItem = ({ post }: PostItemProps) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      p="4"
      borderRadius="lg"
      bgColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}
    >
      <Text fontSize="sm" mb="4">
        {yyyyMMMMdd(post.createdAt)}
      </Text>
      {post.type === 'Feed' ? (
        <>
          <ChakraLick href={post.link} isExternal>
            <Wrap align="center" spacing="1" mb="4">
              <WrapItem>
                <Heading fontSize={['md', null, 'lg']} _hover={{ textDecoration: 'underline' }}>
                  {post.title}
                </Heading>
              </WrapItem>
              <WrapItem>
                <ExternalLinkIcon w="4" h="4" />
              </WrapItem>
            </Wrap>
          </ChakraLick>
          <Flex alignItems="center">
            <Image src={getFavicon(post.link!)} w="5" h="5" mr="1" />
            <Text fontSize="sm">{getHostName(post.link!)}</Text>
          </Flex>
        </>
      ) : (
        <>
          <Link href={`/posts/${post.id}`} passHref>
            <Heading
              as="a"
              mb="4"
              fontSize={['md', null, 'lg']}
              _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              {post.title}
            </Heading>
          </Link>
          <Flex>
            <Image src="/profileIcon.jpeg" w="6" h="6" mr="1" borderRadius="full" />
            <Text fontSize="sm">purpleeeee</Text>
          </Flex>
        </>
      )}
    </Flex>
  );
};
