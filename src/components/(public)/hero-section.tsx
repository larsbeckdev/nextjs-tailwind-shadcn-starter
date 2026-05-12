import Link from "next/link";

export function HeroSection() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-muted-foreground mt-2">
          Choose a section to get started
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href="/public-section"
          className="rounded-lg border border-border bg-card p-6 hover:bg-accent transition-colors">
          <h2 className="font-semibold">Public</h2>
          <p className="text-sm text-muted-foreground">Public-facing pages</p>
        </Link>

        <Link
          href="/login"
          className="rounded-lg border border-border bg-card p-6 hover:bg-accent transition-colors">
          <h2 className="font-semibold">Auth</h2>
          <p className="text-sm text-muted-foreground">
            Login and authentication
          </p>
        </Link>

        <Link
          href="/dashboard"
          className="rounded-lg border border-border bg-card p-6 hover:bg-accent transition-colors">
          <h2 className="font-semibold">Shell</h2>
          <p className="text-sm text-muted-foreground">Main application area</p>
        </Link>
      </div>
    </div>
  );
}
