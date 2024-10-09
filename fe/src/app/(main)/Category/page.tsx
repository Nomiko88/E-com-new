

"use client"

import ItemCard from "@/components/ItemCard";
import { Checkbox } from "@/components/ui/checkbox"
import { card } from "@/components/utils/card";
import { SetStateAction } from "react";


interface Category {
    name: string;
}
interface Size {
    name: string;
}

const sizes: Size[] = [
    { name: "Free" },
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "XXL" },
    { name: "3XL" },

]
const categories: Category[] = [
    { name: "Малгай" },
    { name: "Усны сав" },
    { name: "T-shirt" },
    { name: "Hoodie" },
    { name: "Tee" },
    { name: "Backbag" }
];

export default function Home() {
    return (
        <div className="flex gap-5 px-[200px] py-[52px] w-[1440px] m-auto">
            <div className="w-[245px] h-[512px] border flex flex-col gap-11 px-1">
                <div className="flex flex-col gap-4">
                    <h1>Ангилал</h1>
                    {categories.map((category, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Checkbox id={`category-${index}`} />
                            <label
                                htmlFor={`category-${index}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {category.name}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <h1>Хэмжээ</h1>
                    {sizes.map((size, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Checkbox id={`size-${index}`} />
                            <label
                                htmlFor={`size -${index}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {size.name}
                            </label>
                        </div>
                    ))}

                </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-5 gap-x-5 gap-y-10 ">
                {card.slice(1, 16).map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="relative h-[330px] w-[244px]">
                            <ItemCard
                                image={item.image[0]}
                                title={item.title}
                                price={item.price}
                                discount={item.discount || undefined}
                                className="h-full"
                                imageClassName={`object-cover`} id={""} savedItems={[]} setSavedItems={function (value: SetStateAction<any[]>): void {
                                    throw new Error("Function not implemented.");
                                }}
                            />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
}
