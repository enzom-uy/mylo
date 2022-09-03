import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';
import { theme } from 'src/chakraTheme';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/navbar-logo.svg" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
