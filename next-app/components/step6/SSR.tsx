"use server";

import React from "react";

const SSR = () => {
    const timestamp = new Date().toISOString();
    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-lg font-semibold">Generated at: {timestamp}</p>
        </div>
    );
};

export default SSR;
