import { ButtonHTMLAttributes } from "react";

export interface ButtonCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export interface ButtonAuthProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "cta"
}