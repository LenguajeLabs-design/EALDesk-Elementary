import React from "react";
import { BookOpenText, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { YEARLY_OVERVIEWS, type GradeBandId, type WorkshopId } from "@/lib/data";

type WorkshopYearlyOverviewProps = {
  gradeBand: GradeBandId;
  onSelectUnit: (unit: string) => void;
  selectedUnit: string;
  workshop: WorkshopId;
};

const workshopCopy: Record<WorkshopId, { badge: string; title: string; text: string }> = {
  reader: {
    badge: "Reader's Workshop Overview",
    title: "Year-at-a-glance reading units",
    text: "Use this scaffold to map the reading year by unit, then layer in the priority standards once you have the official overview.",
  },
  writer: {
    badge: "Writer's Workshop Overview",
    title: "Year-at-a-glance writing units",
    text: "Use this scaffold to organize the writing year by unit, then drop in the official standards and goals for each stretch of instruction.",
  },
};

export default function WorkshopYearlyOverview({
  gradeBand,
  onSelectUnit,
  selectedUnit,
  workshop,
}: WorkshopYearlyOverviewProps) {
  const units = YEARLY_OVERVIEWS[workshop][gradeBand];
  const copy = workshopCopy[workshop];

  return (
    <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/70 p-6 shadow-sm">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-bold text-blue-800">
          <BookOpenText className="h-3.5 w-3.5" />
          {copy.badge}
        </div>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-blue-950">{copy.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy.text}</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
          <Sparkles className="h-3.5 w-3.5" />
          Grades {gradeBand}
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        {units.map((unit, index) => {
          const isSelected = selectedUnit === unit.id;

          return (
            <Card
              key={unit.id}
              className={`h-full rounded-2xl border transition-colors ${
                isSelected ? "border-blue-300 bg-blue-50/70" : "border-slate-200 bg-white"
              }`}
            >
              <CardContent className="flex h-full flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Unit {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-blue-950">{unit.title}</h3>
                  </div>
                  <Badge variant="outline" className="rounded-full border-slate-200 bg-slate-50 text-slate-700">
                    {unit.window}
                  </Badge>
                </div>

                <p className="text-sm leading-relaxed text-slate-600">{unit.focus}</p>

                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    Standards
                  </div>
                  {unit.standards.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {unit.standards.map((standard) => (
                        <Badge key={standard} className="rounded-full bg-white text-slate-700 shadow-none">
                          {standard}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed text-slate-500">{unit.standardsPlaceholder}</p>
                  )}
                </div>

                <Button
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  className="mt-auto"
                  onClick={() => onSelectUnit(unit.id)}
                >
                  {isSelected ? "Current planning unit" : "Use this unit in planner"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
