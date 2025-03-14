"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const publicPaths = ["/", "/auth/signin", "/auth/signup"];

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isPublicPath = publicPaths.includes(pathname);

    if (status === "loading") {
      return;
    }

    if (!session && !isPublicPath) {
      router.push("/");
    }
  }, [session, status, pathname, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}
