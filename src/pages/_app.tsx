// src/pages/_app.tsx
import useViewport from "@/hooks/useViewport";
import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";
import theme from "src/chakraTheme";
import Layout from "src/components/Layout/Layout";
import MobileMenu from "src/components/Layout/MobileMenu";
import Navbar from "src/components/Layout/Navbar";
import Sidebar from "src/components/Layout/sidebar/Sidebar";
import Loading from "src/components/Loading";
import superjson from "superjson";
import type { AppRouter } from "../server/router";
import "../styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
  router,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        {/* {isLoading ? <Loading /> : undefined} */}
        <Navbar />
        <Sidebar />
        <ScaleFade key={router.asPath} initialScale={0.9} in={true}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScaleFade>
        <MobileMenu />
      </ChakraProvider>
    </SessionProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
