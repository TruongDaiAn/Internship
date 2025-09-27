import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Home, File, DollarSign, Bookmark } from "lucide-react";

interface DocumentCardProps {
  title: string;
  location: string;
  fileInfo: string;
  price: string;
  isPremium: boolean;
  documentType?: string;
}

export default function DocumentCard({ 
  title, 
  location, 
  fileInfo, 
  price, 
  isPremium,
  documentType = "Tài liệu" 
}: DocumentCardProps) {
  return (
    <div className="flex flex-col gap-4 p-3 bg-white rounded border border-border">
      {/* Header with badges and title */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            {/* Badges */}
            <div className="flex items-center gap-1">
              {/* Premium Badge */}
              <div className="flex w-6 h-6 p-1 justify-center items-center gap-2.5 rounded bg-muted">
                <Crown className="w-[18px] h-[18px] text-[#FFB915] fill-[#FFB915]" />
              </div>
              
              {/* Document Type Badge */}
              <Badge 
                variant="default" 
                className="w-[53px] h-6 px-1 py-0.5 bg-purple-accent text-white text-xs font-medium leading-[18px] rounded"
              >
                {documentType}
              </Badge>
            </div>

            {/* Title */}
            <div className="flex items-start gap-4">
              <div className="flex-1 text-text-primary font-semibold text-base leading-6">
                {title}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-2">
            {/* Location */}
            <div className="flex items-start gap-2">
              <Home className="w-6 h-6 text-text-secondary" />
              <div className="flex-1 text-text-secondary font-normal text-base leading-6">
                {location}
              </div>
            </div>

            {/* File Info */}
            <div className="flex items-start gap-2">
              <File className="w-6 h-6 text-text-secondary" />
              <div className="flex-1 text-text-primary font-semibold text-base leading-[150%]">
                <span className="text-text-secondary font-normal">Hồ sơ: </span>
                <span className="text-text-primary font-semibold">{fileInfo}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-start gap-2">
              <DollarSign className="w-6 h-6 text-text-secondary" />
              <div className="text-text-secondary font-normal text-base leading-6">
                Phí khai thác:
              </div>
              <div className={`font-semibold text-base leading-6 ${
                price === "Miễn phí" ? "text-green-primary" : "text-green-primary"
              }`}>
                {price}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-start gap-2">
          <Button 
            variant="secondary" 
            size="default"
            className="h-10 px-5 py-2.5 bg-secondary text-text-primary font-semibold text-base leading-6 rounded"
          >
            Khai thác
          </Button>
          
          <Button 
            variant="ghost" 
            size="default"
            className="h-10 px-5 py-2.5 text-text-primary font-semibold text-base leading-6 rounded"
          >
            Xem chi tiết
          </Button>
          
          <Button 
            variant="ghost" 
            size="default"
            className="h-10 px-5 py-2.5 gap-1 text-text-primary font-semibold text-base leading-6 rounded"
          >
            <Bookmark className="w-6 h-6 text-text-primary" />
            Lưu văn bản
          </Button>
        </div>
      </div>
    </div>
  );
}
