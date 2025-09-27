import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-app-green/20 backdrop-blur-md px-48 py-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-content-primary text-lg font-bold">Phí khai thác:</span>
        <span className="text-app-green text-xl font-bold">Miễn phí</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button className="bg-app-green hover:bg-app-green/90 text-white font-bold h-10 px-5">
          Khai thác ngay
        </Button>
        <Button 
          variant="ghost" 
          className="text-content-primary font-bold h-10 px-5 flex items-center gap-2"
        >
          <Bookmark className="w-6 h-6" />
          Lưu hồ sơ
        </Button>
      </div>
    </div>
  );
}
