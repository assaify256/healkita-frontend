// "use server";

// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export default async function getCurrentUser() {
//     const cookie = await cookies()
//     const response = await fetch("http://localhost:8080/api/auth/test-session", {
//         method: "GET",
//         credentials: "include",
//         // headers: {
//         //     "Set-Cookie" : cookie.toString()
//         // }
//     });
//     return NextResponse.json(response);
// }
