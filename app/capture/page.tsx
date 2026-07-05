"use client";

import { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Button from "../../components/ui/Button";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Capture } from "../../types/capture";
import { workspaces } from "../../data/workspaces";

export default function CapturePage() {
  const [text, setText] = useState("");

  const [workspace, setWorkspace] = useState(workspaces[0].name);

  const [ideas, setIdeas] = useLocalStorage<Capture[]>(
    "captures",
    []
  );

  function saveIdea() {
    if (!text.trim()) return;

    const newIdea: Capture = {
      id: crypto.randomUUID(),
      text,
      workspace,
      createdAt: new Date().toLocaleString(),
    };

    setIdeas([newIdea, ...ideas]);
    setText("");
  }

  return (
    <AppLayout
      title="Capture"
      subtitle="Every idea starts here."
    >
      <div className="rounded-3xl bg-[#F5F1EB] p-6 shadow-sm">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="min-h-[160px] w-full resize-none bg-transparent outline-none"
        />

        <select
          value={workspace}
          onChange={(e) => setWorkspace(e.target.value)}
          className="mt-5 w-full rounded-xl border border-[#DDD3C8] bg-white p-3"
        >
          {workspaces.map((workspace) => (
            <option
              key={workspace.id}
              value={workspace.name}
            >
              {workspace.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <Button onClick={saveIdea}>
          Save Idea
        </Button>
      </div>

      <div className="mt-8 space-y-4">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="rounded-3xl bg-[#F5F1EB] p-5 shadow-sm"
          >
            <p className="font-medium">
              {idea.text}
            </p>

            <p className="mt-2 text-sm text-[#847B72]">
              {idea.workspace}
            </p>

            <p className="text-xs text-[#A39A91]">
              {idea.createdAt}
            </p>

            <button
              className="mt-4 rounded-xl bg-[#2E2925] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              ➕ Create Planner Post
            </button>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}