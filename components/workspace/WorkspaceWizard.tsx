"use client";

import { useState } from "react";

import WizardStep1 from "./WizardStep1";
import WizardStep2 from "./WizardStep2";
import WizardStep3 from "./WizardStep3";
import WizardStep4 from "./WizardStep4";
import WizardStep5 from "./WizardStep5";

export default function WorkspaceWizard() {
  const [step, setStep] = useState(1);

  const [workspace, setWorkspace] = useState({
    name: "",
    industry: "",
    instagram: "",
    website: "",
    audience: "",
    tone: "",
  });

  function next() {
    setStep((current) => Math.min(current + 1, 5));
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
    case 4:
      return <WizardStep4 {...props} />;
    case 5:
      return <WizardStep5 {...props} />;
    default:
      return null;
  }
}