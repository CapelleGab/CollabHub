import { ProjectType } from "@/types/ProjectType";
import { getUserProjects } from "@app/actions/user.actions";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export async function UserProjectsList() {
  const projects = await getUserProjects();

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No projects found</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: ProjectType) => (
        <Link
          key={project.id}
          href={`/dashboard/project/${project.id}`}
          className="block"
        >
          <Card className="h-full hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>
                Created{" "}
                {formatDistanceToNow(new Date(project.createdAt), {
                  addSuffix: true,
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                {project.description || "No description provided"}
              </p>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  {project.ProjectMember.length} members
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
