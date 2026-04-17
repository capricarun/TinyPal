import { RouterProvider } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { router } from "./routes";
import { tinyPalTheme } from "./muiTheme";

export default function App() {
  return (
    <ThemeProvider theme={tinyPalTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
