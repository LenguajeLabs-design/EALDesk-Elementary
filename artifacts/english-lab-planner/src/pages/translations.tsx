import React, { useState } from "react";
import { TRANSLATION_GUIDELINES, WIDA_LEVELS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, CheckSquare, ArrowDown } from "lucide-react";

export default function Translations() {
  const [checklist, setChecklist] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => setChecklist(c => ({ ...c, [i]: !c[i] }));

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Translations &amp; Tools</h1>
        <p className="text-muted-foreground mt-2">
          Guidelines for appropriate use of translation tools in elementary literacy instruction, by context, WIDA level, and digital translator use.
        </p>
      </div>

      {/* Translation Use by WIDA Level */}
      <section>
        <h2 className="text-lg font-serif font-bold text-foreground mb-4">Translation Use by WIDA Level</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {WIDA_LEVELS.map(level => (
            <Card key={level.level} className="shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">WIDA {level.level}</CardTitle>
                  <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{level.program}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {TRANSLATION_GUIDELINES.useByLevel[level.level as keyof typeof TRANSLATION_GUIDELINES.useByLevel]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* When Appropriate / Not Appropriate */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 size={18} className="text-teal-600" />
            <h2 className="text-lg font-serif font-bold text-foreground">When Translations ARE Appropriate</h2>
          </div>
          <div className="space-y-3">
            {TRANSLATION_GUIDELINES.appropriate.map((item, i) => (
              <div key={i} className="rounded-lg border border-teal-100 bg-teal-50 p-4">
                <p className="text-sm font-bold text-teal-900 mb-1">{item.title}</p>
                <p className="text-sm text-teal-800 leading-relaxed">{item.desc}</p>
                {item.example && (
                  <p className="text-sm text-teal-700 mt-2 italic border-l-2 border-teal-400 pl-3">{item.example}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <XCircle size={18} className="text-red-500" />
            <h2 className="text-lg font-serif font-bold text-foreground">When Translations Are NOT Appropriate</h2>
          </div>
          <div className="space-y-3">
            {TRANSLATION_GUIDELINES.notAppropriate.map((item, i) => (
              <div key={i} className="rounded-lg border border-red-100 bg-red-50 p-4">
                <p className="text-sm font-bold text-red-900 mb-1">{item.title}</p>
                <p className="text-sm text-red-800 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Scaffolding Hierarchy */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <ArrowDown size={18} className="text-primary" />
          <h2 className="text-lg font-serif font-bold text-foreground">Scaffolding Hierarchy — Use BEFORE Translating</h2>
        </div>
        <div className="flex flex-col gap-2">
          {TRANSLATION_GUIDELINES.scaffoldingHierarchy.map((item, i) => (
            <div key={i} className={`flex items-center gap-4 rounded-lg border p-3.5 ${i === TRANSLATION_GUIDELINES.scaffoldingHierarchy.length - 1 ? "bg-amber-50 border-amber-200" : "bg-card border-border"}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === TRANSLATION_GUIDELINES.scaffoldingHierarchy.length - 1 ? "bg-amber-400 text-amber-900" : "bg-primary/10 text-primary"}`}>
                {i + 1}
              </div>
              <span className={`text-sm font-medium ${i === TRANSLATION_GUIDELINES.scaffoldingHierarchy.length - 1 ? "text-amber-900" : "text-foreground"}`}>{item}</span>
              {i === TRANSLATION_GUIDELINES.scaffoldingHierarchy.length - 1 && (
                <Badge className="ml-auto bg-amber-100 text-amber-800 border-amber-200 text-xs">Last Resort</Badge>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Digital Translator Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <h2 className="text-lg font-serif font-bold text-foreground mb-4">Digital Translator — Approved Uses</h2>
          <Card className="shadow-sm">
            <CardContent className="pt-5">
              <ul className="space-y-2.5">
                {TRANSLATION_GUIDELINES.digitalTranslator.approved.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
                    <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-lg font-serif font-bold text-foreground mt-6 mb-4">Not Approved</h2>
          <Card className="shadow-sm">
            <CardContent className="pt-5">
              <ul className="space-y-2.5">
                {TRANSLATION_GUIDELINES.digitalTranslator.notApproved.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
                    <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-lg font-serif font-bold text-foreground mb-4">Best Practices</h2>
          <div className="space-y-3">
            {TRANSLATION_GUIDELINES.digitalTranslator.bestPractices.map((bp, i) => (
              <div key={i} className="rounded-lg border bg-secondary/30 p-4">
                <p className="text-sm font-bold text-foreground mb-1">{i + 1}. {bp.title}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{bp.desc}</p>
              </div>
            ))}
          </div>

          {/* Teacher Monitoring Checklist */}
          <h2 className="text-lg font-serif font-bold text-foreground mt-6 mb-4">
            <CheckSquare size={18} className="inline mr-2 text-primary" />
            Teacher Monitoring Checklist
          </h2>
          <Card className="shadow-sm">
            <CardContent className="pt-5">
              <p className="text-xs text-muted-foreground mb-4">Track whether a student is using translations appropriately. Tap to check off items.</p>
              <ul className="space-y-3">
                {TRANSLATION_GUIDELINES.monitoringChecklist.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => toggle(i)}
                    className={`flex items-start gap-3 text-sm leading-relaxed cursor-pointer rounded-md p-2 -mx-2 transition-colors ${checklist[i] ? "bg-primary/5" : "hover:bg-secondary/50"}`}
                  >
                    <div className={`w-4 h-4 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${checklist[i] ? "bg-primary border-primary" : "border-muted-foreground"}`}>
                      {checklist[i] && <CheckCircle2 size={12} className="text-primary-foreground" />}
                    </div>
                    <span className={checklist[i] ? "line-through text-muted-foreground" : "text-foreground/90"}>{item}</span>
                  </li>
                ))}
              </ul>
              {Object.values(checklist).filter(Boolean).length > 0 && (
                <div className="mt-4 pt-3 border-t text-xs text-muted-foreground">
                  {Object.values(checklist).filter(Boolean).length} of {TRANSLATION_GUIDELINES.monitoringChecklist.length} checked
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
        <p className="text-foreground font-medium text-sm italic">
          "Translations are a tool, not a solution. The goal is English language development alongside content mastery."
        </p>
      </div>
    </div>
  );
}
