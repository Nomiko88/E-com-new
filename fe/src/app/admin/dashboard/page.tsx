"use client"

import Mostsoldproducts from "@/components/utils/mostsoldproducts";
import Ordersum from "@/components/utils/ordersum";
import Saleschart from "@/components/utils/saleschart";
import Salessum from "@/components/utils/salessum";
import Sidemenu from "@/components/utils/sidemenu";

export function Dashboard() {
    return (
        <div className=" flex mt-4 gap-[36px] p-6 bg-[#F7F7F8]">
            <Sidemenu />
            <div className="flex flex-col gap-6">
                <div className="flex gap-[24px]">
                    <Salessum />
                    <Ordersum />
                </div>
                <div className="flex p-6">
                    <Mostsoldproducts />
                    <Saleschart />
                </div>
            </div>

        </div>
    )
}
export default Dashboard;