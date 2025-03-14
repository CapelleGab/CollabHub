"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { SessionProvider } from "next-auth/react";
import { AuthGuard } from "./auth/AuthGuard";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthGuard>{children}</AuthGuard>
      </ThemeProvider>
    </SessionProvider>
  );
}
