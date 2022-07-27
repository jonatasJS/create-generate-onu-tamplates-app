/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-title-in-document-head */
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { useUser } from "@auth0/nextjs-auth0";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <title>Gerador de template para configuração!</title>
          <meta
            name="description"
            content="Qualquer bug ou problema: Jônatas - NOC 1"
          />
          <meta
            name="keywords"
            content="onu, template, gerar, sim internet, sim, internet"
          />
          <meta name="copyright" content="Next Rockets - 2022" />
          <meta name="author" content="JÕnatas/Next Rockets" />
          <meta name="email" content="soaresjonatas398@gmail.com" />
          <meta httpEquiv="content-language" content="PT" />
          <meta name="Charset" content="UTF-8" />
          <meta name="Distribution" content="Global" />
          <meta name="Rating" content="General" />
          <meta name="Robots" content="INDEX,FOLLOW" />
          <meta
            name="Abstract"
            content="Gerador de template para configuração!"
          />
          <meta name="Revisit-after" content="1 Day" />
          <meta name="expires" content="Saturday, 12 Dec 2140" />
          <link rel="icon" href="/noc2.png" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-H2B3G6Y4J8"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                console.log(window.dataLayer);
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-H2B3G6Y4J8');
              `,
            }}
          ></script>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5593915309329672"
            crossOrigin="anonymous"
          ></script>
          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#2196f3" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="stylesheet" href="/np/np.css" />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
