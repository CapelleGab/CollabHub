import { UserProjectsList } from "@/components/profile/UserProjectsList";
import { CreateProjectButton } from "@/components/profile/CreateProjectButton";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl w-full px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-8">
      <div className="flex justify-between items-start">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Your Projects</h1>
          <p className="text-muted-foreground mt-2">
            View and manage your projects
          </p>
        </div>
        <CreateProjectButton />
      </div>
      <UserProjectsList />
    </div>
  );
}
