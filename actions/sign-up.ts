"use server";

import { headers } from "next/headers";
import { NextResponse } from "next/server";

export default async function SignUp(formData: FormData) {
    let host;
    const email = formData.get("email");
    const confirmEmail = formData.get("confirmEmail");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (process.env.NODE_ENV === "development") {
        host = "http://localhost:8080";
    }
    if (email === confirmEmail && password === confirmPassword) {
        const response = await fetch(`${host}/api/auth/sign-up`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        return response.json()
    }
    
}
