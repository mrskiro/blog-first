import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
};

export const SEO = ({ title, description, keywords }: SEOProps) => {
  const fullPath =
    process.env.NODE_ENV === 'production' ? 'https://purpleeeee.com' : 'http://localhost:3000';
  return (
    <Head>
      <title>{title && `${title} - `}purpleeeee.com</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@purp1eeeee" />
      <meta name="twitter:creator" content="@purp1eeeee" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${fullPath}/profileIcon.jpeg`} />
      <meta property="og:site_name" content="purpleeeee" />
    </Head>
  );
};
