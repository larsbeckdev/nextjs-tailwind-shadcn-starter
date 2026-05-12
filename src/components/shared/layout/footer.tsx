import { cn } from "@/lib/utils";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className, children, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-border bg-background text-sm text-muted-foreground",
        className,
      )}
      {...props}>
      <div className="flex flex-col gap-4 px-4 py-8 md:px-6">{children}</div>
    </footer>
  );
}
