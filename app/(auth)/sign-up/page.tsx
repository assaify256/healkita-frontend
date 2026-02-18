"use client";

//styles
import Link from "next/link";
import styles from "./styles.module.scss";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    function submitHandler(e:any) {
        e.preventDefault();
        if (email !== confirmEmail || password !== confirmPassword) {
            setMessage("Email or password didn't match");
            return;
        }
        const signUp = async () => {
            const response = await fetch(
                `http://localhost:8080/api/auth/sign-up`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                    credentials: "include",
                },
            );
            setEmail("");
            setPassword("");
        };
        signUp()
    }
    return (
        <main className={styles["sign-up-main"]}>
            <form onSubmit={submitHandler}>
                <h1>Create an Account</h1>
                <section>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.target.value);
                        }}
                    />
                </section>
                <section>
                    <label>Confirm Email</label>
                    <input
                        type="email"
                        name="confirmEmail"
                        value={confirmEmail}
                        onChange={(e) => {
                            e.preventDefault();
                            setConfirmEmail(e.target.value);
                            setMessage("");
                        }}
                    />
                </section>
                <section>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                    />
                </section>
                <section>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => {
                            e.preventDefault();
                            setConfirmPassword(e.target.value);
                            setMessage("");
                        }}
                    />
                </section>
                {message && (
                    <section className={styles["error-message"]}>
                        <p>{message}</p>
                    </section>
                )}
                <section>
                    <button type="submit">Sign Up</button>
                </section>
                <p>
                    Already have an account, sign in{" "}
                    <Link href="/sign-in">here</Link>
                </p>
            </form>
        </main>
    );
}
