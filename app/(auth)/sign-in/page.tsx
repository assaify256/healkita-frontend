"use client"
import Link from "next/link";
import styles from "./styles.module.scss";
import SignIn from "@/actions/sign-in";

export default function Page() {
    return (
        <main className={styles["sign-in-main"]}>
            <form
                action={SignIn}
            >
                <h1>Sign In</h1>
                <section>
                    <label>Email</label>
                    <input type="email" name="email" />
                </section>
                <section>
                    <label>Password</label>
                    <input type="password" name="password" />
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
