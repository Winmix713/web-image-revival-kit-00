
import React from "react";
import { Icon } from "@iconify/react";

interface MagicSidebarProps {
  isOpen: boolean;
}

const MagicSidebar: React.FC<MagicSidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`
        fixed md:relative z-40 w-36 bg-black/40 border-r border-white/10 p-2
        transition-transform duration-300 ease-in-out
        md:transform-none md:block
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
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
  );
};

export default MagicSidebar;
