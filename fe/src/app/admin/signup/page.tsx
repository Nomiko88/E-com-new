"use client"

import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";

// Define your schema
const FormSchema = z.object({
    email: z.string().min(1, "Email is required"),
    username: z.string().min(1, "username required")
});

export function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            username: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "Signed in to Pincecone with ",
            description: (
                <pre className="mt-2 w-[376px] rounded-md border border-spacing-1 p-4">
                    <code className="text-gray-500 text-sm">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    return (
        <div>
            <div className="p-11">
                <Image
                    height={100}
                    width={200}
                    src="/PLogo.png"
                    alt="Logo"
                />
            </div>
            <div className="w-[440px] h-[756px] border rounded-lg m-auto">
                <div className="w-[360px] m-auto">
                    <h1 className="font-bold text-[32px] w-full h-[56px] px-20 py-6 mb-10">Бүртгүүлэх</h1>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal ">Таны имэйл </FormLabel>
                                        <FormControl>
                                            <Input placeholder="E-mail" className="text-base px-2 py-4 h-[56px]" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal px-2 py-4">Таны нэр</FormLabel>
                                        <FormControl>
                                            <Input placeholder="нэр" className="text-base px-2 py-4 h-[56px]" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="flex gap-4 bg-black text-white w-full h-[56px]">
                                <p className="text-base">Дараах</p>
                                <FaArrowRight />
                            </Button>
                        </form>
                    </Form>
                    <div className="flex flex-col gap-6 mt-5 border-t border-b">
                        <Button className=" w-full h-[56px] bg-[#1C20240A] text-black text-sm font-light mt-5">
                            <FcGoogle className="mr-2 h-6 w-6 " /> Google-ээр нэвтрэх
                        </Button>
                        <Button className=" w-full h-[56px] bg-[#1C20240A] text-black text-sm font-light">
                            <FaMicrosoft className="mr-2 h-6 w-6 " /> Google-ээр нэвтрэх
                        </Button>
                        <Button className=" w-full h-[56px] bg-[#1C20240A] text-black text-sm font-light mb-5">
                            <FaApple className="mr-2 h-6 w-6 " /> Google-ээр нэвтрэх
                        </Button>
                    </div>
                    <div className="flex justify-center items-center py-6 ">
                        <p className="text-sm">Бүртгэлтэй юу?</p>
                        <p className="text-sm underline underline-offset-1">Нэвтрэх</p>
                    </div>

                </div>

            </div>
            <div className="w-full h-12 mt-24 text-center">
                <p className="text-xs text-[#1C20243D]">© 2023 Pinecone</p></div>
        </div>
    );
}

export default InputForm;
