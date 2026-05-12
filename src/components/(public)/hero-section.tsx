import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 py-6 md:py-10">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Next.js + shadcn/ui Starter
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Build modern web apps faster with a clean, scalable foundation.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Includes route groups, area-based layouts, shared components, theme
          support, and a production-ready folder structure for teams.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/dashboard"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
          Open Dashboard
        </Link>
        <Link
          href="/login"
          className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
          Try Auth Flow
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-lg border border-border bg-card p-5">
          <h2 className="text-base font-semibold">Area-based Architecture</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Separate auth, public, and shell areas with dedicated layouts and
            reusable section components.
          </p>
        </article>

        <article className="rounded-lg border border-border bg-card p-5">
          <h2 className="text-base font-semibold">Ready-to-use UI Stack</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tailwind CSS v4 and shadcn/ui components give you accessible,
            customizable building blocks from day one.
          </p>
        </article>

        <article className="rounded-lg border border-border bg-card p-5">
          <h2 className="text-base font-semibold">Developer Experience</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            TypeScript strict mode, clean imports, and scalable conventions help
            teams ship features consistently.
          </p>
        </article>
      </div>

      <div className="grid gap-4 rounded-lg border border-border bg-muted/40 p-5 md:grid-cols-3">
        <div>
          <p className="text-2xl font-semibold">Next.js 16</p>
          <p className="text-sm text-muted-foreground">
            App Router + Turbopack
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">React 19</p>
          <p className="text-sm text-muted-foreground">
            Modern rendering model
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold">shadcn/ui</p>
          <p className="text-sm text-muted-foreground">Accessible primitives</p>
        </div>
      </div>
    </section>
  );
}
