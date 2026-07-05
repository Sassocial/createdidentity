type CardProps = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
      rounded-3xl
      bg-[#F5F1EB]
      p-6
      shadow-sm
      "
    >
      {children}
    </div>
  );
}