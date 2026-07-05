"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Sparkles,
  ClipboardList,
  Lightbulb,
  CalendarDays,
  Search,
  Building2,
} from "lucide-react";

const links = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/identity",
    label: "Identity",
    icon: Sparkles,
  },
  {
    href: "/planner",
    label: "Planner",
    icon: ClipboardList,
  },
  {
    href: "/capture",
    label: "Capture",
    icon: Lightbulb,
  },
  {
    href: "/calendar",
    label: "Calendar",
    icon: CalendarDays,
  },
  {
    href: "/search",
    label: "Search",
    icon: Search,
  },
];

const workspaces = [
  "Coppid Beech Hotel",
  "Chatham Snowsports",
  "Peak Fitness",
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-80 flex-col border-r border-[#E7DED3] bg-[#FBF9F6]">
      {/* Logo */}
      <div className="border-b border-[#E7DED3] px-8 py-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#2D2926] shadow-md">
            <span className="text-xl font-bold text-white">CO</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#2D2926]">
              CreatedOS
            </h1>

            <p className="text-sm text-[#857D74]">
              Operating System for Creators
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-8">
        <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B28A57]">
          Navigation
        </p>

        <div className="space-y-2">
          {links.map((link) => {
            const active = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 rounded-2xl px-4 py-4 transition-all ${
                  active
                    ? "bg-white font-semibold text-[#2D2926] shadow-sm"
                    : "text-[#857D74] hover:bg-white hover:shadow-sm"
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={2}
                  className={active ? "text-[#B28A57]" : "text-[#857D74]"}
                />

                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Workspaces */}
        <div className="mt-10">
          <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B28A57]">
            Workspaces
          </p>

          <div className="space-y-2">
            {workspaces.map((workspace) => (
              <button
                key={workspace}
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-[#857D74] transition hover:bg-white hover:shadow-sm"
              >
                <Building2
                  size={18}
                  className="text-[#B28A57]"
                />

                <span>{workspace}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* User */}
      <div className="border-t border-[#E7DED3] p-6">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="font-semibold text-[#2D2926]">
            Reid Baldwin
          </p>

          <p className="mt-1 text-sm text-[#857D74]">
            CreatedOS Pro
          </p>
        </div>
      </div>
    </aside>
  );
}