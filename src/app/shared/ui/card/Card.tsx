import {ReactNode} from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({children, className = ""}: CardProps) {
    return (
        <div className={`rounded-2xl shadow-md bg-white p-4 ${className}`}>
            {children}
        </div>
    );
}

export function CardContent({children}: { children: ReactNode }) {
    return <div className="space-y-3">{children}</div>;
}
