
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DockIcon from "@/components/DockIcon";
import { ChevronLeft, ChevronDown, Menu } from "lucide-react";

const MagicInterface = () => {
  const [activeIcon, setActiveIcon] = useState("magic");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar for mobile
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* Wrapper to control overall size */}
      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] h-[80vh] relative bg-black/30 rounded-xl overflow-hidden backdrop-blur-md border border-white/10">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2 bg-black/40 backdrop-blur-md border-b border-white/10 h-8">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-white"
              onClick={toggleSidebar}
            >
              <Menu className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-white flex items-center gap-1 h-7"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-xs font-medium">Magic Interface</span>
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-white flex items-center gap-1 h-7"
              >
                <span className="text-xs font-medium">Filter View</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="bg-black/80 backdrop-blur-md border border-white/10"
            >
              <DropdownMenuItem className="text-xs">All Items</DropdownMenuItem>
              <DropdownMenuItem className="text-xs">Images Only</DropdownMenuItem>
              <DropdownMenuItem className="text-xs">Documents</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Main Layout */}
        <div className="flex h-[calc(80vh-32px)]">
          {/* Sidebar */}
          <div className={`
            fixed md:relative z-40 w-36 bg-black/40 border-r border-white/10 p-2
            transition-transform duration-300 ease-in-out
            md:transform-none md:block
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider mb-1">
              Recent Files
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <img 
                  src="https://placehold.co/640x360/212338/FFFFFF/png?text=Magic+Preview"
                  alt="Magic preview"
                  className="w-full aspect-video object-cover rounded-md"
                />
                <div className="flex items-center gap-1">
                  <Icon icon="lucide:image" className="text-xs text-white/60" />
                  <span className="text-[10px] text-white/80">Project Preview</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-black/20 p-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff4a4a]/5 via-[#007bff]/5 to-transparent" />
            
            <div className="absolute inset-0 z-0">
              <img 
                src="https://placehold.co/1200x800/212338/FFFFFF/png?text=Magic+Background"
                alt="Magic background"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <h1 className="text-xl md:text-2xl font-bold mb-2 text-center text-white/90 tracking-tight">
                Streamline Your Workflow
              </h1>
              <p className="text-sm text-white/60 mb-4 tracking-wide">
                Powerful tools, seamless experience
              </p>

              <Card className="absolute top-10 right-3 md:right-10 w-36 bg-black/40 backdrop-blur-md border border-white/10">
                <CardContent className="gap-1 p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-muted-foreground hover:text-white h-7"
                  >
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:clipboard" className="text-xs" />
                      <span className="text-xs">Copy</span>
                    </div>
                    <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded">⌘C</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-muted-foreground hover:text-white h-7"
                  >
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:share" className="text-xs" />
                      <span className="text-xs">Share</span>
                    </div>
                    <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded">⌘S</span>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-white/10 bg-black/40 backdrop-blur-md">
              <div className="flex flex-col md:flex-row justify-between gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:w-auto w-full text-muted-foreground hover:text-white gap-1 h-7"
                >
                  <Icon icon="lucide:history" className="text-xs" />
                  <span className="text-xs">Recent Actions</span>
                </Button>
                <div className="flex gap-1 flex-col md:flex-row w-full md:w-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full md:w-auto text-muted-foreground hover:text-white gap-1 h-7"
                  >
                    <Icon icon="lucide:copy" className="text-xs" />
                    <span className="text-xs">Quick Copy</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full md:w-auto text-muted-foreground hover:text-white h-7"
                  >
                    <span className="text-xs">More</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dock */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 
                    bg-black/40 backdrop-blur-md border border-white/10
                    rounded-xl p-1 flex gap-1 shadow-xl z-50"
        >
          <DockIcon
            icon="lucide:wand-2"
            label="Quick Actions"
            isActive={activeIcon === "magic"}
            onClick={() => setActiveIcon("magic")}
          />
          <DockIcon
            icon="lucide:layout-grid"
            label="Projects"
            isActive={activeIcon === "projects"}
            onClick={() => setActiveIcon("projects")}
          />
          <DockIcon
            icon="lucide:settings"
            label="Preferences"
            isActive={activeIcon === "settings"}
            onClick={() => setActiveIcon("settings")}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MagicInterface;
