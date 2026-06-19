import React, { useMemo, useState } from "react";
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

type UnitScaffold = {
  id: string;
  buttonLabel: string;
  title: string;
  blurb: string;
  planningNote: string;
  languageDemands: string[];
  levelScaffolds: Array<{
    level: string;
    title: string;
    use: string;
    writing: string[];
    speaking: string[];
    vocabulary: string[];
    frames: string[];
  }>;
  conferencePrompts: string[];
  quickAssessment: string[];
  relatedDocuments: Array<{
    title: string;
    purpose: string;
    file: string;
  }>;
};

const grade4Units: UnitScaffold[] = [
  {
    id: "Spinning True Stories into Gold",
    buttonLabel: "Unit 1",
    title: "Grade 4 Unit 1: Spinning True Stories into Gold (Book 1)",
    blurb:
      "This unit supports students in writing a focused true small-moment narrative with detail, pacing, and reflective meaning.",
    planningNote:
      "Students are not just recounting what happened. EAL support should help them zoom in on the heart of the moment, add feeling and dialogue, and show why the experience mattered.",
    languageDemands: [
      "Recount a true small moment with a clear beginning, middle, and end",
      "Use action, feeling, and dialogue language to bring the moment to life",
      "Zoom in on important details instead of listing events too quickly",
      "Help the reader understand why the moment mattered",
      "Use transition language to guide the story across time",
    ],
    levelScaffolds: [
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
        speaking: ["First, ___.", "Then, ___.", "I felt ___."],
        vocabulary: [
          "Teach 4-6 story words with pictures",
          "Use word banks for actions, feelings, and transition words",
          "Reuse the same vocabulary in speaking and writing",
        ],
        frames: ["One day, ___.", "First, ___.", "Then, ___.", "I felt ___."],
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
    ],
    conferencePrompts: [
      "Where is the heart of your story?",
      "Which part can you stretch so the reader can see it better?",
      "What did you think, say, or feel in that moment?",
      "Can you say it first before you write it?",
    ],
    quickAssessment: [
      "Can the student recount a clear small moment?",
      "Can the student sequence events in a way the reader can follow?",
      "Can the student include one feeling, thought, or bit of dialogue?",
      "Can the student show why the moment mattered?",
    ],
    relatedDocuments: [
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
    ],
  },
  {
    id: "Discipline-Based Writing BENDS 1 & 2",
    buttonLabel: "Unit 2",
    title: "Grade 4 Unit 2: Discipline-Based Writing BENDS 1 & 2 (Book 4)",
    blurb:
      "This unit supports students in writing from science or social studies learning using organized explanation, facts, and subject-specific language.",
    planningNote:
      "Students need help turning content learning into clear explanatory writing. EAL support should help them name the topic, group facts, and explain ideas in subject-based language.",
    languageDemands: [
      "Write about a content topic using clear informational structure",
      "Use subject vocabulary accurately in explanations",
      "Group related facts under one main idea",
      "Explain what a detail teaches the reader",
      "Use headings, labels, and topic sentences to organize information",
    ],
    levelScaffolds: [
      {
        level: "WIDA 1-2",
        title: "Entering and Emerging",
        use: "Students need visual support, repeated explanation frames, and shared writing tied to content learning.",
        writing: [
          "Accept labeled diagrams, oral explanation, and jointly written content paragraphs",
          "Use shared writing to turn notes or pictures into simple informational sentences",
          "Provide topic-plus-fact frames with visuals and word banks",
          "Keep the writing focused on one topic and a few clear facts",
        ],
        speaking: ["This is ___.", "It has ___.", "A fact is ___."],
        vocabulary: [
          "Teach topic words with visuals, diagrams, and concrete examples",
          "Use word banks for parts, features, and content facts",
          "Reuse the same subject words across speaking and writing",
        ],
        frames: ["This is ___.", "It has ___.", "A fact is ___.", "This is about ___."],
      },
      {
        level: "WIDA 3",
        title: "Developing",
        use: "Students are ready for short explanatory paragraphs that include a topic sentence, facts, and simple explanation.",
        writing: [
          "Model how to organize topic sentence, facts, and explanation",
          "Prompt students to explain what a fact teaches the reader",
          "Use organizers that separate main idea from supporting details",
          "Support revision by checking grouping and clarity",
        ],
        speaking: [
          "One important idea is ___.",
          "For example, ___.",
          "This helps explain ___.",
        ],
        vocabulary: [
          "Teach words such as explain, detail, example, and concept explicitly",
          "Use repeated content language during oral rehearsal",
          "Encourage students to reuse topic vocabulary accurately",
        ],
        frames: [
          "One important idea is ___.",
          "For example, ___.",
          "This helps explain ___.",
          "Another detail is ___.",
        ],
      },
      {
        level: "WIDA 4",
        title: "Expanding",
        use: "Students can write fuller content pieces and should begin explaining ideas more clearly and independently.",
        writing: [
          "Push for stronger explanation and clearer content-based organization",
          "Model how writers define, describe, and explain ideas in subject writing",
          "Prompt students to use more precise academic wording",
          "Use peer feedback on clarity, accuracy, and organization",
        ],
        speaking: [
          "A key concept is ___.",
          "This detail shows ___.",
          "This matters because ___.",
        ],
        vocabulary: [
          "Teach more precise academic content words and explanation language",
          "Encourage students to use headings and repeated content terms purposefully",
          "Use mentor subject-area texts to highlight explanatory phrasing",
        ],
        frames: [
          "A key concept is ___.",
          "This detail shows ___.",
          "This matters because ___.",
          "This teaches the reader ___.",
        ],
      },
    ],
    conferencePrompts: [
      "What is the main idea you are teaching the reader?",
      "Which facts belong together under that idea?",
      "How can you explain what this detail shows, not just name it?",
      "Can you say the explanation aloud before writing it?",
    ],
    quickAssessment: [
      "Can the student name a clear topic or idea?",
      "Can the student include relevant facts or details?",
      "Can the student explain what the facts mean?",
      "Can the student organize information so the reader can follow it?",
    ],
    relatedDocuments: [
      {
        title: "Discipline-Based Writing Planning Template",
        purpose: "Use this to help students organize main ideas, facts, and explanation before drafting.",
        file: "TBD_grade4_discipline_writing_bends1_2_template.pdf",
      },
      {
        title: "Discipline-Based Writing Checklist",
        purpose: "Use this during conferences to keep explanatory expectations visible.",
        file: "TBD_grade4_discipline_writing_bends1_2_checklist.pdf",
      },
    ],
  },
  {
    id: "Literary Essay: Writing About Fiction",
    buttonLabel: "Unit 3",
    title: "Grade 4 Unit 3: Literary Essay: Writing About Fiction (Book 3)",
    blurb:
      "This unit supports students in writing literary essays about fiction using claims, evidence, and explanation.",
    planningNote:
      "Students need help moving beyond summary. EAL support should help them say what they think about the text, point to evidence, and explain what it shows.",
    languageDemands: [
      "Make a claim about a character, theme, or idea in a fiction text",
      "Choose text evidence that supports the claim",
      "Explain how the evidence connects to the interpretation",
      "Use literary essay vocabulary and analysis language",
      "Organize writing into a clear idea-evidence-explanation structure",
    ],
    levelScaffolds: [
      {
        level: "WIDA 1-2",
        title: "Entering and Emerging",
        use: "Students need oral rehearsal, short repeated analytical frames, and shared claim-and-evidence responses.",
        writing: [
          "Accept oral interpretation, labeled notes, and jointly written claim-and-evidence responses",
          "Use shared reading talk before independent literary writing",
          "Provide simple claim frames tied to one text detail",
          "Keep the writing focused on one idea rather than a full essay structure",
        ],
        speaking: ["I think ___.", "This part shows ___.", "The character is ___."],
        vocabulary: [
          "Teach character words, feeling words, and idea words with examples",
          "Use a small bank of discussion words like think, show, and because",
          "Repeat literary-analysis words during talk before writing",
        ],
        frames: ["I think ___.", "This part shows ___.", "The character is ___.", "This means ___."],
      },
      {
        level: "WIDA 3",
        title: "Developing",
        use: "Students are ready for short literary paragraphs with a claim, example, and simple explanation.",
        writing: [
          "Model how to turn a strong idea into a claim with evidence",
          "Prompt students to explain what the evidence shows",
          "Use boxed paragraph planners for claim, evidence, and explanation",
          "Support revision by checking for meaning instead of summary only",
        ],
        speaking: [
          "My idea is ___ because ___.",
          "One example is ___.",
          "This makes me think ___.",
        ],
        vocabulary: [
          "Teach claim, evidence, example, and interpretation explicitly",
          "Use repeated phrases for pointing to the text",
          "Encourage reuse of academic literary language in discussion and writing",
        ],
        frames: [
          "My idea is ___ because ___.",
          "One example is ___.",
          "This makes me think ___.",
          "This shows ___.",
        ],
      },
      {
        level: "WIDA 4",
        title: "Expanding",
        use: "Students can write fuller literary essays and should start deepening analysis, not just giving an opinion.",
        writing: [
          "Push for stronger interpretation, not just summary",
          "Model how writers connect evidence to a bigger idea about character or theme",
          "Prompt students to elaborate on significance and meaning",
          "Use peer feedback on clarity of claim and quality of explanation",
        ],
        speaking: [
          "The author shows ___ when ___.",
          "This suggests ___.",
          "My interpretation is ___.",
        ],
        vocabulary: [
          "Teach more precise words for analysis such as reveals, suggests, and significance",
          "Encourage students to use academic literary language consistently",
          "Use mentor essays to highlight interpretive phrasing",
        ],
        frames: [
          "The author shows ___ when ___.",
          "This suggests ___.",
          "My interpretation is ___.",
          "This matters because ___.",
        ],
      },
    ],
    conferencePrompts: [
      "What is your big idea about the text?",
      "Which part of the story best supports that idea?",
      "How can you explain what the evidence shows the reader?",
      "Where are you retelling instead of interpreting?",
    ],
    quickAssessment: [
      "Can the student make a clear claim about the text?",
      "Can the student choose a relevant text example?",
      "Can the student explain the example instead of only retelling it?",
      "Can the student organize the idea, evidence, and explanation clearly?",
    ],
    relatedDocuments: [
      {
        title: "Grade 4 Literary Essay Checklist",
        purpose: "Use this during conferences to keep literary essay expectations visible.",
        file: "TBD_grade4_literary_essay_checklist.pdf",
      },
      {
        title: "Grade 4 Literary Essay Rubric",
        purpose: "Use this to assess claims, evidence, and explanation.",
        file: "TBD_grade4_literary_essay_rubric.pdf",
      },
    ],
  },
  {
    id: "Boxes and Bullets: Writing Essays and Arguments",
    buttonLabel: "Unit 4",
    title: "Grade 4 Unit 4: Boxes and Bullets: Writing Essays and Arguments (Book 2)",
    blurb:
      "This unit supports students in organizing essays and arguments with clear claims, reasons, and supporting details.",
    planningNote:
      "Students need structure first. EAL support should help them say the claim, line up reasons, and explain how examples support the opinion or argument.",
    languageDemands: [
      "State a clear opinion or claim",
      "Organize reasons under the claim using an essay structure",
      "Add examples or details that support each reason",
      "Explain how examples connect to the claim",
      "Use linking language to guide the reader through the argument",
    ],
    levelScaffolds: [
      {
        level: "WIDA 1-2",
        title: "Entering and Emerging",
        use: "Students need oral rehearsal, visual essay planning, and short patterned opinion writing.",
        writing: [
          "Accept oral opinion talk, boxes-and-bullets planning, and jointly written claim-and-reason pages",
          "Use shared writing to build one opinion with two simple reasons",
          "Provide opinion frames with choices and visual planning support",
          "Keep the writing focused on structure and clarity",
        ],
        speaking: ["I think ___.", "One reason is ___.", "Another reason is ___."],
        vocabulary: [
          "Teach opinion, reason, and example with visuals and gestures",
          "Use small word banks for agreeing, choosing, and explaining",
          "Repeat because and reason language during rehearsal",
        ],
        frames: ["I think ___.", "One reason is ___.", "Another reason is ___.", "This shows ___."],
      },
      {
        level: "WIDA 3",
        title: "Developing",
        use: "Students are ready for short opinion or argument paragraphs with a clear claim, reason, and simple example.",
        writing: [
          "Model how to organize a claim with supporting reasons and examples",
          "Prompt students to explain how each reason supports the claim",
          "Use graphic organizers that match the boxes-and-bullets structure",
          "Support revision by checking logic and organization",
        ],
        speaking: [
          "My claim is ___ because ___.",
          "One example is ___.",
          "This proves ___.",
        ],
        vocabulary: [
          "Teach claim, reason, evidence, and support explicitly",
          "Use repeated essay language during oral rehearsal and drafting",
          "Encourage reuse of academic argument words",
        ],
        frames: [
          "My claim is ___ because ___.",
          "One example is ___.",
          "This proves ___.",
          "Another reason is ___.",
        ],
      },
      {
        level: "WIDA 4",
        title: "Expanding",
        use: "Students can write fuller essays and should begin strengthening elaboration, formal tone, and reader clarity.",
        writing: [
          "Push for stronger evidence, clearer elaboration, and more formal structure",
          "Model how essay writers connect reasons to examples and explanation",
          "Prompt students to revise for clarity and stronger support",
          "Use peer feedback on organization, reasoning, and voice",
        ],
        speaking: [
          "My argument is ___ because ___.",
          "One important reason is ___.",
          "This supports my claim because ___.",
        ],
        vocabulary: [
          "Teach stronger academic verbs and argument language",
          "Encourage students to use linking words and formal phrasing",
          "Use mentor essays to highlight essay structure and tone",
        ],
        frames: [
          "My argument is ___ because ___.",
          "One important reason is ___.",
          "This supports my claim because ___.",
          "Therefore, ___.",
        ],
      },
    ],
    conferencePrompts: [
      "What are you trying to convince the reader of?",
      "Which reason is your strongest one?",
      "How can you explain how this example supports your idea?",
      "Can you say the essay aloud using your boxes-and-bullets plan first?",
    ],
    quickAssessment: [
      "Can the student state a clear opinion or claim?",
      "Can the student organize reasons under the claim?",
      "Can the student add at least one example or detail to support a reason?",
      "Can the student explain the connection between example and claim?",
    ],
    relatedDocuments: [
      {
        title: "Boxes and Bullets Planning Template",
        purpose: "Use this to help students plan claims, reasons, and supporting details before drafting.",
        file: "TBD_grade4_boxes_bullets_template.pdf",
      },
      {
        title: "Boxes and Bullets Checklist",
        purpose: "Use this during conferences to keep essay structure visible.",
        file: "TBD_grade4_boxes_bullets_checklist.pdf",
      },
    ],
  },
  {
    id: "Discipline-Based Writing BENDS 3 & 4",
    buttonLabel: "Unit 5",
    title: "Grade 4 Unit 5: Discipline-Based Writing BENDS 3 & 4 (Book 4)",
    blurb:
      "This unit supports students in extending content-based writing with more independence, clearer synthesis, and stronger subject-area explanation.",
    planningNote:
      "Students are doing more than listing facts. EAL support should help them explain the bigger idea, connect details, and write with a stronger academic voice across content areas.",
    languageDemands: [
      "Explain content ideas with more independence and structure",
      "Group related facts and connect them to a bigger idea",
      "Use academic language to summarize, explain, and compare ideas",
      "Write clearly from sources, notes, and content learning",
      "Sustain organized explanation across a longer piece of writing",
    ],
    levelScaffolds: [
      {
        level: "WIDA 1-2",
        title: "Entering and Emerging",
        use: "Students need repeated explanation frames, visual note support, and shared writing tied to one content idea at a time.",
        writing: [
          "Accept labeled notes, oral explanation, and jointly written content responses",
          "Use shared writing to turn research or content learning into simple explanatory text",
          "Provide topic-plus-fact frames supported by visuals and word banks",
          "Keep the writing focused on one clear idea and a few matching facts",
        ],
        speaking: ["This is about ___.", "I learned ___.", "A fact is ___."],
        vocabulary: [
          "Teach topic words, source words, and key content vocabulary with visuals",
          "Use subject-based word banks and diagrams during planning",
          "Repeat explanation language during oral rehearsal",
        ],
        frames: ["This is about ___.", "I learned ___.", "A fact is ___.", "This helps explain ___."],
      },
      {
        level: "WIDA 3",
        title: "Developing",
        use: "Students are ready to connect facts to a bigger idea and write short explanatory paragraphs with more independence.",
        writing: [
          "Model how to synthesize facts into a clearer teaching paragraph",
          "Prompt students to explain what the facts show, not just list them",
          "Use organizers that help students group details under a main idea",
          "Support revision by checking sequence, grouping, and clarity",
        ],
        speaking: [
          "One important idea is ___.",
          "Another detail is ___.",
          "This teaches ___.",
        ],
        vocabulary: [
          "Teach words such as summarize, explain, detail, and evidence explicitly",
          "Use repeated oral rehearsal around how facts connect",
          "Encourage accurate reuse of subject vocabulary in sentences",
        ],
        frames: [
          "One important idea is ___.",
          "Another detail is ___.",
          "This teaches ___.",
          "This helps readers understand ___.",
        ],
      },
      {
        level: "WIDA 4",
        title: "Expanding",
        use: "Students can write fuller discipline-based pieces and should begin synthesizing ideas more clearly with stronger academic language.",
        writing: [
          "Push for stronger explanation, synthesis, and independence",
          "Model how writers connect details across content to teach a bigger idea",
          "Prompt students to revise for academic tone and precision",
          "Use peer feedback on organization, explanation, and idea development",
        ],
        speaking: [
          "A key idea is ___.",
          "This evidence shows ___.",
          "This matters because ___.",
        ],
        vocabulary: [
          "Teach stronger academic explanation and synthesis language",
          "Encourage students to use repeated subject-area terms purposefully",
          "Use mentor content texts to highlight academic phrasing",
        ],
        frames: [
          "A key idea is ___.",
          "This evidence shows ___.",
          "This matters because ___.",
          "The reader learns ___ from this.",
        ],
      },
    ],
    conferencePrompts: [
      "What is the bigger idea you are teaching in this piece?",
      "Which facts belong together under that idea?",
      "How can you explain what these details show the reader?",
      "Where can your writing sound more like a content writer or expert?",
    ],
    quickAssessment: [
      "Can the student keep the piece focused on one main idea?",
      "Can the student group supporting facts logically?",
      "Can the student explain how details connect to the bigger idea?",
      "Can the student use clearer academic language across the piece?",
    ],
    relatedDocuments: [
      {
        title: "Discipline-Based Writing BENDS 3 & 4 Planning Template",
        purpose: "Use this to organize main ideas, related details, and explanation across longer content pieces.",
        file: "TBD_grade4_discipline_writing_bends3_4_template.pdf",
      },
      {
        title: "Discipline-Based Writing BENDS 3 & 4 Checklist",
        purpose: "Use this during conferences to keep synthesis and explanation visible.",
        file: "TBD_grade4_discipline_writing_bends3_4_checklist.pdf",
      },
    ],
  },
];

