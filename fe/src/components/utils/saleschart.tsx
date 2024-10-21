"use client"

import { Bar, BarChart } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { XAxis } from "recharts";
import { CartesianGrid } from "recharts";

const chartData = [
    { day: "Oct-1", sales: 186, },
    { day: "Oct-2", sales: 305, },
    { day: "Oct-3", sales: 237, },
    { day: "Oct-4", sales: 73, },
    { day: "Oct-5", sales: 209, },
    { day: "Oct-6", sales: 214, },
]

const chartConfig = {
    Sales: {
        label: "Sales",
        color: "#121316",
    },

} satisfies ChartConfig

export default function () {
    return (
        <ChartContainer config={chartConfig} className="h-[349px] w-[565px] border rounded-lg bg-white">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="Day"
                    tickLine={false}
                    tickMargin={4}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <Bar dataKey="sales" fill="var(--color-sales)" radius={1} />
            </BarChart>
        </ChartContainer>
    )
}
