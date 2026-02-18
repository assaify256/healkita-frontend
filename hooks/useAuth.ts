"use client";

import { useEffect, useState } from "react";

export default function useAuth() {
    const [user, setUser] = useState("");
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8080/api/auth/me",
                    {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    },
                ); // Replace with your API endpoint
                // if (!response.ok) {

                //     throw new Error(`HTTP error! status: ${response.status}`);
                // }
                const data = await response.json();
                if(response.status === 401){
                    setUser("")
                    return;
                }
                setUser(data);
                // Clear any previous errors
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    return { user };
}
