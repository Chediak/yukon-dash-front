import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: () => ({
    body: {
      bg: "light",
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode("#111111", "#8764f1")(props),
      textUnderlineOffset: 3,
    }),
  },
  Input: {
    baseStyle: (props: any) => ({
      color: mode("#111111", "#8764f1")(props),
      border: "0px",
    }),
  },
};

const fonts = {
  heading: "Lato', sans-serif",
  body: "Lato', sans-serif",
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
