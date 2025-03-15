"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEventHandler } from "react";

export const NewProjectForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
    } catch (error) {
      console.error(error);
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
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Members</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage who has access to this project
                </p>
              </div>

              <div className="space-y-4">
                <Dialog>
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
                    <div className="grid gap-4 py-4">
                      <div className="space-y-4">
                        <div className="flex flex-col gap-1.5">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            placeholder="Search by username"
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button">Add member</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
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
