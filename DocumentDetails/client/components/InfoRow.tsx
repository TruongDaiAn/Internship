interface InfoRowProps {
  label: string;
  value: string;
  valueLink?: boolean;
}

export default function InfoRow({ label, value, valueLink = false }: InfoRowProps) {
  return (
    <>
      <div className="flex gap-4 py-3">
        <div className="w-40 text-content-tertiary text-base font-bold flex-shrink-0">
          {label}
        </div>
        <div className={`flex-1 text-base ${valueLink ? "text-app-green font-bold" : "text-content-primary"}`}>
          {value}
        </div>
      </div>
      <div className="h-px bg-grey-lighter"></div>
    </>
  );
}
