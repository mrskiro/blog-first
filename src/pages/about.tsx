import { Avatar, Box, Text, Divider } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import { SocialIcons } from '../components/SocialIcons';
const About = () => {
  return (
    <Layout>
      <Box py="12">
        <Box textAlign="center">
          <Avatar src="/hoge.jpeg" size="2xl" />
          <Text as="h1" mt="6" fontSize="2xl" fontWeight="bold">
            Haruki Murasaki
          </Text>
          <SocialIcons />
        </Box>

        <Divider borderColor="purple.300" my="4" />

        <Box textAlign="center">
          <Text as="h2">Profile</Text>
        </Box>

        <div>skills</div>
        <div>history</div>
      </Box>
    </Layout>
  );
};

export default About;
