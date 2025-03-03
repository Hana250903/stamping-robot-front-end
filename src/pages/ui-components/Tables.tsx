// pages/tables.tsx
import { useState } from "react";
import UiChildCard from "@/components/shared/UiChildCard";

const desserts = [
    { name: "Frozen Yogurt", calories: 159 },
    { name: "Ice cream sandwich", calories: 237 },
    { name: "Eclair", calories: 262 },
    { name: "Cupcake", calories: 305 },
    { name: "Gingerbread", calories: 356 },
    { name: "Jelly bean", calories: 375 },
    { name: "Lollipop", calories: 392 },
    { name: "Honeycomb", calories: 408 },
    { name: "Donut", calories: 452 },
    { name: "KitKat", calories: 518 },
];

export default function TablesPage() {
    return (
        <div className="grid grid-cols-1 gap-6">
            {/* General Table */}
            <UiChildCard title="General Table">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2 text-left">Name</th>
                            <th className="border p-2 text-left">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {desserts.map((item) => (
                            <tr key={item.name} className="border">
                                <td className="border p-2">{item.name}</td>
                                <td className="border p-2">{item.calories}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </UiChildCard>

            {/* Dark Table */}
            <UiChildCard title="Dark Table">
                <table className="w-full border-collapse border border-gray-700 bg-gray-900 text-white">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="border p-2 text-left">Name</th>
                            <th className="border p-2 text-left">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {desserts.map((item) => (
                            <tr key={item.name} className="border border-gray-700">
                                <td className="border p-2">{item.name}</td>
                                <td className="border p-2">{item.calories}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </UiChildCard>

            {/* Fixed Header Table */}
            <UiChildCard title="Header Fixed Table">
                <div className="overflow-y-auto max-h-72 border border-gray-300 rounded-md">
                    <table className="w-full border-collapse">
                        <thead className="sticky top-0 bg-white shadow">
                            <tr>
                                <th className="border p-2 text-left">Name</th>
                                <th className="border p-2 text-left">Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {desserts.map((item) => (
                                <tr key={item.name} className="border">
                                    <td className="border p-2">{item.name}</td>
                                    <td className="border p-2">{item.calories}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </UiChildCard>
        </div>
    );
}
