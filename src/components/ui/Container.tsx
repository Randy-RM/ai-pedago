import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  /** Largeur maximale du container */
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full"
    | "none";
  /** Padding interne (toutes directions) */
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  /** Padding horizontal spécifique */
  paddingX?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  /** Padding vertical spécifique */
  paddingY?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  /** Margin externe (toutes directions) */
  margin?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "auto";
  /** Margin horizontal spécifique */
  marginX?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "auto";
  /** Margin vertical spécifique */
  marginY?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "auto";
  /** Centrer le container horizontalement */
  center?: boolean;
  /** Classe CSS personnalisée */
  className?: string;
  /** ID du container */
  id?: string;
  /** Section HTML semantic tag */
  as?:
    | "div"
    | "section"
    | "article"
    | "main"
    | "aside"
    | "header"
    | "footer"
    | "nav";
}

const Container = ({
  children,
  maxWidth = "xl",
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  center = true,
  className = "",
  id,
  as: Component = "div",
}: ContainerProps) => {
  // Max width classes
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
    none: "",
  };

  // Padding classes
  const paddingClasses = {
    none: "p-0",
    xs: "p-2",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12",
    "2xl": "p-16",
  };

  const paddingXClasses = {
    none: "px-0",
    xs: "px-2",
    sm: "px-4",
    md: "px-6",
    lg: "px-8",
    xl: "px-12",
    "2xl": "px-16",
  };

  const paddingYClasses = {
    none: "py-0",
    xs: "py-2",
    sm: "py-4",
    md: "py-6",
    lg: "py-8",
    xl: "py-12",
    "2xl": "py-16",
  };

  // Margin classes
  const marginClasses = {
    none: "m-0",
    xs: "m-2",
    sm: "m-4",
    md: "m-6",
    lg: "m-8",
    xl: "m-12",
    "2xl": "m-16",
    auto: "m-auto",
  };

  const marginXClasses = {
    none: "mx-0",
    xs: "mx-2",
    sm: "mx-4",
    md: "mx-6",
    lg: "mx-8",
    xl: "mx-12",
    "2xl": "mx-16",
    auto: "mx-auto",
  };

  const marginYClasses = {
    none: "my-0",
    xs: "my-2",
    sm: "my-4",
    md: "my-6",
    lg: "my-8",
    xl: "my-12",
    "2xl": "my-16",
    auto: "my-auto",
  };

  // Build classes
  const classes = [
    maxWidthClasses[maxWidth],
    center ? "mx-auto" : "",

    // Padding
    padding ? paddingClasses[padding] : "",
    paddingX ? paddingXClasses[paddingX] : "",
    paddingY ? paddingYClasses[paddingY] : "",

    // Margin (margin specifics override center)
    margin ? marginClasses[margin] : "",
    marginX ? marginXClasses[marginX] : "",
    marginY ? marginYClasses[marginY] : "",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component id={id} className={classes}>
      {children}
    </Component>
  );
};

export default Container;
