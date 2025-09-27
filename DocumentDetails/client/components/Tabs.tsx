interface Tab {
  id: string;
  label: string;
  active?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-1.5 text-base font-bold border-b-3 transition-colors ${
              tab.id === activeTab
                ? "text-app-green border-app-green"
                : "text-content-primary border-transparent hover:text-app-green"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="h-px bg-grey-light"></div>
    </div>
  );
}
