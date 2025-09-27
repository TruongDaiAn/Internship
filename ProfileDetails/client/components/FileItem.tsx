import React from 'react';

interface FileItemProps {
  fileName: string;
  fileSize: string;
}

export function FileItem({ fileName, fileSize }: FileItemProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-16 w-full">
      <div className="flex w-full sm:w-80 items-center gap-1">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 shrink-0"
        >
          <g clipPath="url(#clip0_12752_9410)">
            <path 
              d="M3.99968 13.8233C3.79669 13.7061 3.62819 13.5375 3.51115 13.3344C3.39411 13.1314 3.33266 12.901 3.33301 12.6667V3.33333C3.33301 2.97971 3.47348 2.64057 3.72353 2.39052C3.97358 2.14048 4.31272 2 4.66634 2H9.33301L12.6663 5.33333V12.6667C12.6663 13.0203 12.5259 13.3594 12.2758 13.6095C12.0258 13.8595 11.6866 14 11.333 14H10.6663" 
              stroke="#005DCA" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M7.33333 11.3335C7.68696 11.3335 8.02609 11.474 8.27614 11.724C8.52619 11.9741 8.66667 12.3132 8.66667 12.6668V14.0002C8.66667 14.177 8.59643 14.3465 8.4714 14.4716C8.34638 14.5966 8.17681 14.6668 8 14.6668H6.66667C6.48986 14.6668 6.32029 14.5966 6.19526 14.4716C6.07024 14.3465 6 14.177 6 14.0002V12.6668C6 12.3132 6.14048 11.9741 6.39052 11.724C6.64057 11.474 6.97971 11.3335 7.33333 11.3335Z" 
              stroke="#005DCA" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path d="M7.33366 3.3335H6.66699" stroke="#005DCA" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.66667 4.6665H8" stroke="#005DCA" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.33366 6H6.66699" stroke="#005DCA" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.66667 7.3335H8" stroke="#005DCA" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.33366 8.6665H6.66699" stroke="#005DCA" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.66667 10H8" stroke="#005DCA" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_12752_9410">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <button className="text-brand-blue text-base font-bold leading-6 hover:underline">
          {fileName}
        </button>
      </div>
      <div className="flex px-1 py-1 justify-center items-center">
        <span className="text-content-neutral-1 text-xs font-normal">
          {fileSize}
        </span>
      </div>
    </div>
  );
}
