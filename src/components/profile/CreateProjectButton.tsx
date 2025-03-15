"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function CreateProjectButton() {
  return (
    <Link
      href="/dashboard/project/new"
      className={buttonVariants({ variant: "default" })}
    >
      Create new project
    </Link>
  );
}
