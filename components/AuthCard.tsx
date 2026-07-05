type AuthCardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <div className="rounded-3xl bg-[#F5F1EB] p-8 shadow-sm">

      <h1 className="text-3xl font-bold">
        {title}
      </h1>

      <p className="mt-2 text-[#847B72]">
        {subtitle}
      </p>

      <div className="mt-8">
        {children}
      </div>

    </div>
  );
}