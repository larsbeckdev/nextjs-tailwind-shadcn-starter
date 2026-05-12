"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function useKeyboardThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      // Check if user is typing in an input
      const target = event.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.contentEditable === "true";

      // Only toggle on 'D' key when not typing
      if ((event.key === "d" || event.key === "D") && !isInput) {
        event.preventDefault();
        setTheme(theme === "light" ? "dark" : "light");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [theme, setTheme, mounted]);
}
