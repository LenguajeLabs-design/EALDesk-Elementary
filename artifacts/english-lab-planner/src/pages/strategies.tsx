import React from "react";
import {
  WIDA_LEVELS,
  WRITING_STRATEGIES,
  SPEAKING_STRATEGIES,
  VOCABULARY_SUPPORT,
  TRANSLATION_GUIDELINES,
  ASSESSMENTS,
} from "@/lib/data";
import {
  STRATEGY_CARDS,
  STRATEGY_DOMAINS,
  STRATEGY_GRADE_BANDS,
  STRATEGY_GRADE_BAND_EXAMPLES,
  STRATEGY_PURPOSES,
  STRATEGY_SUPPORT_NEEDS,
  UNIT_STRATEGY_CONTEXT,
  type StrategyCard,
  type StrategyDomain,
  type StrategyGradeBand,
  type StrategyPurpose,
  type StrategySupportNeed,
} from "@/lib/content/strategy-cards";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookA,
  CheckSquare,
  Edit3,
  Filter,
  Languages,
  Lightbulb,
  MessageSquare,
  RefreshCcw,
  Sparkles,
  Target,
} from "lucide-react";

type FilterValue<T extends string> = "Any" | T;
type WidaFilterValue = "Any" | 1 | 2 | 3 | 4 | 5;

function StrategyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 mt-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-blue-500 bg-blue-600 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}

function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: FilterValue<T>;
  onChange: (value: FilterValue<T>) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</div>
      <div className="flex flex-wrap gap-2">
        <FilterChip active={value === "Any"} label="Any" onClick={() => onChange("Any")} />
        {options.map((option) => (
          <FilterChip
            key={option}
            active={value === option}
            label={option}
            onClick={() => onChange(option)}
          />
        ))}
      </div>
    </div>
  );
}

function WidaFilterRow({
  value,
  onChange,
}: {
  value: WidaFilterValue;
  onChange: (value: WidaFilterValue) => void;
}) {
  const levels: WidaFilterValue[] = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-3">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">WIDA Level</div>
      <div className="flex flex-wrap gap-2">
        <FilterChip active={value === "Any"} label="Any" onClick={() => onChange("Any")} />
        {levels.map((level) => (
          <FilterChip
            key={level}
            active={value === level}
            label={`Level ${level}`}
            onClick={() => onChange(level)}
          />
        ))}
      </div>
    </div>
  );
}

function bestWidaLabel(levels: number[]) {
  const sorted = [...levels].sort((a, b) => a - b);
  return sorted[0] === sorted[sorted.length - 1]
    ? `Level ${sorted[0]}`
    : `${sorted[0]}-${sorted[sorted.length - 1]}`;
}

