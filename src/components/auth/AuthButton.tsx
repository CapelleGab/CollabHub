"use client";
import { signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";

export const LoginButton = () => {
  const handleCLick = async () => {
    await signIn("google");
  };

  return <Button onClick={handleCLick}>Login</Button>;
};

export const LogoutButton = ({ username }: { username: string }) => {
  const handleCLick = async () => {
    await signOut();
  };
  return (
    <Button variant="destructive" onClick={handleCLick}>
      {username}
    </Button>
  );
};
