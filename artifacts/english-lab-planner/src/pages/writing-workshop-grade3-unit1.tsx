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
  "Teach readers about a topic using clear information",
  "Group ideas into simple sections or parts",
  "Use facts, examples, and topic vocabulary",
  "Explain details so the reader understands more than just a list",
  "Use headings, linking words, and a clear ending",
];

const levelScaffolds = [
  {
    level: "WIDA 1-2",
    title: "Entering and Emerging",
    use: "Students need heavy support, visuals, shared writing, and simple teaching-book style language.",
    writing: [
      "Accept labeled diagrams, picture-supported pages, and jointly written information books",
      "Use shared writing before expecting independent information paragraphs",
      "Provide section frames with blanks or choices",
      "Focus on naming, describing, and teaching one fact at a time",
    ],
    speaking: [
      "This is ___.",
      "It has ___.",
      "Another fact is ___.",
    ],
    vocabulary: [
      "Teach topic words with visuals and examples",
      "Use word banks for parts, features, and key facts",
      "Repeat the same unit words across speaking and writing",
    ],
    frames: [
      "This is ___.",
      "It has ___.",
      "It can ___.",
      "Another fact is ___.",
    ],
  },
  {
    level: "WIDA 3",
    title: "Developing",
    use: "Students are ready for short information paragraphs, stronger organization, and simple explanation.",
    writing: [
      "Model a topic sentence with 2-3 supporting details",
      "Prompt students to explain one fact instead of only listing it",
      "Use organizers with headings and note boxes",
      "Support revision with one clear focus such as adding explanation",
    ],
    speaking: [
      "One important fact is ___.",
      "For example, ___.",
      "This shows ___.",
    ],
    vocabulary: [
      "Teach topic words plus explanation words like because, another, different, and important",
      "Use mentor texts to highlight information-writing language",
      "Encourage students to reuse vocabulary in discussion and writing",
    ],
    frames: [
      "This topic is about ___.",
      "One important fact is ___.",
      "For example, ___.",
      "This shows ___.",
    ],
  },
  {
    level: "WIDA 4",
    title: "Expanding",
    use: "Students can write fuller information pieces and should begin using stronger organization, elaboration, and academic language.",
    writing: [
      "Push for clearer grouping of ideas and stronger elaboration",
      "Model how writers define, describe, and explain",
      "Prompt revision for clarity, precision, and usefulness to the reader",
      "Use peer feedback on organization and explanation",
    ],
    speaking: [
      "A key detail is ___.",
      "This information helps the reader understand ___.",
      "Another example of this is ___.",
    ],
    vocabulary: [
      "Teach more precise academic topic words and linking language",
      "Encourage stronger verbs and clearer explanation phrases",
      "Use mentor texts to highlight informational craft",
    ],
    frames: [
      "A key detail is ___.",
      "This means ___.",
      "Another example is ___.",
      "This information is important because ___.",
    ],
  },
];

const conferencePrompts = [
  "What is your topic teaching the reader?",
  "Which part needs a clearer fact or example?",
  "Can you explain this detail instead of only naming it?",
  "How is your information organized for the reader?",
];

const quickAssessment = [
  "Can the student name the topic clearly?",
  "Can the student add at least one supporting fact?",
  "Can the student use topic vocabulary in speech or writing?",
  "Can the student explain one detail, not just list it?",
];

const relatedDocuments = [
  {
    title: "Information Annotated Sample",
    purpose: "Use this to show what student growth can look like in information writing.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Information_G3_AnnotatedWritingDevelopedThroughProgression.pdf",
  },
  {
    title: "Information Scoring Rubric",
    purpose: "Use this for end-of-unit scoring and deciding a clear next writing goal.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Information_G3_ScoringRubric.pdf",
  },
  {
    title: "Information Checklist",
    purpose: "Use this during conferring or self-check to keep goals visible during drafting and revision.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Information_G3_WritingChecklist_Color.pdf",
  },
];

export default function WritingWorkshopGrade3Unit1() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sky-800 text-xs font-bold">
          <FolderKanban className="h-3.5 w-3.5" /> Scaffolded Unit Model
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 mt-4">
          Grade 3 Unit 1: The Art of Information Writing
        </h1>
        <p className="text-slate-600 mt-3 leading-relaxed">
          This model shows how workshop materials can support Grade 3 Unit 1 by organizing
          the information-writing scaffolds teachers need at each WIDA level.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/writing-workshop-grade2-unit1">
            <Button variant="outline" className="bg-white">Grade 2 Unit 1</Button>
          </Link>
          <Button className="bg-blue-700 hover:bg-blue-800">Grade 3 Unit 1</Button>
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
              Students write to teach readers about a topic using facts, structure, and clear explanation.
              In EAL planning, the topic stays the same, but the level of explanation, organization,
              and independence changes by WIDA level.
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
              This is a useful unit for teaching how to move from naming and listing into
              actual explanation. That makes it a strong bridge unit for multilingual writers.
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
