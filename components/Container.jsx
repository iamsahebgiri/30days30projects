import { useRouter } from 'next/router';
import { Box, useColorModeValue } from '@chakra-ui/react';
import DarkModeButton from './DarkModeButton';
import Head from 'next/head';

const Container = (props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: '30 Days 30 Projects',
    description: 'Learn coding by building projects',
    image: 'https://30days30projects.vercel.app/banner.png',
    type: 'website',
    ...customMeta,
  };
  const bg = useColorModeValue('blueGray.50', 'blueGray.800');
  
  return (
    <Box bg={bg} minH="100vh">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://30days30projects.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://30days30projects.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="30 Days 30 Projects" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iamsahebgiri" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      {children}
      <DarkModeButton />
    </Box>
  );
};

export default Container;
