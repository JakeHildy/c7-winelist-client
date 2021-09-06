import React from "react";
import { ThemeProvider } from "styled-components";
import { Commerce7AdminUI } from "@commerce7/admin-ui";
import { colors } from "./styles/colors";

const lightTheme = {
  ...colors.light,
  textColor: "#2a3238",
  backgroundColor: colors.light.white,
  headerBackground: colors.light.offBlack,
  mode: "light",
};
const darkTheme = {
  ...colors.dark,
  textColor: "#f1f1f1",
  backgroundColor: colors.dark.offBlack,
  headerBackground: colors.dark.grayDark,
  mode: "dark",
};

let selectedTheme = darkTheme;

let theme = {
  local__ui: { ...selectedTheme },
};

const Theme = ({ children }) => {
  return (
    <Commerce7AdminUI mode={selectedTheme.mode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Commerce7AdminUI>
  );
};

export default Theme;
