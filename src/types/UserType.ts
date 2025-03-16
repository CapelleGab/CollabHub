import { User } from "@prisma/client";

export type SearchUser = Pick<User, "id" | "username" | "name" | "image">;

export type UserSearchProps = {
  users: SearchUser[];
  onSelect: (user: SearchUser) => void;
  onSearch: (value: string) => void;
  searchQuery: string;
};
