type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-4xl font-bold text-[#2D2926]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-[#857D74]">
          {subtitle}
        </p>
      )}
    </div>
  );
}