
// "use client"
// import Image from "next/image";
// import React, { useState } from "react";
// import ItemCard from "./ItemCard";
// import { card } from "./utils/card";

// // Define the SlideProps type
// type SlideProps = {
//     title: string;
//     price: number; // Changed to string to match the Slides array
//     image: string;
//     discount: number;


// };

// // Slide component
// const Slide = ({ title, price, image, }: SlideProps) => {
//     return (
//         <div className="slide h-[446px] w-[1040px]">
//             <Image src={image} alt={title} layout="fill" objectFit="cover" />
//             <h2>{title}</h2>
//             <p>{price}</p>
//         </div>
//     );
// };

// // Mainpage component
// export const Mainpage = () => {
//     const Slides: SlideProps[] = [
//         { title: "Slide 1", price: 1200000, image: "/slider.png", },

//     ];

//     const [slideIndex, setSlideIndex] = useState<number>(0);

//     return (
//         <div className="h-full w-[1040px]  py-[56px] m-auto">
//             <div className="slider-container h-[446px] w-[1040px] margin-auto">
//                 <div
//                     className="slides"
//                     style={{
//                         transform: `translateX(-${(slideIndex * 100) / Slides.length}%)`,
//                         transition: "transform 0.5s ease-in-out",
//                         display: 'flex',
//                     }}
//                 >
//                     {Slides.map((slide, index) => (
//                         <Slide
//                             key={index}
//                             title={slide.title}
//                             price={slide.price}
//                             image={slide.image}

//                         />
//                     ))}
//                 </div>
//             </div>
//             <div className="grid grid-cols-4 grid-rows-6 gap-x-5 gap-y-10 h-[2508px] my-[56px]">
//                 {card.map((item, index) => (
//                     <div key={index}
//                         className={`${index === 6 || index === 7 ? "col-span-2 row-span-2" : ""}`}>
//                         <ItemCard
//                             image={item.image}
//                             title={item.title}
//                             price={item.price}
//                             discount={item.discount || undefined}
//                             className="h-full"
//                             imageClassName={`${index === 6 || index === 7 ? "h-[754px]" : "h-[330px]"} object-cover`}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>

//     );
// };


// export default Mainpage;
"use client";
import Image from "next/image";
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { card } from "./utils/card";

// Define the SlideProps type
type SlideProps = {
    title: string;
    price: number; // Keeping this as a number for now
    image: string;
    discount?: number; // Optional, in case not all slides have discounts
};

// Slide component
const Slide = ({ title, price, image }: SlideProps) => {
    return (
        <div className="slide relative h-[446px] w-[1040px] overflow-hidden">
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-lg">{price.toLocaleString()}</p>
            </div>
        </div>
    );
};

// Mainpage component
export const Mainpage = () => {
    const Slides: SlideProps[] = [
        { title: "Hoodie", price: 1200000, image: "/slider.png" },
        { title: "Hoodie", price: 1200000, image: "/hoodie4.png" },
        { title: "magazine", price: 1200000, image: "/hoodie2.png" },
        // // Add more slides as needed
    ];

    const [slideIndex, setSlideIndex] = useState<number>(0);

    const goToNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % Slides.length);
    };

    const goToPreviousSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + Slides.length) % Slides.length);
    };

    return (
        <div className="h-full w-[1040px] py-[56px] mx-auto">
            <div className="relative slider-container h-[446px] w-full">
                <div
                    className="slides flex"
                    style={{
                        transform: `translateX(-${(slideIndex * 100) / 3})`,
                        transition: "transform 0.5s ease-in-out",
                    }}
                >
                    {Slides.map((slide, index) => (
                        <Slide
                            key={index}
                            title={slide.title}
                            price={slide.price}
                            image={slide.image}
                            discount={slide.discount}
                        />
                    ))}
                </div>
                {/* Slider Controls */}
                <button onClick={goToPreviousSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white">Prev</button>
                <button onClick={goToNextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white">Next</button>
            </div>

            <div className="grid grid-cols-4 grid-rows-6 gap-x-5 gap-y-10 my-[56px]">
                {card.map((item, index) => (
                    <div
                        key={index}
                        className={`${index === 6 || index === 7 ? "col-span-2 row-span-2" : ""}`}
                    >
                        <ItemCard
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            discount={item.discount || undefined}
                            className="h-full"
                            imageClassName={`${index === 6 || index === 7 ? "h-[754px]" : "h-[330px]"} object-cover`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mainpage;
