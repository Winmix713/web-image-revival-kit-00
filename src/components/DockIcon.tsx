
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Icon } from "@iconify/react";

// DockIcon component interface
interface DockIconProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({ icon, label, isActive, onClick }) => {
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start({
      y: -5,
      scale: 1.1,
      transition: { duration: 0.2 }
    });
    await controls.start({
      y: 0,
      scale: 1,
      transition: { duration: 0.2 }
    });
    onClick?.();
  };

  return (
    <motion.div
      animate={controls}
      whileHover={{ y: -3, scale: 1.05 }}
      className="relative group"
    >
      <div
        onClick={handleClick}
        className={`
          w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer
          transition-colors duration-200
          ${isActive 
            ? "bg-white/10 shadow-lg" 
            : "bg-black/40 hover:bg-white/5"}
        `}
      >
        <Icon icon={icon} className="text-sm text-white/80" />
      </div>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 
                    bg-black/60 rounded-md text-[10px] opacity-0 group-hover:opacity-100
                    transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {label}
      </div>
    </motion.div>
  );
};

export default DockIcon;
