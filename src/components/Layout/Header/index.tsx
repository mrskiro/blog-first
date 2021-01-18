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
        <Box flex="1">
          <Link href="/" passHref>
            <Avatar as="h1" src="/profileIcon.jpeg" cursor="pointer" />
          </Link>
        </Box>

        <Box display="flex" justifyContent="center">
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

        <Box flex="1" textAlign="end">
          <DarkModeSwitch />
        </Box>
      </Flex>
    </Box>
  );
};
