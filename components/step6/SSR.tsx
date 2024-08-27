"use server";

import React from "react";

const SSR = () => {
    const startTime = new Date().toISOString();

    const endTime = new Date().toISOString();
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

export default SSR;
