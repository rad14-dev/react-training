import { MinusIcon } from "@solar-icons/react/bold/minus";
import { AddIcon } from "@solar-icons/react/bold/add";
import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="cardex flex">
      <div className="image"></div>
      <div className="info">
        <div className="title">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="quantitymod flex items-center w-24 px-4 ">
          <button
            onClick={handleDecrement}
            className="cursor-pointer border-npne bg-transparent p-0"
          >
            <MinusIcon size={24} className="text-black" />
          </button>
          <p className="quantity">{quantity}</p>
          <button
            onClick={handleIncrement}
            className="cursor-pointer border-npne bg-transparent p-0"
          >
            <AddIcon size={24} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
