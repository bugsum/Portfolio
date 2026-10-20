import { cn } from "@/lib/cn";

type ContainerWidth = "prose" | "content" | "wide";

const widths: Record<ContainerWidth, string> = {
  prose: "max-w-prose",
  content: "max-w-content",
  wide: "max-w-wide",
};

type ContainerProps = {
  children: React.ReactNode;
  width?: ContainerWidth;
  className?: string;
};

export function Container({
  children,
  width = "content",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        widths[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
