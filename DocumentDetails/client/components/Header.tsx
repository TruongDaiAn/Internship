import { Bookmark, Bell, Ticket, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-grey-light px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a7285c967748d7e59f6c7ef8c9e61e86ca68eecf?width=96" 
            alt="Logo" 
            className="w-12 h-12"
          />
          <div className="text-content-primary text-lg font-bold leading-tight">
            Hệ thống lưu trữ điện tử<br />
            ngành Tài nguyên & Môi trường
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          {/* Bookmark with badge */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Bookmark className="w-6 h-6" />
            </Button>
            <div className="absolute -top-1 -right-1 bg-app-green text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-3.5 flex items-center justify-center">
              99+
            </div>
          </div>
          
          {/* Ticket with badge */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Ticket className="w-6 h-6" />
            </Button>
            <div className="absolute -top-1 -right-1 bg-app-green text-white text-xs px-1.5 py-0.5 rounded-full min-w-[13px] h-3.5 flex items-center justify-center">
              1
            </div>
          </div>
          
          {/* Bell */}
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Bell className="w-6 h-6" />
          </Button>
        </div>
        
        <div className="w-px h-4 bg-gray-400"></div>
        
        <div className="flex items-center gap-1">
          <span className="text-content-primary text-base">thanhvannguyen</span>
          <div className="w-9 h-9 bg-grey-border rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-grey-border rounded-full"></div>
          </div>
          <ChevronDown className="w-6 h-6 text-content-secondary" />
        </div>
      </div>
    </header>
  );
}
