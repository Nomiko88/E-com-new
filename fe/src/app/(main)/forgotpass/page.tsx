"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



export default function Home() {
    return (
        <div className="flex flex-col items-center h-screen bg-slate-100">
            <div className="flex flex-col justify-center items-center mt-[100px] gap-6">
                <h1 className="font-semibold">Нууц үг сэргээх</h1>
                <div className="flex flex-col gap-3">
                    <Input type="email" placeholder="Имэйл хаяг оруулах" className="bg-white rounded-2xl" />
                    <Button type="button" className="rounded-2xl border bg-[#2563eb] text-sm text-white  w-[330px] ">
                        Илгээх
                    </Button>
                </div>

            </div>
        </div>
    )
};

