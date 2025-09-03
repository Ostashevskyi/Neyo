import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <input
          ref={ref}
          type={type}
          data-slot="input"
          aria-invalid={!!error}
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-gray flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aria-invalid:text-white aria-invalid:placeholder:text-white",
            "py-3 px-4 h-11 rounded-xl border-input-base text-input-base",
            "focus:text-white focus:border-white",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-destructive text-sm">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"

export { Input };
