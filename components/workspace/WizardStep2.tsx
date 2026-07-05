"use client";

import { Dispatch, SetStateAction } from "react";
import Button from "../ui/Button";
import { WorkspaceWizardData } from "../../types/workspaceWizard";

type Props = {
  workspace: WorkspaceWizardData;
  setWorkspace: Dispatch<SetStateAction<WorkspaceWizardData>>;
  next: () => void;
  back: () => void;
};

const industries = [
  { emoji: "🏨", name: "Hotel" },
  { emoji: "🍽️", name: "Restaurant" },
  { emoji: "🎿", name: "Snowsports" },
  { emoji: "💪", name: "Gym" },
  { emoji: "🏡", name: "Estate Agent" },
  { emoji: "🛍️", name: "Retail" },
  { emoji: "🎉", name: "Events" },
  { emoji: "✨", name: "Other" },
];

export default function WizardStep2({
  workspace,
  setWorkspace,
  next,
  back,
}: Props) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#847B72]">
          Step 2 of 5
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#2E2925]">
          What industry are you in?
        </h2>

        <p className="mt-2 text-[#847B72]">
          Choose the category that best matches your business.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {industries.map((industry) => (
          <button
            key={industry.name}
            onClick={() =>
              setWorkspace((current) => ({
                ...current,
                industry: industry.name,
              }))
            }
            className={`rounded-2xl border p-6 text-left transition ${
              workspace.industry === industry.name
                ? "border-[#5D5047] bg-[#F5F1EB]"
                : "border-[#DDD3C8] hover:border-[#B8A998]"
            }`}
          >
            <div className="text-3xl">{industry.emoji}</div>
            <p className="mt-3 font-semibold">{industry.name}</p>
          </button>
        ))}
      </div>

      <div className="flex justify-between gap-4">
        <Button onClick={back}>
          ← Back
        </Button>

        <Button
          onClick={next}
          disabled={!workspace.industry}
        >
          Continue →
        </Button>
      </div>
    </div>
  );
}