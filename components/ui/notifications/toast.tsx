import { FC } from "react";
import { Toaster, ToasterProps } from "sonner";

export const Toast: FC<ToasterProps> = ({ ...props }) => {
  return (
    <Toaster
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};
