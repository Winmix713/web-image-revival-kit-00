
import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MagicContent: React.FC = () => {
  return (
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

      <MagicFooter />
    </div>
  );
};

const MagicFooter: React.FC = () => {
  return (
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
  );
};

export default MagicContent;
