import IdentityPrompt from "../components/dashboard/IdentityPrompt";\
import AppLayout from "../../components/layout/AppLayout";
import WorkspaceHero from "../../components/workspace/WorkspaceHero";
import WorkspaceStat from "../../components/workspace/WorkspaceStat";
import Button from "../../components/ui/Button";

export default function WorkspacesPage() {
  return (
    <AppLayout
      title="Workspace"
      subtitle="Manage your clients, content and brand settings."
    >
      <WorkspaceHero
        title="Coppid Beech Hotel"
        subtitle="205 luxury bedrooms • Events • Weddings • Dining"
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <WorkspaceStat
          label="Ideas"
          value={18}
        />

        <WorkspaceStat
          label="Tasks"
          value={7}
        />

        <WorkspaceStat
          label="Posts"
          value={42}
        />

        <WorkspaceStat
          label="Scheduled"
          value={12}
        />
      </div>

      <div className="mt-10 rounded-3xl bg-[#F5F1EB] p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#2E2925]">
          Workspace Overview
        </h2>

        <p className="mt-3 text-[#847B72]">
          Everything related to this client lives here. Manage content,
          planner, calendar, analytics and AI settings from one place.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Button>
            Open Content Planner
          </Button>

          <Button>
            Workspace Settings
          </Button>
        </div>
      </div>

      <div className="mt-10 rounded-3xl bg-[#F5F1EB] p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#2E2925]">
          Identity AI
        </h2>

        <p className="mt-3 text-[#847B72]">
          Identity understands this workspace's tone of voice, audience and
          brand guidelines to generate consistent content.
        </p>

        <div className="mt-6">
          <Button>
            Open Identity
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}