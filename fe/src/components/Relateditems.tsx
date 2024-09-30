"use client"

import { SetStateAction } from "react"
import ItemCard from "./ItemCard"
import { card } from "./utils/card"



export const Relateditems = () => {
    return (
        <div className="flex flex-col gap-5 py-[80px]">
            <h1 className="text-3xl font-bold">Холбоотой бараа</h1>
            <div className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-10 h-[800px] w-[1040px]">
                {card.slice(1, 9).map((item, index) => (
                    <div key={index}
                        className={`${index === 6 || index === 7 ? " " : ""}`}>
                        <ItemCard
                            image={item.image[0]}
                            title={item.title}
                            price={item.price}
                            discount={item.discount || undefined}
                            className="h-full"
                            imageClassName={`${index === 6 || index === 7 ? "h-[330px]" : "h-[330px]"} object-cover`} id={""} savedItems={[]} setSavedItems={function (value: SetStateAction<any[]>): void {
                                throw new Error("Function not implemented.")
                            }} />
                    </div>
                ))}
            </div>
        </div>
    )
}