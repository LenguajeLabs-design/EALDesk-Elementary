import React from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  FileText,
  Layers3,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const cyclePhases = [
  {
    phase: "1. Plan",
    text: "Identify the genre, the content goal, and the language students will need to participate successfully.",
    tone: "from-amber-100 to-orange-100",
  },
  {
    phase: "2. Build Knowledge",
    text: "Give students shared experiences, visuals, and hands-on learning before asking them to write.",
    tone: "from-orange-100 to-rose-100",
  },
  {
    phase: "3. Deconstruct",
    text: "Study mentor texts together so students can notice structure, vocabulary, and meaning-making choices.",
    tone: "from-sky-100 to-cyan-100",
  },
  {
    phase: "4. Jointly Construct",
    text: "Write a collaborative class draft so students rehearse language with teacher support before independence.",
    tone: "from-cyan-100 to-emerald-100",
  },
  {
    phase: "5. Independent Writing",
    text: "Students write on their own with scaffolds that still support precision, organization, and transfer.",
    tone: "from-emerald-100 to-lime-100",
  },
  {
    phase: "6. Reflection",
    text: "Use student work to analyze what transferred and what the next teaching cycle should strengthen.",
    tone: "from-fuchsia-100 to-violet-100",
  },
];

const resourceCards = [
  {
    title: "Infographic",
    text: "A fast visual overview of the six-phase cycle and how it moves students from assigning to teaching.",
    href: `${import.meta.env.BASE_URL}teaching-learning-cycle-infographic.png`,
    icon: Layers3,
    action: "Open visual",
    thumbnail: `${import.meta.env.BASE_URL}teaching-learning-cycle-infographic.png`,
    thumbnailAlt: "Preview of the teaching and learning cycle infographic",
  },
  {
    title: "Video",
    text: "Use the recorded walkthrough to introduce the framework during planning meetings or PD sessions.",
    href: "https://www.youtube.com",
    icon: PlayCircle,
    action: "Use local video in page planning",
    disabled: true,
    thumbnail: `${import.meta.env.BASE_URL}teaching-content-writing-cover.png`,
    thumbnailAlt: "Preview of the teaching content writing video cover",
  },
  {
    title: "Blueprint PDF",
    text: "Keep the science writing blueprint nearby when you want a printable reference for content writing instruction.",
    href: `${import.meta.env.BASE_URL}the-science-writing-blueprint.pdf`,
    icon: FileText,
    action: "Open PDF",
    previewLabel: "PDF Reference",
  },
];

const planningMoves = [
  "Start with the genre and content demand, not just the final writing product.",
  "Build oral language and knowledge before expecting academic writing precision.",
  "Use mentor texts and shared writing to make the invisible parts of writing teachable.",
  "Treat scaffolds as bridges to independence, not permanent supports.",
];

const citationLinks = [
  {
    label: "Dr. Ruslana Westerlund",
    href: "https://www.linkedin.com/in/drruslana/",
    detail: "Trans-disciplinary literacy and multilingual education leadership",
  },
  {
    label: "Colorin Colorado: Teaching Writing in the Content Areas",
    href: "https://www.colorincolorado.org/article/teaching-writing-content-areas-research-practice",
    detail: "Research-to-practice article used to shape the site framing",
  },
];

export default function TeachingLearningCycle() {
  const infographicSrc = `${import.meta.env.BASE_URL}teaching-learning-cycle-infographic.png`;
  const videoCoverSrc = `${import.meta.env.BASE_URL}teaching-content-writing-cover.png`;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-orange-400 p-8 text-white shadow-xl md:p-10">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_45%)] lg:block" />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
              <Sparkles className="h-3.5 w-3.5" />
              Writer's Workshop Planning
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              Teaching and learning cycle for content writing
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              This page helps EAL teachers turn writing workshop into a teachable cycle:
              building knowledge, unpacking mentor texts, jointly constructing language,
              and moving students toward independent academic writing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/writing-workshop-toolkit">
                <Button className="bg-white text-fuchsia-700 hover:bg-white/90">
                  Open Writing Toolkit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/quick-tools?workshop=writer&task=writing">
                <Button variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/15">
                  Open Quick Tools
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/30 bg-white/90 p-3 shadow-2xl">
            <img
              src={infographicSrc}
              alt="Teaching and learning cycle infographic"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cyclePhases.map(({ phase, text, tone }) => (
          <Card key={phase} className="overflow-hidden rounded-3xl border-white/60 shadow-sm">
            <CardContent className={`h-full bg-gradient-to-br ${tone} p-6`}>
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{phase}</div>
              <p className="mt-4 text-base font-semibold leading-relaxed text-slate-800">{text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Card className="rounded-3xl border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              <BookOpen className="h-4 w-4 text-fuchsia-600" />
              Why this matters
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-blue-950">
              Writing is not just speech written down
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Students often struggle when writing is assigned without genre instruction,
              knowledge-building, or visible language models. The cycle gives teachers a way
              to explicitly teach the academic language hidden inside strong writing.
            </p>
            <div className="mt-6 space-y-3">
              {planningMoves.map((move) => (
                <div key={move} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-fuchsia-500" />
                  <p className="text-sm leading-relaxed text-slate-700">{move}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-amber-50 via-white to-fuchsia-50 p-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                <Users className="h-4 w-4 text-amber-600" />
                Teacher-facing overview
              </div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-blue-950">
                Make the teaching cycle visible for teachers and students
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use the infographic to introduce the six phases quickly, then use the video to
                support planning conversations, team learning, or professional development around
                content writing instruction.
              </p>
            </div>
            <div className="p-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
                <img
                  src={videoCoverSrc}
                  alt="Teaching content writing video cover"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
          <ClipboardList className="h-4 w-4 text-sky-600" />
          Resources
        </div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950">
          Open the resource that matches the kind of support you need
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          Click the infographic for a quick overview, the PDF for a printable reference, and the video support card when you want to extend this into team learning or professional development.
        </p>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {resourceCards.map(({ title, text, href, icon: Icon, action, disabled, thumbnail, thumbnailAlt, previewLabel }) => {
            const body = (
              <Card className="h-full rounded-3xl border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  {thumbnail ? (
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                      <img
                        src={thumbnail}
                        alt={thumbnailAlt}
                        className="h-36 w-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-5">
                      <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-[2rem] bg-fuchsia-100/60" />
                      <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                        <FileText className="h-3.5 w-3.5" />
                        {previewLabel}
                      </div>
                      <div className="mt-6 max-w-[12rem] text-lg font-extrabold leading-tight text-blue-950">
                        The Science Writing Blueprint
                      </div>
                    </div>
                  )}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <Icon className="h-6 w-6 text-fuchsia-600" />
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight text-blue-950">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    {action}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            );

            if (disabled) {
              return <div key={title}>{body}</div>;
            }

            return (
              <a key={title} href={href} target="_blank" rel="noreferrer">
                {body}
              </a>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 md:p-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-blue-950">
            Credits and citation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            This page was shaped to honor and share the multilingual writing and literacy work
            that informed it. These voices should stay visible wherever we use the framework.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {citationLinks.map(({ label, href, detail }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="text-lg font-bold text-blue-950">{label}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
