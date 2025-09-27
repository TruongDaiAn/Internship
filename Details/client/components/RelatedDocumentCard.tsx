import { Button } from "@/components/ui/button";

interface RelatedDocumentCardProps {
  title: string;
  field: string;
  location: string;
  fee: string;
  onExploit?: () => void;
  onViewDetails?: () => void;
  onSave?: () => void;
}

export default function RelatedDocumentCard({
  title,
  field,
  location,
  fee,
  onExploit,
  onViewDetails,
  onSave,
}: RelatedDocumentCardProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded bg-white p-3">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-2">
            <h3 className="flex-1 text-base font-semibold leading-[1.5] text-neutral-1">
              {title}
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <span className="text-base font-normal leading-[1.5] text-neutral-2">
                {field}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="flex-1 text-base font-normal leading-[1.5] text-neutral-2">
                {location}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-base font-normal leading-[1.5] text-neutral-2">
                Phí khai thác:
              </span>
              <span className="text-base font-semibold leading-[1.5] text-neutral-1">
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
            Lưu hồ sơ
          </Button>
        </div>
      </div>
    </div>
  );
}
