export const WIDA_LEVELS = [
  {
    level: 1,
    name: "Entering",
    program: "Newcomer / Intensive Support",
    periods: "Daily language scaffolds across reading and writing workshop",
    description:
      "Beginning to understand English in the classroom. Students often rely on gestures, pictures, partner support, and home language to participate in workshop routines.",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    level: 2,
    name: "Emerging",
    program: "Targeted Language Support",
    periods: "Daily sentence-level support across workshop tasks",
    description:
      "Beginning to produce English with words, phrases, and simple patterned sentences. Students benefit from modeled language, repetition, visuals, and structured talk.",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    level: 3,
    name: "Developing",
    program: "EALDesk Core Support",
    periods: "Consistent scaffolded participation in grade-level workshop",
    description:
      "Using connected sentences to discuss texts and communicate ideas in writing. Students are ready for stronger academic language with clear models and supports.",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
  },
  {
    level: 4,
    name: "Expanding",
    program: "Transitioning Toward Independence",
    periods: "Strategic support for grade-level reading, talk, and writing",
    description:
      "Using more precise language to explain thinking, discuss texts, and write across genres. Students still benefit from scaffolds, especially for vocabulary, elaboration, and academic language.",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
];

export const WRITING_STRATEGIES = {
  1: [
    "Accept drawings, labels, and dictated responses during writer's workshop",
    "Use picture word banks for characters, setting, feelings, actions, and opinions",
    "Model shared writing before asking students to try independently",
    "Offer sentence frames with one missing word to complete",
    "Allow students to plan orally or in their home language before writing",
  ],
  2: [
    "Provide patterned sentence frames such as \"I can ___\" or \"My favorite part is ___\"",
    "Use interactive writing to build simple workshop pieces together",
    "Let students rehearse with a partner before writing a sentence",
    "Provide word banks organized by topic, genre, or mentor text",
    "Accept short responses with pictures and simple sentences",
    "Use graphic organizers with icons for beginning, middle, end or opinion plus reasons",
  ],
  3: [
    "Model paragraph structure for opinion, narrative, and informational writing",
    "Provide sentence starters for elaboration such as \"This shows...\" and \"Another detail is...\"",
    "Use mentor texts to highlight transitions, description, and text evidence",
    "Offer checklists with visuals for workshop expectations",
    "Support revision with one clear focus such as adding details or using stronger verbs",
    "Encourage students to write multiple connected sentences with teacher conferencing support",
  ],
  4: [
    "Teach students to expand ideas with evidence, examples, and explanation",
    "Model genre-specific language for opinion, narrative, and informational pieces",
    "Use revision goals tied to craft moves such as leads, transitions, and precise word choice",
    "Provide language frames for citing text evidence and explaining thinking",
    "Encourage students to write longer independent pieces while still offering planning supports",
    "Use peer feedback protocols that focus on clarity, organization, and elaboration",
  ],
};

export const SPEAKING_STRATEGIES = {
  1: [
    "Accept pointing, acting out, drawing, and one-word answers during mini-lessons and conferences",
    "Teach key workshop language with gestures such as read, write, think, share, and partner",
    "Use visuals and real books to anchor discussion",
    "Model oral responses and invite choral repetition",
    "Pair students with a supportive partner for turn-and-talk routines",
  ],
  2: [
    "Ask yes or no, either or, and choice-based questions about books and writing",
    "Use sentence stems such as \"I think ___\" and \"I noticed ___\" during partner talk",
    "Provide wait time before asking students to respond",
    "Repeat and expand student language using more complete English",
    "Practice discussion routines with predictable prompts across the week",
    "Use partner rehearsal before whole-group sharing",
  ],
  3: [
    "Ask open-ended questions about characters, author's choices, and writing decisions",
    "Provide discussion stems such as \"I agree because...\" and \"I want to add...\"",
    "Use book clubs or partner talk to rehearse ideas before public sharing",
    "Prompt students to explain thinking with examples from the text or their writing",
    "Model how to build on a classmate's idea respectfully",
    "Support oral retell, summary, and explanation using visuals or story maps",
  ],
  4: [
    "Teach students to justify opinions and interpretations with evidence",
    "Use accountable talk stems for discussion during reading and writing workshop",
    "Facilitate partner and small-group conversations that require elaboration",
    "Encourage students to compare texts, themes, and author's craft orally",
    "Support stronger academic vocabulary in conferences and group discussions",
    "Expect longer, clearer explanations while still scaffolding when needed",
  ],
};

export const VOCABULARY_SUPPORT = {
  1: [
    "Teach 3-5 essential workshop words at a time using visuals and repetition",
    "Build personal picture dictionaries for reading and writing workshop terms",
    "Use bilingual labels and translated glossaries when helpful",
    "Teach words in context through read-alouds, anchor charts, and routines",
  ],
  2: [
    "Pre-teach vocabulary needed for the mini-lesson, independent task, and sharing routine",
    "Use picture-supported word walls for literacy terms and high-utility verbs",
    "Connect new words to gestures, examples, and familiar classroom experiences",
    "Provide sentence frames that reuse target vocabulary across the week",
    "Encourage students to keep a workshop vocabulary notebook",
  ],
  3: [
    "Teach Tier 2 vocabulary that appears in mentor texts and discussion prompts",
    "Highlight words students can use across reading response and writing conferences",
    "Use morphology, word families, and cognates to build understanding",
    "Have students annotate unfamiliar words with sketches, translations, or simple definitions",
    "Create genre-based vocabulary lists for narrative, opinion, and informational writing",
  ],
  4: [
    "Teach nuanced vocabulary for interpretation, analysis, and craft discussion",
    "Expect students to use precise language from anchor charts and mentor texts",
    "Support text-based discussion with evidence words such as because, for example, and this shows",
    "Encourage students to revise writing for stronger word choice and clarity",
    "Use discussion and writing tasks that recycle target academic vocabulary",
  ],
};

export const QUICK_TOOLS = [
  {
    id: "retelling",
    workshop: "reader",
    name: "Retelling & Summarizing",
    description: "Students retell a text, summarize key events, or explain the gist",
    frames: {
      1: ['"First ___." (point to picture)', '"Then ___."', '"The story is about ___."'],
      2: ['"First ___, then ___."', '"The character ___."', '"This book is about ___."'],
      3: ['"At the beginning ___, then ___, and at the end ___."', '"The most important part was ___ because ___."'],
      4: ['"The text shows ___, then develops ___, and finally ___."', '"Overall, the text is mostly about ___ because ___."'],
    },
  },
  {
    id: "responding",
    workshop: "reader",
    name: "Responding to Reading",
    description: "Students share opinions, make connections, and explain thinking about a text",
    frames: {
      1: ['"I like ___."', '"It is ___."', '"Me too!"'],
      2: ['"My favorite part is ___."', '"I think ___ because ___."', '"This reminds me of ___."'],
      3: ['"I think the character ___ because ___."', '"I noticed ___, so I think ___."'],
      4: ['"I infer ___ because the author says ___."', '"My interpretation is ___, and the text supports this when ___."'],
    },
  },
  {
    id: "partner-talk",
    workshop: "shared",
    name: "Partner Talk",
    description: "Students talk with a partner during reading or writing workshop",
    frames: {
      1: ['"I see ___."', '"You draw ___."', '"My turn."'],
      2: ['"I want to add ___."', '"I agree."', '"Can you show me ___?"'],
      3: ['"I agree with you because ___."', '"Can you tell me more about ___?"'],
      4: ['"I would like to build on your idea by saying ___."', '"Another example from the text is ___."'],
    },
  },
  {
    id: "writing",
    workshop: "writer",
    name: "Workshop Writing",
    description: "Students write during opinion, narrative, or informational workshop",
    frames: {
      1: ['"I like ___."', '"I can ___."', '"This is my ___."'],
      2: ['"I think ___ because ___."', '"First ___, then ___."', '"I learned ___."'],
      3: ['"My opinion is ___ because ___."', '"One important detail is ___."', '"At the end ___."'],
      4: ['"I believe ___ because ___."', '"This detail matters because ___."', '"The author teaches the reader ___ by ___."'],
    },
  },
];

export const TRANSLATION_GUIDELINES = {
  appropriate: [
    {
      title: "Clarifying Workshop Directions",
      desc: "Translate key parts of multi-step workshop directions so students can participate independently.",
    },
    {
      title: "Previewing Important Vocabulary",
      desc: "Provide home-language support for essential literacy vocabulary before reading or writing tasks.",
      example: '"Character (personaje) means the people in the story."',
    },
    {
      title: "Checking Comprehension",
      desc: "Allow students to explain a story idea or writing plan in their home language before trying in English.",
    },
    {
      title: "Supporting Family Access",
      desc: "Translate take-home reading or writing expectations so families can help students at home.",
    },
  ],
  notAppropriate: [
    {
      title: "Replacing Daily English Practice",
      desc: "Do not translate every workshop interaction. Students still need to hear and practice classroom English.",
    },
    {
      title: "Translating Entire Mentor Texts",
      desc: "Translate strategically, not line by line. Use visuals, modeling, and chunked text instead.",
    },
    {
      title: "Avoiding Productive Struggle",
      desc: "Students should still try context clues, picture support, and partner help before relying on translation.",
    },
    {
      title: "Using Translation Instead of Scaffolds",
      desc: "Translation should support instruction, not replace explicit language teaching and workshop routines.",
    },
  ],
  digitalTranslator: {
    approved: [
      "Looking up unfamiliar words during independent reading",
      "Clarifying key directions during reading and writing workshop",
      "Checking the meaning of workshop vocabulary or text-dependent words",
      "Helping students talk through ideas before writing in English",
    ],
    notApproved: [
      "Translating an entire book response or writing piece",
      "Copying machine-translated text as original student writing",
      "Using a translator instead of participating in discussion",
      "Skipping teacher-provided scaffolds and going straight to translation",
    ],
    bestPractices: [
      { title: "Try a Scaffold First", desc: "Use visuals, partner talk, and teacher modeling before using a translator." },
      { title: "Use It for Key Words", desc: "Translate the words or phrases that unlock meaning, not every sentence." },
      { title: "Bring It Back to English", desc: "After clarification, help students restate, discuss, or write the idea in English." },
    ],
  },
  scaffoldingHierarchy: [
    "Visuals and gestures",
    "Modeled examples and think-alouds",
    "Simplified English and chunked directions",
    "Sentence stems and language frames",
    "Partner support and oral rehearsal",
    "Graphic organizers and anchor charts",
    "Strategic translation when needed",
  ],
  monitoringChecklist: [
    "Student uses pictures, context, or partner support before translating",
    "Translation use is targeted to important words or directions",
    "Student can restate the idea in English after receiving support",
    "Translation is helping the student participate more independently over time",
    "Student is building workshop vocabulary, not just copying translated language",
    "Student remains engaged in reading, talk, and writing in English",
  ],
  useByLevel: {
    1: "Allow translation for essential directions, workshop routines, and comprehension checks. Encourage oral rehearsal and drawing before English writing.",
    2: "Use translation to unlock directions, key vocabulary, and discussion prompts. Support students in moving from home language planning into short English responses.",
    3: "Use translation strategically for abstract vocabulary and complex texts. Encourage students to attempt English first, then clarify when needed.",
    4: "Limit translation to targeted support for complex academic language. Students should rely mostly on English workshop routines and scaffolds.",
  },
};

export const ASSESSMENTS = {
  1: {
    general: [
      "Read assessment directions aloud and model the task",
      "Use visuals, manipulatives, or picture choices whenever possible",
      "Allow extra time and a quiet setting",
      "Provide home-language clarification for key directions when appropriate",
      "Assess one skill at a time during workshop conferences or small groups",
    ],
    response: [
      "Accept pointing, drawing, matching, and labeling as evidence of understanding",
      "Use oral retell with visuals instead of longer written tasks",
      "Accept one-word responses, copied words, or dictated answers",
      "Allow students to show understanding through acting or sorting",
    ],
    content: [
      "Shorten the number of prompts or questions",
      "Focus on one essential standard or strategy at a time",
      "Use familiar texts and clearly modeled formats",
      "Reduce language load while keeping the literacy goal clear",
    ],
  },
  2: {
    general: [
      "Provide extended time and repeated directions",
      "Use simple language and visuals in the assessment prompt",
      "Offer bilingual glossaries or vocabulary supports",
      "Assess in a small-group or conference setting when helpful",
      "Break the task into manageable steps",
    ],
    response: [
      "Accept short phrases and simple sentences",
      "Use sentence starters for oral and written responses",
      "Allow labeling, sorting, and oral explanation with visuals",
      "Use retell organizers, checklists, or pictures to support response",
    ],
    content: [
      "Reduce the amount of text students must process independently",
      "Focus on comprehension or craft goals rather than language accuracy alone",
      "Provide examples of what a successful response can look like",
      "Assess fewer items with more teacher scaffolding",
    ],
  },
  3: {
    general: [
      "Use clear rubrics and student-friendly checklists",
      "Provide extended time for written reading responses and workshop writing",
      "Clarify key academic vocabulary in prompts",
      "Offer planning tools such as story maps or writing organizers",
      "Use conferencing to verify understanding when needed",
    ],
    response: [
      "Accept connected sentences with some language errors",
      "Use sentence frames to support explanation and evidence",
      "Allow oral explanation before or after a written response",
      "Offer a graphic organizer before a paragraph response",
    ],
    content: [
      "Keep the grade-level literacy objective but reduce unnecessary complexity in directions",
      "Focus on the student's understanding of the text, genre, or strategy",
      "Assess one major reading or writing move at a time when possible",
      "Use mentor examples to clarify expectations",
    ],
  },
  4: {
    general: [
      "Use grade-level assessments with targeted scaffolds",
      "Clarify dense academic language in prompts or rubrics",
      "Allow modest extra time when the language demand is high",
      "Support planning and revision with checklists and anchor charts",
      "Conference around elaboration, evidence, and precision",
    ],
    response: [
      "Expect paragraph-level responses with support as needed",
      "Provide optional evidence and elaboration stems",
      "Allow multiple formats for demonstrating understanding when appropriate",
      "Encourage independent revision after teacher or peer feedback",
    ],
    content: [
      "Maintain grade-level thinking while simplifying confusing wording",
      "Focus on interpretation, craft, organization, and evidence",
      "Assess students on workshop goals rather than grammar perfection alone",
      "Use scaffolded rubrics that separate language development from literacy understanding",
    ],
  },
};
