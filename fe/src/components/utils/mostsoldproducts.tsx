"use client"

import { IoIosArrowForward } from "react-icons/io";


export default function () {
    return (
        <div className="h-[786px] w-[581px]  bg-white border rounded-lg">
            <div className="flex justify-between items-center">
                <p>Шилдэг бүтээгдэхүүн</p>
                <p><IoIosArrowForward /></p>
            </div>
            <div className=" ">
                <div className="flex bg-gray-400  justify-evenly">
                    <p>№</p>
                    <p>Бүтээгдэхүүн</p>
                    <p>Зарагдсан</p>
                    <p>Үнэ</p>
                </div>
                <div className="flex border-t-2 border-gray-400 justify-evenly ">
                    <p className="text-sm text-black">number</p>
                    <p> product name</p>
                    <p>sold number</p>
                    <p>price</p>
                </div>
            </div>
        </div>
    )
}