"use client";

import useAuth from "@/hooks/useAuth";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const {user} = useAuth();
    return <>{children}</>;
}
