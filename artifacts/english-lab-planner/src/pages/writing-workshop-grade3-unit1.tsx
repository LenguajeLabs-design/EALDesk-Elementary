import React from "react";
import {
  WritingWorkshopUnitTemplate,
  type WritingWorkshopTemplateTab,
  type WritingWorkshopUnitScaffold,
} from "@/components/writing-workshop-unit-template";

const gradeTabs: WritingWorkshopTemplateTab[] = [
  { label: "Grade 2 Unit 1", href: "/writing-workshop-grade2-unit1" },
  { label: "Grade 3 Unit 1", active: true },
  { label: "Grade 4 Units", href: "/writing-workshop-grade4" },
  { label: "Grade 5 Units", href: "/writing-workshop-grade5" },
];

const units: WritingWorkshopUnitScaffold[] = [
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
];

export default function WritingWorkshopGrade3Unit1() {
  return (
    <WritingWorkshopUnitTemplate
      badgeLabel="Scaffolded Unit Model"
      pageTitle="Grade 3 Unit 1: The Art of Information Writing"
      pageDescription="This model shows how workshop materials can support Grade 3 Unit 1 by organizing the information-writing scaffolds teachers need at each WIDA level."
      gradeTabs={gradeTabs}
      units={units}
    />
  );
}
