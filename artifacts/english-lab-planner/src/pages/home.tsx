import React from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BarChart3,
  BookMarked,
  BookOpen,
  CheckCircle2,
  FolderKanban,
  Globe2,
  Lightbulb,
  Orbit,
  Linkedin,
  Mail,
  PencilLine,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const startHereCards = [
  {
    icon: Zap,
    title: "I Need Support For A Lesson Happening Now",
    text: "Go straight to quick tools when you walk into a classroom and need one teaching move, one sentence frame, or one immediate scaffold.",
    button: "Open Quick Tools",
    href: "/quick-tools",
    accent: "text-amber-600",
  },
  {
    icon: BookOpen,
    title: "I Want Help Choosing A Teaching Move",
    text: "Use the strategies page to match the language task, WIDA level, and support need to a practical classroom scaffold.",
    button: "Open Strategies",
    href: "/strategies",
    accent: "text-sky-600",
  },
  {
    icon: FolderKanban,
    title: "I Am Planning Writing Workshop",
    text: "Use the writing toolkit to see unit goals, language demands, scaffolds, models, and WIDA differentiation in one place.",
    button: "Open Writing Toolkit",
    href: "/writing-workshop-toolkit",
    accent: "text-blue-700",
  },
  {
    icon: Orbit,
    title: "I Want A Writing Teaching Framework",
    text: "Use the teaching and learning cycle page when you want a bigger planning structure for building knowledge, joint construction, and transfer.",
    button: "Open Teaching Cycle",
    href: "/teaching-learning-cycle",
    accent: "text-fuchsia-600",
  },
  {
    icon: BarChart3,
    title: "I Need WIDA Guidance",
    text: "Use the WIDA section when you want a clearer picture of what students at each level can do and what support fits best.",
    button: "Open WIDA Levels",
    href: "/wida-levels",
    accent: "text-emerald-600",
  },
];

const planningSteps = [
  {
    step: "1",
    title: "Read The Task",
    text: "What are students being asked to do right now: retell, explain, discuss, write, or respond?",
  },
  {
    step: "2",
    title: "Name The Language Need",
    text: "Decide whether the student needs help with vocabulary, sentence structure, organization, oral rehearsal, or confidence.",
  },
  {
    step: "3",
    title: "Choose One Support",
    text: "Pick one scaffold, model it clearly, and listen for whether the student can begin transferring it independently.",
  },
];

const pathwayCards = [
  {
    icon: BookMarked,
    title: "Reader's Workshop",
    text: "Plan supports for comprehension, retelling, response to reading, oral discussion, vocabulary, and text-based thinking.",
    href: "/readers-workshop",
    accent: "text-emerald-600",
  },
  {
    icon: PencilLine,
    title: "Writer's Workshop",
    text: "Plan supports for idea generation, oral rehearsal, drafting, revising, conferences, and genre-specific language.",
    href: "/writers-workshop",
    accent: "text-sky-600",
  },
];

const firstStopPanels = [
  {
    icon: Zap,
    title: "Quick Tools",
    text: "Best first stop when you need sentence frames, language supports, and fast classroom moves right away.",
    button: "Start Here",
    href: "/quick-tools",
  },
  {
    icon: BookOpen,
    title: "Strategies",
    text: "Best first stop when you know the lesson demand but want help choosing the right scaffold.",
    button: "Choose A Move",
    href: "/strategies",
  },
  {
    icon: FolderKanban,
    title: "Writing Toolkit",
    text: "Best first stop when you are planning writer's workshop and want a scaffolded unit view.",
    button: "Open Toolkit",
    href: "/writing-workshop-toolkit",
  },
  {
    icon: Orbit,
    title: "Teaching Cycle",
    text: "Best first stop when you want the full teaching and learning cycle for content writing and workshop planning.",
    button: "Open Cycle",
    href: "/teaching-learning-cycle",
  },
  {
    icon: Globe2,
    title: "Translations & Tools",
    text: "Best first stop when you want help using translation support thoughtfully and strategically.",
    button: "View Guidance",
    href: "/translations",
  },
];