export default function WritingWorkshopToolkit() {
  const [selectedUnitId, setSelectedUnitId] = useState("Spinning True Stories into Gold");
  const selectedUnit = useMemo(
    () => grade4Units.find((unit) => unit.id === selectedUnitId) ?? grade4Units[0],
    [selectedUnitId],
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sky-800 text-xs font-bold">
          <FolderKanban className="h-3.5 w-3.5" /> Scaffolded Grade 4 Unit Browser
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 mt-4">
          Grade 4 Scaffolded Writing Units
        </h1>
        <p className="text-slate-600 mt-3 leading-relaxed">
          Use this page to move across the Grade 4 writing year and see how each unit can be scaffolded
          for different WIDA levels. The unit goals stay the same, but the language load, rehearsal,
          vocabulary, and independence shift by proficiency level.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/writing-workshop-grade2-unit1">
            <Button variant="outline" className="bg-white">Grade 2 Unit 1</Button>
          </Link>
          <Link href="/writing-workshop-grade3-unit1">
            <Button variant="outline" className="bg-white">Grade 3 Unit 1</Button>
          </Link>
          <Button className="bg-blue-700 hover:bg-blue-800">Grade 4 Units</Button>
          <Link href="/writing-workshop-grade5">
            <Button variant="outline" className="bg-white">Grade 5 Units</Button>
          </Link>
        </div>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-sm font-bold uppercase tracking-wider text-slate-500">Choose Grade 4 Unit</div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {grade4Units.map((unit) => {
            const isSelected = unit.id === selectedUnit.id;
            const shortLabel =
              unit.id === "Spinning True Stories into Gold"
                ? "Spinning True Stories"
                : unit.id === "Literary Essay: Writing About Fiction"
                  ? "Literary Essay"
                  : unit.id === "Boxes and Bullets: Writing Essays and Arguments"
                    ? "Boxes and Bullets"
                    : unit.id === "Discipline-Based Writing BENDS 1 & 2"
                      ? "Discipline-Based Writing 1-2"
                      : "Discipline-Based Writing 3-4";

            return (
              <button
                key={unit.id}
                onClick={() => setSelectedUnitId(unit.id)}
                className={`rounded-xl border px-4 py-4 text-left transition-colors ${
                  isSelected
                    ? "border-sky-500 bg-sky-50 text-sky-900"
                    : "border-slate-200 bg-white text-slate-700 hover:border-sky-300"
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  {unit.buttonLabel}
                </div>
                <div className="mt-2 text-base font-semibold leading-snug">
                  {shortLabel}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid xl:grid-cols-[1.15fr_0.85fr] gap-5">
        <Card className="rounded-xl border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpenText className="h-5 w-5 text-sky-700" />
              <h2 className="text-lg font-bold text-blue-950">{selectedUnit.title}</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{selectedUnit.blurb}</p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Language demands in this unit</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {selectedUnit.languageDemands.map((item) => (
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
            <p className="text-sm text-slate-700 leading-relaxed">{selectedUnit.planningNote}</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <MessageSquareQuote className="h-4 w-4" />
          SUPPORTS BY WIDA LEVEL
        </div>
        <div className="grid gap-5">
          {selectedUnit.levelScaffolds.map((group) => (
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
              These help teachers keep conferences focused, unit-specific, and language-friendly.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {selectedUnit.conferencePrompts.map((prompt) => (
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
              {selectedUnit.quickAssessment.map((item) => (
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
          {selectedUnit.relatedDocuments.map((doc) => (
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
        <Link href={`/quick-tools?workshop=writer&task=writing&unit=${encodeURIComponent(selectedUnit.id)}`}>
          <Button className="bg-blue-700 hover:bg-blue-800">
            Open writing supports
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
