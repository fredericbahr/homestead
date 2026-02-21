import { cn } from "@lib/utils";
import { format } from "date-fns";
import  { de } from "date-fns/locale";

type DateRangeFormatShortProps = {
  startDate: string;
  endDate: string;
  className?: string;
};

export const DateRangeFormatShort = ({
  startDate,
  endDate,
  className,
}: DateRangeFormatShortProps) => (
    <span
      className={cn("text-balance font-normal text-xs md:text-lg", className)}
    >
      {format(new Date(startDate), "MMM yy", {
        locale: de,
      })}{" "}
      -{" "}
      {endDate === "present"
        ? "Heute"
        : format(new Date(endDate), "MMM yy", {
            locale: de,
          })}
    </span>
  );
