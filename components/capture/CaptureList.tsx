import AppCard from "../ui/AppCard";
import { captures } from "../../data/captures";

export default function CaptureList() {
  return (
    <div className="space-y-4">
      {captures.map((capture) => (
        <AppCard key={capture.id}>
          <h3 className="font-semibold">
            {capture.text}
          </h3>

          <p className="mt-2 text-sm text-[#847B72]">
            {capture.workspace}
          </p>

          <p className="text-xs text-[#A39A91]">
            {capture.createdAt}
          </p>
        </AppCard>
      ))}
    </div>
  );
}