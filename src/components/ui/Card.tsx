import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = "", hover = false }: CardProps) => {
  return (
    <div
      className={`rounded-xl p-6 shadow-sm ${
        hover
          ? "hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          : ""
      } ${className || "bg-white"}`}
    >
      {children}
    </div>
  );
};

export default Card;
