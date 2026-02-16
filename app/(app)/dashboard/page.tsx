"use client"

import { useEffect, useState } from "react";

export default function Page() {
    const [user, setUser] = useState("");
        useEffect(() => {
            const fetchUser = async () => {
                try {
                    const response = await fetch(
                        "http://localhost:8080/api/auth/me",
                        {
                            method: "GET",
                            credentials: "include",
                        },
                    ); // Replace with your API endpoint
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setUser(data);
                    // Clear any previous errors
                } catch (error) {
                    console.log(error)
                }
            };
            fetchUser();
        }, []);
    return (
        // <AuthProvider>
        //     <p>Hi</p>
        // </AuthProvider>
        <p> HI</p>
    );
}
