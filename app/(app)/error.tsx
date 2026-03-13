"use client";


import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Errorpage({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);
    const router = useRouter()
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => router.back()}>Go back</button>
            {/* <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button> */}
        </div>
    );
}
