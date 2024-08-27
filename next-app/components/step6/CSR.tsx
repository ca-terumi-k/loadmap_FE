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
            <p className="text-sm font-semibold">
                StartTime at:
                <br />
                <span className="text-lg">{startTime}</span>
            </p>
            <hr />
            <p className="text-sm font-semibold">
                EndTime at:
                <br />
                <span className="text-lg"> {endTime}</span>
            </p>
        </div>
    );
};

export default CSR;
