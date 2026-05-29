import React, { useState } from "react";
import { QUICK_TOOLS, WIDA_LEVELS, WRITING_STRATEGIES, SPEAKING_STRATEGIES, VOCABULARY_SUPPORT } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MessageSquare, Edit3, BookA } from "lucide-react";

export default function QuickTools() {
  const searchParams = new URLSearchParams(window.location.search);
  const workshop = searchParams.get("workshop");
  const availableTools = workshop
    ? QUICK_TOOLS.filter(
        (tool) => tool.workshop === workshop || tool.workshop === "shared",
      )
    : QUICK_TOOLS;
  const initialTask = searchParams.get("task") || availableTools[0]?.id || QUICK_TOOLS[0].id;
  
  const [selectedTask, setSelectedTask] = useState(initialTask);
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  const task = availableTools.find(t => t.id === selectedTask) || availableTools[0] || QUICK_TOOLS[0];
  const levelData = WIDA_LEVELS.find(l => l.level === selectedLevel) || WIDA_LEVELS[0];

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
              {WIDA_LEVELS.map(l => (
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
                <p className="text-muted-foreground mt-1">{task.description}</p>
              </div>
              <Badge className={`${levelData.badgeColor} px-3 py-1 rounded-full text-sm font-bold border`}>
                WIDA {selectedLevel}: {levelData.name}
              </Badge>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Recommended Sentence Frames</h3>
              <div className="bg-secondary/50 rounded-lg p-5 border border-border space-y-3">
                {task.frames[selectedLevel as keyof typeof task.frames].map((frame, i) => (
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
                      {WRITING_STRATEGIES[selectedLevel as keyof typeof WRITING_STRATEGIES].map((strategy, i) => (
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
                      {SPEAKING_STRATEGIES[selectedLevel as keyof typeof SPEAKING_STRATEGIES].map((strategy, i) => (
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
                      {VOCABULARY_SUPPORT[selectedLevel as keyof typeof VOCABULARY_SUPPORT].map((strategy, i) => (
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
