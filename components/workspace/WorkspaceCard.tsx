import Link from "next/link";
import { Workspace } from "../../types/workspace";

type Props = {
  workspace: Workspace;
};

export default function WorkspaceCard({ workspace }: Props) {
  return (
    <Link
      href={`/workspaces/${workspace.id}`}
      className="block w-full rounded-[28px] bg-[#F5F1EB] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold"
            style={{ background: workspace.colour }}
          >
            {workspace.initials}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2925]">
              {workspace.name}
            </h2>

            <p className="text-sm text-[#847B72]">
              {workspace.status}
            </p>

            <p className="mt-1 text-xs uppercase tracking-wider text-[#A39A91]">
              {workspace.industry}
            </p>
          </div>
        </div>

        <div className="text-right">
          <h2 className="text-3xl font-bold text-[#2E2925]">
            {workspace.tasks}
          </h2>

          <p className="text-xs uppercase tracking-widest text-[#847B72]">
            Tasks
          </p>
        </div>
      </div>
    </Link>
  );
}