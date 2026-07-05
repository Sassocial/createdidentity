export default function QuickStats() {
  const stats = [
    {
      label: "Tasks Due",
      value: "7",
      icon: "✅",
    },
    {
      label: "Posts Scheduled",
      value: "12",
      icon: "📅",
    },
    {
      label: "Ideas Captured",
      value: "18",
      icon: "💡",
    },
    {
      label: "Workspaces",
      value: "4",
      icon: "🏢",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl bg-[#F5F1EB] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <span className="text-3xl">
              {stat.icon}
            </span>

            <h2 className="text-4xl font-bold text-[#2E2925]">
              {stat.value}
            </h2>
          </div>

          <p className="mt-5 text-sm font-medium uppercase tracking-wider text-[#847B72]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}