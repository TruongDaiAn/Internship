import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FilterItem {
  id: string;
  label: string;
  count: string;
  checked?: boolean;
}

interface FilterSectionProps {
  title: string;
  items: FilterItem[];
  isExpandable?: boolean;
  defaultExpanded?: boolean;
  hasSearch?: boolean;
  searchPlaceholder?: string;
  showViewMore?: boolean;
}

export default function FilterSection({ 
  title, 
  items, 
  isExpandable = false, 
  defaultExpanded = true,
  hasSearch = false,
  searchPlaceholder = "",
  showViewMore = false
}: FilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showAll, setShowAll] = useState(false);

  const displayItems = showAll ? items : items.slice(0, 5);

  return (
    <div className="flex flex-col gap-5 p-5 bg-white rounded border border-border">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-text-primary font-bold text-xl leading-[30px]">
          {title}
        </h3>
        {isExpandable && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-6 h-6 p-0"
          >
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-text-secondary" />
            ) : (
              <ChevronDown className="w-6 h-6 text-text-secondary" />
            )}
          </Button>
        )}
      </div>

      {isExpanded && (
        <div className="flex flex-col gap-5">
          {/* Search Bar (if enabled) */}
          {hasSearch && (
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-text-secondary" />
              <Input 
                placeholder={searchPlaceholder}
                className="pl-10 h-10 border-border bg-white text-text-muted"
              />
            </div>
          )}

          {/* Filter Items */}
          <div className="flex flex-col gap-5">
            {/* Select All Option (for first section) */}
            {title === "Lĩnh vực dữ liệu" && (
              <div className="flex items-center gap-3">
                <Checkbox id="select-all" />
                <label htmlFor="select-all" className="flex-1 text-text-primary font-normal text-base leading-6">
                  Chọn tất cả
                </label>
              </div>
            )}

            {/* Individual Items */}
            {displayItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <Checkbox id={item.id} checked={item.checked} />
                <label htmlFor={item.id} className="flex-1 text-text-primary font-normal text-base leading-6">
                  {item.label}
                </label>
                <span className="text-text-muted font-normal text-xs leading-[18px]">
                  {item.count}
                </span>
              </div>
            ))}

            {/* View More Button */}
            {showViewMore && items.length > 5 && (
              <Button 
                variant="ghost" 
                onClick={() => setShowAll(!showAll)}
                className="h-10 px-5 py-2.5 justify-center items-center gap-1 self-start rounded"
              >
                <span className="text-text-primary font-semibold text-base leading-6">
                  {showAll ? "Thu gọn" : "Xem thêm"}
                </span>
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
