"use client";
import React, { useState } from "react";
import Image from "next/image";
interface props {
  images: string[];
}

const ImageContainer = ({ images }: props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="w-[40%] flex flex-col border rounded-2xl">
      <div className="w-full h-[400px] relative overflow-hidden">
        <Image
          src={images[selectedImage]}
          fill
          alt="Product image"
          className="object-cover rounded-t-2xl"
        ></Image>
      </div>
      <div className="p-2 flex justify-start gap-2 border-t">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`${
              selectedImage === index
                ? "border-2 border-textDefaultGreen rounded-lg"
                : ""
            } w-16 h-16 relative overflow-hidden cursor-pointer`}
          >
            <Image
              src={image}
              fill
              alt="Product image"
              className="object-cover rounded-lg hover:opacity-70"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
