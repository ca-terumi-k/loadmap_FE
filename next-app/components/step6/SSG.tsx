import { cache } from "react";

// Cached data fetching function
const getTimestamp = cache(async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/date`, {
            // next: { revalidate: 100 },
        });
        if (!res.ok) throw new Error("Failed to fetch timestamp");
        return res.json();
    } catch (error) {
        console.error("Failed to fetch timestamp:", error);
        return "Error fetching timestamp";
    }
});

export default async function SSG() {
    const timeNow = new Date().toISOString();
    const timestamp = await getTimestamp();

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-lg font-semibold">StartTime at: {timeNow}</p>
            <hr />
            <p className="text-lg font-semibold">buildTime at: {timestamp}</p>
        </div>
    );
}
