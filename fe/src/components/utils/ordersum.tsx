"use client"
import { FaRegClipboard } from "react-icons/fa";
export default function () {
    return (
        <div className="h-[136px] w-[573px] rounded-lg bg-white border">
            <div className="flex justify-start">
                <FaRegClipboard />
                <p>Захиалга</p>
            </div>
            <div className="flex flex-col gap-4 justify-start">
                <p className="text-large font-bold"> total order</p>
                <p>Date</p>
            </div>
        </div>
    )
}