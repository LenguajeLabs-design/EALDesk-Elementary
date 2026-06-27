import React from "react";
import { WritingWorkshopUnitTemplate } from "@/components/writing-workshop-unit-template";
import { WRITING_WORKSHOP_TEMPLATE_PAGES } from "@/lib/content/writing-workshop-toolkit";

export default function WritingWorkshopGrade2Unit1() {
  const pageContent = WRITING_WORKSHOP_TEMPLATE_PAGES.grade2Unit1;

  return <WritingWorkshopUnitTemplate {...pageContent} />;
}
