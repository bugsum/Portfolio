import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

function Shimmer({ className }: { className?: string }) {
  return (
    <div className={cn("animate-shimmer rounded-md bg-surface-muted", className)} />
  );
}

export function NavSkeleton() {
  return (
    <div className="hidden items-center gap-1 md:flex">
      <Shimmer className="h-9 w-16 rounded-full" />
      <Shimmer className="h-9 w-20 rounded-full" />
      <Shimmer className="h-9 w-24 rounded-full" />
      <Shimmer className="h-9 w-20 rounded-full" />
    </div>
  );
}

export function ProjectDetailSkeleton() {
  return (
    <Container className="py-32 sm:py-40">
      <div className="flex flex-col gap-6">
        <Shimmer className="h-4 w-28" />
        <Shimmer className="h-16 w-full max-w-2xl" />
        <Shimmer className="h-6 w-full max-w-xl" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Shimmer key={index} className="h-24 rounded-xl" />
          ))}
        </div>
        <Shimmer className="mt-6 aspect-16/10 w-full rounded-2xl" />
      </div>
    </Container>
  );
}
