"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function CreateProjectButton() {
  const handleCreateProject = () => {
    // TODO: Implement project creation
  };

  return (
    <Link
      href="/profile/project/new"
      className={buttonVariants({ variant: "default" })}
    >
      Create new project
    </Link>
  );
}
