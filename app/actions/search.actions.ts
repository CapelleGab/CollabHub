"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function searchUsers(query: string) {
  const session = await auth();
  if (!session?.user?.id) return [];

  return prisma.user.findMany({
    where: {
      AND: [
        {
          OR: [
            { username: { contains: query } },
            { name: { contains: query } },
          ],
        },
        {
          id: { not: session.user.id },
        },
      ],
    },
    select: {
      id: true,
      username: true,
      name: true,
      image: true,
    },
    take: 5,
  });
}
