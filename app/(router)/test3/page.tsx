"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/components/step5/firebase";
import Navigation from "@/components/step4";

export default function ProtectedPage() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User) => {
            if (user) {
                setUser(user);
            } else {
                router.push("/"); // Redirect to login if not authenticated
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator while checking auth status
    }

    return (
        <div>
            <h1>Protected Content</h1>
            <p>Only visible to authenticated users.</p>
            <Navigation />
        </div>
    );
}
