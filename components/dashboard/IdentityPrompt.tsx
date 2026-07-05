"use client";

import { Sparkles, Send } from "lucide-react";

export default function IdentityPrompt() {
  return (
    <div className="rounded-[32px] bg-[#F8F4EE] p-8 shadow-[8px_8px_20px_rgba(205,195,182,0.4),-8px_-8px_20px_rgba(255,255,255,0.8)]">
      <div className="flex items-center gap-3">
        <Sparkles
          size={22}
          className="text-[#B28A57]"
        />

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B28A57]">
          Identity
        </p>
      </div>

      <h2 className="mt-5 text-4xl font-bold text-[#2D2926]">
        What would you like to create today?
      </h2>

      <p className="mt-3 max-w-2xl text-[#857D74]">
        Ask Identity to write captions, build campaigns, generate ideas,
        create content plans or help manage your clients.
      </p>

      <div className="mt-8 flex gap-3">
        <input
          placeholder="Ask Identity anything..."
          className="flex-1 rounded-2xl border border-[#E7DED3] bg-white px-5 py-4 outline-none focus:border-[#B28A57]"
        />

        <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B28A57] text-white transition hover:bg-[#9D7746]">
          <Send size={20} />
        </button>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "Generate Caption",
          "Plan This Week",
          "Create Campaign",
          "Reel Ideas",
        ].map((action) => (
          <button
            key={action}
            className="rounded-2xl border border-[#E7DED3] bg-white px-5 py-3 text-sm font-medium text-[#433D36] transition hover:border-[#B28A57] hover:shadow-sm"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}