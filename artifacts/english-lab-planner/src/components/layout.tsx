import React from "react";
import { Link, useLocation } from "wouter";
import {
  Home,
  Zap,
  BookOpen,
  BarChart3,
  ClipboardList,
  Globe2,
  BookMarked,
  PencilLine,
  ChevronRight,
  ExternalLink,
  FolderKanban,
  Orbit,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GRADE_BANDS, QUICK_TOOLS, WORKSHOP_UNITS, type GradeId, type WorkshopId } from "@/lib/data";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/readers-workshop", label: "Reader's Workshop", icon: BookMarked },
  { href: "/writers-workshop", label: "Writer's Workshop", icon: PencilLine },
  { href: "/teaching-learning-cycle", label: "Teaching Cycle", icon: Orbit },
  { href: "/writing-workshop-toolkit", label: "Writing Toolkit", icon: FolderKanban },
  { href: "/quick-tools", label: "Quick Tools", icon: Zap },
  { href: "/strategies", label: "Strategies by Skill", icon: BookOpen },
  { href: "/wida-levels", label: "WIDA Levels", icon: BarChart3 },
  { href: "/assessments", label: "Assessments", icon: ClipboardList },
  { href: "/translations", label: "Translations & Tools", icon: Globe2 },
] as const;

const PATH_LABELS: Record<string, string> = {
  "/": "Home",
  "/readers-workshop": "Reader's Workshop",
  "/writers-workshop": "Writer's Workshop",
  "/teaching-learning-cycle": "Teaching Cycle",
  "/writing-workshop-toolkit": "Writing Toolkit",
  "/quick-tools": "Quick Tools",
  "/strategies": "Strategies by Skill",
  "/wida-levels": "WIDA Levels",
  "/assessments": "Assessments",
  "/translations": "Translations & Tools",
};

const PRIMARY_NAV_ITEMS = [
  "/",
  "/quick-tools",
  "/strategies",
  "/writers-workshop",
  "/readers-workshop",
  "/writing-workshop-toolkit",
] as const;

const NAV_GROUPS = [
  {
    label: "Start Here",
    items: ["/", "/quick-tools", "/strategies"],
  },
  {
    label: "Workshop Planning",
    items: ["/writers-workshop", "/readers-workshop", "/writing-workshop-toolkit", "/teaching-learning-cycle"],
  },
  {
    label: "Reference Tools",
    items: ["/wida-levels", "/assessments", "/translations"],
  },
] as const;

const LOGO_SRC = `${import.meta.env.BASE_URL}lenguaje-labs-logo.jpg`;

function getCurrentSection(location: string) {
  return (
    NAV_ITEMS.find((item) => item.href !== "/" && location.startsWith(item.href)) ??
    NAV_ITEMS[0]
  );
}

function getQuickToolContext() {
  const params = new URLSearchParams(window.location.search);
  const workshop = params.get("workshop") as WorkshopId | null;
  const gradeBand = params.get("gradeBand") ?? params.get("grade");
  const grade = params.get("grade") as GradeId | null;
  const unitId = params.get("unit");
  const taskId = params.get("task");

  const gradeBandLabel = GRADE_BANDS.find((band) => band.id === gradeBand)?.label;
  const unitLabel =
    workshop && grade && unitId
      ? WORKSHOP_UNITS[workshop]?.[grade]?.find((unit) => unit.id === unitId)?.title
      : undefined;
  const taskLabel = QUICK_TOOLS.find((tool) => tool.id === taskId)?.name;

  return { workshop, gradeBandLabel, grade, unitLabel, taskLabel };
}

