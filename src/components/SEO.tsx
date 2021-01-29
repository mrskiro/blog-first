import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
};

export const SEO = ({ title, description, keywords }: SEOProps) => {
  const fullPath = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` || 'http://localhost:3000';
  const metaTitle = title ? `${title} - purpleeeee.com` : 'purpleeeee.com';

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@purp1eeeee" />
      <meta name="twitter:creator" content="@purp1eeeee" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${fullPath}/profileIcon.jpeg`} />
      <meta property="og:site_name" content="purpleeeee" />
    </Head>
  );
};
