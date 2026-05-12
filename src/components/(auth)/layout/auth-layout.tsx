import { cn } from "@/lib/utils";

export interface AuthLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Layout for authentication pages (login, signup, reset password)
 * Centers content with a maximum width and minimal chrome
 */
export function AuthLayout({ className, children, ...props }: AuthLayoutProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-background px-4",
        className,
      )}
      {...props}>
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
