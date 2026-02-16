"use server";

import { NextResponse } from "next/server";

export default async function SignIn(formData: FormData) {
    let host;
    const email = formData.get("email");
    const password = formData.get("password");

    if (process.env.NODE_ENV === "development") {
        host = "http://localhost:8080";
    }
    const response = await fetch(`${host}/api/auth/sign-in`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        credentials: "include",
    });

    // const responseData = response.json();
    // return responseData
}
