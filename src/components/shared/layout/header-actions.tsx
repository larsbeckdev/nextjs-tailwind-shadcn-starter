"use client";

import { ThemeToggle } from "./theme-toggle";
import { AvatarMenu, type AvatarMenuProps } from "./avatar-menu";

export interface HeaderActionsProps extends AvatarMenuProps {
  showAvatar?: boolean;
}

export function HeaderActions({
  showAvatar = true,
  userEmail,
  userInitials,
  onLogout,
  onSettings,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      {showAvatar && (
        <AvatarMenu
          userEmail={userEmail}
          userInitials={userInitials}
          onLogout={onLogout}
          onSettings={onSettings}
        />
      )}
    </div>
  );
}
