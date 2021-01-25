import { chakra, BoxProps, Box, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import Markdown from 'markdown-to-jsx';

type MarkdownTemplateProps = {
  source: string;
} & BoxProps;

const ChakraMarkdown = chakra(Markdown);

export const MarkdownTemplate = (props: MarkdownTemplateProps) => {
  const headingStyle = {
    mt: '10',
    mb: '6',
    fontWeight: 'semibold',
  };
  const borderBottomStyle = {
    pb: '1',
    borderBottom: '2px',
    borderBottomColor: 'gray.200',
  };

  const h1 = {
    component: Text,
    props: {
      ...headingStyle,
      ...borderBottomStyle,
      fontSize: '3xl',
      as: 'h1',
    },
  };

  const h2 = {
    component: Text,
    props: {
      ...headingStyle,
      fontSize: '2xl',
      as: 'h2',
    },
  };

  const h3 = {
    component: Text,
    props: {
      ...headingStyle,
      fontSize: 'xl',
      as: 'h3',
    },
  };

  const p = {
    component: Text,
    props: {
      mb: '6',
    },
  };

  const ul = {
    component: UnorderedList,
  };

  const li = {
    component: ListItem,
  };

  const blockquote = {
    component: Box,
    props: {
      borderLeft: '2px',
      pl: '4',
      color: 'gray.500',
      as: 'blockquote',
    },
  };

  const a = {
    component: Link,
    props: {
      isExternal: true,
    },
  };

  return (
    <ChakraMarkdown
      lineHeight="tall"
      options={{
        wrapper: 'article',
        overrides: {
          h1,
          h2,
          h3,
          p,
          ul,
          li,
          blockquote,
          a,
        },
      }}
      {...props}
    >
      {props.source}
    </ChakraMarkdown>
  );
};
