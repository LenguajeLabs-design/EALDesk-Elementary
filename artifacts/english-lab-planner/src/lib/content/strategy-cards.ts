export type StrategyPurpose = "Narrate" | "Inform" | "Explain" | "Argue" | "Discuss";
export type StrategyDomain = "Listening" | "Speaking" | "Reading" | "Writing";
export type StrategyGradeBand = "2-3" | "4-5";
export type StrategySupportNeed =
  | "Vocabulary"
  | "Sentence structure"
  | "Organization"
  | "Comprehension"
  | "Oral rehearsal"
  | "Confidence/participation";

export type StrategyCard = {
  id: string;
  name: string;
  bestFor: StrategyPurpose[];
  domains: StrategyDomain[];
  bestGradeBands: StrategyGradeBand[];
  bestWidaLevels: number[];
  supportNeeds: StrategySupportNeed[];
  teacherDoes: [string, string, string];
  studentsDo: [string, string, string];
  teacherLanguage: string;
  grade45Example: string;
  reduceScaffold: string[];
};

export type UnitStrategyContext = {
  label: string;
  focus: string;
  notes: string[];
  recommendedGradeBand: StrategyGradeBand;
  recommendedPurpose: StrategyPurpose;
  recommendedSupport: StrategySupportNeed;
};

export const STRATEGY_PURPOSES: StrategyPurpose[] = [
  "Narrate",
  "Inform",
  "Explain",
  "Argue",
  "Discuss",
];

export const STRATEGY_DOMAINS: StrategyDomain[] = [
  "Listening",
  "Speaking",
  "Reading",
  "Writing",
];

export const STRATEGY_GRADE_BANDS: StrategyGradeBand[] = ["2-3", "4-5"];

export const STRATEGY_SUPPORT_NEEDS: StrategySupportNeed[] = [
  "Vocabulary",
  "Sentence structure",
  "Organization",
  "Comprehension",
  "Oral rehearsal",
  "Confidence/participation",
];

