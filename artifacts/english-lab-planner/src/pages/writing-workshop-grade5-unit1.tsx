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

const grade5Units: UnitScaffold[] = [
  {
    id: "Turning Life into Literature",
    buttonLabel: "Unit 1",
    title: "Grade 5 Unit 1: Turning Life into Literature",
    blurb:
      "This unit supports students in turning a true life experience into a more literary personal narrative with reflection and craft.",
    planningNote:
      "This unit asks for more reflection and literary craft than a simple recount. EAL support should help students tell the story clearly and also communicate why the moment mattered.",
    languageDemands: [
      "Write a true personal narrative with a clear structure and reflective meaning",
      "Develop a small moment using scene, detail, dialogue, and pacing",
      "Show the inner thinking of the narrator, not just the events",
      "Use craft to help the reader feel the importance of the moment",
      "End with reflection, significance, or a change in understanding",
    ],
    levelScaffolds: [
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
        speaking: ["One day, ___.", "First, ___.", "Then, ___.", "I felt ___."],
        vocabulary: [
          "Teach action verbs, feeling words, and time-order words with visuals",
          "Use word banks for dialogue starters and emotion words",
          "Repeat the same narrative words during talk and writing",
        ],
        frames: ["One day, ___.", "First, ___.", "Then, ___.", "At the end, ___."],
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
          "I thought, '___.'",
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
    ],
    conferencePrompts: [
      "Which part of your story feels most important to you?",
      "Where can you slow the story down so the reader can really live the moment?",
      "What were you thinking or realizing at that point?",
      "How will the reader know why this story matters?",
    ],
    quickAssessment: [
      "Can the student stay focused on one meaningful true moment?",
      "Can the student sequence the story clearly for the reader?",
      "Can the student add thoughts, feelings, or dialogue to deepen the scene?",
      "Can the student show why the experience mattered?",
    ],
    relatedDocuments: [
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
    ],
  },
  {
    id: "Literary Essay: Opening Texts and Seeing More",
    buttonLabel: "Unit 2",
    title: "Grade 5 Unit 2: Literary Essay",
    blurb:
      "This unit supports students in developing interpretive literary essays with claims, evidence, and clear explanation.",
    planningNote:
      "Students need help moving beyond retelling. EAL support should help them say what they think about the text, point to evidence, and explain what that evidence shows.",
    languageDemands: [
      "Make an interpretive claim about a character, theme, or text idea",
      "Choose evidence from the text that supports the claim",
      "Explain what the evidence means, not just quote or retell it",
      "Use literary essay language such as claim, evidence, and interpretation",
      "Organize writing clearly so readers can follow the thinking",
    ],
    levelScaffolds: [
      {
        level: "WIDA 1-2",
        title: "Entering and Emerging",
        use: "Students need strong oral rehearsal, repeated analytical frames, and short claim-and-evidence responses tied to one clear idea.",
        writing: [
          "Accept oral interpretation, labeled notes, and jointly written claim-and-evidence responses",
          "Use shared reading talk before independent literary writing",
          "Provide simple claim frames tied to one text detail",
          "Keep the writing focused on one idea rather than a full essay structure",
        ],
        speaking: ["I think ___.", "This part shows ___.", "The character is ___."],
        vocabulary: [
          "Teach feeling words, character words, and simple idea words with examples",
          "Use a small bank of discussion words like think, show, and because",
          "Repeat analytical words in talk before expecting them in writing",
        ],
        frames: ["I think ___.", "This part shows ___.", "The character is ___.", "This means ___."],
      },
      {
        level: "WIDA 3",
        title: "Developing",
        use: "Students are ready for short literary paragraphs with a claim, an example, and a simple explanation.",
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
          "Encourage reuse of academic phrases during discussion and drafting",
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
          "This suggests ___ because ___.",
          "My interpretation is ___.",
        ],
        vocabulary: [
          "Teach more precise words for analysis such as reveals, suggests, and significance",
          "Encourage students to use academic literary language consistently",
          "Use mentor essays to highlight interpretive phrasing",
        ],
        frames: [
          "The author shows ___ when ___.",
          "This suggests ___ because ___.",
          "My interpretation is ___.",
          "This matters because ___.",
        ],
      },
    ],
    conferencePrompts: [
      "What is your big idea about this part of the text?",
      "Which detail from the text best supports that idea?",
      "How can you explain what that detail shows the reader?",
      "Where are you retelling instead of interpreting?",
    ],
    quickAssessment: [
      "Can the student make a clear claim about the text?",
      "Can the student choose a relevant piece of evidence?",
      "Can the student explain the evidence instead of only copying it?",
      "Can the student organize the idea, evidence, and explanation clearly?",
    ],
    relatedDocuments: [
      {
        title: "Grade 5 Literary Essay Checklist",
        purpose: "Use this during conferences to keep essay expectations visible.",
        file: "TBD_grade5_literary_essay_checklist.pdf",
      },
      {
        title: "Grade 5 Literary Essay Rubric",
        purpose: "Use this to assess claims, evidence, and interpretation.",
        file: "TBD_grade5_literary_essay_rubric.pdf",
      },
    ],
  },
  {
    id: "Research-Based Argument",
    buttonLabel: "Unit 3",
    title: "Grade 5 Unit 3: Research-Based Argument",
    blurb:
      "This unit supports students in building arguments from research using claims, reasons, evidence, and explanation.",
    planningNote:
      "Students need help separating strong opinions from supported arguments. EAL support should help them use source-based language and explain how evidence proves the claim.",
    languageDemands: [
      "State a clear claim about a research topic",
      "Use evidence from sources to support the argument",
      "Explain how evidence connects to the claim",
      "Use academic argument language such as claim, evidence, and reason",
      "Organize writing logically for the reader",
    ],
    levelScaffolds: [
      {
        level: "WIDA 1-2",
        title: "Entering and Emerging",
        use: "Students need repeated oral argument frames, shared source reading, and narrow claim-plus-reason writing tasks.",
        writing: [
          "Accept oral argument talk, labeled notes, and jointly written claim statements",
          "Use shared source reading before independent argument writing",
          "Provide simple claim-plus-reason frames with choices",
          "Focus on one clear claim and one source detail at a time",
        ],
        speaking: ["I think ___.", "One reason is ___.", "The source says ___."],
        vocabulary: [
          "Teach claim, reason, and source with concrete examples",
          "Use simple source labels and repeated academic word banks",
          "Practice because language often in talk",
        ],
        frames: ["I think ___.", "One reason is ___.", "The source says ___.", "This helps prove ___."],
      },
      {
        level: "WIDA 3",
        title: "Developing",
        use: "Students are ready for short argument paragraphs with a claim, evidence, and simple explanation.",
        writing: [
          "Model how to move from notes into claim, evidence, and explanation",
          "Prompt students to explain how the evidence supports the argument",
          "Use organizers that separate opinion from researched proof",
          "Support revision by checking logic and clarity",
        ],
        speaking: [
          "I believe ___ because ___.",
          "One piece of evidence is ___.",
          "This proves ___.",
        ],
        vocabulary: [
          "Teach argument vocabulary such as claim, evidence, proves, and supports",
          "Encourage accurate reuse of source-based phrasing",
          "Use repeated sentence models for evidence talk",
        ],
        frames: [
          "I believe ___ because ___.",
          "One piece of evidence is ___.",
          "This proves ___.",
          "Another reason is ___.",
        ],
      },
      {
        level: "WIDA 4",
        title: "Expanding",
        use: "Students can write fuller arguments and should begin strengthening evidence integration and formal tone.",
        writing: [
          "Push for stronger evidence integration and clearer academic tone",
          "Model source-based elaboration instead of unsupported opinions",
          "Prompt students to compare strength of different pieces of evidence",
          "Use peer feedback on clarity, evidence, and reasoning",
        ],
        speaking: [
          "My argument is ___ because ___.",
          "According to ___, ___.",
          "This evidence strengthens my claim because ___.",
        ],
        vocabulary: [
          "Teach stronger academic verbs such as argues, states, and demonstrates",
          "Encourage students to use formal source language",
          "Use mentor arguments to highlight reasoning phrases",
        ],
        frames: [
          "My argument is ___ because ___.",
          "According to ___, ___.",
          "This evidence strengthens my claim because ___.",
          "Therefore, ___.",
        ],
      },
    ],
    conferencePrompts: [
      "What exactly are you trying to convince the reader of?",
      "Which piece of research is your strongest evidence?",
      "How can you explain why this evidence matters?",
      "Where can you sound more like a writer using research instead of only opinion?",
    ],
    quickAssessment: [
      "Can the student state a clear claim?",
      "Can the student use a relevant source detail as evidence?",
      "Can the student explain the connection between claim and evidence?",
      "Can the student keep the argument organized and logical?",
    ],
    relatedDocuments: [
      {
        title: "Grade 5 Argument Checklist",
        purpose: "Use this during conferences to keep the claim-evidence structure visible.",
        file: "TBD_grade5_argument_checklist.pdf",
      },
      {
        title: "Grade 5 Argument Rubric",
        purpose: "Use this to assess the quality of reasoning and source use.",
        file: "TBD_grade5_argument_rubric.pdf",
      },
    ],
  },
  {
    id: "Graphic Novels",
    buttonLabel: "Unit 4",
    title: "Grade 5 Unit 4: Graphic Novels",
    blurb:
      "This unit supports students in telling stories through panels, dialogue, captions, and visual sequencing.",
    planningNote:
      "Students need help deciding what the picture shows and what the words need to add. EAL support should strengthen sequence, dialogue, and visual meaning together.",
    languageDemands: [
      "Tell a clear story across a sequence of panels",
      "Use dialogue and captions to move the story forward",
      "Make visual and written choices that work together",
      "Keep language concise while still clear for the reader",
      "Show why a scene matters through image, action, and text",
    ],
    levelScaffolds: [
      {
        level: "WIDA 1-2",
        title: "Entering and Emerging",
        use: "Students need sketch planning, oral retell, and repeated panel-by-panel storytelling frames.",
        writing: [
          "Accept sketches, labels, short dialogue bubbles, and oral retell before drafting panels",
          "Use shared planning for panel order and simple dialogue",
          "Provide beginning-middle-end comic frames with picture prompts",
          "Keep each panel focused on one clear action or message",
        ],
        speaking: ["First, ___.", "He says, '___'.", "Then ___."],
        vocabulary: [
          "Teach panel, speech bubble, caption, and scene with visuals",
          "Use action and dialogue word banks during planning",
          "Repeat sequence words while students plan panels",
        ],
        frames: ["First, ___.", "He says, '___'.", "Then ___.", "In the last panel, ___."],
      },
      {
        level: "WIDA 3",
        title: "Developing",
        use: "Students are ready to explain what happens in each panel and how dialogue helps the reader understand the scene.",
        writing: [
          "Model how writers decide what goes in the image and what goes in words",
          "Prompt students to use dialogue and captions for clarity",
          "Support revision by checking panel order and scene meaning",
          "Use organizers that separate panel action from text choices",
        ],
        speaking: [
          "This panel shows ___.",
          "The dialogue reveals ___.",
          "The next scene is ___.",
        ],
        vocabulary: [
          "Teach sequence, reveal, caption, and dialogue explicitly",
          "Encourage students to describe how images add meaning",
          "Use repeated talk about scene and sequence before revision",
        ],
        frames: [
          "This panel shows ___.",
          "The dialogue reveals ___.",
          "The next scene is ___.",
          "This helps the reader understand ___.",
        ],
      },
      {
        level: "WIDA 4",
        title: "Expanding",
        use: "Students can create fuller graphic narratives and should begin revising for pacing, emphasis, and image-text balance.",
        writing: [
          "Push for stronger scene construction, concise dialogue, and purposeful pacing",
          "Model how visuals and text work together to build meaning",
          "Prompt students to revise for emphasis and clarity across panels",
          "Use peer feedback on sequence, visual storytelling, and mood",
        ],
        speaking: [
          "The panel sequence shows ___.",
          "The image and dialogue together reveal ___.",
          "This scene matters because ___.",
        ],
        vocabulary: [
          "Teach concise storytelling language and graphic novel craft words",
          "Encourage students to talk about pacing and emphasis",
          "Use mentor texts to notice panel pacing and visual focus",
        ],
        frames: [
          "The panel sequence shows ___.",
          "The image and dialogue together reveal ___.",
          "This scene matters because ___.",
          "The reader notices ___ because ___.",
        ],
      },
    ],
    conferencePrompts: [
      "What should the reader understand from this panel right away?",
      "What belongs in the picture and what belongs in the caption or dialogue?",
      "Where does the story move too fast or too slowly?",
      "How do the image and words work together here?",
    ],
    quickAssessment: [
      "Can the student sequence the story clearly across panels?",
      "Can the student use dialogue or captions purposefully?",
      "Can the student make visual and written choices that match each other?",
      "Can the student help the reader understand why the scene matters?",
    ],
    relatedDocuments: [
      {
        title: "Graphic Novel Planning Template",
        purpose: "Use this to help students map scenes, panels, captions, and dialogue.",
        file: "TBD_grade5_graphic_novel_template.pdf",
      },
      {
        title: "Graphic Novel Checklist",
        purpose: "Use this during revision to check sequence, dialogue, and clarity.",
        file: "TBD_grade5_graphic_novel_checklist.pdf",
      },
    ],
  },
  {
    id: "Journalism: Researching and Writing Articles",
    buttonLabel: "Unit 5",
    title: "Grade 5 Unit 5: Journalism",
    blurb:
      "This unit supports students in researching, interviewing, and drafting clear articles that report information accurately for readers.",
    planningNote:
      "Students need help organizing facts for a reader, not just collecting them. EAL support should strengthen source use, factual precision, and clear report structure.",
    languageDemands: [
      "Research a topic and gather key facts from sources",
      "Write an article with a clear focus and organized information",
      "Use source language accurately and responsibly",
      "Explain why facts matter for the reader",
      "Maintain a clear, informative reporting tone",
    ],
    levelScaffolds: [
      {
        level: "WIDA 1-2",
        title: "Entering and Emerging",
        use: "Students need repeated reporting frames, shared research reading, and simple topic-and-fact article structures.",
        writing: [
          "Accept labeled notes, oral reporting, and jointly written news-style summaries",
          "Use shared research reading before independent article writing",
          "Provide article frames with headline, topic, and one fact",
          "Keep the writing focused on clarity and factual accuracy",
        ],
        speaking: ["This article is about ___.", "I learned ___.", "A fact is ___."],
        vocabulary: [
          "Teach article, fact, source, and report with visuals and examples",
          "Use topic-specific word banks during research and drafting",
          "Repeat factual language during oral rehearsal",
        ],
        frames: [
          "This article is about ___.",
          "I learned ___.",
          "A fact is ___.",
          "According to ___, ___.",
        ],
      },
      {
        level: "WIDA 3",
        title: "Developing",
        use: "Students are ready for short report writing with a clear topic, sourced facts, and simple explanation.",
        writing: [
          "Model how to organize information into a report structure",
          "Prompt students to connect facts to the article focus",
          "Use note-to-draft organizers with source reminders",
          "Support revision by checking sequence and factual clarity",
        ],
        speaking: [
          "This article explains ___.",
          "One source says ___.",
          "This helps readers understand ___.",
        ],
        vocabulary: [
          "Teach report, source, detail, and explain explicitly",
          "Encourage students to reuse accurate topic vocabulary",
          "Use repeated talk about which facts matter most",
        ],
        frames: [
          "This article explains ___.",
          "One source says ___.",
          "This helps readers understand ___.",
          "Another important fact is ___.",
        ],
      },
      {
        level: "WIDA 4",
        title: "Expanding",
        use: "Students can write fuller articles and should start refining structure, reporting tone, and source integration.",
        writing: [
          "Push for clearer reporting tone and stronger source integration",
          "Model how journalists present facts clearly for readers",
          "Prompt students to decide which details deserve emphasis",
          "Use peer feedback on organization, clarity, and accuracy",
        ],
        speaking: [
          "This report shows ___.",
          "According to ___, ___.",
          "This detail is important because ___.",
        ],
        vocabulary: [
          "Teach clearer reporting verbs such as report, explain, and state",
          "Encourage students to use formal informational language",
          "Use mentor articles to highlight journalistic tone and structure",
        ],
        frames: [
          "This report shows ___.",
          "According to ___, ___.",
          "This detail is important because ___.",
          "Readers need to know this because ___.",
        ],
      },
    ],
    conferencePrompts: [
      "What is the main thing this article is teaching the reader?",
      "Which facts are the most important to include?",
      "Where can you make the source or evidence clearer?",
      "How can you make this sound more like a report for readers?",
    ],
    quickAssessment: [
      "Can the student keep the article focused on one clear topic?",
      "Can the student include relevant facts from sources?",
      "Can the student organize the report clearly for a reader?",
      "Can the student use language that sounds factual and informative?",
    ],
    relatedDocuments: [
      {
        title: "Journalism Planning Template",
        purpose: "Use this to organize headline, topic, facts, and sources before drafting.",
        file: "TBD_grade5_journalism_template.pdf",
      },
      {
        title: "Journalism Checklist",
        purpose: "Use this during revision to check clarity, source use, and report structure.",
        file: "TBD_grade5_journalism_checklist.pdf",
      },
    ],
  },
];

