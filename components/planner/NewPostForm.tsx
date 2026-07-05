"use client";

import { useState } from "react";
import Button from "../ui/Button";

type Props = {
  onAdd: (title: string) => void;
};

export default function NewPostForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  function submit() {
    if (!title.trim()) return;

    onAdd(title);
    setTitle("");
  }

  return (
    <div className="mb-8 rounded-3xl bg-[#F5F1EB] p-6 shadow-sm">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New content idea..."
        className="w-full rounded-xl border border-[#DDD3C8] bg-white p-4 outline-none"
      />

      <div className="mt-4">
        <Button onClick={submit}>
          Create Post
        </Button>
      </div>
    </div>
  );
}