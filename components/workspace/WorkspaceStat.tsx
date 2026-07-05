type WorkspaceStatProps = {
  label: string;
  value: string | number;
};

export default function WorkspaceStat({
  label,
  value,
}: WorkspaceStatProps) {
  return (
    <div className="rounded-2xl bg-[#F5F1EB] p-5 shadow-sm">
      <p className="text-sm text-[#847B72]">
        {label}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}