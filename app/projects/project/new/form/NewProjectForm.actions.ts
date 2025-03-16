"use server"
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const createProject = async (formData: FormData) => {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const projectName = formData.get("projectName");
  const projectDescription = formData.get("projectDescription");
  const selectedUserIds = formData.get("selectedUserIds");

  const memberIds = selectedUserIds
    ? JSON.parse(selectedUserIds as string)
    : [];

  // Make sure the creator is always included as a member
  if (!memberIds.includes(session.user.id)) {
    memberIds.push(session.user.id);
  }

  const newProject = await prisma.project.create({
    data: {
      name: projectName as string,
      description: projectDescription as string,
      userId: session.user.id,
      ProjectMember: {
        create: memberIds.map((id: string) => ({
          userId: id,
        })),
      },
    },
    include: {
      ProjectMember: {
        include: {
          user: true,
        },
      },
    },
  });

  return {
    success: true,
    message: "Project created successfully",
    id: newProject.id,
  };
};
