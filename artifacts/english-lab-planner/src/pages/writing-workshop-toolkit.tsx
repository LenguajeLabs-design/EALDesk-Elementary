import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
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
import { TEACHER_GLOSSARY } from "@/lib/content/writing-workshop-toolkit";
import { toast } from "@/hooks/use-toast";
import {
  BookOpenText,
  CheckCircle2,
  CircleHelp,
  Copy,
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

function SupportHeading({
  show,
  english,
  chinese,
  className,
}: {
  show: boolean;
  english: string;
  chinese: string;
  className: string;
}) {
  return (
    <div className={className}>
      <div>{english}</div>
      {show ? (
        <div className="mt-1 text-[11px] font-medium normal-case tracking-normal text-slate-500">
          {chinese}
        </div>
      ) : null}
    </div>
  );
}

export default function WritingWorkshopToolkit() {
  const [grade, setGrade] = useState<GradeId>("2");
  const [unitId, setUnitId] = useState(YEARLY_OVERVIEWS.writer["2"][0].id);
  const [selectedLevel, setSelectedLevel] = useState(2);
  const [copiedItem, setCopiedItem] = useState<null | "prompt" | "template" | "brief">(null);
  const [showChineseSupport, setShowChineseSupport] = useState(false);

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
  const unitConferencePrompts = selectedUnit.conferencePrompts?.[selectedLevel as 1 | 2 | 3 | 4] ?? [];
  const unitModelMoves = selectedUnit.widaDifferentiation?.[selectedLevel as 1 | 2 | 3 | 4] ?? [];
  const unitModelSample = selectedUnit.modelSamples?.[selectedLevel as 1 | 2 | 3 | 4];
  const speakingMoves = SPEAKING_STRATEGIES[selectedLevel as keyof typeof SPEAKING_STRATEGIES];
  const vocabularyMoves = VOCABULARY_SUPPORT[selectedLevel as keyof typeof VOCABULARY_SUPPORT];

  const standardsText = selectedUnit.standards.length > 0
    ? selectedUnit.standards.join(", ")
    : selectedUnit.standardsPlaceholder;

  const unitBrief = [
    `Grade: ${grade}`,
    `Unit: ${selectedUnit.title}`,
    `Window: ${selectedUnit.window}`,
    `Unit goal: ${selectedUnit.focus}`,
    `Standards: ${standardsText}`,
    `Student WIDA level: ${selectedLevel} (${levelData.name})`,
    "",
    "What to teach:",
    "Keep the same writing goal for the unit, but scale the oral rehearsal, sentence support, vocabulary load, and independence expectations for multilingual learners across WIDA levels.",
    "",
    "What students need:",
    ...(selectedUnit.languageDemands ?? []).map((item) => `- ${item}`),
    "",
    "What to say:",
    ...unitSentenceFrames.map((item) => `- ${item}`),
    "",
    "What to model:",
    ...unitModelMoves.map((item) => `- ${item}`),
    "",
    "What it can sound like:",
    unitModelSample?.sample ?? "Add a short teacher-created sample here.",
    "",
    "What to ask:",
    ...unitConferencePrompts.map((item) => `- ${item}`),
    "",
    "What to use in writing:",
    ...unitWritingSupports.map((item) => `- ${item}`),
    "",
    "What to rehearse out loud:",
    ...speakingMoves.map((item) => `- ${item}`),
    "",
    "What words to lift:",
    ...vocabularyMoves.map((item) => `- ${item}`),
  ].join("\n");

  const planningPrompt = [
    "Help me plan a writing workshop lesson for multilingual learners.",
    "",
    "Context:",
    `- Grade: ${grade}`,
    `- Unit: ${selectedUnit.title}`,
    "- Lesson focus / teaching point:",
    `- Standards: ${standardsText}`,
    `- Student WIDA level(s): ${selectedLevel} (${levelData.name})`,
    "- Time available:",
    "- Whole class, small group, or push-in support:",
    "",
    "Toolkit notes:",
    "- What to teach: Keep the same writing goal for the unit, but scale the oral rehearsal, sentence support, vocabulary load, and independence expectations for multilingual learners across WIDA levels.",
    `- What students need: ${(selectedUnit.languageDemands ?? []).join(" ")}`,
    `- What to say: ${unitSentenceFrames.join(" ")}`,
    `- What to model: ${unitModelMoves.join(" ")}`,
    `- What it can sound like: ${unitModelSample?.sample ?? "Add a short teacher-created sample here."}`,
    `- What to ask: ${unitConferencePrompts.join(" ")}`,
    `- What to use in writing: ${unitWritingSupports.join(" ")}`,
    `- What to rehearse out loud: ${speakingMoves.join(" ")}`,
    `- What words to lift: ${vocabularyMoves.join(" ")}`,
    "",
    "Please create:",
    "1. A clear teaching point in teacher-friendly language",
    "2. A 10-15 minute mini-lesson",
    "3. What I should actually say out loud",
    "4. A scaffold for my target WIDA level",
    "5. One quick partner rehearsal",
    "6. One independent writing task",
    "7. Two conference prompts",
    "8. One quick check-for-understanding",
    "Keep it practical and easy to use in a real classroom.",
  ].join("\n");

  const planningTemplate = [
    "Writing Workshop Planning Template",
    "",
    "Grade:",
    "Unit:",
    "Lesson focus / teaching point:",
    "Standards:",
    "Student WIDA level(s):",
    "Time available:",
    "Whole class, small group, or push-in support:",
    "",
    "What to teach:",
    "",
    "What students need:",
    "",
    "What to say:",
    "",
    "What to model:",
    "",
    "What it can sound like:",
    "",
    "What to ask:",
    "",
    "What to use in writing:",
    "",
    "What to rehearse out loud:",
    "",
    "What words to lift:",
    "",
    "Ask the AI to create:",
    "1. A clear teaching point",
    "2. A short mini-lesson",
    "3. Exact teacher language",
    "4. WIDA-level scaffolds",
    "5. Partner rehearsal",
    "6. Independent writing task",
    "7. Conference prompts",
    "8. Quick check-for-understanding",
  ].join("\n");

  const chooseGrade = (nextGrade: GradeId) => {
    setGrade(nextGrade);
    setUnitId(YEARLY_OVERVIEWS.writer[nextGrade][0].id);
  };

  const copyText = async (value: string, key: "prompt" | "template" | "brief") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedItem(key);
      window.setTimeout(() => setCopiedItem((current) => (current === key ? null : current)), 1800);
      toast({
        title: "Copied to clipboard",
        description: "You can paste this directly into ChatGPT, Flint, or your planning notes.",
      });
    } catch {
      setCopiedItem(null);
      toast({
        variant: "destructive",
        title: "Copy did not work",
        description: "Try selecting the text manually and copying it again.",
      });
    }
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

        <div className="mt-6 rounded-2xl border border-blue-200 bg-white/80 p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-blue-950">English + Chinese Support</div>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Keep English as the main teaching language and add Chinese helper labels for teacher planning.
              </p>
              {showChineseSupport ? (
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  保留英文教学目标，同时为同事提供中文提示，帮助他们更快理解每个部分要做什么。
                </p>
              ) : null}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {showChineseSupport ? "On" : "Off"}
              </span>
              <Switch checked={showChineseSupport} onCheckedChange={setShowChineseSupport} aria-label="Toggle Chinese support" />
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white/90 p-4">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Current Selection
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="outline" className="rounded-full border-blue-200 bg-blue-50 text-blue-900">
              Grade {grade}
            </Badge>
            <Badge variant="outline" className="rounded-full border-blue-200 bg-blue-50 text-blue-900">
              {selectedUnit.title}
            </Badge>
            <Badge variant="outline" className="rounded-full border-blue-200 bg-blue-50 text-blue-900">
              WIDA {selectedLevel}
            </Badge>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Use this combination as your planning anchor before moving into the glossary, WIDA ladder, or AI planning helpers below.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_420px]">
        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <SupportHeading
              show={showChineseSupport}
              english={`Choose Grade ${grade} Unit`}
              chinese={`选择 ${grade} 年级单元`}
              className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-500"
            />
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
            <SupportHeading
              show={showChineseSupport}
              english="Unit At A Glance"
              chinese="单元概览"
              className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500"
            />
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950">
              {selectedUnit.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {selectedUnit.focus}
            </p>

            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2">
                  <BookOpenText className="h-3.5 w-3.5 text-sky-600" />
                  <SupportHeading
                    show={showChineseSupport}
                    english="What To Teach"
                    chinese="教学重点"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Keep the same writing goal for the unit, but scale the oral rehearsal, sentence support, vocabulary load,
                  and independence expectations for multilingual learners across WIDA levels.
                </p>
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-600" />
                    <SupportHeading
                      show={showChineseSupport}
                      english="Standards"
                      chinese="课程标准"
                      className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                    />
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
              </div>

              {(selectedUnit.languageDemands?.length || selectedUnit.scaffoldNotes?.length) ? (
                <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
                  <div className="flex items-center gap-2">
                    <Languages className="h-3.5 w-3.5 text-sky-600" />
                    <SupportHeading
                      show={showChineseSupport}
                      english="What Students Need"
                      chinese="学生需要什么支持"
                      className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                    />
                  </div>
                  {selectedUnit.languageDemands?.length ? (
                    <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                      {selectedUnit.languageDemands.map((demand) => (
                        <li key={demand} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          <span>{demand}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {selectedUnit.scaffoldNotes?.length ? (
                    <div className="mt-4 border-t border-sky-100 pt-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                        <SupportHeading
                          show={showChineseSupport}
                          english="Scaffold Moves"
                          chinese="支架做法"
                          className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                        />
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
                </div>
              ) : null}

              {selectedUnit.planningNotes?.length ? (
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
                  <div className="flex items-center gap-2">
                    <Target className="h-3.5 w-3.5 text-indigo-600" />
                    <SupportHeading
                      show={showChineseSupport}
                      english="Planning Moves"
                      chinese="备课建议"
                      className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                    />
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
                <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-4">
                  <div className="flex items-center gap-2">
                    <LibraryBig className="h-3.5 w-3.5 text-amber-600" />
                    <SupportHeading
                      show={showChineseSupport}
                      english="What To Use"
                      chinese="可以使用的资源"
                      className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                    />
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
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5 md:px-8">
          <div className="flex items-center gap-2">
            <CircleHelp className="h-4 w-4 text-sky-600" />
            <SupportHeading
              show={showChineseSupport}
              english="Teacher Glossary"
              chinese="教师术语表"
              className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500"
            />
          </div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
            Quick help with workshop language
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
            Use these plain-language definitions when planning with colleagues or explaining unit language during team conversations.
          </p>
        </div>

        <div className="p-6 md:p-8">
          <Accordion type="single" collapsible className="grid gap-4 md:grid-cols-2">
            {TEACHER_GLOSSARY.map((entry) => (
              <AccordionItem
                key={entry.term}
                value={entry.term}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4"
              >
                <AccordionTrigger className="py-4 text-left text-base font-bold text-blue-950 hover:no-underline">
                  {entry.term}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                    <p>{entry.meaning}</p>
                    <div className="rounded-2xl border border-white bg-white p-3">
                      <SupportHeading
                        show={showChineseSupport}
                        english="Teacher Tip"
                        chinese="教师提示"
                        className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                      />
                      <p className="mt-2">{entry.teacherMove}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5 md:px-8">
          <SupportHeading
            show={showChineseSupport}
            english="Scaffold By WIDA Level"
            chinese="按 WIDA 水平查看支架支持"
            className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500"
          />
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
                <SupportHeading
                  show={showChineseSupport}
                  english="What This Level Can Do"
                  chinese="这个水平的学生通常能做到什么"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                />
                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                  WIDA {selectedLevel}: {levelData.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {levelData.description}
                </p>

                <div className="mt-5 rounded-2xl border border-white bg-white p-4">
                  <div className="flex items-center gap-2">
                    <MessageSquareQuote className="h-3.5 w-3.5 text-sky-600" />
                    <SupportHeading
                      show={showChineseSupport}
                      english="What To Say"
                      chinese="老师可以怎么说"
                      className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                    />
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
                    <div className="flex items-center gap-2">
                      <Route className="h-3.5 w-3.5 text-sky-600" />
                      <SupportHeading
                        show={showChineseSupport}
                        english="What To Model"
                        chinese="老师要示范什么"
                        className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                      />
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
                    <div className="flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5 text-emerald-600" />
                      <SupportHeading
                        show={showChineseSupport}
                        english="What It Can Sound Like"
                        chinese="学生作品可能听起来像什么"
                        className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                      />
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
                      <SupportHeading
                        show={showChineseSupport}
                        english="What To Notice"
                        chinese="可以注意什么"
                        className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                      />
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {selectedUnit.modelSamples[selectedLevel as 1 | 2 | 3 | 4]?.whatThisShows}
                      </p>
                    </div>
                  </div>
                ) : null}

                {selectedUnit.conferencePrompts?.[selectedLevel as 1 | 2 | 3 | 4]?.length ? (
                  <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/80 p-4">
                    <div className="flex items-center gap-2">
                      <CircleHelp className="h-3.5 w-3.5 text-violet-600" />
                      <SupportHeading
                        show={showChineseSupport}
                        english="What To Ask"
                        chinese="老师可以问什么"
                        className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                      />
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
                      <div className="flex items-center gap-2">
                        <NotebookPen className="h-3.5 w-3.5 text-sky-600" />
                        <SupportHeading
                          show={showChineseSupport}
                          english="What To Use In Writing"
                          chinese="写作时可以使用什么"
                          className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                        />
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
                      <SupportHeading
                        show={showChineseSupport}
                        english="What To Rehearse Out Loud"
                        chinese="口头练习什么"
                        className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                      />
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
                      <SupportHeading
                        show={showChineseSupport}
                        english="What Words To Lift"
                        chinese="重点词汇"
                        className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
                      />
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

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/50 to-sky-50/60 shadow-sm">
        <div className="border-b border-blue-100 px-6 py-5 md:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-sky-600" />
            <SupportHeading
              show={showChineseSupport}
              english="Plan With AI"
              chinese="用 AI 协助备课"
              className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500"
            />
          </div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
            Copy this page into ChatGPT or Flint
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
            Use the selected grade, unit, and WIDA level to generate a lesson plan faster. Copy the ready-made prompt,
            the reusable template, or the unit brief that summarizes this page.
          </p>
        </div>

        <div className="grid gap-6 p-6 md:p-8 xl:grid-cols-3">
          {[
            {
              key: "prompt" as const,
              title: "1. One-Paragraph Super Prompt",
              text: "Best when you want the AI to build a lesson plan right away from this selected unit and WIDA level.",
              value: planningPrompt,
            },
            {
              key: "template" as const,
              title: "2. Reusable Planning Template",
              text: "Best when you want a blank planning frame you can keep in Notes and reuse for any lesson.",
              value: planningTemplate,
            },
            {
              key: "brief" as const,
              title: "3. Unit Brief From This Page",
              text: "Best when you want to bring the page content itself into another LLM before asking for help.",
              value: unitBrief,
            },
          ].map((item) => (
            <Card key={item.key} className="rounded-3xl border-slate-200 bg-white shadow-none">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-extrabold leading-tight text-blue-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="shrink-0 rounded-xl"
                    onClick={() => copyText(item.value, item.key)}
                  >
                    <Copy className="mr-2 h-3.5 w-3.5" />
                    {copiedItem === item.key ? "Copied" : "Copy"}
                  </Button>
                </div>
                <textarea
                  readOnly
                  value={item.value}
                  className="mt-4 min-h-[240px] w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 md:min-h-[320px]"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
