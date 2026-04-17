import { createTheme } from "@mui/material/styles";

export const tinyPalTheme = createTheme({
  palette: {
    primary: {
      main: "#6c4dc4",
      light: "#b49ae8",
      dark: "#5a3db8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff8e6e",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#2d2047",
      secondary: "#7b6e8f",
    },
    background: {
      default: "#f6edf7",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    button: { textTransform: "none" as const, fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 36, textTransform: "none" as const, fontWeight: 600, fontSize: 16 },
        containedPrimary: {
          background: "#6c4dc4",
          boxShadow: "0 4px 16px rgba(108,77,196,0.25)",
          "&:hover": { background: "#5a3db8" },
          "&:disabled": { background: "rgba(108,77,196,0.38)", color: "rgba(255,255,255,0.6)" },
        },
        outlinedPrimary: {
          borderColor: "#b49ae8",
          color: "#6c4dc4",
          "&:hover": { borderColor: "#6c4dc4", background: "rgba(108,77,196,0.05)" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 16, fontWeight: 600, fontSize: 13 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 20, boxShadow: "0 2px 16px rgba(107,77,196,0.08)" },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: { root: { height: 64 } },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: 3, height: 4, background: "#d8ccfa" },
        bar: { background: "#6c4dc4" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          "& fieldset": { borderColor: "#d9c8ff" },
          "&:hover fieldset": { borderColor: "#6c4dc4" },
          "&.Mui-focused fieldset": { borderColor: "#6c4dc4" },
        },
      },
    },
  },
});