function StickyNav() {
  const [location] = useLocation();
  const currentSection = getCurrentSection(location);
  const quickToolContext =
    location.startsWith("/quick-tools") ? getQuickToolContext() : null;
  const showDesktopContext = location.startsWith("/quick-tools");

  const breadcrumbItems = [PATH_LABELS["/"]];

  if (quickToolContext?.workshop === "reader") {
    breadcrumbItems.push("Reader's Workshop");
  } else if (quickToolContext?.workshop === "writer") {
    breadcrumbItems.push("Writer's Workshop");
  } else if (location !== "/") {
    breadcrumbItems.push(PATH_LABELS[location] ?? currentSection.label);
  }

  if (quickToolContext?.gradeBandLabel) {
    breadcrumbItems.push(`Grades ${quickToolContext.gradeBandLabel}`);
  }

  if (quickToolContext?.grade) {
    breadcrumbItems.push(`Grade ${quickToolContext.grade}`);
  }

  if (quickToolContext?.unitLabel) {
    breadcrumbItems.push(quickToolContext.unitLabel);
  }

  if (quickToolContext?.taskLabel) {
    breadcrumbItems.push(quickToolContext.taskLabel);
  }

  const mobileItems = NAV_ITEMS.filter((item) =>
    PRIMARY_NAV_ITEMS.includes(item.href as (typeof PRIMARY_NAV_ITEMS)[number]),
  );
  const showCurrentSectionPill =
    location !== "/" && !mobileItems.some((item) => item.href === currentSection.href);

  return (
    <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-14 py-3">
        <div className={`flex flex-wrap items-center gap-2 text-sm text-slate-500 ${showDesktopContext ? "" : "lg:hidden"}`}>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              {index > 0 && <ChevronRight className="h-4 w-4 text-slate-300" />}
              <span
                className={cn(
                  "truncate",
                  index === breadcrumbItems.length - 1
                    ? "font-semibold text-blue-950"
                    : "text-slate-500",
                )}
              >
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
        <div className="mt-1 text-xs font-medium text-slate-500 lg:hidden">
          Start here first, then open the support page you need.
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {mobileItems.map(({ href, label, icon: Icon }) => {
            const isActive =
              href === "/"
                ? location === href
                : location.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                  isActive
                    ? "border-blue-200 bg-blue-50 text-blue-950 font-semibold"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-100 hover:bg-slate-50",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            );
          })}
          {showCurrentSectionPill ? (
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
              {React.createElement(currentSection.icon, { className: "h-4 w-4" })}
              <span>{currentSection.label}</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function TopBar() {
  return (
    <header className="bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-900 text-white shadow-sm flex-shrink-0">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-3 md:px-10 xl:px-14">
        <div className="h-9 w-9 overflow-hidden rounded-xl border border-white/15 bg-slate-950 shadow-inner">
          <img
            src={LOGO_SRC}
            alt="Lenguaje Labs logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-semibold tracking-wide uppercase text-white/70">
            Lenguaje Labs
          </div>
          <div className="font-semibold text-base leading-none">EALDesk</div>
        </div>
        <div className="hidden min-w-0 flex-1 items-center gap-2 text-sm text-white/85 md:flex">
          <span className="font-semibold text-white/70">Best places to start:</span>
          <Link href="/quick-tools" className="rounded-full border border-white/20 px-3 py-1 transition-colors hover:bg-white/10">
            Quick Tools
          </Link>
          <Link href="/strategies" className="rounded-full border border-white/20 px-3 py-1 transition-colors hover:bg-white/10">
            Strategies
          </Link>
          <Link href="/writing-workshop-toolkit" className="rounded-full border border-white/20 px-3 py-1 transition-colors hover:bg-white/10">
            Writing Toolkit
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-3 text-xs font-medium text-white/80">
          <span className="rounded-full border border-white/20 px-3 py-1">
            Teacher planning resource
          </span>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-2 text-xs text-white/75 md:hidden">
        Start with Quick Tools, Strategies, or the Writing Toolkit.
      </div>
    </header>
  );
}

export function SiteHeader() {
  return (
    <div className="bg-white border-b border-slate-200 px-5 py-5 md:px-8 flex items-center justify-between flex-shrink-0">
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold text-blue-950">EALDesk</h1>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          Practical language supports for multilingual learners. Use this site to choose a scaffold, plan a unit, or support a lesson in real time.
        </p>
      </div>
      <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-blue-900">
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">Choose one support</span>
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">Stay WIDA-aligned</span>
      </div>
    </div>
  );
}

export function SideBar() {
  const [location] = useLocation();
  return (
    <aside className="w-60 border-r border-slate-200 bg-white/90 hidden lg:flex flex-col flex-shrink-0">
      <nav className="px-3 py-4 space-y-5 flex-1">
        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <div className="px-3 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              {group.label}
            </div>
            <div className="space-y-0.5">
              {group.items.map((href) => {
                const item = NAV_ITEMS.find((navItem) => navItem.href === href);
                if (!item) return null;

                const isActive = location === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                      isActive
                        ? "bg-blue-50 text-blue-950 border-l-4 border-blue-600 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 border-l-4 border-transparent"
                    )}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <TopBar />
      <SiteHeader />
      <StickyNav />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <main id="main-content" className="flex-1 overflow-y-auto px-5 md:px-10 xl:px-14 py-4 pb-16">
          <div className="max-w-7xl mx-auto">
            {children}
            <footer className="mt-12 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
              <a
                href="https://lenguajelabs-design.github.io/lenguaje-labs-site/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 font-medium text-blue-900 transition-colors hover:border-blue-200 hover:bg-blue-50"
              >
                Visit the main Lenguaje Labs site
                <ExternalLink className="h-4 w-4" />
              </a>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
