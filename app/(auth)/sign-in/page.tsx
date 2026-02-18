"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    async function submitHandler(e:any) {
        e.preventDefault()
        const response = await fetch(`http://localhost:8080/api/auth/sign-in`, {
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
        setEmail("")
        setPassword("")
    }

    return (
        <main className={styles["sign-in-main"]}>
            <form onSubmit={submitHandler}>
                <h1>Sign In</h1>
                <section>
                    <label>Email</label>
                    <input
                        value={email}
                        onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.target.value);
                        }}
                        type="email"
                        name="email"
                    />
                </section>
                <section>
                    <label>Password</label>
                    <input
                        value={password}
                        onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                        type="password"
                        name="password"
                    />
                </section>
                <section>
                    <button type="submit">Sign In</button>
                </section>
                <p>
                    Don't have account yet, sign up{" "}
                    <Link href="/sign-up">here</Link>
                </p>
            </form>
        </main>
    );
}
