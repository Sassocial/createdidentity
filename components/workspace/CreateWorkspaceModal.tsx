"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { createWorkspace } from "../../lib/workspaces";

type Props = {
  onClose: () => void;
};

export default function CreateWorkspaceModal({
  onClose,
}: Props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    if (!name.trim()) return;

    setLoading(true);

    try {
      await createWorkspace(name);

      onClose();

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Unable to create workspace.");
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-3xl bg-[#F5F1EB] p-8 shadow-2xl">
        <h2 className="text-2xl font-bold">
          New Workspace
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Workspace name"
          className="mt-6 w-full rounded-2xl border border-[#DDD3C8] bg-white p-4 outline-none"
        />

        <div className="mt-8 flex gap-4">
          <Button onClick={handleCreate}>
            {loading ? "Creating..." : "Create"}
          </Button>

          <Button onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}