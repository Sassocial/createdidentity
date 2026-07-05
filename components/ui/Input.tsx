type Props = {
  placeholder: string;
  type?: string;
};

export default function Input({
  placeholder,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
      w-full
      rounded-xl
      border
      border-[#DDD3C8]
      bg-white
      p-4
      outline-none
      focus:border-[#5D5047]
      "
    />
  );
}