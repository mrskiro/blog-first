import { Box, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { Layout } from '../components/Layout';

const ErrorPage = () => {
  return (
    <Layout>
      <Box py="16">
        <Alert
          status="error"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          py="16"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={8} fontSize="lg">
            404: ページが存在しません
          </AlertTitle>
        </Alert>
      </Box>
    </Layout>
  );
};

export default ErrorPage;
