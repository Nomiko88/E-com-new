
"use client"

import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";



import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Header() {

    const pathname: string = usePathname();
    interface Path {
        name: string;
        path: string;
    }
    const paths: Path[] = [
        {
            name: "E-commerce",
            path: "/"
        },
        {
            name: "Ангилал",
            path: "/Category"
        }
    ]
    return (
        <div className="h-[68px] w-full bg-black px-6 py-4 flex justify-between items-center margin-auto" >
            <div className="flex justify-center items-center gap-2 h-[32px]">
                <Image
                    src="/Pinecone Studio.png"
                    width={32}
                    height={32}
                    alt="logo" />
                {paths.map((path, index) => (
                    <Link key={index} href={path.path}>
                        <div style={{ color: pathname === path.path ? "pink" : "white" }}>
                            {path.name}
                        </div>
                    </Link>
                ))}


            </div>
            <div className="w-[300px] h-[40px] bg-[#18181B] relative">
                <input className="absolute w-[300px] h-[40px] bg-[#18181b]" />

                <div className="h-[24px] flex gap-3 bg-[#18181b] absolute">
                    <p className="text-white font-light bg-black "><CiSearch /></p>
                    <p className="text-white">Бүтээгдэхүүн</p>
                </div>
            </div>
            <div className="flex gap-4 h-9 justify-center items-center">
                <LuShoppingCart className="text-white text-xl" />
                <IoMdHeartEmpty className="text-white text-xl" />

                <button className="border-[#2563eb] text-white rounded-md px-3 py-2 w-">Login</button>
                <button className="border-[#2563EB] text-white rounded-md px-3 py-2">Register</button>
            </div>
        </div>
    );
}