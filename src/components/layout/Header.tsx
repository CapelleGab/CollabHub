"use client";

import { LoginButton, LogoutButton } from "@/components/auth/AuthButton";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ModeToggle } from "../theme/theme-mode-toggle";

export default function Header() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-accent">
      <Link href="/" className="text-primary">
        CollabHub
      </Link>

      <div className="flex items-center gap-2">
        {!user ? <LoginButton /> : <LogoutButton username={user?.name ?? ""} />}
        <ModeToggle />
      </div>
    </header>
  );
}
