"use client";

import React, { useEffect, useState } from "react";

const CSR = () => {
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");

    useEffect(() => {
        const start = new Date();
        const end = new Date();

        setStartTime(start.toISOString());
        setEndTime(end.toISOString());

        // 差分を表示
        console.log(`CSR: ${end.getTime() - start.getTime()}ms`);
    }, []);

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-lg font-semibold">StartTime at: {startTime}</p>
            <hr />
            <p className="text-lg font-semibold">EndTime at: {endTime}</p>
        </div>
    );
};

export default CSR;
