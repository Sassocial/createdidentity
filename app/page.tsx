"use client";

import { useEffect, useState } from "react";

import AppLayout from "../components/layout/AppLayout";

import IdentityPrompt from "../components/dashboard/IdentityPrompt";
import TodaysFocus from "../components/dashboard/TodaysFocus";

import Button from "../components/ui/Button";

import WorkspaceCard from "../components/workspace/WorkspaceCard";
import CreateWorkspaceModal from "../components/workspace/CreateWorkspaceModal";

import { getWorkspaces } from "../lib/workspaces";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkspaces() {
      const data = await getWorkspaces();

      setWorkspaces(data);
      setLoading(false);
    }

    loadWorkspaces();
  }, []);

  return (
    <>
      <AppLayout
        title="Good Morning, Reid 👋"
        subtitle="Let's create something brilliant today."
      >
        {/* Identity */}
        <IdentityPrompt />

        {/* Focus + Performance */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <TodaysFocus />

          <div className="rounded-[32px] bg-[#F8F4EE] p-8 shadow-[8px_8px_20px_rgba(205,195,182,0.45),-8px_-8px_20px_rgba(255,255,255,0.85)]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B28A57]">
              Performance
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#2D2926]">
              This Week
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[#857D74]">Ideas Created</span>
                <span className="text-2xl font-bold text-[#2D2926]">
                  18
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#857D74]">Posts Scheduled</span>
                <span className="text-2xl font-bold text-[#2D2926]">
                  12
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#857D74]">Tasks Completed</span>
                <span className="text-2xl font-bold text-[#2D2926]">
                  7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Workspaces */}
        <div className="mt-14 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#2D2926]">
              Your Workspaces
            </h2>

            <p className="mt-2 text-[#857D74]">
              Jump back into your latest clients.
            </p>
          </div>

          <div className="w-60">
            <Button onClick={() => setShowModal(true)}>
              + Create Workspace
            </Button>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {loading ? (
            <div className="rounded-[32px] bg-[#F8F4EE] p-10 text-center shadow-sm">
              Loading workspaces...
            </div>
          ) : workspaces.length === 0 ? (
            <div className="rounded-[32px] bg-[#F8F4EE] p-10 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-[#2D2926]">
                No workspaces yet
              </h3>

              <p className="mt-3 text-[#857D74]">
                Create your first workspace and let Identity learn your brand.
              </p>

              <div className="mx-auto mt-8 max-w-xs">
                <Button onClick={() => setShowModal(true)}>
                  Create Your First Workspace
                </Button>
              </div>
            </div>
          ) : (
            workspaces.map((workspace) => (
              <WorkspaceCard
                key={workspace.id}
                workspace={workspace}
              />
            ))
          )}
        </div>
      </AppLayout>

      {showModal && (
        <CreateWorkspaceModal
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}