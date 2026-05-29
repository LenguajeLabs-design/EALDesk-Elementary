import React, { useState } from "react";
import { WIDA_LEVELS, WRITING_STRATEGIES, SPEAKING_STRATEGIES, VOCABULARY_SUPPORT, TRANSLATION_GUIDELINES, ASSESSMENTS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit3, MessageSquare, BookA, Languages, CheckSquare, ChevronDown, ChevronUp } from "lucide-react";

function Section({ title, icon: Icon, items }: { title: string; icon: React.ComponentType<{ size?: number; className?: string }>; items: string[] }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-secondary/30 hover:bg-secondary/60 transition-colors text-left"
      >
        <span className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
          <Icon size={15} className="text-primary" />
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
      </button>
      {open && (
        <ul className="px-5 py-4 space-y-2.5">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const ACCENT_COLORS: Record<number, string> = {
  1: "border-l-4 border-amber-400",
  2: "border-l-4 border-amber-500",
  3: "border-l-4 border-teal-500",
  4: "border-l-4 border-indigo-500",
};

export default function WidaLevels() {
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const level = WIDA_LEVELS.find(l => l.level === activeLevel)!;
  const assessData = ASSESSMENTS[activeLevel as keyof typeof ASSESSMENTS];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">WIDA Levels</h1>
        <p className="text-muted-foreground mt-2">Full elementary literacy support by proficiency level. Select a level to explore workshop strategies.</p>
      </div>

      {/* Level Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {WIDA_LEVELS.map(l => (
          <button
            key={l.level}
            onClick={() => setActiveLevel(l.level)}
            className={`text-left p-4 rounded-xl border-2 transition-all ${
              activeLevel === l.level
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-border bg-card hover:border-primary/40"
            }`}
          >
            <div className="font-bold text-lg text-foreground">WIDA {l.level}</div>
            <div className={`text-xs font-medium mt-1 ${l.badgeColor.includes("amber") ? "text-amber-700" : l.badgeColor.includes("teal") ? "text-teal-700" : "text-indigo-700"}`}>
              {l.name}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{l.program}</div>
          </button>
        ))}
      </div>

      {/* Level Detail */}
      <div className={`rounded-xl bg-card border shadow-sm p-6 ${ACCENT_COLORS[activeLevel]}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-serif font-bold text-foreground">WIDA {level.level}: {level.name}</h2>
              <Badge className={`${level.badgeColor}`}>{level.program}</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{level.periods}</p>
          </div>
        </div>

        <div className="bg-secondary/40 rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-2">What to Expect</p>
          <p className="text-foreground leading-relaxed">{level.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Section
            title="Writing Strategies"
            icon={Edit3}
            items={WRITING_STRATEGIES[activeLevel as keyof typeof WRITING_STRATEGIES]}
          />
          <Section
            title="Speaking Strategies"
            icon={MessageSquare}
            items={SPEAKING_STRATEGIES[activeLevel as keyof typeof SPEAKING_STRATEGIES]}
          />
          <Section
            title="Vocabulary Support"
            icon={BookA}
            items={VOCABULARY_SUPPORT[activeLevel as keyof typeof VOCABULARY_SUPPORT]}
          />
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-secondary/30">
              <span className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                <Languages size={15} className="text-primary" />
                Translation Use
              </span>
            </div>
            <p className="px-5 py-4 text-sm text-foreground/90 leading-relaxed">
              {TRANSLATION_GUIDELINES.useByLevel[activeLevel as keyof typeof TRANSLATION_GUIDELINES.useByLevel]}
            </p>
          </div>
          <div className="md:col-span-2">
          <Section
            title="Assessment Accommodations — General"
            icon={CheckSquare}
            items={assessData.general}
          />
          </div>
          <div>
            <Section
              title="Response Options"
              icon={CheckSquare}
              items={assessData.response}
            />
          </div>
          <div>
            <Section
              title="Content Modifications"
              icon={CheckSquare}
              items={assessData.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
