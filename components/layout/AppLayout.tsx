import { ReactNode } from "react";
import { Bell, Search } from "lucide-react";

import Sidebar from "./Sidebar";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function AppLayout({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-[#F4EFE8] lg:flex">
      {/* Sidebar */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-8 py-8">

          {/* Top Bar */}
          <div className="mb-8 flex items-center justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B28A57]">
                CREATEDOS
              </p>

              <h1 className="mt-2 text-5xl font-bold tracking-tight text-[#2D2926]">
                {title}
              </h1>

              {subtitle && (
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#857D74]">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4">

              <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCFAF7] shadow-[5px_5px_12px_rgba(205,195,182,0.35),-5px_-5px_12px_rgba(255,255,255,0.8)] transition hover:-translate-y-0.5">
                <Search
                  size={20}
                  className="text-[#857D74]"
                />
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCFAF7] shadow-[5px_5px_12px_rgba(205,195,182,0.35),-5px_-5px_12px_rgba(255,255,255,0.8)] transition hover:-translate-y-0.5">
                <Bell
                  size={20}
                  className="text-[#857D74]"
                />
              </button>

            </div>
          </div>

          {/* Page Content */}
          <div className="space-y-8">
            {children}
          </div>

        </div>
      </main>
    </div>
  );
}