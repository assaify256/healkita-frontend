"use client";

import { useEffect, useState } from "react";

export default function useAuth() {
    const [user, setUser] = useState("");
    const [isLoading, setIsloading] = useState(true);
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
                );
                const data = await response.json();
                if (response.status === 401) {
                    setUser("");
                    setIsloading(false)
                    return;
                }
                setUser(data);
                setIsloading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);
    return { user: user, isLoading: isLoading };
}
