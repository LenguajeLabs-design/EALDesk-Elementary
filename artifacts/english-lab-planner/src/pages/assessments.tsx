import React, { useState } from "react";
import { WIDA_LEVELS, ASSESSMENTS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const SECTION_LABELS = [
  { key: "general", label: "General Accommodations" },
  { key: "response", label: "Response Options" },
  { key: "content", label: "Content Modifications" },
] as const;

const HEADER_COLORS: Record<number, string> = {
  1: "bg-amber-50 border-amber-200",
  2: "bg-amber-50 border-amber-200",
  3: "bg-teal-50 border-teal-200",
  4: "bg-indigo-50 border-indigo-200",
};

export default function Assessments() {
  const [activeSection, setActiveSection] = useState<"general" | "response" | "content">("general");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Assessment Accommodations</h1>
        <p className="text-muted-foreground mt-2">
          Literacy assessment supports for reading response, conferring, and workshop writing across all WIDA levels.
        </p>
      </div>

      {/* Section Switcher */}
      <div className="flex flex-wrap gap-2">
        {SECTION_LABELS.map(s => (
          <button
            key={s.key}
            onClick={() => setActiveSection(s.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
              activeSection === s.key
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-card text-foreground border-border hover:border-primary/50"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* All 4 WIDA Levels Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {WIDA_LEVELS.map(level => {
          const data = ASSESSMENTS[level.level as keyof typeof ASSESSMENTS];
          const items = data[activeSection];
          return (
            <Card key={level.level} className={`shadow-sm border-t-4 ${HEADER_COLORS[level.level].split(' ')[1]}`}>
              <CardHeader className={`pb-2 rounded-t-xl ${HEADER_COLORS[level.level]}`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-bold">WIDA {level.level}</CardTitle>
                  <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{level.program}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  {SECTION_LABELS.find(s => s.key === activeSection)?.label}
                </p>
                <ul className="space-y-2.5">
                  {items.map((item, i) => (
                    <li key={i} className={`flex gap-3 text-sm leading-relaxed ${item.startsWith("(Note:") ? "text-muted-foreground italic" : "text-foreground/90"}`}>
                      {item.startsWith("(Note:") ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Assessment Note Banner */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm font-semibold text-amber-900 mb-1">Assessment Planning Reminder</p>
        <p className="text-sm text-amber-800 leading-relaxed">
          Keep the literacy goal intact while adjusting the language demand. For many students, a conference, oral retell, labeled response, or scaffolded written task can show real understanding more accurately than an unsupported written assessment.
        </p>
      </div>
    </div>
  );
}
