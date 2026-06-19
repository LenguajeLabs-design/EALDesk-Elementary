import React, { useState } from "react";
import { QUICK_TOOLS, WIDA_LEVELS, WRITING_STRATEGIES, SPEAKING_STRATEGIES, VOCABULARY_SUPPORT } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MessageSquare, Edit3, BookA } from "lucide-react";

const UNIT_WRITING_SCAFFOLDS = {
  "Making Small Moments Big": {
    label: "Grade 2 Unit 1: Making Small Moments Big",
    focus: "Students tell one true small-moment story and stretch the most important part with sequence, feeling, and detail.",
    frames: {
      1: ['"First, ___."', '"Then, ___."', '"I felt ___."'],
      2: ['"First ___, then ___."', '"The important part was ___."', '"At the end, ___."'],
      3: ['"The story began when ___."', '"After that, ___."', '"This mattered because ___."'],
      4: ['"The most important part was ___."', '"The reader can imagine ___."', '"This mattered because ___."'],
    },
    writing: {
      1: [
        "Accept drawings, labels, oral retell, and jointly written small-moment stories",
        "Use shared writing to build one true story before asking for independent writing",
        "Provide a picture-supported beginning-middle-end organizer",
      ],
      2: [
        "Use short sequence frames and one clear feeling or detail",
        "Prompt students to stretch one part instead of listing many events",
        "Support simple endings that clearly finish the story",
      ],
      3: [
        "Model how to zoom in on one important part of the story",
        "Prompt students to add a feeling, action, or bit of dialogue",
        "Support revision with one focus such as adding detail",
      ],
      4: [
        "Push for clearer pacing and stronger detail in the important moment",
        "Model how writers help readers picture the scene",
        "Use peer feedback on sequence and important details",
      ],
    },
    speaking: {
      1: ["First, ___.", "Then, ___.", "I felt ___."],
      2: ["My story is about ___.", "Then ___ happened.", "At the end, ___."],
      3: ["The important part was ___.", "I remember ___.", "This mattered because ___."],
      4: ["The most important moment was ___.", "This shows ___.", "The reader can feel ___."],
    },
    vocabulary: {
      1: [
        "Teach action words, feeling words, and time-order words with pictures",
        "Use small word banks for people, actions, and feelings",
      ],
      2: [
        "Reuse sequence words like first, then, next, and end",
        "Practice feeling words orally before writing",
      ],
      3: [
        "Teach narrative words such as detail, feeling, beginning, middle, and end",
        "Encourage students to borrow language from mentor stories",
      ],
      4: [
        "Teach stronger verbs and more precise detail words",
        "Use mentor texts to notice simple craft moves",
      ],
    },
  },
  "The Art of Information Writing": {
    label: "Grade 3 Unit 1: The Art of Information Writing",
    focus: "Students teach readers about a topic by grouping facts, using headings, and explaining important information clearly.",
    frames: {
      1: ['"This is ___."', '"It has ___."', '"Another fact is ___."'],
      2: ['"This topic is ___."', '"One fact is ___."', '"It can ___."'],
      3: ['"One important fact is ___."', '"For example, ___."', '"This shows ___."'],
      4: ['"A key detail is ___."', '"Another example is ___."', '"This information is important because ___."'],
    },
    writing: {
      1: [
        "Accept labeled diagrams, picture-supported pages, and jointly written information books",
        "Focus on naming, describing, and teaching one fact at a time",
        "Use shared writing before independent information paragraphs",
      ],
      2: [
        "Provide section frames with blanks or choices",
        "Use simple headings and repeated topic vocabulary",
        "Prompt one fact per sentence",
      ],
      3: [
        "Model a topic sentence with 2-3 supporting details",
        "Prompt students to explain one fact instead of only listing it",
        "Use organizers with headings and note boxes",
      ],
      4: [
        "Push for clearer grouping of ideas and stronger elaboration",
        "Model how writers define, describe, and explain",
        "Use peer feedback on organization and explanation",
      ],
    },
    speaking: {
      1: ["This is ___.", "It has ___.", "Another fact is ___."],
      2: ["My topic is ___.", "One fact is ___.", "It can ___."],
      3: ["One important fact is ___.", "For example, ___.", "This shows ___."],
      4: ["A key detail is ___.", "This means ___.", "Another example is ___."],
    },
    vocabulary: {
      1: [
        "Teach topic words with visuals and examples",
        "Use word banks for parts, features, and key facts",
      ],
      2: [
        "Repeat unit words across speaking and writing",
        "Use headings and topic labels consistently",
      ],
      3: [
        "Teach explanation words like because, another, and important",
        "Encourage reuse of topic words in talk and writing",
      ],
      4: [
        "Teach more precise academic topic words and linking language",
        "Use mentor texts to highlight informational craft",
      ],
    },
  },
  "Spinning True Stories into Gold": {
    label: "Grade 4 Unit 1: Spinning True Stories into Gold",
    focus: "Students turn a true personal experience into a stronger narrative by zooming in, adding detail, and showing why the moment matters.",
    frames: {
      1: ['"One day, ___."', '"First, ___."', '"I felt ___."'],
      2: ['"The moment began when ___."', '"After that, ___."', '"At the end, ___."'],
      3: ['"The important part was ___."', '"I said, \'___\'."', '"This mattered because ___."'],
      4: ['"The heart of the story is ___."', '"The reader can see ___ when ___."', '"In the end, this mattered because ___."'],
    },
    writing: {
      1: [
        "Accept sketches, oral retell, sentence strips, and jointly constructed narratives",
        "Provide a beginning-middle-end frame with blanks or choices",
        "Use shared writing before independent writing",
      ],
      2: [
        "Use simple narrative frames built around one clear true moment",
        "Prompt students to add one feeling and one action detail",
        "Keep the story focused on one event instead of a long sequence",
      ],
      3: [
        "Model how to zoom in on the most important part of the story",
        "Prompt students to add dialogue, thoughts, or feelings",
        "Support revision with one focus such as stretching the important scene",
      ],
      4: [
        "Push for stronger pacing, elaboration, and reflective ending",
        "Model how writers stretch the most important scene",
        "Use peer feedback focused on meaning and craft",
      ],
    },
    speaking: {
      1: ["One day, ___.", "First, ___.", "I felt ___."],
      2: ["My story is about ___.", "Then ___ happened.", "At the end, ___."],
      3: ["The most important part was ___.", "I thought ___.", "This mattered because ___."],
      4: ["The heart of the story is ___.", "This reveals ___.", "The reader can understand ___."],
    },
    vocabulary: {
      1: [
        "Teach action verbs, feeling words, and time-order words with visuals",
        "Use word banks for dialogue starters and emotion words",
      ],
      2: [
        "Repeat the same narrative words during talk and writing",
        "Use transition language like first, then, after, and end",
      ],
      3: [
        "Teach narrative craft words such as scene, detail, dialogue, and reflection",
        "Encourage students to borrow language from mentor narratives",
      ],
      4: [
        "Teach more precise verbs, feeling language, and reflective phrasing",
        "Use mentor texts to notice narrative craft moves",
      ],
    },
  },
  "Turning Life into Literature": {
    label: "Grade 5 Unit 1: Turning Life into Literature",
    focus: "Students craft a meaningful true story by stretching one moment, showing inner thinking, and building a reflective ending.",
    frames: {
      1: ['"One day, ___."', '"First, ___."', '"I felt ___."'],
      2: ['"The moment began when ___."', '"Then ___ happened."', '"At the end, ___."'],
      3: ['"The most important part was ___."', '"I thought ___."', '"This mattered because ___."'],
      4: ['"The heart of the story is ___."', '"This moment changed my thinking because ___."', '"In the end, I understood ___."'],
    },
    writing: {
      1: [
        "Accept sketches, oral storytelling, sentence strips, and jointly written narratives",
        "Use shared writing to build a short true story before independent writing",
        "Provide a beginning-middle-end organizer with picture prompts",
      ],
      2: [
        "Keep the story focused on one meaningful true moment",
        "Use simple personal narrative frames with support for feeling and reflection",
        "Prompt students to orally rehearse before writing",
      ],
      3: [
        "Model how to zoom in on the most important part of the story",
        "Prompt students to add thoughts, feelings, and simple dialogue",
        "Support revision with one focus such as stretching the important scene",
      ],
      4: [
        "Push for stronger pacing, detail, and reflective meaning",
        "Model how writers connect outer action to inner thinking",
        "Use peer feedback focused on meaning, craft, and reader impact",
      ],
    },
    speaking: {
      1: ["One day, ___.", "First, ___.", "I felt ___."],
      2: ["My story is about ___.", "Then ___ happened.", "At the end, ___."],
      3: ["The important part was ___.", "I thought ___.", "This mattered because ___."],
      4: ["The heart of the story is ___.", "This moment changed my thinking because ___.", "The reader understands ___."],
    },
    vocabulary: {
      1: [
        "Teach action verbs, feeling words, and time-order words with visuals",
        "Use word banks for dialogue starters and emotion words",
      ],
      2: [
        "Repeat narrative words across oral rehearsal and writing",
        "Use transition language consistently",
      ],
      3: [
        "Teach narrative craft language such as scene, detail, dialogue, and reflection",
        "Encourage students to borrow language from mentor narratives",
      ],
      4: [
        "Teach more precise verbs, feeling language, and reflective phrasing",
        "Use mentor texts to notice literary craft moves",
      ],
    },
  },
} as const;

