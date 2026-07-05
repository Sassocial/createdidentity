type Props = {
  role: "user" | "assistant";
  text: string;
};

export default function Message({ role, text }: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-3xl px-5 py-4 ${
          isUser
            ? "bg-[#2E2925] text-white"
            : "bg-[#F5F1EB]"
        }`}
      >
        {text}
      </div>
    </div>
  );
}