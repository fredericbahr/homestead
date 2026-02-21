import { useState, useEffect } from "react";

import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import type { LanguageProp } from "@i18n/ui";
import { useTranslations } from "@i18n/utils";

export type Theme = "light" | "dark" | "system";

export interface ModeToggleProps extends LanguageProp {}

export function ModeToggle({ lang }: ModeToggleProps) {
  const t = useTranslations(lang ?? "de");
  const [theme, setThemeState] = useState<"light" | "dark" | "system">("light");

  useEffect(() => {
    const isDarkMode: boolean =
      document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const prefersDark: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const isDark: boolean =
      theme === "dark" || (theme === "system" && prefersDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="hover:cursor-pointer">
          <i className="ph ph-sun dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0" />
          <i className="ph ph-moon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Design auswählen</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-3xs dark:bg-gray-800">
        <DropdownMenuCheckboxItem
          className="hover:cursor-pointer hover:dark:bg-gray-700"
          checked={theme === "light"}
          onClick={() => setThemeState("light")}
        >
          <i className="ph ph-sun" />
          {t("theme.light")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="hover:cursor-pointer hover:dark:bg-gray-700"
          checked={theme === "dark"}
          onClick={() => setThemeState("dark")}
        >
          <i className="ph ph-moon" />
          {t("theme.dark")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="hover:cursor-pointer hover:dark:bg-gray-700"
          checked={theme === "system"}
          onClick={() => setThemeState("system")}
        >
          <i className="ph ph-laptop" />
          {t("theme.system")}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
