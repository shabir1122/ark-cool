'use client';

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // this must exist!

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
      },
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
