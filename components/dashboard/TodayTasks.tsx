import AppCard from "../ui/AppCard";
import { starterTasks } from "../../data/tasks";

export default function TodayTasks() {
  const todaysTasks = starterTasks.filter((task) => !task.completed);

  return (
    <AppCard>
      <h2 className="text-xl font-semibold">
        Today's Tasks
      </h2>

      <div className="mt-5 space-y-4">
        {todaysTasks.map((task) => (
          <div
            key={task.id}
            className="border-b border-[#E6DDD3] pb-3 last:border-0"
          >
            <p className="font-medium text-[#2E2925]">
              {task.title}
            </p>

            <p className="mt-1 text-sm text-[#847B72]">
              {task.workspace}
            </p>
          </div>
        ))}

        {todaysTasks.length === 0 && (
          <p className="text-sm text-[#847B72]">
            🎉 You're all caught up for today.
          </p>
        )}
      </div>
    </AppCard>
  );
}