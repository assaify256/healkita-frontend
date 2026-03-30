"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./loader/loader"

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const {user, isLoading} = useAuth();
    if(isLoading) {
        return <Loader/>
    }
    if (!user && !isLoading) {
        router.push("/sign-in")
    }

    return <>{user && children}</>;
}
