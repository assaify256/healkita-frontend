//styles
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Page() {
    return (
        <main className={styles["sign-up-main"]}>
            <form>
                <h1>Create an Account</h1>
                <section>
                    <label>Email</label>
                    <input />
                </section>
                <section>
                    <label>Confirm Email</label>
                    <input />
                </section>
                <section>
                    <label>Password</label>
                    <input />
                </section>
                <section>
                    <label>Confirm Password</label>
                    <input />
                </section>
                <section>
                    <button>Sign Up</button>
                </section>
                <p>Already have an account, sign in <Link href="/sign-in">here</Link></p>
            </form>
        </main>
    );
}
