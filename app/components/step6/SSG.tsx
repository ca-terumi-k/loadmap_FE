import { cache } from "react";

const getTimestamp = cache(async () => {
    try {
        const res = await fetch(`https://${process.env.VERCEL_URL}/api/date`, {
            cache: "force-cache",
        });

        if (!res.ok) throw new Error("Failed to fetch timestamp");
        return await res.json();
    } catch (error) {
        console.error("Failed to fetch timestamp:", error);
        return { error: true, message: "Error fetching timestamp" };
    }
});

export default async function SSG() {
    const timeNow = new Date().toISOString();
    const timestamp = await getTimestamp();

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-sm font-semibold">
                StartTime at: <br />
                <span className="text-lg">{timeNow}</span>
            </p>
            <hr />
            <p className="text-sm font-semibold">
                buildTime at: <br />
                <span className="text-lg">
                    {timestamp.error ? timestamp.message : timestamp}
                </span>
            </p>
        </div>
    );
}