export default function WritingWorkshopGrade5Unit1() {
  const [selectedUnitId, setSelectedUnitId] = useState("Turning Life into Literature");
  const selectedUnit = useMemo(
    () => grade5Units.find((unit) => unit.id === selectedUnitId) ?? grade5Units[0],
    [selectedUnitId],
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-sky-800 text-xs font-bold">
          <FolderKanban className="h-3.5 w-3.5" /> Scaffolded Grade 5 Unit Browser
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950 mt-4">
          Grade 5 Scaffolded Writing Units
        </h1>
        <p className="text-slate-600 mt-3 leading-relaxed">
          Use this page to move across the Grade 5 writing year and see how each unit can be scaffolded
          for different WIDA levels. The unit stays the same, but the rehearsal, vocabulary, language load,
          and independence shift by student language proficiency.
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
          <Button className="bg-blue-700 hover:bg-blue-800">Grade 5 Units</Button>
        </div>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-sm font-bold uppercase tracking-wider text-slate-500">Choose Grade 5 Unit</div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {grade5Units.map((unit, index) => {
            const isSelected = unit.id === selectedUnit.id;
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
                  Unit {index + 1}
                </div>
                <div className="mt-2 text-base font-semibold leading-snug">
                  {unit.id === "Literary Essay: Opening Texts and Seeing More"
                    ? "Literary Essay"
                    : unit.id === "Journalism: Researching and Writing Articles"
                      ? "Journalism"
                      : unit.id}
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
              These help teachers keep conferences focused, reflective, and language-friendly.
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
