"use client";

import { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <AppLayout
      title="Search"
      subtitle="Find anything instantly."
    >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts, ideas, workspaces..."
        className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
      />

      <div className="mt-8 rounded-3xl bg-[#F5F1EB] p-6 shadow-sm">
        <p className="text-[#847B72]">
          Start typing to search...
        </p>
      </div>
    </AppLayout>
  );
}