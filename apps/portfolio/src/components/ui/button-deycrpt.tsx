import { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import { cn } from "@lib/utils";

type DencryptButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

export const DencryptButton = ({
  label,
  className,
  onClick,
}: DencryptButtonProps) => {
  const [dencryptText, dencrypt] = useDencrypt(label);

  useEffect(() => {
    dencrypt(label);
  }, [label, dencrypt]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => dencrypt(label)}
      onMouseLeave={() => dencrypt(label)}
      className={cn(
        // Base Styles
        "group relative overflow-hidden px-6 py-2 md:px-8 md:py-3 font-medium text-lg transition-colors duration-300",
        "bg-primary text-primary-foreground hover:cursor-pointer hover:text-white hover:dark:text-black",

        // BEFORE Element: Bottom-Left Corner
        "before:-bottom-2.5 before:-left-2.5 before:absolute before:z-30 before:content-['']",
        "before:h-5 before:w-5 before:rotate-45 before:bg-background",

        // AFTER Element: Top-Right Corner
        "after:-top-2.5 after:-right-2.5 after:absolute after:z-30 after:content-['']",
        "after:h-5 after:w-5 after:rotate-45 after:bg-background",

        className,
      )}
    >
      <span className="relative z-20">{dencryptText}</span>

      {/* The Slide-in Background Effect */}
      <div
        className="-left-full absolute inset-0 z-10 h-full w-full text-white bg-zinc-800 transition-all duration-300 group-hover:left-0 dark:bg-white"
        aria-hidden="true"
      />
    </button>
  );
};
