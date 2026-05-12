import { Header, Sidebar, Footer } from "@/components/shared/layout";
import { cn } from "@/lib/utils";

export interface ShellLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  showHeader?: boolean;
  showSidebar?: boolean;
  showFooter?: boolean;
  sidebarPosition?: "left" | "right";
}

/**
 * Layout for the main application shell
 * Includes header, sidebar, and main content area
 */
export function ShellLayout({
  className,
  children,
  sidebar,
  showHeader = true,
  showSidebar = true,
  showFooter = true,
  sidebarPosition = "left",
  ...props
}: ShellLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background" {...props}>
      {showHeader && (
        <Header>
          <div className="text-xl font-semibold">Dashboard</div>
        </Header>
      )}

      <div className="flex flex-1 overflow-hidden">
        {showSidebar && sidebarPosition === "left" && (
          <Sidebar>{sidebar}</Sidebar>
        )}

        <main className={cn("flex-1 overflow-y-auto", className)}>
          {children}
        </main>

        {showSidebar && sidebarPosition === "right" && (
          <Sidebar side="right">{sidebar}</Sidebar>
        )}
      </div>

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
