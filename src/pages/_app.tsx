import AppHead from "../seo/AppHead";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={theme}
      resetCSS
    >
      <AppHead />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
