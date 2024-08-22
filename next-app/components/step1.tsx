"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const decreaseCount = () => {
        setCount((prevCount) => Math.max(0, prevCount - 1));
    };

    const increaseCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md w-64">
            <button
                onClick={decreaseCount}
                disabled={count === 0}
                className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition duration-300 ease-in-out ${
                    count === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-blue-600"
                }`}
            >
                減少
            </button>
            <div className="text-2xl font-bold text-blue-600">{count}</div>
            <button
                onClick={increaseCount}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
                増加
            </button>
        </div>
    );
}
