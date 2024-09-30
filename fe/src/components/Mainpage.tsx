
"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { card } from "./utils/card";
import { api } from "@/axios";


type SlideProps = {
    title: string;
    price: number;
    image: string[];
    discount?: number;
};


const Slide = ({ title, price, image }: SlideProps) => {
    return (
        <div className="slide relative h-[446px] w-[1040px] overflow-hidden" style={{position:'relative', width:"100%", height:"400px"}}>
            <Image src={image[0]} alt={title} fill style={{objectFit:"cover"}} />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-lg">{price.toLocaleString()}</p>
            </div>
        </div>
    );
};


export const Mainpage = () => {
    const Slides: SlideProps[] = [
        { title: "Hoodie", price: 1200000, image: ["/slider.png"] },


    ];

    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [res, setRes] = useState<string>("");

    const goToNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % Slides.length);
    };

    const goToPreviousSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + Slides.length) % Slides.length);
    };
    useEffect(() => {
        const getData = async ()=>{
            console.log("Test 1111");
            console.log(process.env.API)
            const res =await api.get("/");
            setRes(res.data.message);
        };
      getData();
    }, []);
    return (
        <div className="h-full w-[1040px] py-[56px] mx-auto">
            <h1>{res}</h1>
            <div className="relative slider-container h-[446px] w-full">
                <div
                    className="slides flex"
                    style={{
                        transform: `translateX(-${(slideIndex * 100) / 2})`,
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


            </div>

            <div className="grid grid-cols-4 grid-rows-6 gap-x-5 gap-y-10 my-[56px]  border-2 ">
                {card.map((item, index) => {
                    const customHeight = index=== 6 ? "h-[692px]" : index=== 7 ? "h-[692px]" : "h-[330px]" 
                        return(
                            <div
                            key={index}
                            className={`${index === 6 || index === 7 ? "col-span-2 row-span-2" : ""}`}
                        >
                            <ItemCard
                                image={item.image[0]}
                                title={item.title}
                                price={item.price}
                                discount={item.discount || undefined}
                                className="h-full"
                                customHeight = {customHeight}
                                imageClassName={` object-cover`} id={""} savedItems={[]} setSavedItems={function (value: React.SetStateAction<any[]>): void {
                                    throw new Error("Function not implemented.");
                                } }                        />
                        </div>
                        )
                }
                )}
            </div>
        </div>
    );
};

export default Mainpage;
// "use client"
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { LuHeart } from "react-icons/lu";
// import { TbHeartFilled } from "react-icons/tb";

// type ItemCardProps = {
//     image: string;
//     title: string;
//     price: number;
//     discount?: number;
//     description?: string;
//     className?: string;
//     imageClassName?: string;
//     id: string; 
// };

// export default function ItemCard({
//     image,
//     title,
//     price,
//     discount,
//     className,
//     imageClassName,
//     description,
//     id
// }: ItemCardProps) {
//     const [isFull, setIsFull] = useState(false);
//     const [savedItems, setSavedItems] = useState(() => {
       
//         return JSON.parse(localStorage.getItem('savedItems')) || [];
//     });

//     useEffect(() => {
//         localStorage.setItem('savedItems', JSON.stringify(savedItems));
//     }, [savedItems]);

//     const handleClick = () => {
//         const productExists = savedItems.some(item => item.id === id);
//         if (!productExists) {
//             const newItem = {
//                 id,
//                 name: title,
//                 price,
//                 image,
//             };
//             setSavedItems([...savedItems, newItem]);
//             setIsFull(true);
//             alert('Product saved!');
//         } else {
//             setSavedItems(savedItems.filter(item => item.id !== id));
//             setIsFull(false);
//             alert('Product removed from saved items.');
//         }
//     };

//     return (
//         <div className={`flex flex-col relative gap-2 ${className}`}>
//             <div className={`relative overflow-hidden rounded-lg ${imageClassName}`}>
//                 <Image
//                     src={image}
//                     fill
//                     sizes="100vh"
//                     alt={title}
//                     className="rounded-lg hover:scale-110 duration-1000"
//                 />
//             </div>
//             <div className="absolute mt-4 ml-[85%]">
//                 {isFull ? (
//                     <TbHeartFilled
//                         onClick={handleClick}
//                         size={24}
//                         className="text-pink-600"
//                     />
//                 ) : (
//                     <LuHeart
//                         onClick={handleClick}
//                         size={24}
//                         className="text-pink-600"
//                     />
//                 )}
//             </div>
//             <div className="">
//                 <p className="font-normal text-base">{title}</p>
//                 <div className="flex">
//                     {discount ? (
//                         <>
//                             <p className="font-semibold">
//                                 {(price - (price * discount) / 100).toFixed(2)}₮
//                             </p>
//                             <p className="text-base font-semibold line-through">{price}₮</p>
//                             <p className="text-base font-normal text-red-600">{discount}% Off</p>
//                         </>
//                     ) : (
//                         <p className="font-semibold">{price}₮</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

