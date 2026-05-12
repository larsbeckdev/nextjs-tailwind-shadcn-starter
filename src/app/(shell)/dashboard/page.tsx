export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your dashboard</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-semibold text-lg">Stats</h3>
          <p className="mt-4 text-3xl font-bold">42</p>
          <p className="text-sm text-muted-foreground">Total users</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-semibold text-lg">Activity</h3>
          <p className="mt-4 text-3xl font-bold">128</p>
          <p className="text-sm text-muted-foreground">Recent events</p>
        </div>
      </div>
    </div>
  );
}
