"use client";

import { UserSearch } from "@/components/search/UserSearch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDebounce } from "@/hooks/use-debounce";
import { searchUsers } from "@app/actions/search.actions";
import { User } from "@prisma/client";

import { FormEventHandler, useEffect, useState } from "react";
import { createProject } from "./NewProjectForm.actions";

type SearchUser = Pick<User, "id" | "username" | "name" | "image">;

export const NewProjectForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<SearchUser[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedSearch.length >= 2) {
      handleSearch(debouncedSearch);
    }
  }, [debouncedSearch]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const project = await createProject(formData);

    try {
      // Your API call here
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (value: string) => {
    if (value.length >= 2) {
      const results = await searchUsers(value);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    if (value.length < 2) {
      setSearchResults([]);
    }
  };

  const handleSelectUser = (user: SearchUser) => {
    if (!selectedUsers.find((u) => u.id === user.id)) {
      const newSelectedUsers = [...selectedUsers, user];
      setSelectedUsers(newSelectedUsers);

      // Update hidden input with selected user IDs
      const selectedUserIdsInput = document.querySelector(
        'input[name="selectedUserIds"]'
      ) as HTMLInputElement;
      if (selectedUserIdsInput) {
        selectedUserIdsInput.value = JSON.stringify(
          newSelectedUsers.map((u) => u.id)
        );
      }
    }
    setSearchQuery("");
    setSearchResults([]);
    setIsDialogOpen(false);
  };

  const handleRemoveUser = (userId: string) => {
    const newSelectedUsers = selectedUsers.filter((user) => user.id !== userId);
    setSelectedUsers(newSelectedUsers);

    // Update hidden input with selected user IDs
    const selectedUserIdsInput = document.querySelector(
      'input[name="selectedUserIds"]'
    ) as HTMLInputElement;
    if (selectedUserIdsInput) {
      selectedUserIdsInput.value = JSON.stringify(
        newSelectedUsers.map((u) => u.id)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Project Information
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Basic details about your project
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-lg" htmlFor="projectName">
                    Project name
                  </Label>
                  <Input
                    type="text"
                    id="projectName"
                    name="projectName"
                    placeholder="Enter your project name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-lg" htmlFor="projectDescription">
                    Project description
                  </Label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    placeholder="Describe what your project is about"
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Project Members Section */}
            <div className="space-y-4">
              <input
                type="hidden"
                name="selectedUserIds"
                value={JSON.stringify(selectedUsers.map((user) => user.id))}
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Members</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage who has access to this project
                </p>
              </div>

              <div className="space-y-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>Add member</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add member</DialogTitle>
                      <DialogDescription>
                        Search and add a member to your project.
                      </DialogDescription>
                    </DialogHeader>
                    <UserSearch
                      users={searchResults}
                      onSelect={handleSelectUser}
                      onSearch={handleInputChange}
                      searchQuery={searchQuery}
                    />
                  </DialogContent>
                </Dialog>

                {selectedUsers.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center gap-2 bg-secondary p-2 rounded-md"
                      >
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={user.image ?? undefined} />
                          <AvatarFallback>
                            {user.name?.[0] ?? user.username?.[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm">
                          {user.name ?? user.username}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => handleRemoveUser(user.id)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full md:w-auto">
            Create project
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
