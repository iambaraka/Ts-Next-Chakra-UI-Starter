import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const breakpoints = {
  sm: "360px",
  sxm: "480px",
  md: "640px",
  mxd: "800px",
  xl: "1024px",
  xxl: "1280px",
  xxxl: "1440px",
};

const theme = extendTheme({
  config,
  breakpoints,

  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "'Inter', sans-serif",
        lineHeight: "base",
      },
    }),
  },
});

export default theme;