const UNIT_PARTNER_TALK_SCAFFOLDS = {
  "Making Small Moments Big": {
    label: "Grade 2 Unit 1: Making Small Moments Big",
    focus: "Students orally rehearse one true small moment by telling events in order and naming feelings or important details.",
    frames: {
      1: ['"First, ___."', '"Then, ___."', '"I felt ___."'],
      2: ['"My story is about ___."', '"Then ___ happened."', '"At the end, ___."'],
      3: ['"The important part was ___."', '"I remember ___."', '"This mattered because ___."'],
      4: ['"The small moment shows ___."', '"One detail I want to add is ___."', '"The reader will understand ___ because ___."'],
    },
    speaking: {
      1: [
        "Let students point to pictures and orally retell the moment step by step",
        "Use rehearsed partner talk before independent writing",
        "Accept short repeated phrases with gestures and teacher modeling",
      ],
      2: [
        "Use sequence talk with one important detail or feeling",
        "Prompt students to say the story across beginning, middle, and end",
        "Provide partner cards with simple oral rehearsal stems",
      ],
      3: [
        "Prompt students to rehearse the important part before writing it",
        "Encourage one added feeling, action, or dialogue idea in talk",
        "Use partner retell to clarify sequence and importance",
      ],
      4: [
        "Use oral rehearsal to strengthen pacing and elaboration",
        "Prompt students to explain why the moment matters",
        "Encourage feedback that helps a partner stretch the key scene",
      ],
    },
  },
  "The Art of Information Writing": {
    label: "Grade 3 Unit 1: The Art of Information Writing",
    focus: "Students talk through facts, categories, and explanations before drafting informational writing.",
    frames: {
      1: ['"This is ___."', '"It has ___."', '"Another fact is ___."'],
      2: ['"My topic is ___."', '"One fact is ___."', '"It can ___."'],
      3: ['"One important fact is ___."', '"For example, ___."', '"This teaches ___."'],
      4: ['"A key detail is ___."', '"This part belongs under ___."', '"This information matters because ___."'],
    },
    speaking: {
      1: [
        "Let students name and point to topic pictures before writing",
        "Use repeated oral frames for naming and describing facts",
        "Accept short shared talk before written sentences",
      ],
      2: [
        "Prompt one clear fact at a time during partner rehearsal",
        "Use headings orally so students can sort facts into parts",
        "Support oral practice with visuals and topic word banks",
      ],
      3: [
        "Have students rehearse topic sentence plus supporting facts",
        "Prompt students to explain one fact instead of only naming it",
        "Use partner talk to decide where information should be grouped",
      ],
      4: [
        "Use oral rehearsal for clearer explanation and organization",
        "Prompt students to define, describe, and give an example",
        "Encourage partner feedback on clarity and grouping of ideas",
      ],
    },
  },
  "Spinning True Stories into Gold": {
    label: "Grade 4 Unit 1: Spinning True Stories into Gold",
    focus: "Students rehearse a true story orally so they can zoom in on the heart of the moment before drafting.",
    frames: {
      1: ['"One day, ___."', '"First, ___."', '"I felt ___."'],
      2: ['"My story is about ___."', '"After that, ___."', '"At the end, ___."'],
      3: ['"The important part was ___."', '"I said, \'___\'."', '"This mattered because ___."'],
      4: ['"The heart of the story is ___."', '"A detail I want to add is ___."', '"The reader should understand ___."'],
    },
    speaking: {
      1: [
        "Use oral storytelling with gestures, sketches, and repeated frames",
        "Model one true story before asking students to rehearse independently",
        "Accept short retell with picture support",
      ],
      2: [
        "Prompt students to rehearse one true event in sequence",
        "Use simple stems for action, feeling, and ending",
        "Support oral rehearsal before writing full sentences",
      ],
      3: [
        "Prompt students to retell the most important part in more detail",
        "Encourage one thought, feeling, or line of dialogue during rehearsal",
        "Use partner talk to decide where the story should slow down",
      ],
      4: [
        "Use rehearsal to strengthen pacing and significance",
        "Prompt students to explain why this moment belongs in the story",
        "Encourage partner feedback on clarity, detail, and emotional impact",
      ],
    },
  },
  "Turning Life into Literature": {
    label: "Grade 5 Unit 1: Turning Life into Literature",
    focus: "Students orally rehearse meaningful true stories with reflection so the writing carries both action and inner thinking.",
    frames: {
      1: ['"One day, ___."', '"First, ___."', '"I felt ___."'],
      2: ['"The moment began when ___."', '"Then ___ happened."', '"At the end, ___."'],
      3: ['"The important part was ___."', '"I thought ___."', '"This mattered because ___."'],
      4: ['"The heart of the story is ___."', '"This changed my thinking because ___."', '"The reader should understand ___."'],
    },
    speaking: {
      1: [
        "Use oral storytelling with pictures, gestures, and repeated story frames",
        "Model a short true moment before partner rehearsal",
        "Accept simple spoken retell before writing",
      ],
      2: [
        "Prompt students to rehearse the story across beginning, middle, and end",
        "Use simple stems for action, feeling, and closure",
        "Support oral planning before written drafting",
      ],
      3: [
        "Prompt students to rehearse the key moment and their thinking",
        "Encourage thoughts, feelings, and simple dialogue during talk",
        "Use partner rehearsal to strengthen meaning before revision",
      ],
      4: [
        "Use oral rehearsal to connect outer action with inner reflection",
        "Prompt students to explain why the story matters to the writer",
        "Encourage partner feedback on significance, detail, and clarity",
      ],
    },
  },
} as const;

