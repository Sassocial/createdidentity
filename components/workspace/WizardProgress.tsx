type Props = {
  step: number;
  total: number;
};

export default function WizardProgress({
  step,
  total,
}: Props) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            index < step
              ? "bg-[#5D5047]"
              : "bg-[#DDD3C8]"
          }`}
        />
      ))}
    </div>
  );
}