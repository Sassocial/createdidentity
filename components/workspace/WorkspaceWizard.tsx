"use client";

import { useState } from "react";

import WizardStep1 from "./WizardStep1.js";
import WizardStep2 from "./WizardStep2.js";
import WizardStep3 from "./WizardStep3";

import { WorkspaceWizardData } from "../../types/workspaceWizard";

export default function WorkspaceWizard() {
  const [step, setStep] = useState(1);

  const [workspace, setWorkspace] = useState<WorkspaceWizardData>({
    name: "",
    industry: "",

    instagram: "",
    facebook: "",
    tiktok: "",
    linkedin: "",

    website: "",

    audience: "",
    tone: "",

    colours: "",
    competitors: "",
    goals: "",
  });

  function next() {
    setStep((current) => Math.min(current + 1, 3));
  }

  function back() {
    setStep((current) => Math.max(current - 1, 1));
  }

  const props = {
    workspace,
    setWorkspace,
    next,
    back,
  };

  switch (step) {
    case 1:
      return <WizardStep1 {...props} />;

    case 2:
      return <WizardStep2 {...props} />;

    case 3:
      return <WizardStep3 {...props} />;

    default:
      return <WizardStep1 {...props} />;
  }
}