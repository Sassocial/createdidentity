type WorkspaceHeroProps = {
  title: string;
  subtitle: string;
};

export default function WorkspaceHero({
  title,
  subtitle,
}: WorkspaceHeroProps) {
  return (
    <div className="rounded-3xl bg-[#F5F1EB] p-8 shadow-sm">
      <p className="text-sm uppercase tracking-[0.2em] text-[#847B72]">
        Workspace
      </p>

      <h1 className="mt-2 text-3xl font-bold text-[#2E2925]">
        {title}
      </h1>

      <p className="mt-3 text-[#847B72]">
        {subtitle}
      </p>
    </div>
  );
}