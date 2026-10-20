import type { Icon as PhosphorIcon } from "@phosphor-icons/react/lib";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  CalendarBlankIcon,
  ChatCircleIcon,
  CheckIcon,
  CloudIcon,
  CodeIcon,
  CopyIcon,
  CubeIcon,
  DatabaseIcon,
  DribbbleLogoIcon,
  EnvelopeIcon,
  GaugeIcon,
  GithubLogoIcon,
  GraduationCapIcon,
  LightningIcon,
  LinkedinLogoIcon,
  ListIcon,
  MapPinIcon,
  MoonIcon,
  PackageIcon,
  PaletteIcon,
  RocketIcon,
  RssSimpleIcon,
  ShieldCheckIcon,
  SparkleIcon,
  SunIcon,
  TerminalIcon,
  TestTubeIcon,
  UsersIcon,
  WrenchIcon,
  XIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/cn";
import type { IconName } from "@/types/ui";

const registry: Record<IconName, PhosphorIcon> = {
  arrowRight: ArrowRightIcon,
  arrowUpRight: ArrowUpRightIcon,
  arrowLeft: ArrowLeftIcon,
  briefcase: BriefcaseIcon,
  calendar: CalendarBlankIcon,
  chatCircle: ChatCircleIcon,
  check: CheckIcon,
  code: CodeIcon,
  cloud: CloudIcon,
  copy: CopyIcon,
  cube: CubeIcon,
  database: DatabaseIcon,
  dribbble: DribbbleLogoIcon,
  envelope: EnvelopeIcon,
  gauge: GaugeIcon,
  github: GithubLogoIcon,
  graduationCap: GraduationCapIcon,
  lightning: LightningIcon,
  linkedin: LinkedinLogoIcon,
  list: ListIcon,
  mapPin: MapPinIcon,
  moon: MoonIcon,
  package: PackageIcon,
  palette: PaletteIcon,
  rocket: RocketIcon,
  rss: RssSimpleIcon,
  shieldCheck: ShieldCheckIcon,
  sparkle: SparkleIcon,
  sun: SunIcon,
  terminal: TerminalIcon,
  testTube: TestTubeIcon,
  users: UsersIcon,
  wrench: WrenchIcon,
  x: XIcon,
  xLogo: XLogoIcon,
};

export type IconWeight = "duotone" | "bold" | "regular" | "fill";

type IconProps = {
  name: IconName;
  className?: string;
  weight?: IconWeight;
};

export function Icon({ name, className, weight = "duotone" }: IconProps) {
  const Glyph = registry[name];
  return (
    <Glyph
      weight={weight}
      aria-hidden
      className={cn("size-5 shrink-0", className)}
    />
  );
}
