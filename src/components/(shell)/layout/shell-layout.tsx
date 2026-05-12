import {
  Header,
  Sidebar,
  Footer,
  HeaderActions,
} from "@/components/shared/layout";
import { cn } from "@/lib/utils";

export interface ShellLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  showHeader?: boolean;
  showSidebar?: boolean;
  showFooter?: boolean;
  sidebarPosition?: "left" | "right";
  userEmail?: string;
  userInitials?: string;
  onLogout?: () => void;
  onSettings?: () => void;
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
  userEmail,
  userInitials,
  onLogout,
  onSettings,
  ...props
}: ShellLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background" {...props}>
      {showHeader && (
        <Header>
          <div className="text-xl font-semibold">Dashboard</div>
          <HeaderActions
            userEmail={userEmail}
            userInitials={userInitials}
            onLogout={onLogout}
            onSettings={onSettings}
          />
        </Header>
      )}

      <div className="flex flex-1 overflow-hidden">
        {showSidebar && sidebarPosition === "left" && (
          <Sidebar>{sidebar}</Sidebar>
        )}

        <main
          className={cn("flex-1 overflow-y-auto px-4 md:px-6 py-6", className)}>
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
