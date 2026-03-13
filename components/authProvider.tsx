"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const user = useAuth();
    if (!user.user) {
        throw new Error("Unauthorized User");
    }

    return <>{user.user && children}</>;
}
