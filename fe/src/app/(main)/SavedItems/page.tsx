// import { useState, useEffect } from "react";
// import ItemCard from "@/components/ItemCard";

// export default function Home() {
//     const [savedItems, setSavedItems] = useState(() => {
//         return JSON.parse(localStorage.getItem(id)) || [];
//     });

//     // Sync saved items with local storage
//     useEffect(() => {
//         localStorage.setItem('', JSON.stringify(savedItems));
//     }, [savedItems]);

//     const products = [
//         {
//             id: "1",
//             image: "/path/to/product-image-1.jpg",
//             title: "Product Name 1",
//             price: 100,
//             discount: 10,
//         },
//         {
//             id: "2",
//             image: "/path/to/product-image-2.jpg",
//             title: "Product Name 2",
//             price: 200,
//             discount: 15,
//         },

//     ];

//     return (
//         <div>
//             <h1>Хадгалсан бараа</h1>
//             <div className="header">
//                 <button id="saved-items-btn">
//                     ❤️ Saved Items ({savedItems.length})
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {products.map(product => (
//                     <ItemCard
//                         key={product.id}
//                         id={product.id}
//                         image={product.image}
//                         title={product.title}
//                         price={product.price}
//                         discount={product.discount}
//                         savedItems={savedItems} // Ensure this is passed
//                         setSavedItems={setSavedItems} imageClassName={""} />
//                 ))}
//             </div>
//         </div>
//     );
// }
"use client"

import { useState, useEffect } from "react";
import ItemCard from "@/components/ItemCard";
import { TbPencilSearch } from "react-icons/tb";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import { TbHeartFilled } from "react-icons/tb";

export default function Home() {
    const LOCAL_STORAGE_KEY = 'savedItems';
    const [isFull, setIsFull] = useState<boolean>(false);
    const handleClick = (): void => setIsFull(!isFull);
    const [savedItems, setSavedItems] = useState(() => {
        const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedItems ? JSON.parse(storedItems) : [];
    });


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedItems));
    }, [savedItems]);

    const products: ProductType[] = [
        {
            id: "1",
            image: "/hoodie1.png",
            title: "hoodie 1",
            price: 120000,
            discount: "",
        },
        {
            id: "2",
            image: "/chunky.png",
            title: "chunky",
            price: 200000,
            discount: "",
        },
        {
            id: "3",
            image: "/shirt.png",
            title: "chunky",
            price: 200000,
            discount: "",
        },

    ];
    interface ProductType {
        id: string
        image: string
        title: string
        price: number
        discount: string
    }

    return (
        <div className="h-[1200px] w-[622px] m-auto mt-14 flex flex-col gap-10">
            <div className="flex gap-3">
                <h1 className="font-semibold">Хадгалсан бараа</h1>
                <p className="font-normal text-[#5e6166]">({savedItems.length})</p>
            </div>



            <div className="flex flex-col ">
                <div className="space-y-4">
                    {products.map((product) => (
                        <div key={product.id} className="flex items-center space-x-10 border border-1 rounded-lg ">
                            <div className="relative w-[120px] h-[120px]"
                            ><Image
                                    src={product.image}
                                    fill
                                    className="rounded-md bg-cover"
                                    alt={product.title}
                                /></div>

                            <div className="flex flex-col">
                                <h2 className="font-semibold">{product.title}</h2>
                                <p>₮{product.price}</p>
                                <button className="bg-[#2563eb] text-white px-3 py-1 rounded-md">
                                    Сагслах
                                </button>
                            </div>
                            <div className="space-x-90">
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
                            </div>
                        </div>
                    ))}</div>
            </div>
        </div>
    );
}

