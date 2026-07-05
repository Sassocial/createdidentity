"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: "⌂" },
  { href: "/calendar", label: "Calendar", icon: "◫" },
  { href: "/brain", label: "Brain", icon: "✦" },
  { href: "/news", label: "News", icon: "◎" },
  { href: "/settings", label: "Settings", icon: "☰" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-3xl bg-[#F5F1EB]/95 backdrop-blur shadow-xl border border-[#DDD3C8]">
      <div className="flex justify-around py-3">

        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-1"
            >
              <span
                className={`text-xl ${
                  active ? "text-[#5D5047]" : "text-[#A39A91]"
                }`}
              >
                {link.icon}
              </span>

              <span
                className={`text-xs ${
                  active ? "text-[#2E2925] font-semibold" : "text-[#847B72]"
                }`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}