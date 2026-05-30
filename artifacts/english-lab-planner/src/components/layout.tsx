import React from "react";
import { Link, useLocation } from "wouter";
import {
  Home, Zap, BookOpen, BarChart3, ClipboardList, Globe2, Search, BookMarked, PencilLine,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 h-14 bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-900 text-white flex items-center px-6 gap-4 shadow-sm flex-shrink-0">
      <Link href="/" className="relative h-9 w-9 rounded-xl bg-white/12 border border-white/15 grid place-items-center shadow-inner" aria-label="Lenguaje Labs home">
        <span className="text-sm font-black tracking-tight">LL</span>
      </Link>
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
      <div className="ml-auto hidden lg:flex items-center gap-1 text-xs font-medium text-white/85">
        {NAV_ITEMS.slice(1, 6).map(({ href, label }) => (
          <Link key={href} href={href} className="rounded-full px-3 py-1.5 hover:bg-white/12 transition-colors">
            {label.replace("'s Workshop", "")}
          </Link>
        ))}
      </div>
    </header>
  );
}

export function SiteHeader() {
  return (
    <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-5">
        <div className="h-14 w-14 rounded-md bg-blue-950 text-white flex items-center justify-center text-2xl font-bold shadow-sm lg:hidden">ED</div>
        <div>
          <h1 className="text-2xl font-bold text-blue-950">EALDesk</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Practical language supports for multilingual learners
          </p>
        </div>
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
      <div className="p-6">
        <div className="h-14 w-14 rounded-md bg-blue-950 text-white flex items-center justify-center text-2xl font-bold shadow-sm">ED</div>
      </div>
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
