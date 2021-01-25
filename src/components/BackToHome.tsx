import Link from 'next/link';
import { Text } from '@chakra-ui/react';

export const BackToHome = () => (
  <Link href="/" passHref>
    <Text as="a" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
      ← 投稿一覧へ
    </Text>
  </Link>
);
