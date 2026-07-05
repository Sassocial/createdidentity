import { workspaces } from "../../data/workspaces";
import AppLayout from "../../components/layout/AppLayout";
import AppCard from "../../components/ui/AppCard";
type Props = {
  params: {
    id: string;
  };
};

export default function WorkspacePage({ params }: Props) {
  const workspace = workspaces.find(
    (w) => w.id === params.id
  );

  if (!workspace) {
    return (
      <AppLayout title="Not Found">
        <p>Workspace not found.</p>
      </AppLayout>
    );
  }

  return (
    <AppLayout
      title={workspace.name}
      subtitle={workspace.status}
    >
      <AppCard>
        <h2 className="text-xl font-semibold">
          Today's Overview
        </h2>

        <div className="mt-5 space-y-3">
          <p>📅 Upcoming campaigns</p>
          <p>📸 Recent captures</p>
          <p>📊 Analytics snapshot</p>
          <p>✅ Tasks to complete</p>
        </div>
      </AppCard>
    </AppLayout>
  );
}