"use client";

import { useEffect, useState } from "react";

export default function WelcomeBanner() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <div className="rounded-3xl bg-gradient-to-r from-[#2E2925] to-[#4A433D] p-8 text-white shadow-lg">
      <p className="text-sm uppercase tracking-[0.2em] opacity-80">
        Created OS
      </p>

      <h1 className="mt-3 text-4xl font-bold">
        {greeting}, Reid 👋
      </h1>

      <p className="mt-3 text-[#E7DED4]">
        Let's create something great today.
      </p>
    </div>
  );
}