export const STRATEGY_CARDS: StrategyCard[] = [
  {
    id: "oral-rehearsal",
    name: "Oral Rehearsal",
    bestFor: ["Narrate", "Inform", "Explain", "Argue"],
    domains: ["Speaking", "Writing"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [1, 2, 3, 4, 5],
    supportNeeds: ["Oral rehearsal", "Sentence structure", "Confidence/participation"],
    teacherDoes: [
      "Names the exact language job before students write or share.",
      "Models one spoken response and keeps it short enough to repeat.",
      "Pairs students to rehearse twice before independent work.",
    ],
    studentsDo: [
      "Say the idea aloud with a partner before writing.",
      "Use a frame, prompt, or key words to hold the language.",
      "Say it again with more detail before moving into independent language.",
    ],
    teacherLanguage: "Before you write, say the idea out loud once, then say it again with one more detail.",
    grade45Example:
      "Before a Grade 5 argument paragraph, students rehearse: 'My claim is that plastic pollution harms oceans because animals eat it by mistake.'",
    reduceScaffold: [
      "Move from full sentence frames to key words only.",
      "Remove the partner script and keep only the prompt.",
      "Ask students to rehearse the same idea more independently on the second turn.",
    ],
  },
  {
    id: "story-map",
    name: "Story Map",
    bestFor: ["Narrate"],
    domains: ["Reading", "Writing", "Speaking"],
    bestGradeBands: ["2-3"],
    bestWidaLevels: [1, 2, 3],
    supportNeeds: ["Organization", "Comprehension", "Oral rehearsal"],
    teacherDoes: [
      "Breaks the story into beginning, middle, end, or scene-by-scene boxes.",
      "Models one event in each box using quick sketches or labels.",
      "Invites students to retell the map before drafting.",
    ],
    studentsDo: [
      "Place the key events in order.",
      "Retell the story or memory using the map.",
      "Draft from the map instead of starting from a blank page.",
    ],
    teacherLanguage: "Show me the three parts first, then tell the story across your map before you write it.",
    grade45Example:
      "In Grade 4 narrative, a student maps the heart of the memory into three scenes: arriving, the turning point, and the reflection at the end.",
    reduceScaffold: [
      "Move from fully labeled boxes to fewer prompts.",
      "Replace pictures with quick written scene titles.",
      "Ask students to create their own story map structure for the next piece.",
    ],
  },
  {
    id: "sequence-strips",
    name: "Sequence Strips",
    bestFor: ["Narrate", "Explain"],
    domains: ["Reading", "Speaking", "Writing"],
    bestGradeBands: ["2-3"],
    bestWidaLevels: [1, 2, 3],
    supportNeeds: ["Organization", "Comprehension", "Oral rehearsal"],
    teacherDoes: [
      "Gives students key events or steps on strips they can sort.",
      "Models temporal words such as first, next, then, finally.",
      "Uses the completed order as a bridge into speaking or writing.",
    ],
    studentsDo: [
      "Arrange events or steps in order.",
      "Rehearse the sequence with a partner using transition words.",
      "Turn the sequence into a short retell, explanation, or paragraph.",
    ],
    teacherLanguage: "Put the parts in order first, then tell me the sequence using first, next, then, and finally.",
    grade45Example:
      "In a Grade 4 science explanation, students order the steps of a volcanic eruption before writing a content paragraph.",
    reduceScaffold: [
      "Remove some of the prepared strips and ask students to generate the missing steps.",
      "Keep the ordering support but remove the transition word bank.",
      "Ask students to move from strips to a blank organizer or paragraph.",
    ],
  },
  {
    id: "past-tense-frames",
    name: "Past-Tense Sentence Frames",
    bestFor: ["Narrate"],
    domains: ["Speaking", "Writing"],
    bestGradeBands: ["2-3"],
    bestWidaLevels: [1, 2, 3],
    supportNeeds: ["Sentence structure", "Confidence/participation"],
    teacherDoes: [
      "Names the target language as past-tense storytelling.",
      "Models one frame with the past-tense verb already filled in.",
      "Lets students say the frame before asking them to write it.",
    ],
    studentsDo: [
      "Use the frame to tell one event clearly.",
      "Swap in their own action, feeling, or dialogue.",
      "Repeat the structure across two or three connected sentences.",
    ],
    teacherLanguage: "Use the frame to tell what already happened, then add one feeling or action detail.",
    grade45Example:
      "A Grade 4 student rehearses: 'At first I hesitated, then I stepped onto the stage, and finally I realized I could do it.'",
    reduceScaffold: [
      "Move from full frames to sentence starters only.",
      "Remove the printed verbs and let students choose their own.",
      "Ask students to retell the same event without the frame after one supported try.",
    ],
  },
  {
    id: "visual-glossary",
    name: "Visual Glossary",
    bestFor: ["Inform", "Explain", "Argue"],
    domains: ["Listening", "Speaking", "Reading", "Writing"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [1, 2, 3, 4],
    supportNeeds: ["Vocabulary", "Comprehension"],
    teacherDoes: [
      "Preselects the 5-8 words students truly need for the lesson.",
      "Pairs each word with a sketch, image, or simple explanation.",
      "Reuses the same words in talk, reading, and writing tasks.",
    ],
    studentsDo: [
      "Match words to visuals and meanings.",
      "Use the glossary during speaking or writing.",
      "Return to the words as they read and write more independently.",
    ],
    teacherLanguage: "These are the lesson words you will need today. Use the picture and the example to help you choose the right word.",
    grade45Example:
      "Before a Grade 5 research-based argument, students get a visual glossary for claim, evidence, source, and impact.",
    reduceScaffold: [
      "Keep the words but remove the pictures once students know them.",
      "Replace full definitions with short reminders or examples.",
      "Ask students to build their own glossary entries for new unit vocabulary.",
    ],
  },
  {
    id: "labeled-diagram",
    name: "Labeled Diagram",
    bestFor: ["Inform", "Explain"],
    domains: ["Reading", "Writing", "Speaking"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [1, 2, 3, 4],
    supportNeeds: ["Vocabulary", "Organization", "Comprehension"],
    teacherDoes: [
      "Models how to label key parts before writing full explanations.",
      "Connects each label to a sentence students might later write.",
      "Uses the diagram to hold both content knowledge and language.",
    ],
    studentsDo: [
      "Label the important parts, features, or stages.",
      "Talk through what each label means.",
      "Expand labels into fuller teaching or explanation sentences.",
    ],
    teacherLanguage: "Start by labeling what matters, then tell what each part does or why it matters.",
    grade45Example:
      "In Grade 4 discipline-based writing, students label a volcano diagram before drafting a science explanation.",
    reduceScaffold: [
      "Move from teacher-provided diagrams to student-created ones.",
      "Reduce the number of prompts attached to each label.",
      "Ask students to explain from the diagram without reading directly from it.",
    ],
  },
  {
    id: "paragraph-frame",
    name: "Paragraph Frame",
    bestFor: ["Inform", "Explain", "Argue"],
    domains: ["Writing", "Speaking"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [2, 3, 4],
    supportNeeds: ["Sentence structure", "Organization"],
    teacherDoes: [
      "Builds a short paragraph structure with a topic, detail, and explanation slot.",
      "Models the paragraph orally before students draft.",
      "Keeps the frame tied to the unit language purpose, not generic filler.",
    ],
    studentsDo: [
      "Use the frame to organize one clear paragraph.",
      "Fill in facts, reasons, or explanation from the lesson.",
      "Reread the frame to check whether the paragraph still makes sense.",
    ],
    teacherLanguage: "Use the frame to build one strong paragraph, not a whole page. Say it first, then write it.",
    grade45Example:
      "A Grade 5 student uses a paragraph frame to explain one reason plastic pollution harms marine animals, then adds one researched fact.",
    reduceScaffold: [
      "Move from full paragraph frames to topic sentence starters only.",
      "Remove one support line at a time so students supply more of the structure.",
      "Ask students to write a second paragraph without the frame but with the same pattern.",
    ],
  },
  {
    id: "because-but-so",
    name: "Because / But / So",
    bestFor: ["Explain", "Argue", "Discuss"],
    domains: ["Speaking", "Writing"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [1, 2, 3, 4],
    supportNeeds: ["Sentence structure", "Oral rehearsal", "Comprehension"],
    teacherDoes: [
      "Chooses one connector at a time based on the lesson demand.",
      "Models how the connector changes the thinking, not just the grammar.",
      "Lets students rehearse several ideas orally before writing one.",
    ],
    studentsDo: [
      "Use because, but, or so to connect ideas.",
      "Try the same idea with a different connector and notice the change.",
      "Use the pattern in speaking first, then in writing.",
    ],
    teacherLanguage: "Choose the connector that matches your thinking: because explains, but contrasts, and so shows the result.",
    grade45Example:
      "In Grade 5 literary essay talk, a student says, 'The character seems calm, but the dialogue suggests she is actually worried.'",
    reduceScaffold: [
      "Remove the starter and keep only the connector cue.",
      "Ask students to generate their own two connected ideas before choosing a connector.",
      "Challenge students to explain without seeing the words because, but, or so on the page.",
    ],
  },
  {
    id: "cause-effect-frames",
    name: "Cause and Effect Frames",
    bestFor: ["Explain"],
    domains: ["Speaking", "Writing", "Reading"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [1, 2, 3, 4],
    supportNeeds: ["Sentence structure", "Comprehension", "Organization"],
    teacherDoes: [
      "Names the lesson as explaining why something happened.",
      "Models one complete cause-and-effect statement with lesson vocabulary.",
      "Supports oral rehearsal before students write the explanation.",
    ],
    studentsDo: [
      "Identify what happened and why.",
      "Use the frame to connect cause and effect.",
      "Expand the explanation with one additional detail or example.",
    ],
    teacherLanguage: "Today we are explaining why something happened, so use the frame to connect the event and the reason.",
    grade45Example:
      "In Grade 4 science, a student writes: 'One reason the volcano erupted is because pressure built under the earth.'",
    reduceScaffold: [
      "Move from full frames to one starter such as One reason...",
      "Remove the printed causal phrase and ask students to choose their own.",
      "Ask for a second explanation sentence without support.",
    ],
  },
  {
    id: "process-diagram",
    name: "Process Diagram",
    bestFor: ["Explain", "Inform"],
    domains: ["Reading", "Writing", "Speaking"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [1, 2, 3, 4],
    supportNeeds: ["Organization", "Vocabulary", "Comprehension"],
    teacherDoes: [
      "Turns a process into visible steps with arrows, labels, and key verbs.",
      "Models oral explanation from the diagram before writing.",
      "Keeps the diagram focused on the most important steps only.",
    ],
    studentsDo: [
      "Map the process in order.",
      "Use the diagram to explain each step aloud.",
      "Turn the steps into a short explanation or paragraph.",
    ],
    teacherLanguage: "Use the arrows to show the order, then explain what changes at each step.",
    grade45Example:
      "In Grade 4 content writing, students build a water-cycle process diagram before drafting an explanation.",
    reduceScaffold: [
      "Remove some of the printed labels and ask students to add them.",
      "Shift from diagram plus sentence frames to diagram alone.",
      "Ask students to explain the process from memory after using the visual once.",
    ],
  },
  {
    id: "sentence-expansion",
    name: "Sentence Expansion",
    bestFor: ["Explain", "Inform", "Narrate"],
    domains: ["Writing", "Speaking"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [2, 3, 4],
    supportNeeds: ["Sentence structure", "Vocabulary"],
    teacherDoes: [
      "Starts with a simple sentence and models how to grow it.",
      "Adds one kind of detail at a time: who, when, where, why, or how.",
      "Connects the expansion move to the current unit language demand.",
    ],
    studentsDo: [
      "Begin with one clear core sentence.",
      "Add a detail layer by layer.",
      "Reread to check that the sentence is fuller but still clear.",
    ],
    teacherLanguage: "Start with a strong short sentence, then stretch it with one more detail that helps the reader understand.",
    grade45Example:
      "Grade 5 journalism: 'Students use the playground.' becomes 'More students now use the new playground safely during recess because the space is larger and easier to supervise.'",
    reduceScaffold: [
      "Move from prompted detail types to self-chosen elaboration.",
      "Remove the expansion checklist after one modeled example.",
      "Ask students to expand only the sentences that matter most, not every sentence.",
    ],
  },
  {
    id: "claim-evidence-reason-frame",
    name: "Claim / Evidence / Reason Frame",
    bestFor: ["Argue", "Explain"],
    domains: ["Speaking", "Writing", "Reading"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [2, 3, 4, 5],
    supportNeeds: ["Organization", "Sentence structure", "Comprehension"],
    teacherDoes: [
      "Separates the paragraph into claim, evidence, and explanation so the logic is visible.",
      "Models how the evidence supports the claim instead of sitting there alone.",
      "Uses one lesson example before students try their own version.",
    ],
    studentsDo: [
      "State the claim clearly.",
      "Add one specific piece of evidence.",
      "Explain why that evidence matters.",
    ],
    teacherLanguage: "Give the reader your claim, then your proof, then tell what that proof shows.",
    grade45Example:
      "In Grade 5 research-based argument, a student writes: 'School gardens should be added because they help students learn science. According to one source, students understand plant systems better when they observe living things directly. This evidence matters because it shows the garden is part of learning, not just decoration.'",
    reduceScaffold: [
      "Move from labeled boxes to a simple paragraph cue.",
      "Remove the explanation starter once students can state why the evidence matters.",
      "Ask students to integrate the structure without labeling each part.",
    ],
  },
  {
    id: "opinion-continuum",
    name: "Opinion Continuum",
    bestFor: ["Argue", "Discuss"],
    domains: ["Listening", "Speaking", "Reading"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [1, 2, 3, 4, 5],
    supportNeeds: ["Confidence/participation", "Oral rehearsal", "Comprehension"],
    teacherDoes: [
      "Sets up a continuum from strongly agree to strongly disagree.",
      "Models one reason students could stand in a certain place.",
      "Uses movement to lower the pressure before students write.",
    ],
    studentsDo: [
      "Choose where they stand based on their opinion.",
      "Explain their choice with a reason.",
      "Listen to a peer and decide whether to stay or shift.",
    ],
    teacherLanguage: "Stand where your thinking fits, then be ready to say one reason for your choice.",
    grade45Example:
      "Before a Grade 5 debate on plastic bans, students place themselves on a continuum and rehearse one reason with a partner.",
    reduceScaffold: [
      "Move from teacher-provided reasons to student-generated ones.",
      "Remove the opinion sentence starters after the first round.",
      "Ask students to write the same argument independently after discussing it.",
    ],
  },
  {
    id: "debate-stems",
    name: "Debate Stems",
    bestFor: ["Argue", "Discuss"],
    domains: ["Speaking", "Listening", "Writing"],
    bestGradeBands: ["4-5"],
    bestWidaLevels: [2, 3, 4, 5],
    supportNeeds: ["Sentence structure", "Confidence/participation", "Oral rehearsal"],
    teacherDoes: [
      "Chooses 3-4 stems that match the lesson discussion.",
      "Models how to agree, disagree, and extend respectfully.",
      "Keeps the talk focused on evidence, not only opinions.",
    ],
    studentsDo: [
      "Use the stems to enter a debate or discussion.",
      "Respond to a classmate with evidence or reasoning.",
      "Practice building longer academic talk turns.",
    ],
    teacherLanguage: "Use the stem to enter the conversation, then add your own reason or evidence.",
    grade45Example:
      "In Grade 5 literary essay rehearsal, students use stems such as 'I agree that ___, but I think the deeper idea is ___ because ___.'",
    reduceScaffold: [
      "Move from full stems to discourse words only, such as however or for example.",
      "Post fewer stems and let students choose more independently.",
      "Ask students to respond without reading directly from the stem bank.",
    ],
  },
  {
    id: "turn-and-talk",
    name: "Turn and Talk",
    bestFor: ["Discuss", "Explain", "Argue"],
    domains: ["Listening", "Speaking"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [1, 2, 3, 4, 5],
    supportNeeds: ["Confidence/participation", "Oral rehearsal", "Comprehension"],
    teacherDoes: [
      "Asks one sharp prompt instead of many questions at once.",
      "Models the kind of answer students should give.",
      "Builds in time for both partners to speak.",
    ],
    studentsDo: [
      "Talk through the idea with one partner.",
      "Listen and respond to what the partner said.",
      "Return to whole group with a stronger answer.",
    ],
    teacherLanguage: "Turn and tell your partner your answer, then add one more idea after you hear theirs.",
    grade45Example:
      "In Grade 4 literary essay planning, students turn and talk about what a scene shows about the character before drafting a claim.",
    reduceScaffold: [
      "Remove the sentence stem after one oral round.",
      "Shorten the prompt support from a full model to one reminder.",
      "Ask students to summarize their partner's idea before sharing their own.",
    ],
  },
  {
    id: "ask-answer-add",
    name: "Ask, Answer, Add",
    bestFor: ["Discuss"],
    domains: ["Listening", "Speaking"],
    bestGradeBands: ["4-5"],
    bestWidaLevels: [2, 3, 4, 5],
    supportNeeds: ["Confidence/participation", "Sentence structure", "Comprehension"],
    teacherDoes: [
      "Teaches discussion as a three-part routine: ask, answer, add.",
      "Models how each part sounds with one short example.",
      "Keeps the routine visible during partner or small-group talk.",
    ],
    studentsDo: [
      "Ask a partner a focused question.",
      "Answer using a complete idea.",
      "Add on with a connection, example, or challenge.",
    ],
    teacherLanguage: "First ask, then answer, then add one more idea so the conversation grows.",
    grade45Example:
      "In Grade 5 discussion, one student asks about the author's message, the partner answers with evidence, and the first student adds another interpretation.",
    reduceScaffold: [
      "Remove the posted routine words once students know the sequence.",
      "Move from teacher-given questions to student-generated ones.",
      "Ask students to sustain two or three exchanges without looking at the routine card.",
    ],
  },
  {
    id: "partner-rehearsal",
    name: "Partner Rehearsal",
    bestFor: ["Narrate", "Explain", "Argue", "Discuss"],
    domains: ["Speaking", "Writing"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [1, 2, 3, 4],
    supportNeeds: ["Oral rehearsal", "Confidence/participation", "Sentence structure"],
    teacherDoes: [
      "Gives partners a specific rehearsal job, not just 'talk about it.'",
      "Models what a first draft of talk might sound like.",
      "Listens for language students can then carry into writing.",
    ],
    studentsDo: [
      "Say the idea out loud before writing it.",
      "Revise the language after hearing a partner.",
      "Carry a stronger sentence or phrase into the draft.",
    ],
    teacherLanguage: "Rehearse the exact sentence you want to write, then improve it once before you put it on paper.",
    grade45Example:
      "Before a Grade 5 journalism draft, partners rehearse the article lead aloud and decide which version sounds strongest for readers.",
    reduceScaffold: [
      "Move from full rehearsal prompts to one short language target.",
      "Remove the partner script and keep only the task.",
      "Ask students to rehearse silently or independently after they know the routine.",
    ],
  },
  {
    id: "give-one-get-one",
    name: "Give One, Get One",
    bestFor: ["Discuss", "Inform", "Explain"],
    domains: ["Listening", "Speaking", "Reading", "Writing"],
    bestGradeBands: ["2-3", "4-5"],
    bestWidaLevels: [2, 3, 4, 5],
    supportNeeds: ["Confidence/participation", "Vocabulary", "Comprehension"],
    teacherDoes: [
      "Frames the task as exchanging one idea, fact, or example at a time.",
      "Models how to record a partner's language or thinking quickly.",
      "Uses it when students need more ideas before writing or discussion.",
    ],
    studentsDo: [
      "Share one idea with a partner.",
      "Collect one new idea from the partner.",
      "Return with a richer bank of facts, examples, or language.",
    ],
    teacherLanguage: "Give one useful idea, then collect one from your partner that you might use in your own work.",
    grade45Example:
      "In Grade 4 content writing, students exchange one strong volcano fact and collect one new vocabulary word from a partner.",
    reduceScaffold: [
      "Move from structured recording sheets to quick note-taking.",
      "Reduce the number of teacher-provided prompts before the exchange.",
      "Ask students to decide independently which partner idea is worth keeping.",
    ],
  },
  {
    id: "gallery-walk",
    name: "Gallery Walk",
    bestFor: ["Discuss", "Argue", "Inform"],
    domains: ["Reading", "Speaking", "Listening", "Writing"],
    bestGradeBands: ["4-5"],
    bestWidaLevels: [2, 3, 4, 5],
    supportNeeds: ["Confidence/participation", "Vocabulary", "Comprehension"],
    teacherDoes: [
      "Posts models, ideas, or student work around the room with one clear noticing task.",
      "Models how to respond briefly at each stop.",
      "Uses the walk to generate language before a larger discussion or writing task.",
    ],
    studentsDo: [
      "Read or view several examples.",
      "Talk or jot one response at each stop.",
      "Use what they noticed to strengthen their own thinking or writing.",
    ],
    teacherLanguage: "At each stop, notice one move you could borrow and one idea you want to talk about.",
    grade45Example:
      "Before Grade 5 argument writing, students do a gallery walk of sample claims and evidence, then discuss which examples sound most convincing.",
    reduceScaffold: [
      "Move from teacher-provided noticing prompts to student-generated observations.",
      "Reduce the written response support at each station.",
      "Ask students to synthesize what they noticed without returning to the posted prompts.",
    ],
  },
];

export const UNIT_STRATEGY_CONTEXT: Record<string, UnitStrategyContext> = {
  "Making Small Moments Big": {
    label: "Grade 2 Unit 1: Making Small Moments Big",
    focus: "Narrative small moments",
    recommendedGradeBand: "2-3",
    recommendedPurpose: "Narrate",
    recommendedSupport: "Oral rehearsal",
    notes: [
      "Start with oral rehearsal of one true event before drafting.",
      "Prioritize sequence language, feeling words, and one important detail.",
      "Use writing and speaking supports together so students can say the story before they write it.",
    ],
  },
  "The Art of Information Writing": {
    label: "Grade 3 Unit 1: The Art of Information Writing",
    focus: "Information writing",
    recommendedGradeBand: "2-3",
    recommendedPurpose: "Inform",
    recommendedSupport: "Organization",
    notes: [
      "Help students group facts under simple categories or headings.",
      "Prioritize topic vocabulary, explaining language, and oral rehearsal of facts.",
      "Use writing supports to move students from naming facts to teaching readers clearly.",
    ],
  },
  "Spinning True Stories into Gold": {
    label: "Grade 4 Unit 1: Spinning True Stories into Gold",
    focus: "Personal narrative",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Narrate",
    recommendedSupport: "Oral rehearsal",
    notes: [
      "Focus on one true story and stretch the heart of the moment.",
      "Prioritize detail, pacing, dialogue, and reflective meaning.",
      "Use speaking supports to rehearse the scene before students revise or elaborate.",
    ],
  },
  "Discipline-Based Writing BENDS 1 & 2": {
    label: "Grade 4 Unit 2: Discipline-Based Writing BENDS 1 & 2",
    focus: "Content-based explanatory writing",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Explain",
    recommendedSupport: "Vocabulary",
    notes: [
      "Help students write from science or social studies learning using clear topic language and organized facts.",
      "Prioritize explanation language, topic vocabulary, and grouping details under one main idea.",
      "Use speaking rehearsal before writing so students can say the explanation first.",
    ],
  },
  "Literary Essay: Writing About Fiction": {
    label: "Grade 4 Unit 3: Literary Essay: Writing About Fiction",
    focus: "Literary essay",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Argue",
    recommendedSupport: "Sentence structure",
    notes: [
      "Help students move from noticing a text detail to making a claim about character, theme, or meaning.",
      "Prioritize claim language, evidence, and explanation over long retellings.",
      "Use oral rehearsal before drafting so students can test their interpretation first.",
    ],
  },
  "Boxes and Bullets: Writing Essays and Arguments": {
    label: "Grade 4 Unit 4: Boxes and Bullets",
    focus: "Essay and argument structure",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Argue",
    recommendedSupport: "Organization",
    notes: [
      "Help students organize claims and reasons clearly before asking for elaboration.",
      "Prioritize boxes-and-bullets structure, reason language, and simple evidence.",
      "Use oral rehearsal and planning organizers together so students can hear the logic before they write it.",
    ],
  },
  "Discipline-Based Writing BENDS 3 & 4": {
    label: "Grade 4 Unit 5: Discipline-Based Writing BENDS 3 & 4",
    focus: "Independent subject-area explanation",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Explain",
    recommendedSupport: "Organization",
    notes: [
      "Help students explain ideas across content areas with more independence and synthesis.",
      "Prioritize explanation language, grouping of facts, and academic content vocabulary.",
      "Use oral rehearsal to sort important ideas before drafting longer content writing.",
    ],
  },
  "Turning Life into Literature": {
    label: "Grade 5 Unit 1: Turning Life into Literature",
    focus: "Personal narrative with reflection",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Narrate",
    recommendedSupport: "Sentence structure",
    notes: [
      "Help students connect outer action to inner thinking.",
      "Prioritize meaningful detail, reflection, and stronger narrative structure.",
      "Use writing and speaking supports to build significance, not just sequence.",
    ],
  },
  "Literary Essay: Opening Texts and Seeing More": {
    label: "Grade 5 Unit 2: Literary Essay",
    focus: "Interpretive literary essay",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Argue",
    recommendedSupport: "Comprehension",
    notes: [
      "Help students move from noticing text details to making a claim about character, theme, or author’s message.",
      "Prioritize claim language, evidence, and explanation over long unsupported summaries.",
      "Use speaking rehearsal before drafting so students can say the interpretation first.",
    ],
  },
  "Research-Based Argument": {
    label: "Grade 5 Unit 3: Research-Based Argument",
    focus: "Source-based argument writing",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Argue",
    recommendedSupport: "Organization",
    notes: [
      "Help students separate personal opinion from researched claim-and-evidence writing.",
      "Prioritize source language, evidence integration, and clear reasoning.",
      "Use oral rehearsal to test whether the argument sounds logical before drafting.",
    ],
  },
  "Graphic Novels": {
    label: "Grade 5 Unit 4: Graphic Novels",
    focus: "Graphic storytelling through panels, captions, dialogue, and scene pacing",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Narrate",
    recommendedSupport: "Organization",
    notes: [
      "Help students decide what belongs in the picture and what belongs in captions, speech bubbles, or short narration.",
      "Prioritize panel sequence, scene clarity, concise dialogue, and how page turns or layout affect pacing.",
      "Use oral rehearsal and sketch planning together so students can map panels, captions, and key dialogue before drafting.",
    ],
  },
  "Journalism: Researching and Writing Articles": {
    label: "Grade 5 Unit 5: Journalism",
    focus: "Journalistic reporting",
    recommendedGradeBand: "4-5",
    recommendedPurpose: "Inform",
    recommendedSupport: "Organization",
    notes: [
      "Help students organize facts clearly for readers rather than just collecting information.",
      "Prioritize source use, factual precision, and report structure.",
      "Use oral rehearsal to sort key facts and decide what belongs in the article.",
    ],
  },
};

export const STRATEGY_GRADE_BAND_EXAMPLES: Record<
  StrategyCard["id"],
  Record<StrategyGradeBand, string>
> = {
  "oral-rehearsal": {
    "2-3": "Before a Grade 2 small-moment draft, students rehearse: 'First I climbed up. Then I jumped. I felt scared and happy.'",
    "4-5": "Before a Grade 5 argument paragraph, students rehearse: 'My claim is that plastic pollution harms oceans because animals eat it by mistake.'",
  },
  "story-map": {
    "2-3": "In Grade 2 narrative, a student maps three boxes for the small moment: getting on the diving board, looking down, and jumping.",
    "4-5": "In Grade 4 narrative, a student maps the heart of the memory into three scenes: arriving, the turning point, and the reflection at the end.",
  },
  "sequence-strips": {
    "2-3": "In Grade 3 information writing, students sort the steps of how a seed grows before turning them into teaching sentences.",
    "4-5": "In a Grade 4 science explanation, students order the steps of a volcanic eruption before writing a content paragraph.",
  },
  "past-tense-frames": {
    "2-3": "A Grade 2 student rehearses: 'First I ran to the slide. Then I fell. After that I got up and laughed.'",
    "4-5": "A Grade 4 student rehearses: 'At first I hesitated, then I stepped onto the stage, and finally I realized I could do it.'",
  },
  "visual-glossary": {
    "2-3": "Before a Grade 3 information book, students use a visual glossary for habitat, predator, prey, and shelter.",
    "4-5": "Before a Grade 5 research-based argument, students get a visual glossary for claim, evidence, source, and impact.",
  },
  "labeled-diagram": {
    "2-3": "In Grade 2 nonfiction, students label a butterfly diagram before writing one fact about each stage.",
    "4-5": "In Grade 4 discipline-based writing, students label a volcano diagram before drafting a science explanation.",
  },
  "paragraph-frame": {
    "2-3": "A Grade 3 student uses a paragraph frame to teach about sharks: topic sentence, one fact, and why it matters.",
    "4-5": "A Grade 5 student uses a paragraph frame to explain one reason plastic pollution harms marine animals, then adds one researched fact.",
  },
  "because-but-so": {
    "2-3": "In Grade 3 talk, a student says, 'The plant grew because it got water and sun.'",
    "4-5": "In Grade 5 literary essay talk, a student says, 'The character seems calm, but the dialogue suggests she is actually worried.'",
  },
  "cause-effect-frames": {
    "2-3": "In Grade 3 science, a student writes: 'One reason the ice melted is because the sun was hot.'",
    "4-5": "In Grade 4 science, a student writes: 'One reason the volcano erupted is because pressure built under the earth.'",
  },
  "process-diagram": {
    "2-3": "In Grade 3 information writing, students map the process of how bees make honey before explaining it aloud.",
    "4-5": "In Grade 4 content writing, students build a water-cycle process diagram before drafting an explanation.",
  },
  "sentence-expansion": {
    "2-3": "Grade 2 opinion writing: 'Recess is fun.' becomes 'Recess is fun because I can run with my friends and play soccer.'",
    "4-5": "Grade 5 journalism: 'Students use the playground.' becomes 'More students now use the new playground safely during recess because the space is larger and easier to supervise.'",
  },
  "claim-evidence-reason-frame": {
    "2-3": "In Grade 3 opinion writing, a student writes: 'I think school should have more plants. One reason is that plants make the classroom feel calm. This matters because students can learn in a better space.'",
    "4-5": "In Grade 5 research-based argument, a student writes: 'School gardens should be added because they help students learn science. According to one source, students understand plant systems better when they observe living things directly. This evidence matters because it shows the garden is part of learning, not just decoration.'",
  },
  "opinion-continuum": {
    "2-3": "Before a Grade 3 opinion paragraph, students stand on a continuum to show whether class pets are a good idea and say one reason.",
    "4-5": "Before a Grade 5 debate on plastic bans, students place themselves on a continuum and rehearse one reason with a partner.",
  },
  "debate-stems": {
    "2-3": "In late Grade 3 discussion, students use stems like 'I agree because ___' and 'I think ___ too' during a simple opinion talk.",
    "4-5": "In Grade 5 literary essay rehearsal, students use stems such as 'I agree that ___, but I think the deeper idea is ___ because ___.'",
  },
  "turn-and-talk": {
    "2-3": "In Grade 2 read-aloud talk, students turn and tell a partner what the character did and how the character felt.",
    "4-5": "In Grade 4 literary essay planning, students turn and talk about what a scene shows about the character before drafting a claim.",
  },
  "ask-answer-add": {
    "2-3": "In Grade 3 discussion, one student asks about the main idea, the partner answers, and the first student adds one more fact from the text.",
    "4-5": "In Grade 5 discussion, one student asks about the author's message, the partner answers with evidence, and the first student adds another interpretation.",
  },
  "partner-rehearsal": {
    "2-3": "Before a Grade 2 small-moment draft, partners rehearse one page at a time so the writer can hear the story before writing.",
    "4-5": "Before a Grade 5 journalism draft, partners rehearse the article lead aloud and decide which version sounds strongest for readers.",
  },
  "give-one-get-one": {
    "2-3": "In Grade 3 information writing, students share one fact about their topic and collect one new fact or vocabulary word from a partner.",
    "4-5": "In Grade 4 content writing, students exchange one strong volcano fact and collect one new vocabulary word from a partner.",
  },
  "gallery-walk": {
    "2-3": "Before Grade 3 opinion writing, students walk around sample reasons and note one idea they could borrow for their own writing.",
    "4-5": "Before Grade 5 argument writing, students do a gallery walk of sample claims and evidence, then discuss which examples sound most convincing.",
  },
};
