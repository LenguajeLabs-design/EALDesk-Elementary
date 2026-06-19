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
  "Recount a true small moment with a clear beginning, middle, and end",
  "Use action, feeling, and dialogue language to bring the moment to life",
  "Zoom in on important details instead of listing events too quickly",
  "Help the reader understand why the moment mattered",
  "Use transition language to guide the story across time",
];

const levelScaffolds = [
  {
    level: "WIDA 1-2",
    title: "Entering and Emerging",
    use: "Students need heavy support, oral rehearsal, sequencing help, and simple patterned narrative writing.",
    writing: [
      "Accept sketches, oral retell, sentence strips, and jointly constructed writing",
      "Use shared writing before independent writing",
      "Provide a beginning-middle-end frame with blanks or choices",
      "Let students orally rehearse with a partner before writing",
    ],
    speaking: [
      "First, ___.",
      "Then, ___.",
      "I felt ___.",
    ],
    vocabulary: [
      "Teach 4-6 story words with pictures",
      "Use word banks for actions, feelings, and transition words",
      "Reuse the same vocabulary in speaking and writing",
    ],
    frames: [
      "One day, ___.",
      "First, ___.",
      "Then, ___.",
      "I felt ___.",
    ],
  },
  {
    level: "WIDA 3",
    title: "Developing",
    use: "Students are ready for connected sentences, short paragraphs, and more explicit storytelling with detail.",
    writing: [
      "Model a focused small moment with a clear sequence",
      "Prompt students to add dialogue, thoughts, or feelings",
      "Use graphic organizers for beginning, middle, end, and heart of the story",
      "Support revision with one clear focus such as stretching the most important part",
    ],
    speaking: [
      "The important part was ___.",
      "I remember ___.",
      "This shows ___.",
    ],
    vocabulary: [
      "Teach narrative craft words such as detail, moment, feeling, dialogue, and transition",
      "Use next, suddenly, after that, because, and finally",
      "Encourage students to borrow language from mentor stories",
    ],
    frames: [
      "The moment started when ___.",
      "After that, ___.",
      "I said, \"___.\"",
      "This mattered because ___.",
    ],
  },
  {
    level: "WIDA 4",
    title: "Expanding",
    use: "Students can write fuller narratives and should start using stronger elaboration, pacing, and reflective meaning.",
    writing: [
      "Push for stronger pacing, elaboration, and reflective ending",
      "Model how writers stretch the most important scene",
      "Prompt students to revise for clarity, detail, and voice",
      "Use peer feedback focused on story meaning and craft",
    ],
    speaking: [
      "The heart of the story is ___.",
      "This moment matters because ___.",
      "The writer shows this by ___.",
    ],
    vocabulary: [
      "Teach precise verbs, feeling words, and narrative craft language",
      "Encourage students to choose stronger verbs and details",
      "Use mentor texts to highlight narrative craft",
    ],
    frames: [
      "The most important moment was ___.",
      "This reveals ___.",
      "The writer helps the reader feel ___.",
      "In the end, this mattered because ___.",
    ],
  },
];

const conferencePrompts = [
  "Where is the heart of your story?",
  "Which part can you stretch so the reader can see it better?",
  "What did you think, say, or feel in that moment?",
  "Can you say it first before you write it?",
];

const quickAssessment = [
  "Can the student recount a clear small moment?",
  "Can the student sequence events in a way the reader can follow?",
  "Can the student include one feeling, thought, or bit of dialogue?",
  "Can the student show why the moment mattered?",
];

const relatedDocuments = [
  {
    title: "Grade 4 Narrative Scoring Rubric",
    purpose: "Use this for quick end-of-unit scoring and for deciding one clear next step in narrative writing.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_G4_ScoringRubric.pdf",
  },
  {
    title: "Grade 4 Narrative Annotated Sample",
    purpose: "Use this to show teachers what student growth can look like in a personal narrative.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_G4_AnnotatedWritingDevelopedThroughProgression.pdf",
  },
  {
    title: "Grade 4 Narrative Checklist",
    purpose: "Use this for student self-check and teacher conferencing during drafting and revision.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_G4_WritingChecklist_Color.pdf",
  },
  {
    title: "Narrative Learning Progression",
    purpose: "Use this to see what stronger narrative writing can look like across a progression.",
    file: "G35_CALK_EN_NL_WUOS3_WP_Narrative_LearningProgression.pdf",
  },
];

export default function WritingWorkshopToolkit() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sky-800 text-xs font-bold">
          <FolderKanban className="h-3.5 w-3.5" /> Scaffolded Unit Model
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 mt-4">
          Grade 4 Unit 1: Spinning True Stories into Gold (Book 1)
        </h1>
        <p className="text-slate-600 mt-3 leading-relaxed">
          This model shows how workshop materials can support a real unit page that answers the
          teacher question: what should I do in this narrative unit at each WIDA level?
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/writing-workshop-grade2-unit1">
            <Button variant="outline" className="bg-white">Grade 2 Unit 1</Button>
          </Link>
          <Link href="/writing-workshop-grade3-unit1">
            <Button variant="outline" className="bg-white">Grade 3 Unit 1</Button>
          </Link>
          <Button className="bg-blue-700 hover:bg-blue-800">Grade 4 Unit 1</Button>
          <Link href="/writing-workshop-grade5">
            <Button variant="outline" className="bg-white">Grade 5 Units</Button>
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
              Students write a true small-moment narrative that feels meaningful, focused, and
              detailed. In EAL planning, the story type stays the same while the language demand
              changes by WIDA level.
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
              The workshop files are most helpful when they sit behind a page like this. Teachers
              should see the scaffolds first, then open the supporting documents only if they need
              more detail.
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
              These help teachers keep conferences focused, narrative-specific, and language-friendly.
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
