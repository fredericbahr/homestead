import { type Project, projects } from "@lib/projects";
import { ProjectTile } from "./project-tile.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs.tsx";
import type { LanguageProp } from "@i18n/ui.ts";
import { useTranslations } from "@i18n/utils.ts";

interface ProjctTabsProps extends LanguageProp {}

export const ProjectTabs = ({ lang = "de" }: ProjctTabsProps) => {
  const t = useTranslations(lang);

  return (
    <Tabs className="w-full [counter-reset:projects]" defaultValue="selection">
      <TabsList className="mx-auto w-100" variant="line">
        <TabsTrigger asChild value="selection2">
          <span />
        </TabsTrigger>
        <TabsTrigger value="selection">
          {t("projects.tab").toUpperCase()}
        </TabsTrigger>
        <TabsTrigger asChild value="selection3">
          <span />
        </TabsTrigger>
        <TabsTrigger asChild value="selection4">
          <span />
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-8" value="selection">
        <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-4 lg:grid-rows-2">
          {projects.map((project: Project | null, index: number) => (
            <div
              className="[counter-increment:projects]"
              key={project?.title ?? `placeholder-${index}`}
            >
              {project ? (
                <ProjectTile
                  backgroundType={project.backgroundType}
                  links={project.links}
                  title={project.title}
                  url={project.url}
                  lang={lang}
                />
              ) : (
                <div className="project-tile-placeholder hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
