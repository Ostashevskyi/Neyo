"use client";

import React, { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

import { Input, InputProps } from "./Input";

interface PasswordInputProps extends InputProps {
  error?: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ error, className, ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="relative w-full">
          <Input
            ref={ref}
            {...props}
            error={error}
            type={show ? "text" : "password"}
            className={cn("pr-10", className)}
          />
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
            tabIndex={-1}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
