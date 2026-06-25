import type { GradeId, WorkshopId, YearlyOverviewUnit } from "@/lib/data";

export const YEARLY_OVERVIEWS: Record<WorkshopId, Record<GradeId, YearlyOverviewUnit[]>> = {
  reader: {
    K: [
      { grade: "K", id: "We Are Readers", title: "We Are Readers", window: "Start of Year", focus: "Launch reading workshop routines and early reading identity work.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "K", id: "Sharing Reading", title: "Sharing Reading", window: "Early Year", focus: "Build shared reading habits, oral language, and text participation routines.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "K", id: "Super Powers: Reading with Phonics and Sight Word Power", title: "Super Powers: Reading with Phonics and Sight Word Power", window: "Middle of Year", focus: "Strengthen decoding, sight word use, and strategic early reading behaviors.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "K", id: "Boosting Reading Power", title: "Boosting Reading Power", window: "Later Year", focus: "Grow stamina, monitoring, and flexible problem-solving while reading.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "K", id: "Becoming Avid Readers", title: "Becoming Avid Readers", window: "End of Year", focus: "Support independence, volume, and joyful reading habits at the close of the year.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
    ],
    "1": [
      { grade: "1", id: "Building Good Reading Habits", title: "Building Good Reading Habits", window: "Start of Year", focus: "Establish independence, stamina, and foundational workshop habits.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "1", id: "Word Detectives", title: "Word Detectives", window: "Early Year", focus: "Build word-solving strategies and confidence when tackling unfamiliar words.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "1", id: "Learning about the World", title: "Learning about the World", window: "Middle of Year", focus: "Use informational reading to grow knowledge and topic vocabulary.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "1", id: "Readers Have Big Jobs to Do", title: "Readers Have Big Jobs to Do", window: "Later Year", focus: "Deepen comprehension talk and strategic thinking in independent reading.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "1", id: "Becoming Avid Readers", title: "Becoming Avid Readers", window: "End of Year", focus: "Close the year by strengthening reading identity, volume, and independence.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
    ],
    "2": [
      { grade: "2", id: "Becoming a Big Kid Reader", title: "Becoming a Big Kid Reader", window: "Start of Year", focus: "Launch second-grade reading workshop with independence and stamina.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "2", id: "Becoming Experts", title: "Becoming Experts", window: "Early Year", focus: "Grow informational reading routines and topic expertise.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "2", id: "Tackling Longer Words and Longer Books", title: "Tackling Longer Words and Longer Books", window: "Middle of Year", focus: "Increase fluency and problem-solving for more complex texts.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "2", id: "Stepping into the World of the Story", title: "Stepping into the World of the Story", window: "Later Year", focus: "Support deeper story comprehension, empathy, and interpretation.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "2", id: "Growing Knowledge Together", title: "Growing Knowledge Together", window: "End of Year", focus: "Use shared inquiry and text sets to build knowledge collaboratively.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
    ],
    "3": [
      { grade: "3", id: "Reading Series Fiction", title: "Reading Series Fiction", window: "Start of Year", focus: "Launch third-grade reading workshop through character, series, and habits of fiction reading.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "3", id: "Reading Nonfiction Text Sets: Plants and Their Adaptations", title: "Reading Nonfiction Text Sets: Plants and Their Adaptations", window: "Early Year", focus: "Build knowledge from text sets while practicing informational reading strategies.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "3", id: "The Elements of Story", title: "The Elements of Story", window: "Middle of Year", focus: "Study plot, character, and story structure with stronger analytical talk.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "3", id: "Animal Research Groups", title: "Animal Research Groups", window: "Later Year", focus: "Use research groups and nonfiction texts to build understanding and discussion.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "3", id: "Mystery Reading", title: "Mystery Reading", window: "End of Year", focus: "Apply inference and evidence work through genre study in mystery texts.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
    ],
    "4": [
      { grade: "4", id: "Close Reading of Fiction: Character and Theme", title: "Close Reading of Fiction: Character and Theme", window: "Start of Year", focus: "Launch close reading work centered on character change and theme.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "4", id: "Digging into Nonfiction: Rocks and Volcanoes", title: "Digging into Nonfiction: Rocks and Volcanoes", window: "Early Year", focus: "Use content-rich nonfiction to strengthen knowledge building and evidence work.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "4", id: "Drama-Ready Reading: Bringing Characters to Life", title: "Drama-Ready Reading: Bringing Characters to Life", window: "Middle of Year", focus: "Deepen character interpretation through expressive, performance-oriented reading.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "4", id: "Life Stories: Reading Biographies to Inspire and Instruct", title: "Life Stories: Reading Biographies to Inspire and Instruct", window: "Later Year", focus: "Study biography as a genre for knowledge, inspiration, and interpretation.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "4", id: "Historical Fiction", title: "Historical Fiction", window: "End of Year", focus: "Support genre study through context, interpretation, and historical understanding.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
    ],
    "5": [
      { grade: "5", id: "Reading Interpretively with Partners and Clubs", title: "Reading Interpretively with Partners and Clubs", window: "Start of Year", focus: "Launch interpretive reading and collaborative discussion in clubs and partnerships.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "5", id: "Researching the Universe", title: "Researching the Universe", window: "Early Year", focus: "Read across sources to build knowledge and synthesize information.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "5", id: "Reading About Debatable Topics", title: "Reading About Debatable Topics", window: "Middle of Year", focus: "Study argument, perspective, and evidence across complex texts.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "5", id: "Fantasy Book Clubs", title: "Fantasy Book Clubs", window: "Later Year", focus: "Support interpretation, symbolism, and discussion through fantasy genre work.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "5", id: "Media Literacy Skills", title: "Media Literacy Skills", window: "End of Year", focus: "Extend critical reading to multimedia and contemporary information sources.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
    ],
  },
  writer: {
    K: [
      { grade: "K", id: "Launching the Writing Workshop", title: "Launching the Writing Workshop", window: "Start of Year", focus: "Introduce workshop routines, drawing, oral rehearsal, and early composing habits.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "K", id: "Show and Tell Writing", title: "Show and Tell Writing", window: "Early Year", focus: "Support young writers in sharing ideas through pictures, labels, and simple text.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "K", id: "Writing for Readers: Writing Readable True Stories", title: "Writing for Readers: Writing Readable True Stories", window: "Middle of Year", focus: "Build readable narrative writing for authentic audiences.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "K", id: "Persuasive Writing of All Kinds: Using Words to Make a Change", title: "Persuasive Writing of All Kinds: Using Words to Make a Change", window: "End of Year", focus: "Help students use opinions and reasons to influence readers and listeners.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
    ],
    "1": [
      { grade: "1", id: "Small Moments", title: "Small Moments", window: "Start of Year", focus: "Launch first-grade narrative writing through focused, true stories.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "1", id: "Topic Books", title: "Topic Books", window: "Early Year", focus: "Develop informational writing through topic-based teaching books.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "1", id: "Writing Reviews", title: "Writing Reviews", window: "Middle of Year", focus: "Support opinion writing with preferences, judgments, and reasons.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
      { grade: "1", id: "From Scenes to Series: Writing Fiction", title: "From Scenes to Series: Writing Fiction", window: "End of Year", focus: "Grow fiction writing through scenes, series patterns, and character work.", standards: [], standardsPlaceholder: "TBD from Mossflower curriculum map or standards alignment chart." },
    ],
    "2": [
      {
        grade: "2",
        id: "Making Small Moments Big",
        title: "Making Small Moments Big",
        window: "Start of Year",
        focus: "Deepen narrative writing through elaboration and storytelling craft.",
        standards: ["W.2.3", "W.2.5"],
        standardsPlaceholder: "Core CCSS aligned to the Grade 2 narrative unit; exact checklist text did not extract cleanly and the full Mossflower unit map is still preferred.",
        scaffoldNotes: [
          "Rehearse orally with touch-and-tell story maps and a small-moment checkup before drafting.",
          "Use turn-the-page transition words and ending choices to help students stretch one event across pages.",
          "Conference around mood, feeling words, and character actions so students add what is happening outside and inside the story.",
        ],
        languageDemands: [
          "Retell one event in sequence with clear temporal language.",
          "Expand oral storytelling into detailed sentences on the page.",
          "Name feelings, actions, and dialogue in ways the reader can picture.",
        ],
        mentorTexts: [
          {
            title: "Owl Moon",
            author: "Jane Yolen",
            teachingNote: "Use selected pages to show how a tiny event can be stretched with sensory detail, silence, and feeling.",
          },
          {
            title: "Jabari Jumps",
            author: "Gaia Cornwall",
            teachingNote: "Highlight inner thinking, pacing, and how one small moment becomes a full, meaningful story.",
          },
          {
            title: "Shortcut",
            author: "Donald Crews",
            teachingNote: "Notice how sequence and tension help writers hold one event together from beginning to end.",
          },
        ],
        modelSamples: {
          1: {
            sample: "I went to the park. I climb. I was scared. Then I jump.",
            whatThisShows: "A WIDA 1 writer may name the event with simple present or mixed tense sentences and rely on oral rehearsal to fill in missing details.",
          },
          2: {
            sample: "First I climbed the ladder. Then I looked down and felt scared. At the end I jumped into the water.",
            whatThisShows: "A WIDA 2 sample shows clear sequence and feeling language, even when the piece stays short and patterned.",
          },
          3: {
            sample: "In this small moment, I climbed higher and higher until I could see the whole pool. My hands were shaking, but I still jumped. When I splashed in, I felt proud.",
            whatThisShows: "A WIDA 3 writer can stretch the moment with connected sentences, actions, and a simple emotional payoff.",
          },
          4: {
            sample: "I held the railing and looked down at the bright blue water below me. For one second, everything felt still. Then I pushed off, dropped fast, and came up smiling because I had finally been brave enough to jump.",
            whatThisShows: "A WIDA 4 sample begins to use pacing, imagery, and reflection to make the event feel bigger for the reader.",
          },
        },
        conferencePrompts: {
          1: [
            "Show me where the small moment starts.",
            "Can you tell me what happened first and then next?",
            "What feeling can we add to this page?",
          ],
          2: [
            "Where can you slow this part down for the reader?",
            "Can you add one action and one feeling to this moment?",
            "Which page needs a clearer beginning, middle, or end?",
          ],
          3: [
            "What could your character say or think right here?",
            "Where can you add a detail that helps me picture the scene?",
            "Which part matters most, and how can you make it feel bigger?",
          ],
          4: [
            "How do you want the reader to feel in this scene?",
            "Which sentence could you revise for stronger pacing or imagery?",
            "What ending best shows why this moment mattered?",
          ],
        },
        planningNotes: [
          "Front-load oral rehearsal and shared storytelling before expecting independent drafting.",
          "Keep mentor examples visible that show how a tiny event can be stretched across several pages.",
          "Conference for one craft move at a time so multilingual writers are not revising everything at once.",
        ],
        unitSentenceFrames: {
          1: ['"First I ___."', '"Then I ___."', '"I felt ___."'],
          2: ['"First ___, then ___."', '"I was ___ when ___."', '"At the end ___."'],
          3: ['"In this small moment, ___."', '"I could see ___ and feel ___."', '"This part mattered because ___."'],
          4: ['"I stretched this moment by showing ___."', '"The reader can picture ___ because ___."', '"At the end, I wanted the reader to feel ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use picture rehearsal, oral retell, and shared writing before independent pages.",
            "Support one action or feeling sentence per page rather than full paragraphs.",
          ],
          2: [
            "Provide page-by-page story planners with transition prompts.",
            "Model how to add one feeling, action, or sound detail to each part of the story.",
          ],
          3: [
            "Teach students to reread each page and add dialogue or inner thinking.",
            "Use revision checkups for sequence, detail, and reader clarity.",
          ],
          4: [
            "Conference around pacing, mood, and endings that connect back to the moment.",
            "Push for precise verbs and sensory details that strengthen the narrative voice.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Invite students to draw, label, and orally retell the small moment with gestures and home-language support.",
            "Use one-line frames such as First I ___ and Then I ___ with teacher scribing when needed.",
          ],
          2: [
            "Provide beginning-middle-end oral rehearsal with picture prompts and turn-the-page words.",
            "Support short patterned sentences that name actions and feelings in sequence.",
          ],
          3: [
            "Use sentence starters for adding detail, dialogue, and inner thinking across the story.",
            "Prompt students to reread each page and add one elaboration move before moving on.",
          ],
          4: [
            "Push students to refine pacing, mood, and word choice while keeping the story tightly focused.",
            "Conference around stronger transitions, precise verbs, and reader-friendly endings.",
          ],
        },
      },
      {
        grade: "2",
        id: "Chapter Books: Writing Nonfiction from the Heart",
        title: "Chapter Books: Writing Nonfiction from the Heart",
        window: "Early Year",
        focus: "Develop structured nonfiction writing with student expertise and voice.",
        standards: ["W.2.2", "W.2.5"],
        standardsPlaceholder: "Core CCSS aligned to the Grade 2 information unit; exact checklist text did not extract cleanly and the full Mossflower unit map is still preferred.",
        scaffoldNotes: [
          "Offer chapter planners that help students organize one chapter at a time with subtopics and key facts.",
          "Build topic vocabulary with shared inquiry, animal vocabulary cards, and picture-supported word banks.",
          "Model how nonfiction writers teach with headings, graphics, and specific description across each page or section.",
        ],
        languageDemands: [
          "Sort information into subtopics and explain facts across simple chapters.",
          "Use teaching language, labels, and headings to guide a reader.",
          "Apply content vocabulary accurately in spoken rehearsal and writing.",
        ],
        mentorTexts: [
          {
            title: "From Seed to Plant",
            author: "Gail Gibbons",
            teachingNote: "Use headings, labeled diagrams, and clear subtopics to show what makes nonfiction chapters teach well.",
          },
          {
            title: "Bats",
            author: "Gail Gibbons",
            teachingNote: "Study how facts are grouped and supported with text features so students can structure chapters around subtopics.",
          },
          {
            title: "Sharks!",
            author: "Anne Schreiber",
            teachingNote: "Notice accessible teaching language and how strong nonfiction books mix facts, features, and vivid domain vocabulary.",
          },
        ],
        modelSamples: {
          1: {
            sample: "Tigers have stripes. Tigers run. Tigers have babies.",
            whatThisShows: "A WIDA 1 writer may produce labeled facts or very short teaching sentences around one topic.",
          },
          2: {
            sample: "This chapter is about tiger babies. Tiger babies drink milk. They stay with the mother. They learn to hunt when they grow.",
            whatThisShows: "A WIDA 2 sample shows a simple chapter focus with grouped facts and repetitive teaching language.",
          },
          3: {
            sample: "This section teaches about how tiger cubs grow. At first, the cubs stay close to their mother. Later, they learn to hunt by watching her. These facts help readers understand how baby tigers survive.",
            whatThisShows: "A WIDA 3 writer can group facts into a subtopic and add one explanatory sentence for the reader.",
          },
          4: {
            sample: "Tiger cubs depend on their mother in the early months of life. She protects them, feeds them, and slowly teaches them how to hunt. I used this chapter to show that growing up is an important part of a tiger's life.",
            whatThisShows: "A WIDA 4 sample sounds more like sustained teaching, with clearer organization and explanation across sentences.",
          },
        },
        conferencePrompts: {
          1: [
            "What is this page teaching about your topic?",
            "Can you name one fact and show me where it belongs?",
            "What picture or label could help your reader here?",
          ],
          2: [
            "What is the chapter about, in one sentence?",
            "Which fact fits this section best?",
            "Where could you add a heading or label to help the reader?",
          ],
          3: [
            "How can you turn that fact into a stronger teaching sentence?",
            "What example would help your reader understand this part better?",
            "Does this chapter stay on one clear subtopic?",
          ],
          4: [
            "What does this chapter teach that the last one did not?",
            "Where can you elaborate instead of listing facts?",
            "Which text feature will help the reader learn most clearly?",
          ],
        },
        planningNotes: [
          "Choose high-interest topics students can already talk about before expecting extensive written output.",
          "Teach the structure of a chapter book explicitly with one visible planner that all students reuse.",
          "Keep vocabulary supports close to the drafting space so students can say and write domain words repeatedly.",
        ],
        unitSentenceFrames: {
          1: ['"This is about ___."', '"It has ___."', '"It can ___."'],
          2: ['"This chapter teaches about ___."', '"One fact is ___."', '"Another thing is ___."'],
          3: ['"In this section, readers learn ___."', '"For example, ___."', '"This helps readers understand ___."'],
          4: ['"This chapter explains ___ by showing ___."', '"A key detail is ___ because ___."', '"I used this heading because ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use labeled diagrams and shared pages before expecting full chapter text.",
            "Keep topic picture cards and domain words available during drafting.",
          ],
          2: [
            "Support one chapter at a time with section frames and oral rehearsal.",
            "Model how facts can become full teaching sentences instead of labels alone.",
          ],
          3: [
            "Teach students to draft with headings, facts, and one explanation or example.",
            "Use partner rehearsal so students say the chapter before writing it.",
          ],
          4: [
            "Push for clearer subtopics, stronger detail, and text features that teach the reader.",
            "Conference around how the chapter flows from sentence to sentence, not just fact to fact.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use picture-supported topic cards, oral naming, and shared writing for facts students want to teach.",
            "Accept labeled diagrams and sentence fragments that show what belongs in each chapter.",
          ],
          2: [
            "Provide chapter frames such as This chapter teaches about ___ and One fact is ___.",
            "Use illustrated word banks for headings, body parts, features, or other content vocabulary.",
          ],
          3: [
            "Support section drafting with simple planners for topic, facts, and closing sentence.",
            "Teach students to combine facts with description so pages sound more like teaching text than lists.",
          ],
          4: [
            "Push students to elaborate with examples, comparisons, and clearer text features.",
            "Conference around coherence across chapters so the book feels organized and purposeful.",
          ],
        },
      },
      {
        grade: "2",
        id: "Finding Awesome Everywhere: Celebrating through Opinion Writing",
        title: "Finding Awesome Everywhere: Celebrating through Opinion Writing",
        window: "Middle of Year",
        focus: "Use opinion writing to celebrate, persuade, and support judgments with reasons.",
        standards: ["W.2.1", "W.2.5"],
        standardsPlaceholder: "Core CCSS verified from the Grade 2 argument checklist.",
        scaffoldNotes: [
          "Use claim-and-reason frames such as I think ___ because ___ and support students in collecting reasons before drafting.",
          "Teach helpful linking words and review language so students can connect opinions, reasons, and examples more clearly.",
          "Anchor revision around convincing the reader, showing off the book or topic, and adding one stronger example.",
        ],
        languageDemands: [
          "State a clear opinion and support it with reasons.",
          "Use linking words to connect claim, reasons, and examples.",
          "Speak and write in a way that sounds convincing to an audience.",
        ],
        mentorTexts: [
          {
            title: "Don't Let the Pigeon Drive the Bus!",
            author: "Mo Willems",
            teachingNote: "Use the exaggerated persuasion to notice voice, repeated reasons, and speaking directly to an audience.",
          },
          {
            title: "I Wanna Iguana",
            author: "Karen Kaufman Orloff",
            teachingNote: "Study how reasons and counterpoints can build a stronger argument in letters or opinion pieces.",
          },
          {
            title: "The Perfect Pet",
            author: "Margie Palatini",
            teachingNote: "Notice how writers support a strong opinion with examples that make the audience picture the choice.",
          },
        ],
        modelSamples: {
          1: {
            sample: "I like rainy days. They are fun. You can jump in puddles.",
            whatThisShows: "A WIDA 1 writer can express a clear opinion with a simple reason and familiar vocabulary.",
          },
          2: {
            sample: "I think rainy days are awesome because I can jump in puddles. Another reason is I can stay inside and read. You should like rainy days too.",
            whatThisShows: "A WIDA 2 sample uses repeated opinion language and simple reasons to sound persuasive.",
          },
          3: {
            sample: "My opinion is that rainy days are the best kind of day. For example, you can hear the rain on the window while you read or rest. This shows why rainy days feel calm and fun at the same time.",
            whatThisShows: "A WIDA 3 writer begins to elaborate with an example and explain why the reason matters.",
          },
          4: {
            sample: "I believe rainy days deserve to be celebrated because they make ordinary time feel special. A strong example is when the rain taps on the roof and turns reading at home into something cozy. Readers should agree because rainy days slow us down in the best way.",
            whatThisShows: "A WIDA 4 sample shows stronger voice, audience awareness, and more precise explanation.",
          },
        },
        conferencePrompts: {
          1: [
            "What is your opinion?",
            "Can you tell me one reason why?",
            "What word could help you tell the reader to agree with you?",
          ],
          2: [
            "Which reason is strongest, and can you say more about it?",
            "Where can you add because to connect your idea?",
            "What example would help your reader picture your reason?",
          ],
          3: [
            "Does each reason connect clearly back to your opinion?",
            "Where could you add an example or explanation?",
            "Which sentence sounds the most convincing right now?",
          ],
          4: [
            "How are you speaking directly to your audience?",
            "Which reason deserves more development to persuade the reader?",
            "What revision would make your voice sound more convincing?",
          ],
        },
        planningNotes: [
          "Give students time to sort and rehearse reasons orally before they draft full pieces.",
          "Model the difference between naming a reason and explaining why it matters to the reader.",
          "Keep revision goals narrow: strengthen the claim, add an example, or use clearer linking language.",
        ],
        unitSentenceFrames: {
          1: ['"I like ___."', '"It is the best because ___."', '"You should pick ___."'],
          2: ['"I think ___ is awesome because ___."', '"Another reason is ___."', '"You would like it because ___."'],
          3: ['"My opinion is ___ because ___."', '"For example, ___."', '"This shows why ___."'],
          4: ['"I believe ___ deserves to be celebrated because ___."', '"A strong example is ___."', '"Readers should agree because ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use choice boards and picture prompts so students can form an opinion quickly.",
            "Accept oral rehearsal and shared dictation as part of the drafting process.",
          ],
          2: [
            "Provide reason sorters and linking words before paragraph drafting.",
            "Model how to tell more about a reason instead of repeating the claim.",
          ],
          3: [
            "Teach opinion paragraphs with claim, reason, and example boxes.",
            "Prompt students to revise by adding one clearer explanation after each example.",
          ],
          4: [
            "Push for persuasive tone, stronger paragraph flow, and more audience awareness.",
            "Conference around whether each reason truly strengthens the claim.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Offer either-or choices and picture supports so students can express an opinion before writing.",
            "Use highly patterned frames such as I like ___ because ___ with teacher-supported dictation.",
          ],
          2: [
            "Provide reason cards and linking words such as because, also, and best.",
            "Support short opinion pieces with one claim and one or two simple reasons.",
          ],
          3: [
            "Use organizers that separate opinion, reasons, and examples before drafting paragraphs.",
            "Prompt students to revise by adding one stronger explanation after each reason.",
          ],
          4: [
            "Push students to address the audience directly and choose more persuasive examples.",
            "Conference around clearer paragraph structure and more precise language for judgment.",
          ],
        },
      },
      {
        grade: "2",
        id: "Writing Research-Based Nonfiction",
        title: "Writing Research-Based Nonfiction",
        window: "End of Year",
        focus: "Guide students in researching topics and publishing informational pieces.",
        standards: ["W.2.2", "W.2.7", "W.2.8"],
        standardsPlaceholder: "Core CCSS aligned to the Grade 2 information/research unit; exact checklist text did not extract cleanly and the full Mossflower unit map is still preferred.",
        scaffoldNotes: [
          "Support note-taking with labeled sketches, quick diagrams, and shared research charts before students draft full pages.",
          "Teach students to sort research into simple sections and use comparisons to help readers understand new information.",
          "Model how writers expand short facts into teaching sentences with graphics, domain words, and partner rehearsal.",
        ],
        languageDemands: [
          "Ask and answer research questions using simple notes and shared sources.",
          "Turn notes into informational sentences grouped by topic.",
          "Use comparisons, examples, and domain words to teach new ideas clearly.",
        ],
        mentorTexts: [
          {
            title: "Frogs",
            author: "Nic Bishop",
            teachingNote: "Use photo captions and precise facts to show how research writing can teach clearly and vividly.",
          },
          {
            title: "National Geographic Readers: Sea Turtles",
            author: "Laura Marsh",
            teachingNote: "Notice short research sections, bold domain words, and how each page teaches one clear idea.",
          },
          {
            title: "From Seed to Plant",
            author: "Gail Gibbons",
            teachingNote: "Return to selected pages to study how explanation grows from gathered facts, diagrams, and sequence.",
          },
        ],
        modelSamples: {
          1: {
            sample: "Frogs can jump. Frogs eat bugs. Frogs live near water.",
            whatThisShows: "A WIDA 1 research sample may stay close to collected facts and depend on shared discussion for fuller meaning.",
          },
          2: {
            sample: "I learned that frogs live near water. Another fact is frogs catch bugs with their tongues. Frogs need wet places to live.",
            whatThisShows: "A WIDA 2 writer can turn notes into short factual sentences with light repetition.",
          },
          3: {
            sample: "This section teaches how frogs survive. Frogs live near water because their bodies need moisture. They also catch insects with their long tongues. These details help readers understand frog habitats and food.",
            whatThisShows: "A WIDA 3 sample shows grouped notes, causal language, and a clearer teaching purpose.",
          },
          4: {
            sample: "My research shows that frogs are well adapted to wet habitats. Their skin needs moisture, and their strong legs help them move quickly through water and onto land. I included these facts to explain how body parts and habitat work together.",
            whatThisShows: "A WIDA 4 sample sounds more synthesized, connecting facts instead of listing them one by one.",
          },
        },
        conferencePrompts: {
          1: [
            "What did you learn from your research today?",
            "Can you show me one fact with a picture or label?",
            "Which note belongs in this section?",
          ],
          2: [
            "Can you turn that note into a full sentence?",
            "What other fact belongs with this one?",
            "Where could a picture, label, or comparison help the reader?",
          ],
          3: [
            "How are these facts connected in this section?",
            "What explanation could you add after this fact?",
            "What does the reader learn from this part?",
          ],
          4: [
            "Where are you synthesizing instead of listing?",
            "Which fact still needs clearer explanation?",
            "How can you make this section sound more like teaching?",
          ],
        },
        planningNotes: [
          "Treat research as a shared language event first, then move gradually toward independent note-taking.",
          "Model how to turn a sketch or keyword note into a full teaching sentence.",
          "Revisit section headings and note sorting often so students do not lose the structure of the piece.",
        ],
        unitSentenceFrames: {
          1: ['"It has ___."', '"It lives ___."', '"It can ___."'],
          2: ['"I learned that ___."', '"Another fact is ___."', '"It is like ___."'],
          3: ['"This section teaches ___."', '"One important fact is ___."', '"This helps readers understand ___."'],
          4: ['"My research shows ___."', '"For instance, ___."', '"I included this comparison to explain ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use shared research charts and labeled sketches before independent drafting.",
            "Accept copied key words and oral explanations as part of note-taking.",
          ],
          2: [
            "Teach simple note frames and short teaching sentences from one fact at a time.",
            "Use visuals and chunked sources so students can stay focused on meaning.",
          ],
          3: [
            "Support section drafting with grouped notes and partner rehearsal.",
            "Model how to add a comparison, example, or graphic to teach more clearly.",
          ],
          4: [
            "Push for clearer section transitions, stronger domain vocabulary, and independent expansion of notes.",
            "Conference around which information still needs explanation for the reader.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use shared research charts, visuals, and teacher modeling so students can contribute facts orally or with labels.",
            "Accept drawn notes and copied key words as preparation for shared sentences.",
          ],
          2: [
            "Provide note frames such as It has ___ and It can ___ before longer drafting begins.",
            "Use pictures, diagrams, and chunked texts to keep research language manageable.",
          ],
          3: [
            "Support students in grouping notes into sections and rehearsing teaching sentences with a partner.",
            "Model how to add a comparison or example that helps the reader understand a fact.",
          ],
          4: [
            "Push for stronger domain vocabulary, clearer section transitions, and more independent note expansion.",
            "Conference around clarity: what the reader learns, what still needs explanation, and where visuals help.",
          ],
        },
      },
    ],
    "3": [
      {
        grade: "3",
        id: "The Art of Information Writing",
        title: "The Art of Information Writing",
        window: "Start of Year",
        focus: "Launch information writing through structure, elaboration, and teaching craft.",
        standards: ["W.3.2", "W.3.4"],
        standardsPlaceholder: "Core CCSS verified from the Grade 3 information checklist.",
        scaffoldNotes: [
          "Provide planning pages that help students group subtopics, main ideas, and supporting facts before drafting.",
          "Preteach domain vocabulary and show students how information writers use text features, structure words, and clear conclusions.",
          "Model elaboration moves such as adding clarifying details, examples, quick research, and definitions that teach the reader more.",
        ],
        languageDemands: [
          "Group information into subtopics and maintain a clear text structure.",
          "Use domain-specific vocabulary and explanation language to teach the reader.",
          "Elaborate with examples, definitions, and conclusions instead of listing facts.",
        ],
        mentorTexts: [
          {
            title: "Volcanoes",
            author: "Seymour Simon",
            teachingNote: "Use short excerpts to study precise domain vocabulary, strong subtopics, and clear explanatory sentences.",
          },
          {
            title: "Sharks!",
            author: "Anne Schreiber",
            teachingNote: "Notice how headings, facts, and examples work together to teach one part of a topic at a time.",
          },
          {
            title: "Snakes",
            author: "Nic Bishop",
            teachingNote: "Show students how expert word choice and detailed examples make information writing feel vivid, not flat.",
          },
        ],
        modelSamples: {
          1: {
            sample: "Sharks are fish. They have fins. They live in the ocean.",
            whatThisShows: "A WIDA 1 sample may show a topic clearly with short factual statements and limited elaboration.",
          },
          2: {
            sample: "My topic is sharks. One part is their bodies. Sharks have fins and sharp teeth. Another fact is they live in oceans around the world.",
            whatThisShows: "A WIDA 2 writer can organize facts into a beginning subtopic with simple structure language.",
          },
          3: {
            sample: "This section teaches about shark bodies. Sharks use their fins to steer through the water, and their rows of teeth help them catch food. For example, some sharks lose teeth often and grow new ones. Readers learn how body parts help sharks survive.",
            whatThisShows: "A WIDA 3 sample adds examples and explanations that make the information feel more teachable.",
          },
          4: {
            sample: "A key idea about sharks is that their bodies are built for survival. Their fins help them move with control, and their teeth are constantly replaced so they can keep hunting. This detail matters because it shows how structure supports function in the animal world.",
            whatThisShows: "A WIDA 4 sample uses more precise teaching language and clearer explanatory connections.",
          },
        },
        conferencePrompts: {
          1: [
            "What is your topic?",
            "Can you tell me one fact you want to teach?",
            "Which word or picture will help your reader understand?",
          ],
          2: [
            "What subtopic is this section about?",
            "Can you add another fact that fits with this one?",
            "Where could you use a heading or teaching sentence?",
          ],
          3: [
            "How can you explain this fact, not just state it?",
            "What example or definition would help the reader here?",
            "Does this section stay focused on one main idea?",
          ],
          4: [
            "Which part sounds most like expert teaching?",
            "Where can you strengthen your conclusion or transition?",
            "How are you helping the reader understand why this detail matters?",
          ],
        },
        planningNotes: [
          "Teach planning as a language task, not just a writing task, by rehearsing sections aloud before drafting.",
          "Model several ways information writers elaborate so students do not rely on bare fact lists.",
          "Keep text structure words, mentor pages, and subtopic planners visible during every bend of the unit.",
        ],
        unitSentenceFrames: {
          1: ['"This is about ___."', '"It has ___."', '"It can ___."'],
          2: ['"My topic is ___."', '"One part is ___."', '"Another fact is ___."'],
          3: ['"This section teaches ___."', '"For example, ___."', '"Readers learn ___ from this."'],
          4: ['"A key idea about ___ is ___."', '"This detail matters because ___."', '"I used this example to show ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use shared webs, labeled diagrams, and oral naming to build the topic before writing.",
            "Support one fact at a time with teacher-guided shared composition.",
          ],
          2: [
            "Provide subtopic boxes and short section frames to organize information.",
            "Teach students to say the section aloud before drafting full sentences.",
          ],
          3: [
            "Model paragraph building with topic sentence, facts, and explanation.",
            "Prompt revision by adding one example, definition, or comparison to each section.",
          ],
          4: [
            "Push for stronger conclusions, clearer transitions, and more precise teaching language.",
            "Conference around how well the piece teaches rather than just how much it lists.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use shared topic webs, labeled diagrams, and oral naming to build understanding before independent writing.",
            "Support one fact at a time with sentence frames and teacher-guided shared composition.",
          ],
          2: [
            "Provide subtopic boxes with simple frames such as One kind is ___ and Another fact is ___.",
            "Use illustrated vocabulary cards so students can talk through content before drafting.",
          ],
          3: [
            "Support paragraph building with topic sentence, facts, and explanation planners.",
            "Prompt students to revise by adding one definition, example, or comparison to each section.",
          ],
          4: [
            "Push students toward clearer conclusions, more precise domain language, and purposeful text features.",
            "Conference around teaching craft: what helps the reader most and what still sounds like notes.",
          ],
        },
      },
      {
        grade: "3",
        id: "Changing the World",
        title: "Changing the World",
        window: "Early Year",
        focus: "Support opinion and persuasive writing that aims to make change.",
        standards: ["W.3.1", "W.3.4"],
        standardsPlaceholder: "Core CCSS verified from the Grade 3 argument checklist.",
        scaffoldNotes: [
          "Use claim, reason, and example organizers before drafting arguments, speeches, or letters for change.",
          "Support spoken rehearsal with bold claim starters, audience language, and partner talk before independent writing.",
          "Teach students to strengthen arguments by linking evidence, addressing the audience directly, and planning clearer paragraphs.",
        ],
        languageDemands: [
          "State a position clearly and organize reasons to persuade an audience.",
          "Use evidence, examples, and audience language to strengthen an argument.",
          "Shift between oral persuasion, letter writing, and paragraph-level argument structures.",
        ],
        mentorTexts: [
          {
            title: "Click, Clack, Moo: Cows That Type",
            author: "Doreen Cronin",
            teachingNote: "Study how the characters make demands, give reasons, and use audience language to push for change.",
          },
          {
            title: "The Day the Crayons Quit",
            author: "Drew Daywalt",
            teachingNote: "Use selected letters to notice voice, complaint structure, and how reasons sound different for different audiences.",
          },
          {
            title: "I Dissent: Ruth Bader Ginsburg Makes Her Mark",
            author: "Debbie Levy",
            teachingNote: "Model how opinion can be grounded in fairness, examples, and a clear call to action.",
          },
        ],
        modelSamples: {
          1: {
            sample: "We should have more recess. It is fun. Kids can run.",
            whatThisShows: "A WIDA 1 persuasive sample may state a claim and one simple reason with familiar school vocabulary.",
          },
          2: {
            sample: "I think we should have more recess because kids need to move. Another reason is we can play and then learn better. This would help our class.",
            whatThisShows: "A WIDA 2 sample shows a clear claim with repeated reason language and a simple audience move.",
          },
          3: {
            sample: "My claim is that our school should add more recess time. One reason is that students focus better after movement, and an example is how calm our class feels after a break. This matters because more recess could help students learn.",
            whatThisShows: "A WIDA 3 writer can connect a claim, a reason, and an example in paragraph-like form.",
          },
          4: {
            sample: "I strongly believe our school should protect more recess time because movement supports both health and learning. A convincing example is how students return from break more settled and ready to focus. Our audience should care because better attention can improve the whole school day.",
            whatThisShows: "A WIDA 4 sample shows stronger argument structure, audience awareness, and explanation.",
          },
        },
        conferencePrompts: {
          1: [
            "What change do you want?",
            "Can you tell me one reason for that change?",
            "Who are you trying to convince?",
          ],
          2: [
            "Which reason is easiest for your audience to understand?",
            "Can you add because and finish the idea?",
            "What example would help your audience care?",
          ],
          3: [
            "Does your reason connect clearly to your claim?",
            "Where can you add evidence or an example from class discussion?",
            "How can you make this sound more persuasive?",
          ],
          4: [
            "How are you adjusting your argument for this audience?",
            "Which paragraph needs a stronger call to action?",
            "What evidence makes your case most convincing?",
          ],
        },
        planningNotes: [
          "Spend time building background knowledge so students have something meaningful to argue about.",
          "Model how persuasive writing sounds different when speaking to classmates, teachers, or a broader audience.",
          "Use oral debate and partner rehearsal as rehearsal for stronger written claims and explanations.",
        ],
        unitSentenceFrames: {
          1: ['"We should ___."', '"It is better because ___."', '"I want ___."'],
          2: ['"I think we should ___ because ___."', '"Another reason is ___."', '"This would help ___."'],
          3: ['"My claim is ___."', '"One reason is ___ and an example is ___."', '"This matters because ___."'],
          4: ['"I strongly believe ___ because ___."', '"A convincing example is ___."', '"My audience should care because ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use pictures, oral choices, and shared claims before independent persuasive writing.",
            "Accept speech bubbles, labels, and dictated reasons as meaningful early argument work.",
          ],
          2: [
            "Provide claim-and-reason frames plus audience language students can reuse.",
            "Model how one reason can be explained with a tiny story or example.",
          ],
          3: [
            "Support paragraph planning with claim, reason, evidence, and call-to-action boxes.",
            "Prompt students to link facts or examples back to the claim explicitly.",
          ],
          4: [
            "Push for sharper audience targeting, more convincing evidence, and stronger endings.",
            "Conference around tone and whether the argument truly sounds persuasive.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use visual choices and oral sentence patterns so students can state a preference and one simple reason.",
            "Allow students to rehearse claims with gestures, pointing, and teacher-supported oral language.",
          ],
          2: [
            "Provide claim frames, reason banks, and audience phrases such as We should ___ because ___.",
            "Support short persuasive pieces with one clear claim and one or two explained reasons.",
          ],
          3: [
            "Use organizers that separate claim, reason, evidence, and audience move before paragraph drafting.",
            "Prompt students to expand each reason with one example or fact from discussion or research.",
          ],
          4: [
            "Push for sharper audience awareness, stronger paragraphing, and more purposeful evidence linking.",
            "Conference around tone, precision, and which examples make the strongest case.",
          ],
        },
      },
      {
        grade: "3",
        id: "Structuring Episodes: Writing Series Fiction",
        title: "Structuring Episodes: Writing Series Fiction",
        window: "Middle of Year",
        focus: "Teach students to plan and draft fiction with episodes, structure, and character development.",
        standards: ["W.3.3", "W.3.4"],
        standardsPlaceholder: "Core CCSS verified from the Grade 3 narrative checklist.",
        scaffoldNotes: [
          "Plan episodes with clear beginning, problem, action, and ending arcs so students stay inside one story at a time.",
          "Use mentor texts to highlight dialogue, precise details, story voice, and what makes a series character recognizable across episodes.",
          "Conference around paragraphing, feedback from partners, and revision choices that help students become their own readers.",
        ],
        languageDemands: [
          "Sustain a story across episodes with recognizable characters and clear sequence.",
          "Use dialogue, actions, and inner thinking to develop character and plot.",
          "Revise for coherence, paragraphing, and voice across several scenes.",
        ],
        mentorTexts: [
          {
            title: "Mercy Watson to the Rescue",
            author: "Kate DiCamillo",
            teachingNote: "Notice how a familiar character stays recognizable while each episode has its own problem and payoff.",
          },
          {
            title: "Henry and Mudge",
            author: "Cynthia Rylant",
            teachingNote: "Use excerpts to study scene structure, gentle dialogue, and the repeating features of a series friendship.",
          },
          {
            title: "Katie Woo",
            author: "Fran Manushkin",
            teachingNote: "Show how short episodes can still include character feeling, dialogue, and a complete story arc.",
          },
        ],
        modelSamples: {
          1: {
            sample: "Max lost his dog. He said, \"Oh no!\" Then he ran fast.",
            whatThisShows: "A WIDA 1 fiction sample may show one episode with short action sentences and a small amount of dialogue.",
          },
          2: {
            sample: "At first Max played in the yard. Then the problem was his dog ran away. \"Come back!\" Max yelled. At the end he found the dog by the gate.",
            whatThisShows: "A WIDA 2 writer can hold a simple episode with beginning, problem, and ending structure.",
          },
          3: {
            sample: "In this episode, Max chased his dog all the way to the front gate. \"Come back right now!\" he shouted, but the dog only wagged its tail. This part shows that Max felt worried, even though the scene stayed funny.",
            whatThisShows: "A WIDA 3 sample includes dialogue, feeling, and a more developed scene inside one episode.",
          },
          4: {
            sample: "I wanted this episode to begin with everything feeling normal before the trouble started. When Max saw the open gate, his stomach dropped, and his voice came out louder than he expected: \"Buddy!\" The ending connects to the series because Max is always trying to stay in control, even when life becomes chaotic.",
            whatThisShows: "A WIDA 4 sample begins to shape voice, scene pacing, and recurring character traits across a series.",
          },
        },
        conferencePrompts: {
          1: [
            "What happens in this episode?",
            "Who is talking here?",
            "Can you show one feeling with a word or picture?",
          ],
          2: [
            "Where is the problem in this episode?",
            "Can you add one line of dialogue?",
            "How will the episode end?",
          ],
          3: [
            "What does this scene show about your character?",
            "Where can you add inner thinking or a stronger action?",
            "Does this episode feel complete on its own?",
          ],
          4: [
            "How does this episode connect to the whole series?",
            "Which part needs stronger pacing or voice?",
            "What recurring trait makes this character recognizable?",
          ],
        },
        planningNotes: [
          "Keep one episode structure visible so students do not jump between too many story ideas at once.",
          "Teach students to talk through a scene before drafting it, especially when adding dialogue or inner thinking.",
          "Use mentor-study to show what repeats across a series and what changes in each episode.",
        ],
        unitSentenceFrames: {
          1: ['"My character ___."', '"Then ___ happened."', '"He said ___."'],
          2: ['"At first ___."', '"Then the problem was ___."', '"At the end ___."'],
          3: ['"In this episode, ___."', '"My character said ___ because ___."', '"This part shows ___."'],
          4: ['"I wanted this episode to begin with ___."', '"The dialogue shows ___ about the character."', '"This ending connects to the series because ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use oral storytelling, picture sequences, and shared scene writing before full drafting.",
            "Support one clear episode rather than multiple loosely connected events.",
          ],
          2: [
            "Provide beginning-problem-ending planners and dialogue starters.",
            "Teach students to show actions and feelings with short connected sentences.",
          ],
          3: [
            "Prompt students to rehearse scenes aloud before adding dialogue and inner thinking.",
            "Use revision checkups for sequence, character consistency, and paragraph breaks.",
          ],
          4: [
            "Push for stronger voice, sharper scene construction, and recurring series features.",
            "Conference around what makes the episode feel both complete and part of a larger series.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use picture sequences, oral storytelling, and teacher-shared writing so students can tell one scene clearly.",
            "Accept labels, speech bubbles, and short patterned story sentences as part of the drafting process.",
          ],
          2: [
            "Provide episode planners with beginning-problem-ending boxes and simple dialogue starters.",
            "Support short connected sentences that show what the character does, says, and feels.",
          ],
          3: [
            "Prompt students to rehearse dialogue and inner thinking before adding them to independent drafts.",
            "Use revision checkups for sequence, paragraph breaks, and character consistency across scenes.",
          ],
          4: [
            "Push students toward stronger voice, more precise description, and clearer scene construction.",
            "Conference around how each episode both stands alone and contributes to a recognizable series world.",
          ],
        },
      },
      {
        grade: "3",
        id: "An Introduction to Literary Essays",
        title: "An Introduction to Literary Essays",
        window: "End of Year",
        focus: "Introduce literary essay writing with claims, evidence, and interpretation.",
        standards: ["W.3.1", "W.3.4", "W.3.9"],
        standardsPlaceholder: "Core CCSS verified from the Grade 3 literary essay checklist.",
        scaffoldNotes: [
          "Use claim-evidence-explanation frames to help students move from oral rehearsal into literary essay drafting.",
          "Provide sticky-note or evidence-card routines during read-alouds and book clubs so students can collect moments that fit a claim.",
          "Model introductions, paragraph jobs, quote moves, and conclusions that help students build a fuller essay structure.",
        ],
        languageDemands: [
          "Make a literary claim and support it with relevant evidence from text.",
          "Explain how details from the text connect back to the claim.",
          "Use essay language for introductions, body paragraphs, and conclusions.",
        ],
        mentorTexts: [
          {
            title: "Each Kindness",
            author: "Jacqueline Woodson",
            teachingNote: "Use it for collecting evidence about theme, regret, and character choices that support a literary claim.",
          },
          {
            title: "Those Shoes",
            author: "Maribeth Boelts",
            teachingNote: "Study how repeated moments across a text can support an essay about change, want, or empathy.",
          },
          {
            title: "Because of Winn-Dixie",
            author: "Kate DiCamillo",
            teachingNote: "Use short excerpts to practice lifting key scenes and explaining how they support an interpretation.",
          },
        ],
        modelSamples: {
          1: {
            sample: "I think Chloe was unkind. In the story, she did not play with Maya. This shows she was not being nice.",
            whatThisShows: "A WIDA 1 literary response can still make a basic claim and point to one part of the text.",
          },
          2: {
            sample: "I think Chloe changes because she understands her mistake. One part that shows this is when she remembers Maya after the kindness lesson. This tells me Chloe feels regret.",
            whatThisShows: "A WIDA 2 sample links a claim to a specific event and a simple interpretation.",
          },
          3: {
            sample: "My claim is that the story teaches readers about missed chances for kindness. For example, Chloe keeps turning away from Maya when Maya wants to play. This matters because it helps readers see that unkind choices can stay with a person for a long time.",
            whatThisShows: "A WIDA 3 writer can move beyond retell and explain how evidence supports a bigger idea.",
          },
          4: {
            sample: "I believe the story suggests that kindness matters most when we have the chance to offer it. The text shows this when Chloe keeps rejecting Maya and later cannot undo those choices. This evidence deepens the idea that regret grows from ordinary moments when people choose not to connect.",
            whatThisShows: "A WIDA 4 sample sounds more interpretive and thematic, with tighter claim-evidence-analysis language.",
          },
        },
        conferencePrompts: {
          1: [
            "What do you think about this character or story?",
            "Which part of the book shows that?",
            "Can you finish the sentence: This shows ___?",
          ],
          2: [
            "What is your claim?",
            "Which event in the text best matches your idea?",
            "How can you explain what that event proves?",
          ],
          3: [
            "Does your evidence really fit your claim?",
            "Where can you add explanation instead of retelling?",
            "What bigger idea is the text teaching the reader?",
          ],
          4: [
            "How can you make this interpretation more precise?",
            "Which evidence is strongest, and why?",
            "What sentence best explains the significance of this example?",
          ],
        },
        planningNotes: [
          "Treat evidence collection as a separate routine before expecting full essay drafting.",
          "Model how explanation sounds different from summary so students do more than retell the text.",
          "Use shared paragraph construction to show how claims, evidence, and explanation work together on the page.",
        ],
        unitSentenceFrames: {
          1: ['"I think ___ is ___."', '"In the story, ___."', '"This shows ___."'],
          2: ['"I think ___ because ___."', '"One part says ___."', '"This shows that ___."'],
          3: ['"My claim is ___."', '"For example, in the text ___."', '"This matters because ___."'],
          4: ['"I believe ___ because the text shows ___."', '"This evidence suggests ___."', '"Overall, this helps prove ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use oral claims, shared evidence charts, and teacher-supported shared paragraphs.",
            "Allow students to point to scenes or illustrations before turning them into evidence language.",
          ],
          2: [
            "Provide claim and evidence frames plus sticky-note routines for collecting proof.",
            "Model the move from retelling a part of the book to saying what it proves.",
          ],
          3: [
            "Support simple essay paragraphs with claim, evidence, and explanation boxes.",
            "Prompt students to explain each piece of evidence in their own words.",
          ],
          4: [
            "Push for stronger introductions, quote integration, and paragraph cohesion.",
            "Conference around whether each example truly supports the interpretation.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use read-aloud discussion, picture supports, and oral claim frames so students can name a character trait or lesson.",
            "Allow students to point to or retell key moments before turning them into shared written evidence.",
          ],
          2: [
            "Provide claim and evidence frames such as I think ___ because in the story ___.",
            "Use sticky notes with icons or short words so evidence collection stays manageable.",
          ],
          3: [
            "Support simple essay paragraphs with claim, evidence, and explanation boxes before full drafting.",
            "Prompt students to explain why the evidence matters rather than stopping after the quote or event.",
          ],
          4: [
            "Push students toward stronger introductions, quote integration, and clearer interpretive language.",
            "Conference around paragraph cohesion and whether each piece of evidence truly supports the claim.",
          ],
        },
      },
    ],
    "4": [
      {
        grade: "4",
        id: "Spinning True Stories into Gold",
        title: "Spinning True Stories into Gold",
        window: "Start of Year",
        focus: "Refine narrative writing with structure, detail, and voice.",
        standards: ["W.4.3", "W.4.4", "W.4.5"],
        standardsPlaceholder: "Core CCSS verified from the Grade 4 narrative checklist; exact unit sub-strands pending the full curriculum map.",
        scaffoldNotes: [
          "Use timeline rehearsal and scene planning so students stretch meaningful true stories across several moments.",
          "Model revision lenses for leads, dialogue, and reflective endings rather than asking students to revise everything at once.",
          "Conference around how details, pacing, and inner thinking turn personal narrative into literature.",
        ],
        languageDemands: [
          "Sustain a focused personal narrative with clear scenes and purposeful pacing.",
          "Use dialogue, sensory detail, and reflection to deepen meaning for the reader.",
          "Revise with more precise language, transitions, and paragraphing.",
        ],
        conferencePrompts: {
          1: [
            "Which scene are you writing today?",
            "Can you tell me what happened in this moment, step by step?",
            "What feeling belongs in this part of the story?",
          ],
          2: [
            "Where could you stretch this moment instead of rushing through it?",
            "Can you add one line of dialogue or one sensory detail here?",
            "What part of the scene needs a clearer ending?",
          ],
          3: [
            "How does this scene show why the memory matters?",
            "Where could you add reflection instead of only action?",
            "Which transition or paragraph break would help the reader follow the story?",
          ],
          4: [
            "What revision would make this narrative feel more literary?",
            "How are you shaping the pacing so the most important moment stands out?",
            "What does your ending help the reader understand about you or this event?",
          ],
        },
        planningNotes: [
          "Teach students to separate story generation from scene revision so drafting does not stall.",
          "Keep mentor examples visible for leads, dialogue, and endings that sound literary without becoming formulaic.",
          "Use conferring to name one ambitious revision goal per writer and revisit it across several days.",
        ],
        unitSentenceFrames: {
          1: ['"One time ___."', '"Then I ___."', '"I felt ___."'],
          2: ['"At first ___."', '"Next ___."', '"I remember feeling ___ when ___."'],
          3: ['"One important moment was ___."', '"I showed this by writing ___."', '"At the end, I realized ___."'],
          4: ['"I want the reader to notice ___."', '"This moment changed when ___."', '"My ending shows ___ because ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use oral storytelling, sketching, and shared scene writing before longer drafting.",
            "Support one clear scene at a time with visual timeline prompts.",
          ],
          2: [
            "Provide scene planners with setting, action, feeling, and ending prompts.",
            "Model how to stretch a moment with dialogue and sensory details.",
          ],
          3: [
            "Use revision checkups for leads, transitions, and paragraph breaks across scenes.",
            "Prompt students to add reflection that explains why the moment mattered.",
          ],
          4: [
            "Push for literary pacing, stronger voice, and more purposeful scene selection.",
            "Conference around how each revision move changes the emotional effect on the reader.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use story sketches, oral rehearsal, and teacher-supported shared writing so students can hold the sequence of the memory.",
            "Accept labels and short patterned sentences while building fuller scenes through talk.",
          ],
          2: [
            "Provide scene frames and temporal language so students can move from event retell into narrative structure.",
            "Support short dialogue and feeling language with visible sentence stems.",
          ],
          3: [
            "Prompt students to revise scenes by adding dialogue, reflection, and sensory detail.",
            "Use paragraph and transition checkups so scenes stay coherent for the reader.",
          ],
          4: [
            "Push students to shape the story intentionally with literary leads, pacing, and endings.",
            "Conference around voice, tone, and the significance of the event, not just retelling.",
          ],
        },
      },
      {
        grade: "4",
        id: "Boxes and Bullets: Writing Essays and Arguments",
        title: "Boxes and Bullets: Writing Essays and Arguments",
        window: "Early Year",
        focus: "Develop essay and argument writing with clear structure and support.",
        standards: ["W.4.1", "W.4.4", "W.4.5"],
        standardsPlaceholder: "Core CCSS verified from the Grade 4 argument checklist; exact unit sub-strands pending the full curriculum map.",
        scaffoldNotes: [
          "Teach claim planning with boxes-and-bullets organizers before drafting full essays.",
          "Model how evidence, examples, and mini-stories strengthen a reason rather than repeat it.",
          "Conference around paragraph jobs so writers know what each section of an essay is supposed to do.",
        ],
        languageDemands: [
          "State a clear claim and group reasons under a logical structure.",
          "Use examples, evidence, and explanation to elaborate an argument.",
          "Write in paragraph and essay form using transitions and persuasive tone.",
        ],
        conferencePrompts: {
          1: [
            "What is your opinion or claim?",
            "Can you tell me one reason for it?",
            "Which sentence shows your big idea most clearly?",
          ],
          2: [
            "Which reason belongs in this paragraph?",
            "Can you add because or for example to connect your thinking?",
            "What detail would help this reason sound stronger?",
          ],
          3: [
            "Does this example really support your claim?",
            "Where can you explain your thinking instead of just naming evidence?",
            "What is the job of this paragraph in your essay?",
          ],
          4: [
            "Which reason is most convincing, and have you developed it enough?",
            "How are you sequencing your paragraphs so the argument builds logically?",
            "What revision would sharpen your conclusion or audience impact?",
          ],
        },
        planningNotes: [
          "Spend time teaching the architecture of the essay before expecting polished drafting.",
          "Use oral rehearsal and shared planning so students hear how reasons and evidence sound together.",
          "Keep revision focused on one essay move at a time: stronger reason, better example, or clearer paragraph flow.",
        ],
        unitSentenceFrames: {
          1: ['"I think ___."', '"One reason is ___."', '"It is important because ___."'],
          2: ['"My opinion is ___ because ___."', '"Another reason is ___."', '"For example, ___."'],
          3: ['"My claim is ___."', '"One reason is ___ and this matters because ___."', '"This example proves ___."'],
          4: ['"I argue that ___."', '"A strong reason for this is ___."', '"This evidence is convincing because ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use oral claims, shared reasons, and teacher-supported paragraph frames before full essay drafting.",
            "Accept lists of reasons and simple examples as preparation for stronger essay language.",
          ],
          2: [
            "Provide boxes-and-bullets planners plus sentence stems for examples and explanation.",
            "Model how to turn a reason into a full paragraph with one clear supporting detail.",
          ],
          3: [
            "Prompt students to elaborate each reason with mini-stories, facts, or examples.",
            "Use paragraph checkups for topic sentence, evidence, and explanation.",
          ],
          4: [
            "Push for more nuanced claims, logical sequencing, and persuasive conclusions.",
            "Conference around the quality of evidence and how clearly each paragraph advances the argument.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use visuals, oral choices, and teacher-shared writing so students can express a claim and one reason.",
            "Support speech bubbles, labels, and dictated reasons as early essay thinking.",
          ],
          2: [
            "Provide claim-reason-example frames and shared planning charts before paragraph drafting.",
            "Teach a few key transitions such as because, also, and for example.",
          ],
          3: [
            "Support full paragraphs with organizers that separate claim, reason, and evidence.",
            "Prompt students to explain why each example supports the claim instead of listing details.",
          ],
          4: [
            "Push for sharper reasoning, stronger audience awareness, and essay cohesion.",
            "Conference around counterexamples, precision, and the overall logic of the essay.",
          ],
        },
      },
      {
        grade: "4",
        id: "Literary Essay: Writing About Fiction",
        title: "Literary Essay: Writing About Fiction",
        window: "Middle of Year",
        focus: "Teach literary analysis through essay writing about fiction texts.",
        standards: ["W.4.1", "W.4.4", "W.4.5", "W.4.9"],
        standardsPlaceholder: "Core CCSS verified from the Grade 4 literary essay checklist; exact unit sub-strands pending the full curriculum map.",
        scaffoldNotes: [
          "Separate evidence collection from essay drafting so students can first gather strong moments from the text.",
          "Model paragraph jobs, quote moves, and explanation language that sounds analytical instead of summary-based.",
          "Conference around whether evidence truly fits the claim before focusing on polished essay form.",
        ],
        languageDemands: [
          "Make a literary claim and organize evidence under clear reasons or ideas.",
          "Explain how scenes, dialogue, and character actions support an interpretation.",
          "Use essay language, textual evidence, and cohesive paragraphs to discuss fiction.",
        ],
        conferencePrompts: {
          1: [
            "What do you think about this character or part of the story?",
            "Which moment in the text makes you think that?",
            "Can you finish the sentence: This shows ___?",
          ],
          2: [
            "What is your claim for this paragraph?",
            "Which part of the text fits that claim best?",
            "How can you explain what the evidence means?",
          ],
          3: [
            "Are you analyzing here, or are you retelling the plot?",
            "What does this example prove about the character or theme?",
            "Where could you add a stronger explanation after the evidence?",
          ],
          4: [
            "How can you make this interpretation more precise or insightful?",
            "Which evidence most strongly advances your analysis?",
            "What revision would make this paragraph sound more literary and less formulaic?",
          ],
        },
        planningNotes: [
          "Teach students to stop and talk through the claim before they draft to avoid collecting mismatched evidence.",
          "Use mentor paragraphs to show how explanation deepens interpretation rather than retells plot.",
          "Keep visible anchors for claim, evidence, quote integration, and conclusion language throughout the unit.",
        ],
        unitSentenceFrames: {
          1: ['"I think ___ is ___."', '"In the book, ___."', '"This shows ___."'],
          2: ['"I think ___ because ___."', '"One part that shows this is ___."', '"This tells me ___."'],
          3: ['"My idea is that ___."', '"For example, when ___."', '"This matters because it shows ___."'],
          4: ['"I interpret ___ as ___."', '"The text suggests this when ___."', '"This evidence deepens the idea that ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use oral claims, shared charts, and teacher-modeled evidence selection before drafting paragraphs.",
            "Allow students to point to scenes or illustrations as evidence during early planning.",
          ],
          2: [
            "Provide claim-evidence-explanation frames and sticky-note routines for collecting proof.",
            "Model how to move from plot retell into interpretation language.",
          ],
          3: [
            "Support literary paragraphs with boxes for claim, evidence, and analysis.",
            "Prompt students to explain how each example connects back to the big idea.",
          ],
          4: [
            "Push for stronger quote integration, more precise interpretation, and fuller essay structure.",
            "Conference around the difference between obvious evidence and evidence that truly advances analysis.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use read-aloud talk, character charts, and oral sentence frames so students can name a trait or lesson before writing.",
            "Allow shared writing and teacher-supported evidence retell as part of essay rehearsal.",
          ],
          2: [
            "Provide claim and evidence starters with icons or sticky-note labels for important scenes.",
            "Support short analytical sentences before expecting longer paragraphs.",
          ],
          3: [
            "Use paragraph planners that clearly separate claim, evidence, and explanation.",
            "Prompt students to explain what the evidence proves, not just what happened.",
          ],
          4: [
            "Push for interpretive language, quote integration, and coherence across paragraphs.",
            "Conference around whether the essay is analyzing fiction or slipping back into retell.",
          ],
        },
      },
      {
        grade: "4",
        id: "Discipline-Based Writing",
        title: "Discipline-Based Writing",
        window: "End of Year",
        focus: "Apply writing skills across subject areas and content-rich tasks.",
        standards: ["W.4.2", "W.4.4", "W.4.5", "W.4.7", "W.4.8"],
        standardsPlaceholder: "Core CCSS verified from the Grade 4 information checklist; exact unit sub-strands pending the full curriculum map.",
        scaffoldNotes: [
          "Make the discipline-specific task visible by showing mentor examples from science, social studies, or inquiry work.",
          "Model how research notes become organized explanations or arguments within a content area.",
          "Conference around both content accuracy and the writing moves needed to teach or persuade in that subject.",
        ],
        languageDemands: [
          "Use subject-specific vocabulary and text structures to communicate learning.",
          "Organize information, explanation, or argument in ways that fit the discipline.",
          "Synthesize notes, examples, and evidence into a polished content-based piece.",
        ],
        conferencePrompts: {
          1: [
            "What is your topic in this subject?",
            "Can you show me one fact or idea you want to teach?",
            "What picture, diagram, or label would help here?",
          ],
          2: [
            "What is this section explaining?",
            "Which vocabulary word belongs in this part of your writing?",
            "How can you turn that note into a full teaching sentence?",
          ],
          3: [
            "How does this evidence help explain your topic?",
            "Where can you add more explanation so the reader learns from you?",
            "Does this piece sound like science, social studies, or inquiry writing yet?",
          ],
          4: [
            "How are you balancing content accuracy with strong writing?",
            "Which part sounds most like expert teaching or argument?",
            "What revision would strengthen your synthesis or subject-specific tone?",
          ],
        },
        planningNotes: [
          "Clarify the disciplinary purpose early so students know whether they are explaining, comparing, arguing, or reporting.",
          "Build oral understanding of content before expecting strong academic writing about it.",
          "Keep note-taking, section planning, and vocabulary supports closely tied to the content unit.",
        ],
        unitSentenceFrames: {
          1: ['"This is about ___."', '"It has ___."', '"I learned ___."'],
          2: ['"This section explains ___."', '"One fact is ___."', '"This is important because ___."'],
          3: ['"My topic is ___."', '"The evidence shows ___."', '"This helps explain ___."'],
          4: ['"A key idea in this topic is ___."', '"This evidence is important because ___."', '"My conclusion is that ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use shared notes, visuals, and labeled diagrams before expecting extended writing.",
            "Support oral rehearsal of content vocabulary before drafting.",
          ],
          2: [
            "Provide section frames and topic-specific word banks aligned to the subject area.",
            "Model how to turn notes into teaching sentences one section at a time.",
          ],
          3: [
            "Support paragraphing with topic sentence, evidence, and explanation structures.",
            "Prompt students to connect content vocabulary to clear explanation, not just include the word.",
          ],
          4: [
            "Push for stronger synthesis, more precise academic vocabulary, and clearer discipline-based organization.",
            "Conference around whether the writing sounds like someone teaching or arguing within the subject.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use visuals, shared charts, and oral rehearsal so students can contribute content ideas before writing.",
            "Accept labeled diagrams and shared sentences as legitimate disciplinary writing entry points.",
          ],
          2: [
            "Provide content-specific sentence frames and section starters for each part of the piece.",
            "Use chunked sources and partner talk to keep the language load manageable.",
          ],
          3: [
            "Support organization with notes-to-paragraph planners and content vocabulary charts.",
            "Prompt students to explain how the evidence supports the content idea in their own words.",
          ],
          4: [
            "Push for stronger synthesis, academic tone, and independence in note expansion.",
            "Conference around both disciplinary accuracy and clarity for the intended audience.",
          ],
        },
      },
    ],
    "5": [
      {
        grade: "5",
        id: "Turning Life into Literature",
        title: "Turning Life into Literature",
        window: "Start of Year",
        focus: "Launch narrative writing with literary craft and reflective storytelling.",
        standards: ["W.5.3", "W.5.4", "W.5.5", "L.5.1c", "L.5.1d", "L.5.2b", "L.5.2c", "L.5.2e"],
        standardsPlaceholder: "",
        scaffoldNotes: [
          "Use scene planning and reflective rehearsal so students craft stories that feel literary, not just chronological.",
          "Model how writers select a meaningful life event and shape it with pacing, dialogue, and reflection.",
          "Conference around revision for significance: what the story means, not only what happened.",
        ],
        languageDemands: [
          "Craft a narrative with scenes, pacing, and purposeful reflection.",
          "Use literary language, dialogue, and detail to shape meaning for the reader.",
          "Revise for voice, significance, and cohesion across a longer narrative.",
        ],
        conferencePrompts: {
          1: [
            "What is the one important moment you are telling?",
            "Can you say what happened and how you felt?",
            "Which part of the story should we write first?",
          ],
          2: [
            "Where could you slow the story down to show the moment better?",
            "Can you add one line that shows your feeling or thinking?",
            "What detail helps the reader picture this scene?",
          ],
          3: [
            "How does this scene connect to the meaning of the story?",
            "Where can you add reflection so the reader understands why it matters?",
            "Which paragraph or transition needs to be clearer?",
          ],
          4: [
            "How are you turning this memory into literature, not just retelling it?",
            "Which scene carries the most significance, and is it developed enough?",
            "What revision would deepen the voice or reflection in this draft?",
          ],
        },
        planningNotes: [
          "Teach story selection carefully so students choose experiences with emotional or thematic depth.",
          "Use mentor examples to show how reflection and scene work create a literary feel.",
          "Conference around significance and structure so writers avoid simply listing events from real life.",
        ],
        unitSentenceFrames: {
          1: ['"One day ___."', '"Then I ___."', '"I felt ___."'],
          2: ['"At first ___."', '"One important moment was ___."', '"I knew ___ when ___."'],
          3: ['"This moment mattered because ___."', '"I wanted the reader to notice ___."', '"At the end, I realized ___."'],
          4: ['"I shaped this scene to show ___."', '"The reflection helps the reader understand ___."', '"This story becomes literary when ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use oral storytelling, sketches, and shared scenes before expecting full literary narrative drafting.",
            "Support one powerful moment at a time rather than an entire life story.",
          ],
          2: [
            "Provide scene planners and reflection stems so students can connect event and meaning.",
            "Model how to add dialogue and sensory detail without losing the thread of the story.",
          ],
          3: [
            "Use revision checkups for pacing, scene selection, and reflective lines that deepen significance.",
            "Prompt students to reread for voice and what the reader should understand about the narrator.",
          ],
          4: [
            "Push for intentional scene construction, layered reflection, and more literary word choice.",
            "Conference around how the narrative conveys meaning, not just memory.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use oral retell, sketching, and teacher-supported shared writing so students can hold the arc of one key memory.",
            "Accept labels and simple scene sentences while building richer narrative talk.",
          ],
          2: [
            "Provide scene and reflection stems to connect actions, feelings, and meaning.",
            "Support short connected scene writing before longer literary drafting.",
          ],
          3: [
            "Prompt students to revise for reflection, voice, and scene clarity across multiple paragraphs.",
            "Use paragraph and transition checkups to help the story flow for the reader.",
          ],
          4: [
            "Push students toward layered reflection, literary pacing, and precise craft moves.",
            "Conference around how each scene contributes to the larger meaning of the story.",
          ],
        },
      },
      {
        grade: "5",
        id: "Literary Essay: Opening Texts and Seeing More",
        title: "Literary Essay: Opening Texts and Seeing More",
        window: "Early Year",
        focus: "Develop interpretive literary essay writing with richer analysis.",
        standards: ["W.5.1", "W.5.4", "W.5.5", "W.5.9"],
        standardsPlaceholder: "Core CCSS verified from the Grade 5 literary essay checklist; exact unit sub-strands pending the full curriculum map.",
        scaffoldNotes: [
          "Model how to move beyond obvious claims by revisiting the text through different lenses.",
          "Teach quote integration, paragraph structure, and explanation as separate essay moves students can practice repeatedly.",
          "Conference around depth of interpretation so evidence is used to say something meaningful, not just correct.",
        ],
        languageDemands: [
          "Generate interpretive claims and sustain them across multiple paragraphs.",
          "Integrate textual evidence and explain how it supports a nuanced reading.",
          "Use academic essay language for interpretation, comparison, and conclusion.",
        ],
        conferencePrompts: {
          1: [
            "What is one idea you have about the text?",
            "Which part of the story makes you think that?",
            "Can you say what this shows about the character or theme?",
          ],
          2: [
            "What is your interpretation in this paragraph?",
            "Which example from the text fits it best?",
            "How can you explain your thinking after the evidence?",
          ],
          3: [
            "Does this paragraph move beyond summary into interpretation?",
            "What does this evidence suggest, not just show?",
            "Where could you add a sentence that deepens the analysis?",
          ],
          4: [
            "How can you make this claim more nuanced or layered?",
            "Which piece of evidence opens the text up the most?",
            "What revision would make this essay sound more interpretive and less predictable?",
          ],
        },
        planningNotes: [
          "Spend time in rehearsal and discussion so students hear interpretation before they write it.",
          "Keep visible examples of how evidence can support different but defensible claims.",
          "Teach students that literary essays are about making meaning, not filling in an essay formula.",
        ],
        unitSentenceFrames: {
          1: ['"I think ___ is ___."', '"In the story, ___."', '"This shows ___."'],
          2: ['"I believe ___ because ___."', '"One important part is ___."', '"This helps me think ___."'],
          3: ['"My interpretation is ___."', '"For example, when ___."', '"This suggests that ___."'],
          4: ['"A deeper reading is ___."', '"This evidence reveals ___ because ___."', '"Overall, the text invites readers to see ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use oral claims, read-aloud discussion, and shared evidence charts before independent essays.",
            "Allow students to identify and talk through one key moment before drafting about it.",
          ],
          2: [
            "Provide claim-evidence-explanation frames plus sticky-note systems for collecting proof.",
            "Model how to move from describing a scene to analyzing what it reveals.",
          ],
          3: [
            "Support paragraphs with boxes for claim, quote or event, and interpretation.",
            "Prompt students to explain how each example supports the essay's big idea.",
          ],
          4: [
            "Push for more nuanced claims, stronger quote integration, and fuller analytic paragraphs.",
            "Conference around whether the essay says something insightful rather than simply familiar.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use discussion, visuals, and shared claim language so students can participate in interpretation before writing.",
            "Allow teacher-supported evidence retell and shared analytical sentences as an entry point.",
          ],
          2: [
            "Provide claim and evidence starters and help students rehearse one interpretation orally before drafting.",
            "Use short analytical paragraphs before expecting full essay structures.",
          ],
          3: [
            "Support literary essay planning with claim, evidence, and interpretation organizers.",
            "Prompt students to explain what the evidence suggests rather than stopping at summary.",
          ],
          4: [
            "Push for richer interpretation, stronger cohesion, and more independent essay shaping.",
            "Conference around nuance, precision, and how to deepen the essay's insight.",
          ],
        },
      },
      {
        grade: "5",
        id: "Research-Based Argument",
        title: "Research-Based Argument",
        window: "Middle of Year",
        focus: "Support argument writing grounded in research, sources, and evidence.",
        standards: ["W.5.1", "W.5.4", "W.5.5", "W.5.7", "W.5.8", "W.5.9"],
        standardsPlaceholder: "Core CCSS verified from the Grade 5 argument checklist; exact unit sub-strands pending the full curriculum map.",
        scaffoldNotes: [
          "Separate research, note sorting, claim building, and drafting so students can manage the complexity of the task.",
          "Model how writers evaluate sources and choose evidence that genuinely supports a claim.",
          "Conference around synthesis, not accumulation, so students learn to make a case rather than copy facts.",
        ],
        languageDemands: [
          "Research across sources and sort information under a defensible claim.",
          "Use evidence, quotation, paraphrase, and explanation to build an argument.",
          "Write in a formal argumentative structure with stronger academic transitions and precision.",
        ],
        conferencePrompts: {
          1: [
            "What is your claim?",
            "Can you show me one fact that helps support it?",
            "What are you trying to convince the reader of?",
          ],
          2: [
            "Which evidence belongs with this reason?",
            "Can you say what this fact proves?",
            "Where can you add a source phrase or transition?",
          ],
          3: [
            "Are you explaining the evidence, or only placing it in the paragraph?",
            "Which evidence is strongest, and why?",
            "How can you connect this fact more clearly back to your claim?",
          ],
          4: [
            "How are you synthesizing sources instead of stacking them?",
            "Which paragraph needs stronger reasoning or academic tone?",
            "What revision would make your argument feel more research-driven and precise?",
          ],
        },
        planningNotes: [
          "Teach source reading and note-taking as language-heavy processes before expecting polished argument writing.",
          "Use shared inquiry and oral debate so students test claims before locking them into essays.",
          "Keep the distinction visible between evidence collection and explanation of that evidence.",
        ],
        unitSentenceFrames: {
          1: ['"I think ___."', '"One fact is ___."', '"This is important because ___."'],
          2: ['"My claim is ___ because ___."', '"One piece of evidence is ___."', '"This helps prove ___."'],
          3: ['"Based on my research, ___."', '"According to ___, ___."', '"This evidence matters because ___."'],
          4: ['"The strongest argument is ___ because ___."', '"This source shows ___, which supports ___."', '"A key implication is ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use shared research, oral claims, and teacher-supported evidence charts before full argument drafting.",
            "Accept labeled notes and simple evidence statements as part of the planning process.",
          ],
          2: [
            "Provide claim-evidence-explanation planners and source-based sentence starters.",
            "Model how one fact becomes useful only when the writer explains what it proves.",
          ],
          3: [
            "Support argument paragraphs with boxes for claim, evidence, source, and explanation.",
            "Prompt students to compare pieces of evidence and choose the strongest support.",
          ],
          4: [
            "Push for stronger synthesis, counterpoint awareness, and more formal academic language.",
            "Conference around whether the writing sounds like an argument shaped by research rather than notes in paragraph form.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use shared inquiry, visuals, and oral discussion so students can contribute ideas before independent writing.",
            "Accept teacher-supported claim statements and shared evidence sentences during early drafting.",
          ],
          2: [
            "Provide note frames, source starters, and oral rehearsal before students compose argument paragraphs.",
            "Use chunked texts and carefully selected evidence to reduce overload during research.",
          ],
          3: [
            "Support organization with research planners and paragraph frames that separate claim, evidence, and explanation.",
            "Prompt students to explain why each fact matters instead of stacking research details.",
          ],
          4: [
            "Push students toward stronger synthesis, source integration, and more independent argument structure.",
            "Conference around evidence quality, reasoning, and the academic tone of the final piece.",
          ],
        },
      },
      {
        grade: "5",
        id: "Journalism: Researching and Writing Articles",
        title: "Journalism: Researching and Writing Articles",
        window: "End of Year",
        focus: "Guide students in researching, drafting, and publishing journalistic articles.",
        standards: ["W.5.2", "W.5.4", "W.5.5", "W.5.7", "W.5.8"],
        standardsPlaceholder: "Core CCSS verified from the Grade 5 information checklist; exact unit sub-strands pending the full curriculum map.",
        scaffoldNotes: [
          "Model how journalists gather facts, organize leads, and write in a concise, reader-facing style.",
          "Teach article structure explicitly with headlines, leads, quotations, and grouped information.",
          "Conference around accuracy, clarity, and audience so articles sound informative and purposeful.",
        ],
        languageDemands: [
          "Research a topic and organize facts into article form.",
          "Use journalistic structure such as headline, lead, quotations, and grouped information.",
          "Write concisely while still explaining key facts and significance for the reader.",
        ],
        conferencePrompts: {
          1: [
            "What is your article about?",
            "Can you tell me one important fact you want readers to know?",
            "What headline or label fits this topic?",
          ],
          2: [
            "What should your lead teach the reader first?",
            "Where can you add a quote or source idea?",
            "Which sentence sounds too much like a story instead of an article?",
          ],
          3: [
            "How are you grouping facts so the article is easy to follow?",
            "What detail matters most for the reader to understand?",
            "Where could you make the language more concise and clear?",
          ],
          4: [
            "Does your lead sound strong and journalistic?",
            "Which quote or fact adds the most significance to the article?",
            "What revision would sharpen the article's clarity, tone, or reader impact?",
          ],
        },
        planningNotes: [
          "Show several article models so students can see how journalists balance fact, quote, and explanation.",
          "Use oral rehearsal for leads and headlines because students often need to hear the tone before drafting it.",
          "Teach students to revise for precision and clarity by cutting repetition and sharpening wording.",
        ],
        unitSentenceFrames: {
          1: ['"This article is about ___."', '"One fact is ___."', '"People said ___."'],
          2: ['"Today I am reporting on ___."', '"A key fact is ___."', '"According to ___, ___."'],
          3: ['"This article explains ___."', '"One important detail is ___."', '"This matters because ___."'],
          4: ['"The most important development is ___."', '"A source explained that ___."', '"Readers should understand that ___."'],
        },
        unitWritingSupports: {
          1: [
            "Use shared research, oral reporting, and labeled notes before expecting full article drafts.",
            "Support simple headlines and fact statements as early journalism practice.",
          ],
          2: [
            "Provide article planners with headline, lead, facts, and quote sections.",
            "Model how to turn notes into concise reporting sentences rather than longer narrative sentences.",
          ],
          3: [
            "Support article drafting with boxes for lead, grouped facts, and source quotes.",
            "Prompt students to revise for clarity and remove repeated information.",
          ],
          4: [
            "Push for sharper leads, stronger quote integration, and more polished journalistic tone.",
            "Conference around audience, significance, and whether the article teaches the reader efficiently.",
          ],
        },
        widaDifferentiation: {
          1: [
            "Use oral reporting, visuals, and shared fact charts so students can contribute to article planning before writing independently.",
            "Accept labeled notes, copied key facts, and shared headlines as meaningful journalism entry points.",
          ],
          2: [
            "Provide fact and quote frames plus article planners that make each section of the piece visible.",
            "Use short, chunked source material so students can focus on essential information.",
          ],
          3: [
            "Support concise reporting paragraphs with frames for lead, facts, and explanation.",
            "Prompt students to check whether each sentence sounds like reporting rather than storytelling.",
          ],
          4: [
            "Push students toward more independent structure, clearer source use, and sharper revision for concision.",
            "Conference around accuracy, tone, and how well the article serves its readers.",
          ],
        },
      },
    ],
  },
};
