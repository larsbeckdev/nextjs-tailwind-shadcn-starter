import { cn } from "@/lib/utils";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  sticky?: boolean;
}

export function Header({
  className,
  sticky = true,
  children,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        sticky && "sticky top-0 z-40",
        className,
      )}
      {...props}>
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        {children}
      </div>
    </header>
  );
}
