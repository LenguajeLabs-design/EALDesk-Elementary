import React from "react";
import { Link } from "wouter";
import {
  Rocket, Zap, Lightbulb, CheckCircle2, Users, QrCode, MessageSquare, FileText,
  Globe2, BookOpen, ExternalLink, Clock, BookMarked, PencilLine, ArrowRight, Mail, Linkedin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pathwayCards = [
  {
    icon: BookMarked,
    title: "Reader's\nWorkshop",
    text: "Plan supports for retelling, comprehension talk, response to reading, and partner discussion.",
    accent: "text-emerald-600",
    href: "/readers-workshop",
  },
  {
    icon: PencilLine,
    title: "Writer's\nWorkshop",
    text: "Plan supports for idea generation, oral rehearsal, drafting, revising, and writing conferences.",
    accent: "text-sky-600",
    href: "/writers-workshop",
  },
];

const levels = [
  {
    level: "WIDA 1 – Entering",
    subtitle: "Beginning to learn English",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    items: ["Use visuals and gestures", "Accept drawing, pointing, and labels", "Allow L1 and translation support", "Keep workshop routines predictable"],
    href: "/wida-levels",
  },
  {
    level: "WIDA 2 – Emerging",
    subtitle: "Using simple words & phrases",
    bg: "bg-amber-50",
    border: "border-amber-100",
    items: ["Use sentence stems", "Accept short oral and written responses", "Repeat and model routines", "Provide word banks and anchor charts"],
    href: "/wida-levels",
  },
  {
    level: "WIDA 3 – Developing",
    subtitle: "Using sentences to communicate",
    bg: "bg-violet-50",
    border: "border-violet-100",
    items: ["Use discussion stems", "Prompt elaboration", "Support text evidence", "Provide structured planning tools"],
    href: "/wida-levels",
  },
  {
    level: "WIDA 4 – Expanding",
    subtitle: "Using academic language",
    bg: "bg-blue-50",
    border: "border-blue-100",
    items: ["Use evidence-based responses", "Encourage craft language", "Promote academic discussion", "Support independent revision"],
    href: "/wida-levels",
  },
  {
    level: "WIDA 5 – Bridging",
    subtitle: "Refining academic language",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: ["Prompt synthesis", "Refine evidence and elaboration", "Support precise vocabulary", "Use peer-led conferences"],
    href: "/wida-levels",
  },
  {
    level: "WIDA 6 – Reaching",
    subtitle: "Extending independent language",
    bg: "bg-slate-50",
    border: "border-slate-200",
    items: ["Extend discussion leadership", "Refine voice and register", "Encourage independent transfer", "Offer enrichment tasks"],
    href: "/wida-levels",
  },
];

const quickPanels = [
  {
    icon: BookOpen,
    title: "NEED VOCABULARY?",
    text: "Find workshop vocabulary, discussion language, and literacy supports.",
    button: "Go to Vocabulary Bank",
    href: "/strategies",
    external: false,
  },
  {
    icon: Globe2,
    title: "TRANSLATION GUIDELINES",
    text: "Best practices for using translators and translations in class and assessments.",
    button: "View Guidelines",
    href: "/translations",
    external: false,
  },
  {
    icon: FileText,
    title: "FULL STRATEGY\nREFERENCE",
    text: "Browse the complete set of supports and examples in one place.",
    button: "Open Reference",
    href: "/strategies",
    external: false,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-10 pb-8">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-start gap-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 leading-tight">
              Support Multilingual Learners<br />in Reader's and Writer's Workshop
            </h2>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1.5 text-blue-800 font-bold text-xs mt-1">
              <BookMarked className="h-3.5 w-3.5" /> Elementary Literacy
            </span>
          </div>
          <p className="mt-4 text-base text-blue-950/80">Quick, practical language supports for mini-lessons, conferring, partner talk, and independent work.</p>
          <div className="mt-5 border border-blue-200 bg-blue-50 rounded-xl p-4 flex gap-4 items-start max-w-2xl">
            <Clock className="h-7 w-7 text-blue-700 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed">
              Use this site while planning reading and writing workshop to quickly match supports to the task and your students' WIDA levels.
            </p>
          </div>
        </div>
        <div className="absolute right-6 top-8 hidden xl:block opacity-90 pointer-events-none">
          <div className="relative h-44 w-44">
            <BookMarked className="h-32 w-32 text-emerald-600 absolute right-3 top-6" strokeWidth={1.2} />
            <div className="absolute right-16 top-26 h-10 w-10 rounded-full bg-emerald-500/50" />
            <div className="absolute right-8 top-12 h-8 w-8 rounded-full bg-sky-300/70" />
            <div className="absolute right-0 top-0 text-4xl">📚</div>
          </div>
        </div>
      </section>

      <div className="grid xl:grid-cols-[1fr_260px] gap-8">
        <div>

          {/* Task Cards */}
          <section>
            <div className="flex items-center gap-2 text-blue-950 font-bold mb-4 text-sm">
              <Rocket className="h-4 w-4" />
              START HERE: Choose your workshop path.
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {pathwayCards.map(({ icon: Icon, title, text, accent, href }) => (
                <Link key={href} href={href}>
                  <Card className="rounded-xl shadow-sm border-slate-200 hover:shadow-md transition-shadow bg-white cursor-pointer h-full">
                    <CardContent className="p-6 flex flex-col justify-between gap-5 min-h-64">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-extrabold text-blue-950 whitespace-pre-line leading-tight">{title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed mt-3 max-w-md">{text}</p>
                        </div>
                        <Icon className={`h-14 w-14 ${accent} shrink-0`} strokeWidth={1.8} />
                      </div>
                      <span className="font-semibold text-blue-700 text-sm inline-flex items-center gap-2">
                        Open pathway <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Planning Flow + Remember */}
          <div className="grid xl:grid-cols-[1fr_220px] gap-5 mt-7">
            <Card className="rounded-xl border-amber-200 bg-amber-50/80 shadow-sm">
              <CardContent className="p-5">
                <div className="font-extrabold text-slate-900 flex items-center gap-2 text-sm mb-4">
                  <Zap className="h-5 w-5 text-amber-500 fill-amber-500" /> 2-MINUTE PLANNING FLOW
                </div>
                <div className="grid grid-cols-4 gap-3 text-center">
                  {[
                    { num: 1, title: "What is the workshop task?", desc: "Read, talk, write, retell, or respond?" },
                    { num: 2, title: "What language is needed?", desc: "Word, phrase, sentence, or paragraph?" },
                    { num: 3, title: "Choose ONE support", desc: "Pick a strategy from the tool." },
                    { num: 4, title: "Model & Check", desc: "Teach it, rehearse it, and listen for transfer." },
                  ].map((step, i) => (
                    <div key={step.num} className="relative">
                      <div className="text-3xl font-black text-slate-900">{step.num}</div>
                      <div className="font-bold text-xs mt-1 text-slate-800 leading-tight">{step.title}</div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                      {i < 3 && (
                        <div className="hidden xl:block absolute top-3 -right-2 text-slate-400 font-bold text-sm">→</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-emerald-200 bg-emerald-50 shadow-sm">
              <CardContent className="p-5">
                <div className="font-extrabold text-emerald-900 flex items-center gap-2 text-sm mb-3">
                  <Lightbulb className="h-4 w-4" /> REMEMBER
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {["Model the language", "Use visuals and mentor texts", "Rehearse before writing", "Give wait time", "Check for transfer"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* WIDA Level Grid */}
          <section className="mt-8">
            <div className="flex items-center gap-2 text-blue-950 font-bold mb-4 text-sm">
              <Users className="h-4 w-4" /> SUPPORT BY WIDA LEVEL <span className="font-normal">(At a glance)</span>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              {levels.map((l, i) => (
                <div key={l.level} className={`${l.bg} ${l.border} ${i < levels.length - 1 ? "border-r" : ""} p-5`}>
                  <h3 className="font-extrabold text-blue-950 text-xs leading-tight">{l.level}</h3>
                  <p className="text-xs text-slate-600 mt-1.5 mb-4">{l.subtitle}</p>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {l.items.map(item => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <Link href={l.href} className="mt-5 block text-xs font-semibold text-blue-700 hover:underline">
                    See more strategies →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* QR Box */}
          <Card className="mt-8 rounded-xl bg-blue-50/70 border-blue-100 shadow-sm">
            <CardContent className="p-6 flex flex-wrap items-center gap-8">
              <div>
                <div className="font-extrabold text-blue-950 text-sm">NEED SOMETHING QUICK?</div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Use the quick tools to find<br />reading and writing supports fast.</p>
              </div>
              <div className="h-20 w-20 bg-white rounded-md border border-slate-200 grid place-items-center flex-shrink-0">
                <QrCode className="h-16 w-16 text-slate-800" />
              </div>
              <div className="flex items-center gap-5 text-center text-xs text-slate-600 flex-wrap">
                <div>
                  <MessageSquare className="h-8 w-8 mx-auto text-sky-600" />
                  <p className="mt-1.5">Choose a workshop task<br />&amp; WIDA level</p>
                </div>
                <span className="text-slate-400 font-bold">→</span>
                <div>
                  <FileText className="h-8 w-8 mx-auto text-blue-600" />
                  <p className="mt-1.5">Get sentence frames,<br />vocabulary &amp; supports</p>
                </div>
                <span className="text-slate-400 font-bold">→</span>
                <div>
                  <CheckCircle2 className="h-8 w-8 mx-auto text-emerald-600" />
                  <p className="mt-1.5">Use it in your<br />workshop!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-700">About Lenguaje Labs</div>
                <h2 className="mt-2 text-2xl font-extrabold text-blue-950">Practical tools for multilingual learner support</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Lenguaje Labs builds classroom-ready planning tools for elementary teachers who need fast, usable language supports for reading workshop, writing workshop, translation decisions, and WIDA-aligned scaffolding.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:LenguajeLabs@proton.me" className="inline-flex h-10 items-center rounded-md border border-blue-200 bg-blue-50 px-4 text-sm font-semibold text-blue-800 hover:bg-blue-100">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
                <a href="https://www.linkedin.com/company/lenguaje-labs" target="_blank" rel="noreferrer" className="inline-flex h-10 items-center rounded-md border border-blue-200 bg-white px-4 text-sm font-semibold text-blue-800 hover:bg-blue-50">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* Quick Panel */}
        <aside className="space-y-4 mt-0">
          {quickPanels.map(({ icon: Icon, title, text, button, href, external }) => (
            <Card key={title} className="rounded-xl border-blue-200 bg-blue-50/60 shadow-sm">
              <CardContent className="p-5">
                <div className="font-extrabold text-blue-950 flex items-center gap-2 text-xs mb-3">
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-pre-line">{title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                <Link href={href}>
                  <Button variant="outline" size="sm" className="mt-4 border-blue-300 text-blue-800 bg-white hover:bg-blue-50 text-xs h-8">
                    {button}
                    {external && <ExternalLink className="h-3 w-3 ml-1.5" />}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </aside>
      </div>

      <footer className="mt-12 py-8 text-xs text-slate-500 border-t border-slate-200 space-y-2">
        <p>
          Contact: <a href="mailto:LenguajeLabs@proton.me" className="font-semibold text-blue-700 hover:underline">LenguajeLabs@proton.me</a>
          <span className="px-2 text-slate-300">|</span>
          <a href="https://www.linkedin.com/company/lenguaje-labs" target="_blank" rel="noreferrer" className="font-semibold text-blue-700 hover:underline">LinkedIn</a>
        </p>
        <p>Built around the WIDA framework to support multilingual learners in elementary reading and writing classrooms.</p>
        <p>
          WIDA is a registered trademark of the Board of Regents of the University of Wisconsin System. This site is an independent classroom planning resource and is not affiliated with, endorsed by, or sponsored by WIDA.
        </p>
        <p>Version 1.0 &nbsp;|&nbsp; Updated May 2026</p>
      </footer>
    </div>
  );
}
