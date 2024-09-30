"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



export default function Home() {
    return (
        <div className="m-auto h-[806px] w-full flex flex-col items-center bg-[#f7f7f8]">
            <h1 className="mt-[100px] font-semibold text-2xl">Нэвтрэх</h1>
            <div className="w-[339px] h-[260px] flex flex-col gap-4 items-center mt-6">
                <Input type="email" placeholder="Email" className="rounded-2xl bg-white" />
                <Input type="password" placeholder="Password" className="rounded-2xl bg-white" />
                <Button className="rounded-2xl bg-[#2563eb] text-sm text-white w-[330px]">Нэвтрэх</Button>
                <p className="text-sm text-[#71717a] underline underline-offset-1">Нууц үг мартсан</p>

                <Button className="rounded-2xl border border-[#2563eb] text-sm text-[#2563eb] bg-white w-[330px] mt-6">Бүртгүүлэх</Button>
            </div>



        </div>
    )
}