export default function Logo() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#2D2926] shadow-lg">
        <span className="font-heading text-2xl font-bold tracking-tight text-white">
          CO
        </span>
      </div>

      <div>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-[#2D2926]">
          CreatedOS
        </h1>

        <p className="mt-1 text-sm text-[#857D74]">
          The operating system for modern creators.
        </p>
      </div>
    </div>
  );
}