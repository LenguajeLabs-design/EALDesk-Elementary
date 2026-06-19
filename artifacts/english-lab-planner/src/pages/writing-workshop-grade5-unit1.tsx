import React from "react";
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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const languageDemands = [
  "Write a true personal narrative with a clear structure and reflective meaning",
  "Develop a small moment using scene, detail, dialogue, and pacing",
  "Show the inner thinking of the narrator, not just the events",
  "Use craft to help the reader feel the importance of the moment",
  "End with reflection, significance, or a change in understanding",
];

const levelScaffolds = [
  {
    level: "WIDA 1-2",
    title: "Entering and Emerging",
    use: "Students need strong oral rehearsal, visual planning, and simple personal narrative frames built around one clear true moment.",
    writing: [
      "Accept sketches, oral storytelling, sentence strips, and jointly written narratives",
      "Use shared writing to build a short true story before independent writing",
      "Provide a beginning-middle-end organizer with picture prompts",
      "Keep the story focused on one event instead of a long sequence of events",
    ],
    speaking: [
      "One day, ___.",
      "First, ___.",
      "Then, ___.",
      "I felt ___.",
    ],
    vocabulary: [
      "Teach action verbs, feeling words, and time-order words with visuals",
      "Use word banks for dialogue starters and emotion words",
      "Repeat the same narrative words during talk and writing",
    ],
    frames: [
      "One day, ___.",
      "First, ___.",
      "Then, ___.",
      "At the end, ___.",
    ],
  },
  {
    level: "WIDA 3",
    title: "Developing",
    use: "Students are ready for connected narrative writing with more scene detail, clearer sequencing, and supported reflection.",
    writing: [
      "Model how to zoom in on the most important part of the story",
      "Prompt students to add thoughts, feelings, and simple dialogue",
      "Use story planners that separate action from reflection",
      "Support revision with one focus such as stretching the important scene",
    ],
    speaking: [
      "The most important part was ___.",
      "I remember ___.",
      "I thought ___.",
      "This mattered because ___.",
    ],
    vocabulary: [
      "Teach narrative craft language such as scene, detail, dialogue, and reflection",
      "Use transition language like later, suddenly, after that, and finally",
      "Encourage students to borrow language from mentor narratives",
    ],
    frames: [
      "The moment began when ___.",
      "After that, ___.",
      "I thought, \"___.\"",
      "This mattered because ___.",
    ],
  },
  {
    level: "WIDA 4",
    title: "Expanding",
    use: "Students can write fuller personal narratives and should start using stronger voice, elaboration, and reflective meaning.",
    writing: [
      "Push for stronger pacing and detail in the most important scene",
      "Model how writers connect outer action to inner thinking",
      "Prompt students to revise for voice, clarity, and significance",
      "Use peer feedback focused on meaning, craft, and reader impact",
    ],
    speaking: [
      "The heart of the story is ___.",
      "This moment changed my thinking because ___.",
      "The writer helps the reader understand ___.",
    ],
    vocabulary: [
      "Teach more precise verbs, feeling language, and reflective phrasing",
      "Encourage students to choose language that creates mood and voice",
      "Use mentor texts to notice narrative craft moves",
    ],
    frames: [
      "The heart of the story is ___.",
      "This reveals ___.",
      "The reader can see this when ___.",
      "In the end, I understood ___.",
    ],
  },
];

const conferencePrompts = [
  "Which part of your story feels most important to you?",
  "Where can you slow the story down so the reader can really live the moment?",
  "What were you thinking or realizing at that point?",
  "How will the reader know why this story matters?",
];

const quickAssessment = [
  "Can the student stay focused on one meaningful true moment?",
  "Can the student sequence the story clearly for the reader?",
  "Can the student add thoughts, feelings, or dialogue to deepen the scene?",
  "Can the student show why the experience mattered?",
];

const relatedDocuments = [
  {
    title: "Grade 5 Narrative Scoring Rubric",
    purpose: "Use this for end-of-unit scoring and to identify the next narrative writing goal.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_G5_ScoringRubric.pdf",
  },
  {
    title: "Grade 5 Narrative Annotated Sample",
    purpose: "Use this to show what stronger Grade 5 personal narrative writing can look like.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_G5_AnnotatedWritingDevelopedThroughProgression.pdf",
  },
  {
    title: "Grade 5 Narrative Checklist",
    purpose: "Use this during conferences or student self-check to keep expectations visible.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_G5_WritingChecklist_Color.pdf",
  },
  {
    title: "Narrative Learning Progression",
    purpose: "Use this to track growth across narrative writing levels and next steps.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_LearningProgression.pdf",
  },
];

export default function WritingWorkshopGrade5Unit1() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sky-800 text-xs font-bold">
          <FolderKanban className="h-3.5 w-3.5" /> Scaffolded Unit Model
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 mt-4">
          Grade 5 Unit 1: Turning Life into Literature
        </h1>
        <p className="text-slate-600 mt-3 leading-relaxed">
          This model shows how workshop materials can support Grade 5 Unit 1 by organizing
          the narrative scaffolds teachers need at each WIDA level.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/writing-workshop-grade2-unit1">
            <Button variant="outline" className="bg-white">Grade 2 Unit 1</Button>
          </Link>
          <Link href="/writing-workshop-grade3-unit1">
            <Button variant="outline" className="bg-white">Grade 3 Unit 1</Button>
          </Link>
          <Link href="/writing-workshop-toolkit">
            <Button variant="outline" className="bg-white">Grade 4 Unit 1</Button>
          </Link>
          <Button className="bg-blue-700 hover:bg-blue-800">Grade 5 Unit 1</Button>
        </div>
      </div>

      <section className="grid xl:grid-cols-[1.15fr_0.85fr] gap-5">
        <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpenText className="h-5 w-5 text-sky-700" />
              <h2 className="text-lg font-bold text-blue-950">What students are trying to do</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Students turn a true life experience into a more literary personal narrative.
              In EAL planning, the unit stays the same, but the amount of oral rehearsal,
              reflection, detail, and independent craft changes by WIDA level.
            </p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Language demands in this unit</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {languageDemands.map((item) => (
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
            <p className="text-sm text-slate-700 leading-relaxed">
              This unit asks for more reflection and literary craft than a simple recount.
              EAL support should help students tell the story clearly and also communicate why
              the moment mattered.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <MessageSquareQuote className="h-4 w-4" />
          SUPPORTS BY WIDA LEVEL
        </div>
        <div className="grid gap-5">
          {levelScaffolds.map((group) => (
            <Card key={group.level} className="rounded-xl border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-bold text-sky-800">
                      {group.level}
                    </div>
                    <h2 className="mt-3 text-xl font-bold text-blue-950">{group.title}</h2>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-3xl">{group.use}</p>
                  </div>
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
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              These help teachers keep conferences focused, reflective, and language-friendly.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {conferencePrompts.map((prompt) => (
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
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Use these as fast checks during drafting, conferring, or small-group instruction.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {quickAssessment.map((item) => (
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
        <div className="grid xl:grid-cols-4 gap-4">
          {relatedDocuments.map((doc) => (
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
          <Button variant="outline" className="bg-white">
            Back to Writer&apos;s Workshop
          </Button>
        </Link>
        <Link href="/quick-tools?workshop=writer&task=writing">
          <Button className="bg-blue-700 hover:bg-blue-800">
            Open writing supports
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
