
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MagicHeaderProps {
  toggleSidebar: () => void;
}

const MagicHeader: React.FC<MagicHeaderProps> = ({ toggleSidebar }) => {
  return (
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
  );
};

export default MagicHeader;
