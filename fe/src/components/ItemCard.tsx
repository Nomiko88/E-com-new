import Image from "next/image";
import { useState } from "react";
import { LuHeart } from "react-icons/lu";
import { TbHeartFilled } from "react-icons/tb";


type ItemCardProps = {
    image: string,
    title: string,
    price: number,
    discount?: number,
    className?: string,
    imageClassName?: string
}

export default function ItemCard({ image, title, price, discount, className, imageClassName }: ItemCardProps) {

    const [isFull, setIsfull] = useState(false);

    const handleClick = () => {
        setIsfull(!isFull);
    };

    return (
        <div className={`flex flex-col relative gap-2 ${className}`}>
            <div className={`relative overflow-hidden rounded-lg ${imageClassName}`}>
                <Image
                    src={image}
                    fill
                    sizes="100vh"
                    alt="logo"
                    className="rounded-lg hover:scale-110 duration-1000"
                />
            </div>
            <div className="absolute mt-4 ml-[85%]">
                {isFull ? (<TbHeartFilled onClick={handleClick}
                    size={24}
                    className="absolute text-pink-600 right-4 top-4" />) : (< LuHeart onClick={handleClick}
                        size={24}
                        className="text-pink-600 absolute top-4 right-4" />)}

                <p className="text-2xl h-6 w-6 text-pink-600"></p>

            </div>
            <div className="">
                <p className="font-normal text-base">{title}</p>
                <div className="flex">

                    <p className="font-semibold">{discount ? price - ((price * discount) / 100) : null}  </p>
                    <p className="text-base font-semibold">{price}₮</p>
                    <p className="text-base font-normal text-red-600">{discount} </p>
                </div>
            </div>

        </div>
    )
};