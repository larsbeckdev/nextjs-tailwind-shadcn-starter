"use client";

import Link from "next/link";
import { ShellLayout } from "@/components/(shell)/layout";

export default function ShellRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = (
    <div className="space-y-4">
      <nav className="space-y-2" aria-label="Dashboard navigation">
        <Link
          href="/dashboard"
          className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
          Dashboard
        </Link>
        <Link
          href="/settings"
          className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
          Settings
        </Link>
        <Link
          href="/profile"
          className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
          Profile
        </Link>
      </nav>
    </div>
  );

  return (
    <ShellLayout sidebar={sidebar}>
      <div className="p-6">{children}</div>
    </ShellLayout>
  );
}
