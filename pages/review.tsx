//import compartment
import React from "react";

//component import
import ImgCard from "../components/ImgCard";
import CardMod from "../components/CardMod";

export default function ReviewPage() {
  return (
    //structure center v-h
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-base-200">
      <h1 className="text-2xl font-bold text-center">Review Komponen</h1>
      {/*Container Component*/}
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <CardMod title="Sepatu" description="Sepatu yang Buat anda nyaman" />
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
