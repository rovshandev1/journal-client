import {ButtonHTMLAttributes} from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
}

export default function Button({
                           children,
                           variant = "primary",
                           className,
                           ...props
                       }: ButtonProps) {
    return (
        <button
            {...props}
            className={clsx(
                "px-4 py-2 rounded-xl font-medium transition-all",
                variant === "primary"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "border border-green-600 text-green-600 hover:bg-green-50",
                className
            )}
        >
            {children}
        </button>
    );
}
