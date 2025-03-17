"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

export default AppProviders;
