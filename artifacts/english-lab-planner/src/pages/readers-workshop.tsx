import React from "react";
import { Link } from "wouter";
import { BookMarked, LibraryBig, MessagesSquare, ArrowRight, BarChart3, Globe2, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const readerTasks = [
  {
    title: "Retelling & Summarizing",
    text: "Support students as they retell stories, summarize key events, and explain what matters most.",
    href: "/quick-tools?workshop=reader&task=retelling",
    icon: BookMarked,
    accent: "text-emerald-600",
  },
  {
    title: "Responding to Reading",
    text: "Use sentence frames and prompts for opinions, connections, inferences, and evidence-based talk.",
    href: "/quick-tools?workshop=reader&task=responding",
    icon: LibraryBig,
    accent: "text-orange-500",
  },
  {
    title: "Partner Talk",
    text: "Build accountable talk for turn-and-talk, book clubs, and comprehension conversations.",
    href: "/quick-tools?workshop=reader&task=partner-talk",
    icon: MessagesSquare,
    accent: "text-violet-600",
  },
];

const sharedLinks = [
  { label: "WIDA Levels", href: "/wida-levels", icon: BarChart3 },
  { label: "Translation Tools", href: "/translations", icon: Globe2 },
  { label: "Assessment Supports", href: "/assessments", icon: ClipboardList },
];

export default function ReadersWorkshop() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-emerald-800 text-xs font-bold">
          <BookMarked className="h-3.5 w-3.5" /> Reader's Workshop Path
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 mt-4">
          Plan language supports for reading workshop
        </h1>
        <p className="text-slate-600 mt-3 leading-relaxed">
          Start with the reading task your students are doing, then use the shared WIDA tools underneath to adjust the support for different language levels.
        </p>
      </div>

      <section>
        <div className="grid md:grid-cols-3 gap-4">
          {readerTasks.map(({ title, text, href, icon: Icon, accent }) => (
            <Link key={href} href={href}>
              <Card className="rounded-xl shadow-sm border-slate-200 hover:shadow-md transition-shadow bg-white cursor-pointer h-full">
                <CardContent className="p-5 flex flex-col gap-4 h-full">
                  <Icon className={`h-10 w-10 ${accent}`} strokeWidth={1.8} />
                  <h2 className="text-lg font-bold text-blue-950">{title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{text}</p>
                  <span className="font-semibold text-blue-700 text-sm inline-flex items-center gap-2">
                    Open quick tool <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-blue-100 bg-blue-50/70 p-6">
        <h2 className="text-lg font-bold text-blue-950">Shared WIDA supports for Reader's Workshop</h2>
        <p className="text-sm text-slate-600 mt-2">
          These shared tools stay the same across the site and help you differentiate the reading work for multilingual learners.
        </p>
        <div className="flex flex-wrap gap-3 mt-5">
          {sharedLinks.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href}>
              <Button variant="outline" className="bg-white">
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
