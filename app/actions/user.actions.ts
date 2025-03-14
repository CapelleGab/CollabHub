"use server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Get all data of user
export async function getUserById() {
  const session = await auth();
  return prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });
}

// Get all projects of user (owned and member)
export async function getUserProjects() {
  const session = await auth();

  if (!session?.user?.id) {
    return [];
  }

  const projects = await prisma.project.findMany({
    where: {
      OR: [
        { userId: session.user.id },
        {
          ProjectMember: {
            some: {
              userId: session.user.id,
            },
          },
        },
      ],
    },
    include: {
      user: true,
      ProjectMember: {
        include: {
          user: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return projects;
}
