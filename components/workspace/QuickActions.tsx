import AppCard from "../ui/AppCard";

export default function QuickActions() {
  const actions = [
    "💡 New Capture",
    "📅 Open Calendar",
    "📝 Create Campaign",
    "📊 View Analytics",
  ];

  return (
    <AppCard>
      <h2 className="text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-2xl bg-[#E6DDD3] p-4 text-left transition hover:bg-[#DDD3C8]"
          >
            {action}
          </button>
        ))}
      </div>
    </AppCard>
  );
}