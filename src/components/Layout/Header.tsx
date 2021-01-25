import { Box, Flex, List, ListItem, Text, Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DarkModeSwitch } from '../DarkModeSwitch';

export const Header = () => {
  const { pathname } = useRouter();

  const isRootOrPosts = pathname === '/' || pathname.includes('/posts');

  return (
    <Box as="header" width="100%" alignItems="center" boxShadow="base">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="container.lg"
        mx="auto"
        p="2"
      >
        <Box flex="1">
          <Link href="/" passHref>
            <Avatar as="h1" src="/profileIcon.jpeg" cursor="pointer" showBorder />
          </Link>
        </Box>

        <Box display="flex" justifyContent="center">
          <List display="flex" flexDirection="row">
            <ListItem mr="4">
              <Link href="/" passHref>
                <Text
                  as="a"
                  fontWeight={isRootOrPosts ? 'semibold' : undefined}
                  _hover={{ textDecoration: 'underline' }}
                >
                  Posts
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about" passHref>
                <Text
                  as="a"
                  fontWeight={pathname === '/about' ? 'semibold' : undefined}
                  _hover={{ textDecoration: 'underline' }}
                >
                  About
                </Text>
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box flex="1" textAlign="end">
          <DarkModeSwitch />
        </Box>
      </Flex>
    </Box>
  );
};
