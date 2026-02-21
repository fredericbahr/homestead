import { cn } from "@lib/utils";
import { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

export type DecryptProps = {
  keywords?: string[];
  className?: string;
};

const CYCLE_TIME = 4000;

const DEFAULT_KEYWORDS = [
  "Frederic Bahr",
  "Software Developer",
  "Web Enthusiast",
];

export function Deycrpt({
  className = "",
  keywords = DEFAULT_KEYWORDS,
}: DecryptProps) {
  const [dencryptText, dencrypt] = useDencrypt("Frederic Bahr");

  useEffect(() => {
    let index = 1;

    const action = setInterval(() => {
      dencrypt(keywords[index]);

      index = index === keywords.length - 1 ? 0 : index + 1;
    }, CYCLE_TIME);

    return () => clearInterval(action);
  }, [dencrypt, keywords]);

  return <span className={cn(className)}>{dencryptText}</span>;
}
