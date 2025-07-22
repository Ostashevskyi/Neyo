import { ButtonHTMLAttributes } from "react";

export interface ButtonCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export interface ButtonAuthProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "cta"
}