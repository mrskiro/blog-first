import { Box, Flex, List, ListItem, Text, Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DarkModeSwitch } from '../../DarkModeSwitch';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <Box as="header" width="100%" alignItems="center" borderBottom="1px" borderColor="gray.200">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxWidth="container.lg"
        mx="auto"
        p="2"
      >
        <Box>
          <Link href="/" passHref>
            <Avatar as="a" src="/profileIcon.jpeg" />
          </Link>
        </Box>

        <Box as="nav">
          <List display="flex" flexDirection="row">
            <ListItem mr="4">
              <Link href="/" passHref>
                <Text
                  as="a"
                  fontWeight={pathname === '/' ? 'semibold' : undefined}
                  _hover={{ textDecoration: 'underline' }}
                >
                  Blog
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

        <Box width="48px">
          <DarkModeSwitch />
        </Box>
      </Flex>
    </Box>
  );
};
