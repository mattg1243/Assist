// this file was copied from Native Bases's doc src code
import { extendTheme } from "native-base";
import colors from "native-base/src/theme/base/colors";
export const theme = extendTheme({
  colors: {
    backgroundLight: colors.coolGray[100],
    backgroundDark: colors.blueGray[900],

    primaryTextDark: colors.cyan[200],
    primaryTextLight: colors.cyan[700],

    borderColorDark: colors.coolGray[800],
    borderColorLight: "#dfe3e6",
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});