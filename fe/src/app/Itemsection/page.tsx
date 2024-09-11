

"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
// import image1 from "/hoodie1.png";
// import image2 from "/hoodie2.png";
// import image3 from "/hoodie3.png";
// import image4 from "/hoodie4.png";
import { ChevronLeft, ChevronRight } from "lucide-react";




interface ImageData {
    src: string;
}

const images: ImageData[] = [

    { src: "/hoodie1.png" },
    { src: "/hoodie2.png" },
    { src: "/hoodie3.png" },
    { src: "/hoodie4.png" },
]

export default function ImageSlider(): JSX.Element {
    const [currentIndex, setcurrentIndex] = useState<number>(0);

    const [isHovered, setisHovered] = useState<boolean>(false);

    const prevSlide = (): void => {
        setcurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const nextSlide = (): void => {
        setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        if (!isHovered) {
            const Interval = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => {
                clearInterval(Interval);
            }
        }

    }, [isHovered]);
    const handleMouseOver = (): void => {
        setisHovered(true);
    };
    const handleMouseLeave = (): void => {
        setisHovered(false);
    }
    return (
        // <div className="px-[200px] py-[52px]">
        //     <div className="flex-1 w-[1040px] h-[521px] border">

        //         <div>
        //             <div></div>
        //         </div>
        //         <div></div>
        //     </div>

        // </div>
        <div className="relative w-full mx-auto mt-4">
            <div>
                <div>
                    <Images src={images}
                        width={100}
                        height={100}
                        objectFit="cover"
                        className="" />
                </div>
                <div
                    className="relative h-[460px] mx-12 group hover:-translate-y-2"
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image
                        src={images[currentIndex].src}
                        alt={`Slider Image ${currentIndex + 1}`}
                        // layout="fill"
                        width={426}
                        height={641}
                        objectFit="cover"
                        className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
                    />
                </div>
            </div>
            <button
                className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
                onClick={prevSlide}
            >
                <ChevronLeft className="text-gray-400 group-hover:text-white" />
            </button>
            <button
                className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
                onClick={nextSlide}
            >
                <ChevronRight className="text-gray-400 group-hover:text-white" />
            </button>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 mx-1 ${index === currentIndex
                            ? "bg-[#beff46] rounded-xl"
                            : "bg-gray-300 rounded-xl"
                            } transition-all duration-500 ease-in-out`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
