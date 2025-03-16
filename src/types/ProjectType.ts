export type ProjectType = {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  ProjectMember: { id: string }[];
};
