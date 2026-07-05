"use client";

import { Dispatch, SetStateAction } from "react";

import Button from "../ui/Button";
import WizardProgress from "./WizardProgress";

import { WorkspaceWizardData } from "../../types/workspaceWizard";

type Props = {
  workspace: WorkspaceWizardData;
  setWorkspace: Dispatch<SetStateAction<WorkspaceWizardData>>;
  next: () => void;
};

export default function WizardStep1({
  workspace,
  setWorkspace,
  next,
}: Props) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#847B72]">
          Step 1 of 5
        </p>

        <div className="mt-4">
          <WizardProgress
            step={1}
            total={5}
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-[#2E2925]">
          Tell us about your business
        </h2>

        <p className="mt-2 text-[#847B72]">
          Let's start with the basics.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#2E2925]">
          Business Name
        </label>

        <input
          value={workspace.name}
          onChange={(e) =>
            setWorkspace((current) => ({
              ...current,
              name: e.target.value,
            }))
          }
          placeholder="e.g. Coppid Beech Hotel"
          className="w-full rounded-2xl border border-[#DDD3C8] bg-[#F5F1EB] p-4 outline-none transition focus:border-[#5D5047]"
        />
      </div>

      <div className="flex justify-end">
        <Button
          onClick={next}
          disabled={!workspace.name.trim()}
        >
          Continue →
        </Button>
      </div>
    </div>
  );
}