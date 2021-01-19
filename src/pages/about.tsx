import {
  Avatar,
  Box,
  Heading,
  Text,
  Divider,
  List,
  ListItem,
  Wrap,
  WrapItem,
  Tag,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { SocialIcons } from '../components/SocialIcons';
import { profiles } from '../constants/profiles';
import { skills } from '../constants/skills';
import { histories } from '../constants/histories';

const About = () => (
  <Layout>
    <Box py="16">
      <Box textAlign="center">
        <Avatar src="/profileImage.jpeg" size="2xl" mb="2" />
        <Text as="h1" fontSize="xl" fontWeight="bold">
          Haruki Murasaki
        </Text>
        <SocialIcons />
      </Box>

      <Divider borderColor="purple.300" my="10" />

      <Box mb="32">
        <Heading textAlign="center" fontWeight="bold" fontSize="normal">
          Profile
        </Heading>
        <Divider borderColor="purple.300" my="4" maxWidth="4" mx="auto" />
        <Box display="flex" flexDirection="column" alignItems="center" lineHeight="8">
          <List>
            {profiles.map((profile, index) => (
              <ListItem key={index} display="flex">
                <Text flexShrink={0} mr="2">
                  {profile.title}:
                </Text>
                <Text wordBreak="break-all">{profile.text}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Box mb="32">
        <Heading textAlign="center" fontWeight="bold" fontSize="normal">
          Skills
        </Heading>
        <Divider borderColor="purple.300" my="4" maxWidth="4" mx="auto" />
        <Box display="flex" flexDirection="column" alignItems="center" lineHeight="8">
          <List>
            {skills.map((skill, index) => (
              <ListItem key={index} mb="4">
                <Text>{skill.title}</Text>
                <Wrap>
                  {skill.items.map((item, index) => (
                    <WrapItem key={index}>
                      <Tag colorScheme="purple">{item}</Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </ListItem>
            ))}

            {/* {skills.map((skill, index) => (
              <ListItem key={index}>
                <Text wordBreak="break-all">{skill.title}</Text>
              </ListItem>
            ))} */}
          </List>
        </Box>
      </Box>

      <Box mb="32">
        <Heading textAlign="center" fontWeight="bold" fontSize="normal">
          History
        </Heading>
        <Divider borderColor="purple.300" my="4" maxWidth="4" mx="auto" />
        <Box display="flex" justifyContent="center" lineHeight="8">
          <List
            position="relative"
            _before={{
              content: "''",
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '4px',
              backgroundColor: 'purple.300',
              borderRadius: 'full',
            }}
          >
            {histories.map((history, index) => (
              <ListItem
                key={index}
                position="relative"
                mb="4"
                _before={{
                  content: "''",
                  position: 'absolute',
                  top: '2',
                  left: '-6px',
                  bottom: 0,
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  backgroundColor: 'purple.600',
                }}
              >
                <Box ml="6">
                  <Text color="gray.600" fontSize="sm">
                    {history.date}
                  </Text>

                  <Text fontWeight="semibold" mb="2">
                    {history.title}
                  </Text>
                  <Text pl="1" fontSize="sm" lineHeight="6" whiteSpace="pre-line">
                    {history.description}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Box>
        <Link href="/">
          <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>← Blogへ</Text>
        </Link>
      </Box>
    </Box>
  </Layout>
);

export default About;
