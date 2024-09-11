import Image from "next/image";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="h-[282px] w-full bg-black px-[200px] py-[64px]">
            <div className="flex flex-col gap-[43px] justify-center items-center">
                <div className="flex w-[1040px] h-[48px] justify-between items-center">
                    <div className="">
                        <Image
                            src="/Pinecone Studio.png"
                            width={41}
                            height={34}
                            alt="logo" />
                    </div>
                    <div className="flex gap-5">
                        <div className="flex items-center justify-center gap-4">
                            <p className="text-white border border-gray-500 rounded-full h-[48px] w-[48px] text-2xl flex justify-center items-center"><LuPhone /></p>
                            <p className="text-white text-sm ">(976) 7007-1234</p>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <p className="text-white border border-gray-500 rounded-full h-[48px] w-[48px] text-2xl flex justify-center items-center"><HiOutlineMail /></p>
                            <p className="text-white text-sm ">contact@ecommerce.mn</p>
                        </div>
                    </div>
                </div>
                <div className="w-[1040px] border-[1.5px] bg-[#383737]">

                </div>
                <div className="flex justify-between items-center w-[1040px] h-5 text-sm">
                    <p className="text-white">
                        © 2024 Ecommerce MN
                    </p>
                    <div className="flex text-white gap-5 text-xl">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedin />

                    </div>
                </div>
            </div>
        </div>
    )
}