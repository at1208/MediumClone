import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
      <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
      <meta name="apple-mobile-web-app-title" content="ReadiFly"/>
      <meta name="p:domain_verify" content="b2666a47ce2019ef96afa5b4b91da6a2"/>
      <link rel="alternate" href="https://amanread.netlify.app" hrefLang="en-us" />
      <link defer rel="dns-prefetch" href="https://amanread.netlify.app" />
      <link defer rel="preconnect" href="https://amanread.netlify.app" crossorigin />
      <link defer rel="preconnect" href="https://www.googletagmanager.com" crossorigin />
      <script src="https://accounts.google.com/gsi/client" async defer />
      
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


MyDocument.getInitialProps = async (ctx) => {
 const sheets = new ServerStyleSheets();
 const originalRenderPage = ctx.renderPage;

 ctx.renderPage = () =>
   originalRenderPage({
     enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
   });

 const initialProps = await Document.getInitialProps(ctx);

 return {
   ...initialProps,
   styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
 };
};


export default MyDocument;
