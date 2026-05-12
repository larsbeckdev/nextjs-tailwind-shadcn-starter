import { FeatureCard } from "@/components/shared/feature-card";

export function PublicSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Public Section</h1>
        <p className="text-muted-foreground">
          This is a publicly accessible page
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FeatureCard
          title="Feature One"
          description="Description of the first feature"
        />
        <FeatureCard
          title="Feature Two"
          description="Description of the second feature"
        />
      </div>
    </div>
  );
}
