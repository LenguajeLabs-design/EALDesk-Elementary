import React, { useState } from "react";
import { Link } from "wouter";
import { BookMarked, LibraryBig, MessagesSquare, ArrowRight, BarChart3, Globe2, ClipboardList, CheckCircle2, BookOpenText, FileText } from "lucide-react";
import WorkshopYearlyOverview from "@/components/workshop-yearly-overview";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GRADE_BANDS, GRADES_BY_BAND, WORKSHOP_UNITS, type GradeBandId, type GradeId } from "@/lib/data";

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
  { label: "Strategies by Skill", href: "/strategies?workshop=reader&task=responding", icon: FileText },
  { label: "WIDA Levels", href: "/wida-levels", icon: BarChart3 },
  { label: "Translation Tools", href: "/translations", icon: Globe2 },
  { label: "Assessment Supports", href: "/assessments", icon: ClipboardList },
];

export default function ReadersWorkshop() {
  const [gradeBand, setGradeBand] = useState<GradeBandId>("K-2");
  const [grade, setGrade] = useState<GradeId>("K");
  const [unit, setUnit] = useState(WORKSHOP_UNITS.reader.K[0].id);

  const chooseGradeBand = (nextGradeBand: GradeBandId) => {
    setGradeBand(nextGradeBand);
    const nextGrade = GRADES_BY_BAND[nextGradeBand][0];
    setGrade(nextGrade);
    setUnit(WORKSHOP_UNITS.reader[nextGrade][0].id);
  };

  const chooseGrade = (nextGrade: GradeId) => {
    setGrade(nextGrade);
    setUnit(WORKSHOP_UNITS.reader[nextGrade][0].id);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950">
          Plan language supports for reading workshop
        </h1>
        <p className="text-slate-600 leading-relaxed">
          Choose the grade, unit, and task first. The year map and extra references are lower on the page when you need them.
        </p>
      </div>

      <section>
        <div className="mb-5 grid gap-4 xl:grid-cols-[220px_220px_minmax(0,1fr)]">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">1. Choose Grade Band</h2>
            <div className="mt-3 grid grid-cols-2 lg:grid-cols-1 gap-2">
              {GRADE_BANDS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => chooseGradeBand(id)}
                  className={`min-h-14 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    gradeBand === id ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
                  }`}
                >
                  Grades {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">2. Choose Grade</h2>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {GRADES_BY_BAND[gradeBand].map((gradeOption) => (
                <button
                  key={gradeOption}
                  onClick={() => chooseGrade(gradeOption)}
                  className={`min-h-14 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    grade === gradeOption ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
                  }`}
                >
                  Grade {gradeOption}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">3. Choose Unit</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
              {WORKSHOP_UNITS.reader[grade].map(({ id, title }) => (
                <button
                  key={id}
                  onClick={() => setUnit(id)}
                  className={`flex min-h-28 items-start rounded-xl border px-4 py-4 text-left text-base font-semibold leading-snug transition-colors whitespace-normal break-words ${
                    unit === id ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          4. Choose Task
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {readerTasks.map(({ title, text, href, icon: Icon, accent }) => (
            <Link
              key={href}
              href={`${href}&gradeBand=${encodeURIComponent(gradeBand)}&grade=${encodeURIComponent(grade)}&unit=${encodeURIComponent(unit)}`}
            >
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

      <section className="space-y-4">
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold text-blue-950">Year-at-a-glance reading units</h2>
          <p className="mt-1 text-sm text-slate-600">
            Use this map only when you want the bigger year view. Your planning choices stay above for quicker access.
          </p>
        </div>
        <WorkshopYearlyOverview
          workshop="reader"
          grade={grade}
          gradeBand={gradeBand}
          selectedUnit={unit}
          onSelectUnit={setUnit}
        />
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

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
            <BookOpenText className="h-6 w-6 text-emerald-700" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-blue-950">Need reading references and planning tools?</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Use the reader workshop path with the strategy bank, WIDA tools, translation guidance, and assessment supports
              when you want help planning comprehension talk, retelling, response to reading, and partner discussion.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/strategies?workshop=reader&task=responding">
                <Button variant="outline" className="bg-white">
                  <FileText className="mr-2 h-4 w-4" />
                  Open Reading Strategies
                </Button>
              </Link>
              <Link href="/quick-tools?workshop=reader&task=retelling">
                <Button variant="outline" className="bg-white">
                  <BookMarked className="mr-2 h-4 w-4" />
                  Open Reading Quick Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
