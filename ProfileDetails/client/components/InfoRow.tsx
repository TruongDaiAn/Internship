import React from 'react';

interface InfoRowProps {
  label: string;
  value: string;
  showDivider?: boolean;
}

export function InfoRow({ label, value, showDivider = true }: InfoRowProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 w-full">
        <div className="w-full sm:w-80 text-content-neutral-3 text-base font-bold leading-6 sm:shrink-0">
          {label}:
        </div>
        <div className="flex-1 text-content-neutral-1 text-base font-normal leading-6">
          {value}
        </div>
      </div>
      {showDivider && <div className="w-full h-px bg-gray-100" />}
    </>
  );
}
