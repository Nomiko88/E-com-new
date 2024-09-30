

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import { TbHeartFilled } from "react-icons/tb";

import { Relateditems } from "@/components/Relateditems";
import React from 'react';
import ProductRatingComponent from "@/components/ProductratingComponent";


const product = {
    id: 'p1',
    name: 'Sample Product',
    reviews: [
        { user: 'Alice', rating: 5, comment: 'Excellent!' },
        { user: 'Bob', rating: 4, comment: 'Very good, but could be improved.' },
        { user: 'Charlie', rating: 3, comment: 'It’s okay.' }
    ]
};


interface ImageData {
    src: string;
    title: string;
    description: string;
    price: number;
}

interface Size {
    name: string;
}

const sizes: Size[] = [
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "2XL" },
];

const images: ImageData[] = [
    { src: "/hoodie1.png", title: "Wildeflower Hoodie", description: "Зэрлэг цэцгийн зурагтай даавуун материалтай цамц", price: 120000 },
    { src: "/hoodie2.png", title: "Wildeflower Hoodie", description: "Зэрлэг цэцгийн зурагтай даавуун материалтай цамц", price: 120000 },
    { src: "/hoodie3.png", title: "Wildeflower Hoodie", description: "Зэрлэг цэцгийн зурагтай даавуун материалтай цамц", price: 120000 },
    { src: "/hoodie4.png", title: "Wildeflower Hoodie", description: "Зэрлэг цэцгийн зурагтай даавуун материалтай цамц", price: 120000 },
];

const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [isFull, setIsFull] = useState<boolean>(false);

    const currentImage = images[currentIndex];

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    const handleMouseOver = (): void => setIsHovered(true);
    const handleMouseLeave = (): void => setIsHovered(false);
    const handleClick = (): void => setIsFull(!isFull);
    const handleSizeClick = (size: string): void => setSelectedSize(size);

    return (
        <div className="px-[200px] py-[52px]">
            <div className="flex-1 w-[1040px] h-[645px] border">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer relative h-20 w-20 mx-1 ${index === currentIndex
                                    ? "border-2 border-black rounded-xl"
                                    : "border-0 rounded-xl"
                                    } transition-all duration-500 ease-in-out`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <Image
                                    src={image.src}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    objectFit="cover"
                                    className="rounded-xl"
                                />
                            </div>
                        ))}
                    </div>

                    <div
                        className="h-[450px] group"
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            src={images[currentIndex].src}
                            alt={`Slider Image ${currentIndex + 1}`}
                            width={421}
                            height={400}
                            objectFit="cover"
                            className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="w-[50px] bg-red-600 text-white rounded-md text-base px-2">NEW</p>
                        <div className="flex gap-3 items-center">
                            <p className="text-lg font-bold">{currentImage.title}</p>
                            <p>
                                {isFull ? (
                                    <TbHeartFilled onClick={handleClick}
                                        size={24}
                                        className="text-pink-600 cursor-pointer"
                                    />
                                ) : (
                                    <LuHeart onClick={handleClick}
                                        size={24}
                                        className="text-pink-600 cursor-pointer"
                                    />
                                )}
                            </p>
                        </div>
                        <p>{currentImage.description}</p>

                        <div className="flex flex-col gap-10">
                            <p>Хэмжээний заавар</p>
                            <div className="flex gap-1">
                                {sizes.map((size) => (
                                    <button
                                        key={size.name}
                                        className={`h-[32px] w-[32px] rounded-full border ${selectedSize === size.name ? 'bg-white text-black' : 'bg-black text-white'}`}
                                        onClick={() => handleSizeClick(size.name)}
                                    >
                                        {size.name}
                                    </button>
                                ))}
                            </div>
                            <Counter />
                            <div className=" mt-8 flex flex-col gap-6">
                                <p className="font-bold text-xl">{currentImage.price} ₮</p>
                                <button className="w-[175px] h-[36px] rounded-[20px] bg-[#2563ef] text-sm text-white px-8 py-2" > Сагсанд нэмэх </button>
                            </div>
                            <div>
                                {/* <h1>{product.name}</h1> */}
                                <ProductRatingComponent product={product} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Relateditems />
        </div>
    );
};

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));

    return (
        <div className="flex items-center mt-4">
            <button className="h-8 w-8 border-black border rounded-full" onClick={increment}>+</button>
            <p className="mx-4">Qty: {count}</p>
            <button className="h-8 w-8 border-black border rounded-full" onClick={decrement}>-</button>
        </div>
    );
};



export default ImageSlider

