import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Browser from "./pages/Browser";
import Chat from "./pages/Chat";
import Create from "./pages/Create";
import Friends from "./pages/Friends";
import GameDetail from "./pages/GameDetail";
import Games from "./pages/Games";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import ToolDetail from "./pages/ToolDetail";
import Tools from "./pages/Tools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/browser" element={<Browser />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/create" element={<Create />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/games" element={<Games />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tools/:id" element={<ToolDetail />} />
          <Route path="/tools" element={<Tools />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
