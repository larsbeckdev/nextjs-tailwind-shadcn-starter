"use client";

import { cn } from "@/lib/utils";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right";
  collapsible?: boolean;
}

export function Sidebar({
  className,
  side = "left",
  collapsible = true,
  children,
  ...props
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "hidden border-r border-border bg-background md:flex md:flex-col md:w-64",
        side === "right" && "border-r-0 border-l",
        className,
      )}
      {...props}>
      <nav
        className="flex-1 overflow-y-auto px-3 py-4"
        aria-label="Sidebar navigation">
        {children}
      </nav>
    </aside>
  );
}
