import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  shouldFilter?: boolean;
}

interface CommandInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: string) => void;
}

interface CommandListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CommandEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

interface CommandItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onSelect?: () => void;
}

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ className, shouldFilter, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex h-full w-full flex-col overflow-hidden", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Command.displayName = "Command";

export const CommandInput = React.forwardRef<
  HTMLInputElement,
  CommandInputProps
>(({ className, value, onValueChange, onFocus, onBlur, ...props }, ref) => {
  return (
    <div className="flex items-center border-b px-3">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        value={value}
        onChange={(e) => onValueChange?.(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
});
CommandInput.displayName = "CommandInput";

export const CommandList = React.forwardRef<HTMLDivElement, CommandListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "max-h-[300px] overflow-y-auto overflow-x-hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CommandList.displayName = "CommandList";

export const CommandEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("py-6 text-center text-sm", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CommandEmpty.displayName = "CommandEmpty";

export const CommandGroup = React.forwardRef<HTMLDivElement, CommandGroupProps>(
  ({ className, heading, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
          className
        )}
        {...props}
      >
        {heading && <div cmdk-group-heading="">{heading}</div>}
        {children}
      </div>
    );
  }
);
CommandGroup.displayName = "CommandGroup";

export const CommandItem = React.forwardRef<
  HTMLButtonElement,
  CommandItemProps
>(({ className, onSelect, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      onClick={onSelect}
      {...props}
    >
      {children}
    </button>
  );
});
CommandItem.displayName = "CommandItem";
