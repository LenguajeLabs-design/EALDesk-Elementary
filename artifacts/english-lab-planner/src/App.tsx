import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/layout";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import ReadersWorkshop from "@/pages/readers-workshop";
import WritersWorkshop from "@/pages/writers-workshop";
import QuickTools from "@/pages/quick-tools";
import Strategies from "@/pages/strategies";
import WidaLevels from "@/pages/wida-levels";
import Assessments from "@/pages/assessments";
import Translations from "@/pages/translations";

const queryClient = new QueryClient();

function Router() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/readers-workshop" component={ReadersWorkshop} />
        <Route path="/writers-workshop" component={WritersWorkshop} />
        <Route path="/quick-tools" component={QuickTools} />
        <Route path="/strategies" component={Strategies} />
        <Route path="/wida-levels" component={WidaLevels} />
        <Route path="/assessments" component={Assessments} />
        <Route path="/translations" component={Translations} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
