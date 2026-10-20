export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-content flex-1 flex-col justify-center gap-6 px-6 py-32 sm:px-8 lg:px-12">
      <p className="font-mono text-2xs uppercase text-foreground-muted">
        Foundation
      </p>
      <h1 className="font-display text-display-lg text-balance text-foreground">
        Design tokens are live.
      </h1>
      <p className="max-w-prose text-lg text-foreground-muted">
        Typography, color ramps and the dark variant are wired up. Pages come
        next.
      </p>
    </main>
  );
}