export default function QuickTools() {
  const searchParams = new URLSearchParams(window.location.search);
  const workshop = searchParams.get("workshop");
  const selectedUnit = searchParams.get("unit") || "";
  const availableTools = workshop
    ? QUICK_TOOLS.filter(
        (tool) => tool.workshop === workshop || tool.workshop === "shared",
      )
    : QUICK_TOOLS;
  const initialTask = searchParams.get("task") || availableTools[0]?.id || QUICK_TOOLS[0].id;
  
  const [selectedTask, setSelectedTask] = useState(initialTask);
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const quickToolLevels = WIDA_LEVELS.filter(level => level.level <= 4);

  const task = availableTools.find(t => t.id === selectedTask) || availableTools[0] || QUICK_TOOLS[0];
  const levelData = WIDA_LEVELS.find(l => l.level === selectedLevel) || WIDA_LEVELS[0];
  const unitWritingScaffold = selectedTask === "writing"
    ? UNIT_WRITING_SCAFFOLDS[selectedUnit as keyof typeof UNIT_WRITING_SCAFFOLDS]
    : undefined;
  const unitPartnerTalkScaffold = selectedTask === "partner-talk"
    ? UNIT_PARTNER_TALK_SCAFFOLDS[selectedUnit as keyof typeof UNIT_PARTNER_TALK_SCAFFOLDS]
    : undefined;
  const unitScaffold = unitWritingScaffold ?? unitPartnerTalkScaffold;
  const displayFrames = unitScaffold?.frames[selectedLevel as 1 | 2 | 3 | 4] ?? task.frames[selectedLevel as keyof typeof task.frames];
  const displayWritingStrategies = unitWritingScaffold?.writing[selectedLevel as 1 | 2 | 3 | 4] ?? WRITING_STRATEGIES[selectedLevel as keyof typeof WRITING_STRATEGIES];
  const displaySpeakingStrategies =
    unitWritingScaffold?.speaking[selectedLevel as 1 | 2 | 3 | 4]
    ?? unitPartnerTalkScaffold?.speaking[selectedLevel as 1 | 2 | 3 | 4]
    ?? SPEAKING_STRATEGIES[selectedLevel as keyof typeof SPEAKING_STRATEGIES];
  const displayVocabularyStrategies = unitWritingScaffold?.vocabulary[selectedLevel as 1 | 2 | 3 | 4] ?? VOCABULARY_SUPPORT[selectedLevel as keyof typeof VOCABULARY_SUPPORT];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Quick Tools</h1>
        <p className="text-muted-foreground mt-2">
          {workshop === "reader"
            ? "Reader's Workshop strategy finder. Select a reading task and WIDA level to get instant language supports."
            : workshop === "writer"
              ? "Writer's Workshop strategy finder. Select a writing task and WIDA level to get instant language supports."
              : "Workshop strategy finder. Select a literacy task and WIDA level to get instant language supports."}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-6 flex-shrink-0">
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">1. Task Type</h3>
            <div className="flex flex-col gap-2">
              {availableTools.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTask(t.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    selectedTask === t.id 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "bg-card hover:bg-secondary text-foreground border border-border"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">2. WIDA Level</h3>
            <div className="flex flex-col gap-2">
              {quickToolLevels.map(l => (
                <button
                  key={l.level}
                  onClick={() => setSelectedLevel(l.level)}
                  className={`text-left px-4 py-3 rounded-lg transition-all border ${
                    selectedLevel === l.level 
                    ? "bg-card border-primary shadow-sm ring-1 ring-primary/20" 
                    : "bg-card border-border hover:border-primary/50 text-muted-foreground"
                  }`}
                >
                  <div className={`font-bold flex items-center justify-between ${selectedLevel === l.level ? "text-foreground" : ""}`}>
                    WIDA {l.level}
                    {selectedLevel === l.level && <CheckCircle2 size={16} className="text-primary" />}
                  </div>
                  <div className="text-xs mt-1 truncate opacity-80">{l.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1 space-y-6">
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{task.name}</h2>
                <p className="text-muted-foreground mt-1">
                  {unitScaffold?.focus ?? task.description}
                </p>
                {unitScaffold && (
                  <p className="text-sm font-medium text-blue-700 mt-2">{unitScaffold.label}</p>
                )}
              </div>
              <Badge className={`${levelData.badgeColor} px-3 py-1 rounded-full text-sm font-bold border`}>
                WIDA {selectedLevel}: {levelData.name}
              </Badge>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Recommended Sentence Frames</h3>
              <div className="bg-secondary/50 rounded-lg p-5 border border-border space-y-3">
                {displayFrames.map((frame, i) => (
                  <div key={i} className="text-lg font-serif text-foreground font-medium bg-card p-3 rounded-md shadow-sm border border-border/50">
                    {frame}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Tabs defaultValue="writing" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
              <TabsTrigger value="writing" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 text-base">
                <Edit3 size={16} className="mr-2" /> Writing
              </TabsTrigger>
              <TabsTrigger value="speaking" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 text-base">
                <MessageSquare size={16} className="mr-2" /> Speaking
              </TabsTrigger>
              <TabsTrigger value="vocabulary" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 text-base">
                <BookA size={16} className="mr-2" /> Vocabulary
              </TabsTrigger>
            </TabsList>
            
            <div className="pt-6">
              <TabsContent value="writing" className="m-0">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Writing Support for WIDA {selectedLevel}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {displayWritingStrategies.map((strategy, i) => (
                        <li key={i} className="flex gap-3 text-foreground/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="speaking" className="m-0">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Speaking Support for WIDA {selectedLevel}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {displaySpeakingStrategies.map((strategy, i) => (
                        <li key={i} className="flex gap-3 text-foreground/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="vocabulary" className="m-0">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Vocabulary Support for WIDA {selectedLevel}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {displayVocabularyStrategies.map((strategy, i) => (
                        <li key={i} className="flex gap-3 text-foreground/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>

        </div>
      </div>
    </div>
  );
}
