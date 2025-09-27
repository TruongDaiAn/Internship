import { Crown } from "lucide-react";

interface DocumentBadgeProps {
  isPremium?: boolean;
  type: string;
}

export default function DocumentBadge({ isPremium = false, type }: DocumentBadgeProps) {
  return (
    <div className="flex items-center gap-1">
      {isPremium && (
        <div className="w-6 h-6 bg-grey-lighter rounded p-1 flex items-center justify-center">
          <Crown className="w-4 h-4 text-yellow-gold fill-yellow-gold" />
        </div>
      )}
      <div className="bg-app-purple text-white text-xs font-medium px-1 py-0.5 rounded">
        {type}
      </div>
    </div>
  );
}
