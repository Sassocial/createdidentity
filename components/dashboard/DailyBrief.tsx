import AppCard from "@/components/ui/AppCard";

export default function DailyBrief() {
  return (
    <AppCard>
      <p className="text-xs uppercase tracking-[0.2em] text-[#847B72]">
        Today at a glance
      </p>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span>Campaigns Due</span>
          <strong>2</strong>
        </div>

        <div className="flex justify-between">
          <span>Ideas Captured</span>
          <strong>4</strong>
        </div>

        <div className="flex justify-between">
          <span>Content Scheduled</span>
          <strong>6</strong>
        </div>

        <div className="flex justify-between">
          <span>Algorithm Updates</span>
          <strong>1</strong>
        </div>

      </div>
    </AppCard>
  );
}