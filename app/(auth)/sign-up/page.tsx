"use client";

//styles
import Link from "next/link";
import styles from "./styles.module.scss";
import SignUp from "@/actions/sign-up";

export default function Page() {
    return (
        <main className={styles["sign-up-main"]}>
            <form action={SignUp}>
                <h1>Create an Account</h1>
                <section>
                    <label>Email</label>
                    <input type="email" name="email" />
                </section>
                <section>
                    <label>Confirm Email</label>
                    <input type="email" name="confirmEmail" />
                </section>
                <section>
                    <label>Password</label>
                    <input type="password" name="password" />
                </section>
                <section>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" />
                </section>
                <section>
                    <button type="submit">Sign Up</button>
                </section>
                <p>
                    Already have an account, sign in
                    <Link href="/sign-in">here</Link>
                </p>
            </form>
        </main>
    );
}
