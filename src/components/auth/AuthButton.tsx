"use client";
import { LogOut, User } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const LoginButton = () => {
  const handleCLick = async () => {
    await signIn("google");
  };

  return <Button onClick={handleCLick}>Login</Button>;
};

export const LogoutButton = ({ username }: { username: string }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
  };

  const handleProfileClick = () => {
    router.push(`/profile`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{username}</Button>
      </DropdownMenuTrigger>  
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleProfileClick}>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
