import React from "react";

type CardSize = "xs" | "sm" | "md" | "lg" | "xl";

interface CardProps {
  title: string;
  description: string;
  size?: CardSize;
  buttonText?: string;
  icon?: React.ReactNode;
  onBuyClick: () => void;
}

export default function Card({
  title,
  description,
  size = "md",
  buttonText = "Buy Now",
  icon,
  onBuyClick,
}: CardProps) {
  const sizeClasses: Record<CardSize, string> = {
    xs: "card-xs",
    sm: "card-sm",
    md: "card-md",
    lg: "card-lg",
    xl: "card-xl",
  };

  return (
    <div className={`card w-100 bg-neutral shadow-sm ${sizeClasses[size]}`}>
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2">
          {icon && <span className="inline-flex items-center">{icon}</span>}
          <span>{title}</span>
        </h2>
        <p>{description}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary" onClick={onBuyClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
