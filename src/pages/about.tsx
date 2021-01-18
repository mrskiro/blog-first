import { Avatar, Box, Heading, Text, Divider, List, ListItem } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import { SocialIcons } from '../components/SocialIcons';
import { histories } from '../constants/history';

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
        <Box display="flex" justifyContent="center" lineHeight="8">
          <List>
            <ListItem>
              <Text>生年月日: 1998/11/02</Text>
            </ListItem>
            <ListItem>
              <Text>出身: 東京都杉並区</Text>
            </ListItem>
            <ListItem>
              <Text>趣味: 服/弾き語り/インディーズバンド/プログラミング</Text>
            </ListItem>
            <ListItem>
              <Text>特技: 音響(PAができます)</Text>
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box mb="32">
        <Heading textAlign="center" fontWeight="bold" fontSize="normal">
          Skills
        </Heading>
        <Divider borderColor="purple.300" my="4" maxWidth="4" mx="auto" />
        <Box display="flex" justifyContent="center" lineHeight="8">
          <List>
            <ListItem>
              <Text>Lv3: JavaScript/React/HTML/CSS</Text>
            </ListItem>
            <ListItem>
              <Text>Lv2: TypeScript/ReactNative/Next</Text>
            </ListItem>
            <ListItem mb="2">
              <Text>Lv1: GraphQL/ApolloClient/SQL/Gatsby/Vue</Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: 'xs', md: 'md' }}>
                Other: Storybook/AtomicDesign/Expo/GitHub/Firebase
              </Text>
            </ListItem>
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
                  <Text pl="1" fontSize="sm" lineHeight="normal" whiteSpace="pre-line">
                    {history.description}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default About;