function StrategyCardView({
  card,
  matchScore,
  selectedGradeBand,
}: {
  card: StrategyCard;
  matchScore: number;
  selectedGradeBand: StrategyGradeBand;
}) {
  return (
    <Card className="rounded-3xl border-slate-200 bg-white shadow-sm">
      <CardHeader className="space-y-4 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="rounded-full border-blue-200 bg-blue-50 text-blue-900">
            {card.name}
          </Badge>
          {matchScore > 0 ? (
            <Badge variant="outline" className="rounded-full border-emerald-200 bg-emerald-50 text-emerald-900">
              {matchScore} match{matchScore === 1 ? "" : "es"}
            </Badge>
          ) : null}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Best For</div>
            <p className="mt-1 text-sm text-slate-700">{card.bestFor.join(", ")}</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Domain</div>
            <p className="mt-1 text-sm text-slate-700">{card.domains.join(", ")}</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Best Grade Band</div>
            <p className="mt-1 text-sm text-slate-700">Grades {card.bestGradeBands.join(", ")}</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Best WIDA Levels</div>
            <p className="mt-1 text-sm text-slate-700">{bestWidaLabel(card.bestWidaLevels)}</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Use When Students Need Help With</div>
            <p className="mt-1 text-sm text-slate-700">{card.supportNeeds.join(", ")}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Teacher Can Say</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">{card.teacherLanguage}</p>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Teacher Does</div>
            <ol className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
              {card.teacherDoes.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-900">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Students Do</div>
            <ol className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
              {card.studentsDo.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-900">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Grade {selectedGradeBand} EAL Example
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-800">
            {STRATEGY_GRADE_BAND_EXAMPLES[card.id][selectedGradeBand]}
          </p>
        </div>

        <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Reduce The Scaffold</div>
          <ul className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
            {card.reduceScaffold.map((move) => (
              <li key={move} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>{move}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function ReferenceCard({
  level,
  title,
  items,
}: {
  level: (typeof WIDA_LEVELS)[number];
  title: string;
  items: string[];
}) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{title}</CardTitle>
          <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
        </div>
        <p className="text-xs text-muted-foreground">{level.program}</p>
      </CardHeader>
      <CardContent>
        <StrategyList items={items} />
      </CardContent>
    </Card>
  );
}

export default function Strategies() {
  const searchParams = new URLSearchParams(window.location.search);
  const selectedUnit = searchParams.get("unit") || "";
  const selectedTask = searchParams.get("task") || "";
  const unitContext = UNIT_STRATEGY_CONTEXT[selectedUnit];

  const [selectedPurpose, setSelectedPurpose] = React.useState<FilterValue<StrategyPurpose>>(
    unitContext?.recommendedPurpose ?? "Any",
  );
  const [selectedGradeBand, setSelectedGradeBand] = React.useState<FilterValue<StrategyGradeBand>>(
    unitContext?.recommendedGradeBand ?? "Any",
  );
  const [selectedDomain, setSelectedDomain] = React.useState<FilterValue<StrategyDomain>>(
    selectedTask === "partner-talk"
      ? "Speaking"
      : selectedTask === "writing"
        ? "Writing"
        : "Any",
  );
  const [selectedSupport, setSelectedSupport] = React.useState<FilterValue<StrategySupportNeed>>(
    unitContext?.recommendedSupport ?? "Any",
  );
  const [selectedWida, setSelectedWida] = React.useState<WidaFilterValue>("Any");

  const allFiltersAreAny =
    selectedPurpose === "Any" &&
    selectedGradeBand === "Any" &&
    selectedDomain === "Any" &&
    selectedSupport === "Any" &&
    selectedWida === "Any";

  const scoredCards = React.useMemo(() => {
    return STRATEGY_CARDS.map((card) => {
      const purposeMatch = selectedPurpose === "Any" || card.bestFor.includes(selectedPurpose);
      const gradeBandMatch =
        selectedGradeBand === "Any" || card.bestGradeBands.includes(selectedGradeBand);
      const domainMatch = selectedDomain === "Any" || card.domains.includes(selectedDomain);
      const supportMatch = selectedSupport === "Any" || card.supportNeeds.includes(selectedSupport);
      const widaMatch = selectedWida === "Any" || card.bestWidaLevels.includes(selectedWida);

      const score =
        (purposeMatch && selectedPurpose !== "Any" ? 1 : 0) +
        (gradeBandMatch && selectedGradeBand !== "Any" ? 1 : 0) +
        (domainMatch && selectedDomain !== "Any" ? 1 : 0) +
        (supportMatch && selectedSupport !== "Any" ? 1 : 0) +
        (widaMatch && selectedWida !== "Any" ? 1 : 0);

      return {
        card,
        purposeMatch,
        gradeBandMatch,
        domainMatch,
        supportMatch,
        widaMatch,
        score,
        exactMatch: purposeMatch && gradeBandMatch && domainMatch && supportMatch && widaMatch,
      };
    }).sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.card.name.localeCompare(b.card.name);
    });
  }, [selectedPurpose, selectedGradeBand, selectedDomain, selectedSupport, selectedWida]);

  const exactMatches = scoredCards.filter((entry) => entry.exactMatch);
  const recommendedCards = allFiltersAreAny
    ? STRATEGY_CARDS.slice(0, 6).map((card) => ({ card, score: 0 }))
    : exactMatches.length > 0
      ? exactMatches.slice(0, 8).map((entry) => ({ card: entry.card, score: entry.score }))
      : scoredCards
          .filter((entry) => entry.score > 0)
          .slice(0, 6)
          .map((entry) => ({ card: entry.card, score: entry.score }));

  const referenceDefaultTab =
    selectedTask === "partner-talk"
      ? "speaking"
      : selectedTask === "writing"
        ? "writing"
        : "writing";

  const resetFilters = () => {
    setSelectedPurpose(unitContext?.recommendedPurpose ?? "Any");
    setSelectedGradeBand(unitContext?.recommendedGradeBand ?? "Any");
    setSelectedDomain(
      selectedTask === "partner-talk"
        ? "Speaking"
        : selectedTask === "writing"
          ? "Writing"
          : "Any",
    );
    setSelectedSupport(unitContext?.recommendedSupport ?? "Any");
    setSelectedWida("Any");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50/60 to-blue-50 p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-bold text-sky-800">
            <Lightbulb className="h-3.5 w-3.5" />
            Choose Your Teaching Move
          </div>
          <Badge variant="outline" className="rounded-full border-blue-200 bg-white text-blue-900">
            Grades 2-5 planning tool
          </Badge>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
          Strategy support for the lesson in front of you
        </h1>
        <p className="mt-3 max-w-5xl text-base leading-relaxed text-slate-600 md:text-lg">
          Use this page when you walk into a classroom, read the board, hear the lesson goal, and need to make one strong EAL move quickly.
          Start with the language purpose, the domain, the WIDA level, and the support students need most right now.
        </p>
      </section>

      {unitContext ? (
        <section className="rounded-3xl border border-blue-200 bg-blue-50/80 p-5 md:p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-2xl border border-blue-200 bg-white p-2.5">
              <Sparkles className="h-5 w-5 text-blue-700" />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Unit Context</p>
                <h2 className="mt-1 text-xl font-bold text-blue-950">{unitContext.label}</h2>
                <p className="mt-1 text-sm text-slate-600">Recommended first focus: {unitContext.focus}</p>
              </div>
              <ul className="space-y-2">
                {unitContext.notes.map((note) => (
                  <li key={note} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge className="rounded-full bg-white text-blue-900 shadow-none">
                  Start with: {unitContext.recommendedPurpose}
                </Badge>
                <Badge className="rounded-full bg-white text-blue-900 shadow-none">
                  Support need: {unitContext.recommendedSupport}
                </Badge>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                <Filter className="h-4 w-4 text-sky-600" />
                Quick Teacher Filters
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
                Match the support to the lesson demand
              </h2>
              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
                A tired teacher should be able to answer: What are students being asked to do, where is the language load, and what is one smart move I can use tomorrow?
              </p>
            </div>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-slate-50"
            >
              <RefreshCcw className="h-4 w-4" />
              Reset filters
            </button>
          </div>
        </div>

        <div className="space-y-6 p-6 md:p-8">
          <FilterRow
            label="I want students to..."
            options={STRATEGY_PURPOSES}
            value={selectedPurpose}
            onChange={(value) => setSelectedPurpose(value)}
          />
          <FilterRow
            label="Grade band"
            options={STRATEGY_GRADE_BANDS}
            value={selectedGradeBand}
            onChange={(value) => setSelectedGradeBand(value)}
          />
          <FilterRow
            label="They will..."
            options={STRATEGY_DOMAINS}
            value={selectedDomain}
            onChange={(value) => setSelectedDomain(value)}
          />
          <WidaFilterRow value={selectedWida} onChange={setSelectedWida} />
          <FilterRow
            label="They need support with..."
            options={STRATEGY_SUPPORT_NEEDS}
            value={selectedSupport}
            onChange={(value) => setSelectedSupport(value)}
          />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              <Target className="h-4 w-4 text-sky-600" />
              Recommended Strategies
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
              Start with one move, not ten
            </h2>
          </div>
          <Badge variant="outline" className="rounded-full border-blue-200 bg-blue-50 text-blue-900">
            {recommendedCards.length} card{recommendedCards.length === 1 ? "" : "s"} showing
          </Badge>
        </div>

        {allFiltersAreAny ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-relaxed text-slate-700">
            Start by choosing the language purpose or support need. Until then, this page is showing a few strong high-utility strategy cards teachers often reach for first.
          </div>
        ) : exactMatches.length === 0 ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-relaxed text-slate-700">
            There was no exact match for all four filters, so these are the closest useful options. In practice, that is normal. Pick the strategy that best fits the language bottleneck you see in the room.
          </div>
        ) : (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm leading-relaxed text-slate-700">
            These cards match the lesson demand you selected. If time is short, choose one, model it clearly, then reduce the scaffold as students gain control.
          </div>
        )}

        {recommendedCards.length > 0 ? (
          <div className="grid gap-5 xl:grid-cols-2">
            {recommendedCards.map(({ card, score }) => (
              <StrategyCardView
                key={card.id}
                card={card}
                matchScore={score}
                selectedGradeBand={selectedGradeBand === "Any" ? "4-5" : selectedGradeBand}
              />
            ))}
          </div>
        ) : (
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <Empty className="rounded-3xl border border-dashed border-slate-200 bg-slate-50">
                <EmptyMedia variant="icon">
                  <Target className="size-5" />
                </EmptyMedia>
                <EmptyHeader>
                  <EmptyTitle>No strategy cards matched yet.</EmptyTitle>
                  <EmptyDescription>
                    Reset one or two filters and start with the biggest language bottleneck you see in the room.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5 md:px-8">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            <Sparkles className="h-4 w-4 text-sky-600" />
            Scaffold Reminder
          </div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
            Scaffolds should be temporary
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
            Avoid making frames, word banks, or visuals permanent. The goal is not to keep students dependent on supports. The goal is to help them practice stronger language until they can carry more of it independently.
          </p>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Open The Frame</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Move from full sentences to partial starters or transition words only.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Reduce Visual Load</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Remove pictures, labels, or teacher models once students can hold the idea with less support.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Increase Independence</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Ask students to say it again, write it again, or explain it again with fewer prompts the second time.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5 md:px-8">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            <Lightbulb className="h-4 w-4 text-sky-600" />
            More Reference
          </div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
            Full support bank by WIDA level
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
            Use this section when you want the broader reference lists after choosing your immediate teaching move.
          </p>
        </div>

        <div className="p-6 md:p-8">
          <Accordion type="single" collapsible defaultValue="reference">
            <AccordionItem value="reference" className="border-none">
              <AccordionTrigger className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left text-base font-bold text-blue-950 hover:no-underline">
                Open the full reference lists
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <Tabs defaultValue={referenceDefaultTab} className="w-full">
                  <TabsList className="flex h-auto flex-wrap gap-1 rounded-xl bg-secondary/50 p-1">
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
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {WIDA_LEVELS.map((level) => (
                          <ReferenceCard
                            key={level.level}
                            level={level}
                            title={`WIDA ${level.level}`}
                            items={WRITING_STRATEGIES[level.level as keyof typeof WRITING_STRATEGIES]}
                          />
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="speaking" className="m-0">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {WIDA_LEVELS.map((level) => (
                          <ReferenceCard
                            key={level.level}
                            level={level}
                            title={`WIDA ${level.level}`}
                            items={SPEAKING_STRATEGIES[level.level as keyof typeof SPEAKING_STRATEGIES]}
                          />
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="vocabulary" className="m-0">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {WIDA_LEVELS.map((level) => (
                          <ReferenceCard
                            key={level.level}
                            level={level}
                            title={`WIDA ${level.level}`}
                            items={VOCABULARY_SUPPORT[level.level as keyof typeof VOCABULARY_SUPPORT]}
                          />
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="translations" className="m-0">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {WIDA_LEVELS.map((level) => (
                          <Card key={level.level} className="shadow-sm">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">WIDA {level.level}</CardTitle>
                                <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">{level.program}</p>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm leading-relaxed text-foreground/90">
                                {TRANSLATION_GUIDELINES.useByLevel[level.level as keyof typeof TRANSLATION_GUIDELINES.useByLevel]}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="assessment" className="m-0">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {WIDA_LEVELS.map((level) => {
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
                                  <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">General</p>
                                  <StrategyList items={data.general} />
                                </div>
                                <div>
                                  <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">Response Options</p>
                                  <StrategyList items={data.response} />
                                </div>
                                <div>
                                  <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-primary">Content Modifications</p>
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
