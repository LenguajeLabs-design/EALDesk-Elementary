import React from "react";
import { WIDA_LEVELS, WRITING_STRATEGIES, SPEAKING_STRATEGIES, VOCABULARY_SUPPORT, TRANSLATION_GUIDELINES, ASSESSMENTS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit3, MessageSquare, BookA, Languages, CheckSquare, Sparkles } from "lucide-react";

const LEVEL_COLORS: Record<number, string> = {
  1: "bg-amber-50 border-amber-200",
  2: "bg-amber-50 border-amber-200",
  3: "bg-teal-50 border-teal-200",
  4: "bg-indigo-50 border-indigo-200",
};

function StrategyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LevelColumn({ level }: { level: typeof WIDA_LEVELS[0] }) {
  return (
    <div className={`rounded-xl border p-5 space-y-2 ${LEVEL_COLORS[level.level]}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-base text-foreground">WIDA {level.level}</span>
        <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
      </div>
      <p className="text-xs text-muted-foreground font-medium">{level.program}</p>
    </div>
  );
}

const UNIT_STRATEGY_CONTEXT = {
  "Making Small Moments Big": {
    label: "Grade 2 Unit 1: Making Small Moments Big",
    focus: "Narrative small moments",
    notes: [
      "Start with oral rehearsal of one true event before drafting.",
      "Prioritize sequence language, feeling words, and one important detail.",
      "Use writing and speaking supports together so students can say the story before they write it.",
    ],
  },
  "The Art of Information Writing": {
    label: "Grade 3 Unit 1: The Art of Information Writing",
    focus: "Information writing",
    notes: [
      "Help students group facts under simple categories or headings.",
      "Prioritize topic vocabulary, explaining language, and oral rehearsal of facts.",
      "Use writing supports to move students from naming facts to teaching readers clearly.",
    ],
  },
  "Spinning True Stories into Gold": {
    label: "Grade 4 Unit 1: Spinning True Stories into Gold",
    focus: "Personal narrative",
    notes: [
      "Focus on one true story and stretch the heart of the moment.",
      "Prioritize detail, pacing, dialogue, and reflective meaning.",
      "Use speaking supports to rehearse the scene before students revise or elaborate.",
    ],
  },
  "Turning Life into Literature": {
    label: "Grade 5 Unit 1: Turning Life into Literature",
    focus: "Personal narrative with reflection",
    notes: [
      "Help students connect outer action to inner thinking.",
      "Prioritize meaningful detail, reflection, and stronger narrative structure.",
      "Use writing and speaking supports to build significance, not just sequence.",
    ],
  },
  "Literary Essay: Opening Texts and Seeing More": {
    label: "Grade 5 Unit 2: Literary Essay",
    focus: "Interpretive literary essay",
    notes: [
      "Help students move from noticing text details to making a claim about character, theme, or author’s message.",
      "Prioritize claim language, evidence, and explanation over long unsupported summaries.",
      "Use speaking rehearsal before drafting so students can say the interpretation first.",
    ],
  },
  "Research-Based Argument": {
    label: "Grade 5 Unit 3: Research-Based Argument",
    focus: "Source-based argument writing",
    notes: [
      "Help students separate personal opinion from researched claim-and-evidence writing.",
      "Prioritize source language, evidence integration, and clear reasoning.",
      "Use oral rehearsal to test whether the argument sounds logical before drafting.",
    ],
  },
  "Graphic Novels": {
    label: "Grade 5 Unit 4: Graphic Novels",
    focus: "Graphic storytelling",
    notes: [
      "Help students balance what is shown visually with what is said in captions and dialogue.",
      "Prioritize sequence, scene clarity, concise dialogue, and visual meaning.",
      "Use oral rehearsal and sketch planning together so students can map panels before writing.",
    ],
  },
  "Journalism: Researching and Writing Articles": {
    label: "Grade 5 Unit 5: Journalism",
    focus: "Journalistic reporting",
    notes: [
      "Help students organize facts clearly for readers rather than just collecting information.",
      "Prioritize source use, factual precision, and report structure.",
      "Use oral rehearsal to sort key facts and decide what belongs in the article.",
    ],
  },
} as const;

export default function Strategies() {
  const searchParams = new URLSearchParams(window.location.search);
  const selectedUnit = searchParams.get("unit") || "";
  const selectedTask = searchParams.get("task") || "";
  const unitContext = UNIT_STRATEGY_CONTEXT[selectedUnit as keyof typeof UNIT_STRATEGY_CONTEXT];
  const defaultTab =
    selectedTask === "partner-talk"
      ? "speaking"
      : selectedTask === "writing"
        ? "writing"
        : "writing";

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Strategies by Skill</h1>
        <p className="text-muted-foreground mt-2">Browse reading, writing, talk, translation, and assessment supports across all WIDA levels.</p>
      </div>

      {unitContext && (
        <section className="rounded-xl border border-blue-200 bg-blue-50/80 p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-md border border-blue-200 bg-white p-2">
              <Sparkles className="h-5 w-5 text-blue-700" />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Unit Context</p>
                <h2 className="text-lg font-bold text-blue-950 mt-1">{unitContext.label}</h2>
                <p className="text-sm text-slate-600 mt-1">Recommended first focus: {unitContext.focus}</p>
              </div>
              <ul className="space-y-2">
                {unitContext.notes.map((note) => (
                  <li key={note} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="flex flex-wrap gap-1 h-auto bg-secondary/50 p-1 rounded-xl">
          <TabsTrigger value="writing" className="flex items-center gap-2 rounded-lg">
            <Edit3 size={15} /> Writing
          </TabsTrigger>
          <TabsTrigger value="speaking" className="flex items-center gap-2 rounded-lg">
            <MessageSquare size={15} /> Speaking
          </TabsTrigger>
          <TabsTrigger value="vocabulary" className="flex items-center gap-2 rounded-lg">
            <BookA size={15} /> Vocabulary
          </TabsTrigger>
          <TabsTrigger value="translations" className="flex items-center gap-2 rounded-lg">
            <Languages size={15} /> Translations
          </TabsTrigger>
          <TabsTrigger value="assessment" className="flex items-center gap-2 rounded-lg">
            <CheckSquare size={15} /> Assessment
          </TabsTrigger>
        </TabsList>

        <div className="pt-6">

          <TabsContent value="writing" className="m-0">
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
                    <StrategyList items={WRITING_STRATEGIES[level.level as keyof typeof WRITING_STRATEGIES]} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speaking" className="m-0">
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
                    <StrategyList items={SPEAKING_STRATEGIES[level.level as keyof typeof SPEAKING_STRATEGIES]} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vocabulary" className="m-0">
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
                    <StrategyList items={VOCABULARY_SUPPORT[level.level as keyof typeof VOCABULARY_SUPPORT]} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="translations" className="m-0">
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
          </TabsContent>

          <TabsContent value="assessment" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {WIDA_LEVELS.map(level => {
                const data = ASSESSMENTS[level.level as keyof typeof ASSESSMENTS];
                return (
                  <Card key={level.level} className="shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">WIDA {level.level}</CardTitle>
                        <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{level.program}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">General</p>
                        <StrategyList items={data.general} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">Response Options</p>
                        <StrategyList items={data.response} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">Content Modifications</p>
                        <StrategyList items={data.content} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

        </div>
      </Tabs>
    </div>
  );
}
