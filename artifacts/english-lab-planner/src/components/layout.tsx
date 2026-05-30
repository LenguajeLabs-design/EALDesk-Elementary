import React from "react";
import { Link, useLocation } from "wouter";
import {
  Home, Zap, BookOpen, BarChart3, ClipboardList, Globe2, Search, BookMarked, PencilLine, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GRADE_BANDS, QUICK_TOOLS, WORKSHOP_UNITS } from "@/lib/data";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/readers-workshop", label: "Reader's Workshop", icon: BookMarked },
  { href: "/writers-workshop", label: "Writer's Workshop", icon: PencilLine },
  { href: "/quick-tools", label: "Quick Tools", icon: Zap },
  { href: "/strategies", label: "Strategies by Skill", icon: BookOpen },
  { href: "/wida-levels", label: "WIDA Levels", icon: BarChart3 },
  { href: "/assessments", label: "Assessments", icon: ClipboardList },
  { href: "/translations", label: "Translations & Tools", icon: Globe2 },
];

const PATH_LABELS: Record<string, string> = {
  "/": "Home",
  "/readers-workshop": "Reader's Workshop",
  "/writers-workshop": "Writer's Workshop",
  "/quick-tools": "Quick Tools",
  "/strategies": "Strategies by Skill",
  "/wida-levels": "WIDA Levels",
  "/assessments": "Assessments",
  "/translations": "Translations & Tools",
};

const LOGO_SRC = `${import.meta.env.BASE_URL}lenguaje-labs-logo.jpg`;

function getCurrentSection(location: string) {
  return (
    NAV_ITEMS.find((item) => item.href !== "/" && location.startsWith(item.href)) ??
    NAV_ITEMS[0]
  );
}

function getQuickToolContext() {
  const params = new URLSearchParams(window.location.search);
  const workshop = params.get("workshop");
  const gradeBand = params.get("gradeBand") ?? params.get("grade");
  const unitId = params.get("unit");
  const taskId = params.get("task");

  const gradeBandLabel = GRADE_BANDS.find((band) => band.id === gradeBand)?.label;
  const unitLabel =
    workshop && gradeBand && unitId
      ? WORKSHOP_UNITS[
          workshop as keyof typeof WORKSHOP_UNITS
        ]?.[gradeBand as keyof (typeof WORKSHOP_UNITS)[keyof typeof WORKSHOP_UNITS]]?.find(
          (unit) => unit.id === unitId,
        )?.title
      : undefined;
  const taskLabel = QUICK_TOOLS.find((tool) => tool.id === taskId)?.name;

  return { workshop, gradeBandLabel, unitLabel, taskLabel };
}

function StickyNav() {
  const [location] = useLocation();
  const currentSection = getCurrentSection(location);
  const quickToolContext =
    location.startsWith("/quick-tools") ? getQuickToolContext() : null;

  const breadcrumbItems = [PATH_LABELS["/"]];

  if (quickToolContext?.workshop === "reader") {
    breadcrumbItems.push("Reader's Workshop");
  } else if (quickToolContext?.workshop === "writer") {
    breadcrumbItems.push("Writer's Workshop");
  } else if (location !== "/") {
    breadcrumbItems.push(PATH_LABELS[location] ?? currentSection.label);
  }

  if (quickToolContext?.gradeBandLabel) {
    breadcrumbItems.push(`Grade ${quickToolContext.gradeBandLabel}`);
  }

  if (quickToolContext?.unitLabel) {
    breadcrumbItems.push(quickToolContext.unitLabel);
  }

  if (quickToolContext?.taskLabel) {
    breadcrumbItems.push(quickToolContext.taskLabel);
  }

  return (
    <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-14 py-3 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
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
        <div className="flex gap-2 overflow-x-auto pb-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const isActive =
              href === "/"
                ? location === href
                : location.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-2 text-sm transition-colors",
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
        </div>
      </div>
    </div>
  );
}

export function TopBar() {
  return (
    <header className="h-14 bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-900 text-white flex items-center px-6 gap-4 shadow-sm flex-shrink-0">
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
      <div className="mx-auto max-w-xl flex-1 hidden md:block">
        <div className="bg-white/95 rounded-md text-slate-500 px-4 py-1.5 flex items-center gap-2">
          <Search className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">Search supports, levels, and tools</span>
        </div>
      </div>
      <div className="ml-auto hidden md:flex items-center gap-3 text-xs font-medium text-white/80">
        <span className="rounded-full border border-white/20 px-3 py-1">
          Teacher Resource
        </span>
      </div>
    </header>
  );
}

export function SiteHeader() {
  return (
    <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between flex-shrink-0">
      <div>
        <h1 className="text-2xl font-bold text-blue-950">EALDesk</h1>
        <p className="text-slate-500 text-sm mt-0.5">
          Practical language supports for multilingual learners
        </p>
      </div>
      <div className="hidden md:flex items-center gap-5 text-blue-800 text-sm font-medium">
        <span>Classroom-ready guidance</span>
        <span>WIDA-aligned supports</span>
      </div>
    </div>
  );
}

export function SideBar() {
  const [location] = useLocation();
  return (
    <aside className="w-56 border-r border-slate-200 bg-white/90 hidden lg:flex flex-col flex-shrink-0">
      <nav className="px-3 space-y-0.5 flex-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = location === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-950 border-l-4 border-blue-600 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 border-l-4 border-transparent"
              )}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <TopBar />
      <SiteHeader />
      <StickyNav />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <main className="flex-1 overflow-y-auto px-5 md:px-10 xl:px-14 py-2 pb-16">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
