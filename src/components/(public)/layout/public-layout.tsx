import { Header, Footer } from "@/components/shared/layout";
import { cn } from "@/lib/utils";

export interface PublicLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

/**
 * Layout for public-facing pages
 * Includes header and footer, with centered content area
 */
export function PublicLayout({
  className,
  children,
  showHeader = true,
  showFooter = true,
  ...props
}: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background" {...props}>
      {showHeader && (
        <Header>
          <div className="text-xl font-semibold">Site</div>
        </Header>
      )}

      <main className={cn("flex-1", className)}>{children}</main>

      {showFooter && (
        <Footer>
          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </Footer>
      )}
    </div>
  );
}
