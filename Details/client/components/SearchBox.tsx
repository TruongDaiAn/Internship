import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: () => void;
}

export default function SearchBox({ 
  placeholder = "Tìm kiếm văn bản",
  onSearch 
}: SearchBoxProps) {
  return (
    <div className="flex w-full max-w-[560px] items-start gap-3">
      <div className="flex h-12 flex-1 items-center justify-between rounded bg-white pl-2">
        <div className="flex flex-1 items-center gap-2">
          <Search className="h-6 w-6 text-neutral-2" />
          <Input
            placeholder={placeholder}
            className="border-0 bg-transparent text-base placeholder:text-neutral-3 focus-visible:ring-0"
          />
        </div>
      </div>
      <Button 
        className="h-12 bg-green text-white hover:bg-green/90"
        onClick={onSearch}
      >
        Tìm kiếm
      </Button>
    </div>
  );
}
