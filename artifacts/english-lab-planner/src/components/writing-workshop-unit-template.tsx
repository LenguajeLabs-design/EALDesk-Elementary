import React, { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  FolderKanban,
  BookOpenText,
  MessageSquareQuote,
  CheckCircle2,
  ArrowRight,
  FileSearch,
  Lightbulb,
  ClipboardCheck,
  Route,
  FileText,
  CircleHelp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type WritingWorkshopUnitScaffold = {
  id: string;
  buttonLabel: string;
  title: string;
  blurb: string;
  planningNote: string;
  languageDemands: string[];
  levelScaffolds: Array<{
    level: string;
    title: string;
    use: string;
    writing: string[];
    speaking: string[];
    vocabulary: string[];
    frames: string[];
    model?: string[];
    sample?: {
      text: string;
      notice: string;
    };
    prompts?: string[];
  }>;
  conferencePrompts: string[];
  quickAssessment: string[];
  relatedDocuments: Array<{
    title: string;
    purpose: string;
    file: string;
  }>;
};

export type WritingWorkshopTemplateTab = {
  label: string;
  href?: string;
  active?: boolean;
};

type WritingWorkshopUnitTemplateProps = {
  badgeLabel: string;
  pageTitle: string;
  pageDescription: string;
  gradeTabs: WritingWorkshopTemplateTab[];
  units: WritingWorkshopUnitScaffold[];
  unitChooserLabel?: string;
  quickToolsHref?: (unit: WritingWorkshopUnitScaffold) => string;
};

export function WritingWorkshopUnitTemplate({
  badgeLabel,
  pageTitle,
  pageDescription,
  gradeTabs,
  units,
  unitChooserLabel,
  quickToolsHref,
}: WritingWorkshopUnitTemplateProps) {
  const [selectedUnitId, setSelectedUnitId] = useState(units[0]?.id ?? "");
  const selectedUnit = useMemo(
    () => units.find((unit) => unit.id === selectedUnitId) ?? units[0],
    [selectedUnitId, units],
  );

  if (!selectedUnit) {
    return null;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sky-800 text-xs font-bold">
          <FolderKanban className="h-3.5 w-3.5" /> {badgeLabel}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 mt-4">
          {pageTitle}
        </h1>
        <p className="text-slate-600 mt-3 leading-relaxed">{pageDescription}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {gradeTabs.map((tab) => {
            const button = (
              <Button
                variant={tab.active ? "default" : "outline"}
                className={tab.active ? "bg-blue-700 hover:bg-blue-800" : "bg-white"}
              >
                {tab.label}
              </Button>
            );

            return tab.href ? (
              <Link key={`${tab.label}-${tab.href}`} href={tab.href}>
                {button}
              </Link>
            ) : (
              <React.Fragment key={tab.label}>{button}</React.Fragment>
            );
          })}
        </div>
      </div>

      {units.length > 1 ? (
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-bold uppercase tracking-wider text-slate-500">
            {unitChooserLabel ?? "Choose Unit"}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {units.map((unit, index) => {
              const isSelected = unit.id === selectedUnit.id;

              return (
                <button
                  key={unit.id}
                  type="button"
                  onClick={() => setSelectedUnitId(unit.id)}
                  className={`rounded-xl border px-4 py-4 text-left transition-colors ${
                    isSelected
                      ? "border-sky-500 bg-sky-50 text-sky-900"
                      : "border-slate-200 bg-white text-slate-700 hover:border-sky-300"
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Unit {index + 1}
                  </div>
                  <div className="mt-2 text-base font-semibold leading-snug">
                    {unit.buttonLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className="grid xl:grid-cols-[1.15fr_0.85fr] gap-5">
        <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpenText className="h-5 w-5 text-sky-700" />
              <h2 className="text-lg font-bold text-blue-950">{selectedUnit.title}</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{selectedUnit.blurb}</p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Language demands in this unit
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {selectedUnit.languageDemands.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-blue-100 bg-blue-50/70 shadow-sm">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-blue-700" />
              <h2 className="text-lg font-bold text-blue-950">Planning note</h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{selectedUnit.planningNote}</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <MessageSquareQuote className="h-4 w-4" />
          SUPPORTS BY WIDA LEVEL
        </div>
        <div className="grid gap-5">
          {selectedUnit.levelScaffolds.map((group) => (
            <Card key={group.level} className="rounded-xl border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div>
                  <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-800">
                    {group.level}
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-blue-950">{group.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-3xl">{group.use}</p>
                </div>

                <div className="mt-5 grid xl:grid-cols-4 gap-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Writing</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {group.writing.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Teacher talk</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {group.speaking.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Vocabulary support</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {group.vocabulary.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Sentence frames</div>
                    <div className="mt-3 space-y-2">
                      {group.frames.map((frame) => (
                        <div key={frame} className="rounded-lg border border-white bg-white px-3 py-2 text-sm font-medium text-slate-800">
                          {frame}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 xl:grid-cols-3">
                  <div className="rounded-xl border border-sky-100 bg-sky-50/80 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      <Route className="h-3.5 w-3.5 text-sky-600" />
                      What To Model
                    </div>
                    <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                      {(group.model ?? group.writing.slice(0, 2)).map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/80 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      <FileText className="h-3.5 w-3.5 text-emerald-600" />
                      What It Can Sound Like
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      Teacher-created exemplar for planning. This is not real student work.
                    </p>
                    <div className="mt-3 rounded-2xl border border-white bg-white p-4">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-slate-800">
                        {group.sample?.text ?? group.frames.slice(0, 2).join(" ")}
                      </p>
                    </div>
                    <div className="mt-3 rounded-2xl border border-white bg-white p-4">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                        What To Notice
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {group.sample?.notice ?? group.use}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-violet-100 bg-violet-50/80 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      <CircleHelp className="h-3.5 w-3.5 text-violet-600" />
                      What To Ask
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      Questions and prompts a teacher can use during a quick writing conference.
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                      {(group.prompts ?? selectedUnit.conferencePrompts.slice(0, 3)).map((prompt) => (
                        <li key={prompt} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                          <span>{prompt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid xl:grid-cols-2 gap-5">
        <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <MessageSquareQuote className="h-5 w-5 text-sky-700" />
              <h2 className="text-lg font-bold text-blue-950">Conference prompts</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {selectedUnit.conferencePrompts.map((prompt) => (
                <li key={prompt} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{prompt}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-5 w-5 text-sky-700" />
              <h2 className="text-lg font-bold text-blue-950">Quick assessment ideas</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {selectedUnit.quickAssessment.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm mb-4">
          <FileSearch className="h-4 w-4" />
          RELATED WORKSHOP DOCUMENTS
        </div>
        <div className="grid xl:grid-cols-3 gap-4">
          {selectedUnit.relatedDocuments.map((doc) => (
            <Card key={doc.title} className="rounded-xl border-slate-200 bg-white shadow-sm">
              <CardContent className="p-5">
                <h3 className="text-base font-bold text-blue-950">{doc.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{doc.purpose}</p>
                <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 break-all">
                  {doc.file}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link href="/writers-workshop">
          <Button variant="outline" className="bg-white">Back to Writer&apos;s Workshop</Button>
        </Link>
        <Link href={quickToolsHref ? quickToolsHref(selectedUnit) : "/quick-tools?workshop=writer&task=writing"}>
          <Button className="bg-blue-700 hover:bg-blue-800">
            Open writing supports
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
