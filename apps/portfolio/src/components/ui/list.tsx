import type React from "react";

type ListProps<T extends React.ElementType = "ul"> = {
  items: React.ReactNode[];
  as?: T;
  icon?: boolean;
  className?: string;
  itemClassName?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

export function List<T extends React.ElementType = "ul">({
  items,
  as,
  icon,
  className = "",
  itemClassName = "",
  ...props
}: ListProps<T>) {
  const Component = as || "ul";

  const isOrdered = Component === "ol";

  return (
    <Component className={`ml-2 md:ml-4 space-y-2 text-md ${icon || isOrdered ? "" : "list-disc"} ${className}`} {...props}>
      {items.map((item, index) => (
        <li className={`${icon ? "flex items-start gap-2" : "ml-4"} ${itemClassName}`} key={index}>
          {icon && (
            <span className="mt-1 shrink-0 text-primary">
              <i className="ph ph-terminal" />
            </span>
          )}
          <span>{item}</span>
        </li>
      ))}
    </Component>
  );
}
