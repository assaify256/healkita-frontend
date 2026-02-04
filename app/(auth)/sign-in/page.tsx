import Link from "next/link";
import styles from "./styles.module.scss"

export default function Page() {
    return (
        <main className={styles["sign-in-main"]}>
            <form>
                <h1>Sign In</h1>
                <section>
                    <label>Email</label>
                    <input />
                </section>
                <section>
                    <label>Password</label>
                    <input />
                </section>
                <section>
                    <button>Sign In</button>
                </section>
                <p>Don't have account yet, sign up <Link href="/sign-up">here</Link></p>
            </form>
        </main>
    );
}
