import { Button } from "@/components/ui/button";
import DocumentBadge from "./DocumentBadge";

interface DocumentCardProps {
  title: string;
  location: string;
  fee: string;
  freeAccess?: boolean;
  showPremiumIcon?: boolean;
  onExploit?: () => void;
  onViewDetails?: () => void;
  onSave?: () => void;
}

export default function DocumentCard({
  title,
  location,
  fee,
  freeAccess = true,
  showPremiumIcon = false,
  onExploit,
  onViewDetails,
  onSave,
}: DocumentCardProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded bg-white p-3">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              {showPremiumIcon && (
                <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-lighter p-1">
                  {/* Premium icon placeholder */}
                </div>
              )}
              <DocumentBadge type="tailieu" />
            </div>
            <div className="flex items-start gap-4">
              <h3 className="flex-1 text-base font-semibold leading-[1.5] text-neutral-1">
                {title}
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <span className="flex-1 text-base font-normal leading-[1.5] text-neutral-2">
                {location}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-base font-normal leading-[1.5] text-neutral-2">
                Phí khai thác:
              </span>
              <span className={cn(
                "text-base font-semibold leading-[1.5]",
                freeAccess ? "text-green" : "text-neutral-1"
              )}>
                {fee}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="h-10 bg-gray-light text-neutral-1 hover:bg-gray-light/80"
            onClick={onExploit}
          >
            Khai thác
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-10 text-neutral-1"
            onClick={onViewDetails}
          >
            Xem chi tiết
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-10 text-neutral-1"
            onClick={onSave}
          >
            Lưu văn bản
          </Button>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
