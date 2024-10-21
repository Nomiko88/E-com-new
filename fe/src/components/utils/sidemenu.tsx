"use client"
import { PiSquaresFourFill } from "react-icons/pi";
import { BsClipboard2 } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { MdOutlineListAlt } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
export default function () {
    return (
        <div>
            <div className="h-[976px] w-[222px]  flex flex-col bg-white">
                <div className="flex gap-4 items-center p-4">
                    <PiSquaresFourFill className="w-6 h-6" />
                    <p>Хяналтын самбар</p>
                </div>
                <div className="flex gap-4 items-center p-4">
                    <BsClipboard2 className="w-6 h-6" />
                    <p>Захиалга</p>
                </div>
                <div className="flex gap-4 items-center p-4">
                    <FaTags className="w-6 h-6" />
                    <p>Орлого</p>
                </div>
                <div className="flex gap-4 items-center p-4">
                    <MdOutlineListAlt className="h-6 w-6" />
                    <p>Бүтээгдэхүүн</p>
                </div>
                <div className="flex gap-4 items-center p-4">
                    <IoMdSettings className="h-6 w-6" />
                    <p>Тохиргоо</p>
                </div>


            </div>
            <div className="">

            </div>

        </div>
    )
}