"use client";

import AppLayout from "../../../components/layout/AppLayout";
import Button from "../../../components/ui/Button";

export default function WorkspaceSettingsPage() {
  return (
    <AppLayout
      title="Workspace Settings"
      subtitle="Manage your brand profile."
    >
      <div className="space-y-6">
        <input
          placeholder="Business name"
          className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
        />

        <input
          placeholder="Industry (e.g. Hotel, Fitness, Snowsports)"
          className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
        />

        <textarea
          placeholder="Describe your brand tone (e.g. Luxury, welcoming, premium)"
          className="min-h-[120px] w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
        />

        <textarea
          placeholder="Describe your target audience"
          className="min-h-[120px] w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
        />

        <input
          placeholder="Instagram username"
          className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
        />

        <input
          placeholder="Website URL"
          className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
        />

        <textarea
          placeholder="Favourite hashtags (comma separated)"
          className="min-h-[100px] w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
        />

        <textarea
          placeholder="AI instructions (e.g. Always write in a luxury, welcoming tone. Never use emojis. Keep captions under 150 words.)"
          className="min-h-[140px] w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none"
        />

        <Button>
          Save Workspace
        </Button>
      </div>
    </AppLayout>
  );
}