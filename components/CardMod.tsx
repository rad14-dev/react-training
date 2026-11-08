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
        <fieldset className="join m-2  bg-white rounded-full w-3.5">
          <button
            onClick={handleDecrement}
            className="btn btn-ghost rounded-s-full"
          >
            <MinusIcon size={24} className="text-black" />
          </button>
          <p className="quantity">{quantity}</p>
          <button
            onClick={handleIncrement}
            className="btn btn-ghost rounded-e-full"
          >
            <AddIcon size={24} className="text-black" />
          </button>
        </fieldset>
      </div>
    </div>
  );
}
