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
                );
                const data = await response.json();
                if(response.status === 401){
                    setUser("")
                    return;
                }
                setUser(data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    return { user };
}
