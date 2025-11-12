import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg",
    secondary:
      "bg-primary text-white hover:bg-primary/80 shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