const levels = [
  {
    level: "WIDA 1 – Entering",
    subtitle: "Beginning to learn English",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    items: [
      "Use visuals, gestures, and oral modeling",
      "Accept drawing, pointing, labels, and shared language",
      "Keep tasks short and routines predictable",
    ],
    href: "/wida-levels",
  },
  {
    level: "WIDA 2 – Emerging",
    subtitle: "Using simple words and phrases",
    bg: "bg-amber-50",
    border: "border-amber-100",
    items: [
      "Use sentence stems and short patterned responses",
      "Provide word banks and repeated task language",
      "Rehearse orally before writing",
    ],
    href: "/wida-levels",
  },
  {
    level: "WIDA 3 – Developing",
    subtitle: "Using connected sentences",
    bg: "bg-violet-50",
    border: "border-violet-100",
    items: [
      "Prompt explanation, elaboration, and evidence",
      "Support paragraph and discussion structure",
      "Use strategy tools to move from naming to teaching",
    ],
    href: "/wida-levels",
  },
  {
    level: "WIDA 4 – Expanding",
    subtitle: "Using more academic language",
    bg: "bg-blue-50",
    border: "border-blue-100",
    items: [
      "Push for precision, interpretation, and independence",
      "Support academic language and stronger revision",
      "Reduce scaffolds gradually as language transfers",
    ],
    href: "/wida-levels",
  },
];

const helpAreas = [
  {
    icon: Target,
    title: "What This Site Is For",
    text: "EALDesk helps teachers support multilingual learners during reading and writing workshop without guessing what to do in the moment.",
  },
  {
    icon: Users,
    title: "Who It Helps",
    text: "It is for EAL teachers, co-teachers, homeroom teachers, and anyone who needs practical language support ideas during planning or live instruction.",
  },
  {
    icon: Lightbulb,
    title: "How It Helps",
    text: "It helps you match the task, choose the scaffold, and use language support strategically instead of becoming a general helper.",
  },
];

