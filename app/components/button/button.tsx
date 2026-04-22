"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";

type ButtonVariant = "primary" | "secondary" | "default";
type ButtonStyle = "fill" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  style?: ButtonStyle;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      style = "fill",
      size = "md",
      fullWidth = false,
      isLoading = false,
      icon,
      iconPosition = "left",
      className = "",
      disabled = false,
      onClick,
      ...rest
    },
    ref
  ) => {
    const buttonClasses = [
      "btn",
      `btn-${variant}`,
      `btn-${style}`,
      `btn-${size}`,
      fullWidth && "btn-full-width",
      isLoading && "btn-loading",
      disabled && "btn-disabled",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isLoading && !disabled && onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        onClick={handleClick}
        {...rest}
      >
        {isLoading ? (
          <span className="btn-loader">
            <span className="btn-loader-spinner" />
          </span>
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="btn-icon btn-icon-left">{icon}</span>
            )}
            <span className="btn-text">{children}</span>
            {icon && iconPosition === "right" && (
              <span className="btn-icon btn-icon-right">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
