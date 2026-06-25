import React from "react";
import {
  WritingWorkshopUnitTemplate,
  type WritingWorkshopTemplateTab,
  type WritingWorkshopUnitScaffold,
} from "@/components/writing-workshop-unit-template";

const gradeTabs: WritingWorkshopTemplateTab[] = [
  { label: "Grade 2 Unit 1", active: true },
  { label: "Grade 3 Unit 1", href: "/writing-workshop-grade3-unit1" },
  { label: "Grade 4 Units", href: "/writing-workshop-grade4" },
  { label: "Grade 5 Units", href: "/writing-workshop-grade5" },
];

const units: WritingWorkshopUnitScaffold[] = [
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
];

export default function WritingWorkshopGrade2Unit1() {
  return (
    <WritingWorkshopUnitTemplate
      badgeLabel="Scaffolded Unit Model"
      pageTitle="Grade 2 Unit 1: Making Small Moments Big"
      pageDescription="This model shows how workshop materials can support Grade 2 Unit 1 by organizing the small-moment narrative scaffolds teachers need at each WIDA level."
      gradeTabs={gradeTabs}
      units={units}
    />
  );
}
