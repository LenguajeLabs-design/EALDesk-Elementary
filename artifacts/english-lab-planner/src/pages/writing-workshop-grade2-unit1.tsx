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
  "Tell a true small moment in order",
  "Stay focused on one event instead of telling a long list",
  "Add actions, feelings, and a few specific details",
  "Help the reader understand what happened",
  "End the story clearly",
];

const levelScaffolds = [
  {
    level: "WIDA 1-2",
    title: "Entering and Emerging",
    use: "Students need strong oral storytelling, picture planning, and short patterned narrative writing.",
    writing: [
      "Accept drawings, labels, oral retell, and jointly written stories",
      "Use shared writing before independent writing",
      "Provide a picture-supported beginning-middle-end organizer",
      "Focus on one event and one clear feeling",
    ],
    speaking: [
      "First, ___.",
      "Then, ___.",
      "I felt ___.",
    ],
    vocabulary: [
      "Teach action words, feeling words, and time-order words with pictures",
      "Use small word banks for people, actions, and feelings",
      "Repeat story vocabulary across talk and writing",
    ],
    frames: [
      "First, ___.",
      "Then, ___.",
      "I felt ___.",
      "At the end, ___.",
    ],
  },
  {
    level: "WIDA 3",
    title: "Developing",
    use: "Students are ready for connected sentences, stronger sequencing, and a more vivid small moment.",
    writing: [
      "Model how to zoom in on one important part of the story",
      "Prompt students to add feeling, action, and simple dialogue",
      "Use story planners that separate beginning, middle, and end",
      "Support revision with one focus such as adding detail",
    ],
    speaking: [
      "The important part was ___.",
      "I remember ___.",
      "This happened when ___.",
    ],
    vocabulary: [
      "Teach narrative words such as detail, beginning, middle, end, and feeling",
      "Use transition words like next, then, after, and finally",
      "Encourage students to borrow language from mentor stories",
    ],
    frames: [
      "The story began when ___.",
      "After that, ___.",
      "I felt ___ because ___.",
      "At the end, ___.",
    ],
  },
  {
    level: "WIDA 4",
    title: "Expanding",
    use: "Students can write fuller narratives and should begin using stronger detail and meaning.",
    writing: [
      "Push for clearer pacing and more specific details",
      "Model how to show feelings through actions and dialogue",
      "Prompt students to revise for clarity and voice",
      "Use peer feedback on story details and sequencing",
    ],
    speaking: [
      "The most important part was ___.",
      "This mattered because ___.",
      "The writer helps the reader see ___.",
    ],
    vocabulary: [
      "Teach stronger verbs and feeling words",
      "Encourage students to use precise details from the moment",
      "Use mentor texts to notice craft moves",
    ],
    frames: [
      "The most important part was ___.",
      "This shows ___.",
      "The reader can imagine ___.",
      "This mattered because ___.",
    ],
  },
];

const conferencePrompts = [
  "Which part of your story should we help the reader see more clearly?",
  "What did you do, say, or feel in that moment?",
  "Can you make this part bigger instead of moving too fast?",
  "How will your ending help the reader know the story is finished?",
];

const quickAssessment = [
  "Can the student tell one clear small moment?",
  "Can the student keep the events in order?",
  "Can the student add one feeling or important detail?",
  "Can the student end the story clearly?",
];

const relatedDocuments = [
  {
    title: "Narrative Annotated Sample",
    purpose: "Use this to show what student growth can look like in a small-moment narrative.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_G2_AnnotatedWritingDevelopedThroughProgression.pdf",
  },
  {
    title: "Narrative Checklist",
    purpose: "Use this during student self-check or conferring to make the unit goals visible.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_G2_WritingChecklist_Color.pdf",
  },
  {
    title: "Narrative Writing Through Progression",
    purpose: "Use this to show teachers how the writing can grow across a progression.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_G2_WritingDevelopedThroughProgression_BW.pdf",
  },
];

export default function WritingWorkshopGrade2Unit1() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sky-800 text-xs font-bold">
          <FolderKanban className="h-3.5 w-3.5" /> Scaffolded Unit Model
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 mt-4">
          Grade 2 Unit 1: Making Small Moments Big
        </h1>
        <p className="text-slate-600 mt-3 leading-relaxed">
          This model shows how workshop materials can support Grade 2 Unit 1 by organizing
          the small-moment narrative scaffolds teachers need at each WIDA level.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button className="bg-blue-700 hover:bg-blue-800">Grade 2 Unit 1</Button>
          <Link href="/writing-workshop-grade3-unit1">
            <Button variant="outline" className="bg-white">Grade 3 Unit 1</Button>
          </Link>
          <Link href="/writing-workshop-toolkit">
            <Button variant="outline" className="bg-white">Grade 4 Unit 1</Button>
          </Link>
          <Link href="/writing-workshop-grade5-unit1">
            <Button variant="outline" className="bg-white">Grade 5 Unit 1</Button>
          </Link>
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
              Students write a true small moment and make it feel bigger by slowing it down,
              adding detail, and helping the reader picture the event. In EAL planning, the
              story stays the same, but the amount of support and language complexity changes
              by WIDA level.
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
              This unit is a good early place to build oral rehearsal, sequencing language,
              and confidence in telling a true story before expecting longer writing.
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
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">{group.writing.map((item) => <li key={item}>• {item}</li>)}</ul>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Teacher talk</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">{group.speaking.map((item) => <li key={item}>• {item}</li>)}</ul>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Vocabulary support</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">{group.vocabulary.map((item) => <li key={item}>• {item}</li>)}</ul>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Sentence frames</div>
                    <div className="mt-3 space-y-2">{group.frames.map((frame) => <div key={frame} className="rounded-lg border border-white bg-white px-3 py-2 text-sm font-medium text-slate-800">{frame}</div>)}</div>
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
        <div className="grid xl:grid-cols-3 gap-4">
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
          <Button variant="outline" className="bg-white">Back to Writer&apos;s Workshop</Button>
        </Link>
        <Link href="/quick-tools?workshop=writer&task=writing">
          <Button className="bg-blue-700 hover:bg-blue-800">Open writing supports<ArrowRight className="h-4 w-4 ml-2" /></Button>
        </Link>
      </section>
    </div>
  );
}
