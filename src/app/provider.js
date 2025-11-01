"use client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { lightTheme } from "@/styles/theme";
import AppcontextProvider from "@/context/app.context";

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppcontextProvider>
        <CssBaseline />
        {children}
      </AppcontextProvider>
    </ThemeProvider>
  );
}
