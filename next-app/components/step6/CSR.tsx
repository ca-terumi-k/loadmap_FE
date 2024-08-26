"use client";

import React, { useEffect, useState } from "react";

const CSR = () => {
    const [data, setData] = useState<string | null>(null);
    const [timestamp, setTimestamp] = useState<string>("");

    useEffect(() => {
        const currentTimestamp = new Date().toISOString();
        setTimestamp(currentTimestamp);

        fetchDataForCSR().then(setData);
    }, []);

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-lg font-semibold">Generated at: {timestamp}</p>
        </div>
    );
};

async function fetchDataForCSR() {
    return "CSR Data";
}

export default CSR;
