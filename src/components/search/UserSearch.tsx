"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { UserSearchProps } from "@/types/UserType";
import * as React from "react";

export function UserSearch({
  users,
  onSelect,
  onSearch,
  searchQuery,
}: UserSearchProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <div className="rounded-lg border shadow-md">
      <Command shouldFilter={false} className="w-full">
        <CommandInput
          placeholder="Search by username or name..."
          value={searchQuery}
          onValueChange={onSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <CommandList>
          {isFocused && searchQuery && users.length === 0 && (
            <CommandEmpty>No users found.</CommandEmpty>
          )}
          {users.length > 0 && (
            <CommandGroup className="p-2">
              {users.map((user) => (
                <CommandItem
                  key={user.id}
                  onSelect={() => onSelect(user)}
                  className="flex items-center gap-2"
                >
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={user.image ?? undefined} />
                    <AvatarFallback>
                      {user.name?.[0] ?? user.username?.[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-start">{user.name}</span>
                    {user.username && (
                      <span className="text-[10px] text-start text-muted-foreground">
                        @{user.username}
                      </span>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </div>
  );
}
