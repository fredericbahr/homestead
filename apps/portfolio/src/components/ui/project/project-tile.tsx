import type { LanguageProp } from "@i18n/ui";
import { useTranslations } from "@i18n/utils";
import clsx from "clsx";
import type React from "react";

export type ProjectBackgroundType = "none" | "lines" | "contour";

export type ProjectLinks = {
  github?: string;
  website?: string;
};

interface ProjectTileProps
  extends LanguageProp, Omit<React.HTMLAttributes<HTMLDivElement>, "lang"> {
  title?: string;
  url?: string;
  backgroundType?: ProjectBackgroundType;
  links?: ProjectLinks;
}

const backgroundClass = {
  none: "",
  lines: "bg-lines",
  contour: "bg-contour",
};

export const ProjectTile = ({
  title,
  url,
  backgroundType = "none",
  links,
  lang = "de",
  className,
  ...props
}: ProjectTileProps) => {
  const t = useTranslations(lang);

  return (
    <div
      className={clsx(
        "group relative flex min-h-48 min-w-40 cursor-pointer items-center justify-start border-2 border-gray-300 px-6 py-2 transition-all duration-300 ease-in-out md:min-h-64 lg:justify-center dark:border-gray-600",
        "hover:z-10 hover:scale-105 hover:border-primary hover:dark:border-primary",
        "bg-white dark:bg-gray-800",
        backgroundClass[backgroundType],
        className,
      )}
      {...props}
    >
      <div className="flex w-full flex-col">
        {title && (
          <div className="flex w-full flex-col items-start">
            <a href={url} className="after:absolute after:inset-0 after:z-0">
              <span className="project-counter text-gray-500 text-sm before:block before:text-gray-500 before:content-[counter(projects,decimal-leading-zero)_'.'] group-hover:before:text-primary" />

              <h3 className="wrap-break-word font-semibold text-black/80 text-xl md:text-2xl lg:text-3xl dark:text-white/80">
                {title}
              </h3>
            </a>
          </div>
        )}

        {/* Links */}
        <div className="project-links relative flex gap-2 group-hover:flex lg:hidden">
          {links?.website && (
            <a
              className="rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-gray-700"
              href={links.website}
              target="_blank"
              title={t("project.tooltip.website")}
            >
              <i className="ph ph-link" />
            </a>
          )}

          {links?.github && (
            <a
              className="rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-gray-700"
              href={links.github}
              target="_blank"
              title={t("project.tooltip.github")}
            >
              <i className="ph ph-github-logo" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
