//import compartment
import React, { useState } from "react";

//component import
import ImgCard from "../components/ImgCard";
import CardMod from "../components/CardMod";
import Slider from "../components/Slider";

export default function ReviewPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    //structure center v-h
    <div
      data-theme={theme}
      className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-base-200"
    >
      {/* Dark/Light Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <label className="flex cursor-pointer gap-2 items-center">
          {/* Sun icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-base-content"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <input
            type="checkbox"
            className="toggle theme-controller"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          {/* Moon icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-base-content"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>
      </div>

      <h1 className="text-2xl font-bold text-center text-base-content">
        Review Komponen
      </h1>
      {/*Container Component*/}
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <Slider slot1="Audio" slot2="Lightness" />
        {/*<CardMod title="Sepatu" description="Sepatu yang Buat anda nyaman" />*/}
        {/*<ImgCard
          imageSrc= "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          title= "Nike"
          description= "Nike baru ni boss"
          condition= "BARU"
          badge1= "Fashion"
          badge2= "Product"
          />*/}
      </div>
    </div>
  );
}
