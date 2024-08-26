"use server";

import React from "react";

const SSR = () => {
    const startTime = new Date().toISOString();

    const endTime = new Date().toISOString();
    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-lg font-semibold">StartTime at: {startTime}</p>
            <hr />
            <p className="text-lg font-semibold">EndTime at: {endTime}</p>
        </div>
    );
};

export default SSR;
