import React from "react";
import { WritingWorkshopUnitTemplate } from "@/components/writing-workshop-unit-template";
import { WRITING_WORKSHOP_TEMPLATE_PAGES } from "@/lib/content/writing-workshop-toolkit";

export default function WritingWorkshopGrade5Unit1() {
  const pageContent = WRITING_WORKSHOP_TEMPLATE_PAGES.grade5Units;

  return (
    <WritingWorkshopUnitTemplate
      {...pageContent}
      quickToolsHref={(unit) => `/quick-tools?workshop=writer&task=writing&unit=${encodeURIComponent(unit.id)}`}
    />
  );
}
