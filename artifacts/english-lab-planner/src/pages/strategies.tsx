import React, { useState } from "react";
import { WIDA_LEVELS, WRITING_STRATEGIES, SPEAKING_STRATEGIES, VOCABULARY_SUPPORT, TRANSLATION_GUIDELINES, ASSESSMENTS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit3, MessageSquare, BookA, Languages, CheckSquare } from "lucide-react";

const LEVEL_COLORS: Record<number, string> = {
  1: "bg-amber-50 border-amber-200",
  2: "bg-amber-50 border-amber-200",
  3: "bg-teal-50 border-teal-200",
  4: "bg-indigo-50 border-indigo-200",
};

function StrategyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LevelColumn({ level }: { level: typeof WIDA_LEVELS[0] }) {
  return (
    <div className={`rounded-xl border p-5 space-y-2 ${LEVEL_COLORS[level.level]}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold text-base text-foreground">WIDA {level.level}</span>
        <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
      </div>
      <p className="text-xs text-muted-foreground font-medium">{level.program}</p>
    </div>
  );
}

export default function Strategies() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground">Strategies by Skill</h1>
        <p className="text-muted-foreground mt-2">Browse reading, writing, talk, translation, and assessment supports across all WIDA levels.</p>
      </div>

      <Tabs defaultValue="writing" className="w-full">
        <TabsList className="flex flex-wrap gap-1 h-auto bg-secondary/50 p-1 rounded-xl">
          <TabsTrigger value="writing" className="flex items-center gap-2 rounded-lg">
            <Edit3 size={15} /> Writing
          </TabsTrigger>
          <TabsTrigger value="speaking" className="flex items-center gap-2 rounded-lg">
            <MessageSquare size={15} /> Speaking
          </TabsTrigger>
          <TabsTrigger value="vocabulary" className="flex items-center gap-2 rounded-lg">
            <BookA size={15} /> Vocabulary
          </TabsTrigger>
          <TabsTrigger value="translations" className="flex items-center gap-2 rounded-lg">
            <Languages size={15} /> Translations
          </TabsTrigger>
          <TabsTrigger value="assessment" className="flex items-center gap-2 rounded-lg">
            <CheckSquare size={15} /> Assessment
          </TabsTrigger>
        </TabsList>

        <div className="pt-6">

          <TabsContent value="writing" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {WIDA_LEVELS.map(level => (
                <Card key={level.level} className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">WIDA {level.level}</CardTitle>
                      <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{level.program}</p>
                  </CardHeader>
                  <CardContent>
                    <StrategyList items={WRITING_STRATEGIES[level.level as keyof typeof WRITING_STRATEGIES]} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speaking" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {WIDA_LEVELS.map(level => (
                <Card key={level.level} className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">WIDA {level.level}</CardTitle>
                      <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{level.program}</p>
                  </CardHeader>
                  <CardContent>
                    <StrategyList items={SPEAKING_STRATEGIES[level.level as keyof typeof SPEAKING_STRATEGIES]} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vocabulary" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {WIDA_LEVELS.map(level => (
                <Card key={level.level} className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">WIDA {level.level}</CardTitle>
                      <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{level.program}</p>
                  </CardHeader>
                  <CardContent>
                    <StrategyList items={VOCABULARY_SUPPORT[level.level as keyof typeof VOCABULARY_SUPPORT]} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="translations" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {WIDA_LEVELS.map(level => (
                <Card key={level.level} className="shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">WIDA {level.level}</CardTitle>
                      <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{level.program}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {TRANSLATION_GUIDELINES.useByLevel[level.level as keyof typeof TRANSLATION_GUIDELINES.useByLevel]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assessment" className="m-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {WIDA_LEVELS.map(level => {
                const data = ASSESSMENTS[level.level as keyof typeof ASSESSMENTS];
                return (
                  <Card key={level.level} className="shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">WIDA {level.level}</CardTitle>
                        <Badge className={`${level.badgeColor} text-xs`}>{level.name}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{level.program}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">General</p>
                        <StrategyList items={data.general} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">Response Options</p>
                        <StrategyList items={data.response} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">Content Modifications</p>
                        <StrategyList items={data.content} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

        </div>
      </Tabs>
    </div>
  );
}
