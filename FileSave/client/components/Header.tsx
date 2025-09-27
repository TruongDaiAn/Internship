import { Bell, Bookmark, ChevronDown, Ticket } from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-full px-6 py-3 justify-between items-center bg-white border-b border-gray-200 shadow-sm h-[78px]">
      {/* Left side - Logo */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2.5">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a7285c967748d7e59f6c7ef8c9e61e86ca68eecf?width=96"
            alt="Logo"
            className="w-12 h-12"
          />
          <div className="text-app-text-primary font-semibold text-lg leading-[27px]">
            <span className="font-bold">
              Hệ thống lưu trữ điện tử
              <br />
              ngành Tài nguyên & Môi trường
            </span>
          </div>
        </div>
      </div>

      {/* Right side - Navigation and User */}
      <div className="flex justify-end items-center gap-5">
        {/* Navigation icons */}
        <div className="flex justify-end items-center gap-2">
          {/* Bookmark with badge */}
          <div className="relative w-[41px] h-8">
            <button className="flex w-8 h-8 p-2.5 justify-center items-center gap-1 rounded border-0 bg-transparent hover:bg-gray-50 transition-colors">
              <Bookmark className="w-6 h-6 text-app-text-primary" strokeWidth={1.5} />
            </button>
            <div className="absolute top-[3px] left-4 flex h-3.5 px-1 items-center justify-center rounded-full bg-app-primary min-w-[28px]">
              <span className="text-white text-center font-normal text-[10px] leading-[15px]">
                99+
              </span>
            </div>
          </div>

          {/* Ticket with badge */}
          <div className="relative w-8 h-8">
            <button className="flex w-8 h-8 p-2.5 justify-center items-center gap-1 rounded border-0 bg-transparent hover:bg-gray-50 transition-colors">
              <Ticket className="w-6 h-6 text-app-text-primary" strokeWidth={1.5} />
            </button>
            <div className="absolute top-[3px] left-[17px] flex h-3.5 px-1 items-center justify-center rounded-full bg-app-primary min-w-[13px]">
              <span className="text-white text-center font-normal text-[10px] leading-[15px]">
                1
              </span>
            </div>
          </div>

          {/* Bell notification */}
          <button className="flex w-8 h-8 p-2.5 justify-center items-center gap-1 rounded border-0 bg-transparent hover:bg-gray-50 transition-colors">
            <Bell className="w-6 h-6 text-app-text-primary" strokeWidth={1.5} />
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-app-gray-300"></div>

        {/* User profile */}
        <div className="flex items-center gap-[5px]">
          <span className="text-app-text-primary text-center font-normal text-base leading-6">
            thanhvannguyen
          </span>
          
          {/* User avatar */}
          <div className="w-9 h-9 rounded-full bg-app-gray-200 flex items-center justify-center">
            <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="18" fill="#C9C9CF"/>
              <path d="M29.164 27.4082C26.4043 30.7135 22.3139 32.625 18.0005 32.625C13.687 32.625 9.5967 30.7135 6.83699 27.4082C6.76528 27.3228 6.73574 27.2099 6.7565 27.1005C6.77863 26.9917 6.84719 26.8978 6.94431 26.8434C8.89445 25.8849 10.9061 25.0563 12.9661 24.363L13.9708 23.9929C14.3646 23.7667 14.6281 23.3684 14.6818 22.9184C14.9302 22.037 14.7955 21.0921 14.3106 20.3146C13.06 18.9414 11.8378 17.2472 11.8378 13.0101C11.6854 11.3029 12.2714 9.61217 13.4484 8.36311C14.6255 7.11404 16.2814 6.42557 17.9997 6.47089C19.7183 6.42514 21.3747 7.11342 22.552 8.36254C23.7294 9.61166 24.3156 11.3027 24.1632 13.0101C24.1632 17.2472 22.9409 18.9414 21.6904 20.3146C21.2055 21.0921 21.0708 22.037 21.3192 22.9184C21.3728 23.3684 21.6364 23.7667 22.0302 23.9929L23.0363 24.363C25.0951 25.0564 27.1058 25.8845 29.0552 26.8419C29.152 26.8966 29.2205 26.9904 29.243 27.0991C29.2646 27.2087 29.2356 27.3222 29.164 27.4082Z" fill="white"/>
            </svg>
          </div>

          {/* Dropdown arrow */}
          <ChevronDown className="w-6 h-6 text-app-text-secondary" strokeWidth={1.5} />
        </div>
      </div>
    </header>
  );
}
