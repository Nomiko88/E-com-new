// "use client"


// import Image from "next/image";
// import { histories } from "./purchased";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { useState } from "react";


// const PurchasedHistory = () => {
//     const [side, setSide] = useState(true);
//     return (

//         <div className="bg-white rounded-2xl  px-8 py-6 grid gap-4">
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                     <p className="text-[16px] font-bold">2024-09-03 15:34</p>
//                     <button className="bg-[#2563EB] text-white rounded-xl px-[10px] py-1 ">
//                         <p>хүргэлтэнд гарсан</p>
//                     </button>
//                 </div>
//                 <div onClick={() => setSide(!side)}>
//                     {side ? <FaChevronUp /> : <FaChevronDown />}
//                 </div>
//             </div>
//             <div className={`w-full ${side ? "visible" : "hidden"}`}>
//                 {histories.map((history, index) => (
//                     <div key={index} className="flex  justify-between items-center">
//                         <div className=" flex items-center gap-2">
//                             <div className="my-2">
//                                 <div className="relative w-12 h-12 ">
//                                     <Image
//                                         src={history.src}
//                                         alt="product image"
//                                         fill
//                                         className="rounded-md  "
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p>{history.text}</p>
//                                 <div>
//                                     {history.piece} x {history.price}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="font-bold">{history.price}</div>
//                     </div>
//                 ))}
//                 <div className="w-full border-dashed border my-4"></div>
//             </div>
//             <div className="flex justify-between">
//                 <p>Үнийн дүн:</p>
//                 <p className="font-bold">480’000₮</p>
//             </div>
//         </div>

//     )
// }

// export default PurchasedHistory;

"use client";

import Image from "next/image";
import { histories } from "./purchased"; // Assume this contains your purchase data
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const PurchasedHistory = () => {
    const [side, setSide] = useState(true);

    // Calculate total price
    const calculateTotal = () => {
        return histories.reduce((total, history) => {
            return total + (history.piece * history.price);
        }, 0);
    };

    const totalAmount = calculateTotal();

    return (
        <div className="bg-white rounded-2xl px-8 py-6 grid gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <p className="text-[16px] font-bold">2024-09-03 15:34</p>
                    <button className="bg-[#2563EB] text-white rounded-xl px-[10px] py-1">
                        <p>хүргэлтэнд гарсан</p>
                    </button>
                </div>
                <div onClick={() => setSide(!side)}>
                    {side ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>
            <div className={`w-full ${side ? "visible" : "hidden"}`}>
                {histories.map((history, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="my-2">
                                <div className="relative w-12 h-12">
                                    <Image
                                        src={history.src}
                                        alt="product image"
                                        fill
                                        className="rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <p>{history.text}</p>
                                <div>
                                    {history.piece} x {history.price}₮
                                </div>
                            </div>
                        </div>
                        <div className="font-bold">{(history.piece * history.price).toLocaleString()}₮</div>
                    </div>
                ))}
                <div className="w-full border-dashed border my-4"></div>
            </div>
            <div className="flex justify-between">
                <p>Үнийн дүн:</p>
                <p className="font-bold">{totalAmount.toLocaleString()}₮</p>
            </div>
        </div>
    );
};

export default PurchasedHistory;
