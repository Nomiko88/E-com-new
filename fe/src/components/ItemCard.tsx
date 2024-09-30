import Image from "next/image";
import { useState } from "react";
import { LuHeart } from "react-icons/lu";
import { TbHeartFilled } from "react-icons/tb";

type ItemCardProps = {
    image: string;
    title: string;
    price: number;
    discount?: number;
    className?: string
    customHeight?: string
    imageClassName: string,
    id: string; // Unique identifier
    savedItems: Array<{ id: string; name: string; price: number; image: string }>;
    setSavedItems: React.Dispatch<React.SetStateAction<any[]>>;
};



export default function ItemCard({
    image,
    title,
    price,
    discount,
    customHeight,
    id,
    className,
    imageClassName,
    savedItems = [],
    setSavedItems,
}: ItemCardProps) {

    const [isFull, setIsFull] = useState(savedItems.some(item => item.id === id));

    const handleClick = () => {
        if (!isFull) {
            const newItem = { id, name: title, price, image };
            setSavedItems([...savedItems, newItem]);
            setIsFull(true);
            alert('Product saved!');
        } else {
            setSavedItems(savedItems.filter(item => item.id !== id));
            setIsFull(false);
            alert('Product removed from saved items.');
        }
    };

    return (
        <div className="flex flex-col relative gap-2">
            <div className={`relative overflow-hidden rounded-lg ${customHeight}`}>
                <Image
                    src={image}
                    fill
                    sizes="100vh"
                    alt={title}
                    className="rounded-lg hover:scale-110 duration-1000 "
                />
            </div>
            <div className="absolute mt-4 ml-[85%]">
                {isFull ? (
                    <TbHeartFilled
                        onClick={handleClick}
                        size={24}
                        className="text-pink-600"
                    />
                ) : (
                    <LuHeart
                        onClick={handleClick}
                        size={24}
                        className="text-pink-600"
                    />
                )}
            </div>
            <div>
                <p className="font-normal text-base">{title}</p>
                <div className="flex">
                    {discount ? (
                        <>
                            <p className="font-semibold">
                                {(price - (price * discount) / 100).toFixed(2)}₮
                            </p>
                            <p className="text-base font-semibold line-through">{price}₮</p>
                            <p className="text-base font-normal text-red-600">{discount}% Off</p>
                        </>
                    ) : (
                        <p className="font-semibold">{price}₮</p>
                    )}
                </div>
            </div>
        </div>
    );
}
