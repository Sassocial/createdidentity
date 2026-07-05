const actions = [
  "✨ Generate Caption",
  "📸 Reel Ideas",
  "📅 Plan My Week",
  "🔥 Trending Content",
  "📊 Analyse Performance",
  "🏨 Workspace Audit",
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {actions.map((action) => (
        <button
          key={action}
          className="rounded-2xl bg-[#F5F1EB] p-5 text-left transition hover:scale-[1.02] hover:shadow-lg"
        >
          {action}
        </button>
      ))}
    </div>
  );
}