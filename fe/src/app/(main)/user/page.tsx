"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PurchasedHistory from "./Orderhistory"


export default function Home() {
    return (
        <div className=" h-screen bg-gray-100">


            <div className="w-[884px]  h-725px flex items-center justify-center px-[278px] py-[104px]">
                <Tabs defaultValue="Хэрэглэгчийн хэсэг" className=" w-[244px] h-[72px] rounded-2xl  ">
                    <TabsList className="flex flex-col w-[244px] gap-2">
                        <TabsTrigger value="Хэрэглэгчийн хэсэг" className="bg-white">Хэрэглэгчийн хэсэг</TabsTrigger>
                        <TabsTrigger value="Захиалгын түүх" className="bg-white">Захиалгын түүх</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Хэрэглэгчийн хэсэг">
                        <Card className="h-[609px] w-[620px] ml-[280px] mt-[-45px]">
                            <CardHeader>
                                <CardTitle className="font-semibold">Хэрэглэгчийн хэсэг</CardTitle>
                                <CardDescription className="h-[1px] w-[580px] bg-[#e4e4e7]">

                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Овог:</Label>
                                    <Input id="lastname" defaultValue="" className="rounded-2xl" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="name">Нэр:</Label>
                                    <Input id="lastname" defaultValue="" className="rounded-2xl" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="name">Утасны дугаар:</Label>
                                    <Input id="lastname" defaultValue="" className="rounded-2xl" />
                                </div>

                                <div className="space-y-1">
                                    <Label htmlFor="name">Имэйл хаяг: </Label>
                                    <Input id="lastname" defaultValue="" className="rounded-2xl" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="name"> Хаяг </Label>
                                    <Input id="lastname" defaultValue="" className="rounded-2xl h-[94px]" />
                                </div>

                            </CardContent>
                            <CardFooter>
                                <Button className="bg-blue-600 rounded-2xl">Мэдээлэл шинэчлэх</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="Захиалгын түүх">
                        <Card className="h-[609px] w-[620px] ml-[280px] mt-[-45px]">
                            <CardHeader>
                                <CardTitle>Захиалгын түүх</CardTitle>
                                <CardDescription className="h-[1px] w-[550px] bg-[#e4e4e7]">

                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="">
                                    <PurchasedHistory />

                                </div>

                            </CardContent>

                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}