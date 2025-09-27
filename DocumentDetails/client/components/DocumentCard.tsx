import { Button } from "@/components/ui/button";
import DocumentBadge from "./DocumentBadge";

interface DocumentCardProps {
  title: string;
  location: string;
  relatedFile: string;
  isPremium?: boolean;
  price: string;
}

export default function DocumentCard({ 
  title, 
  location, 
  relatedFile, 
  isPremium = false, 
  price 
}: DocumentCardProps) {
  return (
    <div className="bg-white rounded p-3 space-y-4">
      <div className="space-y-4">
        <div className="space-y-1">
          <DocumentBadge isPremium={isPremium} type="Tài liệu" />
          <h3 className="text-base font-bold text-content-primary leading-normal">
            {title}
          </h3>
        </div>
        
        <div className="space-y-2 text-base">
          <div className="text-content-secondary">
            Đơn vị hành chính: {location}
          </div>
          <div className="text-content-secondary">
            Hồ sơ: <span className="text-content-primary font-bold">{relatedFile}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-content-secondary">Phí khai thác:</span>
            <span className="text-app-green font-bold">{price}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="secondary" 
          size="sm" 
          className="bg-grey-light text-content-primary font-bold hover:bg-grey-light/80 h-10 px-5"
        >
          Khai thác
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-content-primary font-bold h-10 px-5"
        >
          Xem chi tiết
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-content-primary font-bold h-10 px-5"
        >
          Lưu văn bản
        </Button>
      </div>
    </div>
  );
}
