import NextDocument, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import nookies from 'nookies';
import { GA_TRACKING_ID } from '../utils/gtag';

type WithNonceProp = {
  preview: boolean;
};
export default class Document extends NextDocument<WithNonceProp> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    const cookies = nookies.get(ctx);
    const preview = cookies.__next_preview_data || false;

    return {
      ...initialProps,
      preview,
    };
  }

  render() {
    const preview = this.props.preview;
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          {GA_TRACKING_ID && (
            <>
              <script
                async={true}
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
                ${preview ? "window['ga-disable-" + GA_TRACKING_ID + "'] = true;" : ''}
              `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
