import React, { useState } from "react";
import { Link } from "wouter";
import { PencilLine, MessagesSquare, FileText, ArrowRight, BarChart3, Globe2, ClipboardList, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const writerTasks = [
  {
    title: "Workshop Writing",
    text: "Support students while planning, drafting, elaborating, and revising opinion, narrative, and informational pieces.",
    href: "/quick-tools?workshop=writer&task=writing",
    icon: PencilLine,
    accent: "text-sky-600",
  },
  {
    title: "Partner Talk",
    text: "Use shared discussion routines for oral rehearsal, feedback, and writing conferences.",
    href: "/quick-tools?workshop=writer&task=partner-talk",
    icon: MessagesSquare,
    accent: "text-violet-600",
  },
  {
    title: "Full Strategy Reference",
    text: "Browse writing, vocabulary, translation, and assessment scaffolds across WIDA levels.",
    href: "/strategies",
    icon: FileText,
    accent: "text-emerald-600",
  },
];

const gradeBands = ["K-2", "3-5"];

const writerUnits = {
  "K-2": ["Narrative Pictures", "Opinion Writing", "Information Books"],
  "3-5": ["Personal Narrative", "Opinion & Evidence", "Informational Reports"],
};

const sharedLinks = [
  { label: "WIDA Levels", href: "/wida-levels", icon: BarChart3 },
  { label: "Translation Tools", href: "/translations", icon: Globe2 },
  { label: "Assessment Supports", href: "/assessments", icon: ClipboardList },
];

export default function WritersWorkshop() {
  const [gradeBand, setGradeBand] = useState<keyof typeof writerUnits>("K-2");
  const [unit, setUnit] = useState(writerUnits["K-2"][0]);

  const chooseGradeBand = (nextGradeBand: keyof typeof writerUnits) => {
    setGradeBand(nextGradeBand);
    setUnit(writerUnits[nextGradeBand][0]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sky-800 text-xs font-bold">
          <PencilLine className="h-3.5 w-3.5" /> Writer's Workshop Path
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 mt-4">
          Plan language supports for writer's workshop
        </h1>
        <p className="text-slate-600 mt-3 leading-relaxed">
          Start with the writing task students are doing, then use the shared WIDA tools underneath to adjust support for different language levels.
        </p>
      </div>

      <section>
        <div className="mb-5 grid gap-4 lg:grid-cols-[220px_1fr]">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">1. Choose Grade Band</h2>
            <div className="mt-3 grid grid-cols-2 lg:grid-cols-1 gap-2">
              {gradeBands.map(band => (
                <button
                  key={band}
                  onClick={() => chooseGradeBand(band as keyof typeof writerUnits)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    gradeBand === band ? "border-sky-500 bg-sky-50 text-sky-900" : "border-slate-200 bg-white text-slate-700 hover:border-sky-300"
                  }`}
                >
                  Grades {band}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">2. Choose Unit</h2>
            <div className="mt-3 grid md:grid-cols-3 gap-2">
              {writerUnits[gradeBand].map(option => (
                <button
                  key={option}
                  onClick={() => setUnit(option)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    unit === option ? "border-sky-500 bg-sky-50 text-sky-900" : "border-slate-200 bg-white text-slate-700 hover:border-sky-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-sky-600" />
          3. Choose Task
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {writerTasks.map(({ title, text, href, icon: Icon, accent }) => (
            <Link key={href} href={`${href}${href.includes("?") ? "&" : "?"}grade=${encodeURIComponent(gradeBand)}&unit=${encodeURIComponent(unit)}`}>
              <Card className="rounded-xl shadow-sm border-slate-200 hover:shadow-md transition-shadow bg-white cursor-pointer h-full">
                <CardContent className="p-5 flex flex-col gap-4 h-full">
                  <Icon className={`h-10 w-10 ${accent}`} strokeWidth={1.8} />
                  <h2 className="text-lg font-bold text-blue-950">{title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{text}</p>
                  <span className="font-semibold text-blue-700 text-sm inline-flex items-center gap-2">
                    Open support <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-blue-100 bg-blue-50/70 p-6">
        <h2 className="text-lg font-bold text-blue-950">Shared WIDA supports for Writer's Workshop</h2>
        <p className="text-sm text-slate-600 mt-2">
          These shared supports help you differentiate the writing work without losing the same WIDA-aligned structure across the site.
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
