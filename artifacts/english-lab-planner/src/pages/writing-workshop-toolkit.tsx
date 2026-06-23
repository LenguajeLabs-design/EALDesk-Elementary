import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  YEARLY_OVERVIEWS,
  QUICK_TOOLS,
  WIDA_LEVELS,
  WRITING_STRATEGIES,
  SPEAKING_STRATEGIES,
  VOCABULARY_SUPPORT,
  type GradeId,
} from "@/lib/data";
import {
  BookOpenText,
  CheckCircle2,
  CircleHelp,
  FolderKanban,
  Languages,
  LibraryBig,
  FileText,
  MessageSquareQuote,
  NotebookPen,
  Route,
  Sparkles,
  Target,
} from "lucide-react";

const TOOLKIT_GRADES: GradeId[] = ["2", "3", "4", "5"];

export default function WritingWorkshopToolkit() {
  const [grade, setGrade] = useState<GradeId>("2");
  const [unitId, setUnitId] = useState(YEARLY_OVERVIEWS.writer["2"][0].id);
  const [selectedLevel, setSelectedLevel] = useState(2);

  const units = YEARLY_OVERVIEWS.writer[grade];
  const selectedUnit = units.find((unit) => unit.id === unitId) ?? units[0];
  const writingTask = QUICK_TOOLS.find((tool) => tool.id === "writing") ?? QUICK_TOOLS[0];
  const levelData = WIDA_LEVELS.find((level) => level.level === selectedLevel) ?? WIDA_LEVELS[1];
  const quickToolLevels = WIDA_LEVELS.filter((level) => level.level <= 4);
  const unitSentenceFrames =
    selectedUnit.unitSentenceFrames?.[selectedLevel as 1 | 2 | 3 | 4] ??
    writingTask.frames[selectedLevel as keyof typeof writingTask.frames];
  const unitWritingSupports =
    selectedUnit.unitWritingSupports?.[selectedLevel as 1 | 2 | 3 | 4] ??
    WRITING_STRATEGIES[selectedLevel as keyof typeof WRITING_STRATEGIES];

  const chooseGrade = (nextGrade: GradeId) => {
    setGrade(nextGrade);
    setUnitId(YEARLY_OVERVIEWS.writer[nextGrade][0].id);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50/60 to-blue-50 p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-bold text-sky-800">
            <FolderKanban className="h-3.5 w-3.5" />
            Scaffolded Writing Toolkit
          </div>
          <Badge variant="outline" className="rounded-full border-blue-200 bg-white text-blue-900">
            Grade {grade}
          </Badge>
          <Badge variant="outline" className="rounded-full border-blue-200 bg-white text-blue-900">
            {selectedUnit.window}
          </Badge>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
          Grade {grade} Scaffolded Writing Units
        </h1>
        <p className="mt-3 max-w-5xl text-base leading-relaxed text-slate-600 md:text-lg">
          Use this page to move across the Grade {grade} writing year and see how each unit can be scaffolded for different WIDA levels.
          The unit goals stay the same, but the language load, rehearsal, vocabulary, and independence shift by proficiency level.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {TOOLKIT_GRADES.map((gradeOption) => (
            <Button
              key={gradeOption}
              type="button"
              variant={grade === gradeOption ? "default" : "outline"}
              className="rounded-2xl px-6"
              onClick={() => chooseGrade(gradeOption)}
            >
              Grade {gradeOption} Units
            </Button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_420px]">
        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Choose Grade {grade} Unit
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {units.map((unit, index) => {
                const isSelected = unit.id === selectedUnit.id;

                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => setUnitId(unit.id)}
                    className={`rounded-3xl border p-6 text-left transition-colors ${
                      isSelected
                        ? "border-sky-400 bg-sky-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-sky-200"
                    }`}
                  >
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                      Unit {index + 1}
                    </div>
                    <h2 className="mt-4 text-2xl font-bold leading-tight text-blue-950">
                      {unit.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {unit.focus}
                    </p>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Unit Snapshot
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950">
              {selectedUnit.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {selectedUnit.focus}
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                <BookOpenText className="h-3.5 w-3.5 text-sky-600" />
                What students are trying to do
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Keep the same writing goal for the unit, but scale the oral rehearsal, sentence support, vocabulary load,
                and independence expectations for multilingual learners across WIDA levels.
              </p>
            </div>

            {selectedUnit.languageDemands?.length ? (
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  <Languages className="h-3.5 w-3.5 text-sky-600" />
                  Language Demands
                </div>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                  {selectedUnit.languageDemands.map((demand) => (
                    <li key={demand} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      <span>{demand}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-600" />
                Standards
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedUnit.standards.length > 0 ? (
                  selectedUnit.standards.map((standard) => (
                    <Badge key={standard} className="rounded-full bg-white text-slate-700 shadow-none">
                      {standard}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-slate-600">{selectedUnit.standardsPlaceholder}</p>
                )}
              </div>
            </div>

            {selectedUnit.scaffoldNotes?.length ? (
              <div className="mt-4 rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                  Teacher Scaffold Notes
                </div>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                  {selectedUnit.scaffoldNotes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selectedUnit.planningNotes?.length ? (
              <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  <Target className="h-3.5 w-3.5 text-indigo-600" />
                  Teacher Planning Notes
                </div>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                  {selectedUnit.planningNotes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selectedUnit.mentorTexts?.length ? (
              <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50/80 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  <LibraryBig className="h-3.5 w-3.5 text-amber-600" />
                  Suggested Mentor Texts
                </div>
                <div className="mt-3 space-y-3">
                  {selectedUnit.mentorTexts.map((mentor) => (
                    <div key={`${mentor.title}-${mentor.author}`} className="rounded-2xl border border-white bg-white/80 p-4">
                      <div className="text-sm font-bold text-blue-950">{mentor.title}</div>
                      <div className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                        {mentor.author}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {mentor.teachingNote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5 md:px-8">
          <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            Scaffold By WIDA Level
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950">
            Language support ladder for {selectedUnit.title}
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
            Select a WIDA level to preview sentence frames, writing support, oral rehearsal, and vocabulary moves you can use during this unit.
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {quickToolLevels.map((level) => (
              <button
                key={level.level}
                type="button"
                onClick={() => setSelectedLevel(level.level)}
                className={`rounded-2xl border p-4 text-left transition-colors ${
                  selectedLevel === level.level
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-blue-200"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-900">WIDA {level.level}</span>
                  {selectedLevel === level.level ? (
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  ) : null}
                </div>
                <p className="mt-1 text-xs font-medium text-slate-600">{level.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{level.program}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
            <Card className="rounded-3xl border-slate-200 bg-slate-50/60 shadow-none">
              <CardContent className="p-6">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Current WIDA Focus
                </div>
                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                  WIDA {selectedLevel}: {levelData.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {levelData.description}
                </p>

                <div className="mt-5 rounded-2xl border border-white bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    <MessageSquareQuote className="h-3.5 w-3.5 text-sky-600" />
                    Sentence Frames
                  </div>
                  <div className="mt-3 grid gap-2">
                    {unitSentenceFrames.map((frame) => (
                      <div key={frame} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-900">
                        {frame}
                      </div>
                    ))}
                  </div>
                </div>

                {selectedUnit.widaDifferentiation?.[selectedLevel as 1 | 2 | 3 | 4]?.length ? (
                  <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      <Route className="h-3.5 w-3.5 text-sky-600" />
                      Unit-Specific WIDA Moves
                    </div>
                    <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                      {selectedUnit.widaDifferentiation[selectedLevel as 1 | 2 | 3 | 4]?.map((move) => (
                        <li key={move} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          <span>{move}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {selectedUnit.modelSamples?.[selectedLevel as 1 | 2 | 3 | 4] ? (
                  <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      <FileText className="h-3.5 w-3.5 text-emerald-600" />
                      Model Sample
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      Teacher-created exemplar for planning. This is not real student work.
                    </p>
                    <div className="mt-3 rounded-2xl border border-white bg-white p-4">
                      <p className="text-sm leading-relaxed text-slate-800">
                        {selectedUnit.modelSamples[selectedLevel as 1 | 2 | 3 | 4]?.sample}
                      </p>
                    </div>
                    <div className="mt-3 rounded-2xl border border-white bg-white p-4">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                        What This Shows
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {selectedUnit.modelSamples[selectedLevel as 1 | 2 | 3 | 4]?.whatThisShows}
                      </p>
                    </div>
                  </div>
                ) : null}

                {selectedUnit.conferencePrompts?.[selectedLevel as 1 | 2 | 3 | 4]?.length ? (
                  <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/80 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      <CircleHelp className="h-3.5 w-3.5 text-violet-600" />
                      Conference Prompts
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      Questions and prompts a teacher can use during a quick writing conference.
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                      {selectedUnit.conferencePrompts[selectedLevel as 1 | 2 | 3 | 4]?.map((prompt) => (
                        <li key={prompt} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                          <span>{prompt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </CardContent>
            </Card>

            <Tabs defaultValue="writing" className="w-full">
              <TabsList className="flex h-auto flex-wrap gap-2 rounded-2xl bg-slate-100 p-2">
                <TabsTrigger value="writing" className="rounded-xl px-4 py-2 text-sm">
                  Writing
                </TabsTrigger>
                <TabsTrigger value="speaking" className="rounded-xl px-4 py-2 text-sm">
                  Speaking
                </TabsTrigger>
                <TabsTrigger value="vocabulary" className="rounded-xl px-4 py-2 text-sm">
                  Vocabulary
                </TabsTrigger>
              </TabsList>

              <div className="pt-4">
                <TabsContent value="writing" className="m-0">
                  <Card className="rounded-3xl border-slate-200 shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                        <NotebookPen className="h-3.5 w-3.5 text-sky-600" />
                        Writing Supports
                      </div>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                        {unitWritingSupports.map((strategy) => (
                          <li key={strategy} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                            <span>{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="speaking" className="m-0">
                  <Card className="rounded-3xl border-slate-200 shadow-none">
                    <CardContent className="p-6">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                        Speaking Supports
                      </div>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                        {SPEAKING_STRATEGIES[selectedLevel as keyof typeof SPEAKING_STRATEGIES].map((strategy) => (
                          <li key={strategy} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                            <span>{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="vocabulary" className="m-0">
                  <Card className="rounded-3xl border-slate-200 shadow-none">
                    <CardContent className="p-6">
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                        Vocabulary Supports
                      </div>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                        {VOCABULARY_SUPPORT[selectedLevel as keyof typeof VOCABULARY_SUPPORT].map((strategy) => (
                          <li key={strategy} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                            <span>{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
