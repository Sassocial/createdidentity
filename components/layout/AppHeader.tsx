type AppHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function AppHeader({
  title,
  subtitle,
}: AppHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold tracking-tight text-[#2E2925]">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 text-[#847B72]">
          {subtitle}
        </p>
      )}
    </header>
  );
}