import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@components/ui/collapsable/collapsible";
import { Separator } from "@components/ui/separator";
import type { IExperience } from "@lib/experience";
import { useState } from "react";
import { List } from "../list";
import { DateRangeFormatLong } from "../date-range-format/date-range-format-long";
import { DateRangeFormatShort } from "../date-range-format/date-range-format-short";
import type { LanguageProp } from "@i18n/ui";
import { useTranslations } from "@i18n/utils";

interface ExperienceCollapsibleProps extends LanguageProp {
  experience: IExperience;
}

export default function ExperienceCollapsible({
  experience,
  lang = "de",
}: ExperienceCollapsibleProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations(lang);

  return (
    <Collapsible
      className="w-full border border-black dark:border-white"
      onOpenChange={setOpen}
      open={open}
    >
      <CollapsibleTrigger asChild>
        <Button
          className="box-border w-full rounded-none px-2 py-4 hover:cursor-pointer md:px-4 md:py-6"
          variant="ghost"
        >
          <div className="flex w-full items-center">
            <div className="flex flex-1 items-center gap-1 self-center font-normal text-xs md:gap-2 md:text-lg">
              <span className="text-balance">{experience.title}</span>
              <span className="self-center text-primary">@</span>
              <a
                className="text-balance decoration-primary hover:text-primary"
                href={experience.companyUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {experience.company}
              </a>

              <DateRangeFormatLong
                className="hidden md:block"
                startDate={experience.startDate}
                endDate={experience.endDate}
              />
              <DateRangeFormatShort
                className="md:hidden"
                startDate={experience.startDate}
                endDate={experience.endDate}
              />
            </div>

            {open ? (
              <i className="ph ph-caret-up ml-1 md:ml-2" />
            ) : (
              <i className="ph ph-caret-down ml-1 md:ml-2" />
            )}
          </div>
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className="px-4 py-4 text-sm md:text-md">
        <Separator className="mb-4 hidden md:block" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex">
              <i className="ph ph-map-pin-line mr-1 flex flex-col justify-center" />
              <span>{experience.location}</span>
            </div>
            <div className="flex">
              <i className="ph ph-link mr-1 flex flex-col justify-center" />
              <a
                className="decoration-primary hover:text-primary"
                href={experience.companyUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {experience.companyUrl}
              </a>
            </div>
          </div>

          <List icon items={experience.description} />

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <Badge
                className="bg-gray-200 dark:bg-gray-600"
                key={skill}
                variant="secondary"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
