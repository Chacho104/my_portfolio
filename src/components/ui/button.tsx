import { forwardRef } from "react";

import { cn } from "@/app/lib/util";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          `w-auto bg-transparent border-2 border-brand-200 rounded-full px-4 py-2 text-brand-200 hover:bg-brand-200 hover:text-white ${
            disabled ? "cursor-not-allowed" : ""
          } ${disabled ? "opacity-50" : ""} ${
            disabled ? "pointer-events-none" : ""
          } transition`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
