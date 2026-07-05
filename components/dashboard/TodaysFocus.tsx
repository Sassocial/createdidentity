import AppCard from "../ui/AppCard";
import { CheckCircle2, Clock3 } from "lucide-react";

const tasks = [
  {
    title: "Edit Coppid Beech Wedding Reel",
    time: "Today",
  },
  {
    title: "Schedule Peak Fitness Content",
    time: "Tomorrow",
  },
  {
    title: "Film Chatham Toboggan Reel",
    time: "This Week",
  },
];

export default function TodaysFocus() {
  return (
    <AppCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#B28A57]">
            Today's Focus
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2D2926]">
            Your priorities
          </h2>
        </div>

        <CheckCircle2
          size={30}
          className="text-[#B28A57]"
        />
      </div>

      <div className="mt-8 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
          >
            <div>
              <p className="font-semibold text-[#2D2926]">
                {task.title}
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm text-[#857D74]">
                <Clock3 size={15} />
                {task.time}
              </div>
            </div>

            <button className="rounded-xl bg-[#B28A57] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#9D7746]">
              Open
            </button>
          </div>
        ))}
      </div>
    </AppCard>
  );
}