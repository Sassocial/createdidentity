import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        rounded-2xl
        px-6
        py-4
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        ${
          disabled
            ? "cursor-not-allowed bg-[#D8CFC4]"
            : "bg-[#B28A57] hover:bg-[#9D7746] hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
        }
      `}
    >
      {children}
    </button>
  );
}