"use client";
import { LoginButton, LogoutButton } from "@/components/auth/AuthButton";
import { Session } from "next-auth";
import { ModeToggle } from "../theme/theme-mode-toggle";

export default function Header({ session }: { session: Session | null }) {
  const user = session?.user;
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-accent">
      <p>CollabHub</p>

      <div className="flex items-center gap-2">
        {!user ? <LoginButton /> : <LogoutButton username={user?.name ?? ""} />}
        <ModeToggle />
      </div>
    </header>
  );
}
