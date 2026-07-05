"use client";

import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";
import Button from "../../components/ui/Button";
import ChatWindow from "../../components/identity/ChatWindow";

export default function IdentityPage() {
  const [prompt, setPrompt] = useState("");

  return (
    <AppLayout
      title="Identity"
      subtitle="Your AI creative partner."
    >
      <ChatWindow />

      <div className="mt-8 flex gap-4">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Identity..."
          className="flex-1 rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
        />

        <Button>
          Send
        </Button>
      </div>
    </AppLayout>
  );
}