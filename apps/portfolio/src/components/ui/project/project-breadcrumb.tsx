import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@components/ui/breadcrumb";
import type { LanguageProp } from "@i18n/ui";
import { useTranslations } from "@i18n/utils";

export interface ProjectBreadcrumbProps extends LanguageProp {
  projectTitle: string;
}

export function ProjectBreadcrumb({
  projectTitle,
  lang = "de",
}: ProjectBreadcrumbProps) {
  const t = useTranslations(lang);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="..">
            {t("projects.breadcrumb.home")}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{projectTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
