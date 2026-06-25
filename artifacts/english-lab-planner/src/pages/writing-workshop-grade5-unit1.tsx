import React from "react";
import {
  WritingWorkshopUnitTemplate,
  type WritingWorkshopTemplateTab,
  type WritingWorkshopUnitScaffold,
} from "@/components/writing-workshop-unit-template";

const gradeTabs: WritingWorkshopTemplateTab[] = [
  { label: "Grade 2 Unit 1", href: "/writing-workshop-grade2-unit1" },
  { label: "Grade 3 Unit 1", href: "/writing-workshop-grade3-unit1" },
  { label: "Grade 4 Units", href: "/writing-workshop-grade4" },
  { label: "Grade 5 Units", active: true },
];

const grade5Units: WritingWorkshopUnitScaffold[] = [
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
  return (
    <WritingWorkshopUnitTemplate
      badgeLabel="Scaffolded Grade 5 Unit Browser"
      pageTitle="Grade 5 Scaffolded Writing Units"
      pageDescription="Use this page to move across the Grade 5 writing year and see how each unit can be scaffolded for different WIDA levels. The unit stays the same, but the rehearsal, vocabulary, language load, and independence shift by student language proficiency."
      gradeTabs={gradeTabs}
      units={grade5Units}
      unitChooserLabel="Choose Grade 5 Unit"
      quickToolsHref={(unit) => `/quick-tools?workshop=writer&task=writing&unit=${encodeURIComponent(unit.id)}`}
    />
  );
}
