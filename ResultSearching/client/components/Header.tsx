import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, Ticket, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-[78px] bg-white shadow-[0_-1px_0_0_#EDEDED_inset] px-6 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2.5">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2Fbf4329eaef054f17ad8c23d07ce1a204%2Fe687e2e7c139446484c61ea890535add" 
            alt="Logo" 
            className="w-12 h-12"
          />
          <div className="text-text-primary font-semibold text-lg leading-[27px]">
            Hệ thống lưu trữ điện tử<br />
            ngành Tài nguyên & Môi trường
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-5">
        {/* Notification Icons */}
        <div className="flex items-center justify-end gap-2">
          {/* Bookmark with 99+ badge */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Bookmark className="w-6 h-6 text-text-primary" />
            </Button>
            <Badge 
              variant="default" 
              className="absolute -top-1 -right-1 w-7 h-3.5 px-1 bg-green-primary text-white text-[10px] font-normal leading-[15px] rounded-[20px] flex items-center justify-center"
            >
              99+
            </Badge>
          </div>

          {/* Ticket with 1 badge */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Ticket className="w-6 h-6 text-text-primary" />
            </Button>
            <Badge 
              variant="default" 
              className="absolute -top-1 -right-1 w-3.5 h-3.5 px-1 bg-green-primary text-white text-[10px] font-normal leading-[15px] rounded-[20px] flex items-center justify-center"
            >
              1
            </Badge>
          </div>

          {/* Bell with no badge */}
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Bell className="w-6 h-6 text-text-primary" />
          </Button>
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-[#B2B2B2]"></div>

        {/* User Profile */}
        <div className="flex items-center gap-1.5">
          <span className="text-text-primary text-base font-normal leading-6">
            thanhvannguyen
          </span>
          <ChevronDown className="w-6 h-6 text-text-primary" />
        </div>
      </div>
    </header>
  );
}
