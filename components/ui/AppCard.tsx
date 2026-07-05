type AppCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AppCard({
  children,
  className = "",
}: AppCardProps) {
  return (
    <div
      className={`
        rounded-[32px]
        bg-[#F8F4EE]
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        ${className}
      `}
      style={{
        boxShadow: `
          -8px -8px 18px rgba(255,255,255,0.9),
          8px 8px 20px rgba(205,195,182,0.55)
        `,
      }}
    >
      {children}
    </div>
  );
}