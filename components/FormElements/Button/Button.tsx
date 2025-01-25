import React, { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  fallback?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  disabled,
  type = "button",
  loading = false,
  fallback,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`flex disabled:opacity-60 disabled:cursor-wait items-center justify-center truncate ${
        className || ""
      }`}
    >
      {loading ? fallback : children}
    </button>
  );
};

export default Button;
