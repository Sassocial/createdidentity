"use client";

import { useState } from "react";
import AppCard from "../ui/AppCard";
import { starterTasks } from "../../data/tasks";

export default function TaskList() {
  const [tasks, setTasks] = useState(starterTasks);

  function toggleTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <AppCard>
      <h2 className="text-xl font-semibold">
        Today's Tasks
      </h2>

      <div className="mt-6 space-y-3">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <div>
              <p
                className={
                  task.completed
                    ? "line-through text-[#A39A91]"
                    : ""
                }
              >
                {task.title}
              </p>

              <p className="text-sm text-[#847B72]">
                {task.workspace}
              </p>
            </div>
          </label>
        ))}
      </div>
    </AppCard>
  );
}