import type React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => (
    <button className="text- cursor-pointer rounded-sm text-background bg-accent px-6 py-2 font-bold text-sm shadow-md transition-colors hover:bg-accent/90">
      {children}
    </button>
  );
