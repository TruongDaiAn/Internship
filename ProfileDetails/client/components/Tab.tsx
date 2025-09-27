import React from 'react';
import { cn } from '@/lib/utils';

interface TabProps {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

export function Tab({ children, isSelected = false, onClick }: TabProps) {
  return (
    <div 
      className={cn(
        "flex flex-col justify-center items-center cursor-pointer",
        isSelected ? "relative" : ""
      )}
      onClick={onClick}
    >
      <div className="flex px-2 sm:px-4 py-1.5 justify-center items-center gap-2.5">
        <span
          className={cn(
            "text-sm sm:text-base font-bold leading-6 text-center",
            isSelected ? "text-green" : "text-content-neutral-1"
          )}
        >
          {children}
        </span>
      </div>
      {isSelected && (
        <div className="h-0.5 w-full rounded-t-sm bg-green" />
      )}
    </div>
  );
}