export default function Home() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50/70 to-blue-50 p-8 shadow-sm md:p-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-bold text-sky-800">
            <Sparkles className="h-3.5 w-3.5" />
            Start Here
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-blue-950 md:text-6xl">
            EALDesk helps teachers support multilingual learners strategically
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
            Use EALDesk when you are planning a workshop lesson, walking into a classroom, or trying to decide how to support one student quickly and purposefully.
            This site helps you choose the right scaffold for the language demand in front of you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quick-tools">
              <Button className="bg-blue-700 hover:bg-blue-800">
                Get Help Fast
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/strategies">
              <Button variant="outline" className="bg-white">
                Choose A Teaching Move
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {helpAreas.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/80 bg-white/85 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                <Icon className="h-4 w-4 text-sky-600" />
                {title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
          <Rocket className="h-4 w-4 text-sky-600" />
          Start Here By Need
        </div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
          Where should a teacher begin today?
        </h2>
        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
          Pick the path that matches your immediate need. The goal is to help you get oriented quickly, not to make you hunt through the whole site.
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {startHereCards.map(({ icon: Icon, title, text, button, href, accent }) => (
            <Link key={href} href={href}>
              <Card className="h-full cursor-pointer rounded-2xl border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col gap-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-extrabold leading-tight text-blue-950">{title}</h3>
                    <Icon className={`h-8 w-8 shrink-0 ${accent}`} />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    {button}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-2xl border-amber-200 bg-amber-50/80 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              <Zap className="h-4 w-4 text-amber-500" />
              How To Use EALDesk
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950">
              A quick planning routine
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {planningSteps.map((step) => (
                <div key={step.step} className="rounded-2xl border border-amber-200 bg-white/80 p-4">
                  <div className="text-3xl font-black text-slate-900">{step.step}</div>
                  <div className="mt-2 text-sm font-bold text-slate-900">{step.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-emerald-200 bg-emerald-50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              What Good Use Looks Like
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950">
              Strategic, not just helpful
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700">
              {[
                "Choose one scaffold tied to the lesson demand instead of many random supports.",
                "Model the language students need before expecting independent reading, writing, or discussion.",
                "Use oral rehearsal and visuals to make the language accessible.",
                "Reduce the scaffold gradually so students move toward independent language use.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
          <BookMarked className="h-4 w-4 text-sky-600" />
          Choose Your Workshop Path
        </div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
          Start from reading or writing workshop
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {pathwayCards.map(({ icon: Icon, title, text, href, accent }) => (
            <Link key={href} href={href}>
              <Card className="h-full cursor-pointer rounded-2xl border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="flex h-full flex-col gap-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-extrabold text-blue-950">{title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">{text}</p>
                    </div>
                    <Icon className={`h-12 w-12 shrink-0 ${accent}`} strokeWidth={1.8} />
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Open pathway
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-4">
        {firstStopPanels.map(({ icon: Icon, title, text, button, href }) => (
          <Card key={title} className="rounded-2xl border-blue-200 bg-blue-50/60 shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-sm font-extrabold text-blue-950">
                <Icon className="h-4 w-4 shrink-0" />
                {title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
              <Link href={href}>
                <Button variant="outline" size="sm" className="mt-4 h-8 border-blue-300 bg-white text-xs text-blue-800 hover:bg-blue-50">
                  {button}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
          <Users className="h-4 w-4 text-sky-600" />
          WIDA At A Glance
        </div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 md:text-3xl">
          Fast reminders by proficiency level
        </h2>
        <div className="mt-5 grid overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:grid-cols-2 xl:grid-cols-4">
          {levels.map((level, index) => (
            <div
              key={level.level}
              className={`${level.bg} ${level.border} p-5 ${index < levels.length - 1 ? "border-r" : ""}`}
            >
              <h3 className="text-xs font-extrabold leading-tight text-blue-950">{level.level}</h3>
              <p className="mb-4 mt-1.5 text-xs text-slate-600">{level.subtitle}</p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {level.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link href={level.href} className="mt-5 block text-xs font-semibold text-blue-700 hover:underline">
                See more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Card className="overflow-hidden rounded-2xl border-slate-200 bg-white shadow-sm">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="border-b border-slate-200 p-8 md:p-10 lg:border-b-0 lg:border-r">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                  About Lenguaje Labs
                </div>
                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-lg">
                    <img
                      src={`${import.meta.env.BASE_URL}lenguaje-labs-logo.jpg`}
                      alt="Lenguaje Labs logo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
                      Building thoughtful language tools for real classrooms
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
                      Lenguaje Labs was created at the intersection of language teaching and emerging technology.
                      We build tools that make learning more accessible and more practical for educators, students, and families across different contexts and communities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50/70 p-8 md:p-10">
                <h3 className="text-lg font-bold text-blue-950">Connect</h3>
                <div className="mt-5 space-y-3">
                  <a
                    href="mailto:lenguajelabs@proton.me"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <Mail className="h-4 w-4 text-blue-700" />
                    <span className="text-sm font-medium">lenguajelabs@proton.me</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/federico-orozco-687b5431"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <Linkedin className="h-4 w-4 text-blue-700" />
                    <span className="text-sm font-medium">LinkedIn profile</span>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="space-y-1 border-t border-slate-200 py-8 text-xs text-slate-400">
        <p>
          Contact:{" "}
          <a className="text-blue-700 hover:underline" href="mailto:lenguajelabs@proton.me">
            lenguajelabs@proton.me
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://www.linkedin.com/in/federico-orozco-687b5431"
            target="_blank"
            rel="noreferrer"
          >
            Federico Orozco
          </a>
        </p>
        <p>
          This educator-created tool references and adapts concepts from the WIDA English Language Development Standards Framework.
        </p>
        <p>
          WIDA English Language Development Standards Framework, Copyright 2020 Board of Regents of the University of Wisconsin System.{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://wida.wisc.edu"
            target="_blank"
            rel="noreferrer"
          >
            wida.wisc.edu
          </a>
        </p>
        <p>
          This tool is not affiliated with, reviewed by, sponsored by, or endorsed by WIDA.
        </p>
        <p>Version 1.0 &nbsp;|&nbsp; Updated May 2026</p>
      </footer>
    </div>
  );
}
