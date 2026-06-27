export type WritingWorkshopLevelScaffold = {
  level: string;
  title: string;
  use: string;
  writing: string[];
  speaking: string[];
  vocabulary: string[];
  frames: string[];
  model?: string[];
  sample?: {
    text: string;
    notice: string;
  };
  prompts?: string[];
};

export type WritingWorkshopRelatedDocument = {
  title: string;
  purpose: string;
  file: string;
};

export type WritingWorkshopUnitScaffold = {
  id: string;
  buttonLabel: string;
  title: string;
  blurb: string;
  planningNote: string;
  languageDemands: string[];
  levelScaffolds: WritingWorkshopLevelScaffold[];
  conferencePrompts: string[];
  quickAssessment: string[];
  relatedDocuments: WritingWorkshopRelatedDocument[];
};

export type WritingWorkshopTemplateTab = {
  label: string;
  href?: string;
  active?: boolean;
};

export type WritingWorkshopTemplatePageContent = {
  badgeLabel: string;
  pageTitle: string;
  pageDescription: string;
  gradeTabs: WritingWorkshopTemplateTab[];
  units: WritingWorkshopUnitScaffold[];
  unitChooserLabel?: string;
};

export type TeacherGlossaryEntry = {
  term: string;
  meaning: string;
  teacherMove: string;
};

export const TEACHER_GLOSSARY: TeacherGlossaryEntry[] = [
  {
    term: "Claim",
    meaning: "The main idea, opinion, or position a student is trying to say clearly in the piece.",
    teacherMove: "Ask, 'What are you really saying here?' and help the student state it in one clear sentence.",
  },
  {
    term: "Elaboration",
    meaning: "The extra detail that helps the reader understand more, such as examples, reasons, actions, or explanation.",
    teacherMove: "Prompt with, 'Can you add one more detail, example, or part that helps me see your thinking?'",
  },
  {
    term: "Reflection",
    meaning: "The part where the writer tells what they learned, felt, realized, or now understands.",
    teacherMove: "Ask, 'Why did this moment matter to you?' or 'What does this teach the reader about you?'",
  },
  {
    term: "Evidence",
    meaning: "The words, facts, details, or examples a writer uses to support an idea or opinion.",
    teacherMove: "Ask, 'What in the text, research, or experience shows this is true?'",
  },
  {
    term: "Conference",
    meaning: "A short teacher-student conversation during workshop used to notice, teach, and set one next step.",
    teacherMove: "Keep it simple: notice one strength, teach one move, and name one next step.",
  },
];

export const WRITING_WORKSHOP_TEMPLATE_PAGES: Record<"grade2Unit1" | "grade3Unit1" | "grade5Units", WritingWorkshopTemplatePageContent> = {
  grade2Unit1: {
    badgeLabel: "Scaffolded Unit Model",
    pageTitle: "Grade 2 Unit 1: Making Small Moments Big",
    pageDescription:
      "This model shows how workshop materials can support Grade 2 Unit 1 by organizing the small-moment narrative scaffolds teachers need at each WIDA level.",
    gradeTabs: [
      { label: "Grade 2 Unit 1", active: true },
      { label: "Grade 3 Unit 1", href: "/writing-workshop-grade3-unit1" },
      { label: "Grade 4 Units", href: "/writing-workshop-grade4" },
      { label: "Grade 5 Units", href: "/writing-workshop-grade5" },
    ],
    units: [
      {
        id: "Making Small Moments Big",
        buttonLabel: "Grade 2 Unit 1",
        title: "Grade 2 Unit 1: Making Small Moments Big",
        blurb:
          "This model shows how workshop materials can support Grade 2 Unit 1 by organizing the small-moment narrative scaffolds teachers need at each WIDA level.",
        planningNote:
          "This unit is a good early place to build oral rehearsal, sequencing language, and confidence in telling a true story before expecting longer writing.",
        languageDemands: [
          "Tell a true small moment in order",
          "Stay focused on one event instead of telling a long list",
          "Add actions, feelings, and a few specific details",
          "Help the reader understand what happened",
          "End the story clearly",
        ],
        levelScaffolds: [
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
        ],
        conferencePrompts: [
          "Which part of your story should we help the reader see more clearly?",
          "What did you do, say, or feel in that moment?",
          "Can you make this part bigger instead of moving too fast?",
          "How will your ending help the reader know the story is finished?",
        ],
        quickAssessment: [
          "Can the student tell one clear small moment?",
          "Can the student keep the events in order?",
          "Can the student add one feeling or important detail?",
          "Can the student end the story clearly?",
        ],
        relatedDocuments: [
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
        ],
      },
    ],
  },
  grade3Unit1: {
    badgeLabel: "Scaffolded Unit Model",
    pageTitle: "Grade 3 Unit 1: The Art of Information Writing",
    pageDescription:
      "This model shows how workshop materials can support Grade 3 Unit 1 by organizing the information-writing scaffolds teachers need at each WIDA level.",
    gradeTabs: [
      { label: "Grade 2 Unit 1", href: "/writing-workshop-grade2-unit1" },
      { label: "Grade 3 Unit 1", active: true },
      { label: "Grade 4 Units", href: "/writing-workshop-grade4" },
      { label: "Grade 5 Units", href: "/writing-workshop-grade5" },
    ],
    units: [
      {
        id: "The Art of Information Writing",
        buttonLabel: "Grade 3 Unit 1",
        title: "Grade 3 Unit 1: The Art of Information Writing",
        blurb:
          "This model shows how workshop materials can support Grade 3 Unit 1 by organizing the information-writing scaffolds teachers need at each WIDA level.",
        planningNote:
          "This is a useful unit for teaching how to move from naming and listing into actual explanation. That makes it a strong bridge unit for multilingual writers.",
        languageDemands: [
          "Teach readers about a topic using clear information",
          "Group ideas into simple sections or parts",
          "Use facts, examples, and topic vocabulary",
          "Explain details so the reader understands more than just a list",
          "Use headings, linking words, and a clear ending",
        ],
        levelScaffolds: [
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
        ],
        conferencePrompts: [
          "What is your topic teaching the reader?",
          "Which part needs a clearer fact or example?",
          "Can you explain this detail instead of only naming it?",
          "How is your information organized for the reader?",
        ],
        quickAssessment: [
          "Can the student name the topic clearly?",
          "Can the student add at least one supporting fact?",
          "Can the student use topic vocabulary in speech or writing?",
          "Can the student explain one detail, not just list it?",
        ],
        relatedDocuments: [
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
        ],
      },
    ],
  },
  grade5Units: {
    badgeLabel: "Scaffolded Grade 5 Unit Browser",
    pageTitle: "Grade 5 Scaffolded Writing Units",
    pageDescription:
      "Use this page to move across the Grade 5 writing year and see how each unit can be scaffolded for different WIDA levels. The unit stays the same, but the rehearsal, vocabulary, language load, and independence shift by student language proficiency.",
    gradeTabs: [
      { label: "Grade 2 Unit 1", href: "/writing-workshop-grade2-unit1" },
      { label: "Grade 3 Unit 1", href: "/writing-workshop-grade3-unit1" },
      { label: "Grade 4 Units", href: "/writing-workshop-grade4" },
      { label: "Grade 5 Units", active: true },
    ],
    unitChooserLabel: "Choose Grade 5 Unit",
    units: [
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
    ],
  },
};
