import { InferGetStaticPropsType } from 'next';
import {
  useColorMode,
  Box,
  Flex,
  Wrap,
  WrapItem,
  SimpleGrid,
  Heading,
  Link,
  Text,
  Image,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Parser from 'rss-parser';
import { Layout } from '../components/Layout';
import { getFavicon } from '../utils/posts';
import { yyyyMMMMdd } from '../utils/date-fns';

export const getStaticProps = async () => {
  const parser = new Parser();
  const feed = await parser.parseURL('https://qiita.com/purpleeeee/feed.atom');

  return { props: { feed } };
};

const Index = ({ feed }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Box py="16" px="10">
        <SimpleGrid columns={[1, null, 2]} spacing="10">
          {feed.items.map((item, index) => (
            <Flex
              key={index}
              flexDirection="column"
              justifyContent="space-between"
              p="4"
              borderRadius="lg"
              bgColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}
            >
              <Text fontSize="sm" mb="4">
                {yyyyMMMMdd(item.isoDate!)}
              </Text>
              <Link mb="4" href={item.link} isExternal>
                <Wrap align="center" spacing="1">
                  <WrapItem>
                    <Heading fontSize="xl" _hover={{ textDecoration: 'underline' }}>
                      {item.title}
                    </Heading>
                  </WrapItem>
                  <WrapItem>
                    <ExternalLinkIcon w="4" h="4" />
                  </WrapItem>
                </Wrap>
              </Link>
              <Flex alignItems="center">
                <Image src={getFavicon(item.link!)} w="4" h="4" mr="1" />
                <Text fontSize="sm">Qiita</Text>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Index;
