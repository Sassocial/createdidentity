"use client";

import { Dispatch, SetStateAction } from "react";

import Button from "../ui/Button";
import WizardProgress from "./WizardProgress";

import { WorkspaceWizardData } from "../../types/workspaceWizard";

type Props = {
  workspace: WorkspaceWizardData;
  setWorkspace: Dispatch<SetStateAction<WorkspaceWizardData>>;
  next: () => void;
  back: () => void;
};

export default function WizardStep3({
  workspace,
  setWorkspace,
  next,
  back,
}: Props) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#847B72]">
          Step 3 of 5
        </p>

        <div className="mt-4">
          <WizardProgress step={3} total={5} />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-[#2E2925]">
          Add your social links
        </h2>

        <p className="mt-2 text-[#847B72]">
          These help Identity understand where your content lives.
        </p>
      </div>

      <div className="space-y-4">
        <input
          value={workspace.instagram}
          onChange={(e) =>
            setWorkspace((current) => ({
              ...current,
              instagram: e.target.value,
            }))
          }
          placeholder="Instagram username"
          className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none focus:border-[#5D5047]"
        />

        <input
          value={workspace.facebook}
          onChange={(e) =>
            setWorkspace((current) => ({
              ...current,
              facebook: e.target.value,
            }))
          }
          placeholder="Facebook page"
          className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none focus:border-[#5D5047]"
        />

        <input
          value={workspace.tiktok}
          onChange={(e) =>
            setWorkspace((current) => ({
              ...current,
              tiktok: e.target.value,
            }))
          }
          placeholder="TikTok username"
          className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none focus:border-[#5D5047]"
        />

        <input
          value={workspace.website}
          onChange={(e) =>
            setWorkspace((current) => ({
              ...current,
              website: e.target.value,
            }))
          }
          placeholder="Website URL"
          className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none focus:border-[#5D5047]"
        />
      </div>

      <div className="flex justify-between gap-4">
        <Button onClick={back}>← Back</Button>
        <Button onClick={next}>Continue →</Button>
      </div>
    </div>
  );
}