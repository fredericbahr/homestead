import type React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  title?: string;
  className?: string;
};

const classes =
  "cursor-pointer rounded-sm bg-accent px-6 py-2 font-bold text-sm text-background shadow-md transition-colors hover:bg-accent/90";

export const Button = ({ children, href, title, className = "" }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} title={title} className={`${classes} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button title={title} className={`${classes} ${className}`}>
      {children}
    </button>
  );
};
