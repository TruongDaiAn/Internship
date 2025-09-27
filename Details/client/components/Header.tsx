import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bookmark,
  Ticket,
  Bell,
  ChevronDown,
  User,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-white px-6 py-3 shadow-[inset_0_-1px_0_0_#EDEDED]">
      {/* Left side - Logo and title */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a7285c967748d7e59f6c7ef8c9e61e86ca68eecf?width=96"
            alt="System Logo"
            className="h-12 w-12"
          />
          <div className="text-lg font-bold leading-[1.5] text-neutral-1">
            Hệ thống lưu trữ điện tử<br />
            ngành Tài nguyên & Môi trường
          </div>
        </div>
      </div>

      {/* Right side - Notifications and user */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          {/* Bookmark with 99+ badge */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bookmark className="h-6 w-6 text-neutral-1" />
            </Button>
            <div className="absolute -right-3 -top-1 flex h-[14px] min-w-[28px] items-center justify-center rounded-full bg-green px-1 text-[10px] font-normal text-white">
              99+
            </div>
          </div>

          {/* Ticket with 1 badge */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Ticket className="h-6 w-6 text-neutral-1" />
            </Button>
            <div className="absolute -right-1 -top-1 flex h-[14px] min-w-[13px] items-center justify-center rounded-full bg-green px-1 text-[10px] font-normal text-white">
              1
            </div>
          </div>

          {/* Bell without badge */}
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bell className="h-6 w-6 text-neutral-1" />
          </Button>
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-gray-border"></div>

        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1 px-0">
              <span className="text-base font-normal text-neutral-1">thanhvannguyen</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C9C9CF]">
                <User className="h-6 w-6 text-white" />
              </div>
              <ChevronDown className="h-6 w-6 text-neutral-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
