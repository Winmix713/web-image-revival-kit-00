
import React from "react";
import { motion } from "framer-motion";
import DockIcon from "@/components/DockIcon";

interface MagicDockProps {
  activeIcon: string;
  setActiveIcon: (icon: string) => void;
}

const MagicDock: React.FC<MagicDockProps> = ({ activeIcon, setActiveIcon }) => {
  return (
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
  );
};

export default MagicDock;
