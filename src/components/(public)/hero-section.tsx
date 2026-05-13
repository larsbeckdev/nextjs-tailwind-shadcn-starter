import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const featureCards = [
  {
    title: "Area-based Architecture",
    description:
      "Separate auth, public, and shell areas with dedicated layouts and reusable section components.",
  },
  {
    title: "Ready-to-use UI Stack",
    description:
      "Tailwind CSS v4 and shadcn/ui components give you accessible, customizable building blocks from day one.",
  },
  {
    title: "Developer Experience",
    description:
      "TypeScript strict mode, clean imports, and scalable conventions help teams ship features consistently.",
  },
];

const stackHighlights = [
  { label: "Next.js 16", value: "App Router + Turbopack" },
  { label: "React 19", value: "Modern rendering model" },
  { label: "shadcn/ui", value: "Accessible primitives" },
];

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 py-6 md:py-10">
      <div className="space-y-4">
        <Badge variant="outline">Next.js + shadcn/ui Starter</Badge>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Build modern web apps faster with a clean, scalable foundation.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Includes route groups, area-based layouts, shared components, theme
          support, and a production-ready folder structure for teams.
        </p>
      </div>

      <Card className="rounded-lg border">
        <CardHeader>
          <CardTitle className="text-base">Route Groups</CardTitle>
          <CardDescription>
            Organize your routes into isolated app areas while keeping shared UI
            reusable.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button asChild size="lg">
            <Link href="/dashboard">Open Dashboard</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/login">Try Auth Flow</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((feature) => (
          <Card key={feature.title} className="rounded-lg border">
            <CardHeader>
              <CardTitle className="text-base">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="rounded-lg border bg-muted/40">
        <CardHeader>
          <CardTitle className="text-base">Core Stack</CardTitle>
          <CardDescription>
            Production-ready defaults for modern app development.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {stackHighlights.map((item, index) => (
            <div key={item.label} className="space-y-1">
              <p className="text-2xl font-semibold">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.value}</p>
              {index < stackHighlights.length - 1 ? (
                <Separator className="mt-3 md:hidden" />
              ) : null}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
