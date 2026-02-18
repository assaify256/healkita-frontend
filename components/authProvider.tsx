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
    console.log(user);
    if(!user.user){
        return <p>Unauthorized User</p>
    }
    return <>{user.user && children}</>;
}
