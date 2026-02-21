import { cn } from "@lib/utils";
import { format } from "date-fns";
import  { de } from "date-fns/locale";

type DateRangeFormatLongProps = {
  startDate: string;
  endDate: string;
  className?: string;
};

export const DateRangeFormatLong = ({
  startDate,
  endDate,
  className,
}: DateRangeFormatLongProps) => (
    <span
      className={cn("text-balance font-normal text-sm md:text-lg", className)}
    >
      {format(new Date(startDate), "MMM yyyy", {
        locale: de,
      })}{" "}
      -{" "}
      {endDate === "present"
        ? "Heute"
        : format(new Date(endDate), "MMM yyyy", {
            locale: de,
          })}
    </span>
  );
