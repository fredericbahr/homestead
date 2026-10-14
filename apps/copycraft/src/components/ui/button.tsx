import type React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  title?: string;
}

const classes =
  "cursor-pointer rounded-sm bg-accent px-6 py-2 font-bold text-sm text-background shadow-md transition-colors hover:bg-accent/90";

export const Button = ({ children, href, title, className = "" }: ButtonProps) => {
  if (href) {
    return (
      <a className={`${classes} ${className}`} href={href} title={title}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${classes} ${className}`} title={title} type="button">
      {children}
    </button>
  );
};
